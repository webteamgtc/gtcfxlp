"use client";
import React from "react";

const features = [
  "Tight & Stable Spreads",
  "Fast Execution",
  "Seamless Withdrawals",
  "Zero Commission",
];

const BannerWithFeatureBar = () => {
  return (
    <section className="relative mb-10">
      {/* Floating FeatureBar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-42px] z-10 w-full max-w-6xl">
        <div className="flex justify-center overflow-hidden rounded-full bg-[#f5f5f5] shadow-lg">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex-1 text-center text-sm md:text-base font-medium text-[#1d2746] py-8 px-6 cursor-pointer
                transition-colors duration-300 ease-in-out
                ${index === 0 ? "rounded-l-full" : ""}
                ${index === features.length - 1 ? "rounded-r-full" : ""}
                ${index !== features.length - 1 ? "border-r border-gray-300" : ""}
                hover:bg-primary hover:text-white duration-300 ease-in-out`}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerWithFeatureBar;
