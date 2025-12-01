import React from "react";
import { motion, useReducedMotion } from 'framer-motion';
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/slices/cartSlice";

const AnimatedProduct = ({ p }) => {
  const reduce = useReducedMotion();
  const dispatch = useDispatch();
   const handleAddToCart = (item) => {
       dispatch(addToCart(item));
    }
  
  const bgVariants = {
    rest: { x: "100%" },
    hover: { x: "0%", transition: { duration: 0.36, ease: "easeOut" } },
  };
  
  const textVariants = {
    rest: { color: "#374151" }, // gray-700
    hover: {
      color: "#ffffff",
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };
  
  const animateProps = reduce
    ? { y: 0, scale: 1, opacity: 1 }
    : { y: [0, 20, 0], scale: [1, 1.03, 1], opacity: [1, 0.96, 1] };

  const transitionProps = reduce
    ? {}
    : {
        duration: 3.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        times: [0, 0.5, 1],
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="flex justify-center"
    >
      <div className="w-full max-w-sm md:max-w-md"> 
        <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100 bg-white h-full flex flex-col">
          {/* Image Container - Fixed sizing */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 flex items-center justify-center flex-shrink-0">
            <motion.div
              initial={{ scale: 0.95, rotate: -4, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-48 h-48 md:w-56 md:h-56 relative overflow-hidden" 
            >
              <motion.img
                src={p.image}
                alt={p.name}
                draggable={false}
                className="w-full h-full object-contain" 
                animate={reduce ? {} : { y: [0, -10, 0] }} 
                transition={
                  reduce
                    ? {}
                    : {
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }
                }
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-6 flex-1 flex flex-col">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-lg text-gray-900 leading-tight">
                {p.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2 max-w-none leading-relaxed line-clamp-2">
                {p.desc}
              </p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-xl font-bold text-gray-900">${p.price}</span>
                {p.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">${p.originalPrice}</span>
                )}
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="p-4 pt-0 mt-auto">
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              {/* View product button */}
              <motion.a
                href="#"
                initial="rest"
                whileHover={reduce ? "rest" : "hover"}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden w-full sm:flex-1 inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                aria-label="View product"
              >
                <motion.span
                  aria-hidden
                  variants={bgVariants}
                  className="absolute inset-0 z-0"
                  style={{ background: "#0f1724" }}
                />
                <motion.span
                  className="relative z-10 pointer-events-none"
                  variants={textVariants}
                >
                  View product
                </motion.span>
              </motion.a>

              {/* Add to bag button */}
              <motion.button
                onClick={()=>handleAddToCart(p)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:flex-1 inline-flex items-center justify-center rounded-lg bg-[#0f1724] text-white px-4 py-2 text-sm font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 whitespace-nowrap"
                aria-label="Add to bag"
              >
                Add to bag
              </motion.button>
            </div>

            {/* Micro info */}
            <div className="mt-3 text-xs text-gray-500 flex flex-wrap gap-2 justify-center">
              <span>Fast delivery</span>
              <span>•</span>
              <span>Sustainable</span>
              <span>•</span>
              <span>30-day returns</span>
            </div>
          </div>

          {/* Best seller badge */}
          <motion.div
            initial={{ y: 0, scale: 1, opacity: 1 }}
            animate={animateProps}
            transition={transitionProps}
            style={{ willChange: "transform" }}
            className="absolute -top-2 left-4 bg-white/90 border border-gray-100 px-2 py-1 rounded-full text-xs font-medium shadow-sm"
            role="status"
            aria-label="Best seller"
          >
            {p.tag || "Best seller"}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedProduct;