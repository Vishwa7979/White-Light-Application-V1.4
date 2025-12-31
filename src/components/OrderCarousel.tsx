import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Package, Truck, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { Order } from '../utils/chatThreadsData';

interface OrderCarouselProps {
  orders: Order[];
  onOrderSelect?: (order: Order) => void;
}

export function OrderCarousel({ orders, onOrderSelect }: OrderCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return 'text-green-400';
      case 'shipped':
        return 'text-blue-400';
      case 'confirmed':
        return 'text-yellow-400';
      case 'pending':
        return 'text-orange-400';
      case 'cancelled':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="size-4" />;
      case 'shipped':
        return <Truck className="size-4" />;
      case 'confirmed':
        return <Package className="size-4" />;
      case 'pending':
        return <Clock className="size-4" />;
      default:
        return <Package className="size-4" />;
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'shipped':
        return 'Shipped';
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Processing';
    }
  };

  return (
    <div className="w-full">
      <div 
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {orders.map((order, index) => (
          <motion.div
            key={order.orderId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="snap-start shrink-0 first:ml-0"
            onClick={() => onOrderSelect?.(order)}
          >
            <div 
              className="w-[280px] relative overflow-hidden rounded-[16px] p-[14px] cursor-pointer hover:scale-[1.02] transition-transform"
              style={{ 
                backgroundImage: "linear-gradient(257.089deg, rgba(51, 51, 51, 0.4) 3.3598%, rgba(51, 51, 51, 0.2) 94.67%)" 
              }}
            >
              <div className="absolute border border-[rgba(53,53,53,0.6)] inset-0 pointer-events-none rounded-[16px]" />
              
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <div className={getStatusColor(order.status)}>
                    {getStatusIcon(order.status)}
                  </div>
                  <span className={`text-[12px] font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>
                <ChevronRight className="size-4 text-[#71717a]" />
              </div>

              {/* Product Info */}
              <div className="flex gap-2.5 mb-3">
                <div className="relative size-[50px] rounded-[8px] overflow-hidden shrink-0 bg-[#1a1a1a]">
                  <img 
                    src={order.product.image} 
                    alt={order.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#f4f4f5] text-[13px] font-medium leading-[1.3] mb-1 line-clamp-2">
                    {order.product.name}
                  </p>
                  <p className="text-[#f4f4f5] text-[14px] font-semibold">
                    ₹{order.product.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#353535] mb-2.5" />

              {/* Order Details */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[#a1a1aa]">Order ID</span>
                  <span className="text-[11px] text-[#f4f4f5] font-mono">{order.orderId}</span>
                </div>
                
                {order.estimatedDelivery && (
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-[#a1a1aa]">
                      {order.status === 'delivered' ? 'Delivered' : 'Expected'}
                    </span>
                    <span className="text-[11px] text-[#f4f4f5]">{order.estimatedDelivery}</span>
                  </div>
                )}
              </div>

              {/* Progress Bar for Shipped Orders */}
              {order.status === 'shipped' && (
                <div className="mt-3">
                  <div className="h-1 bg-[#353535] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    />
                  </div>
                  <p className="text-[10px] text-[#71717a] mt-1.5">Out for delivery</p>
                </div>
              )}

              {/* Delivered Checkmark */}
              {order.status === 'delivered' && (
                <div className="mt-2 p-2 rounded-[8px] bg-green-500/10 border border-green-500/20">
                  <p className="text-[10px] text-green-400 text-center">
                    ✓ Delivered successfully
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
