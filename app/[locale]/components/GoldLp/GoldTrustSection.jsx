'use client';
import Image from 'next/image';
import React from 'react';
import { FaArrowDown, FaBolt, FaCreditCard } from 'react-icons/fa';

const GoldTrustSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Content */}
        <div>
          <h2 className="text-xl text-secondary uppercase font-medium mb-2">0 Noise. 100% Gold Focus.</h2>
          <h3 className="text-4xl font-bold text-[#0b1244] mb-4 leading-snug">
            No distractions. Just pure trading power, <br /> built for gold traders.
          </h3>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Every tool, feature, and signal is designed with one goal — helping you maximize every gold opportunity.
            Stay sharp, stay focused, and trade gold with absolute clarity.
          </p>

          <div className="space-y-5 text-sm text-[#0b1244]">
            <div className="flex items-center gap-3 border-b pb-3">
              <FaArrowDown className="text-secondary" />
              <span>Precision pricing. No fluff.</span>
            </div>
            <div className="flex items-center gap-3 border-b pb-3">
              <FaBolt className="text-secondary" />
              <span>Built for serious gold moves.</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCreditCard className="text-secondary" />
              <span>Every millisecond counts. We make them matter.</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/your-image-path.jpg" // replace with actual image path
            alt="Gold Trading Visual"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GoldTrustSection;
