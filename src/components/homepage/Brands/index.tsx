import React from "react";

const brandsData = [
  "Rice",
  "Citrus & Fruits",
  "Cotton",
  "Natural Oils",
  "Nuts",
  "Dry Fruits",
  "Agricultural Products",
];

const Brands = () => {
  return (
    <div className="bg-black">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((category) => (
          <span
            key={category}
            className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11 text-white font-medium text-sm lg:text-base"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brands;
