"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { OverviewContainer } from "@/components/layout/overview-container";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ title, description, href, tags }: { title: string; description: string; href: string; tags: string[] }) {
  return (
    <Link href={href} className="block group">
      <div className="rounded-lg border border-stone-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] hover:bg-stone-50 dark:hover:bg-white/[0.04] p-5 transition-all hover:border-stone-300 dark:hover:border-white/[0.15]">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[15px] font-semibold text-[#1c1917] dark:text-white/90 group-hover:text-[#57534e] dark:group-hover:text-white transition-colors">{title}</h3>
          <ExternalIcon size={14} />
        </div>
        <p className="text-[13px] text-[#a8a29e] dark:text-white/45 leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/[0.05] text-[11px] font-medium text-[#78716c] dark:text-white/40">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function OverviewPage() {
  return (
    <OverviewContainer>
      <div className="max-w-[720px] px-6 pt-20 pb-12 space-y-12 overflow-hidden">

        {/* hero */}
        <motion.div className="space-y-5" initial="hidden" animate="show">
          <motion.div custom={0} variants={fadeUp}>
            <span className="inline-block px-3 py-1 rounded-full bg-stone-100 dark:bg-white/[0.05] text-[12px] font-medium text-[#78716c] dark:text-white/50 mb-4">
              Hello, I'm
            </span>
            <h1 className="text-[40px] leading-[1.1] font-bold tracking-tight text-[#1c1917] dark:text-white transition-colors">
              Xeyyzu
            </h1>
            <p className="text-[18px] text-[#a8a29e] dark:text-white/45 mt-2">
              Developer, modder, open-source enthusiast.
              Building tools and servers for the Growtopia community.
            </p>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} className="flex items-center gap-2.5 flex-wrap">
            <a
              href="https://github.com/XeyyzuV2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 h-9 px-3.5 rounded-lg bg-[#1c1917] dark:bg-white/[0.06] border border-transparent dark:border-white/[0.09] text-[13px] text-[#e7e5e4] dark:text-white/70 hover:bg-[#292524] dark:hover:bg-white/[0.09] transition-all"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <Link
              href="/docs"
              className="flex items-center gap-2 h-9 px-3.5 rounded-lg border border-[#e7e5e4] dark:border-white/[0.09] text-[13px] text-[#57534e] dark:text-white/50 hover:border-[#d6d3d1] dark:hover:border-white/20 hover:text-[#1c1917] dark:hover:text-white/80 transition-all"
            >
              Explore Docs →
            </Link>
          </motion.div>
        </motion.div>

        {/* projects */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[15px] font-semibold text-[#1c1917] dark:text-white transition-colors whitespace-nowrap">Projects</span>
            <div className="h-px flex-1 bg-[#e7e5e4] dark:bg-white/[0.06] transition-colors" />
          </div>

          <div className="grid gap-3">
            <ProjectCard
              title="Gurotopia"
              description="A lightweight Growtopia Private Server written in modern C/C++. Lightweight, maintainable, open-source."
              href="/docs/gurotopia"
              tags={["C++", "ENet", "MariaDB", "Game Server"]}
            />
            <ProjectCard
              title="Rookie"
              description="Landing page and documentation website for the Gurotopia project. Built with Next.js, Fumadocs, and Tailwind CSS."
              href="https://github.com/XeyyzuV2/Rookie"
              tags={["TypeScript", "Next.js", "MDX", "Documentation"]}
            />
          </div>
        </motion.div>

        {/* contact */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[15px] font-semibold text-[#1c1917] dark:text-white transition-colors whitespace-nowrap">Connect</span>
            <div className="h-px flex-1 bg-[#e7e5e4] dark:bg-white/[0.06] transition-colors" />
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://github.com/XeyyzuV2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 h-9 px-4 rounded-lg border border-[#e7e5e4] dark:border-white/[0.09] text-[13px] text-[#57534e] dark:text-white/70 hover:border-[#d6d3d1] dark:hover:border-white/20 hover:text-[#1c1917] dark:hover:text-white transition-colors"
            >
              <GithubIcon size={15} />
              @XeyyzuV2
            </a>
          </div>
        </motion.div>

      </div>
    </OverviewContainer>
  );
}
