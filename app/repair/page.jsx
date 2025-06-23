"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import Image from "next/image";

export default function ContactForm() {
  const [contactMethod, setContactMethod] = useState("phone");
  const [selected, setSelected] = useState("Overheating");

  const issueOptions = [
    { label: "Slow Performance", icon: "/imgs/form-1.png" },
    { label: "Battery / Power Issues", icon: "/imgs/form-2.png" },
    { label: "Won’t Turn On", icon: "/imgs/form-3.png" },
    { label: "Overheating", icon: "/imgs/form-4.png" },
    { label: "Error Messages", icon: "/imgs/form-5.png" },
    { label: "Cracked Screen", icon: "/imgs/form-1.png" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full px-0 md:px-8 py-10">
        <div
          className="rounded-lg mb-10 p-10"
          style={{
            background: "linear-gradient(102.81deg, #F8FFEC 0%, #FFEDED 100%)",
          }}
        >
          <h1 className="text-4xl font-semibold text-center mb-6">
            Need a Quick Fix? <br /> We’ve Got You Covered
          </h1>
          <p className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Egestas id egestas dolor
            tellus vitae at nulla vitae. Neque leo posuere libero scelerisque in
            neque condimentum. Pharetra viverra risus tempor id. Lectus dictum sit
            vitae tortor in commodo.
          </p>
        </div>
      </div>



<div className="flex flex-wrap justify-center gap-4 p-4 my-12">
  {issueOptions.map(({ label, icon }) => (
    <button
      key={label}
      type="button"
      onClick={() => setSelected(label)}
      className={`w-36 h-36 flex flex-col items-center justify-center rounded-2xl border ${
        selected === label ? "border-black shadow-lg" : "border-gray-200"
      } hover:shadow transition`}
    >
      <div className="w-12 h-12 mb-2 relative">
        <Image
          src={icon}
          alt={label}
          fill
          className="object-contain"
          sizes="48px"
        />
      </div>
      <p className="text-sm text-center">{label}</p>
    </button>
  ))}
</div>


      {/* Form Section */}
      <div className="max-w-3xl px-2 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-3">
          Send us a message
        </h1>
        <p className="text-sm text-center text-gray-600 mb-10 px-4">
          Lorem ipsum dolor sit amet consectetur. Et nunc rhoncus dictum urna.
          Viverra enim aute aute viverra habitant. Auctor tempor nunc placerat
          libero.
        </p>

        <form className="space-y-6 bg-white px-4 sm:px-6 py-6 rounded-2xl">
          {/* Input Fields */}
          {[
            { id: "fullName", label: "Full Name", placeholder: "Type Name" },
            { id: "email", label: "Email", placeholder: "Type Email", type: "email" },
            { id: "phone", label: "Phone", placeholder: "Type Phone" },
            {
              id: "deviceBrand",
              label: "Device Brand & Model",
              placeholder: "HP, Dell, etc.",
            },
            {
              id: "issueType",
              label: "Issue Type",
              placeholder:
                "Slow Performance, Screen Broken, Not Turning On, Virus, Overheating, etc.",
            },
          ].map(({ id, label, placeholder, type = "text" }) => (
            <div key={id} className="space-y-2">
              <label htmlFor={id} className="block text-sm font-medium">
                {label}
              </label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full border border-gray-200 px-3 py-2 rounded-2xl"
              />
            </div>
          ))}

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">
              Describe the Issue
            </label>
            <textarea
              id="description"
              placeholder="Write your message:"
              className="w-full min-h-[100px] border px-3 py-2 border-gray-200 rounded-2xl"
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2 border-dashed border border-gray-300 rounded-2xl p-4">
            <label className="block font-medium">Upload Photos (optional)</label>
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="flex flex-col items-center justify-center">
                <Upload className="h-6 w-6 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Drag and Drop here</p>
                <p className="text-sm text-gray-400 mb-3">or</p>
                <button
                  type="button"
                  className="bg-teal-400 hover:bg-teal-500 text-black px-4 py-2 rounded"
                >
                  Select File
                </button>
              </div>
            </div>
          </div>

          {/* Contact Method */}
          <div className="space-y-2">
            <label className="block font-medium">Preferred Contact Method</label>
            <div className="flex flex-col gap-2">
              {["phone", "email", "whatsapp"].map((method) => (
                <label
                  key={method}
                  className="flex items-center space-x-2 border px-3 py-2 border-gray-200 rounded-2xl cursor-pointer"
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={contactMethod === method}
                    onChange={(e) => setContactMethod(e.target.value)}
                  />
                  <span className="capitalize">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-2xl text-lg font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
