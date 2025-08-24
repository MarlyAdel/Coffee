"use client";

import Image from "next/image";
import homeImg from "../../src/app/assets/images/Group 8.png";
import bean1 from "../../src/app/assets/images/bean1.png";
import bean2 from "../../src/app/assets/images/bean2.png";
import rating1 from "../../src/app/assets/images/chef.svg";
import rating2 from "../../src/app/assets/images/coffee-cup.svg";
import rating3 from "../../src/app/assets/images/coffee-shop.svg";
import rating4 from "../../src/app/assets/images/experience.svg";
import coffeeImg from "../../src/app/assets/images/coffee-mug.svg";
import coffeebeans from "../../src/app/assets/images/coffee-beans-2.svg";
import coffeebeans1 from "../../src/app/assets/images/coffee-beans-3.svg";
import  FaShippingFast  from "../../src/app/assets/images/free-delivery.svg";
import GiCoffeeBeans from "../../src/app/assets/images/coffee.svg";
import MdVerified from "../../src/app/assets/images/certified.svg";
import coffeeCup from "../../src/app/assets/images/coffee-beans.svg";
import MdLocalFireDepartment from "../../src/app/assets/images/shape.png";
import { motion } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import offer1 from "../../src/app/assets/images/offer-1.jpg"; // replace with your image
import offer2 from "../../src/app/assets/images/offer-2.jpg"; // replace with your image
import bgImage from "../../src/app/assets/images/w.webp"; // background image


