import React from 'react'
import Features from '../components/Features'
import EndSection from '../components/EndSection'
import { ArrowRight, Link } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <>

<section className="max-w-7xl mx-auto mt-12 py-2 px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900">Our History</h2>

          <p className="text-gray-700 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Enim id diam velit purus. Sagittis in
            tristique scelerisque elit molestie. Eu arcu in mattis malesuada etiam rhoncus
            lacinia dolor. Et diam blandit rhoncus sit id mauris neque. Congue mauris nunc
            leo netus vitae iaculis nunc. Egestas quis facilisis sagittis sapien maecenas
            nullam sapien. Rhoncus lacinia dui lacus nibh ornare sit. Neque consectetur
            euismod maecenas sit aliquet viverra. Ac lobortis.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Tincidunt diam tincidunt euismod arcu pharetra velit lorem. Arcu ut interdum a eu.
            Sed auctor mauris felis mauris tincidunt integer. Convallis dolor lacinia est
            phasellus malesuada sed.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Scelerisque leo pulvinar egestas sed tellus quis urna risus tortor. Eu malesuada
            hac sed mattis tristique risus tristique nisi. Interdum augue.
          </p>

          <button className="inline-flex items-center border border-black text-black px-5 py-2 rounded-3xl hover:bg-black hover:text-white transition group">
            Start Shopping
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Image Column */}
        <div className="w-full flex justify-center">
          <Image
            src="/imgs/aboutimg1.jpg"
            alt="Shopping woman"
            width={480}
            height={400}
            className="rounded-2xl object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </section>
    <main className="max-w-7xl mx-auto px-4 py-0 sm:px-6 lg:px-8 md:py-12">
      {/* Our Mission Section */}
      <section className="bg-white py-16 relative mb-12">
  {/* Black background behind lower half of cards */}
  <div className="absolute inset-x-0 bottom-0 h-[75%] md:h-[40%] bg-black z-0 rounded-3xl" />

  <div className="max-w-6xl mx-auto px-4 relative z-10">
    {/* Heading */}
    <h2 className="text-3xl text-center md:text-start font-semibold mb-4">
      A better platform to shop online !!
    </h2>
    <p className="text-gray-600 text-center md:text-start  max-w-xl text-sm mb-12">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white text-center border border-gray-200 rounded-xl p-6 py-10 shadow-md">
        <h3 className="text-3xl font-semibold text-black mb-2">6,036+</h3>
        <p className="text-lg font-semibold mb-2">Happy Customer</p>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white text-center border border-gray-200 rounded-xl p-6 py-10 shadow-md">
        <h3 className="text-3xl font-semibold text-black mb-2">2+</h3>
        <p className="text-lg font-semibold mb-2">years of experience</p>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white text-center border border-gray-200 rounded-xl p-6 py-10 shadow-md">
        <h3 className="text-3xl font-semibold text-black mb-2">1+</h3>
        <p className="text-lg font-semibold mb-2">Awards Won</p>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
        </p>
      </div>
    </div>
  </div>
</section>
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <Image
           src="/imgs/about3.jpg"
            alt="Person working at computer"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Amet enim arcu pellentesque convallis et consequat et et velit. At
            et venenatis elementum ipsum. Tincidunt varius elit arcu faucibus in massa vel. Magna vestibulum turpis id
            arcu eu adipiscing. Habitant justo pretium porttitor turpis fermentum cursus adipiscing. Sit lorem faucibus
            convallis venenatis molestie. Eget enim ut morbi eget semper et facilisis.
          </p>
          <button
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-full text-sm font-medium"
          >
            Get In Touch →
          </button>
        </div>
      </section>


      {/* Our Vision Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg p-1">
            <Image
              src="/imgs/about2.jpg"
              alt="Hands typing on laptop"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Amet enim arcu pellentesque convallis et consequat et et velit. At
            et venenatis elementum ipsum. Tincidunt varius elit arcu faucibus in massa vel. Magna vestibulum turpis id
            arcu eu adipiscing. Habitant justo pretium porttitor turpis fermentum cursus adipiscing. Sit lorem faucibus
            convallis venenatis molestie. Eget enim ut morbi eget semper et facilisis.
          </p>
          <button
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-full text-sm font-medium"
          >
            Get In Touch →
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section >
        <h2 className="text-3xl font-semibold mb-4">Choose best. See what's new!</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s when an unknown printer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/imgs/team3.jpg"
              alt="Team member"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Team Member 2 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/imgs/team1.jpg"
              alt="Team member"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Team Member 3 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/imgs/team2.jpg"
              alt="Team member"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Team Member 4 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/imgs/team4.jpg"
              alt="Team member"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>

      <Features/>
      <EndSection/>
    </>
  )
}

export default About