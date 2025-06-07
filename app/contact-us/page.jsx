import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

import { FiPhoneCall } from "react-icons/fi";
import { Headphones } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Map Section */}
      <div className="relative w-full h-[400px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full z-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190128712833!2d-122.42067968468178!3d37.778519779757576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e58ad7f%3A0xf8d7ed0f6c0e0d6f!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1624041654044!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="relative z-10 -mt-36 flex justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-semibold mb-2">Send us a message</h2>
          <p className="text-gray-600 text-sm mb-6">
            Lorem ipsum dolor sit amet consectetur. Eu nunc phasellus dictum
            urna. Vivamus enim purus viverra habitant.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Type Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Type Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Type Phone"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Write your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-2xl hover:bg-gray-800 transition"
            >
              Send A Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-20 px-6 pb-12">
        <div className="bg-[#F3F2FB] text-center w-[270px] h-[254px] rounded-[25px] p-6 flex flex-col justify-center items-center">
          <IoLocationOutline className="text-4xl mb-4" />
          <p className="font-semibold text-lg mb-2">Address</p>
          <p className="text-sm">Plaza XYZ Street, XYZ City, XYZ</p>
        </div>
        <div className="bg-[#F3F2FB]  text-center w-[270px] h-[254px] rounded-[25px] p-6  flex flex-col justify-center items-center">
          <MdOutlineEmail className="text-4xl mb-4 " />
          <p className="font-semibold text-lg mb-2">Email</p>
          <p className="text-sm">youremail@email.com</p>
        </div>
        <div className="bg-[#F3F2FB]  text-center w-[270px] h-[254px] rounded-[25px] p-6  flex flex-col justify-center items-center">
          <CiMobile2 className="text-4xl mb-4 " />
          <p className="font-semibold text-lg mb-2">Phone</p>
          <p className="text-sm">123-4567-890</p>
        </div>
        <div className="bg-[#F3F2FB]  text-center w-[270px] h-[254px] rounded-[25px] p-6  flex flex-col justify-center items-center">
          <FiPhoneCall className="text-4xl mb-4 " />
          <p className="font-semibold text-lg mb-2">24/7 Support</p>
          <p className="text-sm">111-444-888</p>
        </div>
      </div>
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
  );
};

export default Contact;
