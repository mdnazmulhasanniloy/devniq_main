"use client";

import { motion } from "framer-motion";

const FadeRight = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 50, // how far it slides from right
  once = true,   // animate only first time
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: distance }}   // start hidden, right
      whileInView={{ opacity: 1, x: 0 }}     // animate to current position
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

export default FadeRight;
