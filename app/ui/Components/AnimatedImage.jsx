import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedImage({ src, alt, className = "" }) {
  const reduce = useReducedMotion();
  
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      draggable={false}
      initial={{ y: 0 }}
      animate={reduce ? {} : { y: [0, -8, 0] }}
      transition={
        reduce
          ? {}
          : {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }
      }
    />
  );
}
