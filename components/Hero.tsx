'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Wireframe } from '@react-three/drei'
import * as THREE from 'three'

const roles = {
  en: ['Full-Stack Developer', 'AI Integration Engineer', 'LLM Pipeline Architect', 'Open to Remote & Germany'],
  de: ['Full-Stack-Entwickler', 'KI-Integrations-Ingenieur', 'LLM-Pipeline-Architekt', 'Offen für Remote & Deutschland'],
}

function TorusKnot({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const t = useRef(0)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    t.current += delta
    // Breathing — change 0.04 to increase/decrease the scale pulse intensity
    const scale = 1 + Math.sin(t.current * 0.8) * 0.04
    meshRef.current.scale.setScalar(scale)
    // Mouse parallax — change 0.3 to increase/decrease how much it follows the cursor
    meshRef.current.rotation.x += (mouse.current[1] * 0.3 - meshRef.current.rotation.x) * 0.05
    meshRef.current.rotation.y += (mouse.current[0] * 0.3 - meshRef.current.rotation.y) * 0.05
    // Auto-rotate speed — increase 0.15 to spin faster, decrease to spin slower
    meshRef.current.rotation.y += delta * 0.15
  })

  return (
    <mesh ref={meshRef}>
      {/*
        TorusKnot size controls:
        args={[radius, tube, tubularSegments, radialSegments, p, q]}
        - radius (1.2)         → overall size of the knot. increase = bigger
        - tube (0.38)          → thickness of the tube. increase = fatter
        - tubularSegments(200) → smoothness along the length. keep high (100-300)
        - radialSegments (32)  → smoothness of the tube circle. keep 16-32
        - p (2), q (3)         → knot shape. try (2,3) (3,4) (3,5) (2,5) for different knots
      */}
      <torusKnotGeometry args={[1.2, 0.38, 200, 32, 2, 3]} />
      {/*
        Wireframe color:
        - change #E8FF47 to any hex color you want
        - wireframe={true} keeps the mesh lines only (no fill)
        - alternatives: meshStandardMaterial (needs lights) or meshPhongMaterial
      */}
      <meshBasicMaterial color="#E8FF47" wireframe />
    </mesh>
  )
}

function Scene({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <TorusKnot mouse={mouse} />
    </>
  )
}

type Props = { lang: 'en' | 'de' }

export default function Hero({ lang }: Props) {
  const mouse = useRef<[number, number]>([0, 0])
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Mouse tracker
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ]
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Typewriter
  useEffect(() => {
    const currentRole = roles[lang][roleIndex]
    let i = 0
    setDisplayed('')
    setTyping(true)

    const typeInterval = setInterval(() => {
      i++
      setDisplayed(currentRole.slice(0, i))
      if (i >= currentRole.length) {
        clearInterval(typeInterval)
        setTyping(false)
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles[lang].length)
        }, 2000)
      }
    }, 60)

    return () => clearInterval(typeInterval)
  }, [roleIndex, lang])

  const location = lang === 'en' ? 'MANGALURU, IN → ANYWHERE' : 'MANGALURU, IN → ÜBERALL'
  const scroll = lang === 'en' ? 'SCROLL' : 'SCROLLEN'

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center"
      onMouseMove={(e) => {
        mouse.current = [
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1,
        ]
      }}
    >
      {/* Three.js canvas — right half desktop, full bg mobile */}
      <div className="absolute inset-0 md:left-[45%] z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <Scene mouse={mouse} />
          </Suspense>
        </Canvas>
      </div>

      {/* Mobile: dim the canvas so text is readable */}
      <div className="absolute inset-0 bg-[#080808]/70 md:hidden z-[1]" />

      {/* Text content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        {/* Location eyebrow */}
        <p className="font-mono-jet text-xs tracking-[0.25em] text-[#666666] mb-6">
          {location}
        </p>

        {/* Name */}
        <h1 className="font-syne leading-none mb-2" style={{ fontSize: 'clamp(64px, 10vw, 160px)' }}>
          <span className="font-bold text-[#F0F0F0]">Nathan</span>
        </h1>
        <h1
          className="font-syne font-semibold leading-none mb-10"
          style={{ fontSize: 'clamp(48px, 7vw, 112px)', color: '#A0A0A0' }}
        >
          Ivor Sequeira
        </h1>

        {/* Typewriter */}
        <div className="flex items-center gap-2 font-mono-jet text-sm md:text-base text-[#F0F0F0]">
          <span className="text-[#E8FF47]">&gt;</span>
          <span>{displayed}</span>
          <span
            className="inline-block w-[2px] h-[1.1em] bg-[#E8FF47]"
            style={{ animation: typing ? 'none' : 'blink 1s step-end infinite' }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono-jet text-[10px] tracking-[0.3em] text-[#666666]">{scroll}</span>
        <span className="text-[#666666] animate-bounce">↓</span>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}