'use client';
import { useEffect, useState, useMemo } from 'react';
import { Headphones } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch cart items on component mount
  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token not found');

      const response = await axios.get('http://localhost:3001/products/cart/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response.data;
      setCartItems(
        data.map((item) => ({
          id: item.id,
          name: item.product.name,
          price: item.priceAtAdd,
          image: item.product.image || '/placeholder.png', // fallback
          quantity: item.quantity,
        }))
      );
    } catch (error) {
      console.error('Error fetching cart items:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromCart = async (cartItemId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token not found');

      const res = await fetch(
        `http://localhost:3001/products/cart/delete/${cartItemId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();
      if (res.ok) {
        setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
      } else {
        alert(result.message || 'Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting cart item:', error);
      alert('Something went wrong while deleting the item');
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleUpdateCart = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token not found');

      await Promise.all(
        cartItems.map((item) =>
          axios.put(
            `http://localhost:3001/products/cart/update/${item.id}`,
            { quantity: item.quantity },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
        )
      );
      alert('Cart updated successfully!');
    } catch (error) {
      console.error('Error updating cart:', error?.response?.data || error);
      alert('Failed to update cart');
    }
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <>
      <div className="w-full px-0 md:px-8 py-10">
        <div
          className="rounded-lg mb-10 p-10"
          style={{
            background: 'linear-gradient(102.81deg, #F8FFEC 0%, #FFEDED 100%)',
          }}
        >
          <h1 className="text-4xl font-semibold text-center mb-6">Cart</h1>
          <p className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Welcome to your shopping cart. Adjust your product quantities, remove items, or proceed to checkout.
          </p>
        </div>
      </div>

      <div className="m-auto px-4 md:px-16">
        {cartItems.length === 0 && !loading ? (
          <div className="text-center mb-20">
            <p className="text-gray-600 mb-4">Your cart is currently empty.</p>
            <Link href="/">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg text-base">
                Return to shop
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 border border-gray-300 rounded-2xl p-6">
              <div className="grid grid-cols-4 gap-4 font-semibold text-gray-700 mb-6">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 gap-4 items-center border-t pt-4 pb-4"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-xl text-black"
                    >
                      ×
                    </button>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="rounded-md"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span>$ {item.price.toFixed(2)}</span>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, +e.target.value)
                    }
                    className="w-16 border border-gray-300 rounded px-2 py-1"
                  />
                  <span>$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <div className="mt-6">
                <button
                  onClick={handleUpdateCart}
                  className="px-6 py-3 rounded-full bg-gray-400 text-white hover:bg-gray-500 transition"
                >
                  Update Cart
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>$ {cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 rounded-full bg-black text-white hover:bg-gray-900 transition">
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Logo</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-2 border">
                <Headphones size={24} />
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
