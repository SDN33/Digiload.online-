import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import de la police
const oxygen = localFont({
  src: "./fonts/Oxygen.ttf", // Utilisez le chemin relatif
  variable: "--font-oxygen",
  weight: "300 700",
});

export const metadata: Metadata = {
  title: "DigiLoad | Formations Canva en ligne",
  description: "La communauté des utilisateurs de Canva Pro en France",
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
