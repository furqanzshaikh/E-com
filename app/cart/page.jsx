'use client'
import { useState } from "react";
import { Headphones } from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'i7 13th Generation 15"',
      price: 30,
      quantity: 1,
      image: '/imgs/laptop.jpg',
    },
  ]);

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Header Section */}
      <div className="w-full px-0 md:px-8 py-10">
        <div
          className="rounded-lg mb-10 p-10"
          style={{
            background: "linear-gradient(102.81deg, #F8FFEC 0%, #FFEDED 100%)",
          }}
        >
          <h1 className="text-4xl font-semibold text-center mb-6">Cart</h1>
          <p className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Egestas id egestas dolor tellus vitae at nulla vitae. Neque leo posuere libero scelerisque in
          neque condimentum. Pharetra viverra risus tempor id. Lectus dictum sit vitae tortor in commodo.
          </p>
        </div>
      </div>

      <div className="m-auto px-4 md:px-16">
        {cartItems.length === 0 ? (
          <>
            {/* Empty Cart Message */}
            <div className="border-t border-blue-400 rounded-lg p-6 mb-10 bg-[#F6F5F8]">
              <p className="text-gray-700 flex items-center text-lg">
                <span className="text-gray-400 mr-2">·</span>
                Your cart is currently empty.
              </p>
            </div>

            <div className="mb-20">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg text-base">
                Return to shop
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Cart Items */}
              <div className="md:col-span-2 border border-gray-300 rounded-2xl p-6">
                <div className="grid grid-cols-4 gap-4 font-semibold text-gray-700 mb-6">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Subtotal</span>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-4 gap-4 items-center border-t pt-4 pb-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setCartItems(cartItems.filter(i => i.id !== item.id))}
                        className="text-xl text-black"
                      >
                        ×
                      </button>
                      <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md" />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span>$ {item.price}</span>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        setCartItems(cartItems.map(i =>
                          i.id === item.id ? { ...i, quantity: +e.target.value } : i
                        ))
                      }
                      className="w-16 border border-gray-300 rounded px-2 py-1"
                    />
                    <span>$ {item.price * item.quantity}</span>
                  </div>
                ))}

                <div className="mt-6">
                  <button className="px-6 py-3 rounded-full bg-gray-400 text-white hover:bg-gray-500 transition">
                    Update Cart
                  </button>
                </div>
              </div>

              {/* Cart Totals */}
              <div className="border border-gray-300 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
                <div className="flex justify-between mb-3">
                  <span>Subtotal</span>
                  <span>$ {cartTotal}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mb-6">
                  <span>Total</span>
                  <span>$ {cartTotal}</span>
                </div>
                <button className="w-full py-3 rounded-full bg-black text-white hover:bg-gray-900 transition">
                  Proceed To Checkout
                </button>
              </div>
            </div>

            {/* Coupon Section aligned with Cart Items width */}
            <div className="w-full max-w-6xl mx-auto px-6 mb-20">
              <div className="md:w-2/3 w-full">
                <div className="flex flex-wrap gap-4 items-center border border-gray-300 rounded-2xl p-4">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="flex-1 border border-gray-300 rounded px-4 py-2 min-w-[200px]"
                  />
                  <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition">
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Footer */}
        <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
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
    </>
  );
}
