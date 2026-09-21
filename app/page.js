"use client";

import React, { memo, useEffect, useMemo, useRef, useState } from "react";

{
  /* ==========================================================================
   SKY MOON TRADING — Corporate homepage
   --------------------------------------------------------------------------
   • Everything editable lives in the CONTENT / IMAGES / PRODUCTS / REGIONS
     blocks below. Nothing here is a factual company claim: no statistics,
     countries, certifications, clients or history have been invented.
   • Imagery: every image slot ships with an illustrated placeholder so the
     page never shows a broken image. To use real photography, paste a URL
     into IMAGES (e.g. IMAGES.hero = "/img/hero.jpg"). The illustration is
     used automatically if the URL is empty or fails to load.
   • Fonts (Newsreader + Hanken Grotesk) load from Google Fonts with system
     fallbacks. Styling is a single scoped <style> block — no Tailwind needed.
   ========================================================================== */
  /* -------------------------------- CONTENT -------------------------------- */
}

const CONTENT = {
  brand: "Sky Moon Trading",
  nav: [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Global Markets", id: "global" },
    { label: "Contact", id: "contact" },
  ],
  hero: {
    eyebrow: "GLOBAL TRADING & SUPPLY",
    lines: ["Connecting Quality", "Products With", "Global Markets"],
    copy: "Reliable sourcing, professional trading and quality products — connecting trusted supply with opportunities across international markets.",
    primary: "Explore Products",
    secondary: "Talk to Us",
    trust: [
      { icon: "quality", text: "Quality-focused sourcing" },
      { icon: "supply", text: "Dependable supply" },
      { icon: "sourcing", text: "Professional trading" },
      { icon: "globe", text: "International inquiries welcome" },
    ],
  },
  intro: {
    title: "Trading Beyond Borders",
    paragraphs: [
      "Sky Moon Trading connects quality agricultural and food products with buyers in international markets. Our focus is on dependable sourcing, clear communication and professional trading relationships.",
      "Whether you are sourcing a single product or building a long-term supply programme, we aim to make every step — from origin to delivery — straightforward and transparent.",
    ],
    highlights: [
      {
        label: "QUALITY",
        text: "Products selected with consistent standards in mind.",
      },
      {
        label: "RELIABILITY",
        text: "Dependable supply and clear, timely communication.",
      },
      {
        label: "GLOBAL REACH",
        text: "Built to serve buyers in international markets.",
      },
    ],
    cta: "Discover Our Story",
    ctaHref: "#about",
  },
  products: {
    title: "From Trusted Sources to Global Markets",
    copy: "A selection of agricultural and food products for international buyers. Specifications, packaging and pricing are available on request.",
    linkLabel: "View Product",
    linkHref: "#contact",
  },
  why: {
    title: "Why Sky Moon Trading",
    copy: "Four principles guide how we work with suppliers and buyers.",
    items: [
      {
        icon: "quality",
        title: "Quality Focus",
        text: "Products are selected and reviewed with consistent quality expectations in mind.",
      },
      {
        icon: "supply",
        title: "Reliable Supply",
        text: "Planning and follow-through that buyers can depend on, order after order.",
      },
      {
        icon: "sourcing",
        title: "Professional Sourcing",
        text: "Careful supplier relationships and clear documentation at every stage.",
      },
      {
        icon: "globe",
        title: "Global Connectivity",
        text: "A trading approach built around international buyers and open communication.",
      },
    ],
  },
  global: {
    title: "Building Connections Across Markets",
    copy: "Every shipment connects a source with a market. The regions shown are illustrative and can be updated to reflect the markets you serve.",
    hubLabel: "Sourcing hub",
    hubNote: "Edit location",
    legendHub: "Sourcing hub (editable)",
    legendRegion: "Market region (editable)",
  },
  cta: {
    title: "Let’s Build a Reliable Trading Partnership.",
    copy: "Have a product requirement or sourcing inquiry? Let’s start a conversation.",
    primary: "Request a Quote",
    secondary: "Contact Us",
    email: "hello@yourdomain.com", // ← replace with the real address
  },
  footer: {
    description:
      "Sky Moon Trading connects quality agricultural and food products with international markets through reliable sourcing and professional trading.",
    company: [
      { label: "About Us", id: "about" },
      { label: "Services", id: "services" },
      { label: "Global Markets", id: "global" },
      { label: "Contact", id: "contact" },
    ],
    contact: [
      "[Company address]",
      "[City, Country]",
      "[Phone number]",
      "[Email address]",
    ],
    social: [
      { name: "LinkedIn", href: "#", icon: "in" },
      { name: "Facebook", href: "#", icon: "fb" },
      { name: "Instagram", href: "#", icon: "ig" },
    ],
  },
};

/* Optional real photography — leave "" to use the built-in illustrations. */
const IMAGES = {
  hero: "",
  story: "",
  rice: "",
  sugar: "",
  apples: "",
  vegetables: "",
  oil: "",
  pulses: "",
  nuts: "",
};

/* Placeholder market regions. Positions are [longitude, latitude] and are
   purely illustrative — rename or move them to match real markets. */
const HUB = { lon: 72, lat: 28 };
const REGIONS = [
  { label: "Region name", note: "Add your market", lon: -100, lat: 40 },
  { label: "Region name", note: "Add your market", lon: -58, lat: -15 },
  { label: "Region name", note: "Add your market", lon: 10, lat: 50 },
  { label: "Region name", note: "Add your market", lon: 22, lat: 3 },
  { label: "Region name", note: "Add your market", lon: 110, lat: 33 },
  { label: "Region name", note: "Add your market", lon: 135, lat: -25 },
];

/* ------------------------------ WORLD DOT MAP ----------------------------- */
/* Simplified continent outlines ([lon, lat]) rasterised into a dot matrix. */

const LAND = [];
const SEAS = [];

const proj = (lon, lat) => [
  ((lon + 180) / 360) * 1000,
  ((90 - lat) / 180) * 500,
];

function inPoly(px, py, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi)
      c = !c;
  }
  return c;
}

let _dots = null;
function worldDots() {
  if (_dots) return _dots;
  const s = 8;
  let d = "";
  let row = 0;
  for (let y = 16; y <= 408; y += s * 0.86, row++) {
    const off = row % 2 ? s / 2 : 0;
    for (let x = off + 2; x <= 998; x += s) {
      const lon = (x / 1000) * 360 - 180;
      const lat = 90 - (y / 500) * 180;
      if (
        LAND.some((p) => inPoly(lon, lat, p)) &&
        !SEAS.some((p) => inPoly(lon, lat, p))
      ) {
        d += `M${x.toFixed(1)} ${y.toFixed(1)}h0`;
      }
    }
    // (row counter drives the hex-style offset)
  }
  _dots = d;
  return d;
}

/* -------------------------------- UTILITIES ------------------------------- */

