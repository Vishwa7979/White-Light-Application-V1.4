import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Tag, Clock } from 'lucide-react';

export interface FeaturedDeal {
  id: string;
  image: string;
  name: string;
  price: string;
  originalPrice: string;
  savings: string;
  reason: string;
  expiresIn?: string;
  stock?: 'low' | 'high';
  onBuyNow?: () => void;
}

interface FeaturedDealCardProps {
  deal: FeaturedDeal;
}

function FeaturedDealCard({ deal }: FeaturedDealCardProps) {
  const savingsAmount = parseInt(deal.savings.replace(/[^0-9]/g, ''));
  
  return (
    <motion.div
      className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.3)] border border-[#365371] content-stretch flex relative rounded-[18px] shrink-0 w-[300px] overflow-hidden hover:border-[#517cd0] transition-colors"
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {/* Left Side - Image */}
      <div className="relative w-[110px] shrink-0">
        <img 
          src={deal.image} 
          alt={deal.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Savings Badge */}
        <div className="absolute top-2 left-2 bg-gradient-to-r from-[#fb923c] to-[#f97316] px-[8px] py-[4px] rounded-[8px] flex items-center gap-[3px]">
          <Tag className="size-[10px] text-white" />
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[10px] text-white">
            Save {deal.savings}
          </p>
        </div>
        
        {/* Low Stock Indicator */}
        {deal.stock === 'low' && (
          <div className="absolute bottom-2 left-2 right-2 backdrop-blur-[10px] bg-[rgba(239,68,68,0.9)] px-[6px] py-[2px] rounded-[6px]">
            <p className="font-['Urbanist:Medium',sans-serif] text-[9px] text-white text-center">
              Low Stock
            </p>
          </div>
        )}
      </div>
      
      {/* Right Side - Info */}
      <div className="flex-1 p-[12px] flex flex-col gap-[8px]">
        {/* Product Name */}
        <p className="font-['Urbanist:Medium',sans-serif] text-[14px] text-[#f4f4f5] leading-[1.3] line-clamp-2">
          {deal.name}
        </p>
        
        {/* Reason from Avatar */}
        <div className="flex items-start gap-[6px]">
          <Sparkles className="size-[12px] text-[#517cd0] shrink-0 mt-[2px]" />
          <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83] leading-[1.3] line-clamp-2">
            {deal.reason}
          </p>
        </div>
        
        {/* Expires In */}
        {deal.expiresIn && (
          <div className="flex items-center gap-[4px]">
            <Clock className="size-[11px] text-[#fb923c]" />
            <p className="font-['Urbanist:Regular',sans-serif] text-[10px] text-[#fb923c]">
              Expires {deal.expiresIn}
            </p>
          </div>
        )}
        
        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-[6px]">
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[17px] text-white">
                {deal.price}
              </p>
              <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-[#7a7a83] line-through">
                {deal.originalPrice}
              </p>
            </div>
          </div>
          
          {deal.onBuyNow && (
            <motion.button
              onClick={deal.onBuyNow}
              className="bg-[#517cd0] px-[14px] py-[6px] rounded-[10px]"
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Urbanist:Medium',sans-serif] text-[12px] text-white">
                Buy Now
              </p>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface FeaturedDealsSectionProps {
  deals: FeaturedDeal[];
}

export function FeaturedDealsSection({ deals }: FeaturedDealsSectionProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-[16px]">
        <div className="flex items-center gap-[8px]">
          <Sparkles className="size-[20px] text-[#fb923c]" />
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-[#f4f4f5]">
            Featured Deals
          </p>
        </div>
        <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-[#7a7a83]">
          Handpicked for you
        </p>
      </div>
      
      <div className="w-full overflow-x-auto no-scrollbar -mx-5 px-5">
        <div className="flex gap-[12px] w-max pb-1">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeaturedDealCard deal={deal} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
