
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../assets/images/about-img.jpg"

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#521C0D] text-white py-16 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image with Motion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Background Square */}
          <div className="absolute -bottom-4 left-8 w-[80%] h-[95%] bg-[#8B5E3C] z-0"></div>

          {/* Main Image */}
          <Image
            src={aboutImg}
            alt="About Coffee House"
            width={500}
            height={400}
            className="relative z-10 shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-orange-400 font-pacifico text-2xl mb-2">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sriracha">
            Fresh Quality And Organic Tasty Coffee House For You
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At our coffee house, we believe every cup should be an experience.
            We serve freshly brewed coffee made from 100% organic beans, roasted
            to perfection for rich flavor and aroma. Our warm and cozy
            atmosphere makes it the perfect spot to relax, work, or catch up
            with friends.
          </p>

          {/* Bullet points */}
          <ul className="space-y-3 mb-11">
            <li className="flex items-center gap-2">
              <span className="text-orange-400">✔</span> Crafted from
              handpicked, ethically sourced coffee beans
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-400">✔</span>A welcoming space
              designed for comfort and connection
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-400">✔</span> Freshly baked pastries
              and desserts served daily
            </li>
          </ul>

          {/* Button */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8B5E3C] hover:bg-orange-400 transition px-6 py-3 rounded-md text-white font-medium"
          >
            Our Experts
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
