import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BuiltPc() {
  const cards = [
    {
      title: "PC for Content Creators",
      link: "/build-pc",
      img: "/imgs/customb1.jpg",
    },
    {
      title: "PC for AI & Machine Learning",
      link: "/custom-built",
      img: "/imgs/customb2.png",
    },
    {
      title: "PC for Gaming",
      link: "/custom-built",
      img: "/imgs/customb3.jpg",
    },
    {
      title: "NVIDIA 40 Series Builds",
      link: "/custom-built",
      img: "/imgs/customb4.jpg",
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
          <div className="mb-10 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-3 leading-tight">
              Start Building Your <br className="hidden sm:block" />
              Dream PC
            </h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Choose between a powerful prebuilt or a fully custom setup
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <Link href={card.link} key={index}>
                <div className="relative group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl">
                    {/* Bullet hole */}
                    <div className="absolute bottom-[-10px] right-[-10px] w-[45px] h-[45px] bg-white rounded-full z-10 flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </div>

                    {/* Image */}
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={300}
                      height={200}
                      className="w-full h-[200px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-black mt-3 text-center">
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
