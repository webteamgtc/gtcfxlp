'use client';
import Image from 'next/image';
import React from 'react';
import { FaArrowDown, FaBolt, FaCreditCard } from 'react-icons/fa';

const GoldTrustSection = () => {
  
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Content */}
        <div className='max-w-lg'>
        <p className="text-secondary text-3xl font-medium">0 Noise.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1244] mt-2 mb-4">
             <span className="text-primary font-bold text-6xl">100%</span>
            <div className="text-secondary font-normal text-3xl mt-1">Gold Focus.</div>
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

        {/* RIGHT: Image */}
        <div className="relative w-full h-[400px] md:h-[550px] rounded-xl overflow-hidden">
          <Image
            src="/goldlp/imagez.webp" // replace with actual image path
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
