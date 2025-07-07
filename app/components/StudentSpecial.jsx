'use client';
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function StudentSpecial({ heading, img, text, reverse, textcolor }) {
  const laptops = [
    {
      id: "G1D010",
      img: "/imgs/laptop.jpg",
      brand: "Lenovo",
      model: "ThinkPad X1",
      specs: "i7/16/512",
      original_price: 1599,
      current_price: 1499,
      category: "Business Laptops",
    },
    {
      id: "G1D013",
      img: "/imgs/laptop.jpg",
      brand: "Asus",
      model: "ZenBook 14",
      specs: "i5/8/256",
      original_price: 1299,
      current_price: 1099,
      category: "Ultrabooks",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize(); // Initial size
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const cardsToShow = windowWidth >= 768 ? 2 : 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : laptops.length - cardsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < laptops.length - cardsToShow ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f5fa] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10">{heading}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Image Section */}
          <div
            className={`lg:col-span-6 rounded-lg overflow-hidden relative ${
              reverse ? "lg:order-2" : "lg:order-1"
            } ${textcolor ? "text-white" : "text-black"}`}
          >
            <div className="relative p-6 pb-12 pt-32 min-h-[400px] md:min-h-[500px] h-full w-full flex items-end justify-center overflow-hidden rounded-lg">
 
  <Image
    src={img}
    alt="Laptop with mountain view"
    fill
    className="object-cover object-top z-0"
    priority
  />

  {/* Overlay Content */}
  <div className="relative z-10 text-center max-w-xl px-4">
    <h2
      className="md:text-4xl text-lg font-semibold mb-4"
      dangerouslySetInnerHTML={{ __html: text }}
    />
    <button
      className={`bg-transparent border text-lg md:text-xl ${
        textcolor ? "text-white" : "text-black"
      } hover:bg-black/10 rounded-full md:px-6 md:py-2 px-4 py-2 flex items-center mx-auto`}
    >
      Find Now <ArrowRight className="ml-2" />
    </button>
  </div>
</div>

          </div>

          {/* Product Cards Section */}
          <div
            className={`lg:col-span-6 bg-white rounded-lg p-6 relative ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Carousel Controls */}
            <div className="flex justify-end mb-6 space-x-2">
              <button
                onClick={handlePrev}
                className="rounded-full p-2 bg-transparent border hover:bg-gray-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="rounded-full p-2 bg-transparent border hover:bg-gray-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {laptops
                .slice(currentIndex, currentIndex + cardsToShow)
                .map((laptop) => (
                  <div
                    key={laptop.id}
                    className="border border-gray-300 rounded-lg overflow-hidden relative"
                  >
                    <div className="bg-gray-100 p-8 flex items-center justify-center h-64">
                      <Image
                        src={laptop.img}
                        alt={laptop.model}
                        width={300}
                        height={200}
                        className="max-h-full w-auto"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-gray-500 text-sm mb-1">{laptop.category}</div>
                      <h3 className="font-medium text-lg mb-2">{laptop.model}</h3>
                      <div className="font-bold text-xl mb-4">
                        ${laptop.current_price}{" "}
                        <span className="line-through text-sm text-gray-500">
                          ${laptop.original_price}
                        </span>
                      </div>
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-black border-none py-2 rounded-full">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
