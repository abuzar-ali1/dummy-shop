"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function FillHoverButton({ href = "#collections", children = "Explore Collections" }) {
  const reduce = useReducedMotion();

  // background slides in from the right (100% -> 0%)
  const bgVariants = {
    rest: { x: "100%" },
    hover: { x: "0%", transition: { duration: 0.36, ease: "easeOut" } },
  };

  // text color animates to white
  const textVariants = {
    rest: { color: "#374151" }, // gray-700
    hover: { color: "#ffffff", transition: { duration: 0.22, ease: "easeOut" } },
  };

  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover={reduce ? "rest" : "hover"}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-3 text-base font-medium bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
      aria-label="Explore Collections"
    >
      {/* animated background (fills the button) */}
      <motion.span
        aria-hidden
        variants={bgVariants}
        className="absolute inset-0 z-0"
        // use your UI color here — replace with your brand color if needed
        style={{ background: "#0f1724" }}
      />

      {/* text (on top of animated background) */}
      <motion.span
        className="relative z-10 pointer-events-none"
        variants={textVariants}
      >
        {children}
      </motion.span>
    </motion.a>
  );
}
