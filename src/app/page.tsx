"use client";

import { useState } from "react";

const BOOKING_URL = "https://cal.com/manasai";

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,204,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-card mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-dot" />
          <span className="text-sm text-text-muted font-mono tracking-wider uppercase">
            Systems Online
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
          Your AI Employee.
          <br />
          <span className="text-cyan glow-text">Always On.</span>
          <br />
          Always Working.
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          We deploy a fully configured AI assistant to your Telegram — with your
          industry skills, your tools, your workflows. It never sleeps, never
          calls in sick, never misses a beat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red text-white font-bold text-lg rounded-xl glow-red hover:brightness-110 transition-all duration-200"
          >
            Get Your AI Assistant
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-text-muted font-semibold rounded-xl hover:border-cyan hover:text-cyan transition-all duration-200"
          >
            See How It Works
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-text-muted text-sm font-mono">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Setup in 48 hours
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            No code required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── WHAT YOU GET ───────────────────── */
const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Personal Telegram Bot",
    desc: "Your own private AI assistant, accessible 24/7 from Telegram on any device. Message it like a colleague.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Configured Workspace",
    desc: "Custom-built knowledge base, file storage, web tools, and integrations — all pre-configured for your business.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Industry Skills",
    desc: "Pre-trained on your industry — real estate, e-commerce, marketing, ops. It knows your domain from day one.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Availability",
    desc: "Never sleeps, never takes a day off. Your AI works nights, weekends, and holidays — without overtime.",
  },
];

function WhatYouGet() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan font-mono text-sm tracking-widest uppercase mb-3">
            What You Get
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            An assistant that actually <span className="text-cyan">works</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover p-6 rounded-2xl bg-bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-dim flex items-center justify-center text-cyan mb-5">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── HOW IT WORKS ───────────────────── */
const steps = [
  {
    num: "01",
    title: "Book a Call",
    desc: "15-minute discovery call. Tell us about your business, your workflows, and what you need your AI to handle.",
  },
  {
    num: "02",
    title: "We Build Your Assistant",
    desc: "Within 48 hours, we configure your AI with industry skills, tool integrations, and your custom workspace.",
  },
  {
    num: "03",
    title: "You Start Delegating",
    desc: "Open Telegram, message your AI, and start offloading work. Research, writing, scheduling, analysis — done.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,229,204,0.04)_0%,_transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan font-mono text-sm tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Live in <span className="text-cyan">48 hours</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-cyan/30 to-transparent z-0" />
              )}
              <div className="relative z-10 p-8 rounded-2xl bg-bg-card border border-border">
                <span className="text-5xl font-black text-cyan/20 font-mono">
                  {s.num}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── USE CASES ───────────────────── */
const useCases = [
  {
    title: "Real Estate Agents",
    desc: "Draft listings, respond to leads, research comps, schedule showings, follow up with buyers — all while you're at the open house.",
    icon: "🏠",
  },
  {
    title: "E-commerce",
    desc: "Write product descriptions, analyze competitors, manage customer inquiries, track inventory alerts, create marketing copy.",
    icon: "🛒",
  },
  {
    title: "Agencies",
    desc: "Research clients, draft proposals, manage project briefs, create content calendars, handle internal comms.",
    icon: "🏢",
  },
  {
    title: "Executives",
    desc: "Prepare meeting briefs, summarize reports, draft communications, manage to-dos, stay on top of everything.",
    icon: "👔",
  },
  {
    title: "Founders",
    desc: "Research markets, draft investor updates, manage ops, create pitch decks, handle the thousand things on your plate.",
    icon: "🚀",
  },
];

function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan font-mono text-sm tracking-widest uppercase mb-3">
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-cyan">your</span> industry
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="card-hover p-6 rounded-2xl bg-bg-card border border-border group"
            >
              <span className="text-3xl mb-4 block">{uc.icon}</span>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan transition-colors">
                {uc.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {uc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PRICING ───────────────────── */
const setupIncludes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Dedicated Mac Mini Instance",
    desc: "Your AI runs on its own always-on Apple Silicon hardware — not a shared cloud VM. Dedicated compute, dedicated memory, zero noisy neighbors.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.82-3.36a1.5 1.5 0 010-2.66l5.82-3.36a1.5 1.5 0 011.56 0l5.82 3.36a1.5 1.5 0 010 2.66l-5.82 3.36a1.5 1.5 0 01-1.56 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 11.85l5.82 3.36a1.5 1.5 0 001.56 0l5.82-3.36" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 15.85l5.82 3.36a1.5 1.5 0 001.56 0l5.82-3.36" />
      </svg>
    ),
    title: "Custom Workspace Configuration",
    desc: "Tailored file structure, knowledge base, SOPs, brand assets, and document library — pre-loaded so your AI knows your business from minute one.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "Industry-Specific Skill Development",
    desc: "We build custom skill modules for your domain — real estate comps, e-commerce analytics, agency workflows, whatever your business needs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Telegram & WhatsApp Bot Setup",
    desc: "We create, configure, and deploy your private bot on Telegram and/or WhatsApp — fully branded, secured, and ready to message from any device.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Security Hardening",
    desc: "Encrypted workspace, isolated environment, access controls, and data protection — your business data stays locked down and private.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "2 Weeks Hands-On Onboarding",
    desc: "We don&apos;t just hand you a bot and disappear. Two full weeks of live training, workflow optimization, and fine-tuning until your AI works exactly how you need it.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Ongoing Optimization",
    desc: "Your AI gets smarter over time. We continuously refine skills, update integrations, and optimize performance based on your actual usage patterns.",
  },
];

