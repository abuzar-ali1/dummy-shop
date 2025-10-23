// components/ToastProvider.jsx
"use client";
import { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);

  const showComingSoon = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <ToastContext.Provider value={{ showComingSoon }}>
      {children}
      
      {/* Toast Component */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-4 right-4 z-50 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm border border-cyan-500/20"
          >
            <WrenchScrewdriverIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Coming Soon</p>
              <p className="text-sm text-gray-300">Feature is under development</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

// Hook to use toast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};