import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import FloatingContact from "@/components/ui/FloatingContact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TutorSoftic - Best IT Academy & Software House in Alipur Chatha",
  description:
    "Expert in Next.js & Mobile Apps. Professional IT training and modern software solutions in Alipur Chatha, Punjab, Pakistan.",
  keywords: [
    "Software House Alipur Chatha",
    "IT Training Alipur Chatha",
    "Next.js Developer Pakistan",
    "Custom POS Software Pakistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
