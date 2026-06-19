'use client'

import { experience } from '@/data/index'
import type { Lang } from '@/data/index'

type Props = { lang: Lang }

export default function Experience({ lang }: Props) {
  return (
    <section id="experience" className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto">

      {/* Eyebrow */}
      <span className="font-mono-jet text-xs tracking-[0.25em] text-[#666666]">
        {lang === 'en' ? 'EXPERIENCE' : 'ERFAHRUNG'}
      </span>

      {/* Company row */}
      <div className="mt-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
        <h2 className="font-syne font-bold text-[#F0F0F0]" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
          UnifyCX
        </h2>
        <span className="font-mono-jet text-xs tracking-widest text-[#666666]">
          {experience.role[lang]}
        </span>
        <span className="font-mono-jet text-xs tracking-widest text-[#666666] md:ml-auto">
          {experience.duration[lang]}
        </span>
      </div>

      {/* Bullets */}
      <div className="mt-8 flex flex-col gap-4 max-w-2xl">
        {experience.bullets[lang].map((bullet, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="font-mono-jet text-xs text-[#E8FF47] shrink-0 mt-1">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
              {bullet}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}