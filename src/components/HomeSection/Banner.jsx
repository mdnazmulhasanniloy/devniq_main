import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiCalendarDotsBold } from "react-icons/pi";
import FadeLeft from "../Animations/FadeLeft.jsx";
import FadeRight from "../Animations/FadeRight.jsx";
import FadeUp from "../Animations/Fadeup.jsx";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer.jsx";
import { Button } from "../ui/button.jsx";

export const Banner = () => {
  return (
    <>
    
      <div className="bg-[url(/Banner.svg)] bg-no-repeat bg-center bg-cover pt-[250px]  md:pt-[280px] md:pb-8 lg:pt-[484px] pb-10">
     
        <ResponsiveContainer>
          <div className=" lg:flex items-end justify-between lg:gap-x-5 xl:gap-0">
            <FadeLeft>
            <div className="">
              <Image
                src="/CompanyName.svg"
                alt="Devniq"
                width={793.05}
                height={276.08}
              />
            </div>
            </FadeLeft>
            <FadeRight>
            <div className=" lg:max-w-[477px] ">
              <p className="text-xl md:text-[24px] font-medium  text-[#FFFFFF] leading-[29.7px] pt-8 md:pt-0 pb-[25px] font-manrope">
                Digital Solutions That Feel Effortless — and Work Powerfully
              </p>
              <Link  href="/booking" className={`px-[20.51px]! gap-x-2 w-fit py-[15.38px]!  items-center h-[51.28px] font-poppins flex text-[17.43px] bg-white text-[#1E1E1E] rounded-[40px] cursor-pointer `}>
                <PiCalendarDotsBold className="w-[25px] h-[25px]" />  Consult
                Booking
              </Link>
            </div>
            </FadeRight>
          </div>
        </ResponsiveContainer>
       
      </div>

        <FadeUp>
      <ResponsiveContainer>
        <div className=" bg-white py-13 md:py-16 lg:py-20">
          <div className="md:flex flex-wrap items-end justify-between ">
            {/*Top  left side  */}
            <div className=" lg:max-w-[635px]">
              <h1 className="text-3xl md:text-[36px] lg:text-[48px] text-center lg:text-start font-bold font-bdogrotesk leading-[106%] pb-6 md:pb-8 lg:pb-10">
                We build solutions that not only work flawlessly{" "}
              </h1>
              <Button variant="outline" className="pl-5!  pr-[15px]! h-10 md:h-[49.66px] text-[#FFFFFF] font-poppins flex items-center mx-auto lg:mx-0 md:text-[16px] bg-[#FF7A08] rounded-[39px] cursor-pointer duration-300 ">
                View Our Services
                <MdKeyboardArrowRight className="text-xl md:text-2xl" />
              </Button>
            </div>

            {/* Top Right side  */}
            <div className="max-w-full  md:max-w-[558px]">
              <p
                className="capitalize text-[#22282B] font-manrope pt-6 md:pt-7 lg:pt-0 md:text-xl font-semibold leading-[120%] text-center md:text-end
     "
              >
                Devniq transforms ideas into well-crafted digital products
                through minimal design, clean development,
                <span className="text-[#B9BABA]">
                  and a deep understanding of user experience.
                </span>
              </p>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
</FadeUp>
      
    </>
  );
};
