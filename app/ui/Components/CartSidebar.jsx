"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  ShoppingBagIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeItem } from '../../store/slices/cartSlice';
import { useState, useEffect } from 'react';

const CartSidebar = ({ isOpen, onClose }) => {
  const cartItems = useSelector(state => state.cart.cart)
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const quantityVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.3
      }
    }
  };

  const priceVariants = {
    update: {
      scale: [1, 1.1, 1],
      color: ["#FFFFFF", "#22d3ee", "#FFFFFF"],
      transition: {
        duration: 0.4
      }
    }
  };

  const progressBarVariants = {
    initial: { width: "0%" },
    animate: { 
      width: `${Math.min((subtotal / 50) * 100, 100)}%`,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleIncrement = (item) => {
    dispatch(increment(item.id));
  };

  const handleDecrement = (item) => {
    dispatch(decrement(item.id));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
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
            className="fixed inset-0 bg-gray-900/80 w-full h-screen backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-gray-900 shadow-2xl z-[101] flex flex-col border-l border-gray-700"
          >
            
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gray-900">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center"
                >
                  <ShoppingBagIcon className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <div>
                  <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                  <motion.p 
                    key={cartItems.length}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-sm text-gray-400"
                  >
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                  </motion.p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-gray-700"
              >
                <XMarkIcon className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="h-full flex items-center justify-center px-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                      <ShoppingBagIcon className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
                    <p className="text-gray-400 mb-6">Start shopping to add items to your cart</p>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-colors border border-cyan-500/30"
                    >
                      Continue Shopping
                    </motion.button>
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="p-4 space-y-3"
                >
                  <AnimatePresence mode="popLayout">
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        layout
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover={{ 
                          scale: 1.02,
                          borderColor: "rgba(6, 182, 212, 0.3)"
                        }}
                        className="bg-gray-800 rounded-xl border border-gray-700 px-4 py-2 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="flex space-x-4">
                          {/* Product Image */}
                          <motion.div
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center p-2 border border-gray-600"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                          </motion.div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-white truncate">
                              {item.name}
                            </h3>
                            
                            {/* Price and Quantity Row */}
                            <div className="flex items-center justify-between mt-1">
                              <motion.p 
                                key={item.price}
                                variants={priceVariants}
                                initial="update"
                                animate="update"
                                className="text-lg font-bold text-cyan-400"
                              >
                                ${item.price}
                              </motion.p>

                              {/* Quantity Controls */}
                              <div className="flex items-center space-x-3">
                                <motion.button
                                  whileHover={{ scale: 1.1, backgroundColor: "rgba(55, 65, 81, 1)" }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleDecrement(item)}
                                  className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 hover:text-white transition-colors border border-gray-600"
                                >
                                  <MinusIcon className="w-3 h-3" />
                                </motion.button>
                                
                                <motion.span
                                  key={item.quantity}
                                  variants={quantityVariants}
                                  initial="pulse"
                                  animate="pulse"
                                  className="w-6 text-center font-semibold text-white text-sm"
                                >
                                  {item.quantity}
                                </motion.span>
                                
                                <motion.button
                                  whileHover={{ scale: 1.1, backgroundColor: "rgba(55, 65, 81, 1)" }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleIncrement(item)}
                                  className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 hover:text-white transition-colors border border-gray-600"
                                >
                                  <PlusIcon className="w-3 h-3" />
                                </motion.button>
                              </div>
                            </div>

                            {/* Item Total and Remove */}
                            <div className="flex items-center justify-between mt-2">
                              <motion.span 
                                key={item.price * item.quantity}
                                variants={priceVariants}
                                initial="update"
                                animate="update"
                                className="text-sm text-gray-400"
                              >
                                Total: <span className="text-cyan-400 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                              </motion.span>
                              
                              <motion.button
                                whileHover={{ 
                                  scale: 1.1, 
                                  backgroundColor: "rgba(254, 202, 202, 0.1)" 
                                }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleRemove(item)}
                                className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium flex items-center space-x-1 px-2 py-1 rounded"
                              >
                                <TrashIcon className="w-4 h-4" />
                                <span>Remove</span>
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-shrink-0 border-t border-gray-700 px-6 py-3 space-y-2 bg-gray-800/50"
              >
              

                {/* Progress Bar for Free Shipping */}
                {subtotal < 50 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gray-800 rounded-lg p-3 border border-gray-700"
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cyan-400 font-medium">Free shipping on orders over $50</span>
                      <motion.span
                        key={subtotal}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-gray-400"
                      >
                        ${subtotal.toFixed(2)} / $50
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        variants={progressBarVariants}
                        initial="initial"
                        animate="animate"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                    <motion.p 
                      key={50 - subtotal}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-cyan-400 mt-2"
                    >
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </motion.p>
                  </motion.div>
                )}

                {/* Summary */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <motion.span
                      key={subtotal}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="font-semibold text-white"
                    >
                      ${subtotal.toFixed(2)}
                    </motion.span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <motion.span
                      key={shipping}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="font-semibold text-white"
                    >
                      {shipping === 0 ? (
                        <span className="text-green-400">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </motion.span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-3">
                    <span className="text-white">Total</span>
                    <motion.span
                      key={total}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-cyan-400"
                    >
                      ${total.toFixed(2)}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.3), 0 10px 10px -5px rgba(6, 182, 212, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 border border-cyan-500/30 flex items-center justify-center space-x-2"
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;