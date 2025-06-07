import Image from "next/image"
import { ArrowLeft, ArrowRight, Receipt, ShoppingCart, Megaphone } from "lucide-react"

const testimonials = [
  {
    name: "Davy Renard",
    title: "CEO",
    image: "/imgs/testomonial2.png",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Betty Foster",
    title: "Manager",
    image: "/imgs/testomonial3.png",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Erik Müller",
    title: "Founder",
    image: "/imgs/testomonial1.png",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Features() {
  return (
    <>
      {/* Testimonial Section */}
      <section className="md:py-28 py-5 my-5  px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="md:text-5xl text-4xl  font-semibold mb-12 text-center md:text-left">
          What our client says
        </h2>
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory scroll-smooth">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-auto flex-shrink-0 snap-start border border-gray-300 rounded-lg shadow-sm bg-white p-6 mx-2 md:mx-0"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-base">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-sm">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f5ffed] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              Why we are the best place to buy.
            </h2>
            <div className="hidden md:flex gap-2">
              <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                <ArrowLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory scroll-smooth">
            {/* Feature Cards */}
            {[
              {
                icon: null,
                title: "Insane Prices, Zero Compromise",
                desc:
                  "Get high-end laptops and PCs at jaw-dropping prices — thanks to our open-box and box-packed inventory. Premium tech, minus the premium tag.",
              },
              {
                icon: <Megaphone size={32} />,
                title: "Great deals in every month",
                desc:
                  "Lorem ipsum dolor sit amet consectetur Lacinia gravida penatibus.",
              },
              {
                icon: <ShoppingCart size={32} />,
                title: "Easy return policy for all products",
                desc:
                  "Lorem ipsum dolor sit amet consectetur Lacinia gravida penatibus.",
              },
              {
                icon: <Receipt size={32} />,
                title: "Pay over time, interest-free.",
                desc:
                  "Lorem ipsum dolor sit amet consectetur Lacinia gravida penatibus.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="w-full md:w-auto flex-shrink-0 snap-start bg-white rounded-3xl p-8 shadow-sm mx-2 md:mx-0"
              >
                <div className="mb-6">
                  {feature.icon && <div className="mb-4">{feature.icon}</div>}
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-sm">{feature.desc}</p>
                <div className="mt-6">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
