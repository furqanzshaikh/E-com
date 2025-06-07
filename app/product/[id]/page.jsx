"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Receipt,
  Percent,
  Bike,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProductDetail from "../../components/ProductDetail";

const productFeatures = [
  {
    icon: "/imgs/icon1.png",
    title: "Easy returns",
    subtitle: "Within 30 days",
  },
  {
    icon: "/imgs/icon2.png",
    title: "Secure Shopping",
    subtitle: "Safe & Protected",
  },
  { icon: "/imgs/icon3.png", title: "Pickup", subtitle: "Pick from showroom" },
  {
    icon: "/imgs/icon4.png",
    title: "Easy Instalment",
    subtitle: "Up to 12 months",
  },
];

const FeatureCard = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3">
    <div className="bg-lime-200 p-3 rounded-md">
      <Image src={icon} alt={title} width={24} height={24} />
    </div>
    <div>
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);

export default function CombinedProductPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [currentSlide, setCurrentSlide] = useState(0);

  const recommendedProducts = [
    {
      id: "G1D001",
      img: "/imgs/laptop.jpg",
      brand: "ACER",
      model: "UT.709SL007",
      specs: "ATOM/2/32",
      original_price: 185,
      current_price: 185,
      category: "Laptops",
    },
    {
      id: "G4D002",
      img: "/imgs/laptop.jpg",
      brand: "Intel",
      model: "i7 13th Generation",
      specs: '15" Display',
      original_price: 30,
      current_price: 30,
      category: "Processors",
    },
    {
      id: "G4D003",
      img: "/imgs/laptop.jpg",
      brand: "Intel",
      model: "i3 6th Generation",
      specs: '16.5" Display',
      original_price: 30,
      current_price: 15,
      category: "Processors",
    },
  ];

  const carouselFeatures = [
    {
      icon: <Receipt className="h-10 w-10" />,
      title: "Pay over time, interest-free.",
      description:
        "Lorem ipsum dolor sit amet consectetur Lacinia gravida penatibus.",
    },
    {
      icon: <Percent className="h-10 w-10" />,
      title: "Best prices and offers",
      description:
        "Lorem ipsum dolor sit amet consectetur Lacinia gravida penatibus.",
    },
    {
      icon: <Bike className="h-10 w-10" />,
      title: "Shop live with free delivery.",
      description:
        "Lorem ipsum dolor sit amet consectetur Lacinia gravida penatibus.",
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Great deals in every month",
      description:
        "Lorem ipsum dolor sit amet consectetur Lacinia gravida penatibus.",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselFeatures.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselFeatures.length) % carouselFeatures.length);

  return (
    <>
      {/* Header */}
      <div className="w-full md:px-4 sm:px-6 ">
        <div
          className="md:rounded-[40px] w-full rounded-none py-12 my-10 text-center max-w-7xl mx-auto"
          style={{
            background: "linear-gradient(102.81deg, #FFEDED 30%, #F8FFEC 100%)",
          }}
        >
          <h1 className="text-4xl font-semibold mb-4">Product Detail</h1>
          <p className="text-base max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Egestas id egestas dolor tellus vitae at nulla vitae.
            Neque leo posuere libero scelerisque in neque condimentum.
          </p>
        </div>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-10 my-10 bg-white rounded-3xl ">
        <ProductDetail />
      </section>

      {/* Feature Grid */}
      <section className="flex md:justify-center md:items-center max-w-7xl mx-auto px-4 md:px-10 py-10 my-10 bg-white rounded-3xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productFeatures.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </section>

      {/* Description / Review Tabs */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-10 my-10 bg-white rounded-3xl ">
        <div className="flex space-x-4 mb-6">
          {["description", "reviews"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "description" ? "Product Description" : "Reviews"}
            </button>
          ))}
        </div>

        <div className="bg-[#F9F9FF] rounded-3xl p-6 md:p-10">
          {activeTab === "description" ? (
            <div className="text-gray-800 text-sm md:text-base space-y-4">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <p>It was popularised in the 1960s with the release of Letraset sheets...</p>
            </div>
          ) : (
            <div className="text-gray-700 text-sm">No reviews available yet.</div>
          )}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-10 my-10 bg-white rounded-3xl ">
        <h1 className="text-3xl font-semibold mb-6">Recommended</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedProducts.map((product, index) => (
            <Link href={`/product/${product.id}`} key={index}>
              <div className="bg-white rounded-xl border border-gray-200  transition">
                <div className="relative w-full h-60 sm:h-64 md:h-72">
                  <Image
                    src={product.img}
                    alt={product.model}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold">{product.model}</h2>
                  <p className="text-sm text-gray-600">{product.specs}</p>
                  <p className="text-md font-bold text-gray-800 my-2">
                    ${product.current_price}
                  </p>
                  <button className="w-full bg-[#EBEBEB] py-2 rounded-2xl text-sm font-medium hover:bg-black hover:text-white transition">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Cards Carousel */}
      <section className="w-full bg-[#f5ffed] py-16 px-4 md:px-10 ">
        {/* Background Hero */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-3xl my-16 max-w-7xl mx-auto">
          <Image
            src="/imgs/Background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 px-6 md:px-12 flex items-center justify-between gap-x-8 md:gap-x-32">
            <div className="relative w-1/3 max-w-[300px] h-[300px]">
              <Image
                src="/imgs/dlaptop.png"
                alt="Laptop"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-white flex-1">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                Find your ideal <br /> laptop today
              </h1>
              <p className="text-lg md:text-xl mb-4">
                with the power and creative tools that match your bold style!
              </p>
              <button className="bg-transparent border-white border text-white font-medium px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
                Find Now
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center md:text-left">
            Why we are the best place to buy.
          </h1>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {carouselFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 relative ">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500 mb-8">{feature.description}</p>
                <button className="absolute font-bold text-xl bottom-4 right-4 bg-gray-300 w-6 h-6 flex items-center justify-center rounded-full">
                  +
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden px-2">
            <div className="bg-white rounded-xl p-6 relative text-center">
              <div className="mb-4">{carouselFeatures[currentSlide].icon}</div>
              <h3 className="text-xl font-bold mb-2">
                {carouselFeatures[currentSlide].title}
              </h3>
              <p className="text-gray-700 mb-8">{carouselFeatures[currentSlide].description}</p>
              <button className="absolute bottom-4 right-4 bg-gray-300 w-6 h-6 flex items-center justify-center rounded-full text-xl font-bold">
                +
              </button>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {carouselFeatures.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full cursor-pointer ${
                    currentSlide === index ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-end mt-6 gap-2">
            <button
              onClick={prevSlide}
              className="rounded-full bg-black text-white hover:bg-black/90 p-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-black text-white hover:bg-black/90 p-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