export default function Home() {
  return (
    <>
      {/* Home section */}
      <section id="home" className="overflow-hidden ">
        <div className="container h-screen w-full bg-gradient-to-r from-white to-orange-950 flex items-center justify-center sm:pt-0 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* Left Content */}
            <div className=" p-4 ">
              <div className=" pt-48">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="relative "
                >
                  <span className="font-pacifico text-xl font-semibold text-orange-900">
                    Welcome to Coffero___
                  </span>
                  <h2 className="text-4xl md:text-6xl font-extrabold pt-4 font-sriracha">
                    Experience Artisanal{" "}
                    <span className="text-orange-900">Coffee</span> at Coffero
                  </h2>
                  <p className="mt-4 text-gray-800 ">
                    Indulge in our carefully crafted brews, made from ethically
                    sourced beans and brewed to perfection.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <Link
                      href="/menu"
                      className="bg-orange-900 text-white px-6 py-3 rounded-md"
                    >
                      View Menu
                    </Link>
                    <Link
                      href="/about"
                      className="border border-orange-900 text-orange-900 px-6 py-3 rounded-md"
                    >
                      Our Story
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute bottom-8 left-56 hidden lg:block"
                >
                  <Image
                    src={bean2}
                    alt="Coffee Bean"
                    width={90}
                    height={90}
                    className="rotate-45 "
                  />
                </motion.div>
              </div>
            </div>
            {/* Right Content */}
            <div className=" p-4 relative w-full h-full overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.5 }}
                className="relative w-full "
              >
                <Image
                  src={homeImg}
                  alt="home image"
                  className="w-[200%] md:w-[150%] lg:w-[100%] mb-52 sm:mb-28 pb-16 md:pb-0  lg:pb-0"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -200, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-10 left-20 hidden lg:block"
              >
                <Image src={bean1} alt="Coffee Bean" width={80} height={80} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 200, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                className="absolute top-20 right-10 hidden lg:block"
              >
                <Image
                  src={bean2}
                  alt="Coffee Bean"
                  width={80}
                  height={80}
                  className="rotate-45"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section
        className="relative bg-fixed bg-center bg-cover py-10 mt-16"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* Dark Layer */}
        <div className="absolute inset-0 bg-[#3E0703]/50 z-0"></div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Title */}
          <p className="text-center text-orange-400 text-2xl mb-3 font-semibold font-pacifico tracking-wide">
            Offer
          </p>
          <h2 className="text-center text-3xl md:text-4xl font-pacifico tracking-wide font-bold text-white mb-10">
            Special Offer For You
          </h2>

          {/* Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="rounded-2xl overflow-hidden"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative w-full h-auto">
                {/* Image */}
                <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] relative">
                  <Image
                    src={offer1}
                    alt="Offer 1"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

                {/* Card - Mobile (below image) */}
                <div className="block md:hidden  bg-black/70 border border-dashed border-orange-500 p-4 rounded-lg w-[90%] mx-auto">
                  <h3 className="text-lg font-bold text-orange-400">
                    Espresso Delight
                  </h3>
                  <p className="text-sm mt-2 mb-4 text-gray-200">
                    Get <span className="font-semibold">30% Off</span> <br />
                    Indulge in the bold taste of freshly brewed espresso,
                    crafted with precision to deliver a strong yet smooth shot
                    topped with a silky crema.
                  </p>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md">
                    Order Now
                  </button>
                </div>

                {/* Card - Desktop (overlay on image) */}
                <div className="hidden md:block absolute bottom-10 right-10 bg-black/70 border border-dashed border-orange-500 p-6 py-8 rounded-lg max-w-sm">
                  <h3 className="text-xl font-bold text-orange-400">
                    Espresso Delight
                  </h3>
                  <p className="text-sm mt-2 mb-4 text-gray-200">
                    Get <span className="font-semibold">30% Off</span> <br />
                    Indulge in the bold taste of freshly brewed espresso,
                    crafted with precision to deliver a strong yet smooth shot
                    topped with a silky crema.
                  </p>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md">
                    Order Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-auto">
                {/* Image */}
                <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] relative">
                  <Image
                    src={offer2}
                    alt="Offer 2"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

                {/* Card - Mobile (below image) */}
                <div className="block md:hidden  bg-black/70 border border-dashed border-orange-500 p-4 rounded-lg w-[90%] mx-auto">
                  <h3 className="text-lg font-bold text-orange-400">
                    Espresso Delight
                  </h3>
                  <p className="text-sm mt-2 mb-4 text-gray-200">
                    Get <span className="font-semibold">30% Off</span> <br />
                    Indulge in the bold taste of freshly brewed espresso,
                    crafted with precision to deliver a strong yet smooth shot
                    topped with a silky crema.
                  </p>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md">
                    Order Now
                  </button>
                </div>

                {/* Card - Desktop (overlay on image) */}
                <div className="hidden md:block absolute bottom-10 right-10 bg-black/70 border border-dashed border-orange-500 p-6 py-8 rounded-lg max-w-sm">
                  <h3 className="text-xl font-bold text-orange-400">
                    Espresso Delight
                  </h3>
                  <p className="text-sm mt-2 mb-4 text-gray-200">
                    Get <span className="font-semibold">30% Off</span> <br />
                    Indulge in the bold taste of freshly brewed espresso,
                    crafted with precision to deliver a strong yet smooth shot
                    topped with a silky crema.
                  </p>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md">
                    Order Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Rating Section */}

      <section className="rating mt-28 bg-orange-950 mx-4 sm:mx-10 rounded-xl">
        <div className="container py-16 sm:py-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6 items-center justify-items-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-900 rounded-full flex items-center justify-center">
                <Image src={rating1} alt="chef" width={75} height={75} />
              </div>
              <div className="pt-6 text-white">
                <span className="text-3xl sm:text-4xl font-bold">+ 30</span>
                <p className="whitespace-nowrap pt-2 font-semibold font-sriracha text-xl sm:text-2xl text-orange-500">
                  Total Branches
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-900 rounded-full flex items-center justify-center">
                <Image src={rating2} alt="coffee-cup" width={75} height={75} />
              </div>
              <div className="pt-6 text-white">
                <span className="text-3xl sm:text-4xl font-bold">+ 99</span>
                <p className="whitespace-nowrap pt-2 font-semibold font-sriracha text-xl sm:text-2xl text-orange-500">
                  Happy Customers
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-900 rounded-full flex items-center justify-center">
                <Image src={rating3} alt="coffee-shop" width={75} height={75} />
              </div>
              <div className="pt-6 text-white">
                <span className="text-3xl sm:text-4xl font-bold">+ 22</span>
                <p className="whitespace-nowrap pt-2 font-semibold font-sriracha text-xl sm:text-2xl text-orange-500">
                  Professional Chefs
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-900 rounded-full flex items-center justify-center">
                <Image src={rating4} alt="experience" width={75} height={75} />
              </div>
              <div className="pt-6 text-white">
                <span className="text-3xl sm:text-4xl font-bold">+ 40</span>
                <p className="whitespace-nowrap pt-2 font-semibold font-sriracha text-xl sm:text-2xl text-orange-500">
                  Years of Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why Choose Us Section */}

      <section className="bg-[#954C2E] text-white py-16 px-6 md:px-12 mt-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <video
              src="/videos/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg w-full mt-0 sm:mt-16 h-[400px] object-cover"
            />
          </div>

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-orange-400 font-pacifico text-2xl">
              Why Choose Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold font-sriracha leading-snug mt-2">
              Coffero Most Out Of Your Favorite & <br /> Tasty Coffee House
            </h2>
            <p className="text-gray-300 mt-4">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form by injected
              humour or randomised words which don’t look even slightly
              believable.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="mt-2">
                  <Image
                    src={coffeeImg}
                    alt="coffee-mug"
                    width={60}
                    height={60}
                  />
                </span>
                <div>
                  <h4 className="font-semibold text-lg">Awesome Aroma</h4>
                  <p className="text-gray-300 text-sm">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    injected.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-3">
                  <Image
                    src={coffeebeans}
                    alt="coffee-mug"
                    width={60}
                    height={60}
                  />
                </span>
                <div>
                  <h4 className="font-semibold text-lg">Pure Grades</h4>
                  <p className="text-gray-300 text-sm">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    injected.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-3">
                  <Image
                    src={coffeebeans1}
                    alt="coffee-mug"
                    width={60}
                    height={60}
                  />
                </span>
                <div>
                  <h4 className="font-semibold text-lg">Healthy Coffee</h4>
                  <p className="text-gray-300 text-sm">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    injected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="bg-white py-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-orange-400 font-pacifico font-semibold text-2xl mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold font-sriracha text-orange-900">
            Our Best Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          {/* Card 1 */}
          <div className="bg-orange-200 border-2 border-orange-800 rounded-xl p-6 shadow-md hover:shadow-orange-600 transition">
            <div className="flex justify-between">
              <Image
                src={FaShippingFast}
                alt="Shipping Fast"
                width={85}
                height={85}
              />
              <Image
                src={MdLocalFireDepartment}
                alt="Beans"
                className="w-24 h-18 sm:w-28 sm:h-20 lg:w-32 lg:h-24 me-2"
              />
            </div>
            <h3 className="text-xl font-sriracha text-orange-400 mb-2 mt-8">
              Free Shipping
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Enjoy the convenience of free shipping on every order. We make
              sure your favorite coffee reaches your doorstep quickly, safely,
              and without any extra cost—so you can focus on savoring every sip.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-orange-200 border-2 border-orange-900 rounded-xl p-6 shadow-md hover:shadow-orange-600 transition">
            <div className="flex justify-between">
              <Image
                src={MdVerified}
                alt="Certification"
                width={85}
                height={85}
              />
              <Image
                src={MdLocalFireDepartment}
                alt="Beans"
                className="w-24 h-18 sm:w-28 sm:h-20 lg:w-32 lg:h-24 me-2"
              />
            </div>
            <h3 className="text-xl font-sriracha text-orange-400 mb-2 mt-8">
              Organic Certified
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our coffee is proudly certified organic, grown without harmful
              chemicals or pesticides. Every bean is cultivated with care using
              sustainable farming practices, ensuring a pure, natural flavor
              that’s better for you and the environment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-orange-200 border-2 border-orange-900 rounded-xl p-6  shadow-md hover:shadow-orange-600 transition">
            <div className="flex justify-between">
              <Image
                src={GiCoffeeBeans}
                alt="coffee beans"
                width={85}
                height={85}
              />
              <Image
                src={MdLocalFireDepartment}
                alt="Beans"
                className="w-24 h-18 sm:w-28 sm:h-20 lg:w-32 lg:h-24 me-2"
              />
            </div>
            <h3 className="text-xl font-sriracha text-orange-400 mb-2 mt-8">
              High Quality
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We source only the finest coffee beans, handpicked from trusted
              farms to ensure premium quality. Each bean is carefully selected
              for its flavor, aroma, and consistency, giving you a rich and
              smooth coffee experience in every cup. Quality is never
              compromised — only the best reaches your mug.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-orange-200 border-2 border-orange-900 rounded-xl p-6 shadow-md hover:shadow-orange-600 transition">
            <div className="flex justify-between">
              <Image src={coffeeCup} alt="coffee cup" width={85} height={85} />
              <Image
                src={MdLocalFireDepartment}
                alt="beans"
                className="w-24 h-18 sm:w-28 sm:h-20 lg:w-32 lg:h-24me-2"
              />
            </div>
            <h3 className="text-2xl font-sriracha text-orange-400 mb-2 mt-8">
              Proper Roasting
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed ">
              Our coffee is roasted with precision to bring out the perfect
              balance of aroma, flavor, and richness. Each batch is carefully
              crafted to ensure a smooth taste with bold character, delivering a
              cup that’s as satisfying as it is unforgettable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
