'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaHeadphonesAlt, FaSearch, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { LuInstagram } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline, IoClose } from "react-icons/io5";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 md:px-16 py-4 bg-white">
        {/* Logo */}
        <div className="hidden lg:block">
          <Image src="/imgs/Maxtexh 1.png" alt="logo" width={80} height={80} priority />
        </div>

        {/* Desktop Support & Social */}
        <div className="hidden lg:flex items-center gap-8 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaHeadphonesAlt className="text-xl" />
            <span>24/7 Support Centre</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Follow Us:</span>
            <div className="flex gap-2 text-xl text-gray-600">
              <CiFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaXTwitter className="hover:text-black cursor-pointer" />
              <TiSocialLinkedinCircular className="hover:text-blue-700 cursor-pointer" />
              <LuInstagram className="hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
            <RxAvatar className="text-xl" />
            <span className="mb-1">Login / Sign up</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 w-[90%] mx-auto" />

      {/* Desktop Nav */}
      <nav className="hidden lg:flex flex-wrap items-center justify-between px-16 py-4 bg-gray-50 gap-6 text-sm">
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/" className="hover:text-[#FF0000]">Home</Link>
          <div className="relative group">
  <button className="hover:text-[#FF0000] ">Shop</button>

  {/* Main Dropdown */}
  <div className="absolute w-52  top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 min-w-[200px] text-base">
    
    {/* Laptops */}
    <div className="relative group/laptop w-52 ">
      <div className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Laptops</div>
      <div className="absolute top-0 left-full bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover/laptop:opacity-100 invisible group-hover/laptop:visible transition-all duration-200 z-50 min-w-[200px] text-base">
        <Link href="/shopping/laptops/gaming" className="block px-6 py-3 hover:bg-gray-100">Gaming</Link>
        <Link href="/shopping/laptops/business" className="block px-6 py-3 hover:bg-gray-100">Business</Link>
        <Link href="/shopping/laptops/student" className="block px-6 py-3 hover:bg-gray-100">Student</Link>
      </div>
    </div>

    {/* Desktops */}
    <div className="relative group/desktop w-52">
      <div className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Desktops</div>
      <div className="absolute top-0 left-full bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover/desktop:opacity-100 invisible group-hover/desktop:visible transition-all duration-200 z-50 min-w-[200px] text-base">
        <Link href="/shopping/desktops/gaming" className="block px-6 py-3 hover:bg-gray-100">Gaming</Link>
        <Link href="/shopping/desktops/office" className="block px-6 py-3 hover:bg-gray-100">Office</Link>
        <Link href="/shopping/desktops/mini" className="block px-6 py-3 hover:bg-gray-100">Mini PC</Link>
      </div>
    </div>

    {/* Build PC */}
    <div className="relative group/buildpc w-52">
      <div className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Build PC</div>
      <div className="absolute top-0 left-full bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover/buildpc:opacity-100 invisible group-hover/buildpc:visible transition-all duration-200 z-50 min-w-[200px] text-base">
        <Link href="/build-pc/gaming" className="block px-6 py-3 hover:bg-gray-100">Gaming Build</Link>
        <Link href="/build-pc/budget" className="block px-6 py-3 hover:bg-gray-100">Budget Build</Link>
        <Link href="/build-pc/custom" className="block px-6 py-3 hover:bg-gray-100">Custom Build</Link>
      </div>
    </div>
    
  </div>
</div>

          <Link href="/about" className="hover:text-[#FF0000]">About Us</Link>
          <Link href="#" className="hover:text-[#FF0000]">Privacy Policy</Link>
          <Link href="contact-us" className="hover:text-[#FF0000]">Contact</Link>
        </div>

        <div className="flex items-center gap-6 flex-grow justify-center">
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-[#FF0000] rounded-2xl text-white"><Link href={'/repair'}>Repair Your PC</Link></button>
            <button className="px-4 py-2 bg-[#0255FE] text-white rounded-2xl">Build Your PC</button>
          </div>
          <div className="flex items-center px-3 py-1 bg-white shadow-sm rounded-full">
            <input type="text" placeholder="Search" className="outline-none px-3 py-1 w-72 bg-transparent" />
            <FaSearch className="text-gray-500" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <IoCartOutline className="text-lg" />
          <span className="text-sm font-medium">₹ 0</span>
        </div>
      </nav>

      {/* Mobile Nav (Slide-in) */}
      <div className={`fixed top-0 left-0 h-full w-full z-50 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
  <div className="w-full h-full bg-[#F3F2FB] p-6 space-y-4 text-sm shadow-lg z-50">
    <div className="flex justify-between items-center">
      <span className="font-semibold text-xl">logo</span>
      <button onClick={() => setMobileMenuOpen(false)}>
        <IoClose className="text-2xl" />
      </button>
    </div>
    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#FF0000]">Home</Link>
    <Link href="/shopping" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#FF0000]">Shop</Link>
    <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#FF0000]">My Account</Link>
    <Link href="contact-us" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#FF0000]">Contact</Link>
  </div>

  {/* Bottom-right customer support icon */}
  <div className="fixed bottom-4 right-4 bg-red-500 p-3 rounded-full shadow-md z-50 lg:hidden">
    <FaHeadphonesAlt className="text-xl text-white" title="Support" />
  </div>
</div>
    </header>
  );
};

export default Header;
