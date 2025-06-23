'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Monitor,
  Cpu,
  MemoryStick,
  Box,
  Database,
  Settings2,
  Zap,
  ArrowUpRight,
  Layers,
  HardDrive,
  CircuitBoard,
  Fan,
  List,
  Activity
} from 'lucide-react';

const CustomPc = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Intel');
  const [activeTab, setActiveTab] = useState('Platform');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState({});
  const [tempSelectedValue, setTempSelectedValue] = useState('');

  const handleConfirmSelection = () => {
    const componentName = components[currentStepIndex].name;
    setSelectedComponents(prev => ({
      ...prev,
      [componentName]: tempSelectedValue
    }));
    setTempSelectedValue('');
    setCurrentStepIndex(prev => prev + 1);
  };

  const componentOptions = {
    'PLATFORM': ['Intel', 'AMD'],
    'CPU': ['Intel i5', 'Intel i7', 'AMD Ryzen 5', 'AMD Ryzen 7'],
    'GPU': ['NVIDIA RTX 3060', 'NVIDIA RTX 3080', 'AMD RX 6800'],
    'CASE': ['Mid Tower', 'Full Tower'],
    'MOTHERBOARD': ['ASUS Prime', 'Gigabyte Aorus'],
    'CPU COOLER': ['Cooler Master', 'Noctua NH-D15'],
    'SMPS': ['Corsair 750W', 'Cooler Master 650W'],
    'RAM': ['16GB DDR4', '32GB DDR5'],
    'STORAGE 1': ['500GB SSD', '1TB SSD'],
    'STORAGE 2': ['1TB HDD', '2TB HDD']
  };

  const cards = [
    { title: 'Monitors', link: '/build-pc', img: '/imgs/monitor.jpg' },
    { title: 'Keyboards', link: '/custom-built', img: '/imgs/keyboards.jpg' },
    { title: 'Mouse', link: '/custom-built', img: '/imgs/mouse.jpg' },
    { title: 'Webcam', link: '/custom-built', img: '/imgs/webcam.jpg' },
    { title: 'Wifi Adapter', link: '/custom-built', img: '/imgs/adapter.jpg' },
    { title: 'Speaker', link: '/custom-built', img: '/imgs/speakers.jpg' },
    { title: 'Headphones', link: '/custom-built', img: '/imgs/headphones.jpg' },
    { title: 'OS', link: '/custom-built', img: '/imgs/OS.jpg' },
    { title: 'Mousepads', link: '/custom-built', img: '/imgs/mousepads.png' },
    { title: 'UPS', link: '/custom-built', img: '/imgs/ups.png' },
    { title: 'Freebies', link: '/custom-built', img: '/imgs/freebies.jpg' },
  ];

  const components = [
    { name: 'PLATFORM', icon: Layers },
    { name: 'CPU', icon: Cpu },
    { name: 'GPU', icon: Monitor },
    { name: 'CASE', icon: Box },
    { name: 'MOTHERBOARD', icon: CircuitBoard },
    { name: 'CPU COOLER', icon: Fan },
    { name: 'SMPS', icon: Zap },
    { name: 'RAM', icon: MemoryStick },
    { name: 'STORAGE 1', icon: HardDrive },
    { name: 'STORAGE 2', icon: HardDrive },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <section
        className="rounded-2xl mb-12 p-6 sm:p-10"
        style={{
          background: 'linear-gradient(117deg, rgba(255,237,237,1) 0%, rgba(255,237,237,1) 15%, rgba(243,242,251,1) 100%)'
        }}
      >
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 leading-tight">
            Start Building Your <br className="hidden sm:block" />
            Dream PC
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Choose between a powerful prebuilt or a fully custom setup
          </p>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[500px] gap-6">
          <div className="lg:w-1/2 bg-[#2C2C2C] flex justify-center items-center rounded-xl p-6">
            <Image
              src="/imgs/buildimg.png"
              alt="Build Image"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col rounded-xl overflow-hidden shadow-md">
            <div className="flex">
              {['Platform', 'Components'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 font-bold text-sm ${
                    activeTab === tab
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'Platform' ? (
                    <Layers className="w-4 h-4" />
                  ) : (
                    <Monitor className="w-4 h-4" />
                  )}
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            <div
              className="flex-1 p-8 flex flex-col items-center justify-center text-center"
              style={{ background: 'linear-gradient(to bottom, #C6A8F3, #F8C9E2)' }}
            >
              {currentStepIndex === 0 ? (
                <>
                  <h2 className="text-xl font-bold text-white mb-6">CHOOSE PLATFORM</h2>
                  <div className="flex gap-8 mb-6">
                    {['Intel', 'AMD'].map((option) => (
                      <label key={option} className="text-white text-sm flex items-center gap-2">
                        <input
                          type="radio"
                          name="platform"
                          value={option}
                          checked={selectedPlatform === option}
                          onChange={() => {
                            setSelectedPlatform(option);
                            setSelectedComponents(prev => ({ ...prev, PLATFORM: option }));
                            setCurrentStepIndex(1);
                          }}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </>
              ) : currentStepIndex >= components.length ? (
                <>
                  <h2 className="text-xl font-bold text-white mb-4">All Components Selected</h2>
                  <ul className="text-white text-sm mb-6 space-y-2">
                    {components.map(({ name }) => (
                      <li key={name}>
                        <strong>{name}:</strong> {selectedComponents[name]}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                    className="mt-2 px-6 py-2 rounded font-semibold bg-blue-700 text-white hover:bg-blue-800 transition"
                  >
                    Go Back
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-white mb-6">
                    {`CHOOSE ${components[currentStepIndex]?.name}`}
                  </h2>
                  <select
                    onChange={(e) => setTempSelectedValue(e.target.value)}
                    className="w-full max-w-sm p-3 rounded text-black font-semibold"
                    value={tempSelectedValue}
                  >
                    <option value="">Select</option>
                    {componentOptions[components[currentStepIndex]?.name]?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleConfirmSelection}
                    disabled={!tempSelectedValue}
                    className={`mt-4 px-6 py-2 rounded font-semibold transition ${tempSelectedValue ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-gray-400 text-white cursor-not-allowed'}`}
                  >
                    Add
                  </button>

                  {currentStepIndex > 1 && (
                    <button
                      onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                      className="mt-2 px-6 py-2 rounded font-semibold bg-blue-700 text-white hover:bg-blue-800 transition"
                    >
                      Go Back
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-16 mb-6 text-center sm:text-left">
          Your Build
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4 flex justify-center items-center bg-[#2C2C2C] rounded-xl p-4">
            <Image
              src="/imgs/buildimg.png"
              alt="PC Build"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="w-full lg:w-3/4 p-6 bg-gray-50 rounded-xl shadow-inner">
            <div className="flex justify-start gap-6 mb-4 text-sm font-medium text-gray-700">
              <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                <List className="w-4 h-4" />
                See Specs
              </button>
              <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                <Activity className="w-4 h-4" />
                See Performance
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {components.map(({ icon: Icon, name }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start gap-2 cursor-pointer hover:bg-white rounded-lg p-4 transition"
                >
                  <Icon className="w-6 h-6 text-gray-800" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
                    <p className="text-xs text-gray-500">
                      {selectedComponents[name] || 'Select'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="mb-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 text-center">
          Add Essential Accessories
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={index < 3 ? 'w-full sm:w-[48%] lg:w-[30%]' : 'w-full sm:w-[48%] lg:w-[22%]'}
            >
              <Link href={card.link}>
                <div className="relative group cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-xl shadow-md h-[220px]">
                    <div className="absolute bottom-[-10px] right-[-10px] w-[45px] h-[45px] bg-white rounded-full z-10 flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </div>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mt-4 text-center min-h-[48px]">
                    {card.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Checkout */}
      <div className='flex items-center justify-center m-4 p-4'>
        <button className="bg-[#2DC071] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#28b165] transition">
          Proceed to Checkout
        </button>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-center bg-[#f7f7f7] px-6 py-4 border-t border-gray-300">
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-2">
            <Image src="/imgs/Group.png" alt="Chat Icon" width={24} height={24} />
            <span className="text-sm text-gray-800">Talk to an expert</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/imgs/Here-to-help.svg.png" alt="Help Icon" width={24} height={24} />
            <span className="text-sm text-gray-800">After Sale Services</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/imgs/No-questions-warranty.svg.png" alt="Warranty Icon" width={24} height={24} />
            <span className="text-sm text-gray-800">3 years doorstep warranty</span>
          </div>
        </div>

        <div className="text-xl font-bold text-gray-900">₹5,00,000</div>
      </div>
    </div>
  );
};

export default CustomPc;
