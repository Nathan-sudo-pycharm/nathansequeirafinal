'use client'

import { useEffect, useState } from 'react'

type Props = {
  lang: 'en' | 'de'
  setLang: (l: 'en' | 'de') => void
}

export default function Navbar({ lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links =
    lang === 'en'
      ? [
          { label: 'WORK', href: '#work' },
          { label: 'ABOUT', href: '#about' },
          { label: 'EXPERIENCE', href: '#experience' },
          { label: 'CONTACT', href: '#contact' },
        ]
      : [
          { label: 'ARBEIT', href: '#work' },
          { label: 'ÜBER MICH', href: '#about' },
          { label: 'ERFAHRUNG', href: '#experience' },
          { label: 'KONTAKT', href: '#contact' },
        ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #2A2A2A' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-syne font-bold text-xl text-[#F0F0F0] tracking-tight">
          N.
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono-jet text-xs tracking-widest text-[#F0F0F0] hover:text-[#E8FF47] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">

          {/* Download CV — hidden on mobile */}
          <a
            href="/cv/Nathan_Ivor_Sequeira_CV.pdf"
            download
            className="hidden md:flex items-center gap-2 font-mono-jet text-xs tracking-widest text-[#F0F0F0] border border-[#2A2A2A] px-3 py-1.5 hover:border-[#E8FF47] hover:text-[#E8FF47] transition-all duration-200"
          >
            ↓ DOWNLOAD CV
          </a>

          {/* Language switcher */}
          <div className="flex items-center gap-2 font-mono-jet text-xs tracking-widest">
            <button
              onClick={() => setLang('en')}
              className={`transition-colors duration-200 ${
                lang === 'en' ? 'text-[#E8FF47]' : 'text-[#666666] hover:text-[#F0F0F0]'
              }`}
            >
              EN
            </button>
            <span className="text-[#2A2A2A]">/</span>
            <button
              onClick={() => setLang('de')}
              className={`transition-colors duration-200 ${
                lang === 'de' ? 'text-[#E8FF47]' : 'text-[#666666] hover:text-[#F0F0F0]'
              }`}
            >
              DE
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
