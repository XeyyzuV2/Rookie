import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents({})} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

// @note generateMetadata creates SEO metadata for each docs page
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const url = `https://gurotopia.yoruakio.xyz/docs/${params.slug?.join('/') || ''}`;
  const title = page.data.title;
  const description = page.data.description || 'Gurotopia documentation - Learn how to set up and configure your Growtopia private server.';

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: 'Gurotopia Docs',
      images: [
        {
          url: 'https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/guro/og_image.png',
          width: 1200,
          height: 630,
          alt: `${title} - Gurotopia Documentation`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        'https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/guro/og_image.png',
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
