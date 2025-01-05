import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google';
import "./globals.css";

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Di Monk - Google Sheets y ChatGPT, IA para profesionales",
  description: "Cursos de formación en herramientas como Google Sheets y ChatGPT, ayudando a profesionales a mejorar su productividad y desarrollo profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
