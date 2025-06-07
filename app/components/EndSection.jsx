import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function EndSection() {
  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="md:col-span-1">
            <div className="md:col-span-1">
              <Image
                src="/imgs/laptop2.jpg"
                alt="laptop"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="md:col-span-1 space-y-6 flex justify-center flex-col">
            <h1 className="text-4xl md:text-5xl text-center md:text-start font-semibold tracking-tight">
              We always keep
              <br />
              it real for you
            </h1>
            <p className="text-gray-600 max-w-md text-center md:text-start ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            {/* Numbered Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-2xl p-4 h-10 w-10 flex items-center justify-center text-lg font-semibold">
                  01
                </div>
                <div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-2xl p-4  h-10 w-10 flex items-center justify-center text-lg font-semibold">
                  02
                </div>
                <div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-2xl p-4  h-10 w-10 flex items-center justify-center text-lg font-semibold">
                  03
                </div>
                <div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-2xl p-4  h-10 w-10 flex items-center justify-center text-lg font-semibold">
                  04
                </div>
                <div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium">
                Read More
              </button>
              <button className="border border-black px-6 py-2.5 rounded-full font-medium flex items-center gap-2">
                Shop Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300 max-w-6xl mx-auto"></div>

{/* Brands Section */}
<section className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
  <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
    Brands that we have
  </h2>

  {/* First row: responsive logo grid */}
  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-6">
    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
      <div
        key={`top-${i}`}
        className="relative w-16 h-16 sm:w-24 sm:h-20 flex items-center justify-center"
      >
        <Image
          src={`/imgs/logo${i}.png`}
          alt={`Brand ${i}`}
          fill
          className="object-contain"
        />
      </div>
    ))}
  </div>

  {/* Second row: responsive logo grid */}
  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
    {[8, 9, 10, 11, 12].map((i) => (
      <div
        key={`bottom-${i}`}
        className="relative w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center"
      >
        <Image
          src={`/imgs/logo${i}.png`}
          alt={`Brand ${i}`}
          fill
          className="object-contain"
        />
      </div>
    ))}
  </div>
</section>



      {/* Divider */}
      <div className="border-t border-gray-200 max-w-6xl mx-auto"></div>

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
    </main>
  );
}
