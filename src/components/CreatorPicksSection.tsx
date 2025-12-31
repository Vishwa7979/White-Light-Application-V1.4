import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, MapPin, Clock } from 'lucide-react';

export interface CreatorPick {
  id: string;
  product: {
    image: string;
    name: string;
    price: string;
    deliveryEta: string;
  };
  creator: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  badges: Array<'Local' | 'Trusted' | 'Fast'>;
  reason: string;
  onSeeWhy?: () => void;
}

const badgeStyles = {
  Local: { bg: 'bg-[rgba(34,197,94,0.2)]', text: 'text-[#22c55e]', icon: MapPin },
  Trusted: { bg: 'bg-[rgba(59,130,246,0.2)]', text: 'text-[#3b82f6]', icon: CheckCircle },
  Fast: { bg: 'bg-[rgba(251,146,60,0.2)]', text: 'text-[#fb923c]', icon: Clock },
};

interface CreatorPickCardProps {
  pick: CreatorPick;
}

function CreatorPickCard({ pick }: CreatorPickCardProps) {
  return (
    <motion.div
      className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.3)] border border-[#363641] content-stretch flex gap-[12px] p-[14px] relative rounded-[20px] shrink-0 w-full hover:border-[#517cd0] transition-colors"
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Product Image */}
      <div className="relative shrink-0">
        <div className="h-[100px] w-[100px] rounded-[16px] overflow-hidden">
          <img 
            src={pick.product.image} 
            alt={pick.product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute -top-2 -right-2 flex flex-col gap-[4px]">
          {pick.badges.slice(0, 1).map((badge) => {
            const BadgeIcon = badgeStyles[badge].icon;
            return (
              <div 
                key={badge}
                className={`${badgeStyles[badge].bg} backdrop-blur-[10px] px-[6px] py-[3px] rounded-[8px] flex items-center gap-[3px]`}
              >
                <BadgeIcon className={`size-[10px] ${badgeStyles[badge].text}`} />
                <p className={`font-['Urbanist:Medium',sans-serif] text-[9px] ${badgeStyles[badge].text}`}>
                  {badge}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-[8px] min-w-0">
        {/* Creator */}
        <div className="flex items-center gap-[6px]">
          <img 
            src={pick.creator.avatar} 
            alt={pick.creator.name}
            className="size-[24px] rounded-full object-cover"
          />
          <div className="flex items-center gap-[4px] flex-1 min-w-0">
            <p className="font-['Urbanist:Medium',sans-serif] text-[12px] text-[#f4f4f5] truncate">
              {pick.creator.name}
            </p>
            {pick.creator.verified && (
              <CheckCircle className="size-[12px] text-[#3b82f6] fill-[#3b82f6] shrink-0" />
            )}
          </div>
        </div>
        
        {/* Product Name */}
        <p className="font-['Urbanist:Medium',sans-serif] text-[14px] text-white leading-[1.3] line-clamp-2">
          {pick.product.name}
        </p>
        
        {/* Reason */}
        <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83] leading-[1.2] line-clamp-1">
          "{pick.reason}"
        </p>
        
        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white">
              {pick.product.price}
            </p>
            <p className="font-['Urbanist:Regular',sans-serif] text-[10px] text-[#7a7a83]">
              {pick.product.deliveryEta}
            </p>
          </div>
          
          {pick.onSeeWhy && (
            <motion.button
              onClick={pick.onSeeWhy}
              className="bg-[rgba(81,124,208,0.2)] border border-[#517cd0] px-[12px] py-[6px] rounded-[10px]"
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Urbanist:Medium',sans-serif] text-[12px] text-[#517cd0]">
                See Why
              </p>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface CreatorPicksSectionProps {
  picks: CreatorPick[];
}

export function CreatorPicksSection({ picks }: CreatorPicksSectionProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-[16px]">
        <p className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-[#f4f4f5]">
          Creator Picks
        </p>
        <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-[#7a7a83]">
          For you
        </p>
      </div>
      
      <div className="flex flex-col gap-[12px]">
        {picks.map((pick) => (
          <CreatorPickCard key={pick.id} pick={pick} />
        ))}
      </div>
    </div>
  );
}
