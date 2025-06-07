"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartProduct, setCartProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchProductData() {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const json = await response.json();
        setProduct(json.data); // Your product data is inside json.data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProductData();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  if (!product) return <div className="text-center py-10">No product found</div>;

  // Calculate subtotal
  const subtotal = cartProduct ? cartProduct.sellingPrice * cartProduct.quantity : 0;

  // Compose images array for thumbnails and main image
  // Use first image as main, rest as thumbnails
  const mainImage = product.images.length > 0 ? product.images[0].url : "/placeholder.png";
  const thumbnails = product.images.length > 1 ? product.images.slice(1).map(img => img.url) : [];

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column with Main Image and Thumbnails */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col h-full">
              <div className="flex-1 mb-4">
                {/* <Image
                  src={mainImage}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full rounded-2xl"
                /> */}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {thumbnails.slice(0, 2).map((thumbnail, index) => (
                  <div key={index} className="flex justify-center">
                    {/* <Image
                      src={thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      width={150}
                      height={100}
                      className="object-contain rounded-2xl w-full h-auto"
                    /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col bg-[#f5f5ff] rounded-lg p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">{product.name}</h1>

            {/* Rating - Example: hardcoded since your data doesn't include rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`} // example 4 stars
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">4 / 20 Reviews</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="font-semibold mb-2">Description</h2>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>

            {/* Specifications */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mr-2">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm">Category: {product.category}</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mr-2">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm">Stock: {product.stock}</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mr-2">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
  <span className="text-sm font-semibold text-green-400">Offer Price: ${product.actualPrice}</span>
  <span className="text-sm text-gray-500 line-through ml-3">Original Price: ${product.sellingPrice}</span>
</div>
</li>
            </ul>

            <hr className="border-gray-200 mb-6" />

            {/* Price and Add To Cart */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">${product.sellingPrice}</h2>
              <div className="flex flex-wrap gap-2 items-center">
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 text-center border border-gray-300 rounded"
                />
                <button
                  onClick={() => {
                    setCartProduct({ ...product, quantity });
                    setShowCart(true);
                  }}
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 text-sm">
              <div>
                <span className="font-semibold">SKU:</span> {product.id}
              </div>
              <div>
                <span className="font-semibold">Share this item</span>
                <div className="flex space-x-2 mt-2">
                  {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      {showCart && cartProduct && (
        <div className="fixed inset-0 bg-black/20 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button onClick={() => setShowCart(false)} className="text-black hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-auto px-6">
                <div className="flex items-center gap-4 py-4">
                  <div className="h-20 w-20 bg-gray-100 flex items-center justify-center rounded">
                    <Image
                      src={cartProduct.images?.[0]?.url || "/placeholder.png"}
                      alt={cartProduct.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{cartProduct.name}</h3>
                    <div className="mt-1 text-gray-900">
                      {cartProduct.quantity} × ${cartProduct.sellingPrice}
                    </div>
                  </div>
                  <button className="h-8 w-8 flex items-center justify-center rounded-full border border-red-500 text-red-500">
                    <X size={16} />
                  </button>
                </div>

                <div className="border-t border-gray-200 py-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Subtotal:</h3>
                    <div className="text-lg">${subtotal}</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-black text-white hover:bg-black/90 rounded-full py-2">
                    View Cart
                  </button>
                  <button className="bg-black text-white hover:bg-black/90 rounded-full py-2">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
