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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanosoftic.vercel.app"),
  title: "NanoSoftic - IT Academy & Software House in Alipur Chatha",
  description:
    "NanoSoftic provides professional IT training, web and mobile development, and custom software solutions in Alipur Chatha, Punjab, Pakistan.",
  keywords: [
    "NanoSoftic",
    "nanosoftic",
    "Nano Softic",
    "Software House Alipur Chatha",
    "IT Training Alipur Chatha",
    "NanoSoftic Alipur Chatha",
    "NanoSoftic Pakistan",
    "Next.js Developer Pakistan",
    "Custom POS Software Pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NanoSoftic - IT Academy & Software House in Alipur Chatha",
    description:
      "Professional IT training and modern software solutions by NanoSoftic in Alipur Chatha, Punjab, Pakistan.",
    url: "/",
    siteName: "NanoSoftic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoSoftic - IT Academy & Software House",
    description:
      "Professional IT training and modern software solutions by NanoSoftic in Alipur Chatha.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-background text-foreground"
      >
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
