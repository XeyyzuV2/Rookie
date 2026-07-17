import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Image
          src="https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/guro/logo.png"
          width={32}
          height={32}
          alt="Gurotopia"
        />
        <span>Gurotopia</span>
      </div>
    ),
  },
  links: [
    {
      text: 'Overview',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Changelog',
      url: '/docs/changelog',
      active: 'nested-url',
    },
    {
      text: 'Architecture',
      url: '/docs/architecture',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/XeyyzuV2',
};
