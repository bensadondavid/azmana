import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400"],
  style: "normal",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azmana.fr"),

  title: {
    default: "Azmana – Invitations digitales élégantes",
    template: "%s | Azmana",
  },

  description:
    "Créez une invitation digitale élégante et personnalisée pour votre événement. Mariage, Bar Mitsva, naissance… un site unique à partager.",

  keywords: [
    "invitation digitale",
    "faire-part en ligne",
    "invitation mariage",
    "invitation bar mitsva",
    "site événement",
    "invitation personnalisée",
  ],

  authors: [{ name: "Azmana" }],
  creator: "Azmana",
  publisher: "Azmana",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Azmana – Invitations digitales élégantes",
    description:
      "Créez une invitation digitale élégante et personnalisée pour votre événement.",
    url: "https://azmana.fr",
    siteName: "Azmana",
    images: [
      {
        url: "/azmana-og.png",
        width: 1200,
        height: 630,
        alt: "Azmana invitation digitale",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Azmana – Invitations digitales élégantes",
    description:
      "Créez une invitation digitale élégante et personnalisée.",
    images: ["/azmana-og.png"],
  },

  icons: {
    icon: [
      { url: "/azmana-fav.png", type: "image/png", sizes: "64x64" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  );
}