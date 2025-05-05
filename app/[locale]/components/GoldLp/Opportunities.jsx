"use client"
import React from 'react';

const GoldOpportunitySection = () => {
    return (
        <section className="bg-white py-20 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See Gold Opportunities Others Miss
            </h2>
            <p className="text-primary text-sm max-w-2xl mx-auto mb-12">
                Join a gold trading platform that offers more than just low spreads. At GTC, we combine institutional-grade pricing, pro-level platforms, and lightning-fast execution to give gold traders the edge they need to thrive. Here's why traders trust us:
            </p>

            <div className="grid grid-cols-1 mt-32 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-[#0b1244] min-h-48 relative rounded-xl shadow-2xl p-6 justify-end flex flex-col items-center text-white">
                    <img
                        src="/goldlp/icon1.svg"
                        alt="Analyze trends"
                        className="w-44 h-44 absolute -top-20 rounded-full mb-4 object-cover"
                    />
                    <p className="mt-2 ">Analyze trends with intuitive, gold-focused features.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#0b1244] min-h-48 relative rounded-xl shadow-2xl p-6 justify-end flex flex-col items-center text-white">
                    <img
                        src="/goldlp/icon2.svg"
                        alt="Analyze trends"
                        className="w-44 h-44 absolute -top-20 rounded-full mb-4 object-cover"
                    />
                    <p className="mt-2 ">Trade what matters, filter out the rest.</p>
                </div>


                <div className="bg-[#0b1244] min-h-48 relative rounded-xl shadow-2xl p-6 justify-end flex flex-col items-center text-white">
                    <img
                        src="/goldlp/icon1.svg"
                        alt="Analyze trends"
                        className="w-44 h-44 absolute -top-20 rounded-full mb-4 object-cover"
                    />
                    <p className="mt-2">Get insights that work in real-time.</p>
                </div>


            </div>

            <div className="mt-12">
                <button className="bg-yellow-400 min-w-52 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-lg">
                    Open an Account
                </button>
            </div>
        </section>
    );
};

export default GoldOpportunitySection;
