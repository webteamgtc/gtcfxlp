'use client'
import React from 'react';
import clsx from 'clsx';
import LiveAccountButton from '../liveAccountButton';

const GoldFeatureStrip = () => {
    const features = [
        {
            title: 'Tighter Spreads on Gold',
            description: 'Trade with spreads that stay low, even during high volatility.',
        },
        {
            title: 'Transparent Pricing',
            description: 'No hidden fees. No commission. No surprises.',
            active: true,
        },
        {
            title: 'Full Flexibility',
            description: 'Use the leverage you need and stay in control of every trade.',
        },
        {
            title: 'Unmatched Execution Speed',
            description: 'Execute trades faster, reducing slippage and improving profit potential.',
        },
    ];

    return (
        <div className="bg-white pt-10 pb-16 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 min-h-44 shadow-2xl rounded-2xl bg-[#f2f2f2] border border-secondary md:-mt-28 z-10 relative border-opacity-30">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "p-6 py-8 flex flex-col justify-center text-center transition-all duration-300 border-none rounded-lg",
                               
                                "hover:bg-[#0b1244] hover:text-white hover:scale-105 hover:shadow-2xl border border-secondary border-opacity-30"
                            )}
                        >
                            <h3 className="font-semibold text-md mb-2">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-14">
                   <LiveAccountButton />
                </div>

                <div className="text-center mt-14 px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0b1244] mb-4">
                        0 Noise. 100% Gold Focus
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        No distractions. Just pure trading power, built for gold traders. Every tool, feature, and
                        signal is designed with one goal—helping you maximize every gold opportunity.
                        Stay sharp, stay focused, and trade gold with absolute clarity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GoldFeatureStrip;
