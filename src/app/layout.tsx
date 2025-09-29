import type { Metadata } from "next";
import { Inter, Manrope, Cinzel } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://igacmun-session-3.netlify.app' : 'http://localhost:3000'),
  title: "IGACMUN Session III - Game of Thorns: Green Dominion",
  description: "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence. Join us for IGACMUN Session III.",
  keywords: ["MUN", "Model United Nations", "IGAC", "Conference", "Diplomacy", "Youth", "Bangladesh"],
  authors: [{ name: "IGAC" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "IGACMUN Session III - Game of Thorns: Green Dominion",
    description: "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence.",
    type: "website",
    locale: "en_US",
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
    title: "IGACMUN Session III - Game of Thorns: Green Dominion",
    description: "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence.",
    images: ["/logo.png"],
  },
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
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
