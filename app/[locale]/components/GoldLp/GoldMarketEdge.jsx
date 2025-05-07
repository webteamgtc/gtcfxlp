'use client';
import React from 'react';
import LiveAccountButton from '../liveAccountButton';

const features = [
  {
    title: 'Real-Time Price Alerts',
    desc: 'Never miss an opportunity with instant price alerts for gold trades.',
    img: '/goldlp/Assets-17.svg',
  },
  {
    title: 'Seamless Withdrawal Process',
    desc: 'Enjoy hassle-free withdrawals to access your profits anytime.',
    img: '/goldlp/Assets-18.svg',
  },
  {
    title: 'Risk-Free Trading Environment',
    desc: 'Manage your trades effectively with robust risk management tools.',
    img: '/goldlp/Assets-19.svg',
  },
  {
    title: 'Full Control over Leverage',
    desc: 'Adjust leverage settings to match your trading strategy and risk appetite.',
    img: '/goldlp/Assets-20.svg',
  },
];

const GoldMarketEdge = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0b1244] mb-4">
          Your Edge in the Gold Market
        </h2>
        <p className="text max-w-3xl mx-auto mb-12 leading-7">
          With industry-leading spreads and reliable execution on gold, GTC helps you maximize
          every opportunity, whether you’re scalping, hedging, or holding.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="rounded-xl shadow-md min-h-[350px] text-white flex flex-col justify-end pb-14 items-end text-center transition-all duration-300 px-6 py-8"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
        <LiveAccountButton />
      </div>

      </div>
    </section>
  );
};

export default GoldMarketEdge;
