
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import serviceImg from "../assets/images/service.webp"; 
import { Coffee, UtensilsCrossed, CupSoda, Cake } from "lucide-react"; 

// Service data
const services = [
  {
    icon: <Coffee size={32} />,
    title: "Freshly Brewed Coffee",
    desc: "Experience the aroma and taste of our freshly brewed coffee made from premium beans.",
  },
  {
    icon: <UtensilsCrossed size={32} />,
    title: "Delicious Meals",
    desc: "Our chefs prepare every meal with passion, ensuring taste and quality in every bite.",
  },
  {
    icon: <CupSoda size={32} />,
    title: "Refreshing Beverages",
    desc: "Enjoy a wide range of smoothies, juices, and refreshing drinks to keep you energized.",
  },
  {
    icon: <Cake size={32} />,
    title: "Homemade Desserts",
    desc: "Indulge in our delightful homemade cakes, cookies, and desserts baked with love.",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-[#3D1A16] text-white py-20 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image with background box */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
            <Image
              src={serviceImg}
              alt="Our Services"
              width={600}
              height={600}
              className="rounded-sm shadow-lg"
            />
          </motion.div>
        </div>

        {/* Right Services List */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 font-pacifico"
          >
            Our Special Services
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-[#4A2823] p-5 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <div className="text-[#C69B7B]">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-sriracha font-semibold">{service.title}</h3>
                  <p className="text-gray-300">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
