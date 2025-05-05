import React from 'react';

const GoldContentHighlights = () => {
  const highlights = [
    {
      title: 'Precision pricing. No fluff.',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
    },
    {
      title: 'Built for serious gold moves.',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
      isActive: true,
    },
    {
      title: 'Every millisecond counts. We make them matter.',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
    },
  ];

  return (
    <section className="bg-[#0b1244] text-white px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-stretch">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg flex flex-col justify-center px-16 py-16 text-center transition-all duration-300 ${
              item.isActive
                ? 'bg-gradient-to-br scale-125 from-[#1b1f6b] to-[#181a2e] shadow-lg'
                : ''
            }`}
          >
            <h3 className="font-semibold text-lg mb-8">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoldContentHighlights;
