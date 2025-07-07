"use client";

import React, { useEffect, useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ChevronDown } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Utility
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Slider
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

export default function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const maxPrice = 70000;

  const [priceRange, setPriceRange] = useState([20000, 45000]);

  const allCategories = {
    gaming: false,
    businessNotebooks: false,
    studentEssentials: false,
    workstations: false,
    customBuildPC: false,
    openbox: false,
    desktop:false
  };

  const allBrands = {
    apple: false,
    hp: false,
    lenovo: false,
    acer: false,
    dell: false,
    asus: false,
  };

  const allMoreFilters = {
    ram: false,
    storage: false,
    graphicsCard: false,
    processor: false,
    batteryLife: false,
    displaySize: false,
  };

  const [categories, setCategories] = useState(allCategories);
  const [brands, setBrands] = useState(allBrands);
  const [moreFilters, setMoreFilters] = useState(allMoreFilters);

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    brands: true,
    moreFilters: false,
  });

  const updateQueryArray = (param, selectedItems) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);
    selectedItems.forEach((item) => params.append(param, item));
    router.push(`${pathname}?${params.toString()}`);
  };

  const getSelectedKeys = (obj) =>
    Object.keys(obj).filter((key) => obj[key]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("min", value[0]);
    params.set("max", value[1]);
    router.push(`${pathname}?${params.toString()}`);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleGenericChange = (key, state, setState, paramName) => {
    const updated = { ...state, [key]: !state[key] };
    setState(updated);
    updateQueryArray(paramName, getSelectedKeys(updated));
  };

  const handleClear = () => {
    setPriceRange([0, maxPrice]);
    setCategories(allCategories);
    setBrands(allBrands);
    setMoreFilters(allMoreFilters);
    router.push(pathname);
  };

  // Sync state with URL
  useEffect(() => {
    const typeParams = searchParams.getAll("type");
    const brandParams = searchParams.getAll("brand");
    const moreParams = searchParams.getAll("more");
    const min = parseInt(searchParams.get("min") || "0");
    const max = parseInt(searchParams.get("max") || `${maxPrice}`);

    setCategories((prev) => {
      const newState = { ...allCategories };
      typeParams.forEach((t) => {
        if (newState[t] !== undefined) newState[t] = true;
      });
      return newState;
    });

    setBrands((prev) => {
      const newState = { ...allBrands };
      brandParams.forEach((b) => {
        if (newState[b] !== undefined) newState[b] = true;
      });
      return newState;
    });

    setMoreFilters((prev) => {
      const newState = { ...allMoreFilters };
      moreParams.forEach((m) => {
        if (newState[m] !== undefined) newState[m] = true;
      });
      return newState;
    });

    if (!isNaN(min) && !isNaN(max)) {
      setPriceRange([min, max]);
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-xs py-3 bg-white rounded-lg shadow-sm px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Filters</h2>
        <button onClick={handleClear} className="text-blue-600 font-medium">
          Clear all
        </button>
      </div>

      {/* Section Template */}
      {[
        { label: "Categories", key: "categories", data: categories, setter: setCategories, param: "type" },
        { label: "Brands", key: "brands", data: brands, setter: setBrands, param: "brand" },
        { label: "More Filters", key: "moreFilters", data: moreFilters, setter: setMoreFilters, param: "more" },
      ].map(({ label, key, data, setter, param }) => (
        <div className="border-t border-gray-200 py-4" key={key}>
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection(key)}>
            <h3 className="text-lg font-medium">{label}</h3>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transform transition-transform ${
                expandedSections[key] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections[key] && (
            <div className="mt-4 space-y-2">
              {Object.entries(data).map(([name, checked]) => (
                <label key={name} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600"
                    checked={checked}
                    onChange={() => handleGenericChange(name, data, setter, param)}
                  />
                  <span className="ml-2 capitalize">{name.replace(/([A-Z])/g, " $1")}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Price Slider */}
      <div className="border-t border-gray-200 py-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h3 className="text-lg font-medium">Price</h3>
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transform transition-transform ${
              expandedSections.price ? "rotate-180" : ""
            }`}
          />
        </div>
        {expandedSections.price && (
          <div className="mt-4">
            <Slider
              value={priceRange}
              onValueChange={handleSliderChange}
              max={maxPrice}
              step={1000}
            />
            <div className="flex justify-between mt-6">
              <div>
                <p className="text-gray-500 text-sm">Min</p>
                <p className="font-medium">₹{priceRange[0].toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">Max</p>
                <p className="font-medium">₹{priceRange[1].toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
