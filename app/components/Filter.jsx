"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ChevronDown } from "lucide-react";

// Utility function for conditional classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Custom Slider component using Radix UI
const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-200">
      <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
    </SliderPrimitive.Track>
    {(props.value || props.defaultValue || []).map((_, i) => (
      <SliderPrimitive.Thumb
        key={i}
        className="block h-5 w-5 rounded-full border-2 border-blue-500 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = "Slider";

// Main Filter Component
export default function Filter() {
  const [priceRange, setPriceRange] = React.useState([20000, 45000]);
  const maxPrice = 70000;

  const [categories, setCategories] = React.useState({
    gamingMachines: true,
    businessNotebooks: false,
    studentEssentials: false,
    workstations: false,
    accessories: true,
    customBuildPC: false,
  });

  const [brands, setBrands] = React.useState({
    apple: false,
    hp: false,
    lenovo: false,
    acer: false,
    dell: false,
    asus: false,
  });

  const [moreFilters, setMoreFilters] = React.useState({
    ram: false,
    storage: false,
    graphicsCard: false,
    processor: false,
    batteryLife: false,
    displaySize: false,
  });

  const [expandedSections, setExpandedSections] = React.useState({
    categories: true,
    price: false,
    brands: false,
    moreFilters: false,
  });

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (category) => {
    setCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleBrandChange = (brand) => {
    setBrands((prev) => ({
      ...prev,
      [brand]: !prev[brand],
    }));
  };

  const handleMoreFilterChange = (filter) => {
    setMoreFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleClear = () => {
    setPriceRange([0, maxPrice]);
    setCategories(Object.fromEntries(Object.keys(categories).map((key) => [key, false])));
    setBrands(Object.fromEntries(Object.keys(brands).map((key) => [key, false])));
    setMoreFilters(Object.fromEntries(Object.keys(moreFilters).map((key) => [key, false])));
  };

  return (
    <div className="w-full max-w-xs py-3 bg-white rounded-lg shadow-sm px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Filters</h2>
        <button onClick={handleClear} className="text-blue-600 font-medium">
          Clear all
        </button>
      </div>

      {/* Categories Section */}
      <div className="border-t border-gray-200 py-4">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => toggleSection("categories")}
        >
          <h3 className="text-lg font-medium">Categories</h3>
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transform transition-transform ${
              expandedSections.categories ? "rotate-180" : ""
            }`}
          />
        </div>
        {expandedSections.categories && (
          <div className="space-y-2">
            {Object.entries(categories).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                  checked={value}
                  onChange={() => handleCategoryChange(key)}
                />
                <span className="ml-2 capitalize">{key.replace(/([A-Z])/g, " $1")} <span className="text-gray-500">(100+)</span></span>
              </label>
            ))}
            <button className="text-blue-600 font-medium mt-1">+ more</button>
          </div>
        )}
      </div>

      {/* Price Section */}
      <div className="border-t border-gray-200 py-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("price")}>
          <h3 className="text-lg font-medium">Price</h3>
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transform transition-transform ${
              expandedSections.price ? "rotate-180" : ""
            }`}
          />
        </div>
        {expandedSections.price && (
          <div className="mt-4">
            <Slider value={priceRange} onValueChange={handleSliderChange} max={maxPrice} step={1000} />
            <div className="flex justify-between mt-6">
              <div>
                <p className="text-gray-500 text-sm">Min</p>
                <p className="font-medium">Rs. {priceRange[0].toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">Max</p>
                <p className="font-medium">Rs. {priceRange[1].toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Brands Section */}
      <div className="border-t border-gray-200 py-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("brands")}>
          <h3 className="text-lg font-medium">Brands</h3>
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transform transition-transform ${
              expandedSections.brands ? "rotate-180" : ""
            }`}
          />
        </div>
        {expandedSections.brands && (
          <div className="mt-4 space-y-2">
            {Object.entries(brands).map(([brand, checked]) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                  checked={checked}
                  onChange={() => handleBrandChange(brand)}
                />
                <span className="ml-2 capitalize">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* More Filters Section */}
      <div className="border-t border-gray-200 py-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("moreFilters")}>
          <h3 className="text-lg font-medium">More Filters</h3>
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transform transition-transform ${
              expandedSections.moreFilters ? "rotate-180" : ""
            }`}
          />
        </div>
        {expandedSections.moreFilters && (
          <div className="mt-4 space-y-2">
            {Object.entries(moreFilters).map(([filter, checked]) => (
              <label key={filter} className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                  checked={checked}
                  onChange={() => handleMoreFilterChange(filter)}
                />
                <span className="ml-2 capitalize">{filter.replace(/([A-Z])/g, " $1")}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
