"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { OverviewContainer } from "@/components/layout/overview-container";

function useGitHubStars() {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    fetch("https://api.github.com/repos/gurotopia/gurotopia")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.stargazers_count === "number") setStars(d.stargazers_count);
      })
      .catch(() => {});
  }, []);
  return stars;
}

function CopyIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// @note inline code token
function Token({ children, color }: { children: React.ReactNode; color: string }) {
  return <span style={{ color }}>{children}</span>;
}

// @note code block with copy button, mimics boneyard dark code blocks
function CodeBlock({ children, copyText, lang }: { children: React.ReactNode; copyText: string; lang?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="relative rounded-lg border border-stone-200 dark:border-white/[0.08] bg-[#1a1a1a] dark:bg-white/[0.02] overflow-hidden">
      {lang && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.05] bg-white/[0.02]">
          <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider">{lang}</span>
        </div>
      )}
      <div className="p-4 font-mono text-[13px] leading-relaxed overflow-x-auto pr-10">
        {children}
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 text-stone-500 hover:text-stone-300 transition-all"
      >
        {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
      </button>
    </div>
  );
}

// @note step number badge
function StepBadge({ n }: { n: number }) {
  return (
    <div className="w-5 h-5 rounded-full bg-stone-800 dark:bg-white/5 border border-transparent dark:border-white/10 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
      {n}
    </div>
  );
}

// @note feature card for the why section
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-lg border border-stone-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] hover:bg-stone-50 dark:hover:bg-white/[0.04] p-4 transition-colors">
      <div className="w-7 h-7 rounded-md bg-stone-100 dark:bg-white/[0.05] flex items-center justify-center text-stone-500 dark:text-white/40 mb-3 transition-colors">
        {icon}
      </div>
      <p className="text-[13px] font-semibold text-[#1c1917] dark:text-white/90 mb-1 transition-colors">{title}</p>
      <p className="text-[12px] text-[#a8a29e] dark:text-white/45 leading-relaxed transition-colors">{description}</p>
    </div>
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
  const [cmdCopied, setCmdCopied] = useState(false);
  const stars = useGitHubStars();

  const handleCmdCopy = () => {
    navigator.clipboard.writeText("git clone https://github.com/gurotopia/gurotopia").then(() => {
      setCmdCopied(true);
      setTimeout(() => setCmdCopied(false), 1500);
    });
  };

  return (
    <OverviewContainer>
      <div className="max-w-[720px] px-6 pt-14 pb-12 space-y-10 overflow-hidden">

      {/* hero */}
      <motion.div className="space-y-6" initial="hidden" animate="show">
        <motion.div custom={0} variants={fadeUp}>
          <h1 className="text-[32px] leading-[1.15] font-bold tracking-tight text-[#1c1917] dark:text-white transition-colors">
            Gurotopia Docs.
            <br />
            <span className="text-[#a8a29e] dark:text-white/45">Built from scratch.</span>
          </h1>
        </motion.div>

        <motion.div custom={1} variants={fadeUp} className="flex items-center gap-2.5 flex-wrap">
          {/* clone pill */}
          <button
            onClick={handleCmdCopy}
            className="group flex items-center h-9 rounded-lg bg-[#1c1917] dark:bg-white/[0.06] dark:border dark:border-white/[0.09] text-[13px] font-[family-name:var(--font-mono)] text-[#e7e5e4] dark:text-white/70 hover:bg-[#292524] dark:hover:bg-white/[0.09] transition-colors overflow-hidden"
          >
            <span className="flex items-center gap-2 px-3.5">
              <span className="text-[#78716c] dark:text-white/30">$</span>
              git clone github.com/gurotopia/gurotopia
            </span>
            <span className="flex items-center justify-center w-9 h-9 border-l border-white/10 dark:border-white/[0.08] text-[#78716c] dark:text-white/30 group-hover:text-[#a8a29e] dark:group-hover:text-white/55 transition-colors">
              {cmdCopied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
            </span>
          </button>

          {/* github */}
          <a
            href="https://github.com/gurotopia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-9 px-3.5 rounded-lg border border-[#e7e5e4] dark:border-white/[0.09] text-[13px] text-[#57534e] dark:text-white/50 hover:border-[#d6d3d1] dark:hover:border-white/20 hover:text-[#1c1917] dark:hover:text-white/80 transition-all"
          >
            <GithubIcon size={16} />
            GitHub
            {stars !== null && stars > 0 && (
              <span className="flex items-center gap-1 text-[12px] text-[#a8a29e] dark:text-white/30 ml-0.5 transition-colors">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-[#d6d3d1] dark:text-white/30">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {stars}
              </span>
            )}
          </a>
        </motion.div>

        <motion.div custom={2} variants={fadeUp} className="space-y-3 text-[15px] leading-relaxed text-[#78716c] dark:text-white/45 transition-colors">
          <p>
            <strong className="text-[#1c1917] dark:text-white/90 pr-1 transition-colors">Gurotopia</strong> is an open-source Growtopia
            Private Server written in modern C/C++. Not another leaked fork — clean code,
            a unique compiler, and active community maintenance.
          </p>
          <p>
            These docs cover everything: setting up on Windows or Linux, server configuration,
            and troubleshooting common build issues.
          </p>
        </motion.div>
      </motion.div>

      {/* why gurotopia */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[15px] font-semibold text-[#1c1917] dark:text-white transition-colors whitespace-nowrap">Why Gurotopia</span>
          <div className="h-px flex-1 bg-[#e7e5e4] dark:bg-white/[0.06] transition-colors" />
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FeatureCard
            icon={<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Lightweight"
            description="Compiler + SSL + SQL under 1GB. No bloated deps."
          />
          <FeatureCard
            icon={<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
            title="Modern C++"
            description="Clean architecture, readable code, proper abstractions."
          />
          <FeatureCard
            icon={<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            title="From Scratch"
            description="Not based on leaked code. Genuinely original work."
          />
          <FeatureCard
            icon={<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" /></svg>}
            title="Cross-Platform"
            description="Windows 10/11 and major Linux distros, out of the box."
          />
        </div>
      </motion.div>

      {/* next steps */}
      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show">
        <p className="text-[14px] text-[#78716c] dark:text-white/45 transition-colors">
          Ready to get started? Pick your platform:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/installation/windows"
            className="flex items-center gap-2 h-9 px-4 rounded-lg border border-[#e7e5e4] dark:border-white/[0.09] text-[13px] text-[#57534e] dark:text-white/70 hover:border-[#d6d3d1] dark:hover:border-white/20 hover:text-[#1c1917] dark:hover:text-white transition-colors"
          >
            Windows →
          </Link>
          <Link
            href="/installation/linux"
            className="flex items-center gap-2 h-9 px-4 rounded-lg border border-[#e7e5e4] dark:border-white/[0.09] text-[13px] text-[#57534e] dark:text-white/70 hover:border-[#d6d3d1] dark:hover:border-white/20 hover:text-[#1c1917] dark:hover:text-white transition-colors"
          >
            Linux →
          </Link>
          <Link
            href="/introduction"
            className="flex items-center gap-2 h-9 px-4 rounded-lg bg-[#1c1917] dark:bg-white/[0.06] text-[13px] text-[#e7e5e4] dark:text-white hover:bg-[#292524] dark:hover:bg-white/[0.09] transition-colors"
          >
            Full Docs →
          </Link>
        </div>
      </motion.div>
    </div>
    </OverviewContainer>
  );
}
