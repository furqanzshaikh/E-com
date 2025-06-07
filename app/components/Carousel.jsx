"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowOutward } from "react-icons/md";

const Carousel = ({ message, btn }) => {
  return (
    <div className="w-full h-full my-8 px-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide key={slide}>
            <div className="relative w-full rounded-xl overflow-hidden aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/6]">
              <img
                src={`/imgs/Carousel${slide}.jpg`}
                alt={`img${slide}`}
                className="absolute inset-0 w-full h-full object-cover object-left-center"
              />
              <div className="absolute inset-0 flex items-center justify-center md:justify-end p-6">
                <div className="text-white max-w-md p-6 rounded-lg text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                    {message}
                  </h2>
                  <button className="mt-2 px-6 py-2 border border-white text-white bg-transparent rounded-full font-medium hover:bg-white hover:text-black transition duration-300">
                    <span className="flex items-center justify-center gap-2">
                      {btn} <MdArrowOutward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !relative mt-4" />
      </Swiper>
    </div>
  );
};

export default Carousel;
