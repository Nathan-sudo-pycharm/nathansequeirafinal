'use client'

import { useState } from 'react'
import { contact } from '@/data/index'
import type { Lang } from '@/data/index'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

type Props = { lang: Lang }

export default function Contact({ lang }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="w-full py-40 px-6 md:px-12 max-w-[1400px] mx-auto text-center">

      {/* Big heading */}
      <h2
        className="font-syne font-bold text-[#F0F0F0] leading-tight mb-10"
        style={{ fontSize: 'clamp(40px, 8vw, 120px)' }}
      >
        {contact.heading[lang]}
      </h2>

      {/* Email — click to copy */}
      <button
        onClick={handleCopyEmail}
        className="font-syne text-[#E8FF47] hover:opacity-70 transition-opacity duration-200 block mx-auto mb-3 cursor-pointer"
        style={{ fontSize: 'clamp(16px, 2vw, 24px)' }}
      >
        {contact.email}
      </button>

      {/* Copy confirmation */}
      <p
        className="font-mono-jet text-xs tracking-widest mb-10 transition-opacity duration-200"
        style={{ color: '#E8FF47', opacity: copied ? 1 : 0 }}
      >
        {lang === 'en' ? 'COPIED TO CLIPBOARD' : 'IN ZWISCHENABLAGE KOPIERT'}
      </p>

      {/* Social icons */}
      <div className="flex items-center justify-center gap-8 mb-10">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#666666] hover:text-[#E8FF47] transition-colors duration-200"
        >
          <FiGithub size={22} />
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#666666] hover:text-[#E8FF47] transition-colors duration-200"
        >
          <FiLinkedin size={22} />
        </a>
      </div>

      {/* Download CV button */}
      <a
        href="/cv/Nathan_Ivor_Sequeira_CV.pdf"
        download
        className="inline-flex items-center gap-2 font-mono-jet text-xs tracking-widest text-[#F0F0F0] border border-[#F0F0F0] px-6 py-3 hover:border-[#E8FF47] hover:text-[#E8FF47] transition-all duration-200 mb-10"
      >
        ↓ {contact.cvLabel[lang]}
      </a>

      {/* Availability */}
      <p className="font-mono-jet text-[10px] tracking-[0.2em] text-[#666666]">
        {contact.availability[lang]}
      </p>
    </section>
  )
}
