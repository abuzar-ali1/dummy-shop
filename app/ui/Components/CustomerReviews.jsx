import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Digital Nomad",
    rating: 5,
    text: "The build quality on these products is outstanding! I've been using the commuter backpack for 6 months now and it still looks brand new. Worth every penny!",
    avatar: "/avatars/alex.jpg",
    purchase: "Commuter Backpack"
  },
  {
    id: 2,
    name: "Sophia Lee",
    role: "Graphic Designer",
    rating: 5,
    text: "I'm absolutely in love with my everyday tote. It's the perfect size for my laptop and sketchbooks. The water-resistant feature saved my equipment during a sudden downpour!",
    avatar: "/avatars/sophia.jpg",
    purchase: "Everyday Tote"
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Marathon Runner",
    rating: 4,
    text: "These runner shoes have completely transformed my training. The cushioning is phenomenal and they're so lightweight. Only giving 4 stars because I wish they had more color options.",
    avatar: "/avatars/james.jpg",
    purchase: "Runner Shoe"
  },
  {
    id: 4,
    name: "Olivia Parker",
    role: "College Student",
    rating: 5,
    text: "As a student on a budget, I'm so impressed with the quality at this price point. The sling pouch fits all my essentials and looks so stylish. Already recommended to all my friends!",
    avatar: "/avatars/olivia.jpg",
    purchase: "Sling Pouch"
  },
  {
    id: 5,
    name: "Daniel Kim",
    role: "Tech Professional",
    rating: 5,
    text: "Fast shipping and excellent packaging. The attention to detail is remarkable - from the unboxing experience to the product itself. My new go-to for quality essentials.",
    avatar: "/avatars/daniel.jpg",
    purchase: "Multiple Items"
  },
  {
    id: 6,
    name: "Maya Patel",
    role: "Yoga Instructor",
    rating: 5,
    text: "The customer service team went above and beyond to help me with sizing questions. The products are even better than described and have held up beautifully through daily use.",
    avatar: "/avatars/maya.jpg",
    purchase: "Activewear Set"
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <StarIcon className="w-4 h-4 mr-2" />
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our customers have to say about their DummyShop experience.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <motion.div
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-50 rounded-bl-full"></div>
              
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                  <p className="text-xs text-cyan-600 font-medium mt-1">
                    Purchased: {review.purchase}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-50 rounded-bl-full"></div>
            
            {/* Rating Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-gray-700 mb-6 leading-relaxed">
              "{reviews[currentIndex].text}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                {reviews[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{reviews[currentIndex].name}</h4>
                <p className="text-sm text-gray-500">{reviews[currentIndex].role}</p>
                <p className="text-xs text-cyan-600 font-medium mt-1">
                  Purchased: {reviews[currentIndex].purchase}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevReview}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-cyan-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextReview}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "4.8/5", label: "Average Rating" },
            { number: "98%", label: "Recommend Us" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;