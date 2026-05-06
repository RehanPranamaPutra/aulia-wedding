import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan - Mona Aulia & Mahendra | 22-23 Mei 2026",
  description:
    "Undangan pernikahan digital Mona Aulia, S. Sos dan Mahendra. Akad Nikah Jum'at 22 Mei 2026 di Masjid Baiturrahman, Resepsi Sabtu 23 Mei 2026 di Malai V Suku, Batang Gasan, Kab. Padang Pariaman.",
  keywords: ["undangan", "pernikahan", "wedding", "mona aulia", "mahendra", "minang", "padang pariaman"],
  openGraph: {
    title: "Undangan Pernikahan - Mona Aulia & Mahendra",
    description: "Kami mengundang Anda untuk berbagi kebahagiaan di hari pernikahan kami. 22-23 Mei 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-body text-brown antialiased bg-pattern">
        {children}
      </body>
    </html>
  );
}
