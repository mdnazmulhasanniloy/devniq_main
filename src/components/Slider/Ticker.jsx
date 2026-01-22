"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "../HomeSection/Cards/ServiceCard.jsx";

const Ticker = () => {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const animationRef = useRef(null);
  const [fullWidth, setFullWidth] = useState(0);

  const services = [
    {
      className: "bg-[url(/AppDevelopment.svg)]",
      name: "App Development",
      icon: <Image src="/mobile.svg" alt="Monitor" width={24} height={24} />,
    },
    {
      className: "bg-[url(/WebDevelopment.svg)]",
      name: "Web Development",
      icon: <Image src="/keyboard.svg" alt="web development" width={24} height={24} />,
    },
    {
      className: "bg-[url(/UI-UX.svg)]",
      name: "UI/UX Design",
      icon: <Image src="/designtools.svg" alt="UI/UX" width={24} height={24} />,
    },
    {
      className: "bg-[url(/WindowDevelopment.svg)]",
      name: "Windows Development",
      icon:  <div className="md:w-6 md:h-6 w-5 h-5 flex items-center justify-center scale-100">
      <Image
        src="/monitor.svg"
        alt="Monitor"
        fill
        className="object-contain"
      />
    </div>,
    },
    {
      className: "bg-[url(/seo.svg)]",
      name: "SEO",
      icon: <Image src="/Activity.svg" alt="Monitor" width={24} height={24} />,
    },
  ];

  // Triple duplicate for true infinite loop
  const items = [...services, ...services, ...services];

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 3;
      setFullWidth(width);

      //  Smooth infinite animation
      animationRef.current = animate(x, -width, {
        duration: 40, // speed control
        ease: "linear",
        repeat: Infinity,
      });
    }

    return () => animationRef.current?.stop();
  }, [x]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={trackRef}
        className="flex gap-x-5 whitespace-nowrap cursor-pointer"
        style={{ x }}

        //  Pause on hover (stops at exact position)
        onMouseEnter={() => animationRef.current?.pause()}

        //  Resume from same position (no restart)
        onMouseLeave={() => animationRef.current?.play()}
      >
        {items.map((service, index) => (
          <ServiceCard
            key={index}
            className={service.className}
            ServiceName={service.name}
            icon={service.icon}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
