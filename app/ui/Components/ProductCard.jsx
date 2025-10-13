import { motion, useReducedMotion } from "framer-motion";
import AnimatedImage from "./AnimatedImage";

export default function ProductCard({ p }) {
  const reduce = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
  };

  const bgVariants = {
    rest: { x: "100%" },
    hover: { x: "0%", transition: { duration: 0.36, ease: "easeOut" } },
  };
  const textVariants = {
    rest: { color: "#374151" },
    hover: {
      color: "#ffffff",
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
      role="group"
    >
      {/* Image */}
      <div className="h-50 md:h-48 lg:h-56 bg-gray-50 flex items-center justify-center">
        <AnimatedImage
          src={p.image}
          alt={p.name}
          className="h-40 object-contain select-none pointer-events-none"
        />
      </div>

      {/* Content fills space so buttons sit at bottom */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="min-w-0">
          <h4 className="text-base font-semibold text-gray-900">{p.name}</h4>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">{p.desc}</p>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-lg font-bold text-gray-900">${p.price}</span>
            <span className="text-sm text-gray-400 line-through">
              ${p.compareAt}
            </span>
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
