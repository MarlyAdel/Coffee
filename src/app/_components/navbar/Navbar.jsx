"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImg from "../../../app/assets/images/logo.png"

const links = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {

  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <nav className="bg-orange-950 text-white">
        <div className="container px-10 sm:px-32 py-5 flex justify-between items-center">
          <Image src={logoImg} alt="loho" className="w-32"/>

          {/* Hamburger */}
          <button
            className="lg:hidden text-2xl cursor-pointer text-orange-950 bg-white rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 uppercase font-semibold ml-auto">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${
                    pathName === link.href ? "bg-orange-800 p-2 rounded-md" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 uppercase font-semibold">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${
                      pathName === link.href ? "bg-orange-800 p-2 rounded-md" : "text-white"
                    } `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
