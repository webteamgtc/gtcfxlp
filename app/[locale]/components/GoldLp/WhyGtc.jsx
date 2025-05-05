import React from 'react';

const WhyChooseGTC = () => {
    return (
        <section className="bg-[#0b1244] text-white py-12 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose GTC?</h2>
                <p className="text-gray-300 text-sm max-w-2xl mx-auto">
                    Join a gold trading platform that offers more than just low spreads. At GTC, we combine
                    institutional-grade pricing, pro-level platforms, and lightning-fast execution to give gold traders the
                    edge they need to thrive. Here’s why traders trust us:
                </p>
                <img
                    src="/goldlp/img-choose.svg"
                    alt="Trading screen"
                    className="mx-auto h-[390px] rounded-lg shadow-lg max-w-full"
                />
            </div>
        </section>
    );
};

export default WhyChooseGTC;
