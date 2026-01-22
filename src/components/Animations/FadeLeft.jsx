"use client";

import { motion } from "framer-motion";

const FadeLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 50, 
  once = true,  
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}  
      whileInView={{ opacity: 1, x: 0 }}     
      viewport={{ once }}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeft;
