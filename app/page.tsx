'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'de'>('en')

  return (
    <main>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Work lang={lang} />
      <About lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} setLang={setLang} />
    </main>
  )
}