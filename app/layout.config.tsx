import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <span className="font-bold tracking-tight">xeyyzu.dev</span>
      </div>
    ),
  },
  links: [
    {
      text: 'Projects',
      url: '/projects',
      active: 'nested-url',
    },
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/XeyyzuV2',
};
