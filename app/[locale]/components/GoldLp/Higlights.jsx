'use client';
import React from 'react';
import Link from 'next/link';

const GoldContentHighlights = () => {
  const highlights = [
    {
      title: 'Precision pricing. No fluff.',
      description:
        'Make smarter trades with gold-specific charts, tools, and insights.',
    },
    {
      title: 'Built for serious gold moves.',
      description:
        'Get real-time alerts powered by AI to catch golden opportunities.',
    },
    {
      title: 'Every millisecond counts. We make them matter.',
      description:
        'Get help from real trading pros whenever markets are open.',
    },
  ];

  return (
    <section className="bg-[#0b1244] text-white  py-10 md:py-20 ">
      <div className="max-w-5xl mx-auto">
        <div className='text-center text-white pb-10'>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Trade Gold Like It’s Meant to Be
                    </h2>
                   
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'
       >
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-br from-[#1b1f6b] to-[#181a2e]
              rounded-xl px-10 py-14 text-center 
              transition-transform duration-500 ease-in-out 
              hover:scale-110 shadow-lg hover:bg-gradient-to-bl`}
          >
            <h3 className="font-semibold text-lg mb-6">{item.title}</h3>
            <p className="text-sm md:text-base text-white leading-7">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 mb-3 text-center">
      <Link
      href="https://web.mygtc.app/login/register"
      target="_blank"
      className={`bg-secondary text-white text-sm 3xl:text-xl px-8 py-3 text-center rounded-md md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:text-primary hover:bg-gradient-to-r hover:from-white hover:to-white duration-500`}
    >
      OPEN Live Account
    </Link>
      </div>
      </div>
    </section>
  );
};

export default GoldContentHighlights;
