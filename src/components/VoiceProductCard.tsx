import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Product } from '../utils/chatThreadsData';

interface VoiceProductCardProps {
  product: Product;
  index: number;
  onProductClick?: (product: Product) => void;
}

export function VoiceProductCard({ product, index, onProductClick }: VoiceProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="relative shrink-0 w-[280px] cursor-pointer"
      onClick={() => onProductClick?.(product)}
    >
      {/* Card Container */}
      <div className="relative rounded-[20px] overflow-hidden backdrop-blur-[20px] border border-white/10">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "linear-gradient(135deg, rgba(29, 29, 29, 0.85) 0%, rgba(20, 20, 20, 0.95) 100%)" 
          }}
        />
        
        {/* Inner Shadow */}
        <div className="absolute inset-0 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.1)]" />

        {/* Content */}
        <div className="relative p-[16px] flex flex-col gap-[12px]">
          {/* Product Image */}
          <div className="relative w-full h-[160px] rounded-[12px] overflow-hidden bg-[#0a0a0a]">
            <img 
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Discount Badge */}
            {discount > 0 && (
              <div className="absolute top-[8px] right-[8px] backdrop-blur-[10px] px-[10px] py-[4px] rounded-full bg-gradient-to-r from-[#0ea5e9]/90 to-[#3b82f6]/90 border border-white/20">
                <p className="text-white text-[11px] font-semibold tracking-wide">
                  {discount}% OFF
                </p>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-[8px]">
            {/* Product Name */}
            <h3 className="text-white text-[15px] font-medium leading-[1.3] line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-[6px]">
              <div className="flex items-center gap-[2px]">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-yellow-400 text-[13px] font-medium">
                  {product.rating}
                </span>
              </div>
              <span className="text-[#71717a] text-[12px]">
                ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-[#a1a1aa] text-[12px] leading-[1.4] line-clamp-2">
                {product.description}
              </p>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-[6px] mt-[4px]">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <div 
                    key={idx}
                    className="px-[8px] py-[3px] rounded-full bg-white/5 border border-white/10"
                  >
                    <p className="text-[#d4d4d8] text-[10px] font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Price Section */}
            <div className="flex items-baseline gap-[8px] mt-[8px]">
              <p className="text-white text-[20px] font-semibold">
                ₹{product.price.toLocaleString()}
              </p>
              {product.originalPrice && (
                <p className="text-[#71717a] text-[14px] line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </p>
              )}
            </div>

            {/* CTA Button */}
            <button className="w-full mt-[8px] px-[16px] py-[10px] rounded-[12px] bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] hover:from-[#0284c7] hover:to-[#2563eb] transition-all duration-200 border border-white/20 backdrop-blur-[10px]">
              <span className="text-white text-[13px] font-semibold tracking-wide">
                View Details
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface VoiceProductGridProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export function VoiceProductGrid({ products, onProductClick }: VoiceProductGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full px-[20px] mb-[20px]"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-[16px]"
      >
        <p className="text-white/60 text-[13px] font-medium tracking-wide uppercase">
          Recommended for you
        </p>
      </motion.div>

      {/* Horizontal Scrollable Product Grid */}
      <div 
        className="flex gap-[16px] overflow-x-auto pb-[8px] snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {products.map((product, index) => (
          <div key={product.id} className="snap-start">
            <VoiceProductCard product={product} index={index} onProductClick={onProductClick} />
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </motion.div>
  );
}