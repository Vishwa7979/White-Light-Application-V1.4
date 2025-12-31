import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingUp, Store, MapPin, Clock, Star, CheckCircle, Loader2 } from 'lucide-react';
import { Product } from '../utils/chatThreadsData';

interface SellerOffer {
  id: string;
  seller: string;
  price: string;
  originalPrice?: string;
  distance: string;
  deliveryTime: string;
  rating: number;
  badge?: string;
  confidence: 'high' | 'medium' | 'low';
}

interface BiddingFlowProps {
  product: Product;
  onClose: () => void;
  onAcceptOffer: (offer: SellerOffer) => void;
}

export function BiddingFlow({ product, onClose, onAcceptOffer }: BiddingFlowProps) {
  const [status, setStatus] = useState<'searching' | 'receiving' | 'complete'>('searching');
  const [timeRemaining, setTimeRemaining] = useState(120); // 2 minutes
  const [offers, setOffers] = useState<SellerOffer[]>([]);
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  // Format price
  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const productPriceStr = formatPrice(product.price);

  // Simulate receiving offers
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatus('receiving');
      setOffers([
        {
          id: '1',
          seller: 'TechMart Express',
          price: '₹87,999',
          originalPrice: productPriceStr,
          distance: '0.8 km',
          deliveryTime: '15 min',
          rating: 4.8,
          badge: 'Fastest',
          confidence: 'high'
        }
      ]);
    }, 1500);

    const timer2 = setTimeout(() => {
      setOffers(prev => [...prev, {
        id: '2',
        seller: 'Digital Hub Pro',
        price: '₹85,499',
        originalPrice: productPriceStr,
        distance: '1.2 km',
        deliveryTime: '30 min',
        rating: 4.9,
        badge: 'Best Price',
        confidence: 'high'
      }]);
    }, 3000);

    const timer3 = setTimeout(() => {
      setOffers(prev => [...prev, {
        id: '3',
        seller: 'QuickBuy Electronics',
        price: '₹86,999',
        distance: '2.1 km',
        deliveryTime: 'Today',
        rating: 4.6,
        confidence: 'medium'
      }]);
      setStatus('complete');
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [product.price]);

  // Countdown timer
  useEffect(() => {
    if (status === 'searching' || status === 'receiving') {
      const interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 0) {
            setStatus('complete');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [status]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAccept = (offer: SellerOffer) => {
    setSelectedOffer(offer.id);
    setTimeout(() => {
      onAcceptOffer(offer);
    }, 500);
  };

  const savings = (offer: SellerOffer) => {
    if (!offer.originalPrice) return 0;
    return parseInt(offer.originalPrice.replace(/[^0-9]/g, '')) - parseInt(offer.price.replace(/[^0-9]/g, ''));
  };

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
        className="w-full max-w-2xl bg-[#1a1a1a] rounded-t-[32px] overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Header */}
        <div className="relative shrink-0 p-[20px] border-b border-[#363641]">
          <div className="flex items-start justify-between mb-[16px]">
            <div className="flex-1">
              <div className="flex items-center gap-[8px] mb-[8px]">
                <TrendingUp className="size-[20px] text-[#fb923c]" />
                <h2 className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-white">
                  Finding Best Price
                </h2>
              </div>
              <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-[#7a7a83]">
                Checking nearby sellers for the best deal...
              </p>
            </div>
            <motion.button
              onClick={onClose}
              className="size-[32px] bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <X className="size-[18px] text-white" />
            </motion.button>
          </div>

          {/* Product Info */}
          <div className="flex items-center gap-[12px] p-[12px] bg-[rgba(38,38,38,0.5)] rounded-[14px]">
            <div className="size-[50px] rounded-[10px] overflow-hidden shrink-0">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Urbanist:Medium',sans-serif] text-[13px] text-white truncate">
                {product.name}
              </p>
              <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
                Original: {productPriceStr}
              </p>
            </div>
          </div>

          {/* Timer */}
          <div className="mt-[16px] flex items-center justify-center gap-[8px] py-[8px] px-[12px] bg-[rgba(251,146,60,0.1)] rounded-[10px]">
            <Clock className="size-[14px] text-[#fb923c]" />
            <p className="font-['Urbanist:Medium',sans-serif] text-[13px] text-[#fb923c]">
              {status === 'complete' ? 'Bidding closed' : `Closes in ${formatTime(timeRemaining)}`}
            </p>
          </div>
        </div>

        {/* Offers Section */}
        <div className="flex-1 overflow-y-auto px-[20px] py-[20px] no-scrollbar">
          {/* AI Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[rgba(81,124,208,0.1)] border border-[#517cd0] rounded-[16px] p-[14px] mb-[20px]"
          >
            <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-[#f4f4f5] leading-[1.5]">
              {status === 'searching' && "I'm checking nearby sellers to find you the best deal. This will take just a moment..."}
              {status === 'receiving' && `I've found ${offers.length} seller${offers.length > 1 ? 's' : ''} with great offers! More coming in...`}
              {status === 'complete' && `Found ${offers.length} offers! The best price is ${offers.length > 0 ? offers.reduce((min, offer) => {
                const minPrice = parseInt(min.price.replace(/[^0-9]/g, ''));
                const offerPrice = parseInt(offer.price.replace(/[^0-9]/g, ''));
                return offerPrice < minPrice ? offer : min;
              }).price : productPriceStr}. You can save up to ₹${offers.length > 0 ? Math.max(...offers.map(o => savings(o))).toLocaleString() : '0'}!`}
            </p>
          </motion.div>

          {/* Loading State */}
          {status === 'searching' && (
            <div className="flex flex-col items-center justify-center py-[40px]">
              <Loader2 className="size-[40px] text-[#517cd0] animate-spin mb-[16px]" />
              <p className="font-['Urbanist:Medium',sans-serif] text-[14px] text-[#7a7a83]">
                Searching sellers...
              </p>
            </div>
          )}

          {/* Offers List */}
          <div className="flex flex-col gap-[12px]">
            <AnimatePresence>
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`backdrop-blur-[10px] border rounded-[16px] p-[16px] transition-all ${
                    selectedOffer === offer.id 
                      ? 'bg-[rgba(34,197,94,0.2)] border-[#22c55e]' 
                      : 'bg-[rgba(38,38,38,0.5)] border-[#363641] hover:border-[#517cd0]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-[12px]">
                    <div className="flex-1">
                      <div className="flex items-center gap-[8px] mb-[6px]">
                        <Store className="size-[16px] text-[#7a7a83]" />
                        <p className="font-['Urbanist:Medium',sans-serif] text-[14px] text-white">
                          {offer.seller}
                        </p>
                        {offer.badge && (
                          <div className={`px-[6px] py-[2px] rounded-[6px] ${
                            offer.badge === 'Best Price' 
                              ? 'bg-[rgba(34,197,94,0.2)]' 
                              : 'bg-[rgba(81,124,208,0.2)]'
                          }`}>
                            <p className={`font-['Urbanist:Medium',sans-serif] text-[9px] ${
                              offer.badge === 'Best Price' ? 'text-[#22c55e]' : 'text-[#517cd0]'
                            }`}>
                              {offer.badge}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-[12px] mb-[10px]">
                        <div className="flex items-center gap-[3px]">
                          <Star className="size-[12px] text-[#fbbf24] fill-[#fbbf24]" />
                          <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
                            {offer.rating}
                          </p>
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <MapPin className="size-[11px] text-[#7a7a83]" />
                          <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
                            {offer.distance}
                          </p>
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <Clock className="size-[11px] text-[#7a7a83]" />
                          <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
                            {offer.deliveryTime}
                          </p>
                        </div>
                      </div>

                      {/* Confidence Indicator */}
                      <div className="flex items-center gap-[6px]">
                        <div className={`h-[3px] w-[60px] rounded-full overflow-hidden bg-[rgba(255,255,255,0.1)]`}>
                          <div 
                            className={`h-full ${
                              offer.confidence === 'high' ? 'bg-[#22c55e] w-full' :
                              offer.confidence === 'medium' ? 'bg-[#fb923c] w-2/3' :
                              'bg-[#ef4444] w-1/3'
                            }`}
                          />
                        </div>
                        <p className="font-['Urbanist:Regular',sans-serif] text-[10px] text-[#7a7a83]">
                          {offer.confidence === 'high' ? 'High confidence' :
                           offer.confidence === 'medium' ? 'Medium confidence' :
                           'Low confidence'}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-[4px]">
                      <p className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-white">
                        {offer.price}
                      </p>
                      {offer.originalPrice && savings(offer) > 0 && (
                        <div className="bg-[rgba(34,197,94,0.2)] px-[6px] py-[2px] rounded-[6px]">
                          <p className="font-['Urbanist:Medium',sans-serif] text-[10px] text-[#22c55e]">
                            Save ₹{savings(offer).toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-[8px]">
                    <motion.button
                      onClick={() => handleAccept(offer)}
                      disabled={selectedOffer !== null}
                      className={`flex-1 py-[10px] rounded-[10px] flex items-center justify-center gap-[6px] ${
                        selectedOffer === offer.id
                          ? 'bg-[#22c55e]'
                          : 'bg-[rgba(34,197,94,0.2)] border border-[#22c55e]'
                      } disabled:opacity-50`}
                      whileTap={{ scale: selectedOffer === null ? 0.95 : 1 }}
                    >
                      {selectedOffer === offer.id && (
                        <CheckCircle className="size-[14px] text-white" />
                      )}
                      <p className={`font-['Urbanist:Medium',sans-serif] text-[13px] ${
                        selectedOffer === offer.id ? 'text-white' : 'text-[#22c55e]'
                      }`}>
                        {selectedOffer === offer.id ? 'Selected' : 'Accept'}
                      </p>
                    </motion.button>

                    <motion.button
                      className="px-[16px] py-[10px] bg-[rgba(81,124,208,0.2)] border border-[#517cd0] rounded-[10px]"
                      whileTap={{ scale: 0.95 }}
                    >
                      <p className="font-['Urbanist:Medium',sans-serif] text-[13px] text-[#517cd0]">
                        Counter
                      </p>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No offers yet */}
          {offers.length === 0 && status !== 'searching' && (
            <div className="text-center py-[40px]">
              <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-[#7a7a83]">
                No offers yet. Keep waiting...
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}