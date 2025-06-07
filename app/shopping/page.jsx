"use client";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Listing from "../components/Listing";
import Filter from "../components/Filter";
import StudentSpecial from "../components/StudentSpecial";
import RecentlyViewed from "../components/RecentlyViewed";

const Shopping = () => {
  const categories = [
    { src: "/imgs/cat2.png", title: "Iphone" },
    { src: "/imgs/cat3.png", title: "Mega Offer" },
    { src: "/imgs/cat4.png", title: "Discount" },
    { src: "/imgs/cat5.png", title: "New Arrivals" },
    { src: "/imgs/cat1.png", title: "All" },
  ];

  const message = "Need Help Choosing? Contact Us for Expert Advice";
  const btn = "Talk to Support";
  const heading = "Gaming Beasts";
  const img = "/imgs/gaming.jpg";
  const text = "Mega Sale – Up to <br/> 30% Off on Gaming <br/> Laptops";

  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState(1000);
  const [brands, setBrands] = useState({
    Apple: false,
    Samsung: false,
    OnePlus: false,
  });

  const handleBrandChange = (brand) => {
    setBrands({ ...brands, [brand]: !brands[brand] });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

 

  return (
    <>
      {/* Category List */}
      <div className="w-full px-4 sm:px-8 md:px-16 py-10">
        <div className="overflow-x-auto custom-scrollbar">
          <div className="flex gap-6 sm:gap-10 min-w-max justify-start sm:justify-around px-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[120px] sm:w-[140px] flex flex-col items-center text-center ${selectedCategory === category.title ? 'border-2 border-blue-500' : ''}`}
                onClick={() => handleCategoryChange(category.title)}
              >
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden mb-2">
                  <Image
                    src={category.src}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base font-medium">
                  {category.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Carousel */}
      <Carousel message={message} btnText={btn} />

      {/* Filter + Listing Section */}
      <div className="px-4 sm:px-8 py-8 flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {/* Filter Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-6 items-center py-6 justify-between md:items-start">
          <Filter />
          <div className="relative w-full max-w-xs">
            <Image
              src="/imgs/studentspecial.png"
              alt="Student Special"
              width={300}
              height={300}
              className="rounded-xl w-full h-auto"
            />
            <div className="absolute bottom-4 left-0 right-0 rounded-b-xl py-2 px-3">
              <p className="text-black text-sm sm:text-base font-semibold text-center">
                Student Deal - <br /> 20% Off Laptops
              </p>
            </div>
          </div>

        
        </div>

        {/* Listing Section */}
        <div className="w-full md:w-3/4">
          <Listing selectedCategory={selectedCategory} price={price} brands={brands} />
        </div>
      </div>

      {/* Student Special Section */}
      <StudentSpecial reverse={true} heading={heading} img={img} text={text} textcolor={true} />
      <RecentlyViewed />
    </>
  );
};

export default Shopping;
