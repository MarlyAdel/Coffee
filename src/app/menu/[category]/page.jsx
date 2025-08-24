"use client";

import Image from "next/image";
import { menuData } from "../../menuData/page"; 
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const { category } = useParams(); 
  const categoryData = menuData[category];

  if (!categoryData) {
    notFound(); // or custom fallback
  }

  return (
    <section className="min-h-screen bg-[#452e20] text-white py-16 px-6">
      {/* Title */}
      <div className="text-center pb-10">
        <h2 className="text-5xl font-serif font-bold text-orange-500">
          {categoryData.title}
        </h2>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {categoryData.products.map((product, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white text-black p-4 rounded-xl shadow-xl"
          >
            {/* Left side */}
            <div>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <span className="inline-block mt-3 border border-red-900 text-red-900 px-4 py-1 rounded-full font-medium">
                EGP {product.price}
              </span>
            </div>

            {/* Right side (Image) */}
            <Image
              src={product.img}
              alt={product.name}
              width={85}
              height={85}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
