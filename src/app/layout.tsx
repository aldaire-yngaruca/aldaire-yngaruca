import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldaire's Portfolio",
  description: "Portfolio de Taxugarita",
  openGraph: {
    title: "Aldaire Yngaruca – Portfolio",
    description: "Portafolio profesional de diseño y desarrollo",
    url: "https://aldaire.netlify.app/",
    siteName: "Aldaire Portfolio Taxugarita",
    images: [
      {
        url: "https://aldaire.netlify.app/stickers/alda.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
