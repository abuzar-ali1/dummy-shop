"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  ShoppingBagIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';


const CartSidebar = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const sampleCart = [
      {
        id: 1,
        name: "Everyday Tote Bag",
        price: 49,
        image: "/images/purse.png",
        quantity: 2,
        color: "Dark Gray",
        size: "Medium"
      },
      {
        id: 2,
        name: "Premium Runner Shoes",
        price: 89,
        image: "/images/shoes.png",
        quantity: 1,
        color: "Black",
        size: "42"
      },
      {
        id: 3,
        name: "Commuter Backpack Pro",
        price: 129,
        image: "/images/newbag.png",
        quantity: 1,
        color: "Navy Blue",
        size: "Large"
      },
      {
        id: 4,
        name: "Leather Sling Pouch",
        price: 29,
        image: "/images/pouch.png",
        quantity: 3,
        color: "Brown",
        size: "Small"
      },
      {
        id: 5,
        name: "Urban Hoodie Classic",
        price: 69,
        image: "/images/jacket.png",
        quantity: 1,
        color: "Charcoal",
        size: "Large"
      }
    ];
    setCartItems(sampleCart);
  }, [isOpen]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Higher z-index to overlay everything */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/80 w-full h-screen backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          
          {/* Sidebar - Full height with higher z-index */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-gray-900 shadow-2xl z-[101] flex flex-col border-l border-gray-700"
          >
            
            {/* Header - Fixed height */}
            <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-gray-700 bg-gray-900">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <ShoppingBagIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                  <p className="text-sm text-gray-400">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-gray-700"
              >
                <XMarkIcon className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Cart Items - Scrollable Area with flexible height */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="h-full flex items-center justify-center px-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                      <ShoppingBagIcon className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
                    <p className="text-gray-400 mb-6">Start shopping to add items to your cart</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-colors border border-cyan-500/30"
                    >
                      Continue Shopping
                    </motion.button>
                  </div>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800 rounded-xl border border-gray-700 p-4 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex space-x-4">
                        {/* Product Image - Fixed Size */}
                        <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center p-2 border border-gray-600">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-white truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1">
                            {item.color} • {item.size}
                          </p>
                          
                          {/* Price and Quantity Row */}
                          <div className="flex items-center justify-between mt-3">
                            <p className="text-lg font-bold text-cyan-400">
                              ${item.price}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-3">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 hover:text-white transition-colors border border-gray-600"
                              >
                                <MinusIcon className="w-3 h-3" />
                              </motion.button>
                              <span className="w-6 text-center font-semibold text-white text-sm">
                                {item.quantity}
                              </span>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 hover:text-white transition-colors border border-gray-600"
                              >
                                <PlusIcon className="w-3 h-3" />
                              </motion.button>
                            </div>
                          </div>

                          {/* Item Total and Remove */}
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm text-gray-400">
                              Total: <span className="text-cyan-400 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeItem(item.id)}
                              className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium flex items-center space-x-1"
                            >
                              <TrashIcon className="w-4 h-4" />
                              <span>Remove</span>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer - Fixed at bottom */}
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-shrink-0 border-t border-gray-700 p-6 space-y-4 bg-gray-800/50"
              >
                {/* Progress Bar for Free Shipping */}
                {subtotal < 50 && (
                  <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cyan-400 font-medium">Free shipping on orders over $50</span>
                      <span className="text-gray-400">${subtotal.toFixed(2)} / $50</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-cyan-400 mt-2">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                {/* Summary */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-semibold text-white">
                      {shipping === 0 ? (
                        <span className="text-green-400">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-3">
                    <span className="text-white">Total</span>
                    <span className="text-cyan-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 border border-cyan-500/30 flex items-center justify-center space-x-2"
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