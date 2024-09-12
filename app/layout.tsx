import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata & { og: OGMetadata } = {
  title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
  description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
  keywords: "Canva Pro gratuit, Canva gratuit, obtenir Canva Pro gratuitement, communauté Canva, avantages Canva Pro, offre Canva Pro, Canva Pro France, Canva Pro sans frais, Canva Pro gratuit en France, avoir canva gratuit.",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  og: {
    title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
    description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
    image: "https://digiload.online/images/banner.png", // Utilise le chemin complet
    url: "https://digiload.online",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
    description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
    images: "https://digiload.online/images/banner.png" // Chemin complet ici aussi
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxygen.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
