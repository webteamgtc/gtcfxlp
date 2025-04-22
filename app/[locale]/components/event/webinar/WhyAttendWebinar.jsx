"use client";
import Aos from "aos";
import React, { useEffect } from "react";

// Individual card component for reusability
const BackOfCard = ({ title, icon, paragraph }) => (
  <div className="flip-card border-primary h-72">
    <div className="flip-card-inner">
      <div className="flip-card-front border rounded-[25px] p-6 bg-gradient-to-l from-[#1a1c28] via-[#222d75] to-[#243788]">
        <div className="text-primary flex flex-col h-full justify-center items-center">
          <p className="text-secondary">{icon}</p>
          <h1 className="text-white font-medium text-base md:text-xl my-4 capitalize">{title}</h1>
        </div>
      </div>
      <div className="flip-card-back p-6 bg-gradient-to-r from-[#1a1c28] via-[#222d75] to-[#243788] rounded-[25px] border border-secondary border-opacity-70">
        <h1 className="text-white font-semibold text-medium my-4 text-sm md:text-base">
          {title}
        </h1>
        <h1 className="text-white text-center text-sm md:text-base">{paragraph}</h1>
      </div>
    </div>
  </div>
);

// Main WhoAttend component with props for customization
const WhoAttend = ({ sectionTitle, description, cards }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <section className="bg-[#ecf3fd] py-8 lg:py-[80px]">
      <div className="container">
        <div className="text-center">
          <h2 className="HeadingH2 mb-8 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center font-semibold">
            {sectionTitle}
          </h2>
          <p className="text-primary text-center text-lg w-full mx-auto md:w-3/4">
            {description}
          </p>
        </div>

        <div className="w-full pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((item, index) => (
              <BackOfCard
                key={index}
                title={item.title}
                icon={item.icon}
                paragraph={item.paragraph} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAttend;
