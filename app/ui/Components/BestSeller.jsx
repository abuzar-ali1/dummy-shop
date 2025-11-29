import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import BestSellerProductCard from './BestSellerProductCard';
import FillHoverButton from './FillHoverButton';
import { bestSellerProducts } from '@/data/products';


const BestSellersSection = () => {

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
        <FillHoverButton>
          Shop all best sellers
        </FillHoverButton>
      </motion.div>
    </section>
  );
};

export default BestSellersSection;