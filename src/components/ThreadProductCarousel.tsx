import React from 'react';
import { motion } from 'motion/react';
import { Star, Eye } from 'lucide-react';
import { Product } from '../utils/chatThreadsData';

interface ThreadProductCarouselProps {
  products: Product[];
  onProductSelect?: (product: Product) => void;
}

export function ThreadProductCarousel({ products, onProductSelect }: ThreadProductCarouselProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 -mx-4 px-4">
      <div className="flex gap-3 min-w-max">
        {products.map((product, index) => (
          <ThreadProductCard 
            key={product.id} 
            product={product} 
            index={index}
            onSelect={() => onProductSelect?.(product)}
          />
        ))}
      </div>
    </div>
  );
}

interface ThreadProductCardProps {
  product: Product;
  index: number;
  onSelect?: () => void;
}

function ThreadProductCard({ product, index, onSelect }: ThreadProductCardProps) {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onSelect}
      className="relative cursor-pointer group"
      whileTap={{ scale: 0.98 }}
    >
      <div 
        className="relative overflow-hidden rounded-[16px] w-[200px]"
        style={{ 
          backgroundImage: "linear-gradient(257.089deg, rgba(51, 51, 51, 0.4) 3.3598%, rgba(51, 51, 51, 0.2) 94.67%)" 
        }}
      >
        <div className="absolute border border-[rgba(53,53,53,0.6)] inset-0 pointer-events-none rounded-[16px] group-hover:border-[rgba(100,100,100,0.8)] transition-colors" />
        
        {/* Image */}
        <div className="relative w-full h-[180px] bg-[#1a1a1a] overflow-hidden rounded-t-[16px]">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {discountPercent > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-[6px]">
              {discountPercent}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Product Name */}
          <h3 className="text-[#f4f4f5] text-[13px] font-medium leading-[1.3] mb-2 line-clamp-2 min-h-[33px]">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="size-3 fill-yellow-400 text-yellow-400" />
            <span className="text-[11px] text-[#f4f4f5] font-medium">
              {product.rating}
            </span>
            <span className="text-[11px] text-[#a1a1aa]">
              ({product.reviews.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#f4f4f5] text-[16px] font-bold">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[#a1a1aa] text-[12px] line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {product.features.slice(0, 2).map((feature, idx) => (
                <span 
                  key={idx}
                  className="text-[9px] px-2 py-0.5 rounded-full bg-[#2a2a2a] text-[#a1a1aa] border border-[#3a3a3a]"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Action Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 px-3 rounded-[10px] bg-gradient-to-r from-purple-600 to-purple-500 text-white text-[11px] font-medium hover:from-purple-700 hover:to-purple-600 transition-all flex items-center justify-center gap-1.5"
          >
            <Eye className="size-3" />
            <span>View Product</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}