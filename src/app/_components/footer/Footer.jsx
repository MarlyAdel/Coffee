import Image from "next/image";
import coffeeBg from "../../../app/assets/images/footer.jpg"; 
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative min-h-[400px] bg-brown-800 text-white py-12 pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={coffeeBg}
          alt="Coffee beans background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center px-6 mt-2">
        <h2 className="text-2xl font-bold mb-4">Freshly Roasted, Just for You ☕</h2>
        <p className="mb-6 text-sm">
          Bringing you the finest organic coffee beans with rich aroma and premium taste.  
          Start your day with a perfect brew!
        </p>

        <div className="flex justify-center gap-6">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/menu" className="hover:text-orange-400">Menu</Link>
          <Link href="/about" className="hover:text-orange-400">About</Link>
          <Link href="/contact" className="hover:text-orange-400">Contact</Link>
        </div>

        <p className="mt-6 text-xs text-gray-200">
          © {new Date().getFullYear()} Coffee Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
