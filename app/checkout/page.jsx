'use client'
import { Headphones } from "lucide-react";
import React, { useState } from "react";

const CheckoutPage = () => {
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className="w-full px-4 py-10">
      {/* Cart Header Section */}
      <div
        className="rounded-lg mb-10 p-10"
        style={{
          background: "linear-gradient(102.81deg, #F8FFEC 0%, #FFEDED 100%)",
        }}
      >
        <h1 className="text-4xl font-semibold text-center mb-6">Cart</h1>
        <p className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Egestas id egestas dolor tellus vitae at nulla vitae. Neque leo
          posuere libero scelerisque in neque condimentum. Pharetra viverra risus tempor id. Lectus dictum sit vitae
          tortor in commodo.
        </p>
      </div>

      {/* Main Checkout Section */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Billing Details */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input id="firstName" className="w-full p-2 border border-gray-300 rounded" />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input id="lastName"  className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <label htmlFor="country" className="block">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select id="country" className="w-full p-2 border border-gray-300 rounded">
                <option value="india">India</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
              </select>
            </div>

            <div className="space-y-2 mb-4">
              <label htmlFor="streetAddress" className="block">
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                id="streetAddress"
                placeholder="House number and street name"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
              />
              <input
                id="streetAddressLine2"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="space-y-2 mb-4">
              <label htmlFor="city" className="block">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input id="city" className="w-full p-2 border border-gray-300 rounded" />
            </div>

            <div className="space-y-2 mb-4">
              <label htmlFor="state" className="block">
                State <span className="text-red-500">*</span>
              </label>
              <select id="state" className="w-full p-2 border border-gray-300 rounded">
                <option value="bihar">Bihar</option>
                <option value="delhi">Delhi</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </div>

            <div className="space-y-2 mb-4">
              <label htmlFor="pinCode" className="block">
                PIN Code <span className="text-red-500">*</span>
              </label>
              <input id="pinCode" className="w-full p-2 border border-gray-300 rounded" />
            </div>

            <div className="space-y-2 mb-4">
              <label htmlFor="phone" className="block">
                Phone (optional)
              </label>
              <input id="phone" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
            </div>

            <div className="space-y-2 mb-4">
              <label htmlFor="email" className="block">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input id="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            
          <h2 className="text-lg font-medium mb-4">Order notes (optional)</h2>
          <textarea
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="min-h-[100px] w-full p-2 border border-gray-300 rounded"
          />

          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Your Order</h2>

              <div className="flex justify-between mb-4">
                <span className="font-medium">Product</span>
                <span className="font-medium">Subtotal</span>
              </div>

              <div className="flex justify-between py-4 border-t border-gray-200">
                <span>i7 13th Generation 15" × 1</span>
                <span>$ 30</span>
              </div>

              <div className="flex justify-between py-4 border-t border-gray-200">
                <span className="font-medium">Subtotal</span>
                <span>$ 30</span>
              </div>

              <div className="flex justify-between py-4 border-t border-gray-200">
                <span className="font-bold">Total</span>
                <span className="font-bold">$ 30</span>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <p className="mb-4">Have a coupon? Click here to enter your coupon code</p>
              <p className="mb-4">If you have a coupon code, please apply it below.</p>

              <div className="flex gap-2">
                <input
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2">Apply</button>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <p className="mb-6 text-gray-700">
                Sorry, it seems that there are no available payment methods. Please contact us if you require assistance
                or wish to make alternate arrangements.
              </p>

              <p className="mb-6 text-gray-700">
                Your personal data will be used to process your order, support your experience throughout this website,
                and for other purposes described in our privacy policy.
              </p>

              <button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-2">Place Order</button>
            </div>
          </div>
        </div>

        {/* Order Notes */}
        
   
        
      </div>
              {/* Footer */}
        <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Logo</h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full p-2 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-headphones"
              >
                <path d="M3 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a10 10 0 0 1 20 0v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2" />
              </svg>
            </div>
            <div>
              <p className="text-sm">support@storemail.com</p>
              <p className="text-sm">1234567890</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Keep Up With The Latest</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 rounded-l-full border border-gray-300 flex-grow"
              />
              <button className="bg-black text-white px-6 py-2 rounded-r-full">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CheckoutPage;
