import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Wallet, Building2, ChevronRight, Lock, Check } from 'lucide-react';

interface PaymentScreenProps {
  orderTotal: string;
  onPaymentComplete: () => void;
  onBack: () => void;
}

type PaymentMethod = 'card' | 'upi' | 'wallet' | 'netbanking';

export function PaymentScreen({ orderTotal, onPaymentComplete, onBack }: PaymentScreenProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Wallet, description: 'Google Pay, PhonePe, Paytm' },
    { id: 'card', name: 'Card', icon: CreditCard, description: 'Credit/Debit Card' },
    { id: 'wallet', name: 'Wallet', icon: Wallet, description: 'Paytm, Amazon Pay' },
    { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'All major banks' }
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

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
          onClick={onBack}
          className="text-white/70 hover:text-white transition-colors"
        >
          ← Back
        </button>
        <h2 className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-white">
          Payment
        </h2>
        <div className="w-[60px]" /> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[24px] space-y-[24px]">
        {/* Order Amount */}
        <div className="backdrop-blur-[20px] bg-[rgba(26,26,26,0.8)] border border-[#2a2a2a] rounded-[20px] p-[20px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-white/60 mb-[4px]">
                Amount to Pay
              </p>
              <p className="font-['Urbanist:Bold',sans-serif] text-[32px] text-white">
                {orderTotal}
              </p>
            </div>
            <div className="size-[60px] rounded-full bg-teal-500/20 flex items-center justify-center">
              <Lock className="size-[28px] text-teal-400" />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white mb-[12px]">
            Select Payment Method
          </h3>
          <div className="space-y-[12px]">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              const isSelected = selectedMethod === method.id;
              
              return (
                <motion.button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id as PaymentMethod)}
                  className={`w-full backdrop-blur-[20px] border rounded-[16px] p-[16px] transition-all ${
                    isSelected 
                      ? 'bg-[rgba(20,184,166,0.15)] border-teal-500' 
                      : 'bg-[rgba(26,26,26,0.6)] border-[#2a2a2a] hover:border-[#3a3a3a]'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                      <div className={`size-[48px] rounded-[12px] flex items-center justify-center ${
                        isSelected ? 'bg-teal-500/20' : 'bg-[#2a2a2a]'
                      }`}>
                        <Icon className={`size-[24px] ${
                          isSelected ? 'text-teal-400' : 'text-white/60'
                        }`} />
                      </div>
                      <div className="text-left">
                        <p className={`font-['Urbanist:SemiBold',sans-serif] text-[16px] ${
                          isSelected ? 'text-white' : 'text-white/80'
                        }`}>
                          {method.name}
                        </p>
                        <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/50">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    {isSelected ? (
                      <div className="size-[24px] rounded-full bg-teal-500 flex items-center justify-center">
                        <Check className="size-[16px] text-white" />
                      </div>
                    ) : (
                      <ChevronRight className="size-[20px] text-white/30" />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* UPI Input (if UPI selected) */}
        {selectedMethod === 'upi' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="backdrop-blur-[20px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[16px] p-[16px]"
          >
            <label className="font-['Urbanist:Medium',sans-serif] text-[14px] text-white/70 mb-[8px] block">
              Enter UPI ID
            </label>
            <input
              type="text"
              placeholder="yourname@upi"
              className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-[12px] px-[16px] py-[12px] text-white font-['Urbanist:Regular',sans-serif] text-[14px] focus:outline-none focus:border-teal-500 transition-colors"
            />
          </motion.div>
        )}

        {/* Security Info */}
        <div className="flex items-start gap-[12px] p-[16px] rounded-[12px] bg-[rgba(20,184,166,0.05)] border border-teal-500/20">
          <Lock className="size-[16px] text-teal-400 mt-[2px] shrink-0" />
          <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/60 leading-[1.5]">
            Your payment is secured with 256-bit SSL encryption. We never store your card details.
          </p>
        </div>
      </div>

      {/* Pay Button */}
      <div className="px-[20px] py-[20px] border-t border-[#2a2a2a]">
        <motion.button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-[16px] py-[16px] font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          whileTap={{ scale: isProcessing ? 1 : 0.98 }}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center gap-[8px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="size-[20px] border-2 border-white border-t-transparent rounded-full"
              />
              Processing...
            </div>
          ) : (
            `Pay ${orderTotal}`
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
