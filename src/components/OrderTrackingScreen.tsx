import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Package, Truck, CheckCircle, MapPin, Clock, Phone } from 'lucide-react';

interface OrderTrackingScreenProps {
  orderNumber: string;
  onDelivered: () => void;
  onClose: () => void;
}

type OrderStatus = 'confirmed' | 'packed' | 'shipped' | 'out-for-delivery' | 'delivered';

export function OrderTrackingScreen({ orderNumber, onDelivered, onClose }: OrderTrackingScreenProps) {
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>('confirmed');
  const [progress, setProgress] = useState(0);

  // Simulate order progress
  useEffect(() => {
    const statuses: OrderStatus[] = ['confirmed', 'packed', 'shipped', 'out-for-delivery', 'delivered'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < statuses.length) {
        setCurrentStatus(statuses[currentIndex]);
        setProgress((currentIndex / (statuses.length - 1)) * 100);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onDelivered();
        }, 1500);
      }
    }, 2500); // Change status every 2.5 seconds

    return () => clearInterval(interval);
  }, [onDelivered]);

  const trackingSteps = [
    { id: 'confirmed', label: 'Order Confirmed', icon: CheckCircle, time: 'Today, 2:30 PM' },
    { id: 'packed', label: 'Packed', icon: Package, time: 'Today, 3:15 PM' },
    { id: 'shipped', label: 'Shipped', icon: Truck, time: 'Today, 4:00 PM' },
    { id: 'out-for-delivery', label: 'Out for Delivery', icon: MapPin, time: 'Today, 5:30 PM' },
    { id: 'delivered', label: 'Delivered', icon: CheckCircle, time: 'Expected by 7:00 PM' }
  ];

  const getStatusIndex = (status: OrderStatus) => {
    return trackingSteps.findIndex(step => step.id === status);
  };

  const currentStatusIndex = getStatusIndex(currentStatus);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute inset-0 z-50 bg-[#0a0a0a] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#2a2a2a]">
        <button 
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors"
        >
          ← Back
        </button>
        <h2 className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-white">
          Track Order
        </h2>
        <div className="w-[60px]" /> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[24px] space-y-[24px]">
        {/* Order Number & Status */}
        <div className="backdrop-blur-[20px] bg-gradient-to-br from-teal-500/20 to-purple-500/20 border border-teal-500/30 rounded-[20px] p-[20px]">
          <div className="flex items-start justify-between mb-[16px]">
            <div>
              <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/60 mb-[4px]">
                Order Number
              </p>
              <p className="font-['Urbanist:Bold',sans-serif] text-[18px] text-white">
                #{orderNumber}
              </p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="size-[40px] rounded-full border-2 border-teal-400 border-t-transparent"
            />
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="size-[8px] rounded-full bg-teal-400 animate-pulse" />
            <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white">
              {trackingSteps[currentStatusIndex]?.label || 'Processing'}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[20px] p-[20px]">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white">
              Delivery Progress
            </p>
            <p className="font-['Urbanist:Medium',sans-serif] text-[14px] text-teal-400">
              {Math.round(progress)}%
            </p>
          </div>
          <div className="w-full h-[8px] bg-[#2a2a2a] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[20px] p-[20px]">
          <h3 className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white mb-[20px]">
            Tracking Details
          </h3>
          <div className="space-y-[20px]">
            {trackingSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = index <= currentStatusIndex;
              const isCurrent = index === currentStatusIndex;
              
              return (
                <div key={step.id} className="flex items-start gap-[16px] relative">
                  {/* Timeline line */}
                  {index < trackingSteps.length - 1 && (
                    <div className="absolute left-[23px] top-[48px] w-[2px] h-[40px] bg-[#2a2a2a]">
                      {isCompleted && (
                        <motion.div
                          className="w-full bg-teal-500"
                          initial={{ height: 0 }}
                          animate={{ height: '100%' }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      )}
                    </div>
                  )}
                  
                  {/* Icon */}
                  <motion.div
                    className={`size-[48px] rounded-full flex items-center justify-center shrink-0 border-2 ${
                      isCompleted 
                        ? 'bg-teal-500/20 border-teal-500' 
                        : 'bg-[#1a1a1a] border-[#2a2a2a]'
                    }`}
                    animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Icon className={`size-[24px] ${
                      isCompleted ? 'text-teal-400' : 'text-white/30'
                    }`} />
                  </motion.div>
                  
                  {/* Info */}
                  <div className="flex-1 pt-[4px]">
                    <p className={`font-['Urbanist:SemiBold',sans-serif] text-[15px] ${
                      isCompleted ? 'text-white' : 'text-white/40'
                    }`}>
                      {step.label}
                    </p>
                    <p className={`font-['Urbanist:Regular',sans-serif] text-[12px] mt-[4px] ${
                      isCompleted ? 'text-white/60' : 'text-white/30'
                    }`}>
                      {step.time}
                    </p>
                  </div>
                  
                  {/* Status indicator */}
                  {isCurrent && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="px-[12px] py-[4px] rounded-full bg-teal-500/20 border border-teal-500"
                    >
                      <p className="font-['Urbanist:SemiBold',sans-serif] text-[10px] text-teal-400 uppercase">
                        Current
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Info */}
        <div className="backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[20px] p-[20px] space-y-[16px]">
          <div className="flex items-start gap-[12px]">
            <MapPin className="size-[20px] text-teal-400 mt-[2px] shrink-0" />
            <div className="flex-1">
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white mb-[4px]">
                Delivery Address
              </p>
              <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-white/60 leading-[1.5]">
                123 Main Street, Apartment 4B<br />
                Mumbai, Maharashtra 400001
              </p>
            </div>
          </div>
          
          <div className="h-[1px] bg-[#2a2a2a]" />
          
          <div className="flex items-start gap-[12px]">
            <Phone className="size-[20px] text-teal-400 mt-[2px] shrink-0" />
            <div className="flex-1">
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white mb-[4px]">
                Delivery Partner
              </p>
              <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-white/60">
                Raj Kumar • +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-[20px] py-[20px] border-t border-[#2a2a2a] space-y-[12px]">
        <button className="w-full backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[16px] py-[14px] font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white hover:border-teal-500 transition-colors">
          Contact Delivery Partner
        </button>
        <button 
          onClick={onClose}
          className="w-full backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[16px] py-[14px] font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white/60 hover:text-white transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </motion.div>
  );
}
