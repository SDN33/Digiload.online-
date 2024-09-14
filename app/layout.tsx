import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';

// Définition du type pour les métadonnées Open Graph
interface OGMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
}

// Import de la police
const oxygen = localFont({
  src: "./fonts/Oxygen.ttf", // Utilisez le chemin relatif
  variable: "--font-oxygen",
  weight: "300 700",
});

const tanMeringue = localFont({
  src: "./fonts/TanMeringue-Regular.ttf",
  variable: "--font-tanmeringue",
});


export const metadata: Metadata & { og: OGMetadata; twitter: { card: string; title: string; description: string; image: string } } = {
  title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
  description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
  keywords: "Canva Pro gratuit, Canva gratuit, obtenir Canva Pro gratuitement, communauté Canva, avantages Canva Pro, offre Canva Pro, Canva Pro France, Canva Pro sans frais, Canva Pro gratuit en France, avoir canva gratuit.",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  og: {
    title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
    description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
    image: "https://digiload.online/images/banner.png",
    url: "https://digiload.online",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
    description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
    image: "https://digiload.online/images/banner.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta property="og:image" content="https://digiload.online/images/banner.png" />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="https://digiload.online/app/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${oxygen.variable} antialiased`}>
        {children}
        {/* Ajout de la balise Script pour DotLottie */}
        <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        />
      </body>
    </html>
  );
}
