import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clawd VA Agency — Your AI Employee. Always On.",
  description:
    "Get a fully configured AI assistant deployed to your Telegram. Personal bot, configured workspace, industry skills, 24/7 availability. From $500/month.",
  keywords: [
    "AI assistant",
    "virtual assistant",
    "AI employee",
    "Telegram bot",
    "business automation",
    "AI agency",
  ],
  openGraph: {
    title: "Clawd VA Agency — Your AI Employee. Always On.",
    description:
      "Get a fully configured AI assistant deployed to your Telegram. Personal bot, configured workspace, industry skills, 24/7 availability.",
    type: "website",
    url: "https://clawd-agency.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawd VA Agency — Your AI Employee. Always On.",
    description:
      "Fully configured AI assistants deployed to your Telegram. From $500/month.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clawd VA Agency",
  description:
    "Fully configured AI assistant service. Each client gets a personal Telegram bot, configured workspace, industry-specific skills, and 24/7 availability.",
  provider: {
    "@type": "Organization",
    name: "Manas AI",
    url: "https://clawd-agency.vercel.app",
    telephone: "+12132769773",
  },
  serviceType: "AI Virtual Assistant",
  areaServed: "Worldwide",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "500",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "500",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "1000",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1000",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "2000",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2000",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
