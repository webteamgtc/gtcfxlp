'use client'
import React from 'react'
import MainForm from '../../free-demo-account/form'

const BannerLp = () => {
  return (
    <section className="py-10 lg:py-[70px] bg-[url('/goldlp/bg-1.svg')] bg-cover bg-center text-center md:h-[850px]">
    <div className="max-w-[1380px] mx-auto px-4">
      <div className="bg-[url('/goldlp/bggold.webp')] bg-cover bg-center bg-no-repeat md:h-[650px] border border-gray-100 border-opacity-10">
        <div className="grid grid-cols-3 gap-8 items-center h-full">
          {/* Content Area - spans 2 columns */}
          <div
            className="col-span-3 md:col-span-2 text-left text-white"
         
          >
            <div className='max-w-3xl  px-6 pt-6 md:p-14 '> <h1 className="text-[28px] md:text-[48px] lg:text-[60px] capitalize leading-tight md:leading-[65px] lg:leading-[65px]">
              Maximize your profits with tight spreads and fast execution on every 
              <span className="text-secondary font-bold uppercase"><br></br> gold trade</span>.
            </h1>
            <p className="text text-xs md:text-[14px] pt-5 max-w-lg text-left text-white leading-6 md:leading-7">
              Trade gold with tight spreads, fast execution, and top-tier
              conditions built for serious traders. Take advantage of powerful
              platforms and pro-level tools. Stay ahead with reliable insights
              designed for gold trading success.
            </p></div>
           
          </div>
  
          {/* Form Area - spans 1 column */}
          <div className="col-span-3 md:col-span-1 p-2 md:p-5">
            <MainForm />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default BannerLp