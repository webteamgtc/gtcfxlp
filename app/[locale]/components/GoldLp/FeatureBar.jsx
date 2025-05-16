import React from 'react';


const features = [
  {
    front: "Tight & Stable Spreads",
    back: "Lock in profits with consistent spreads.",
  },
  {
    front: "Fast Execution",
    back: "Place trades instantly without delay.",
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
    <section className="relative mb-10 md:mb-14">
      <div className="md:absolute left-1/2 transform md:-translate-x-1/2 md:bottom-[-60px] z-10 w-full max-w-6xl px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-[#f5f5f5] rounded-md md:rounded-full shadow-lg overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flip-container w-full h-[100px] cursor-pointer relative
      ${index % 2 !== 1 && "md:border-r"}  /* Right border on 1st & 3rd (0,2) in 4-col layout */
      ${index < features.length - 1 ? "border-gray-300" : ""}
    `}
            >
              <div className="flip-inner w-full h-full">
                <div className="flip-front flex items-center justify-center text-center text-sm md:text-base font-medium text-[#1d2746] bg-[#f5f5f5]">
                  {feature.front}
                </div>
                <div className="flip-back flex items-center justify-center text-center text-sm md:text-base font-medium text-white bg-primary md:px-10">
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