const rng = (seed) => {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

function moundPoints(r, n, cx, base, w, h) {
  const pts = [];
  let guard = 0;
  while (pts.length < n && guard++ < n * 30) {
    const u = r() * 2 - 1;
    const v = r();
    if (v < Math.pow(1 - u * u, 1.15))
      pts.push({ x: cx + (u * w) / 2, y: base - v * h, u, v });
  }
  return pts.sort((a, b) => a.y - b.y);
}

const goTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
const onHref = (e, href) => {
  if (!href || href[0] !== "#") return;
  e.preventDefault();
  if (href.length > 1) goTo(href.slice(1));
};

const SECTION_IDS = [
  "home",
  "about",
  "products",
  "services",
  "global",
  "contact",
];

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      setOn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`rv ${on ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Media({ src, alt = "", children }) {
  const [bad, setBad] = useState(false);
  if (src && !bad) {
    return (
      <img
        className="art art--img"
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setBad(true)}
      />
    );
  }
  return children;
}

/* ---------------------------------- ICONS --------------------------------- */

const Ico = ({ children, size = 28, sw = 1.25, ...p }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
);
const IconQuality = (p) => (
  <Ico {...p}>
    <path d="M14 3 24 8v7c0 6-5 10-10 12C9 25 4 21 4 15V8z" />
    <path d="m9.5 14.5 3.2 3.2L19 11" />
  </Ico>
);
const IconSupply = (p) => (
  <Ico {...p}>
    <path d="M14 3 24 8.5v11L14 25 4 19.5v-11z" />
    <path d="M4 8.5 14 14l10-5.5M14 14v11" />
  </Ico>
);
const IconSourcing = (p) => (
  <Ico {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="m18 18 7 7" />
    <path d="M8.5 15.5C8.5 11 11.5 9 15.5 9c0 4-1.8 7-7 6.5z" />
  </Ico>
);
const IconGlobe = (p) => (
  <Ico {...p}>
    <circle cx="14" cy="14" r="11" />
    <ellipse cx="14" cy="14" rx="4.6" ry="11" />
    <path d="M3 14h22M5 8.5h18M5 19.5h18" />
  </Ico>
);
const ICONS = {
  quality: IconQuality,
  supply: IconSupply,
  sourcing: IconSourcing,
  globe: IconGlobe,
};

const Chevron = ({ dir = "right" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={dir === "right" ? "m7.5 4 6 6-6 6" : "m12.5 4-6 6 6 6"} />
  </svg>
);

const Social = ({ kind }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {kind === "in" && (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10.5V16M8 7.6v.01M12 16v-5.5M12 13c0-1.6 1-2.5 2.4-2.5S17 11.3 17 13v3" />
      </>
    )}
    {kind === "fb" && (
      <path d="M14 21v-7.5h2.6l.4-3H14V8.7c0-.9.3-1.4 1.5-1.4H17V4.6c-.3 0-1.2-.1-2.2-.1C12.6 4.5 11 5.9 11 8.3v2.2H8.5v3H11V21" />
    )}
    {kind === "ig" && (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.2 6.8v.01" />
      </>
    )}
  </svg>
);

/* --------------------------- ILLUSTRATED IMAGERY --------------------------- */
/* Flat, editorial still-lifes used wherever no photograph has been supplied. */

const svgProps = {
  viewBox: "0 0 400 300",
  preserveAspectRatio: "xMidYMid slice",
  className: "art",
  "aria-hidden": "true",
};

const RiceArt = memo(function RiceArt() {
  const grains = useMemo(() => {
    const r = rng(3);
    const pal = ["#FBF8F0", "#F3EEDF", "#E8E1CC", "#FFFFFF"];
    return moundPoints(r, 430, 200, 262, 330, 150).map((p) => ({
      ...p,
      a: r() * 80 - 40 - p.u * 25,
      c: pal[Math.floor(r() * pal.length)],
      l: 8 + r() * 3,
    }));
  }, []);
  return (
    <svg {...svgProps}>
      <rect width="400" height="300" fill="#153A63" />
      <circle cx="200" cy="170" r="132" fill="#1B4675" />
      <ellipse
        cx="200"
        cy="264"
        rx="176"
        ry="13"
        fill="#0B1F3A"
        opacity=".55"
      />
      {grains.map((p, i) => (
        <ellipse
          key={i}
          cx={p.x}
          cy={p.y}
          rx={p.l}
          ry="2.7"
          fill={p.c}
          stroke="#B9AF95"
          strokeWidth=".5"
          strokeOpacity=".6"
          transform={`rotate(${p.a} ${p.x} ${p.y})`}
        />
      ))}
    </svg>
  );
});

const cube = (x, y, s, k) => {
  const w = s / 2,
    d = s / 4,
    h = s / 2;
  return (
    <g key={k}>
      <polygon
        points={`${x - w},${y - d - h} ${x},${y - h} ${x},${y} ${x - w},${y - d}`}
        fill="#DCE5EE"
      />
      <polygon
        points={`${x},${y - h} ${x + w},${y - d - h} ${x + w},${y - d} ${x},${y}`}
        fill="#BFCCDB"
      />
      <polygon
        points={`${x},${y - h} ${x - w},${y - d - h} ${x},${y - 2 * d - h} ${x + w},${y - d - h}`}
        fill="#FFFFFF"
      />
    </g>
  );
};

const SugarArt = memo(function SugarArt() {
  const crystals = useMemo(() => {
    const r = rng(9);
    const pal = ["#FFFFFF", "#F2F6FA", "#D5E0EB", "#FFFFFF"];
    return moundPoints(r, 520, 160, 264, 270, 118).map((p) => ({
      ...p,
      s: 4 + r() * 4.5,
      a: r() * 90,
      c: pal[Math.floor(r() * pal.length)],
    }));
  }, []);
  return (
    <svg {...svgProps}>
      <rect width="400" height="300" fill="#DCE5EE" />
      <circle cx="205" cy="170" r="130" fill="#E8EEF5" />
      <ellipse cx="200" cy="268" rx="178" ry="12" fill="#8FA3BA" opacity=".4" />
      {crystals.map((p, i) => (
        <rect
          key={i}
          x={p.x - p.s / 2}
          y={p.y - p.s / 2}
          width={p.s}
          height={p.s}
          fill={p.c}
          stroke="#B7C6D6"
          strokeWidth=".4"
          transform={`rotate(${p.a} ${p.x} ${p.y})`}
        />
      ))}
      <ellipse cx="312" cy="262" rx="62" ry="8" fill="#8FA3BA" opacity=".45" />
      {cube(292, 258, 46, "a")}
      {cube(340, 261, 40, "b")}
      {cube(316, 232, 40, "c")}
    </svg>
  );
});

const appleBody = (cx, cy, r) =>
  `M${cx} ${cy - r * 0.72}C${cx + r * 0.5} ${cy - r * 1.08} ${cx + r * 1.08} ${cy - r * 0.35} ${cx + r * 0.96} ${cy + r * 0.25}C${cx + r * 0.82} ${cy + r * 0.85} ${cx + r * 0.3} ${cy + r * 1.08} ${cx} ${cy + r * 0.92}C${cx - r * 0.3} ${cy + r * 1.08} ${cx - r * 0.82} ${cy + r * 0.85} ${cx - r * 0.96} ${cy + r * 0.25}C${cx - r * 1.08} ${cy - r * 0.35} ${cx - r * 0.5} ${cy - r * 1.08} ${cx} ${cy - r * 0.72}Z`;

const Apple = ({ id, cx, cy, r, fill }) => (
  <g>
    <clipPath id={id}>
      <path d={appleBody(cx, cy, r)} />
    </clipPath>
    <ellipse
      cx={cx}
      cy={cy + r * 1.02}
      rx={r * 0.95}
      ry={r * 0.12}
      fill="#062B22"
      opacity=".5"
    />
    <path d={appleBody(cx, cy, r)} fill={fill} />
    <g clipPath={`url(#${id})`}>
      <ellipse
        cx={cx + r * 0.55}
        cy={cy + r * 0.25}
        rx={r * 0.55}
        ry={r * 0.95}
        fill="#000"
        opacity=".14"
      />
      <ellipse
        cx={cx - r * 0.42}
        cy={cy - r * 0.22}
        rx={r * 0.16}
        ry={r * 0.3}
        fill="#fff"
        opacity=".22"
        transform={`rotate(-22 ${cx - r * 0.42} ${cy - r * 0.22})`}
      />
    </g>
    <path
      d={`M${cx} ${cy - r * 0.7}q${r * 0.05} ${-r * 0.28} ${r * 0.14} ${-r * 0.4}`}
      stroke="#3B2A1A"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <ellipse
      cx={cx + r * 0.34}
      cy={cy - r * 0.92}
      rx={r * 0.3}
      ry={r * 0.12}
      fill="#5FA85C"
      transform={`rotate(-28 ${cx + r * 0.34} ${cy - r * 0.92})`}
    />
  </g>
);

const ApplesArt = memo(function ApplesArt() {
  return (
    <svg {...svgProps}>
      <rect width="400" height="300" fill="#14523F" />
      <circle cx="200" cy="165" r="132" fill="#1A6650" />
      <ellipse
        cx="200"
        cy="268"
        rx="176"
        ry="12"
        fill="#062B22"
        opacity=".45"
      />
      <Apple id="ap-g" cx={215} cy={140} r={50} fill="#A5B95A" />
      <Apple id="ap-a" cx={148} cy={196} r={64} fill="#A82A2E" />
      <Apple id="ap-b" cx={262} cy={210} r={54} fill="#C13A35" />
    </svg>
  );
});

const Carrot = ({ x, y, a }) => (
  <g transform={`translate(${x} ${y}) rotate(${a})`}>
    <ellipse
      cx="-5"
      cy="-16"
      rx="5"
      ry="17"
      fill="#4E9A4B"
      transform="rotate(-22 -5 -16)"
    />
    <ellipse
      cx="5"
      cy="-17"
      rx="5"
      ry="18"
      fill="#3E8642"
      transform="rotate(20 5 -17)"
    />
    <ellipse cx="0" cy="-18" rx="4.6" ry="19" fill="#5DAA57" />
    <path d="M-15 0Q0-11 15 0L2.5 112Q0 118-2.5 112Z" fill="#E37A2C" />
    <path
      d="M-8 30h9M3 52h8M-6 72h8M2 92h5"
      stroke="#B9581A"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity=".7"
    />
  </g>
);

const VegArt = memo(function VegArt() {
  return (
    <svg {...svgProps}>
      <rect width="400" height="300" fill="#DFE7DC" />
      <circle cx="205" cy="165" r="130" fill="#EAF0E7" />
      <ellipse cx="200" cy="268" rx="178" ry="12" fill="#7C9078" opacity=".4" />
      <Carrot x={92} y={118} a={26} />
      <Carrot x={135} y={100} a={10} />
      <rect x="290" y="206" width="24" height="58" rx="8" fill="#9DBE6E" />
      {[
        [302, 172, 32, "#2F7D46"],
        [272, 190, 25, "#3C8F52"],
        [332, 190, 25, "#3C8F52"],
        [284, 158, 23, "#2F7D46"],
        [320, 156, 23, "#3C8F52"],
      ].map(([cx, cy, r, f], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={f} />
      ))}
      <circle cx="292" cy="164" r="6" fill="#5DAA6B" opacity=".55" />
      <circle cx="326" cy="182" r="5" fill="#5DAA6B" opacity=".5" />
      <circle cx="188" cy="208" r="54" fill="#C7362B" />
      <path
        d="M188 154a54 54 0 0 1 54 54 54 54 0 0 1-54 54"
        fill="#000"
        opacity=".1"
      />
      <ellipse
        cx="164"
        cy="190"
        rx="8"
        ry="15"
        fill="#fff"
        opacity=".22"
        transform="rotate(24 164 190)"
      />
      <path
        d="m188 156 9 10 12-4-6 12 10 8-13 1-4 12-8-9-11 5 4-12-11-7 13-2z"
        fill="#3E8B45"
      />
    </svg>
  );
});

const OilArt = memo(function OilArt() {
  const bottle =
    "M184 62H216V104C216 118 250 118 250 146V246Q250 262 234 262H166Q150 262 150 246V146C150 118 184 118 184 104Z";
  return (
    <svg {...svgProps}>
      <rect width="400" height="300" fill="#182F52" />
      <circle cx="200" cy="165" r="132" fill="#22406B" />
      <ellipse
        cx="200"
        cy="266"
        rx="150"
        ry="10"
        fill="#08152A"
        opacity=".55"
      />
      <clipPath id="oil-c">
        <path d={bottle} />
      </clipPath>
      <path d={bottle} fill="rgba(255,255,255,.07)" />
      <g clipPath="url(#oil-c)">
        <rect x="140" y="128" width="120" height="140" fill="#D8A038" />
        <rect x="140" y="128" width="120" height="6" fill="#E7B65A" />
        <rect
          x="160"
          y="150"
          width="8"
          height="92"
          rx="4"
          fill="#fff"
          opacity=".3"
        />
        <rect
          x="163"
          y="176"
          width="74"
          height="54"
          fill="#F4F1E8"
          opacity=".96"
        />
        <path
          d="M178 194h44M178 206h30"
          stroke="#0B1F3A"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".7"
        />
        <circle cx="222" cy="210" r="0" />
      </g>
      <path
        d={bottle}
        fill="none"
        stroke="#fff"
        strokeOpacity=".55"
        strokeWidth="1.5"
      />
      <rect x="181" y="42" width="38" height="22" rx="3" fill="#B9975B" />
      <path
        d="M181 50h38M181 56h38"
        stroke="#8A6D3B"
        strokeWidth="1"
        opacity=".7"
      />
      <path
        d="M314 150C314 150 290 182 290 198a24 24 0 0 0 48 0C338 182 314 150 314 150Z"
        fill="#D8A038"
      />
      <ellipse
        cx="305"
        cy="196"
        rx="4"
        ry="9"
        fill="#fff"
        opacity=".35"
        transform="rotate(12 305 196)"
      />
      <path
        d="M92 184s-14 18-14 28a14 14 0 0 0 28 0c0-10-14-28-14-28Z"
        fill="#D8A038"
        opacity=".9"
      />
    </svg>
  );
});

const PulsesArt = memo(function PulsesArt() {
  const beans = useMemo(() => {
    const r = rng(17);
    const pal = [
      "#C8612F",
      "#A8482C",
      "#7D9B4E",
      "#DDB247",
      "#DDB247",
      "#93AF5E",
    ];
    return moundPoints(r, 440, 200, 254, 292, 132).map((p) => ({
      ...p,
      r: 4.2 + r() * 2.2,
      c: pal[Math.floor(r() * pal.length)],
    }));
  }, []);
  return (
    <svg {...svgProps}>
      <rect width="400" height="300" fill="#EFE8D8" />
      <circle cx="200" cy="165" r="132" fill="#F6F1E4" />
      <path
        d="M26 250Q200 304 374 250Q354 284 200 288Q46 284 26 250Z"
        fill="#7E5F3B"
      />
      <ellipse cx="200" cy="250" rx="174" ry="15" fill="#A98357" />
      {beans.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill={p.c}
          stroke="#00000022"
          strokeWidth=".6"
        />
      ))}
    </svg>
  );
});

