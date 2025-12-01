import { motion } from 'framer-motion';
import "../../globals.css";

import { 
  TruckIcon, 
  ShieldCheckIcon, 
  ArrowPathIcon, 
  HeartIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon
} from '@heroicons/react/24/outline';
import FillHoverButton from './FillHoverButton';
import { useComingSoon } from '../hooks/useComingSoon';

const WhyChooseUs = () => {
  const {handleComingSoon} = useComingSoon;
  const features = [
    {
      icon: TruckIcon,
      title: "Fast & Free Shipping",
      description: "Free 2-day delivery on all orders over $50. Track your package in real-time.",
      stat: "1-2 Days",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality Guaranteed",
      description: "Every product is rigorously tested and backed by our 2-year warranty.",
      stat: "2-Year Warranty",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ArrowPathIcon,
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days for a full refund, no questions asked.",
      stat: "30 Days",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HeartIcon,
      title: "Customer First",
      description: "24/7 support and personalized recommendations from our style experts.",
      stat: "24/7 Support",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Style Advice",
      description: "Free personal styling sessions with our fashion experts via video call.",
      stat: "Free Service",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: GiftIcon,
      title: "Loyalty Rewards",
      description: "Earn points with every purchase and get exclusive members-only discounts.",
      stat: "Rewards Program",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center  bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShieldCheckIcon className="w-4 h-4 mr-2" />
            Why Shop With Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The&nbsp;
            <span className='text-3xl md:text-4xl font-us lg:text-5xl font-bold text-gray-900'>DummyShop</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"> Difference</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're not just another store. We're your partners in style, committed to exceptional 
            quality, service, and experiences that make shopping enjoyable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon with Gradient Background */}
              <motion.div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 relative overflow-hidden`}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-white opacity-10"></div>
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Stat Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                {feature.stat}
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-cyan-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust DummyShop for quality, style, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
              onClick={handleComingSoon}
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop New Arrivals
              </motion.button>
              <FillHoverButton>
                Contact Our Stylists
              </FillHoverButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;