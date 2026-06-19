'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/index'
import type { Lang } from '@/data/index'

type Props = { lang: Lang }

export default function Work({ lang }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => setExpanded(expanded === id ? null : id)

  const sectionLabel = lang === 'en' ? 'SELECTED WORK' : 'AUSGEWÄHLTE ARBEITEN'
  const heading = lang === 'en' ? 'Things I have built.' : 'Was ich gebaut habe.'

  return (
    <section id="work" className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-[#2A2A2A]">

      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-20 gap-4">
        <span className="font-mono-jet text-xs tracking-[0.25em] text-[#666666]">
          {sectionLabel}
        </span>
        <h2
          className="font-syne font-bold text-[#F0F0F0]"
          style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
        >
          {heading}
        </h2>
      </div>

      {/* Project list */}
      <div className="flex flex-col">
        {projects.map((project) => (
          <div key={project.id}>
            {/* Divider */}
            <div className="h-px bg-[#2A2A2A] w-full" />

            {/* Row */}
            <div
              className="flex items-start gap-6 md:gap-10 py-8 cursor-pointer group"
              onClick={() => toggle(project.id)}
            >
              {/* Index number */}
              <span className="font-mono-jet text-xs text-[#666666] mt-1 w-6 shrink-0">
                {project.id}
              </span>

              {/* Project name + expanded content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3
                    className="font-syne font-semibold text-[#F0F0F0] group-hover:text-[#E8FF47] transition-colors duration-200"
                    style={{ fontSize: 'clamp(22px, 3vw, 40px)' }}
                  >
                    {project.name}
                  </h3>
                  {/* Arrow */}
                  <span
                    className="text-[#666666] group-hover:text-[#E8FF47] transition-all duration-200 text-lg ml-4 shrink-0"
                    style={{
                      transform: expanded === project.id ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                    }}
                  >
                    ↗
                  </span>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2">
                        {/* Description */}
                        <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
                          {project.description[lang]}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono-jet text-[10px] tracking-widest text-[#F0F0F0] border border-[#2A2A2A] px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-6">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono-jet text-xs tracking-widest text-[#666666] hover:text-[#E8FF47] transition-colors duration-200"
                            >
                              GITHUB ↗
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono-jet text-xs tracking-widest text-[#666666] hover:text-[#E8FF47] transition-colors duration-200"
                            >
                              LIVE ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}

        {/* Final divider */}
        <div className="h-px bg-[#2A2A2A] w-full" />
      </div>
    </section>
  )
}
