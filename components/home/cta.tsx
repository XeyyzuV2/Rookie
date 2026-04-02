"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="px-6 py-32 lg:px-8">
      <div className="mx-auto w-[90%] lg:w-[75%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="h-full w-full">
              <defs>
                <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 lg:p-16">
              <span className="mb-6 inline-block font-mono text-xs tracking-widest text-muted-foreground">
                [003] GET STARTED
              </span>
              <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Ready to build?
              </h2>
              <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Dive into the Gurotopia source code and start building your own Growtopia private
                server. Join our Discord community for support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/gurotopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
                >
                  <span>View on GitHub</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://discord.gg/HDtQ5GPJse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium transition-all hover:bg-muted"
                >
                  Join Discord
                </Link>
              </div>
            </div>

            <div className="hidden border-l border-border lg:block">
              <iframe
                title="gurotopia discord community"
                src="https://ptb.discord.com/widget?id=1059061437655429160&theme=dark"
                width="100%"
                height="100%"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="min-h-[420px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
