"use client";
import "../../globals.css";
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ChevronRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.h3 
              className="text-2xl font-bold mb-4 font-us"
              whileHover={{ scale: 1.05 }}
            >
              DummyShop
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted destination for modern essentials and everyday style. 
              Quality products, fast delivery, and exceptional service.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Shop</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Men', 'Women', 'Accessories', 'Sale'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Info', 'Returns', 'Size Guide', 'FAQs', 'Privacy Policy'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new products and upcoming sales
            </p>
            
            <motion.form 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-gray-400">
                <PhoneIcon className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <EnvelopeIcon className="w-4 h-4 mr-3" />
                <span>hello@dummyshop.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPinIcon className="w-4 h-4 mr-3 mt-1" />
                <span>123 Commerce St, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-800 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 DummyShop. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              {['Visa', 'Mastercard', 'PayPal', 'ApplePay'].map((method) => (
                <motion.div
                  key={method}
                  className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-medium text-gray-400"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                >
                  {method[0]}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;