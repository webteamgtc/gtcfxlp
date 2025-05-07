'use client';
import React from 'react';

const features = [
  {
    front: "Tight & Stable Spreads",
    back: "Lock in profits with consistent spreads.",
  },
  {
    front: "Fast Execution",
    back: " Place trades instantly without delay.",
  },
  {
    front: "Seamless Withdrawals",
    back: "Quick, easy access to your funds anytime.",
  },
  {
    front: "Zero Commission",
    back: "Trade gold without extra fees or costs.",
  },
];

const BannerWithFeatureBar = () => {
  return (
    <section className="relative mb-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-42px] z-10 w-full max-w-6xl">
        <div className="flex justify-center overflow-hidden rounded-full bg-[#f5f5f5] shadow-lg">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flip-container w-full max-w-[250px] h-[100px] ${
                index === 0 ? 'rounded-l-full' : ''
              } ${index === features.length - 1 ? 'rounded-r-full' : ''} ${
                index !== features.length - 1 ? 'border-r border-gray-300' : ''
              }`}
            >
              <div className="flip-inner w-full h-full text-center">
                {/* Front */}
                <div className="flip-front text-xs md:text-base font-medium rounded-full">
                  {feature.front}
                </div>

                {/* Back */}
                <div className="flip-back bg-primary text-white text-xs md:text-base font-medium rounded-full">
                  {feature.back}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerWithFeatureBar;
