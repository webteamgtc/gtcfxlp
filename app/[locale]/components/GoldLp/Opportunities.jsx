"use client";
import React from "react";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";

const goldCards = [
  {
    icon: "/goldlp/icon1.svg",
    alt: "Analyze trends",
    text: "Analyze trends with intuitive, gold-focused features.",
  },
  {
    icon: "/goldlp/Image-08.webp",
    alt: "Trade what matters",
    text: "Trade what matters, filter out the rest.",
  },
  {
    icon: "/goldlp/icon2.svg",
    alt: "Real-time insights",
    text: "Get insights that work in real-time.",
  },
];

const GoldOpportunitySection = () => {
  return (
    <section className="bg-white pb-10 md:py-20 text-center">
        <div className="max-w-5xl mx-auto px-5">
                <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        See Gold Opportunities Others Miss
                    </h2>
                    <p className="textnpm  max-w-3xl mx-auto mb-12 leading-7">
                    Smart tools and clear signals give you an edge in a noisy market. Cut through the noise and focus on what truly matters. Trade gold with confidence, backed by real-time insights designed to help you act fast and smart.
                    </p>
                </div>
            
       
    

      <div className="grid grid-cols-1 mt-28 md:grid-cols-3 gap-24 md:ap-12">
        {goldCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0b1244] min-h-60 relative rounded-xl shadow-2xl p-6 justify-center md:justify-end flex flex-col items-center text-white"
          >
            <div className="w-56 h-56 absolute -top-20">
              <Image
                src={card.icon}
                alt={card.alt}
                width={224}
                height={224}
                className="rounded-full object-cover"
              />
            </div>
            <p className="mt-24 text-base max-w-606 px-4 pt-10 md:pt-4">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 mb-3">
        <LiveAccountButton />
      </div>
      </div>
    </section>
  );
};

export default GoldOpportunitySection;
