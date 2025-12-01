import { motion } from 'framer-motion';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { addToCart } from '@/app/store/slices/cartSlice';
import { useDispatch } from 'react-redux';

// best seller product card
const BestSellerProductCard = ({ 
  product, 
  variant = "default" 
}) => {
  const isNewArrival = variant === "new";
  const isBestSeller = variant === "bestseller";
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
     dispatch(addToCart(item));
  }
  return (
    <motion.div
      className={`bg-white rounded-lg overflow-hidden ${
        isNewArrival 
          ? 'border border-gray-100 shadow-sm' 
          : 'shadow-md hover:shadow-lg'
      } transition-all duration-300 ${
        isBestSeller ? 'hover:scale-[1.02]' : ''
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="h-64 w-full relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={product.image}
            alt="Productt image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </motion.div>
        
        {/* Badges */}
        {isNewArrival && (
          <div className="absolute top-3 left-3 bg-cyan-50 text-cyan-600 px-2 py-1 rounded-full text-xs font-medium">
            New
          </div>
        )}
        
        {isBestSeller && (
          <div className="absolute top-3 right-3 bg-[#0f1724] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <StarIcon className="w-3 h-3 mr-1" />
            Best Seller
          </div>
        )}
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        {/* Rating for Best Sellers */}
        {isBestSeller && (
          <div className="flex items-center mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon 
                  key={star}
                  className={`w-4 h-4 ${
                    star <= product.rating 
                      ? 'text-yellow-400' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviewCount} reviews)
            </span>
          </div>
        )}
        
        {/* Sales Info for Best Sellers */}
        {isBestSeller && product.unitsSold && (
          <div className="text-xs text-gray-500 mb-2">
            {product.unitsSold} bought this week
          </div>
        )}
        
        {/* Price */}
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm ml-2">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        {/* CTA Button */}
        <motion.button
          onClick={()=>handleAddToCart(product)}
          className={`w-full py-2 rounded-md flex items-center justify-center ${
            isBestSeller 
              ? 'bg-[#0f1724] text-white hover:bg-gray-800' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          } transition-colors duration-200 font-medium`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {isBestSeller ? (
            <>
              <ShoppingBagIcon className="w-4 h-4 mr-2" />
              Add to bag
            </>
          ) : (
            'View product'
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};


export default BestSellerProductCard;