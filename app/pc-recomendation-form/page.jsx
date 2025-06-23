"use client";

import React, { useState } from "react";

export default function Component() {
  const [formData, setFormData] = useState({
    deviceType: "",
    usagePurpose: [],
    budgetRange: "",
    screenSize: "",
    portability: "",
    addOns: [],
    name: "",
    email: "",
    phone: "",
  });

  const handleUsagePurposeChange = (purpose, checked) => {
    setFormData((prev) => ({
      ...prev,
      usagePurpose: checked
        ? [...prev.usagePurpose, purpose]
        : prev.usagePurpose.filter((p) => p !== purpose),
    }));
  };

  const handleAddOnsChange = (addOn, checked) => {
    setFormData((prev) => ({
      ...prev,
      addOns: checked
        ? [...prev.addOns, addOn]
        : prev.addOns.filter((a) => a !== addOn),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
       <div className="w-full px-0 md:px-8 py-10">
        <div
          className="rounded-lg mb-10 p-10"
          style={{
            background: "linear-gradient(102.81deg, #F8FFEC 0%, #FFEDED 100%)",
          }}
        >
          <h1 className="text-4xl font-semibold text-center mb-6">
            Not Sure What to Buy? <br />  Let Us Help!
          </h1>
          <p className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Answer a few quick questions and we’ll match you with the best device for your needs.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Device Type */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Device Type</h2>
            {["Laptop", "Desktop", "Tablet"].map((type) => (
              <div key={type} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={type.toLowerCase()}
                  name="deviceType"
                  value={type.toLowerCase()}
                  checked={formData.deviceType === type.toLowerCase()}
                  onChange={(e) =>
                    setFormData({ ...formData, deviceType: e.target.value })
                  }
                />
                <label htmlFor={type.toLowerCase()} className="text-gray-700">
                  {type}
                </label>
              </div>
            ))}
          </div>

          {/* Usage Purpose */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Usage Purpose</h2>
            {[
              "Gaming",
              "Work/Office",
              "Creative Work",
              "Student Use",
              "Entertainment",
              "Programming",
              "Basic Web Browsing",
            ].map((purpose) => (
              <div key={purpose} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={purpose}
                  checked={formData.usagePurpose.includes(purpose)}
                  onChange={(e) =>
                    handleUsagePurposeChange(purpose, e.target.checked)
                  }
                />
                <label htmlFor={purpose} className="text-gray-700">
                  {purpose}
                </label>
              </div>
            ))}
          </div>

          {/* Budget Range */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Budget Range</h2>
            {[
              { id: "under-500", label: "Under $500" },
              { id: "500-1000", label: "$500 - $1,000" },
              { id: "1000-1500", label: "$1,000 - $1,500" },
              { id: "1500-2500", label: "$1,500 - $2,500" },
              { id: "over-2500", label: "Over $2,500" },
            ].map(({ id, label }) => (
              <div key={id} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={id}
                  name="budgetRange"
                  value={id}
                  checked={formData.budgetRange === id}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetRange: e.target.value })
                  }
                />
                <label htmlFor={id} className="text-gray-700">
                  {label}
                </label>
              </div>
            ))}
          </div>

          {/* Screen Size */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Screen Size Preference (Optional)
            </h2>
            {[
              { id: "13-14", label: '13" - 14"' },
              { id: "15-16", label: '15" - 16"' },
              { id: "17-plus", label: '17" and above' },
              { id: "no-preference", label: "No preference" },
            ].map(({ id, label }) => (
              <div key={id} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={id}
                  name="screenSize"
                  value={id}
                  checked={formData.screenSize === id}
                  onChange={(e) =>
                    setFormData({ ...formData, screenSize: e.target.value })
                  }
                />
                <label htmlFor={id} className="text-gray-700">
                  {label}
                </label>
              </div>
            ))}
          </div>

          {/* Portability */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Portability Requirement</h2>
            {[
              { id: "very-portable", label: "Very portable (lightweight)" },
              { id: "somewhat-portable", label: "Somewhat portable" },
              { id: "stationary", label: "Mostly stationary" },
            ].map(({ id, label }) => (
              <div key={id} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={id}
                  name="portability"
                  value={id}
                  checked={formData.portability === id}
                  onChange={(e) =>
                    setFormData({ ...formData, portability: e.target.value })
                  }
                />
                <label htmlFor={id} className="text-gray-700">
                  {label}
                </label>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Optional Add-ons</h2>
            {[
              "Extended Warranty",
              "Software Package",
              "Accessories Bundle",
              "Setup Service",
            ].map((addOn) => (
              <div key={addOn} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={addOn}
                  checked={formData.addOns.includes(addOn)}
                  onChange={(e) =>
                    handleAddOnsChange(addOn, e.target.checked)
                  }
                />
                <label htmlFor={addOn} className="text-gray-700">
                  {addOn}
                </label>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Details (Final Step)</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-700 block mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-700 block mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-gray-700 block mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-medium rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
