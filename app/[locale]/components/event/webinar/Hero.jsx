"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  title,
  subtitle,
  description,
  date,
  platform,
  registerButtonText,
}) => {
  return (
    <div className="bg-gradient-to-b from-[#1a2256] via-[#222d75] to-[#243788] pt-5">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row md:gap-8 items-center">
          
          {/* Content Section */}
          <div className="content-section text-center ltr:md:text-left rtl:md:text-right gap-4 py-8 md:py-14">
            <h4 className="text-white md:w-full mx-auto text-sm font-bold md:text-2xl pb-4">
              {title}
            </h4>

            <h2 className="text-[18px] md:text-[45px] leading-tight bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text font-bold uppercase  md:w-[800px]">
              {subtitle}
            </h2>

            <p className="text-white text-sm md:text-base py-2 md:w-[780px]"> 
              {description}
            </p>

            <h3 className="text-white font-semibold text-xs md:text-base pt-4 mb-2">
              {date}
            </h3>
            <h3 className="text-white font-semibold text-xs md:text-base mb-5 pb-5">
              {platform}
            </h3>

            <Link
              href="/"
              onClick={(e) => {
                let section = document.getElementById("register");
                e.preventDefault();
                section && section.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="bg-white text-primary px-6 py-4 font-medium rounded-md hover:bg-secondary hover:text-white"
            >
              {registerButtonText}
            </Link>
          </div>

          {/* Image Section */}
          <div className="hidden md:block relative w-full h-72 md:h-[450px] md:order-2">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/gtcmtd/phone.png"
              fill
              alt="MT5 Trader"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
