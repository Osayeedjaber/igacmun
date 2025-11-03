
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Manrope, Cinzel } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { appConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope", 
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.site?.url || 'http://localhost:3000'),
  title: {
    default: "IGACMUN Session III",
    template: "%s | IGACMUN Session III",
  },
  description: "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence. Join us for IGACMUN Session III.",
  keywords: ["MUN", "Model United Nations", "IGAC", "Conference", "Diplomacy", "Youth", "Bangladesh"],
  authors: [{ name: "IGAC" }],
  applicationName: "IGACMUN",
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "IGACMUN",
  },
  alternates: {
    canonical: appConfig.site?.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "IGACMUN Session III",
    description: "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence.",
    type: "website",
    locale: "en_US",
    url: appConfig.site?.url,
    siteName: "IGACMUN",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "IGACMUN Session III Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IGACMUN Session III",
    description: "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence.",
    images: ["/logo.png"],
    site: "@igacmun",
    creator: "@igacmun",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f17" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} ${cinzel.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Script id="ld-json-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "International Global Affairs Council",
            "url": appConfig.site?.url,
            "logo": "/logo.png",
            "sameAs": [
              appConfig.social?.instagram,
              appConfig.social?.facebook
            ].filter(Boolean)
          })}
        </Script>
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IGACMUN Session III",
            "url": appConfig.site?.url,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${appConfig.site?.url}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
