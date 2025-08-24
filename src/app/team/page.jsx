"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import team1 from "../assets/images/team-1.jpg"
import team2 from "../assets/images/team-2.jpg"
import team3 from "../assets/images/team-3.jpg"
import team4 from "../assets/images/team-4.jpg"


// Sample team data
const team = [
  {
    name: "Melissa Jeo",
    role: "Senior Chef",
    img: team1,
  },
  {
    name: "Chris Smith",
    role: "Mid Chef",
    img: team2,
  },
  {
    name: "Tony Rodri",
    role: "Senior Chef",
    img: team3,
  },
  {
    name: "Sue Pinto",
    role: "Senior Chef",
    img: team4,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#4F0E0E] text-white py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h3 className="text-[#C69B7B] text-lg font-semibold">Chef’s</h3>
        <h2 className="text-3xl md:text-4xl font-bold font-serif">
          Meet Our Experts
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#6F4E37] rounded-md overflow-hidden shadow-lg border-b-4 border-[#ED3500]"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={400}
              height={500}
              className="w-full  object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[#C69B7B]">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
