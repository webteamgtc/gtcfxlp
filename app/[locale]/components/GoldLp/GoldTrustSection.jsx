import Image from 'next/image';
import React from 'react';
import { FaArrowDown, FaBolt, FaCreditCard } from 'react-icons/fa';

const GoldTrustSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT (Content will appear second on mobile) */}
        <div className="max-w-lg">
          <p className="text-secondary text-xl md:text-3xl font-medium">0 Noise.</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#0b1244] mt-2 mb-4">
            <span className="text-primary font-bold text-4xl md:text-6xl">100%</span>
            <div className="text-secondary font-normal text-xl md:text-3xl mt-1">Gold Focus.</div>
          </h2>
          <p className="text text-sm md:text-base mt-6 leading-7 text-left">
            No distractions. Just pure trading power, built for gold traders. Every tool, feature, and signal is designed with one goal — helping you maximize every gold opportunity. Stay sharp, stay focused, and trade gold with absolute clarity.
          </p>

          <div className="space-y-6 text-sm md:text-base text-[#0b1244] mt-5">
            <div className="flex items-center gap-3 border-b pb-3 max-w-sm">
              <FaArrowDown size={28} className="text-secondary" />
              <span>Precision pricing. No fluff.</span>
            </div>
            <div className="flex items-center gap-3 border-b pb-3">
              <FaBolt size={28} className="text-secondary" />
              <span>Built for serious gold moves.</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCreditCard size={28} className="text-secondary" />
              <span>Every millisecond counts. We make them matter.</span>
            </div>
          </div>
        </div>

        {/* RIGHT (Image will appear first on mobile) */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/goldlp/imagez.webp"
            alt="Gold Trading Visual"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GoldTrustSection;
