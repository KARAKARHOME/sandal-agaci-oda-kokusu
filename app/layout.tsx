import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandalagaciodakokusu.com.tr"),
  title: {
    default: "Sandal Ağacı Oda Kokusu 100ml | KARAKAR HOME",
    template: "%s | Sandal Ağacı Oda Kokusu"
  },
  description: "Sandal ağacı esansıyla hazırlanan 100ml çubuklu oda kokusu. Doğal, kalıcı ve ferahlatıcı koku deneyimi. Pendik İstanbul'dan tüm Türkiye'ye hızlı kargo.",
  keywords: ["sandal ağacı oda kokusu", "çubuklu oda kokusu", "sandal ağacı", "oda kokusu 100ml", "doğal oda kokusu", "KARAKAR HOME", "Pendik oda kokusu"],
  authors: [{ name: "KARAKAR HOME" }],
  creator: "KARAKAR HOME",
  publisher: "KARAKAR HOME",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sandalagaciodakokusu.com.tr",
    siteName: "Sandal Ağacı Oda Kokusu",
    title: "Sandal Ağacı Oda Kokusu 100ml | KARAKAR HOME",
    description: "Sandal ağacı esansıyla hazırlanan 100ml çubuklu oda kokusu. Doğal, kalıcı ve ferahlatıcı koku deneyimi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sandal Ağacı Oda Kokusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@karakarhome",
    creator: "@karakarhome",
    title: "Sandal Ağacı Oda Kokusu 100ml | KARAKAR HOME",
    description: "Sandal ağacı esansıyla hazırlanan 100ml çubuklu oda kokusu. Doğal, kalıcı ve ferahlatıcı koku deneyimi.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://sandalagaciodakokusu.com.tr" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
