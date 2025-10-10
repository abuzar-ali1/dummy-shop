// FeaturedCollections.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const collections = [
  { id: 1, title: "Totes & Bags", subtitle: "Everyday carry", img: "/images/bags.png" },
  { id: 2, title: "Travel", subtitle: "Pack light, travel far", img: "/images/tarvel.png" },
  { id: 3, title: "Home & Living", subtitle: "Designed to last", img: "/images/home.png" },
  { id: 4, title: "New Arrivals", subtitle: "Fresh picks", img: "/images/newstock.png" },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">Shop by collection</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Curated collections to make everyday life a little easier — handpicked styles, materials, and features we love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c, i) => (
            <motion.a
              key={c.id}
              href={`/collections/${c.title.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className="group block rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              aria-label={`Open ${c.title} collection`}
            >
              <div className="relative h-44 sm:h-52 md:h-44 lg:h-48">
                {/* use plain <img> or next/image if in Next.js and images are in /public */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{c.subtitle}</p>
                <span className="inline-block mt-3 text-sm font-medium text-[#0f1724]">Explore →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
