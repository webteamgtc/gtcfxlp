'use client';
import Image from 'next/image';
import React from 'react';

const TradeTrust = () => {
  const cards = [
    {
      title: 'Competitive Spreads',
      desc: 'Standard accounts offer average spreads of 1.4 pips, while Pro accounts provide tighter spreads averaging 0.9 pips.',
      bgImage: '/goldlp/lbg1.svg',
    },
    {
      title: 'Advanced Trading Platforms',
      desc: 'Access MetaTrader 4, MetaTrader 5, and cTrader across various devices, ensuring flexibility and robust functionality.',
      bgImage: '/goldlp/lbg2.svg',
    },
    {
      title: 'Global Reach',
      desc: 'Serving over 985,000 clients across more than 100 countries, we offer extensive market coverage, including gold, precious metals, and more.',
      bgImage: '/goldlp/lbg3.svg',
    },
  ];

  return (
    <section className="bg-[#faf9f3] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        {/* Left: 40% (2 of 5 columns) */}
        <div className="col-span-2 relative w-full h-[500px]">
          <Image
            src="/goldlp/lpbg2.png"
            alt="Trader"
            fill
            className="object-contain"
          />
        </div>

        {/* Right: 60% (3 of 5 columns) */}
        <div className="col-span-3">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0b1244] mb-4 leading-tight">
            Why over <span className="text-[#c49b2f]">985,000</span> traders
            <br /> trust GTC for gold?
          </h2>
          <p className="text max-w-3xl mb-12 leading-7 text-left">
            GTC has been serving a global clientele since 2012, offering competitive trading
            conditions for gold traders. Here’s why many choose GTC for their trading needs:
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden relative"
              >
                {/* Top background header with dynamic image */}
                <div
                  className="h-36 relative flex items-center px-6"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
                >
                  <h3 className="text-white font-semibold text-base">{card.title}</h3>
                </div>

                {/* Description */}
                <div className="bg-white p-6 text-left">
                  <p className="text h-48 text-left">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeTrust;
