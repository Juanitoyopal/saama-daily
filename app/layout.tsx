import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppSupportButton } from "@/components/WhatsAppSupportButton";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `${brand.name} - ${brand.tagline}`,
  description: brand.shortDescription
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main className="pb-16 sm:pb-0">{children}</main>
        <Footer />
        <WhatsAppSupportButton />
      </body>
    </html>
  );
}
