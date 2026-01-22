"use client";

import { motion } from "framer-motion";

const FadeUp = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  once = true,
  className = "",
}) => {
  return (
   <motion.div
  initial={{ opacity: 0, y: 30 }}       
  whileInView={{ opacity: 1, y: 0 }}    
  viewport={{ once: true }}            
  transition={{ delay, duration, ease: "easeOut" }}
>
  {children}
</motion.div>
  );
};

export default FadeUp;
