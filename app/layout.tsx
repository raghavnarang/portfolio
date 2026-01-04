import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SEO, PROFILE } from "@/lib/data";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: {
    default: SEO.title,
    template: `%s | ${PROFILE.name}`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: PROFILE.name, url: SEO.url }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.url,
    title: SEO.title,
    description: SEO.description,
    siteName: PROFILE.name,
    images: [
      {
        url: SEO.image,
        width: 400,
        height: 400,
        alt: PROFILE.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.image],
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
  alternates: {
    canonical: SEO.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SEO.url}/#person`,
      name: PROFILE.name,
      jobTitle: PROFILE.title,
      description: SEO.description,
      url: SEO.url,
      image: `${SEO.url}${PROFILE.avatar}`,
      email: `mailto:${PROFILE.email}`,
      sameAs: [PROFILE.github, PROFILE.linkedin],
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SEO.url}/#website`,
      url: SEO.url,
      name: PROFILE.name,
      description: SEO.description,
      author: { "@id": `${SEO.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SEO.url}/#profilepage`,
      url: SEO.url,
      name: SEO.title,
      mainEntity: { "@id": `${SEO.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-2xl mb-40 flex flex-col mx-4 mt-8 sm:mt-12 lg:mx-auto`}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 sm:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
