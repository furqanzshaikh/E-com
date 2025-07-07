import Image from 'next/image';
import React from 'react';

const Card = () => {
  const cards = [
    {
      src: '/imgs/card1.jpg',
      title: 'Gaming Zone',
      description: 'High-performance gaming laptops.',
      buynow: 'Shop Now',
    },
    {
      src: '/imgs/card2.jpg',
      title: 'Work & Study',
      description: 'Smart laptops for everyday use.',
      buynow: 'Shop Now',
    },
    {
      src: '/imgs/card3.jpg',
      title: 'Creator Hub',
      description: 'Built for editing & design.',
      buynow: 'Shop Now',
    },
  ];

  return (
    <div className="px-4 sm:px-10 md:px-20 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Choose best,</h2>
        <h2 className="text-3xl sm:text-4xl font-semibold">See what’s new!</h2>
      </div>

      {/* Card List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full max-w-[350px] h-[400px] rounded-xl overflow-hidden shadow-md group"
          >
            {/* Image */}
            <Image
              src={card.src}
              alt={`card-${index}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end bg-black/0">
              <p className="text-sm text-black mb-1">{card.description}</p>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                {card.title}
              </h3>
              <button className="text-black text-start py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                {card.buynow}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
