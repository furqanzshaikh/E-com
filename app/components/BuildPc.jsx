import Image from "next/image";
import React from "react";

const BuildPc = () => {
  return (
    <div className="px-4 my-10">
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/imgs/Background.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0  z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between h-full p-6 lg:p-12">
          {/* PC Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <Image
              src="/imgs/Pcbuilding.png"
              alt="PC Build"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-white  lg:text-left">
            <p className="text-lg font-medium mb-4">
              Power, performance & personalization — all in one rig.
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Build Your <br /> Dream PC
            </h2>
            <p className="text-sm sm:text-base mb-6 max-w-xl mx-auto lg:mx-0">
              Customize your perfect setup – choose the components, performance,
              and style that fit your needs. Whether it's for gaming, editing, or
              daily tasks – make it yours.
            </p>
            <button className="px-8 py-2 text-sm sm:text-base bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition">
              Start Building
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildPc;
