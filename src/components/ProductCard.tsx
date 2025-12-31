import React from 'react';
import { motion } from 'motion/react';
import { Clock, Truck, Star, Zap } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  deliveryEta: string;
  reason: string;
  rating?: number;
  isFastest?: boolean;
  isBestValue?: boolean;
  isLocalStore?: boolean;
  onSelect?: () => void;
}

export function ProductCard({
  image,
  name,
  price,
  originalPrice,
  deliveryEta,
  reason,
  rating,
  isFastest,
  isBestValue,
  isLocalStore,
  onSelect
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onSelect}
      className="backdrop-blur-[20px] bg-[rgba(38,38,38,0.3)] border border-[#333] rounded-[20px] overflow-hidden cursor-pointer hover:bg-[rgba(38,38,38,0.5)] transition-all"
    >
      {/* Product Image */}
      <div className="relative w-full h-[180px] bg-[#1a1a1a]">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isFastest && (
            <div className="backdrop-blur-[10px] bg-[rgba(251,101,124,0.9)] px-2 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-3 h-3 text-white" />
              <span className="text-[10px] text-white font-medium">Fastest</span>
            </div>
          )}
          {isBestValue && (
            <div className="backdrop-blur-[10px] bg-[rgba(34,197,94,0.9)] px-2 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 text-white" />
              <span className="text-[10px] text-white font-medium">Best Value</span>
            </div>
          )}
          {isLocalStore && (
            <div className="backdrop-blur-[10px] bg-[rgba(59,130,246,0.9)] px-2 py-1 rounded-full">
              <span className="text-[10px] text-white font-medium">Local Store</span>
            </div>
          )}
        </div>

        {/* Rating */}
        {rating && (
          <div className="absolute top-2 right-2 backdrop-blur-[10px] bg-black/40 px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-[11px] text-white font-medium">{rating}</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-[14px] text-[#fcfcfc] font-medium leading-[1.3] line-clamp-2 mb-2">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[18px] text-white font-semibold">{price}</span>
          {originalPrice && (
            <span className="text-[13px] text-[#999] line-through">{originalPrice}</span>
          )}
        </div>

        {/* Delivery */}
        <div className="flex items-center gap-1 mb-2">
          <Truck className="w-3.5 h-3.5 text-[#999]" />
          <span className="text-[12px] text-[#b9b9b9]">{deliveryEta}</span>
        </div>

        {/* Reason */}
        <div className="px-2 py-1 bg-[rgba(251,146,60,0.15)] border border-[rgba(251,146,60,0.3)] rounded-lg">
          <p className="text-[11px] text-[#fb926c] leading-[1.3]">{reason}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Horizontal scrollable product list for chat
interface ProductCarouselProps {
  products: ProductCardProps[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar -mx-5 px-5">
      <div className="flex gap-3 pb-2 w-max">
        {products.map((product, index) => (
          <div key={index} className="w-[240px] flex-shrink-0">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
