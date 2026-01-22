"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { TbPhoneDone } from "react-icons/tb";
import { scrollToSection } from "../../utils/scrollToSection.js";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer.jsx";
import { Button } from "../ui/button.jsx";

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Testimonials", href: "#testimonials" },
    { name: "About Us", href: "#about" },
    { name: "Case Studies", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#blogs" },
  ];

 

  const isHome = pathname === "/";
  const navbarBg = isHome
    ? 
       "bg-black/70 lg:bg-transparent lg:top-10"
    : "bg-black/70 lg:bg-transparent lg:top-6";

  const menuTextColor = isHome ? "text-white" : "text-black";
  const logoSrc = isHome ? "/IconLogo.svg" : "/colorLogo.svg";

  const buttonClasses = isHome
    ? "bg-white text-[#1E1E1E] hover:bg-gray-200"
    : "bg-[#FF7A08] text-white";

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);

    if (isHome) {
      scrollToSection(href);
    } else {
      router.push(`/`);
      setTimeout(() => scrollToSection(href), 100);
    }
  };

  return (
    <nav
      className={`fixed   lg:absolute top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      <ResponsiveContainer>
        {/* TOP BAR */}
        <div className="relative flex items-center justify-between py-4 w-full">
          {/* Logo */}
          <Link href="/" aria-label="Go to homepage">
            <Image src={logoSrc} alt="Devniq logo" width={36} height={40} priority />
          </Link>

          {/*  DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-x-[151.5px]">
            <ul className="flex items-center gap-x-[57px]">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  className={`text-xl cursor-pointer font-poppins ${menuTextColor}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>

            <Link href="#contact">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline"
                  className={`px-[20.51px] py-[14.83px] h-[49.66px] flex items-center gap-2 font-poppins text-[17.43px] rounded-[40px] ${buttonClasses}`}
                >
                  <TbPhoneDone /> Contact Us
                </Button>
              </motion.div>
            </Link>
          </div>

          {/*  MOBILE MENU BUTTON  */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-11 h-11 flex items-center justify-center 
                       text-3xl  cursor-pointer
                         z-999 text-white`}
          >
            {mobileMenuOpen ?  <FaXmark />:<FaBarsStaggered /> }
          </button>
        </div>

        {/*  MOBILE DROPDOWN MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out 
          ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-black mx-4 mb-4 rounded-3xl p-5">
            <ul className="flex flex-col gap-y-4">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white text-lg font-poppins cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>

            <Link href="#contact">
              <Button className="mt-6 w-full py-3 rounded-full bg-[#FF7A08] text-white">
                <TbPhoneDone /> Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </ResponsiveContainer>
    </nav>
  );
};

export default Navbar;
