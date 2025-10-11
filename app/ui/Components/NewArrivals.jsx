"use cleint";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------- tiny sample data (replace with your API/dataset) ---------- */
const products = [
  { id: 1, name: "Everyday Tote", price: "49", compareAt: "69", image: "/images/purse.png", desc: "Lightweight, durable and water-resistant — perfect for daily commute." },
  { id: 2, name: "Runner Shoe", price: "89", compareAt: "109", image: "/images/shoes.png", desc: "Cushioned sole and breathable upper for all-day comfort." },
  { id: 3, name: "Commuter Backpack", price: "129", compareAt: "159", image: "/images/newbag.png", desc: "Organized pockets and water-resistant material." },
  { id: 4, name: "Sling Pouch", price: "29", compareAt: "39", image: "/images/pouch.png", desc: "Compact carry for everyday essentials." },
];

/* ---------- animation variants ---------- */
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

/* ---------- Button fill variants (secondary button) ---------- */
const bgVariants = {
  rest: { x: "100%" },
  hover: { x: "0%", transition: { duration: 0.36, ease: "easeOut" } },
};
const textVariants = {
  rest: { color: "#374151" },
  hover: { color: "#ffffff", transition: { duration: 0.22, ease: "easeOut" } },
};

/* ---------- Animated product image (gentle float) ---------- */
function AnimatedImage({ src, alt, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      draggable={false}
      initial={{ y: 0 }}
      animate={reduce ? {} : { y: [0, -8, 0] }}
      transition={reduce ? {} : { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  );
}

/* ---------- Product Card ---------- */
function ProductCard({ p }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
      role="group"
    >
      {/* Image */}
      <div className="h-50 md:h-48 lg:h-56 bg-gray-50 flex items-center justify-center">
        <AnimatedImage src={p.image} alt={p.name} className="h-40 object-contain select-none pointer-events-none" />
      </div>

      {/* Content fills space so buttons sit at bottom */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="min-w-0">
          <h4 className="text-base font-semibold text-gray-900">{p.name}</h4>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">{p.desc}</p>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-lg font-bold text-gray-900">${p.price}</span>
            <span className="text-sm text-gray-400 line-through">${p.compareAt}</span>
          </div>
        </div>

        {/* spacer pushes actions to the bottom */}
        <div className="mt-4" />
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          {/* View product = animated fill (right -> left) */}
          <motion.a
            href="#"
            initial="rest"
            whileHover={reduce ? "rest" : "hover"}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            aria-label={`View ${p.name}`}
          >
            <motion.span aria-hidden variants={bgVariants} className="absolute inset-0 z-0" style={{ background: "#0f1724" }} />
            <motion.span className="relative z-10 pointer-events-none" variants={textVariants}>
              View product
            </motion.span>
          </motion.a>

          {/* Add to bag primary */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-[#0f1724] text-white px-4 py-2 text-sm font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 min-w-[120px]"
            aria-label={`Add ${p.name} to bag`}
          >
            Add to bag
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- New Arrivals Section ---------- */
export default function NewArrivals() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mb-8">
          <div>
            <div className="inline-flex items-center gap-3 bg-white/60 px-3 py-1 rounded-full border border-gray-100 shadow-sm text-xs font-medium">
              <svg width="14" height="14" viewBox="0 0 24 24" className="text-cyan-500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              New arrivals
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Fresh picks for your everyday — modern essentials
            </h2>

            <p className="mt-3 text-sm text-gray-500 max-w-xl">
              Handpicked styles updated weekly. Fast delivery & easy returns on all new items.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href="#shop" className="inline-flex items-center rounded-lg bg-[#0f1724] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              Shop all
            </a>
            <a href="#collections" className="inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50">
              Explore collections
            </a>
          </div>
        </div>

        {/* Product grid */}
        <motion.div variants={gridVariants} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
