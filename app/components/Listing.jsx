"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Listing() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2000,
    hours: 20,
    minutes: 23,
    seconds: 28,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/products/all");
        const data = await res.json();
        setProducts(data.data); // Use the 'data' array directly
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4 md:px-8 py-6">
      {/* Heading + Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 max-w-screen-xl mx-auto gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Discover the Best Picks
        </h1>
        <div className="flex gap-2 flex-wrap">
          <button className="py-2 px-4 border rounded-2xl hover:bg-gray-200 transition">
            All
          </button>
          <button className="py-2 px-4 border rounded-2xl hover:bg-gray-200 transition">
            Popular
          </button>
          <button className="py-2 px-4 border rounded-2xl hover:bg-gray-200 transition">
            New Added
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link href={`/product/${product.id}`} key={index}>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-60 sm:h-64 md:h-72">
                {product.images.length > 0 && (
                  <Image
                    src={product.url}
                    alt={product.images[0].alt || product.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                )}
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  {product.description}
                </p>
                <p className="text-md font-bold text-gray-800 mb-3">
                  ${product.sellingPrice}
                </p>
                <button className="w-full bg-[#EBEBEB] py-2 rounded-2xl text-sm font-medium hover:bg-black hover:text-white transition">
                  Add To Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
