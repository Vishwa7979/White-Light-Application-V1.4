import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, MapPin, Clock, Package, TrendingUp, ChevronRight } from 'lucide-react';
// Local interface to avoid dependency on mock data types that might change
interface ProductDetail {
  id: string;
  name: string;
  price: number | string;
  originalPrice?: number | string;
  image: string;
  rating?: number;
  reviews?: number;
  description?: string;
  features?: string[];
  creator?: {
    name: string;
    avatar: string;
  };
  deliveryEta?: string;
  location?: string;
}

interface ProductDetailExpandedProps {
  product: ProductDetail;
  onClose: () => void;
  onQuickBuy?: (product: any) => void;
  onFindBestPrice?: (product: any) => void;
  // Legacy support for old interface
  onBuyNow?: () => void;
}

export function ProductDetailExpanded({ product, onClose, onQuickBuy, onFindBestPrice, onBuyNow }: ProductDetailExpandedProps) {
  // Format prices
  // Format prices
  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return `₹${price.toLocaleString('en-IN')}`;
  };
  const priceStr = formatPrice(product.price);
  const originalPriceStr = product.originalPrice ? formatPrice(product.originalPrice) : undefined;

  // Calculate discount percentage
  const getPriceValue = (p: number | string) => {
    if (typeof p === 'number') return p;
    // Remove non-numeric characters except dot
    return parseFloat(p.replace(/[^0-9.]/g, ''));
  };

  const currentPriceVal = getPriceValue(product.price);
  const originalPriceVal = product.originalPrice ? getPriceValue(product.originalPrice) : 0;

  const discountPercentage = originalPriceVal
    ? Math.round(((originalPriceVal - currentPriceVal) / originalPriceVal) * 100)
    : 0;

  const sellerOffers = [
    {
      id: '1',
      seller: 'TechMart Pro',
      price: priceStr,
      distance: '0.8 km',
      deliveryTime: '15 min',
      rating: 4.8,
      badge: 'Fastest'
    },
    {
      id: '2',
      seller: 'Digital Hub',
      price: originalPriceStr || priceStr,
      distance: '1.2 km',
      deliveryTime: '30 min',
      rating: 4.6,
      badge: 'Trusted'
    },
    {
      id: '3',
      seller: 'Express Electronics',
      price: '₹87,999',
      distance: '2.5 km',
      deliveryTime: 'Today',
      rating: 4.7,
      badge: 'Best Price'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#1a1a1a] rounded-t-[32px] overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="relative shrink-0">
          {/* Product Image */}
          <div className="relative h-[280px] w-full">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 size-[36px] bg-black/60 backdrop-blur-[10px] rounded-full flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <X className="size-[20px] text-white" />
            </motion.button>

            {/* Rating Badge */}
            {product.rating && (
              <div className="absolute top-4 left-4 backdrop-blur-[10px] bg-[rgba(0,0,0,0.6)] px-[10px] py-[6px] rounded-[12px] flex items-center gap-[4px]">
                <Star className="size-[14px] text-[#fbbf24] fill-[#fbbf24]" />
                <p className="font-['Urbanist:Medium',sans-serif] text-[13px] text-white">
                  {product.rating}
                </p>
                {product.reviews && (
                  <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#d0d0d4]">
                    ({product.reviews})
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-[20px] pb-[120px] no-scrollbar">
          {/* Product Info */}
          <div className="py-[20px] border-b border-[#363641]">
            <h2 className="font-['Urbanist:SemiBold',sans-serif] text-[20px] text-white leading-[1.3] mb-[12px]">
              {product.name}
            </h2>

            {/* Creator */}
            {product.creator && (
              <div className="flex items-center gap-[8px] mb-[16px]">
                <img
                  src={product.creator.avatar}
                  alt={product.creator.name}
                  className="size-[32px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-['Urbanist:Medium',sans-serif] text-[13px] text-[#f4f4f5]">
                    {product.creator.name}
                  </p>
                  <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
                    Recommended by
                  </p>
                </div>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-[12px] mb-[16px]">
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[28px] text-white">
                {priceStr}
              </p>
              {product.originalPrice && (
                <>
                  <p className="font-['Urbanist:Regular',sans-serif] text-[16px] text-[#7a7a83] line-through">
                    {originalPriceStr}
                  </p>
                  <div className="bg-[rgba(34,197,94,0.2)] px-[8px] py-[4px] rounded-[8px]">
                    <p className="font-['Urbanist:Medium',sans-serif] text-[12px] text-[#22c55e]">
                      Save {discountPercentage}%
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Delivery Info */}
            {product.deliveryEta && (
              <div className="flex items-center gap-[12px]">
                <div className="flex items-center gap-[6px]">
                  <Package className="size-[16px] text-[#22c55e]" />
                  <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-[#f4f4f5]">
                    {product.deliveryEta}
                  </p>
                </div>
                {product.location && (
                  <div className="flex items-center gap-[6px]">
                    <MapPin className="size-[14px] text-[#7a7a83]" />
                    <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-[#7a7a83]">
                      {product.location}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <div className="py-[20px] border-b border-[#363641]">
              <h3 className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white mb-[12px]">
                Product Details
              </h3>
              <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-[#a1a1aa] leading-[1.6]">
                {product.description || 'Experience cutting-edge technology with this premium product. Perfect for professionals and enthusiasts alike. Features include advanced capabilities, sleek design, and unmatched performance.'}
              </p>
            </div>
          )}

          {/* Seller Comparison */}
          <div className="py-[20px]">
            <div className="flex items-center justify-between mb-[16px]">
              <h3 className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white">
                Available From
              </h3>
              <div className="flex items-center gap-[4px]">
                <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-[#7a7a83]">
                  {sellerOffers.length} sellers
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              {sellerOffers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-[10px] bg-[rgba(38,38,38,0.5)] border border-[#363641] rounded-[16px] p-[14px] hover:border-[#517cd0] transition-colors"
                >
                  <div className="flex items-start justify-between mb-[10px]">
                    <div className="flex-1">
                      <div className="flex items-center gap-[8px] mb-[4px]">
                        <p className="font-['Urbanist:Medium',sans-serif] text-[14px] text-white">
                          {offer.seller}
                        </p>
                        {offer.badge && (
                          <div className="bg-[rgba(81,124,208,0.2)] px-[6px] py-[2px] rounded-[6px]">
                            <p className="font-['Urbanist:Medium',sans-serif] text-[9px] text-[#517cd0]">
                              {offer.badge}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div className="flex items-center gap-[3px]">
                          <Star className="size-[11px] text-[#fbbf24] fill-[#fbbf24]" />
                          <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
                            {offer.rating}
                          </p>
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <MapPin className="size-[10px] text-[#7a7a83]" />
                          <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
                            {offer.distance}
                          </p>
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <Clock className="size-[10px] text-[#7a7a83]" />
                          <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
                            {offer.deliveryTime}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white">
                      {offer.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Bottom CTAs */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a] to-transparent pt-[20px] pb-[30px] px-[20px]">
          <div className="flex flex-col gap-[10px]">
            <motion.button
              onClick={onQuickBuy ? () => onQuickBuy(product) : onBuyNow}
              className="w-full bg-[#22c55e] px-[20px] py-[14px] rounded-[14px] flex items-center justify-between"
              whileTap={{ scale: 0.98 }}
            >
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[15px] text-white">
                Buy Now
              </p>
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[15px] text-white">
                {priceStr}
              </p>
            </motion.button>

            <motion.button
              onClick={onFindBestPrice ? () => onFindBestPrice(product) : undefined}
              className="w-full bg-[rgba(251,146,60,0.2)] border border-[#fb923c] px-[20px] py-[14px] rounded-[14px] flex items-center justify-center gap-[8px]"
              whileTap={{ scale: 0.98 }}
            >
              <TrendingUp className="size-[16px] text-[#fb923c]" />
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[15px] text-[#fb923c]">
                Find Me Best Price
              </p>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}