import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { baseOptions } from '../layout.config';
import { source } from '@/lib/source';
import { RootProvider } from 'fumadocs-ui/provider/next';
import 'fumadocs-ui/style.css';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Documentation - Gurotopia',
    template: '%s - Gurotopia Docs',
  },
  description:
    'Complete documentation for Gurotopia - Learn how to install, configure, and run your own Growtopia private server with our comprehensive guides.',
  keywords: [
    'Gurotopia documentation',
    'Growtopia private server guide',
    'GTPS tutorial',
    'Growtopia server setup',
    'private server installation',
    'Gurotopia setup guide',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gurotopia.yoruakio.xyz/docs',
    title: 'Documentation - Gurotopia',
    description:
      'Complete documentation for Gurotopia - Learn how to install, configure, and run your own Growtopia private server.',
    siteName: 'Gurotopia Docs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation - Gurotopia',
    description:
      'Complete documentation for Gurotopia - Learn how to install, configure, and run your own Growtopia private server.',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{
        enabled: true,
        defaultTheme: 'dark',
        enableSystem: false,
      }}
    >
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
