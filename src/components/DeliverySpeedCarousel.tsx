import React from 'react';
import { motion } from 'motion/react';
import { Clock, Zap, Package, Truck } from 'lucide-react';

interface DeliverySpeed {
  label: string;
  time: string;
  icon: 'lightning' | 'clock' | 'package' | 'truck';
  badge?: string;
}

const deliverySpeeds: DeliverySpeed[] = [
  { label: '10 Min', time: '10', icon: 'lightning', badge: 'Fastest' },
  { label: '30 Min', time: '30', icon: 'clock' },
  { label: '3 Hours', time: '180', icon: 'clock' },
  { label: 'Same Day', time: 'today', icon: 'package' },
  { label: '3 Days', time: '3d', icon: 'truck' },
];

const iconMap = {
  lightning: Zap,
  clock: Clock,
  package: Package,
  truck: Truck,
};

interface DeliverySpeedCardProps {
  speed: DeliverySpeed;
  onClick: () => void;
}

function DeliverySpeedCard({ speed, onClick }: DeliverySpeedCardProps) {
  const Icon = iconMap[speed.icon];
  
  return (
    <motion.button
      onClick={onClick}
      className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.3)] border border-[#365371] content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative rounded-[20px] shrink-0 w-[110px] h-[110px] hover:border-[#517cd0] transition-all"
      whileTap={{ scale: 0.95 }}
    >
      {speed.badge && (
        <div className="absolute top-2 right-2 bg-[#fb923c] px-[6px] py-[2px] rounded-[8px]">
          <p className="font-['Urbanist:Regular',sans-serif] text-[9px] text-white">{speed.badge}</p>
        </div>
      )}
      
      <div className="relative flex items-center justify-center size-[32px] bg-[rgba(81,124,208,0.2)] rounded-full">
        <Icon className="size-[18px] text-[#517cd0]" />
      </div>
      
      <div className="flex flex-col gap-[2px] items-center">
        <p className="font-['Urbanist:Medium',sans-serif] leading-[1.2] text-[#f4f4f5] text-[15px]">
          {speed.label}
        </p>
        <p className="font-['Urbanist:Regular',sans-serif] leading-[1.2] text-[#7a7a83] text-[11px]">
          Delivery
        </p>
      </div>
    </motion.button>
  );
}

interface DeliverySpeedCarouselProps {
  onSelect: (speed: DeliverySpeed) => void;
}

export function DeliverySpeedCarousel({ onSelect }: DeliverySpeedCarouselProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-[16px]">
        <p className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-[#f4f4f5]">
          Shop by Delivery Speed
        </p>
      </div>
      
      <div className="w-full overflow-x-auto no-scrollbar -mx-5 px-5">
        <div className="flex gap-[12px] w-max pb-1">
          {deliverySpeeds.map((speed, index) => (
            <motion.div
              key={speed.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <DeliverySpeedCard speed={speed} onClick={() => onSelect(speed)} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