const everythingIncluded = [
  "Personal Telegram & WhatsApp bot",
  "Dedicated Mac Mini instance",
  "Custom workspace & knowledge base",
  "Industry-specific skill packs",
  "Web search, research & analysis",
  "Calendar & email integration",
  "Security hardening & encryption",
  "2 weeks hands-on onboarding",
  "Ongoing optimization & updates",
  "Priority support",
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,229,204,0.05)_0%,_transparent_50%)]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan font-mono text-sm tracking-widest uppercase mb-3">
            Simple Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            One plan. <span className="text-cyan">Everything included.</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto">
            No tiers. No upsells. No decision fatigue. Just a fully deployed AI employee.
          </p>
        </div>

        {/* Founding Partner Banner */}
        <div className="mb-10 p-5 rounded-2xl border border-cyan/40 bg-cyan/[0.04] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="shrink-0 px-3 py-1.5 bg-cyan/10 border border-cyan/30 rounded-lg text-cyan font-bold text-xs uppercase tracking-widest font-mono">
              🤝 Founding Partner
            </span>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-text">
                First 3 clients get{" "}
                <span className="text-cyan font-bold">50% off setup</span> —{" "}
                <span className="line-through text-text-muted">$5,000</span>{" "}
                <span className="text-cyan font-black text-lg">$2,500</span>
              </p>
              <p className="text-text-muted text-sm mt-1">
                Limited spots. Direct founder access and priority feature requests included.
              </p>
            </div>
          </div>
        </div>

        {/* Single Pricing Card */}
        <div className="relative p-10 md:p-12 rounded-3xl border border-cyan glow-cyan bg-bg-card">
          {/* Two-column pricing */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
            {/* Setup */}
            <div className="flex-1">
              <p className="text-text-muted font-mono text-xs uppercase tracking-widest mb-2">
                One-Time Setup
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-black tracking-tight">$5,000</span>
              </div>
              <p className="text-text-muted text-sm mt-2 max-w-xs">
                We build, configure, secure, and deploy your AI from scratch. Yours forever.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent self-center" />
            <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Monthly */}
            <div className="flex-1">
              <p className="text-text-muted font-mono text-xs uppercase tracking-widest mb-2">
                Then Monthly
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-black text-cyan tracking-tight">$500</span>
                <span className="text-text-muted font-mono text-sm">/mo</span>
              </div>
              <p className="text-text-muted text-sm mt-2 max-w-xs">
                Hosting, AI compute, maintenance, updates, and ongoing optimization. Cancel anytime.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-4.5 rounded-xl bg-red text-white font-bold text-lg glow-red hover:brightness-110 transition-all duration-200 mb-10"
          >
            Book Your Setup Call →
          </a>

          {/* Everything included */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-5">
              Everything included
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {everythingIncluded.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-cyan shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* No-risk line */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              No contracts
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              Live in 48 hours
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              Data export on exit
            </span>
          </div>
        </div>

        {/* Value comparison */}
        <div className="mt-12 p-6 rounded-2xl border border-border bg-bg-card text-center">
          <p className="text-text-muted text-sm mb-4">Compare the real cost</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            <div>
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-1">Part-time VA</p>
              <p className="text-2xl font-bold">$2,500<span className="text-text-muted text-sm">/mo</span></p>
            </div>
            <span className="text-text-muted text-2xl hidden sm:block">vs</span>
            <span className="text-text-muted text-sm sm:hidden">vs</span>
            <div>
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-1">Full-time employee</p>
              <p className="text-2xl font-bold">$5,000<span className="text-text-muted text-sm">+/mo</span></p>
            </div>
            <span className="text-text-muted text-2xl hidden sm:block">vs</span>
            <span className="text-text-muted text-sm sm:hidden">vs</span>
            <div>
              <p className="text-cyan text-xs font-mono uppercase tracking-wider mb-1 font-bold">Clawd AI</p>
              <p className="text-2xl font-bold text-cyan">$500<span className="text-cyan/60 text-sm">/mo</span></p>
            </div>
          </div>
          <p className="text-text-muted text-xs mt-4">
            24/7 availability • No benefits • No PTO • No training ramp-up • Instant scale
          </p>
        </div>

        {/* What's Included in Setup — detail cards */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-cyan font-mono text-sm tracking-widest uppercase mb-3">
              What&apos;s Included in Setup
            </p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              $5,000 buys you a <span className="text-cyan">full deployment</span>
            </h3>
            <p className="text-text-muted mt-3 max-w-2xl mx-auto">
              Not a SaaS login. Not a template. A fully engineered AI employee — built, configured, secured, and trained on your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {setupIncludes.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-bg-card border border-border hover:border-cyan/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan mb-4 group-hover:bg-cyan/20 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FAQ ───────────────────── */
const faqs = [
  {
    q: "What exactly do I get?",
    a: "A fully configured AI assistant accessible through your own private Telegram bot. It comes pre-loaded with industry-specific skills, a custom knowledge base, and tool integrations tailored to your workflow.",
  },
  {
    q: "How long does setup take?",
    a: "Most assistants are live within 48 hours of your discovery call. Complex enterprise setups with custom integrations may take up to a week.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. Each client gets an isolated workspace. Your data is encrypted at rest and in transit. We never share data between clients or use it for training. SOC 2 compliance in progress.",
  },
  {
    q: "Can I customize what my AI knows?",
    a: "Yes. Upload documents, SOPs, brand guides, product catalogs — anything you want your AI to know. We'll configure it to understand your business inside and out.",
  },
  {
    q: "What can the AI actually do?",
    a: "Research, writing, analysis, scheduling, email drafting, data processing, customer response templates, content creation, market research, competitive analysis, and much more. If it can be done with a keyboard, your AI can probably handle it.",
  },
  {
    q: "Do I need technical skills?",
    a: "Zero. You message your AI on Telegram like you'd text a colleague. Say what you need, and it delivers. We handle all the technical setup and maintenance.",
  },
  {
    q: "What if I want to cancel?",
    a: "Cancel anytime with no penalties. We'll export your data and knowledge base so nothing is lost. Month-to-month, no contracts.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT is a blank canvas. We give you a fully configured employee — with your industry knowledge, your tools, your workflows, persistent memory, and always-on availability. It's the difference between hiring a temp and hiring a specialist.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan font-mono text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Questions? <span className="text-cyan">Answers.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-bg-card-hover transition-colors"
              >
                <span className="font-semibold pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-cyan shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-text-muted text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── CTA FOOTER ───────────────────── */
function CTAFooter() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,59,59,0.06)_0%,_transparent_60%)]" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          Ready to hire
          <br />
          <span className="text-cyan glow-text">your AI?</span>
        </h2>
        <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
          Book a 15-minute call. We&apos;ll show you exactly what your AI
          assistant will look like and have it live within 48 hours.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-red text-white font-bold text-xl rounded-xl glow-red hover:brightness-110 transition-all duration-200"
        >
          Book Your Call
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

/* ───────────────────── NAV ───────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center">
            <span className="text-cyan font-black text-sm">C</span>
          </div>
          <span className="font-bold text-lg tracking-tight">
            Clawd<span className="text-text-muted font-normal">.ai</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          <a href="#features" className="hover:text-cyan transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-cyan transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-cyan transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-cyan transition-colors">
            FAQ
          </a>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-red text-white font-semibold text-sm rounded-lg hover:brightness-110 transition-all"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}

/* ───────────────────── FOOTER ───────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center">
            <span className="text-cyan font-bold text-xs">C</span>
          </div>
          <span className="text-sm text-text-muted">
            © {new Date().getFullYear()} Clawd VA Agency by{" "}
            <a
              href="https://manasexp.com"
              className="text-cyan hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manas AI
            </a>
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href="tel:+12132769773" className="hover:text-cyan transition-colors">
            (213) 276-9773
          </a>
          <a
            href="mailto:io@manasexp.com"
            className="hover:text-cyan transition-colors"
          >
            io@manasexp.com
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────── PAGE ───────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="gradient-line max-w-2xl mx-auto" />
        <WhatYouGet />
        <div className="gradient-line max-w-2xl mx-auto" />
        <HowItWorks />
        <div className="gradient-line max-w-2xl mx-auto" />
        <UseCases />
        <div className="gradient-line max-w-2xl mx-auto" />
        <Pricing />
        <div className="gradient-line max-w-2xl mx-auto" />
        <FAQ />
        <div className="gradient-line max-w-2xl mx-auto" />
        <CTAFooter />
      </main>
      <Footer />
    </>
  );
}
