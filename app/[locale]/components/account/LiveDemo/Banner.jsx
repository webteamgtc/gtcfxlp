"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocationDetail } from "@/context/useLocationDetail";
import MainForm from "@/app/[locale]/free-demo-account/form";


const Banner = () => {
  const t = useTranslations("partner.IBProgram.bannerText");
  
  return (
    <useLocationDetail>
      <section className="relative hero-banner py-14 bg-gradient-to-t from-primary via-[#191e4f] to-primary">
        {/* Background Image */}
       
        {/* Content */}
        <div className="relative z-10 container grid grid-cols-1 md:grid-cols-3 justify-between items-center h-full">
          <div className="content-side md:col-span-2 text-center rtl:md:text-right ltr:md:text-left pb-16 md:pb-0">
           
        
       
          </div>
          <div className="images-setting flex flex-row items-center justify-end">
              <MainForm />
           
          </div>
          
           
        

        </div>
        <div id="register2"></div>
      </section>

    </useLocationDetail>
  );
};

export default Banner;
