import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const oxygen = localFont({
  src: "./fonts/Oxygen.ttf",
  variable: "--font-oxygen",
  weight: "300 700",
});

export const metadata: Metadata = {
  title: "Canva France Pro",
  description: "La communauté des utilisateurs de Canva Pro en France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxygen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
