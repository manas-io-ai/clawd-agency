import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clawd VA Agency — Get a Fully Managed AI Employee for Your Business",
  description:
    "We deploy and manage AI assistants that work 24/7. Each client gets a personal Telegram bot, dedicated Mac Mini, industry-specific skills, and ongoing optimization. $5,000 setup + $500/month. No technical skills needed — we handle everything.",
  keywords: [
    "AI assistant",
    "virtual assistant",
    "AI employee",
    "Telegram bot",
    "business automation",
    "AI agency",
    "managed AI service",
    "AI for business",
    "24/7 AI assistant",
  ],
  openGraph: {
    title: "Clawd VA Agency — Get a Fully Managed AI Employee for Your Business",
    description:
      "We deploy AI assistants that handle email, scheduling, research, and automation 24/7. $5,000 setup + $500/month. No technical skills required.",
    type: "website",
    url: "https://clawd-agency.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawd VA Agency — Fully Managed AI Employees",
    description:
      "24/7 AI assistants deployed to your Telegram. We handle setup, hosting, and ongoing optimization. From $500/month.",
  },
};

// Service Schema - Enhanced for GEO
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clawd VA Agency - Managed AI Employee Service",
  description:
    "Fully configured and managed AI assistant service. Each client gets a personal Telegram/WhatsApp bot running on dedicated Mac Mini hardware, custom workspace with industry knowledge, and ongoing optimization. The AI handles email, scheduling, research, customer support, and automation 24/7.",
  provider: {
    "@type": "Organization",
    name: "Manas AI",
    url: "https://manasexp.com",
    telephone: "+12132769773",
    email: "io@manasexp.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  },
  serviceType: "AI Virtual Assistant Deployment",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Employee Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "One-Time Setup",
        price: "5000",
        priceCurrency: "USD",
        description:
          "Dedicated Mac Mini instance, custom workspace configuration, industry-specific skill development, Telegram/WhatsApp bot setup, security hardening, 2-week hands-on onboarding.",
      },
      {
        "@type": "Offer",
        name: "Monthly Service",
        price: "500",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "500",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
        description:
          "Hosting on dedicated hardware, AI compute costs, maintenance, software updates, ongoing optimization, and priority support. Cancel anytime with data export.",
      },
    ],
  },
};

// FAQ Schema for GEO - these are citation-worthy answers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Clawd VA Agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clawd VA Agency is a managed AI assistant service. We deploy, configure, and maintain a 24/7 AI employee for your business. Each client gets a personal Telegram or WhatsApp bot running on dedicated Mac Mini hardware, pre-loaded with industry-specific skills and connected to your tools. We handle all technical setup, hosting, and ongoing optimization — you just use it.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Clawd VA Agency cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clawd VA Agency costs $5,000 one-time setup plus $500 per month. The setup fee covers dedicated Mac Mini hardware, custom workspace configuration, industry skill development, bot deployment, security hardening, and 2 weeks of hands-on onboarding. The monthly fee covers hosting, AI compute, maintenance, updates, and ongoing optimization. No contracts — cancel anytime with full data export.",
      },
    },
    {
      "@type": "Question",
      name: "What can the AI assistant actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your AI assistant can handle email management (reading, summarizing, drafting responses), calendar management, web research, competitive analysis, content writing, customer support responses, data processing, scheduling, and virtually any task that can be done with a keyboard. It runs 24/7 on dedicated hardware, so it works while you sleep.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical skills to use Clawd VA Agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No technical skills required. You interact with your AI assistant through Telegram or WhatsApp — just message it like you would text a colleague. We handle all the technical setup, configuration, hosting, and maintenance. You describe what you need; the AI delivers.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI assistants are live within 48 hours of your discovery call. The process: 15-minute discovery call, we build your custom AI (24-48 hours), you start delegating work. Complex enterprise setups with custom integrations may take up to a week.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure with Clawd VA Agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each client gets an isolated workspace on dedicated hardware — not shared cloud infrastructure. Your data is encrypted at rest and in transit. We never share data between clients or use it for AI training. You maintain full ownership and can export everything if you cancel.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT is a blank-slate conversation tool you access through a browser. Clawd VA Agency gives you a fully configured AI employee — with your industry knowledge, your tools, your workflows, persistent memory, and 24/7 availability on dedicated hardware. It's the difference between hiring a temp who knows nothing and hiring a trained specialist who works around the clock.",
      },
    },
  ],
};

// HowTo Schema for the setup process
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Managed AI Employee from Clawd VA Agency",
  description: "Get a fully configured AI assistant deployed and running for your business in 48 hours.",
  totalTime: "PT48H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Book a Discovery Call",
      text: "Schedule a 15-minute call where you tell us about your business, workflows, and what you need your AI to handle. No commitment required.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "We Build Your Assistant",
      text: "Within 48 hours, we configure your AI with industry skills, tool integrations, and your custom workspace on dedicated Mac Mini hardware.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Start Delegating Work",
      text: "Open Telegram or WhatsApp, message your AI, and start offloading work. Research, writing, scheduling, analysis — your AI handles it 24/7.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
