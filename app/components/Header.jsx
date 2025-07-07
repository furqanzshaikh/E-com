'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode"; // ✅ Use named import


import { CiFacebook } from "react-icons/ci";
import { FaHeadphonesAlt, FaSearch, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { LuInstagram } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline, IoClose } from "react-icons/io5";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // ✅ from localStorage
    console.log("Token from localStorage:", token);

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsLoggedIn(true);
        setUserName(decoded?.name || decoded?.email || "User");
      } catch (err) {
        console.error("Token decode error:", err);
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login"; // or use Next.js router
  };

  return (
    <header className="relative">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 md:px-16 py-4 bg-white">
        <div className="w-14 lg:w-32">
          <Image src="/imgs/Maxtexh 1.png" alt="logo" width={80} height={80} priority />
        </div>

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

          {isLoggedIn ? (
            <div onClick={handleLogout} className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <RxAvatar className="text-xl" />
              <span className="mb-1">{userName} (Logout)</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
              <RxAvatar className="text-xl" />
              <span className="mb-1">
                <Link href="/login">Login / Sign up</Link>
              </span>
            </div>
          )}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      <hr className="border-gray-300 w-[90%] mx-auto" />

      {/* Desktop Nav */}
      <nav className="hidden lg:flex flex-wrap items-center justify-between px-16 py-4 bg-gray-50 gap-6 text-sm">
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/" className="hover:text-[#FF0000]">Home</Link>
          <Link href="/about" className="hover:text-[#FF0000]">About Us</Link>
          <Link href="#" className="hover:text-[#FF0000]">Privacy Policy</Link>
          <Link href="/contact-us" className="hover:text-[#FF0000]">Contact</Link>
        </div>

        <div className="flex items-center gap-6 flex-grow justify-center">
          <div className="flex gap-4">
            <Link href="/repair" className="px-4 py-2 bg-[#FF0000] rounded-2xl text-white">Repair Your PC</Link>
            <Link href="/build-pc" className="px-4 py-2 bg-[#0255FE] text-white rounded-2xl">Build Your PC</Link>
          </div>
          <div className="flex items-center px-3 py-1 bg-white shadow-sm rounded-full">
            <input type="text" placeholder="Search" className="outline-none px-3 py-1 w-72 bg-transparent" />
            <FaSearch className="text-gray-500" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href={'/cart'}><IoCartOutline className="text-lg" /></Link>
          <span className="text-sm font-medium">₹ 0</span>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`fixed top-0 left-0 h-full w-full z-50 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="w-full h-full bg-[#F3F2FB] p-4 space-y-4 text-sm shadow-lg z-50">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">Logo</span>
            <button className="bg-black text-white p-2" onClick={() => setMobileMenuOpen(false)}>
              <IoClose className="text-2xl" />
            </button>
          </div>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#FF0000]">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#FF0000]">About us</Link>
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#FF0000]">Contact</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="block text-left w-full hover:text-red-500">Logout</button>
          ) : (
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#FF0000]">Login / Sign up</Link>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-red-500 p-3 rounded-full shadow-md z-50 lg:hidden">
        <FaHeadphonesAlt className="text-xl text-white" title="Support" />
      </div>
    </header>
  );
};

export default Header;