const NutsArt = memo(function NutsArt() {
  const nuts = useMemo(() => {
    const r = rng(29);
    return moundPoints(r, 150, 200, 262, 320, 148).map((p) => {
      const k = r();
      return {
        ...p,
        kind:
          k < 0.4
            ? "almond"
            : k < 0.65
              ? "walnut"
              : k < 0.9
                ? "cashew"
                : "pistachio",
        a: r() * 360,
        s: 0.95 + r() * 0.35,
      };
    });
  }, []);
  return (
    <svg {...svgProps}>
      <rect width="400" height="300" fill="#5A3F2A" />
      <circle cx="200" cy="165" r="132" fill="#6A4B33" />
      <ellipse cx="200" cy="266" rx="176" ry="12" fill="#2A1A0E" opacity=".5" />
      {nuts.map((n, i) => (
        <g
          key={i}
          transform={`translate(${n.x} ${n.y}) rotate(${n.a}) scale(${n.s})`}
        >
          {n.kind === "almond" && (
            <>
              <path
                d="M-13 0C-11-8-2-10 6-7 11-5 14-2 14 0 14 2 11 5 6 7-2 10-11 8-13 0Z"
                fill="#C08A55"
                stroke="#6B4526"
                strokeWidth=".8"
              />
              <path
                d="M-9 0Q0-3 10 0"
                stroke="#8E5F35"
                strokeWidth=".9"
                fill="none"
              />
            </>
          )}
          {n.kind === "walnut" && (
            <>
              <circle r="11" fill="#A87A4A" stroke="#5E3E22" strokeWidth=".8" />
              <path
                d="M0-11C-4-4 4 4 0 11M-8-6C-3-3-3 3-8 6M8-6C3-3 3 3 8 6"
                stroke="#6E4A28"
                strokeWidth=".9"
                fill="none"
              />
            </>
          )}
          {n.kind === "cashew" && (
            <path
              d="M-12-3C-8-11 6-11 11-3 13 1 11 6 6 8 8 3 4 0-2 1-6 2-9 1-12-3Z"
              fill="#E5C58F"
              stroke="#9C7A46"
              strokeWidth=".8"
            />
          )}
          {n.kind === "pistachio" && (
            <>
              <ellipse
                rx="7.5"
                ry="5.5"
                fill="#8FB05A"
                stroke="#4E6A2A"
                strokeWidth=".7"
              />
              <path d="M-7 0h14" stroke="#E9DCB8" strokeWidth="1" />
            </>
          )}
        </g>
      ))}
    </svg>
  );
});

