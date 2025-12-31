import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, MapPin, Star } from 'lucide-react';

export interface TrendingProduct {
  id: string;
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  creator: {
    name: string;
    avatar: string;
  };
  reason: string;
  location?: string;
  trendingRank?: number;
  rating?: number;
  onSelect?: () => void;
  deliveryEta?: string;
  description?: string;
}

interface TrendingProductCardProps {
  product: TrendingProduct;
  onViewProduct: () => void;
  onBuyNow?: () => void;
  onFindBestPrice?: () => void;
  onFindProduct?: () => void;
}

export function TrendingProductCard({ product, onViewProduct, onBuyNow, onFindBestPrice, onFindProduct }: TrendingProductCardProps) {
  const [showActions, setShowActions] = React.useState(false);

  return (
    <motion.div
      className="backdrop-blur-[20px] backdrop-filter bg-[rgba(38,38,38,0.3)] border border-[#363641] content-stretch flex flex-col relative rounded-[24px] shrink-0 w-[280px] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Product Image */}
      <div className="relative h-[320px] w-full">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Trending Badge */}
        {product.trendingRank && (
          <div className="absolute top-3 left-3 backdrop-blur-[10px] bg-[rgba(251,146,60,0.9)] px-[10px] py-[6px] rounded-[12px] flex items-center gap-[4px]">
            <TrendingUp className="size-[14px] text-white" />
            <p className="font-['Urbanist:Medium',sans-serif] text-[11px] text-white">
              #{product.trendingRank} Trending
            </p>
          </div>
        )}
        
        {/* Rating */}
        {product.rating && (
          <div className="absolute top-3 right-3 backdrop-blur-[10px] bg-[rgba(0,0,0,0.6)] px-[8px] py-[4px] rounded-[10px] flex items-center gap-[3px]">
            <Star className="size-[12px] text-[#fbbf24] fill-[#fbbf24]" />
            <p className="font-['Urbanist:Medium',sans-serif] text-[11px] text-white">
              {product.rating}
            </p>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.8)]" />
        
        {/* Creator Info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-[10px]">
          <img 
            src={product.creator.avatar} 
            alt={product.creator.name}
            className="size-[36px] rounded-full border-2 border-white object-cover"
          />
          <div className="flex-1">
            <p className="font-['Urbanist:Medium',sans-serif] text-[13px] text-white leading-[1.2]">
              {product.creator.name}
            </p>
            <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#d0d0d4] leading-[1.2]">
              Recommended this
            </p>
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-[16px] flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Urbanist:Medium',sans-serif] text-[15px] text-[#f4f4f5] leading-[1.3] line-clamp-2">
            {product.name}
          </p>
          
          {/* Reason */}
          <div className="flex items-center gap-[6px]">
            {product.location && <MapPin className="size-[12px] text-[#7a7a83]" />}
            <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-[#7a7a83] leading-[1.2]">
              {product.reason}
            </p>
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-[8px]">
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-white">
            {product.price}
          </p>
          {product.originalPrice && (
            <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-[#7a7a83] line-through">
              {product.originalPrice}
            </p>
          )}
        </div>

        {/* Three CTAs */}
        <AnimatePresence mode="wait">
          {!showActions ? (
            <motion.button
              key="view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowActions(true)}
              className="w-full bg-[#517cd0] px-[16px] py-[10px] rounded-[12px]"
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Urbanist:Medium',sans-serif] text-[13px] text-white">
                View Product
              </p>
            </motion.button>
          ) : (
            <motion.div
              key="actions"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-[8px]"
            >
              <motion.button
                onClick={onBuyNow}
                className="w-full bg-[#22c55e] px-[14px] py-[9px] rounded-[10px] flex items-center justify-between"
                whileTap={{ scale: 0.95 }}
              >
                <p className="font-['Urbanist:Medium',sans-serif] text-[12px] text-white">
                  Buy Now
                </p>
                <p className="font-['Urbanist:SemiBold',sans-serif] text-[12px] text-white">
                  {product.price}
                </p>
              </motion.button>

              <motion.button
                onClick={onFindBestPrice}
                className="w-full bg-[rgba(251,146,60,0.2)] border border-[#fb923c] px-[14px] py-[9px] rounded-[10px]"
                whileTap={{ scale: 0.95 }}
              >
                <p className="font-['Urbanist:Medium',sans-serif] text-[12px] text-[#fb923c]">
                  Find Me Best Price
                </p>
              </motion.button>

              <motion.button
                onClick={onViewProduct}
                className="w-full bg-[rgba(81,124,208,0.2)] border border-[#517cd0] px-[14px] py-[9px] rounded-[10px]"
                whileTap={{ scale: 0.95 }}
              >
                <p className="font-['Urbanist:Medium',sans-serif] text-[12px] text-[#517cd0]">
                  View Details
                </p>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

interface TrendingProductsCarouselProps {
  products: TrendingProduct[];
  onViewProduct: (product: TrendingProduct) => void;
  onBuyNow?: (product: TrendingProduct) => void;
  onFindBestPrice?: (product: TrendingProduct) => void;
}

export function TrendingProductsCarousel({ products, onViewProduct, onBuyNow, onFindBestPrice }: TrendingProductsCarouselProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-[16px]">
        <div className="flex items-center gap-[8px]">
          <TrendingUp className="size-[20px] text-[#fb923c]" />
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-[#f4f4f5]">
            Trending Now
          </p>
        </div>
        <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-[#7a7a83]">
          in your area
        </p>
      </div>
      
      <div className="w-full overflow-x-auto no-scrollbar -mx-5 px-5">
        <div className="flex gap-[16px] w-max pb-1">
          {products.map((product) => (
            <TrendingProductCard 
              key={product.id} 
              product={product} 
              onViewProduct={() => onViewProduct(product)}
              onBuyNow={onBuyNow ? () => onBuyNow(product) : undefined}
              onFindBestPrice={onFindBestPrice ? () => onFindBestPrice(product) : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}