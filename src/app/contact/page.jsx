
"use client";
import Image from "next/image";
import beans from "../assets/images/shape-3.png"; 
import leaves from "../assets/images/shape-2.png"; 

export default function ReservationSection() {
  return (
    <section className="bg-[#311E1C] text-white py-16 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto bg-[#331B15] rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden">
        {/* Decorative Images */}
        <Image
          src={beans}
          alt="Coffee Beans"
          width={120}
          height={120}
          className="absolute bottom-4 left-4 bg-opacity-85"
        />
        <Image
          src={leaves}
          alt="Leaves"
          width={120}
          height={120}
          className="absolute top-4 right-4 opacity-95"
        />

        {/* Title */}
        <div className="text-center mb-8 relative z-10">
          <h3 className="text-[#C69B7B] text-xl font-semibold mb-5 font-pacifico">
            Reservation
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Book A Table
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#3D1C17] border border-gray-600 rounded-md focus:outline-none focus:border-[#C69B7B]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#3D1C17] border border-gray-600 rounded-md focus:outline-none focus:border-[#C69B7B]"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full px-4 py-3 bg-[#3D1C17] border border-gray-600 rounded-md focus:outline-none focus:border-[#C69B7B]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Date Ex: DD/MM/YY"
              className="w-full px-4 py-3 bg-[#3D1C17] border border-gray-600 rounded-md focus:outline-none focus:border-[#C69B7B]"
            />
            <input
              type="text"
              placeholder="Time Ex: 01:25 PM"
              className="w-full px-4 py-3 bg-[#3D1C17] border border-gray-600 rounded-md focus:outline-none focus:border-[#C69B7B]"
            />
            <input
              type="number"
              placeholder="Number Of People"
              className="w-full px-4 py-3 bg-[#3D1C17] border border-gray-600 rounded-md focus:outline-none focus:border-[#C69B7B]"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 bg-[#3D1C17] border border-gray-600 rounded-md focus:outline-none focus:border-[#C69B7B]"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#C1937A] hover:bg-[#C69B7B] text-black font-semibold py-3 px-8 rounded-md transition"
            >
              Book A Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
