import React from 'react';

const TradeGoldFeatures = () => {
    const features = [
        {
            icon: '/goldlp/icon11.svg',
            title: 'Precision Analytics',
            description: 'Make smarter trades with gold-specific charts, tools, and insights.',
        },
        {
            icon: '/goldlp/icon11.svg',
            title: 'AI-Backed Signals',
            description: 'Get real-time alerts powered by AI to catch golden opportunities.',
        },
        {
            icon: '/goldlp/icon11.svg',
            title: '24/7 Expert Support',
            description: 'Get help from real trading pros whenever markets are open.',
        },
    ];

    return (
        <section className="bg-white pt-16 pb-24 px-4 text-center">
            <div className="mb-6">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium mt-4 px-6 py-2 rounded">
                    Open an Account
                </button>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0b1244] mb-12 mt-20">
                Trade gold like it’s meant to be.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3  mt-24 relative gap-20 max-w-6xl mx-auto">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 min-h-52  rounded-lg shadow-lg p-6 justify-end flex flex-col items-center text-center"
                    >
                        <div className="w-40 h-40  absolute -top-20  rounded-full  flex items-center justify-center mb-4">
                            <img src={item.icon} alt={item.title} className="w-40 h-40" />
                        </div>
                        <h3 className="font-semibold text-lg text-[#0b1244] mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TradeGoldFeatures;
