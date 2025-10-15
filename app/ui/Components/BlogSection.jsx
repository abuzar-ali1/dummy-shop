import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Capsule Wardrobe Essentials",
      excerpt: "Learn how to build a minimalist wardrobe with versatile pieces that work for every occasion and season.",
      image: "/blog/capsule-wardrobe.jpg",
      category: "Style Guide",
      readTime: "6 min read",
      date: "Oct 15, 2025",
      author: "Emma Wilson",
      views: "2.4K",
      likes: 128
    },
    {
      id: 2,
      title: "Sustainable Fashion: How to Build an Eco-Friendly Closet",
      excerpt: "Discover practical tips for making conscious fashion choices that benefit both your style and the planet.",
      image: "/blog/sustainable-fashion.jpg",
      category: "Sustainability",
      readTime: "8 min read",
      date: "Oct 12, 2025",
      author: "James Chen",
      views: "3.1K",
      likes: 156
    },
    {
      id: 3,
      title: "5 Work From Home Outfits That Boost Productivity",
      excerpt: "Stay comfortable and professional while working from home with these stylish yet practical outfit ideas.",
      image: "/blog/wfh-outfits.jpg",
      category: "Lifestyle",
      readTime: "5 min read",
      date: "Oct 8, 2025",
      author: "Sophia Martinez",
      views: "4.2K",
      likes: 203
    },
    {
      id: 4,
      title: "The Science of Comfort: What Makes Perfect Everyday Shoes",
      excerpt: "Exploring the technology and design behind creating shoes that feel as good as they look all day long.",
      image: "/blog/shoe-comfort.jpg",
      category: "Product Deep Dive",
      readTime: "7 min read",
      date: "Oct 5, 2025",
      author: "Dr. Michael Roberts",
      views: "1.8K",
      likes: 94
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
      y: 40,
      scale: 0.95
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
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-white text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm border border-gray-200">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Latest Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Style Inspiration & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"> Expert Tips</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover fashion guides, styling tips, and industry insights to help you make the most of your wardrobe.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  variants={imageVariants}
                  className="w-full h-full"
                >
                  {/* Replace with actual Image component */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-lg mb-2 mx-auto flex items-center justify-center">
                        <CalendarIcon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <span className="text-sm text-cyan-800 font-medium">Blog Image</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold flex items-center"
                  >
                    Read Article
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <EyeIcon className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <HeartIcon className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Never Miss a Style Tip
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Join our weekly newsletter and get exclusive style guides, early access to new collections, 
            and members-only discounts delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
            </div>
            <motion.button
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            No spam, unsubscribe at any time
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;