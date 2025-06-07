"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Accessories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/products/all");
        const data = await res.json();
        setProducts(data.products || []); // Adjust if your backend returns differently
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="w-full px-6 md:px-16 py-12 bg-white">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-black mb-2 md:mb-0">
            Must-Have <br className="md:hidden" /> Accessories
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-md">
            Upgrade your setup with essential accessories – from precision peripherals to everyday add-ons.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-sm h-48 md:h-60">
            <Image
              src="/imgs/bg2.jpg"
              alt="Top Picks"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 z-10 flex flex-col justify-end p-4 pb-10">
              <h3 className="text-white text-lg font-semibold mb-1">Top Picks</h3>
              <p className="text-white text-sm mb-2">
                Hand-picked accessories that pair perfectly with your device.
              </p>
              <button className="text-sm text-white inline-flex items-center">
                Shop Now ↗
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-sm h-48 md:h-60">
            <Image
              src="/imgs/bg1.jpg"
              alt="Everyday Essentials"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 z-10 flex flex-col justify-end p-4 pb-10">
              <h3 className="text-white text-lg font-semibold mb-1">Everyday Essentials</h3>
              <p className="text-white text-sm mb-2">
                Reliable accessories for work, study, play – and your device.
              </p>
              <button className="text-sm text-white inline-flex items-center">
                Shop Now ↗
              </button>
            </div>
          </div>
        </div>

        {/* 🔽 Product Cards Underneath */}
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {products.map((product, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white shadow-gray-200 overflow-hidden w-full">
                <div className="relative w-full h-60">
                  <Image
                    src={product.img}
                    alt={product.model}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-md font-semibold">{product.model}</h3>
                  <p className="text-sm text-gray-500">{product.specs}</p>
                  <p className="text-md font-bold mt-2">${product.current_price}</p>
                  <button className="mt-4 w-full py-2 bg-[#EBEBEB] text-sm rounded-xl hover:bg-black hover:text-white transition">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Build Promo Section */}
      <div
        className="w-full md:h-screen flex flex-col justify-between py-20 items-center text-center"
        style={{
          background: "linear-gradient(116.34deg, #FFEDED 0%, #F3F2FB 100%)",
        }}
      >
        <div className="px-4">
          <h1 className="text-xl md:text-4xl font-semibold text-black mb-8 leading-normal">
            Get Exclusive Freebies <br />
            with Your Custom Build!
          </h1>
          <p className="text-sm md:text-lg text-black font-semibold">
            Build your dream PC and take home a premium Keyboard & Mouse absolutely FREE.
          </p>
          <p className="text-sm md:text-lg text-black font-medium">
            (Limited time offer — while stocks last!)
          </p>
        </div>
        <button className="mt-8 px-12 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
          Buy Now
        </button>
      </div>
    </>
  );
}
