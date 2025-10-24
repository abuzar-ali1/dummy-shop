"use cleint";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Everyday Tote",
    price: "49",
    compareAt: "69",
    image: "/images/purse.png",
    desc: "Lightweight, durable and water-resistant — perfect for daily commute.",
  },
  {
    id: 2,
    name: "Runner Shoe",
    price: "89",
    compareAt: "109",
    image: "/images/shoes.png",
    desc: "Cushioned sole and breathable upper for all-day comfort.",
  },
  {
    id: 3,
    name: "Commuter Backpack",
    price: "129",
    compareAt: "159",
    image: "/images/newbag.png",
    desc: "Organized pockets and water-resistant material.",
  },
  {
    id: 4,
    name: "Sling Pouch",
    price: "29",
    compareAt: "39",
    image: "/images/pouch.png",
    desc: "Compact carry for everyday essentials.",
  },
  {
    id: 5,
    name: "Urban Hoodie",
    price: "69",
    compareAt: "89",
    image: "/images/jacket.png",
    desc: "Soft brushed interior, relaxed fit and durable stitching — great for cool mornings.",
  },
  {
    id: 6,
    name: "Travel Duffel",
    price: "99",
    compareAt: "129",
    image: "/images/bigbag.png",
    desc: "Roomy main compartment, padded shoulder strap and water-resistant base for weekend getaways.",
  },
  {
    id: 7,
    name: "Everyday Cap",
    price: "22",
    compareAt: "30",
    image: "/images/cap.png",
    desc: "Lightweight, one-size adjustable cap with sweat-wicking band — a daily go-to.",
  },
  {
    id: 8,
    name: "Classic Water Bottle",
    price: "24",
    compareAt: "34",
    image: "/images/bottle.png",
    desc: "Insulated stainless steel bottle keeps drinks cold for 24 hours and leak-proof on the move.",
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

 function NewArrivals() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mb-8">
          <div>
            <div className="inline-flex items-center gap-3 bg-white/60 px-3 py-1 rounded-full border border-gray-100 shadow-sm text-xs font-medium">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="text-cyan-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2v20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 8h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              New arrivals
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Fresh picks for your everyday — modern essentials
            </h2>

            <p className="mt-3 text-sm text-gray-500 max-w-xl">
              Handpicked styles updated weekly. Fast delivery & easy returns on
              all new items.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#shop"
              className="inline-flex items-center rounded-lg bg-[#0f1724] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Shop all
            </a>
            <a
              href="#collections"
              className="inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50"
            >
              Explore collections
            </a>
          </div>
        </div>

        {/* Product grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


export default NewArrivals;