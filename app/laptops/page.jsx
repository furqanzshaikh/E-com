"use client";

import Image from "next/image";
import React from "react";
import Filter from "../components/Filter";
import Listing from "../components/Listing";
import StudentSpecial from "../components/StudentSpecial";
import RecentlyViewed from "../components/RecentlyViewed";

const Laptops = () => {
  const heading = "Gaming Beasts";
  const img = "/imgs/gaming.jpg";
  const text = "Mega Sale – Up to <br/> 30% Off on Gaming <br/> Laptops";

  return (
    <>
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
          <Listing />
        </div>
      </div>

      {/* Student Special Section */}
      <StudentSpecial
        reverse={true}
        heading={heading}
        img={img}
        text={text}
        textcolor={true}
      />
      <RecentlyViewed />
    </>
  );
};

export default Laptops;
