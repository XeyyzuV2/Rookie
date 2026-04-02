'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Features } from '@/components/home/features';
import { About } from '@/components/home/about';
import { CTA } from '@/components/home/cta';

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Gurotopia',
            alternateName: 'グロートピア',
            description:
              'Open-source Growtopia private server source code. Built from scratch, not another leaked fork.',
            applicationCategory: 'GameServer',
            operatingSystem: 'Linux, Windows',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Organization',
              name: 'Gurotopia Community',
              url: 'https://discord.gg/HDtQ5GPJse',
            },
            codeRepository: 'https://github.com/gurotopia',
            programmingLanguage: {
              '@type': 'ComputerLanguage',
              name: 'C++',
            },
            featureList: [
              'Lightweight as hell - Compiler + SSL + SQL under 1GB',
              'Modern C++ with clean code architecture',
              'Built from scratch, not based on leaked servers',
              "Unique compiler that doesn't need VS2022/MSBuild",
            ],
          }),
        }}
      />
      <Navbar />

      <main>
        {/* @note hero section */}
        <section className="relative overflow-hidden">
          <div className="mx-auto w-[95%] pt-[2.5vw]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/guro/guro_hero_bg.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative px-6 py-32 lg:px-0 lg:py-64">
                <div className="mx-auto w-[90%] text-center lg:w-[75%] lg:text-left">
                  <div className="relative inline-block">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                      Gurotopia
                    </h1>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-md font-bold text-white/80 sm:-right-2 sm:bottom-auto sm:left-auto sm:top-0 sm:translate-x-full sm:text-2xl md:text-3xl lg:text-4xl">
                      ( グロートピア )
                    </span>
                  </div>
                  <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg lg:mx-0 lg:text-xl">
                    Open-source Growtopia private server source code. Built from
                    scratch, not another leaked fork.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start lg:gap-4">
                    <Link
                      href="/docs"
                      className="rounded-lg border-2 border-white bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-white/90 sm:px-6 sm:py-3 sm:text-base"
                    >
                      Documentation →
                    </Link>
                    <Link
                      href="#features"
                      className="rounded-lg border-2 border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:px-6 sm:py-3 sm:text-base"
                    >
                      What's inside
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Features />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
