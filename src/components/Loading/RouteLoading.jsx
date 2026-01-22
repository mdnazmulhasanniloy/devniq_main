"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function RouteLoader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#ffffff]"
        >
          {/* Animated Circle */}
          <motion.div
            className="absolute w-40 h-40 border-4 border-[#FF6F00] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />

          {/* Animated Devniq Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/BlackLogo.svg"
              alt="Devniq Logo"
              width={70}
              height={70}
              className="drop-shadow-lg"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
