"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-white mt-15">
      {/* decorative shapes - hidden on small screens */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08, rotate: 6 }}
          transition={{ duration: 1.2 }}
          className="absolute -right-32 -top-20 w-96 h-96 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-300 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06, rotate: -6 }}
          transition={{ duration: 1.6 }}
          className="absolute -left-40 bottom-0 w-72 h-72 rounded-full bg-gradient-to-bl from-rose-300 to-orange-200 blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-3 bg-[#0f1724] text-white px-3 py-1 rounded-full text-sm font-medium w-max">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 8 4-16 3 8h4" />
              </svg>
              New arrivals
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Elevate your everyday —
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-700">modern essentials</span>
            </h1>

            <p className="text-gray-600 max-w-2xl text-lg">
              Handpicked quality, thoughtful design and honest prices. Discover curated pieces for home, work and travel — made to last. Free shipping over <strong>$50</strong>.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#shop"
                className="inline-flex items-center justify-center rounded-md bg-[#0f1724] text-white px-6 py-3 text-base font-semibold shadow-md hover:shadow-lg"
              >
                Shop Now
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="#collections"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-3 text-base font-medium text-gray-700 bg-white"
              >
                Explore Collections
              </motion.a>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 block" />
                Fast delivery
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 block" />
                Sustainable materials
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-300 block" />
                30-day returns
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'circOut' }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-md">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100 bg-white">
                {/* placeholder hero product card - replace with Image */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.95, rotate: -4, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="w-64 h-64 relative"
                  >
                    
                    <Image src="/images/showcase.png" alt="Product mockup" fill style={{ objectFit: 'contain' }} priority />
                  </motion.div>
                </div>

                <div className="mt-6 px-6 md:px-8 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Everyday Tote</h3>
                      <p className="text-sm text-gray-500 mt-1">Lightweight, durable and water-resistant — perfect for daily commute.</p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="text-xl font-bold">$49</span>
                        <span className="text-sm text-gray-400 line-through">$69</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-2 md:mt-0">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-[#0f1724] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 whitespace-nowrap"
                        aria-label="View product"
                      >
                        View product
                      </motion.a>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center rounded-lg bg-[#0f1724] text-white px-5 py-2 text-sm font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 whitespace-nowrap min-w-[120px]"
                        aria-label="Add to bag"
                      >
                        Add to bag
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* slight floating badge */}
                <motion.div
                  initial={{ y: 6 }}
                  animate={{ y: -6 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  className="absolute -top-4 left-4 bg-white/90 border border-gray-100 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                >
                  Best seller
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

