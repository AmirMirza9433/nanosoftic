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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanosoftic.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "NanoSoftic — IT Academy & Software House | Alipur Chatha, Pakistan",
    template: "%s | NanoSoftic",
  },

  description:
    "NanoSoftic is a professional IT Academy and Software House located in Alipur Chatha, Punjab, Pakistan. NanoSoftic offers web development, mobile app development, custom software solutions, and IT training courses.",

  keywords: [
    "NanoSoftic",
    "nanosoftic",
    "Nano Softic",
    "NanoSoftic IT Academy",
    "NanoSoftic Software House",
    "NanoSoftic Alipur Chatha",
    "NanoSoftic Pakistan",
    "nanosoftic.vercel.app",
    "IT Academy Alipur Chatha",
    "Software House Alipur Chatha",
    "IT Training Alipur Chatha",
    "Web Development Alipur Chatha",
    "IT Training Gujranwala",
    "Software House Gujranwala",
    "Web Development Pakistan",
    "Mobile App Development Pakistan",
    "Next.js Developer Pakistan",
    "React Developer Pakistan",
    "Custom POS Software Pakistan",
    "IT Courses Punjab Pakistan",
  ],

  authors: [{ name: "NanoSoftic", url: siteUrl }],
  creator: "NanoSoftic",
  publisher: "NanoSoftic",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "NanoSoftic — IT Academy & Software House | Alipur Chatha",
    description:
      "NanoSoftic is a professional IT Academy and Software House in Alipur Chatha, Punjab, Pakistan. We offer web development, mobile apps, custom software, and IT training.",
    url: siteUrl,
    siteName: "NanoSoftic",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "NanoSoftic — IT Academy & Software House Alipur Chatha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NanoSoftic — IT Academy & Software House",
    description:
      "Professional IT training and modern software solutions by NanoSoftic in Alipur Chatha, Punjab, Pakistan.",
    images: [`${siteUrl}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
      "Ln6ws5E_9zKQagr3cmwwSSFyRzyojXjERC12uBfZhCo",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "NanoSoftic",
    alternateName: ["Nano Softic", "nanosoftic"],
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    image: `${siteUrl}/og-image.png`,
    description:
      "NanoSoftic is a professional IT Academy and Software House in Alipur Chatha, Punjab, Pakistan. We provide IT training, web development, mobile app development, and custom software solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite side Children Park",
      addressLocality: "Alipur Chatha",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@nanosoftic.com",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Training & Software Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Web Development Course",
            description:
              "Learn HTML, CSS, JavaScript, React, Next.js, TypeScript and Angular.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Mobile App Development Course",
            description:
              "Learn React Native, Ionic, Redux Toolkit and Firebase.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Tailored software solutions including POS systems, order management, and web applications.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-background text-foreground"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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