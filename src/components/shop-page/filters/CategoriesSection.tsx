import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "Rice",
    slug: "/shop?category=rice",
  },
  {
    title: "Citrus & Fruits",
    slug: "/shop?category=citrus-fruits",
  },
  {
    title: "Cotton",
    slug: "/shop?category=cotton",
  },
  {
    title: "Natural Oils",
    slug: "/shop?category=natural-oils",
  },
  {
    title: "Nuts & Dry Fruits",
    slug: "/shop?category=nuts-dry-fruits",
  },
  {
    title: "Dry Fruits",
    slug: "/shop?category=dry-fruits",
  },
  {
    title: "Agricultural Products",
    slug: "/shop?category=agricultural-products",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
