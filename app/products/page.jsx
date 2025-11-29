"use client";
import React from "react";
import BestSellersSection from "../ui/Components/BestSeller";
import NewArrivals from "../ui/Components/NewArrivals";
import AnimatedProduct from "../ui/Components/AnimatedProduct";
import { motion } from 'framer-motion';
import { showCasePoducts } from "@/data/products";


const page = () => {

  return (
    <div>
      <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }}
    >
      <motion.h3 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4
        }}
      >
        Our{" "}
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6
          }}
        >
          Products
        </motion.span>
      </motion.h3>
      
      <motion.p
        className="text-gray-600 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.8
        }}
      >
        Discover our carefully curated collection of modern essentials designed for your everyday life.
      </motion.p>
      
      {/* Animated underline */}
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "6rem" }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1
        }}
      />
    </motion.div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
        {showCasePoducts.map((p) =>(
          <AnimatedProduct key={p.id} p={p}/>
        )
        )}
      </div>
      <BestSellersSection />
      <NewArrivals />
    </div>
  );
};

export default page;
