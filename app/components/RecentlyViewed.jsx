"use client";

import { useState } from "react";
import { IoMdArrowBack,IoMdArrowForward } from "react-icons/io";

import Image from "next/image";

export default function RecentlyViewed() {
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    {
      id: 1,
      name: "ACER",
      description: "UT-7095.007 ATOM/2/32",
      price: 185,
      image: "/imgs/laptop.jpg",
      sale: false,
    },
    {
      id: 2,
      name: 'i7 13th Generation 15"',
      description: "",
      price: 30,
      image: "/imgs/laptop.jpg",
    },
    {
      id: 3,
      name: 'i3 6th Generation 16.5"',
      description: "",
      price: 15,
      image: "/imgs/laptop.jpg",
    },
  ];

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="px-4 md:px-16 py-6">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Recently Viewed</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200  hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Image Section */}
            <div className="relative w-full h-60 sm:h-64 md:h-72">
              {product.sale && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-sm">
                  SALE
                </div>
              )}
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            {/* Text Section */}
            <div className="p-4 flex-1 text-center flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                {product.description && (
                  <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                )}
              </div>
              <p className="text-md font-bold text-gray-800 mb-3">${product.price}</p>
              <button className="w-full bg-[#EBEBEB] py-2 rounded-2xl text-sm font-medium hover:bg-black hover:text-white transition mt-auto">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          className="p-3 bg-transparent border hover:bg-gray-200 rounded-full disabled:opacity-50"
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          <IoMdArrowBack className="h-5 w-5 text-gray-800" />
        </button>
        <button
          className="p-3 bg-transparent border hover:bg-gray-200 rounded-full"
          onClick={handleNext}
        >
          <IoMdArrowForward className="h-5 w-5 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
