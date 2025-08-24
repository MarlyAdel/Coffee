import Image from "next/image";
import Link from "next/link";

import hotImg from "../assets/images/02.jpg";
import icedImg from "../assets/images/iced.png";
import freshImg from "../assets/images/refresh.jpg";
import corImg from "../assets/images/menu-2.jpg";
import dessertImg from "../assets/images/dessert.jpg";
import donImg from "../assets/images/dounts.png";
import cakeImg from "../assets/images/cake.jpg";
import cookiesImg from "../assets/images/cookies.png";

export default function Pages() {
  const menuItems = [
    { img: hotImg, title: "Hot Drinks", link: "/menu/hot-drinks" },
    { img: icedImg, title: "Iced Coffee", link: "/menu/iced-coffee" },
    { img: freshImg, title: "Refreshments Drinks", link: "/menu/refreshments" },
    { img: corImg, title: "Croissant", link: "/menu/croissant" },
    { img: dessertImg, title: "Desserts", link: "/menu/desserts" },
    { img: donImg, title: "Donuts", link: "/menu/donuts" },
    { img: cakeImg, title: "Cakes", link: "/menu/cakes" },
    { img: cookiesImg, title: "Cookies", link: "/menu/cookies" },
  ];

  return (
    <section
      id="menu"
      className="relative min-h-screen bg-[url('/videos/bg.jpg')] bg-cover bg-center py-16"
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative container mx-auto px-4 z-10">
        {/* Title */}
        <div className="menu-title text-center pb-12">
          <span className="text-orange-400 font-pacifico text-xl md:text-2xl">
            Our Menu
          </span>
          <h2 className="text-2xl md:text-5xl font-semibold font-sriracha text-white pt-4">
            Let's Check Our Menu
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#5C4033]/90 p-5 rounded-2xl flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-orange-400 object-cover"
                />
                <h3 className="font-semibold text-gray-300 text-xl md:text-3xl font-sriracha">
                  {item.title}
                </h3>
              </div>

              <Link
                href={item.link}
                className="text-orange-400 font-bold text-base md:text-xl hover:underline"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
