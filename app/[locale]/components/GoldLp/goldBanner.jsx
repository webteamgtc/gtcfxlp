
import React from 'react';

const GoldFeatureStrip = () => {
    const features = [
        {
            title: 'Tighter Spreads on Gold',
            description: 'Trade with spreads that stay low, even during high volatility.',
        },
        {
            title: 'Transparent Pricing',
            description: 'No hidden fees. No commission. No surprises.',
            active:true
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
                <div className="grid grid-cols-1 min-h-44 shadow-2xl first:rounded-2xl  rounded-2xl md:grid-cols-4 bg-[#f2f2f2] md:-mt-20 z-10 relative">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`p-6 py-8 flex flex-col justify-center text-center transition-all duration-300 rounded-lg 
                                ${item?.active ? ' scale-110 bg-[#0b1244] shadow-md  text-white' : ' text-[#0b1244]'} 
                                hover:bg-[#0b1244] hover:text-white hover:scale-110 hover:shadow-md `}
                        >
                            <h3 className="font-semibold text-md mb-2">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button className="bg-yellow-400 min-w-52 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-lg">
                        Open an Account
                    </button>
                </div>
            </div>

            <div className="text-center mt-20 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b1244] mb-4">
                    0 Noise. 100% Gold Focus
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    No distractions. Just pure trading power, built for gold traders. Every tool, feature, and
                    signal is designed with one goal, helping you maximize every gold opportunity. Stay sharp,
                    stay focused, and trade gold with absolute clarity.
                </p>
            </div>
        </div>
    );
};

export default GoldFeatureStrip;
