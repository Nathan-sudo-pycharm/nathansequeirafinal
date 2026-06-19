'use client'

import { footer } from '@/data/index'
import type { Lang } from '@/data/index'

type Props = {
  lang: Lang
  setLang: (l: Lang) => void
}

export default function Footer({ lang, setLang }: Props) {
  return (
    <footer className="w-full border-t border-[#2A2A2A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">

        {/* Copyright */}
        <span className="font-mono-jet text-xs text-[#666666]">
          {footer.copy}
        </span>

        {/* Language switcher */}
        <div className="flex items-center gap-3 font-mono-jet text-xs tracking-widest">
          <button
            onClick={() => setLang('en')}
            className={`transition-colors duration-200 ${
              lang === 'en' ? 'text-[#E8FF47]' : 'text-[#666666] hover:text-[#F0F0F0]'
            }`}
          >
            EN
          </button>
          <span className="text-[#2A2A2A]">|</span>
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
    </footer>
  )
}