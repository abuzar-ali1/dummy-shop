import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import BestSellerProductCard from './BestSellerProductCard';

const BestSellersSection = () => {

const bestSellerProducts = [
    {
      id: 1,
      name: "Classic Hoodie",
      description: "Soft, premium cotton blend for everyday comfort.",
      price: 59,
      originalPrice: 75,
      rating: 4.5,
      reviewCount: 128,
      unitsSold: "200+",
      src: "/images/hoddie.png" 
    },
    {
      id: 2,
      name: "Travel Backpack",
      description: "Smart organization for work and weekend trips.",
      price: 139,
      originalPrice: 165,
      rating: 5,
      reviewCount: 89,
      unitsSold: "150+",
      src: "/images/travelbag.png" 
    },
    {
      id: 3,
      name: "Premium Sneakers",
      description: "All-day comfort with modern minimalist design.",
      price: 99,
      originalPrice: 120,
      rating: 4.8,
      reviewCount: 204,
      unitsSold: "300+",
      src: "/images/sneaker.png" 
    },
    {
      id: 4,
      name: "Weekend Tote",
      description: "Spacious and stylish for your daily essentials.",
      price: 45,
      originalPrice: 60,
      rating: 4.3,
      reviewCount: 76,
      unitsSold: "120+",
      src: "/images/tote.png" 
    },
    {
      id: 5,
      name: "Wireless Earbuds Pro",
      description: "Crystal clear sound with 30hr battery life and noise cancellation.",
      price: 129,
      originalPrice: 159,
      rating: 4.7,
      reviewCount: 245,
      unitsSold: "400+",
      src: "/images/airpodes.png" 
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "Track steps, heart rate, and sleep with precision.",
      price: 89,
      originalPrice: 120,
      rating: 4.4,
      reviewCount: 167,
      unitsSold: "280+",
      src: "/images/trackerwatch.png" 
    },
    {
      id: 7,
      name: "Leather Wallet",
      description: "Slim design with RFID protection and multiple card slots.",
      price: 65,
      originalPrice: 85,
      rating: 4.6,
      reviewCount: 98,
      unitsSold: "190+",
      src: "/images/wallet.png" 
    },
    {
      id: 8,
      name: "Desk Lamp Smart",
      description: "Adjustable brightness with wireless charging base.",
      price: 79,
      originalPrice: 99,
      rating: 4.8,
      reviewCount: 134,
      unitsSold: "220+",
      src: "/images/lamp.png"
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

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center bg-[#0f1724] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          <StarIcon className="w-4 h-4 mr-2" />
          Customer Favorites
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Top picks loved by our community
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the most popular items with rave reviews from thousands of satisfied customers.
        </p>
      </motion.div>

      {/* Products Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {bestSellerProducts.map((product) => (
          <BestSellerProductCard
            key={product.id} 
            product={product} 
            src={product.src}
            variant="bestseller" 
          />
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium">
          Shop all best sellers
        </button>
      </motion.div>
    </section>
  );
};

export default BestSellersSection;