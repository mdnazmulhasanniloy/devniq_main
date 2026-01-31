"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiCalendarDotsBold } from "react-icons/pi";
import { scrollToSection } from "../../utils/scrollToSection.js";
import FadeUp from "../Animations/Fadeup.jsx";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import { Button } from "../ui/button.jsx";
import { Input } from "../ui/input.jsx";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { name: "About Us", href: "#about" },
  { name: "Team", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
];

const socialIcons = [
  { icon: FaFacebookF, url: "https://facebook.com" },
  { icon: FaLinkedinIn, url: "https://linkedin.com" },
  { icon: FaXTwitter, url: "https://twitter.com" },
  { icon: FaInstagram, url: "https://instagram.com" },
  { icon: FaWhatsapp, url: "https://wa.me/8801700992610" }
];

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleFooterNavClick = (href) => {
    if (isHome) {
      scrollToSection(href);
    } else {
      router.push(`/`);
      setTimeout(() => scrollToSection(href), 100);
    }
  };

  return (
    <div className="bg-[url(/FooterBg.svg)] bg-no-repeat bg-center bg-cover rounded-ss-[50px] rounded-se-[50px] md:rounded-ss-[70px] md:rounded-se-[70px] lg:rounded-ss-[120px] lg:rounded-se-[120px] xl:rounded-ss-[150px] xl:rounded-se-[150px] pt-10 pb-2">

      <ResponsiveContainer className="pb-8">
        <FadeUp>
          <Image
            src="/FullLogo.svg"
            alt="Logo"
            width={106}
            height={30}
            className="m-auto pb-5 md:pb-8"
          />

          <SectionHeader
            className="max-w-[906px] m-auto"
            SNClassName="hidden"
            Title="ready to Transform Your Business With Us"
            TitleClassName=" text-[#FFFFFF] leading-[100%] capitalize pb-5 md:pb-6"
            subtitle="We build smart, scalable, and user-focused digital products — from idea to launch and beyond."
            SubClassName="max-w-[526px] m-auto text-[#FFFFFF]/80 pb-6"
          />
        </FadeUp>

        <Link href="/booking" className="px-[20.51px] py-[15.38px] w-fit gap-x-2 flex items-center h-[51.28px] font-poppins md:text-[17.43px] bg-white text-[#1E1E1E] rounded-[40px] cursor-pointer hover:bg-white hover:text-[#1E1E1E] m-auto">
          <PiCalendarDotsBold className="w-[25px] h-[25px]" /> Book a Meeting
        </Link>
      </ResponsiveContainer>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="bg-[#000000] rounded-[20px] pt-10 md:pt-15 pb-8 md:pb-10 mx-2 lg:px-10 xl:px-0 ">
        <ResponsiveContainer>

          <div className="flex flex-wrap md:flex-row justify-between gap-y-10 pb-10">

            {/* LEFT */}
            <div className="max-w-full md:max-w-[456px] flex flex-col gap-6">
              <Image
                src="/CompanyNameLogo.svg"
                alt="Devniq"
                width={151}
                height={57}
              />

              <p className="max-w-full md:max-w-[383px] text-[#CCD0D5] font-manrope leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className=" text-[#979797] pl-6 placeholder:text-[#979797] font-inter outline outline-[#ECEDF2] rounded-full h-[50px]"
                />

                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-full px-6 text-[#131517] cursor-pointer h-[50px] shrink-0"
                >
                  Inquire Now
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex lg:flex md:flex-none gap-y-10 sm:gap-x-[72px] flex-wrap">

              {/* LINKS */}
              <div className="space-y-4 sm:space-y-[22px]">
                <h3 className="font-bdogrotesk text-[#FFFFFF] font-semibold text-[18px]">
                  Links
                </h3>

                <ul className="font-inter space-y-2 sm:space-y-[22px]">
                  {links.map((link, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleFooterNavClick(link.href)}
                      className="text-[#CCD0D5] cursor-pointer hover:text-white transition"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* REACH OUT */}
              <div className="space-y-4 sm:space-y-[26px]">
                <h3 className="font-bdogrotesk text-[#FFFFFF] font-semibold text-[18px]">
                  Reach out
                </h3>

              <ul className="font-inter space-y-2 sm:space-y-[26px] text-[#CCD0D5]">
                  <li>📩 devniqit@gmail.com</li>
                  <li className="leading-6 md:max-w-[320px]  ">
                    📍 Road 03, Block C, Banasree , Dhaka, Dhaka, Bangladesh
                  </li>
                  <li>☎️ +8801700992610</li>
                  
                </ul>
              </div>

            </div>
          </div>

          <hr className="border border-[#47494F]" />

          {/* BOTTOM BAR */}
          <div className="flex flex-col flex-wrap sm:flex-row items-center justify-between md:justify-evenly lg:justify-between mt-10 gap-y-4">

            <span className="text-[#CCD0D5] text-center sm:text-left">
              ⓒ Copyright 2025. All rights reserved
            </span>

            <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-x-4 pr-5">
              {socialIcons.map((item, idx) => (
                <li
                  key={idx}
                  className="w-10 h-10 rounded-full border border-[#606267] text-white flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <item.icon />
                </li>
              ))}
            </ul>

          </div>

        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Footer;
