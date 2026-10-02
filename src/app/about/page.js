"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=78&w=${width}`;

const features = [
  {
    title: "Global Sourcing",
    text: "We source quality products from reliable suppliers and connect them with international markets.",
  },
  {
    title: "Import & Export",
    text: "We facilitate professional import and export solutions for agricultural and natural products.",
  },
  {
    title: "Quality Focus",
    text: "We focus on product quality, consistency and reliable sourcing.",
  },
  {
    title: "Global Partnerships",
    text: "We aim to build long-term relationships with suppliers, buyers and international business partners.",
  },
];

const categories = [
  "Rice",
  "Citrus & Fresh Fruits",
  "Cotton",
  "Natural Oils",
  "Nuts",
  "Dry Fruits",
  "Agricultural Products",
];

const leadership = [
  {
    role: "CEO",
    name: "Liton Sen",
    portrait: image("photo-1500648767791-00dcc994a43e", 700),
  },
  {
    role: "Managing Director / Manager",
    name: "MD Shafique",
    portrait: image("photo-1506794778202-cad84cf45f1d", 700),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-x-hidden"
    >
      <motion.section
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? "visible" : "visible"}
        variants={fadeUp}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden bg-[#F2F0F1]"
      >
        <img
          src={image("photo-1552664730-d307ca884978", 2200)}
          alt="Corporate business meeting with team members discussing trade strategy"
          className="h-[420px] w-full object-cover md:h-[520px]"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl text-center text-white">
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.1, duration: 0.55 }}
              className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/80"
            >
              About Sky Moon Trading
            </motion.p>
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.18, duration: 0.6 }}
              className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
            >
              Connecting Quality Products with Global Markets
            </motion.h1>
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base"
            >
              Sky Moon Trading is an international import-export company focused
              on sourcing and supplying quality agricultural and natural
              products for global markets.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.22 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-frame px-4 py-14 md:py-20"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <img
              src={image("photo-1522202176988-66273c2fd55f", 1300)}
              alt="Business colleagues reviewing trade documents in a modern office"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
              Company Introduction
            </p>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Reliable sourcing, professional trade practices, and long-term
              business relationships.
            </h2>
            <p className="mb-4 text-sm leading-7 text-black/70 md:text-base">
              Sky Moon Trading is an international import-export company focused
              on sourcing and supplying quality agricultural and natural
              products for global markets.
            </p>
            <p className="text-sm leading-7 text-black/70 md:text-base">
              The company focuses on reliable sourcing, professional trade
              practices, quality-focused products and long-term international
              business relationships.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="bg-[#F0F0F0] py-14 md:py-20"
      >
        <div className="mx-auto max-w-frame px-4">
          <motion.div variants={fadeUp} className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
              What We Do
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Quality products, trusted sourcing and dependable global trade
              connections.
            </h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 h-10 w-10 rounded-full bg-black/5 flex items-center justify-center text-lg font-semibold text-black">
                  {feature.title.charAt(0)}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-black/70">
                  {feature.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-frame px-4 py-14 md:py-20"
      >
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
            Product Categories
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Major product categories for international trade.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm font-medium shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {category}
              </motion.div>
            ))}
          </div>
          <motion.div
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-sm"
          >
            <img
              src="/images/cotton seed.jpg"
              alt="Cotton seeds product category"
              className="h-[280px] w-full rounded-[22px] object-cover md:h-[320px]"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="bg-[#F0F0F0] py-14 md:py-20"
      >
        <div className="mx-auto max-w-frame px-4">
          <motion.div variants={fadeUp} className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
              Management
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Experienced leadership guiding international trade relationships.
            </h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2">
            {leadership.map((person) => (
              <motion.article
                key={person.name}
                variants={fadeUp}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={person.portrait}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-black/60">
                    {person.role}
                  </p>
                  <h3 className="text-2xl font-semibold text-black">
                    {person.name}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-frame px-4 py-14 md:py-20"
      >
        <div className="rounded-[28px] border border-black/10 bg-[#F2F0F1] p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
                Global Business
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                From Local Quality to Global Markets
              </h2>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 text-sm leading-7 text-black/70 shadow-sm">
              Sky Moon Trading connects quality products with international
              buyers and markets, supporting dependable trade opportunities and
              long-term business relationships.
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-frame px-4 pb-16 md:pb-24"
      >
        <div className="rounded-[28px] bg-black px-6 py-10 text-center text-white md:px-10 md:py-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Let&apos;s Build Global Trade Together
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Let&apos;s Build Global Trade Together
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Looking for reliable product sourcing and international trade
            opportunities? Connect with Sky Moon Trading.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F5F5]"
          >
            Contact Sky Moon Trading
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}