/* Portrait scene for the introduction: port, moon and fields. */
const StoryArt = memo(function StoryArt() {
  const boxes = useMemo(() => {
    const r = rng(11);
    const cols = [
      "#173F6E",
      "#1E5286",
      "#0F6B54",
      "#0D5443",
      "#7C6A40",
      "#12345C",
      "#25608F",
    ];
    const out = [];
    for (let c = 0; c < 10; c++) {
      const n = 1 + Math.floor(r() * 4);
      for (let k = 0; k < n; k++)
        out.push({
          x: 18 + c * 56,
          y: 452 - (k + 1) * 22,
          f: cols[Math.floor(r() * cols.length)],
        });
    }
    return out;
  }, []);
  const stars = useMemo(() => {
    const r = rng(5);
    return Array.from({ length: 40 }, () => ({
      x: r() * 600,
      y: 10 + r() * 240,
      r: 0.6 + r() * 1.1,
      o: 0.2 + r() * 0.5,
    }));
  }, []);
  const rows = useMemo(
    () => Array.from({ length: 30 }, (_, i) => -900 + i * 70),
    [],
  );
  const F1 = "M0 500C120 486 240 506 360 494S540 486 600 498V720H0Z";
  const F2 = "M0 580C140 556 300 596 440 572S560 562 600 574V720H0Z";
  return (
    <svg
      viewBox="0 0 600 720"
      preserveAspectRatio="xMidYMid slice"
      className="art"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="st-f2">
          <path d={F2} />
        </clipPath>
        <clipPath id="st-f1">
          <path d={F1} />
        </clipPath>
      </defs>
      <rect width="600" height="720" fill="#0C2547" />
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#fff" opacity={s.o} />
      ))}
      <circle
        cx="452"
        cy="132"
        r="92"
        fill="none"
        stroke="#B9975B"
        strokeOpacity=".3"
      />
      <circle cx="452" cy="132" r="52" fill="#EEF1F4" />
      <circle cx="440" cy="120" r="9" fill="#DDE3EA" />
      <circle cx="468" cy="146" r="6" fill="#DDE3EA" />
      <rect y="452" width="600" height="46" fill="#08182F" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={430 - i * 40}
          y={462 + i * 9}
          width={90 + i * 80}
          height="2"
          fill="#EEF1F4"
          opacity={0.2 - i * 0.04}
        />
      ))}
      <g stroke="#050F1F" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M420 300V452M520 300V452" />
        <path d="M400 296H560" strokeWidth="9" />
        <path d="M410 296 130 274" />
        <path d="M410 296 250 254 130 274" strokeWidth="2.5" />
      </g>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width="52" height="20" fill={b.f} />
          <path
            d={`M${b.x + 8} ${b.y + 2}v16M${b.x + 18} ${b.y + 2}v16M${b.x + 28} ${b.y + 2}v16M${b.x + 38} ${b.y + 2}v16M${b.x + 46} ${b.y + 2}v16`}
            stroke="#000"
            strokeOpacity=".22"
            strokeWidth="1"
          />
        </g>
      ))}
      <rect y="452" width="600" height="3" fill="#B9975B" opacity=".4" />
      <path d={F1} fill="#135C4D" />
      <path d={F2} fill="#0D4A3F" />
      <g
        clipPath="url(#st-f2)"
        stroke="#1B6F5B"
        strokeOpacity=".55"
        strokeWidth="1.6"
      >
        {rows.map((x) => (
          <path key={x} d={`M300 560L${x} 720`} />
        ))}
      </g>
      <path d="M0 660C160 640 320 676 600 650V720H0Z" fill="#082F2E" />
    </svg>
  );
});

/* Cinematic hero: moon over fields and sea, a container ship on the horizon. */
const HeroScene = memo(function HeroScene() {
  const dots = worldDots();
  const stars = useMemo(() => {
    const r = rng(7);
    return Array.from({ length: 54 }, () => ({
      x: r() * 1600,
      y: 20 + r() * 330,
      r: 0.6 + r() * 1.2,
      o: 0.2 + r() * 0.5,
    }));
  }, []);
  const boxes = useMemo(() => {
    const r = rng(21);
    const cols = [
      "#0E2C55",
      "#153F6E",
      "#0E5C4B",
      "#1B4E7A",
      "#6A5A38",
      "#0A2444",
    ];
    const out = [];
    [11, 10, 8].forEach((n, row) => {
      for (let c = 0; c < n; c++)
        out.push({
          x: 12 + c * 16.5,
          y: -8.4 * (row + 1),
          f: cols[Math.floor(r() * cols.length)],
        });
    });
    return out;
  }, []);
  const rowsMid = useMemo(
    () => Array.from({ length: 44 }, (_, i) => -1400 + i * 90),
    [],
  );
  const rowsNear = useMemo(
    () => Array.from({ length: 30 }, (_, i) => -1200 + i * 130),
    [],
  );
  const FAR = "M0 660C240 636 520 662 800 648S1360 636 1600 654V900H0Z";
  const MID = "M0 724C300 692 560 734 860 708S1400 692 1600 714V900H0Z";
  const NEAR = "M0 810C320 778 640 822 960 798S1440 784 1600 806V900H0Z";
  return (
    <svg
      className="scene"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="hs-mid">
          <path d={MID} />
        </clipPath>
        <clipPath id="hs-near">
          <path d={NEAR} />
        </clipPath>
      </defs>
      <rect width="1600" height="900" fill="#081A33" />
      <g stroke="#fff" strokeOpacity=".035">
        {Array.from({ length: 17 }, (_, i) => (
          <path key={"v" + i} d={`M${i * 100} 0V560`} />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <path key={"h" + i} d={`M0 ${i * 93}H1600`} />
        ))}
      </g>
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#fff" opacity={s.o} />
      ))}
      <g
        transform="translate(0 -18) scale(1.6)"
        fill="none"
        stroke="#fff"
        strokeOpacity=".09"
        strokeWidth="2.3"
        strokeLinecap="round"
      >
        <path d={dots} />
      </g>
      <g className="moon">
        <circle
          cx="1240"
          cy="290"
          r="268"
          fill="none"
          stroke="#fff"
          strokeOpacity=".07"
        />
        <circle
          cx="1240"
          cy="290"
          r="205"
          fill="none"
          stroke="#B9975B"
          strokeOpacity=".32"
        />
        <circle cx="1240" cy="290" r="150" fill="#EEF1F4" />
        <circle cx="1196" cy="248" r="26" fill="#DDE3EA" />
        <circle cx="1282" cy="330" r="17" fill="#DDE3EA" />
        <circle cx="1268" cy="236" r="11" fill="#E4E9EF" />
        <circle cx="1206" cy="344" r="9" fill="#E4E9EF" />
      </g>
      <rect y="560" width="1600" height="110" fill="#0B2143" />
      {[160, 120, 140, 90, 110, 60, 70, 40].map((w, i) => (
        <rect
          key={i}
          x={1240 - w / 2}
          y={584 + i * 8}
          width={w}
          height="2.2"
          fill="#EEF1F4"
          opacity={0.26 - i * 0.02}
        />
      ))}
      <path d="M0 560H1600" stroke="#B9975B" strokeOpacity=".4" />
      <g transform="translate(1170 566) scale(1.5)">
        <path d="M0 0H230L214 17H18Z" fill="#04101F" />
        {boxes.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width="15.5" height="8" fill={b.f} />
        ))}
        <rect x="196" y="-30" width="26" height="30" fill="#0A1E3A" />
        <rect x="200" y="-39" width="18" height="9" fill="#0E2B52" />
        <path d="M209-39v-12" stroke="#0A1E3A" strokeWidth="1.5" />
        <path
          d="M204-20h14M204-13h14"
          stroke="#B9975B"
          strokeOpacity=".55"
          strokeWidth="1"
        />
      </g>
      <path d={FAR} fill="#135C4D" />
      <path d={MID} fill="#0D4A3F" />
      <g
        clipPath="url(#hs-mid)"
        stroke="#1B6F5B"
        strokeOpacity=".5"
        strokeWidth="2"
      >
        {rowsMid.map((x) => (
          <path key={x} d={`M800 690L${x} 900`} />
        ))}
      </g>
      <path d={NEAR} fill="#082F2E" />
      <g
        clipPath="url(#hs-near)"
        stroke="#0F4A44"
        strokeOpacity=".8"
        strokeWidth="2.4"
      >
        {rowsNear.map((x) => (
          <path key={x} d={`M800 766L${x} 900`} />
        ))}
      </g>
    </svg>
  );
});

/* -------------------------------- PRODUCTS -------------------------------- */

const PRODUCTS = [
  {
    id: "rice",
    name: "Premium Basmati Rice",
    category: "Grains",
    desc: "Long-grain aromatic rice for retail, wholesale and food-service buyers.",
    Art: RiceArt,
  },
  {
    id: "sugar",
    name: "Refined Sugar",
    category: "Staples",
    desc: "Clean, consistent white sugar for industrial and everyday use.",
    Art: SugarArt,
  },
  {
    id: "apples",
    name: "Fresh Apples",
    category: "Fresh fruit",
    desc: "Crisp seasonal apples, sorted and packed for export markets.",
    Art: ApplesArt,
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
    category: "Fresh produce",
    desc: "A range of seasonal vegetables supplied with careful handling.",
    Art: VegArt,
  },
  {
    id: "oil",
    name: "Cooking Oil",
    category: "Edible oils",
    desc: "Cooking oils in retail and bulk formats for varied requirements.",
    Art: OilArt,
  },
  {
    id: "pulses",
    name: "Pulses",
    category: "Pulses & legumes",
    desc: "Lentils, beans and other pulses — a dependable pantry staple.",
    Art: PulsesArt,
  },
  {
    id: "nuts",
    name: "Mixed Nuts",
    category: "Nuts & dry fruit",
    desc: "Blends of quality nuts for snacking, gifting and food production.",
    Art: NutsArt,
  },
];

/* --------------------------------- SECTIONS -------------------------------- */

