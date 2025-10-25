"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  HeartIcon,
  ShareIcon,
  ShoppingBagIcon,
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedImage(0);
      setQuantity(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Generate multiple image views for the product
  const productImages = [
    product.image,
    product.image, // In real app, you'd have different angles
    product.image,
    product.image
  ];

  const features = [
    "Premium Quality Materials",
    "Water Resistant",
    "Lightweight Design", 
    "Everyday Essential"
  ];

  const colors = ["#1f2937", "#4b5563", "#6b7280", "#9ca3af"];
  const sizes = ["S", "M", "L", "XL"];

  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Added ${quantity} ${product.name} to cart`);
    onClose();
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ 
                type: "spring", 
                damping: 25,
                stiffness: 300
              }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row h-full">
                
                {/* Image Section */}
                <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-cyan-50/30 p-6 relative">
                  
                  {/* Navigation Arrows */}
                  <div className="absolute top-1/2 left-4 right-4 flex justify-between z-10 -translate-y-1/2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-cyan-600 shadow-lg"
                    >
                      <ArrowLeftIcon className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-cyan-600 shadow-lg"
                    >
                      <ArrowRightIcon className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Close Button */}
                  <div className="flex justify-end mb-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onClose}
                      className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 shadow-lg"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Main Image */}
                  <div className="flex items-center justify-center h-64 md:h-80 mb-6">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={productImages[selectedImage]}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Image Indicators */}
                  <div className="flex justify-center space-x-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          selectedImage === index 
                            ? 'bg-cyan-600 w-6' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
                          New Arrival
                        </span>
                        <div className="flex items-center space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsFavorite(!isFavorite)}
                            className={`p-2 rounded-lg transition-colors duration-200 ${
                              isFavorite 
                                ? 'text-red-500 bg-red-50' 
                                : 'text-gray-400 hover:text-cyan-600 hover:bg-cyan-50'
                            }`}
                          >
                            <HeartIcon className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200"
                          >
                            <ShareIcon className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>

                      <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2"
                      >
                        {product.name}
                      </motion.h1>
                      
                      {/* Rating */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center space-x-2 mb-3"
                      >
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-4 h-4 ${
                                i < 4
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          4.8 (124 reviews)
                        </span>
                      </motion.div>
                    </div>

                    {/* Price */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${product.compareAt}
                      </span>
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">
                        Save ${parseInt(product.compareAt) - parseInt(product.price)}
                      </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {product.desc}
                    </motion.p>

                    {/* Features */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="grid grid-cols-2 gap-2"
                    >
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </motion.div>

                    {/* Color Selection */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">
                        Color: <span className="text-cyan-600">Dark Gray</span>
                      </h3>
                      <div className="flex space-x-3">
                        {colors.map((color, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-8 h-8 rounded-full border-2 ${
                              index === 0 
                                ? 'border-cyan-500 shadow-lg' 
                                : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Size Selection */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">
                        Size
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {sizes.map((size, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                              index === 1
                                ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                                : 'border-gray-300 text-gray-700 hover:border-cyan-300'
                            }`}
                          >
                            {size}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Quantity & Add to Cart */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                    >
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          −
                        </button>
                        <span className="w-12 text-center font-semibold text-gray-900">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Add to Cart Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAddToCart}
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 min-h-[44px]"
                      >
                        <ShoppingBagIcon className="w-5 h-5" />
                        <span>Add to Cart - ${(parseInt(product.price) * quantity).toFixed(2)}</span>
                      </motion.button>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <TruckIcon className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Free Shipping</p>
                          <p className="text-xs text-gray-600">2-3 business days</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <ShieldCheckIcon className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">2-Year Warranty</p>
                          <p className="text-xs text-gray-600">Hassle-free returns</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Stock Status */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-700 font-semibold">In Stock</span>
                        </div>
                        <span className="text-green-600 text-sm">
                          Free 2-day shipping
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;