import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import {
  WebsiteStructuredData,
  OrganizationStructuredData,
} from "@/components/seo/structured-data";
import "fumadocs-ui/style.css";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Xeyyzu — Portfolio & Projects",
    template: "%s | Xeyyzu",
  },
  description:
    "Portfolio of Xeyyzu — open-source projects, private servers, modding tools, and collaborative development. Explore Gurotopia, Rookie, and more.",
  keywords: [
    "Xeyyzu",
    "portfolio",
    "developer",
    "open source",
    "Growtopia",
    "private server",
    "Gurotopia",
    "C++",
    "game server",
    "modding",
    "growtopia ps",
  ],
  authors: [
    {
      name: "Xeyyzu",
      url: "https://xeyyzu.dev",
    },
  ],
  creator: "Xeyyzu",
  publisher: "Xeyyzu",
  metadataBase: new URL("https://xeyyzu.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xeyyzu.dev",
    title: "Xeyyzu — Portfolio & Projects",
    description:
      "Portfolio of Xeyyzu — open-source projects, private servers, modding tools, and collaborative development.",
    siteName: "Xeyyzu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xeyyzu — Portfolio & Projects",
    description:
      "Portfolio of Xeyyzu — open-source projects, private servers, modding tools, and collaborative development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <WebsiteStructuredData />
        <OrganizationStructuredData />
      </head>
      <body className={`${bricolage.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="theme"
          enableSystem={false}
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
