import { Truck, ShoppingCart, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const paymentLogos = [
    { src: "/imgs/Visa.png", alt: "Visa" },
    { src: "/imgs/Discover.png", alt: "Discover" },
    { src: "/imgs/Mastercard.png", alt: "Mastercard" },
    { src: "/imgs/Bitpay.png", alt: "PayPal" },
    { src: "/imgs/Stripe.png", alt: "Stripe" },
  ];

  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8">
          {/* Description Column - Takes more space */}
          <div className="text-center md:text-start md:col-span-6 space-y-8">
            <p className="max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white text-black rounded-xl p-4 flex items-center gap-4 flex-1">
                <Image
                  src={"/imgs/Footerimg.png"}
                  alt=""
                  width={60}
                  height={60}
                />
                <div>
                  <p className="font-medium">Free delivery</p>
                  <p className="text-gray-500 text-sm">24/7 service</p>
                </div>
              </div>

              <div className="bg-white text-black rounded-xl p-4 flex items-center gap-4 flex-1">
                <Image
                  src={"/imgs/Footerimg2.png"}
                  alt=""
                  width={60}
                  height={60}
                />
                <div>
                  <p className="font-medium">Easy returns</p>
                  <p className="text-gray-500 text-sm">Within 30 days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Column - More compact */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-medium pb-2 border-b-2 border-white inline-block">Support</h3>
           
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Help Centre
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Column - More compact */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-medium pb-2 border-b-2 border-white inline-block">Useful Links</h3>
        
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  News & Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column - More compact */}
          <div className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-medium pb-2 border-b-2 border-white inline-block">
  Contact
</h3>
          
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Plaza X , XY Floor, XYZ Street, XYZ</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:yourname@email.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  your@email.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-gray-300 transition-colors"
                >
                  +123-456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8  flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs md:sm font-light text-white">
            Copyright © 2025 ZipNook By Evonicmedia. All Rights Reserved.
          </p>
        
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-sm">Payment Accepted</span>
            <div className="flex gap-2">
              {paymentLogos.map(({ src, alt }) => (
                <div
                  key={alt}
                  className="p-1 h-8 w-12 flex items-center justify-center overflow-hidden"
                >
                  <Image
                    width={24}
                    height={24}
                    src={src}
                    alt={alt}
                    layout="intrinsic"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
