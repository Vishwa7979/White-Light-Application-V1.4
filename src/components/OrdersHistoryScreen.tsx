import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, Truck, Clock, Package, ChevronRight, Loader2 } from 'lucide-react';
import apiClient from '../utils/apiClient';

interface Order {
  id: string;
  date: string;
  status: 'delivered' | 'in_transit' | 'processing' | string;
  statusText: string;
  total: string;
  items: number;
  product: string;
  image: string;
}

interface OrdersHistoryScreenProps {
  onClose: () => void;
  onOrderClick?: (orderId: string) => void;
}

export default function OrdersHistoryScreen({ onClose, onOrderClick }: OrdersHistoryScreenProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await apiClient.get('/orders');
        const mappedOrders = response.data.map((o: any) => ({
          id: o.orderNumber || `ORD-${o.id}`,
          date: o.orderDate ? new Date(o.orderDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Recently',
          status: o.status?.toLowerCase() || 'processing',
          statusText: o.status || 'Processing',
          total: o.product?.price ? `₹${o.product.price.toLocaleString('en-IN')}` : 'N/A',
          items: 1,
          product: o.product?.name || 'Unknown Product',
          image: o.product?.image || 'https://images.unsplash.com/photo-1583391733981-5954a7e5e4c7?w=400'
        }));
        setOrders(mappedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in_transit':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-500';
      case 'in_transit':
        return 'text-blue-500';
      case 'processing':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="absolute inset-0 z-[200] bg-[#1A1A1C] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2A2A2C]">
        <button
          onClick={onClose}
          className="p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-lg">Orders</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Orders List */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center p-12">
            <Loader2 className="w-8 h-8 text-[#999999] animate-spin" />
          </div>
        ) : orders.map((order, index) => (
          <motion.button
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onOrderClick?.(order.id)}
            className="w-full px-5 py-4 flex items-start gap-4 hover:bg-white/5 transition-colors border-b border-[#2A2A2C]/50"
          >
            {/* Product Image */}
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#2A2A2C] flex-shrink-0">
              <img
                src={order.image}
                alt={order.product}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Order Details */}
            <div className="flex-1 text-left">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-white text-base">{order.product}</h3>
                <ChevronRight className="w-5 h-5 text-[#666666] flex-shrink-0 ml-2" />
              </div>

              <p className="text-[#999999] text-sm mb-2">{order.id}</p>

              <div className="flex items-center gap-2 mb-2">
                {getStatusIcon(order.status)}
                <span className={`text-sm ${getStatusColor(order.status)}`}>
                  {order.statusText}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#666666] text-sm">{order.date} • {order.items} item{order.items > 1 ? 's' : ''}</span>
                <span className="text-white font-medium">{order.total}</span>
              </div>
            </div>
          </motion.button>
        ))}

        {/* Empty State if no orders */}
        {!isLoading && orders.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Package className="w-16 h-16 text-[#666666] mb-4" />
            <h2 className="text-white text-lg mb-2">No Orders Yet</h2>
            <p className="text-[#999999] text-sm">
              Start shopping with voice commands to see your orders here
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
