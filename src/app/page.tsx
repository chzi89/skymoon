import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Basmati Rice",
    srcUrl: "/images/rice-1.jpg",
    gallery: ["/images/rice-1.jpg", "/images/rice-2.jpg", "/images/rice-3.jpg"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Long Grain Rice",
    srcUrl: "/images/rice-2.jpg",
    gallery: ["/images/rice-2.jpg", "/images/rice-3.jpg"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Premium Rice",
    srcUrl: "/images/rice-3.jpg",
    gallery: ["/images/rice-3.jpg", "/images/rice-4.jpg"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Parboiled Rice",
    srcUrl: "/images/rice-4.jpg",
    gallery: ["/images/rice-4.jpg", "/images/rice-1.jpg", "/images/rice-2.jpg"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Oranges & Kinnow",
    srcUrl: "/images/orange-1.jpg",
    gallery: [
      "/images/orange-1.jpg",
      "/images/orange-2.jpg",
      "/images/orange-3.jpg",
    ],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Mandarin & Fresh Citrus",
    srcUrl: "/images/orange-2.jpg",
    gallery: ["/images/orange-2.jpg", "/images/orange-1.jpg"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Raw Cotton & Cotton Bales",
    srcUrl: "/images/seeds.jpg",
    gallery: ["/images/seeds.jpg"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Cotton Fiber",
    srcUrl: "/images/seeds.jpg",
    gallery: ["/images/seeds.jpg"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Olive Oil & Natural Cooking Oil",
    srcUrl: "/images/oil-1.jpg",
    gallery: ["/images/oil-1.jpg", "/images/oil-2.jpg", "/images/oil-3.jpg"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Cold-Pressed Natural Oil",
    srcUrl: "/images/oil-2.jpg",
    gallery: ["/images/oil-2.jpg", "/images/oil-3.jpg"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Nuts: Almonds, Cashews, Walnuts & Pistachios",
    srcUrl: "/images/dryfruit-1.jpg",
    gallery: ["/images/dryfruit-1.jpg", "/images/dryfruit-2.jpg"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Dry Fruits: Dates, Raisins, Figs & Apricots",
    srcUrl: "/images/dryfruit-2.jpg",
    gallery: ["/images/dryfruit-2.jpg", "/images/dryfruit-3.jpg"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Global Sourcing",
    content: "Reliable sourcing of quality products for international markets.",
    rating: 5,
    date: "",
  },
  {
    id: 2,
    user: "Import & Export",
    content: "Professional trading and export solutions for global buyers.",
    rating: 5,
    date: "",
  },
  {
    id: 3,
    user: "Quality Focus",
    content:
      "Carefully selected products with a focus on consistency and quality.",
    rating: 5,
    date: "",
  },
  {
    id: 4,
    user: "Reliable Partnerships",
    content:
      "Building long-term relationships with suppliers and international buyers.",
    rating: 5,
    date: "",
  },
  {
    id: 5,
    user: "Sky Moon Trading",
    content: "Trading quality. Building global connections.",
    rating: 5,
    date: "",
  },
  {
    id: 6,
    user: "Global Markets",
    content:
      "We connect carefully sourced products with international buyers and markets, creating reliable opportunities across the global trading network.",
    rating: 5,
    date: "",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="Featured Export Products"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="`h-px border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="Products for Global Markets"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
