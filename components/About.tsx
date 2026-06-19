'use client'

import { about, stackPills } from '@/data/index'
import type { Lang } from '@/data/index'

type Props = { lang: Lang }

export default function About({ lang }: Props) {
  return (
    <section id="about" className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto">

      {/* Eyebrow */}
      <span className="font-mono-jet text-xs tracking-[0.25em] text-[#666666]">
        {lang === 'en' ? 'ABOUT' : 'UBER MICH'}
      </span>

      {/* Bio paragraphs */}
      <div className="mt-10 max-w-3xl">
        <p
          className="text-[#F0F0F0] leading-relaxed mb-8"
          style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
        >
          {about.para1[lang]}
        </p>
        <p
          className="text-[#A0A0A0] leading-relaxed"
          style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}
        >
          {about.para2[lang]}
        </p>
      </div>

      {/* Stack pills */}
      <div className="mt-16">
        <span className="font-mono-jet text-xs tracking-[0.25em] text-[#666666] block mb-6">
          {about.stackLabel[lang]}
        </span>
        <div className="flex flex-wrap gap-2">
          {stackPills.map((pill) => (
            <span
              key={pill}
              className="font-mono-jet text-xs tracking-wider text-[#F0F0F0] border border-[#2A2A2A] px-3 py-1.5 hover:border-[#E8FF47] hover:text-[#E8FF47] transition-all duration-200"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}