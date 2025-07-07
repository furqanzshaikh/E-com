'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  const scrollRef = useRef(null);

const categories = [
  { name: 'Verified Open Box', image: '/imgs/Categeory1.png', href: '/laptops?type=openbox' },
  { name: 'Accessories', image: '/imgs/Categeory2.png', href: '/accessories' },
  { name: 'Custom PCs', image: '/imgs/Categeory3.png', href: '/custom-pc' },
  { name: 'Gaming', image: '/imgs/Categeory4.png', href: '/laptops?type=gaming' },
  { name: 'Laptops', image: '/imgs/Categeory5.png', href: '/laptops' },
  { name: 'Workstations', image: '/imgs/Categeory1.png', href: '/laptops?type=workstations' },
  { name: 'Desktops', image: '/imgs/Categeory2.png', href: '/laptops?type=desktop' },
];

  const scroll = (direction) => {
    const scrollAmount = 220;
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const newPosition =
        direction === 'left'
          ? Math.max(scrollLeft - scrollAmount, 0)
          : scrollLeft + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Top Categories</h2>
        <span className="text-blue-500 hover:underline text-sm sm:text-base cursor-pointer">
          See more
        </span>
      </div>

      {/* Scroll Container + Arrows */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition hidden sm:block"
        >
          <IoIosArrowBack className="w-5 h-5 text-gray-700" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition hidden sm:block"
        >
          <IoIosArrowForward className="w-5 h-5 text-gray-700" />
        </button>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-10 overflow-x-auto scroll-smooth pb-2 custom-scrollbar"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href || '#'}
              className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] flex flex-col items-center"
            >
              <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] mb-3 rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-center text-sm sm:text-base font-medium">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
