"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Listing() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/products/all");
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter based on query params
  useEffect(() => {
    if (products.length === 0) return;

    const typeFilters = searchParams.getAll("type").map((t) => t.toLowerCase());
    const brandFilters = searchParams.getAll("brand").map((b) => b.toLowerCase());
    const min = parseInt(searchParams.get("min") || "0");
    const max = parseInt(searchParams.get("max") || "999999");
    const openbox = searchParams.get("openbox");

    const filtered = products.filter((product) => {
      const matchesType =
        typeFilters.length === 0 ||
        product.categories.some((cat) => typeFilters.includes(cat.toLowerCase()));

      const matchesBrand =
        brandFilters.length === 0 ||
        brandFilters.some((brand) => product.name.toLowerCase().includes(brand));

      const matchesPrice = product.sellingPrice >= min && product.sellingPrice <= max;

      const matchesOpenbox = openbox ? product.boxpack === true : true;

      return matchesType && matchesBrand && matchesPrice && matchesOpenbox;
    });

    setFilteredProducts(filtered);
  }, [searchParams, products]);

  // Add to cart logic
  const handleAddToCart = async (sellingPrice, sku) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("User is not logged in");

      const res = await fetch("http://localhost:3001/products/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          sku,
          sellingPrice,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Item added to cart!");
      } else {
        alert(`Failed to add item: ${data.message}`);
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="px-4 md:px-8 py-6">
      {/* Heading + Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 max-w-screen-xl mx-auto gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">Discover the Best Picks</h1>
        <div className="flex gap-2 flex-wrap">
          <button className="py-2 px-4 border rounded-2xl hover:bg-gray-200 transition">All</button>
          <button className="py-2 px-4 border rounded-2xl hover:bg-gray-200 transition">Popular</button>
          <button className="py-2 px-4 border rounded-2xl hover:bg-gray-200 transition">New Added</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No products match your filter.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative w-full h-60 sm:h-64 md:h-72 cursor-pointer">
                  {product.images.length > 0 && (
                    <Image
                      src={product.images[0].url}
                      alt={product.images[0].alt || product.name}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  )}
                </div>
              </Link>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                <p className="text-md font-bold text-gray-800 mb-3">
                  {product.sellingPrice < product.actualPrice ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">
                        ₹{product.actualPrice}
                      </span>
                      <span>₹{product.sellingPrice}</span>
                    </>
                  ) : (
                    <>₹{product.actualPrice}</>
                  )}
                </p>
                <button
                  className="w-full bg-[#EBEBEB] py-2 rounded-2xl text-sm font-medium hover:bg-black hover:text-white transition"
                  onClick={() => handleAddToCart(product.sellingPrice, product.sku)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
