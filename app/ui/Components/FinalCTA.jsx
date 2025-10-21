import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowPathIcon,
  StarIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

const FinalCTA = () => {
  const trustFeatures = [
    {
      icon: ShieldCheckIcon,
      text: "Secure Payment",
      description: "256-bit SSL encryption"
    },
    {
      icon: TruckIcon,
      text: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: ArrowPathIcon,
      text: "Easy Returns",
      description: "30-day guarantee"
    },
    {
      icon: StarIcon,
      text: "5-Star Rated",
      description: "By 10,000+ customers"
    }
  ];

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
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-cyan-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-20 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <LockClosedIcon className="w-4 h-4 mr-2" />
              Secure Checkout
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Your Style
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Journey Starts
              </span>
              Here
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Join thousands of satisfied customers who've transformed their everyday style with DummyShop. 
              Your perfect look is just a click away.
            </motion.p>

            {/* Trust Features */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{feature.text}</div>
                    <div className="text-gray-400 text-xs">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center group transition-colors duration-300"
              >
                Start Shopping Now
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Browse Collections
              </motion.button>
            </motion.div>

            {/* Security Badges */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 opacity-80"
            >
              <div className="text-xs text-gray-400">Accepted Payment Methods:</div>
              <div className="flex space-x-2">
                {['Visa', 'MC', 'PayPal', 'Apple Pay'].map((method) => (
                  <div key={method} className="bg-white/10 rounded px-2 py-1 text-xs text-gray-300">
                    {method}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 relative z-10"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 text-center">
                {/* Product Images Floating */}
                <div className="relative h-48">
                  <motion.div
                    className="absolute top-4 left-4 w-24 h-24 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center"
                    animate={floatingAnimation}
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 bg-cyan-500 rounded mx-auto mb-1"></div>
                      <span className="text-xs text-gray-600">Tote</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-8 right-6 w-20 h-20 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center"
                    animate={{
                      ...floatingAnimation,
                      transition: { ...floatingAnimation.transition, delay: 1 }
                    }}
                  >
                    <div className="text-center">
                      <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-1"></div>
                      <span className="text-xs text-gray-600">Shoes</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-white rounded-xl shadow-xl border border-gray-200 flex items-center justify-center"
                    animate={{
                      ...floatingAnimation,
                      transition: { ...floatingAnimation.transition, delay: 2 }
                    }}
                  >
                    <div className="text-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mx-auto mb-2"></div>
                      <span className="text-xs text-gray-600">Backpack</span>
                    </div>
                  </motion.div>
                </div>

                {/* Success Message */}
                <div className="mt-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Order Complete!</h3>
                  <p className="text-gray-600 text-sm">
                    Your style upgrade is on its way. <br />Join 10,000+ happy customers today.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "24/7", label: "Customer Support" },
              { number: "100%", label: "Satisfaction Guarantee" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-white"
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;