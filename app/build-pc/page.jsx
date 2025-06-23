import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BuildPc() {
  const cards = [
    {
      title: "Custom Build PC",
      link: "/custom-pc",
      img: "/imgs/prebuilt.jpg",
    },
    {
      title: "Prebuilt PC",
      link: "/prebuilt-pc",
      img: "/imgs/custombuilt.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-[1400px]">
        <div
          className="p-6 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden"
          style={{
            background:
              "linear-gradient(117deg, rgba(255,237,237,1) 0%, rgba(255,237,237,1) 15%, rgba(243,242,251,1) 100%)",
          }}
        >
          {/* Header Section */}
          <div className="mb-12 sm:mb-16 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 leading-tight">
              Start Building Your <br className="hidden sm:block" />
              Dream PC
            </h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Choose between a powerful prebuilt or a fully custom setup
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {cards.map((card, index) => (
              <Link href={card.link} passHref key={index}>
                <div className="relative group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Bullet hole on image */}
                    <div className="absolute bottom-[-15px] right-[-15px] w-[60px] h-[60px] bg-white rounded-full z-10 flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>

                    {/* Image */}
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={600}
                      height={400}
                      className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-black mt-4 text-center">
                    {card.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
