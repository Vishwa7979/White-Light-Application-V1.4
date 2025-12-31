import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Package, Star, Download, Share2 } from 'lucide-react';

interface OrderSuccessScreenProps {
  orderNumber: string;
  productName: string;
  onContinueShopping: () => void;
  onViewOrders?: () => void;
}

export function OrderSuccessScreen({ 
  orderNumber, 
  productName, 
  onContinueShopping,
  onViewOrders 
}: OrderSuccessScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 z-50 bg-[#0a0a0a] flex flex-col"
    >
      {/* Success Animation */}
      <div className="flex-1 flex flex-col items-center justify-center px-[20px] py-[40px]">
        {/* Animated Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
          className="relative mb-[32px]"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(20, 184, 166, 0.7)',
                '0 0 0 40px rgba(20, 184, 166, 0)',
                '0 0 0 0 rgba(20, 184, 166, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <div className="size-[120px] rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center relative">
            <CheckCircle className="size-[64px] text-white" strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-[32px]"
        >
          <h1 className="font-['Urbanist:Bold',sans-serif] text-[28px] text-white mb-[8px]">
            Order Delivered! 🎉
          </h1>
          <p className="font-['Urbanist:Regular',sans-serif] text-[16px] text-white/60 leading-[1.5]">
            Your package has been successfully delivered
          </p>
        </motion.div>

        {/* Order Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-[400px] backdrop-blur-[20px] bg-gradient-to-br from-teal-500/10 to-purple-500/10 border border-teal-500/30 rounded-[24px] p-[24px] mb-[24px]"
        >
          <div className="flex items-center justify-between mb-[20px]">
            <div className="flex items-center gap-[12px]">
              <div className="size-[48px] rounded-[12px] bg-teal-500/20 flex items-center justify-center">
                <Package className="size-[24px] text-teal-400" />
              </div>
              <div>
                <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/60 mb-[2px]">
                  Order Number
                </p>
                <p className="font-['Urbanist:Bold',sans-serif] text-[16px] text-white">
                  #{orderNumber}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white/10 mb-[20px]" />

          <div className="space-y-[12px]">
            <div className="flex items-center justify-between">
              <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-white/60">
                Product
              </p>
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white text-right max-w-[200px] truncate">
                {productName}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-white/60">
                Delivered At
              </p>
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white">
                Today, 6:45 PM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-white/60">
                Status
              </p>
              <div className="flex items-center gap-[6px]">
                <div className="size-[8px] rounded-full bg-teal-400" />
                <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-teal-400">
                  Delivered
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rate Your Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-[400px] backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[20px] p-[20px] mb-[24px]"
        >
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white mb-[12px] text-center">
            Rate your experience
          </p>
          <div className="flex items-center justify-center gap-[8px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-[4px]"
              >
                <Star className="size-[32px] text-yellow-500 fill-yellow-500" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex gap-[12px] w-full max-w-[400px]"
        >
          <button className="flex-1 backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[16px] py-[12px] flex items-center justify-center gap-[8px] hover:border-teal-500 transition-colors">
            <Download className="size-[18px] text-white/60" />
            <span className="font-['Urbanist:SemiBold',sans-serif] text-[13px] text-white/60">
              Invoice
            </span>
          </button>
          <button className="flex-1 backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[16px] py-[12px] flex items-center justify-center gap-[8px] hover:border-teal-500 transition-colors">
            <Share2 className="size-[18px] text-white/60" />
            <span className="font-['Urbanist:SemiBold',sans-serif] text-[13px] text-white/60">
              Share
            </span>
          </button>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="px-[20px] py-[20px] border-t border-[#2a2a2a] space-y-[12px]">
        <motion.button
          onClick={onContinueShopping}
          className="w-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-[16px] py-[16px] font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white"
          whileTap={{ scale: 0.98 }}
        >
          Continue Shopping
        </motion.button>
        {onViewOrders && (
          <button 
            onClick={onViewOrders}
            className="w-full backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[16px] py-[14px] font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white/60 hover:text-white transition-colors"
          >
            View All Orders
          </button>
        )}
      </div>
    </motion.div>
  );
}
