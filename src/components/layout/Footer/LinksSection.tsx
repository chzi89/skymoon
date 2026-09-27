import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "about",
        url: "#",
      },
      {
        id: 12,
        label: "global sourcing",
        url: "#",
      },
      {
        id: 13,
        label: "import & export",
        url: "#",
      },
      {
        id: 14,
        label: "quality focus",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "products",
    children: [
      {
        id: 21,
        label: "rice",
        url: "#",
      },
      {
        id: 22,
        label: "citrus & fruits",
        url: "#",
      },
      {
        id: 23,
        label: "cotton",
        url: "#",
      },
      {
        id: 24,
        label: "natural oils",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "more products",
    children: [
      {
        id: 31,
        label: "nuts",
        url: "#",
      },
      {
        id: 32,
        label: "dry fruits",
        url: "#",
      },
      {
        id: 33,
        label: "agricultural products",
        url: "#",
      },
      {
        id: 34,
        label: "orange & kinnow",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "management",
    children: [
      {
        id: 41,
        label: "CEO: Liton Sen",
        url: "#",
      },
      {
        id: 42,
        label: "Managing Director / Manager: MD Shafique",
        url: "#",
      },
      {
        id: 43,
        label: "International Import & Export",
        url: "#",
      },
      {
        id: 44,
        label: "Sky Moon Trading",
        url: "#",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
