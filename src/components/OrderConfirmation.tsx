import React from 'react';
import { motion } from 'motion/react';
import { Check, MapPin, CreditCard, Truck } from 'lucide-react';

interface OrderConfirmationProps {
  product: {
    image: string;
    name: string;
    price: string;
  };
  deliveryAddress: string;
  deliveryEta: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function OrderConfirmation({
  product,
  deliveryAddress,
  deliveryEta,
  onConfirm,
  onCancel
}: OrderConfirmationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-end justify-center"
      onClick={onCancel}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-[500px] bg-[#1a1a1a] rounded-t-[32px] p-6 pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[rgba(251,101,124,0.2)] flex items-center justify-center mx-auto mb-3">
            <Check className="w-8 h-8 text-[#fb657c]" />
          </div>
          <h3 className="text-[20px] text-white font-semibold mb-1">Confirm Your Order</h3>
          <p className="text-[13px] text-[#999]">Review details before placing order</p>
        </div>

        {/* Product Summary */}
        <div className="bg-[#2a2a2a] rounded-[16px] p-4 mb-4 flex items-center gap-3">
          <div className="w-16 h-16 rounded-[12px] bg-[#1a1a1a] overflow-hidden flex-shrink-0">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] text-white font-medium line-clamp-2 mb-1">{product.name}</p>
            <p className="text-[16px] text-[#fb657c] font-semibold">{product.price}</p>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#999] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-[12px] text-[#999] mb-0.5">Delivery Address</p>
              <p className="text-[14px] text-white leading-[1.4]">{deliveryAddress}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#999] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-[12px] text-[#999] mb-0.5">Estimated Delivery</p>
              <p className="text-[14px] text-white">{deliveryEta}</p>
            </div>
          </div>
        </div>

        {/* Avatar Message */}
        <div className="bg-[rgba(251,101,124,0.1)] border border-[rgba(251,101,124,0.3)] rounded-[16px] p-4 mb-6">
          <p className="text-[13px] text-[#fb926c] leading-[1.5] text-center">
            "Shall I place this order for you?"
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 h-[52px] rounded-[16px] bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-medium transition-colors"
          >
            Not Yet
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 h-[52px] rounded-[16px] bg-gradient-to-r from-[#fb657c] to-[#fb926c] hover:opacity-90 text-white font-semibold transition-opacity shadow-[0_4px_20px_rgba(251,101,124,0.4)]"
          >
            Yes, Place Order
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Payment Options Component
interface PaymentOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  savings?: string;
}

interface PaymentSelectorProps {
  options: PaymentOption[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function PaymentSelector({ options, selectedId, onSelect }: PaymentSelectorProps) {
  return (
    <div className="space-y-2">
      <p className="text-[12px] text-[#999] mb-3">Payment Method</p>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`w-full p-4 rounded-[12px] flex items-center gap-3 transition-all ${
            selectedId === option.id
              ? 'bg-[rgba(251,101,124,0.2)] border-2 border-[#fb657c]'
              : 'bg-[#2a2a2a] border-2 border-transparent hover:bg-[#3a3a3a]'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center">
            {option.icon}
          </div>
          <div className="flex-1 text-left">
            <p className="text-[14px] text-white font-medium">{option.name}</p>
            {option.savings && (
              <p className="text-[11px] text-[#22c55e] mt-0.5">Save {option.savings}</p>
            )}
          </div>
          {selectedId === option.id && (
            <div className="w-5 h-5 rounded-full bg-[#fb657c] flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
