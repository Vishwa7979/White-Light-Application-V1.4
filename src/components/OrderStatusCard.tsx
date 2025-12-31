import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Order } from '../utils/chatThreadsData';

interface OrderStatusCardProps {
  order: Order;
}

export function OrderStatusCard({ order }: OrderStatusCardProps) {
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
        return <CheckCircle className="size-5" />;
      case 'shipped':
        return <Truck className="size-5" />;
      case 'confirmed':
        return <Package className="size-5" />;
      case 'pending':
        return <Clock className="size-5" />;
      default:
        return <Package className="size-5" />;
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'shipped':
        return 'Shipped';
      case 'confirmed':
        return 'Order Confirmed';
      case 'pending':
        return 'Pending Confirmation';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Processing';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[340px]"
    >
      <div 
        className="relative overflow-hidden rounded-[16px] p-[16px]"
        style={{ 
          backgroundImage: "linear-gradient(257.089deg, rgba(51, 51, 51, 0.4) 3.3598%, rgba(51, 51, 51, 0.2) 94.67%)" 
        }}
      >
        <div className="absolute border border-[rgba(53,53,53,0.6)] inset-0 pointer-events-none rounded-[16px]" />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={getStatusColor(order.status)}>
              {getStatusIcon(order.status)}
            </div>
            <span className={`text-[14px] font-medium ${getStatusColor(order.status)}`}>
              {getStatusText(order.status)}
            </span>
          </div>
          <span className="text-[12px] text-[#a1a1aa]">
            {order.orderId}
          </span>
        </div>

        {/* Product Info */}
        <div className="flex gap-3 mb-3">
          <div className="relative size-[60px] rounded-[8px] overflow-hidden shrink-0 bg-[#1a1a1a]">
            <img 
              src={order.product.image} 
              alt={order.product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#f4f4f5] text-[14px] font-medium leading-[1.3] mb-1 line-clamp-2">
              {order.product.name}
            </p>
            <p className="text-[#f4f4f5] text-[16px] font-semibold">
              ₹{order.product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#353535] mb-3" />

        {/* Order Details */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[12px] text-[#a1a1aa]">Order Date</span>
            <span className="text-[12px] text-[#f4f4f5]">{order.orderDate}</span>
          </div>
          
          {order.estimatedDelivery && (
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-[#a1a1aa]">
                {order.status === 'delivered' ? 'Delivered On' : 'Expected Delivery'}
              </span>
              <span className="text-[12px] text-[#f4f4f5]">{order.estimatedDelivery}</span>
            </div>
          )}

          {order.trackingId && (
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-[#a1a1aa]">Tracking ID</span>
              <span className="text-[12px] text-[#f4f4f5] font-mono">{order.trackingId}</span>
            </div>
          )}

          {order.shippingAddress && (
            <div className="flex gap-2 mt-3 pt-3 border-t border-[#353535]">
              <MapPin className="size-4 text-[#a1a1aa] shrink-0 mt-0.5" />
              <span className="text-[12px] text-[#f4f4f5] leading-[1.4]">
                {order.shippingAddress}
              </span>
            </div>
          )}
        </div>

        {/* Track Order Button for Shipped Status */}
        {order.status === 'shipped' && (
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-2.5 px-4 rounded-[12px] bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[13px] font-medium hover:from-blue-700 hover:to-blue-600 transition-all"
          >
            Track Order
          </motion.button>
        )}

        {/* Delivered Success Message */}
        {order.status === 'delivered' && (
          <div className="mt-4 p-3 rounded-[12px] bg-green-500/10 border border-green-500/20">
            <p className="text-[12px] text-green-400 text-center">
              ✓ Order delivered successfully!
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface OrderCTACardProps {
  content: string;
  onAction?: () => void;
}

export function OrderCTACard({ content, onAction }: OrderCTACardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[340px]"
    >
      <div 
        className="relative overflow-hidden rounded-[16px] p-[16px]"
        style={{ 
          backgroundImage: "linear-gradient(257.089deg, rgba(51, 51, 51, 0.4) 3.3598%, rgba(51, 51, 51, 0.2) 94.67%)" 
        }}
      >
        <div className="absolute border border-[rgba(53,53,53,0.6)] inset-0 pointer-events-none rounded-[16px]" />
        
        <p className="text-[#f4f4f5] text-[14px] leading-[1.5] mb-4">
          {content}
        </p>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onAction}
          className="w-full py-2.5 px-4 rounded-[12px] bg-gradient-to-r from-purple-600 to-purple-500 text-white text-[13px] font-medium hover:from-purple-700 hover:to-purple-600 transition-all"
        >
          Complete Purchase
        </motion.button>
      </div>
    </motion.div>
  );
}
