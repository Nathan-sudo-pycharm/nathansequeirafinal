import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nathan Ivor Sequeira — Full-Stack Developer & AI Engineer',
  description:
    'Full-Stack Developer specializing in AI integration, LLM pipelines, FastAPI, Next.js, and distributed systems. Open to remote and Germany-based opportunities.',
  keywords: [
    'Full-Stack Developer', 'AI Engineer', 'LLM Integration', 'FastAPI',
    'Next.js', 'Python', 'LangChain', 'RAG', 'Qdrant', 'Docker',
    'Remote Developer', 'Germany relocation',
  ],
  openGraph: {
    title: 'Nathan Ivor Sequeira — Full-Stack Developer & AI Engineer',
    description: 'Full-Stack Developer specializing in AI integration and LLM pipelines.',
    url: 'https://nathansequeirafinal.vercel.app',
    siteName: 'Nathan Ivor Sequeira',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body> <GoogleAnalytics />    <Analytics />
   {children}</body>
    </html>
  )
}