function Logo() {
  return (
    <a
      className="logo"
      href="#home"
      onClick={(e) => onHref(e, "#home")}
      aria-label={`${CONTENT.brand} — home`}
    >
      <svg width="38" height="38" viewBox="0 0 34 34" aria-hidden="true">
        <circle
          cx="17"
          cy="17"
          r="15.5"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
        />
        <path
          d="M20 6A12 12 0 1 0 20 28A16 16 0 0 1 20 6Z"
          fill="currentColor"
        />
        <circle cx="25.5" cy="10.5" r="1.3" fill="var(--gold)" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">SKY MOON</span>
        <span className="logo__sub">TRADING</span>
      </span>
    </a>
  );
}

function Header({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(([e]) =>
      setScrolled(!e.isIntersecting),
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = (e, id) => {
    e.preventDefault();
    setOpen(false);
    goTo(id);
  };

  return (
    <>
      <div ref={sentinel} className="sentinel" aria-hidden="true" />
      <header
        className="hdr"
        data-s={scrolled ? "1" : "0"}
        data-open={open ? "1" : "0"}
      >
        <div className="hdr__bar">
          <Logo />
          <nav className="nav" aria-label="Primary">
            {CONTENT.nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={active === n.id ? "is-active" : ""}
                aria-current={active === n.id ? "true" : undefined}
                onClick={(e) => nav(e, n.id)}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hdr__right">
            <a
              href="#contact"
              className="btn btn--hdr"
              onClick={(e) => nav(e, "contact")}
            >
              {CONTENT.cta.primary}
            </a>
            <button
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className="drawer" data-open={open ? "1" : "0"} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {CONTENT.nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => nav(e, n.id)}
              tabIndex={open ? 0 : -1}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--emerald"
            onClick={(e) => nav(e, "contact")}
            tabIndex={open ? 0 : -1}
          >
            {CONTENT.cta.primary}
          </a>
        </nav>
      </div>
    </>
  );
}

function Hero() {
  const h = CONTENT.hero;
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Media src={IMAGES.hero} alt="">
          <HeroScene />
        </Media>
      </div>
      <div className="hero__shade" />
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="eyebrow anim" style={{ "--d": ".55s" }}>
            <i aria-hidden="true" />
            {h.eyebrow}
          </p>
          <h1 id="hero-title" className="h1">
            {h.lines.map((l, i) => (
              <span className="mask" key={l}>
                <span style={{ "--d": `${0.75 + i * 0.14}s` }}>{l}</span>
              </span>
            ))}
          </h1>
          <p className="lede anim" style={{ "--d": "1.3s" }}>
            {h.copy}
          </p>
          <div className="hero__cta anim" style={{ "--d": "1.5s" }}>
            <a
              href="#products"
              className="btn btn--emerald"
              onClick={(e) => onHref(e, "#products")}
            >
              {h.primary}
            </a>
            <a
              href="#contact"
              className="btn btn--ghost-light"
              onClick={(e) => onHref(e, "#contact")}
            >
              {h.secondary}
            </a>
          </div>
        </div>
      </div>
      <div className="trust anim" style={{ "--d": "1.85s" }}>
        <div className="wrap">
          <ul className="trust__grid">
            {h.trust.map((t) => {
              const I = ICONS[t.icon];
              return (
                <li className="trust__item" key={t.text}>
                  <I size={22} sw={1.2} />
                  <span>{t.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const c = CONTENT.intro;
  return (
    <section
      id="about"
      className="sec sec--white"
      aria-labelledby="intro-title"
    >
      <div className="wrap intro">
        <Reveal className="intro__media">
          <div className="frame frame--tall">
            <Media src={IMAGES.story} alt="">
              <StoryArt />
            </Media>
          </div>
        </Reveal>
        <div className="intro__copy">
          <Reveal as="h2" id="intro-title" className="h2">
            {c.title}
          </Reveal>
          <Reveal delay={90} className="prose">
            {c.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={160}>
            <ul className="hl">
              {c.highlights.map((x) => (
                <li key={x.label}>
                  <h3>{x.label}</h3>
                  <p>{x.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={220}>
            <a
              className="link"
              href={c.ctaHref}
              onClick={(e) => onHref(e, c.ctaHref)}
            >
              {c.cta}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const c = CONTENT.products;
  const rail = useRef(null);
  const [pos, setPos] = useState({
    left: 0,
    width: 100,
    prev: false,
    next: true,
  });

  const measure = () => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const width = Math.max(12, (el.clientWidth / el.scrollWidth) * 100);
    const p = max > 0 ? el.scrollLeft / max : 0;
    setPos({
      width,
      left: p * (100 - width),
      prev: el.scrollLeft > 4,
      next: el.scrollLeft < max - 4,
    });
  };
  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const step = (dir) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector(".pcard");
    const w = card ? card.getBoundingClientRect().width + 28 : 360;
    el.scrollBy({ left: dir * w * 1.5, behavior: "smooth" });
  };

  return (
    <section
      id="products"
      className="sec sec--paper products"
      aria-labelledby="products-title"
    >
      <div className="wrap products__head">
        <div>
          <Reveal as="h2" id="products-title" className="h2 h2--wide">
            {c.title}
          </Reveal>
          <Reveal delay={90} as="p" className="sub">
            {c.copy}
          </Reveal>
        </div>
        <div className="rail-ctrl" aria-label="Product carousel controls">
          <button
            onClick={() => step(-1)}
            disabled={!pos.prev}
            aria-label="Previous products"
          >
            <Chevron dir="left" />
          </button>
          <button
            onClick={() => step(1)}
            disabled={!pos.next}
            aria-label="Next products"
          >
            <Chevron />
          </button>
        </div>
      </div>

      <div
        className="rail"
        ref={rail}
        onScroll={measure}
        tabIndex={0}
        aria-label="Products"
      >
        {PRODUCTS.map((p) => (
          <article className="pcard" key={p.id}>
            <div className="pcard__media">
              <Media src={IMAGES[p.id]} alt={p.name}>
                <p.Art />
              </Media>
            </div>
            <div className="pcard__body">
              <p className="pcard__cat">{p.category}</p>
              <h3 className="pcard__name">{p.name}</h3>
              <p className="pcard__desc">{p.desc}</p>
              <a
                className="pcard__link"
                href={c.linkHref}
                onClick={(e) => onHref(e, c.linkHref)}
                aria-label={`${c.linkLabel}: ${p.name}`}
              >
                {c.linkLabel}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="wrap">
        <div className="rail-progress" aria-hidden="true">
          <span style={{ width: `${pos.width}%`, left: `${pos.left}%` }} />
        </div>
      </div>
    </section>
  );
}

function Why() {
  const c = CONTENT.why;
  return (
    <section
      id="services"
      className="sec sec--white"
      aria-labelledby="why-title"
    >
      <div className="wrap">
        <div className="why__head">
          <Reveal as="h2" id="why-title" className="h2">
            {c.title}
          </Reveal>
          <Reveal delay={90} as="p" className="sub">
            {c.copy}
          </Reveal>
        </div>
        <ul className="why__grid">
          {c.items.map((it, i) => {
            const I = ICONS[it.icon];
            return (
              <Reveal
                as="li"
                delay={i * 90}
                className="why__item"
                key={it.title}
              >
                <span className="why__ico">
                  <I size={34} sw={1.1} />
                </span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Global() {
  const c = CONTENT.global;
  const dots = worldDots();
  const [hx, hy] = proj(HUB.lon, HUB.lat);
  const pts = REGIONS.map((r) => {
    const [x, y] = proj(r.lon, r.lat);
    const dist = Math.hypot(x - hx, y - hy);
    const cx = (x + hx) / 2;
    const cy = (y + hy) / 2 - dist * 0.28;
    return {
      ...r,
      x,
      y,
      d: `M${hx.toFixed(1)} ${hy.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`,
    };
  });
  return (
    <section
      id="global"
      className="sec sec--paper global"
      aria-labelledby="global-title"
    >
      <div className="wrap global__head">
        <Reveal as="h2" id="global-title" className="h2">
          {c.title}
        </Reveal>
        <Reveal delay={90} as="p" className="sub">
          {c.copy}
        </Reveal>
      </div>
      <div className="wrap">
        <Reveal className="globe">
          <svg
            viewBox="0 10 1000 400"
            role="img"
            aria-label="World map with illustrative trade routes from a sourcing hub to market regions"
          >
            <g stroke="#0B1F3A" strokeOpacity=".05">
              {Array.from({ length: 11 }, (_, i) => (
                <path key={"v" + i} d={`M${i * 100} 10V410`} />
              ))}
              {Array.from({ length: 5 }, (_, i) => (
                <path key={"h" + i} d={`M0 ${60 + i * 80}H1000`} />
              ))}
            </g>
            <path
              d={dots}
              fill="none"
              stroke="#0B1F3A"
              strokeOpacity=".3"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            {pts.map((p, i) => (
              <path
                key={"a" + i}
                className="arc"
                pathLength="1"
                d={p.d}
                fill="none"
                stroke="#0F7B5F"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ "--d": `${300 + i * 160}ms` }}
              />
            ))}
            {pts.map((p, i) => {
              const left = p.x > 820;
              const tx = left ? p.x - 10 : p.x + 10;
              return (
                <g
                  key={"m" + i}
                  className="mk"
                  style={{ "--d": `${1000 + i * 160}ms` }}
                >
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="6"
                    fill="#0F7B5F"
                    fillOpacity=".16"
                  />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="3.2"
                    fill="#0B1F3A"
                    stroke="#fff"
                    strokeWidth="1.2"
                  />
                  <text
                    className="maplabel"
                    x={tx}
                    y={p.y - 2}
                    textAnchor={left ? "end" : "start"}
                  >
                    <tspan fontWeight="600">{p.label}</tspan>
                    <tspan className="sub" x={tx} dy="12">
                      {p.note}
                    </tspan>
                  </text>
                </g>
              );
            })}
            <g>
              <circle
                className="pulse"
                cx={hx}
                cy={hy}
                r="7"
                fill="none"
                stroke="#B9975B"
                strokeWidth="1.2"
              />
              <circle
                cx={hx}
                cy={hy}
                r="7"
                fill="#fff"
                stroke="#B9975B"
                strokeWidth="1.4"
              />
              <circle cx={hx} cy={hy} r="2.8" fill="#B9975B" />
              <text
                className="maplabel maplabel--hub"
                x={hx - 12}
                y={hy - 12}
                textAnchor="end"
              >
                <tspan fontWeight="600">{c.hubLabel}</tspan>
                <tspan className="sub" x={hx - 12} dy="12">
                  {c.hubNote}
                </tspan>
              </text>
            </g>
          </svg>
        </Reveal>
        <div className="legend">
          <span>
            <i className="lg lg--hub" />
            {c.legendHub}
          </span>
          <span>
            <i className="lg lg--reg" />
            {c.legendRegion}
          </span>
        </div>
        <ul className="regions">
          {REGIONS.map((r, i) => (
            <li key={i}>
              <strong>{r.label}</strong>
              <span>{r.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CtaBand() {
  const c = CONTENT.cta;
  return (
    <section id="contact" className="cta" aria-labelledby="cta-title">
      <svg className="cta__moon" viewBox="0 0 900 900" aria-hidden="true">
        <circle
          cx="450"
          cy="450"
          r="440"
          fill="none"
          stroke="#fff"
          strokeOpacity=".07"
        />
        <circle
          cx="450"
          cy="450"
          r="330"
          fill="none"
          stroke="#B9975B"
          strokeOpacity=".3"
        />
        <circle cx="450" cy="450" r="200" fill="#fff" fillOpacity=".045" />
      </svg>
      <div className="wrap cta__inner">
        <Reveal as="h2" id="cta-title" className="h2 h2--light">
          {c.title}
        </Reveal>
        <Reveal delay={90} as="p" className="lede lede--light">
          {c.copy}
        </Reveal>
        <Reveal delay={170} className="cta__btns">
          <a
            className="btn btn--emerald"
            href={`mailto:${c.email}?subject=Quote%20request`}
          >
            {c.primary}
          </a>
          <a className="btn btn--ghost-light" href={`mailto:${c.email}`}>
            {c.secondary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const f = CONTENT.footer;
  return (
    <footer className="ftr">
      <div className="wrap ftr__grid">
        <div className="ftr__brand">
          <div className="logo logo--static">
            <svg width="38" height="38" viewBox="0 0 34 34" aria-hidden="true">
              <circle
                cx="17"
                cy="17"
                r="15.5"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1"
              />
              <path
                d="M20 6A12 12 0 1 0 20 28A16 16 0 0 1 20 6Z"
                fill="currentColor"
              />
              <circle cx="25.5" cy="10.5" r="1.3" fill="var(--gold)" />
            </svg>
            <span className="logo__text">
              <span className="logo__name">SKY MOON</span>
              <span className="logo__sub">TRADING</span>
            </span>
          </div>
          <p>{f.description}</p>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <a href="#products" onClick={(e) => onHref(e, "#products")}>
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {f.company.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => onHref(e, `#${l.id}`)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="ftr__contact">
            {f.contact.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <div className="social">
            {f.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                onClick={(e) => onHref(e, s.href)}
              >
                <Social kind={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="ftr__base">
          <p>
            © {new Date().getFullYear()} {CONTENT.brand}. All rights reserved.
          </p>
          <p>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Privacy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- STYLES --------------------------------- */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&display=swap');

.smt{
  --navy:#0B1F3A; --navy-9:#071426; --navy-7:#12315A; --ink:#0E1B2E;
  --paper:#F3F5F5; --emerald:#0F7B5F; --emerald-d:#0A5A45;
  --gold:#B9975B; --gold-l:#D8BE88; --gold-d:#8A6D3B;
  --muted:#52627A; --line:rgba(11,31,58,.14);
  --serif:"Newsreader","Iowan Old Style","Palatino Linotype",Georgia,serif;
  --sans:"Hanken Grotesk","Segoe UI",system-ui,-apple-system,Helvetica,Arial,sans-serif;
  --ease:cubic-bezier(.2,.7,.2,1);
  position:relative; overflow-x:clip; background:#fff; color:var(--ink);
  font-family:var(--sans); font-size:17px; line-height:1.65;
  -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
}
.smt *,.smt *::before,.smt *::after{box-sizing:border-box}
.smt h1,.smt h2,.smt h3,.smt h4,.smt p,.smt ul{margin:0;padding:0}
.smt ul{list-style:none}
.smt a{color:inherit;text-decoration:none}
.smt button{font:inherit;color:inherit;cursor:pointer}
.smt :focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.sentinel{position:absolute;top:0;left:0;width:1px;height:60px;pointer-events:none}

.wrap{width:100%;max-width:1288px;margin:0 auto;padding-inline:clamp(20px,4vw,48px)}

/* ---- type ---- */
.h1,.h2{font-family:var(--serif);font-weight:400;letter-spacing:-.018em;color:var(--navy)}
.h1{font-size:clamp(2.7rem,1.3rem + 5.4vw,5.5rem);line-height:1.02;color:#fff;letter-spacing:-.025em}
.h2{font-size:clamp(2.05rem,1.2rem + 2.9vw,3.5rem);line-height:1.08;max-width:15ch}
.h2--wide{max-width:19ch}
.h2--light{color:#fff;max-width:17ch;font-size:clamp(2.3rem,1.2rem + 4.2vw,4.5rem);line-height:1.04}
.sub{color:var(--muted);max-width:52ch;margin-top:22px;font-size:1.03rem}
.lede{font-size:clamp(1.05rem,.98rem + .35vw,1.25rem);line-height:1.6;color:rgba(255,255,255,.82);max-width:50ch}
.lede--light{margin-top:26px}
.eyebrow{display:flex;align-items:center;gap:16px;font-size:12.5px;font-weight:600;letter-spacing:.24em;color:var(--gold-l)}
.eyebrow i{display:block;width:44px;height:1px;background:var(--gold)}

/* ---- header ---- */
.hdr{position:fixed;inset:0 0 auto 0;z-index:60;color:#fff;transition:background .5s var(--ease),box-shadow .5s var(--ease),color .4s var(--ease);animation:fadeDown 1.1s var(--ease) .2s both}
.hdr__bar{max-width:1288px;margin:0 auto;padding:0 clamp(20px,4vw,48px);height:96px;display:flex;align-items:center;justify-content:space-between;gap:32px;transition:height .5s var(--ease)}
.hdr[data-s="1"]{background:rgba(255,255,255,.95);-webkit-backdrop-filter:saturate(1.4) blur(12px);backdrop-filter:saturate(1.4) blur(12px);color:var(--navy);box-shadow:0 1px 0 rgba(11,31,58,.08),0 12px 30px -20px rgba(11,31,58,.4)}
.hdr[data-s="1"] .hdr__bar{height:68px}
.hdr[data-open="1"]{background:transparent;color:#fff;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}

.logo{display:inline-flex;align-items:center;gap:14px;color:inherit;flex-shrink:0}
.logo svg{flex-shrink:0;transition:transform .8s var(--ease)}
.logo:hover svg{transform:rotate(-14deg)}
.logo__text{display:flex;flex-direction:column;line-height:1}
.logo__name{font-family:var(--serif);font-weight:500;font-size:21px;letter-spacing:.2em}
.logo__sub{margin-top:7px;font-size:9.5px;font-weight:600;letter-spacing:.62em;color:var(--gold-l);padding-left:1px}
.hdr[data-s="1"] .logo__sub{color:var(--gold-d)}
.hdr[data-open="1"] .logo__sub{color:var(--gold-l)}

.nav{display:flex;gap:clamp(18px,2.2vw,38px)}
.nav a{position:relative;font-size:14.5px;font-weight:500;letter-spacing:.01em;padding:8px 0;opacity:.92;transition:opacity .3s}
.nav a::after{content:"";position:absolute;left:0;right:0;bottom:2px;height:1px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .5s var(--ease)}
.nav a:hover{opacity:1}
.nav a:hover::after,.nav a.is-active::after{transform:scaleX(1)}

.hdr__right{display:flex;align-items:center;gap:18px}
.burger{display:none;width:44px;height:44px;background:none;border:0;position:relative;padding:0}
.burger span{position:absolute;left:10px;right:10px;height:1.5px;background:currentColor;transition:transform .5s var(--ease),top .5s var(--ease)}
.burger span:first-child{top:18px}.burger span:last-child{top:25px}
.hdr[data-open="1"] .burger span:first-child{top:21.5px;transform:rotate(45deg)}
.hdr[data-open="1"] .burger span:last-child{top:21.5px;transform:rotate(-45deg)}

.drawer{position:fixed;inset:0;z-index:55;background:var(--navy-9);padding:120px clamp(24px,6vw,64px) 48px;display:flex;flex-direction:column;justify-content:center;opacity:0;visibility:hidden;transition:opacity .5s var(--ease),visibility 0s linear .5s}
.drawer[data-open="1"]{opacity:1;visibility:visible;transition:opacity .5s var(--ease)}
.drawer nav{display:flex;flex-direction:column;align-items:flex-start;gap:6px}
.drawer nav a:not(.btn){font-family:var(--serif);font-size:clamp(1.9rem,7vw,2.6rem);color:#fff;padding:6px 0;border-bottom:1px solid transparent;transition:color .3s,padding-left .5s var(--ease)}
.drawer nav a:not(.btn):hover{color:var(--gold-l);padding-left:10px}
.drawer .btn{margin-top:28px}

/* ---- buttons ---- */
.btn{position:relative;isolation:isolate;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;height:54px;padding:0 32px;font-size:14.5px;font-weight:600;letter-spacing:.03em;border-radius:2px;border:1px solid transparent;cursor:pointer;white-space:nowrap;transition:color .45s var(--ease),border-color .45s var(--ease),box-shadow .45s var(--ease)}
.btn::before{content:"";position:absolute;inset:0;z-index:-1;background:var(--fill);transform:translateY(101%);transition:transform .55s var(--ease)}
.btn:hover::before,.btn:focus-visible::before{transform:none}
.btn--emerald{background:var(--emerald);color:#fff;--fill:var(--emerald-d)}
.btn--emerald:hover{box-shadow:0 14px 28px -16px rgba(15,123,95,.9)}
.btn--ghost-light{color:#fff;border-color:rgba(255,255,255,.45);--fill:#fff}
.btn--ghost-light:hover{color:var(--navy);border-color:#fff}
.btn--hdr{height:44px;padding:0 24px;font-size:13.5px;color:#fff;border-color:var(--gold-l);--fill:var(--gold-l)}
.btn--hdr:hover{color:var(--navy)}
.hdr[data-s="1"] .btn--hdr{background:var(--navy);border-color:var(--navy);--fill:var(--emerald)}
.hdr[data-s="1"] .btn--hdr:hover{color:#fff;border-color:var(--emerald)}

.link{display:inline-flex;align-items:center;gap:12px;font-weight:600;font-size:15px;color:var(--navy);padding-bottom:8px;border-bottom:1px solid var(--gold);transition:gap .45s var(--ease),color .3s,border-color .3s}
.link:hover{gap:20px;color:var(--emerald);border-color:var(--emerald)}
.arr{display:inline-block;transition:transform .45s var(--ease)}

/* ---- hero ---- */
.hero{position:relative;min-height:max(100svh,780px);display:flex;flex-direction:column;background:var(--navy-9);color:#fff;overflow:hidden}
.hero__media{position:absolute;inset:0;animation:sceneIn 2.4s ease-out both}
.hero__media .scene,.hero__media .art{width:100%;height:100%;display:block}
.art--img{object-fit:cover}
.hero__shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(7,20,38,.9) 0%,rgba(7,20,38,.62) 38%,rgba(7,20,38,.08) 72%),linear-gradient(180deg,rgba(7,20,38,.6) 0%,rgba(7,20,38,0) 24%)}
.hero__inner{position:relative;flex:1;display:flex;align-items:center;padding-top:150px;padding-bottom:64px}
.hero__copy{max-width:720px}
.hero .h1{margin:30px 0 30px}
.hero__cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:40px}
.trust{position:relative;border-top:1px solid rgba(255,255,255,.16);background:rgba(7,20,38,.62);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.trust__grid{display:grid;grid-template-columns:repeat(4,1fr)}
.trust__item{display:flex;align-items:center;gap:14px;padding:24px 20px 24px 0;font-size:14.5px;line-height:1.35;color:rgba(255,255,255,.86)}
.trust__item svg{flex-shrink:0;color:var(--gold-l)}
.trust__item+.trust__item{padding-left:24px;border-left:1px solid rgba(255,255,255,.12)}

.anim{animation:fadeUp 1.1s var(--ease) var(--d,0s) both}
.mask{display:block;overflow:hidden;padding-bottom:.1em;margin-bottom:-.1em}
.mask>span{display:block;animation:rise 1.3s var(--ease) var(--d,0s) both}
.moon{animation:moonRise 3.4s var(--ease) .3s both}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}}
@keyframes fadeDown{from{opacity:0;transform:translateY(-12px)}}
@keyframes rise{from{transform:translateY(108%)}}
@keyframes sceneIn{from{opacity:0;transform:scale(1.05)}}
@keyframes moonRise{from{opacity:0;transform:translateY(80px)}}

/* ---- sections ---- */
.sec{padding:clamp(88px,10.5vw,160px) 0}
.sec--white{background:#fff}
.sec--paper{background:var(--paper)}

.rv{opacity:0;transform:translateY(18px);transition:opacity 1s var(--ease) var(--d,0ms),transform 1.1s var(--ease) var(--d,0ms)}
.rv.in{opacity:1;transform:none}

/* intro */
.intro{display:grid;grid-template-columns:minmax(0,5.6fr) minmax(0,6.4fr);gap:clamp(48px,7vw,112px);align-items:center}
.frame{position:relative;overflow:hidden;background:var(--navy)}
.frame--tall{aspect-ratio:5/6}
.intro__media{position:relative;isolation:isolate}
.intro__media::before{content:"";position:absolute;z-index:-1;inset:22px -22px -22px 22px;border:1px solid var(--gold);opacity:.7}
.frame .art{width:100%;height:100%;display:block;transition:transform 1.6s var(--ease)}
.intro__media:hover .frame .art{transform:scale(1.045)}
.intro__copy .h2{margin-bottom:34px}
.prose p{color:var(--muted);max-width:56ch}
.prose p+p{margin-top:16px}
.hl{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin:46px 0 48px}
.hl li{position:relative;padding-top:20px;border-top:1px solid var(--line)}
.hl li::before{content:"";position:absolute;top:-1px;left:0;width:32px;height:2px;background:var(--emerald)}
.hl h3{font-size:12.5px;font-weight:700;letter-spacing:.18em;color:var(--navy);margin-bottom:10px}
.hl p{font-size:14.5px;line-height:1.55;color:var(--muted)}

/* products */
.products__head{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:clamp(40px,5vw,64px)}
.rail-ctrl{display:flex;gap:10px;flex-shrink:0}
.rail-ctrl button{width:52px;height:52px;display:grid;place-items:center;background:#fff;border:1px solid var(--line);border-radius:2px;color:var(--navy);transition:background .35s,color .35s,border-color .35s,opacity .3s}
.rail-ctrl button:hover:not(:disabled){background:var(--navy);color:#fff;border-color:var(--navy)}
.rail-ctrl button:disabled{opacity:.35;cursor:default}
.rail{display:flex;gap:28px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:10px max(clamp(20px,4vw,48px),calc((100% - 1192px)/2)) 44px;scroll-padding-inline:max(clamp(20px,4vw,48px),calc((100% - 1192px)/2))}
.rail::-webkit-scrollbar{display:none}
.rail:focus-visible{outline-offset:-2px}
.pcard{flex:0 0 clamp(268px,27vw,346px);scroll-snap-align:start;display:flex;flex-direction:column;background:#fff;border:1px solid var(--line);border-radius:2px;transition:transform .6s var(--ease),box-shadow .6s var(--ease),border-color .4s}
.pcard:hover{transform:translateY(-6px);border-color:rgba(15,123,95,.5);box-shadow:0 30px 44px -30px rgba(11,31,58,.5)}
.pcard__media{position:relative;aspect-ratio:4/3.3;overflow:hidden;background:var(--navy)}
.pcard__media .art{width:100%;height:100%;display:block;transition:transform 1.3s var(--ease)}
.pcard:hover .pcard__media .art{transform:scale(1.07)}
.pcard__body{display:flex;flex-direction:column;flex:1;padding:26px 28px 0}
.pcard__cat{font-size:13.5px;font-weight:600;color:var(--emerald);letter-spacing:.01em}
.pcard__name{font-family:var(--serif);font-weight:400;font-size:1.65rem;line-height:1.14;letter-spacing:-.01em;color:var(--navy);margin:8px 0 12px}
.pcard__desc{font-size:15px;line-height:1.58;color:var(--muted);flex:1}
.pcard__link{display:flex;align-items:center;justify-content:space-between;margin:26px -28px 0;padding:18px 28px;border-top:1px solid var(--line);font-size:14.5px;font-weight:600;color:var(--navy);transition:color .3s,background .3s}
.pcard__link:hover{color:var(--emerald)}
.pcard:hover .arr,.pcard__link:hover .arr{transform:translateX(6px)}
.rail-progress{position:relative;height:1px;background:var(--line)}
.rail-progress span{position:absolute;top:-1px;height:3px;background:var(--navy);transition:left .25s linear,width .25s}

/* why */
.why__head{display:flex;align-items:flex-end;justify-content:space-between;gap:48px;margin-bottom:clamp(48px,6vw,84px)}
.why__head .sub{margin-top:0;max-width:34ch}
.why__grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line)}
.why__item{padding:44px 36px 12px 0}
.why__item+.why__item{padding-left:36px;border-left:1px solid var(--line)}
.why__ico{display:block;color:var(--emerald);margin-bottom:34px;transition:transform .7s var(--ease)}
.why__item:hover .why__ico{transform:translateY(-4px)}
.why__item h3{font-family:var(--serif);font-weight:400;font-size:1.6rem;line-height:1.15;color:var(--navy);margin-bottom:14px;letter-spacing:-.01em}
.why__item p{font-size:15px;line-height:1.6;color:var(--muted);max-width:28ch}

/* global */
.global__head{display:flex;align-items:flex-end;justify-content:space-between;gap:48px;margin-bottom:clamp(36px,5vw,64px)}
.global__head .sub{margin-top:0;max-width:40ch}
.globe{position:relative}
.globe svg{display:block;width:100%;height:auto;overflow:visible}
.arc{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset 2.4s cubic-bezier(.5,0,.2,1) var(--d,0ms)}
.globe.in .arc{stroke-dashoffset:0}
.mk{opacity:0;transition:opacity .9s var(--ease) var(--d,0ms)}
.globe.in .mk{opacity:1}
.maplabel{font-family:var(--sans);font-size:10.5px;fill:var(--navy);paint-order:stroke;stroke:var(--paper);stroke-width:3px;stroke-linejoin:round}
.maplabel .sub{font-size:9px;fill:var(--muted);font-weight:400}
.maplabel--hub{fill:var(--gold-d)}
.pulse{transform-box:fill-box;transform-origin:center;animation:pulse 3.4s ease-out infinite}
@keyframes pulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(3.2);opacity:0}}
.legend{display:flex;gap:28px;justify-content:flex-end;margin-top:20px;font-size:13.5px;color:var(--muted)}
.legend span{display:inline-flex;align-items:center;gap:10px}
.lg{display:inline-block;width:11px;height:11px;border-radius:50%}
.lg--hub{border:1.5px solid var(--gold);background:#fff}
.lg--reg{background:var(--navy);box-shadow:0 0 0 3px rgba(15,123,95,.2)}
.regions{display:none}

/* cta */
.cta{position:relative;overflow:hidden;background:var(--navy);color:#fff;padding:clamp(96px,11vw,168px) 0;border-top:1px solid var(--gold)}
.cta__moon{position:absolute;right:-180px;top:50%;width:min(900px,90vw);height:auto;transform:translateY(-50%);pointer-events:none}
.cta__inner{position:relative}
.cta__btns{display:flex;flex-wrap:wrap;gap:14px;margin-top:44px}

/* footer */
.ftr{background:var(--navy-9);color:rgba(255,255,255,.72);padding-top:clamp(64px,7vw,104px);font-size:15px}
.ftr__grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1.2fr;gap:clamp(32px,5vw,72px)}
.ftr .logo{color:#fff}
.ftr__brand p{margin-top:24px;max-width:36ch;line-height:1.65}
.ftr h4{font-size:13.5px;font-weight:600;letter-spacing:.06em;color:#fff;margin-bottom:22px}
.ftr li+li{margin-top:12px}
.ftr a{transition:color .3s}
.ftr li a:hover{color:var(--gold-l)}
.ftr__contact li{color:rgba(255,255,255,.6)}
.social{display:flex;gap:10px;margin-top:26px}
.social a{width:40px;height:40px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.2);border-radius:2px;color:#fff;transition:background .35s,border-color .35s,color .35s}
.social a:hover{background:var(--gold-l);border-color:var(--gold-l);color:var(--navy)}
.ftr__base{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-top:clamp(48px,6vw,80px);padding:28px 0 36px;border-top:1px solid rgba(255,255,255,.12);font-size:13.5px;color:rgba(255,255,255,.5)}
.ftr__base p:last-child{display:flex;gap:26px}
.ftr__base a:hover{color:#fff}

/* ---- tablet ---- */
@media (max-width:1020px){
  .nav{display:none}
  .burger{display:block}
  .hdr__bar{height:78px}
  .intro{grid-template-columns:1fr;gap:72px}
  .intro__media{max-width:560px;margin-right:22px}
  .why__grid{grid-template-columns:repeat(2,1fr)}
  .why__item:nth-child(3){padding-left:0;border-left:0}
  .why__item:nth-child(n+3){border-top:1px solid var(--line);margin-top:20px;padding-top:44px}
  .why__item:nth-child(2n){padding-left:36px;border-left:1px solid var(--line)}
  .ftr__grid{grid-template-columns:1fr 1fr}
  .ftr__brand{grid-column:1/-1}
  .trust__grid{grid-template-columns:repeat(2,1fr)}
  .trust__item:nth-child(3){padding-left:0;border-left:0}
  .trust__item:nth-child(n+3){border-top:1px solid rgba(255,255,255,.12)}
  .trust__item{padding-block:18px}
}
@media (max-width:760px){
  .smt{font-size:16.5px}
  .hdr .btn--hdr{display:none}
  .hero__shade{background:linear-gradient(180deg,rgba(7,20,38,.72) 0%,rgba(7,20,38,.55) 40%,rgba(7,20,38,.78) 100%)}
  .hero__inner{padding-top:120px;padding-bottom:40px}
  .hero__cta .btn{flex:1 1 100%}
  .hl{grid-template-columns:1fr;gap:22px}
  .products__head,.why__head,.global__head{flex-direction:column;align-items:flex-start;gap:26px}
  .why__head .sub,.global__head .sub{margin-top:0}
  .rail-ctrl{display:none}
  .why__grid{grid-template-columns:1fr}
  .why__item,.why__item+.why__item,.why__item:nth-child(n){padding:36px 0 8px;border-left:0;margin-top:0}
  .why__item+.why__item{border-top:1px solid var(--line)}
  .maplabel{display:none}
  .legend{justify-content:flex-start;flex-wrap:wrap;gap:14px 24px}
  .regions{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);border:1px solid var(--line);margin-top:28px}
  .regions li{background:#fff;padding:14px 16px;display:flex;flex-direction:column;font-size:14px;color:var(--navy)}
  .regions span{font-size:12.5px;color:var(--muted)}
  .cta__moon{right:-320px;opacity:.7}
  .cta__btns .btn{flex:1 1 100%}
  .ftr__grid{grid-template-columns:1fr}
  .ftr__base{flex-direction:column}
}
@media (max-width:420px){
  .trust__grid{grid-template-columns:1fr}
  .trust__item,.trust__item+.trust__item,.trust__item:nth-child(3){padding-left:0;border-left:0}
  .trust__item+.trust__item{border-top:1px solid rgba(255,255,255,.12)}
}

/* ---- reduced motion ---- */
@media (prefers-reduced-motion:reduce){
  .smt *,.smt *::before,.smt *::after{animation:none!important;transition-duration:.01ms!important}
  .rv{opacity:1;transform:none}
  .arc{stroke-dashoffset:0}
  .mk{opacity:1}
  .rail{scroll-behavior:auto}
}
`;

/* ----------------------------------- PAGE ---------------------------------- */

export default function SkyMoonTrading() {
  const active = useActiveSection();
  return (
    <div className="smt">
      <style>{CSS}</style>
      <Header active={active} />
      <main>
        <Hero />
        <Intro />
        <Products />
        <Why />
        <Global />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
