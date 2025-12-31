// Chat Threads Data Structure for Conversational Commerce

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  description?: string;
  features?: string[];
}

export interface Order {
  orderId: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  product: Product;
  orderDate: string;
  estimatedDelivery?: string;
  trackingId?: string;
  shippingAddress?: string;
}

export interface Message {
  id: string;
  type: 'user' | 'ai' | 'product' | 'order-status' | 'order-cta' | 'order-carousel';
  content?: string;
  products?: Product[];
  order?: Order;
  orders?: Order[];
  timestamp: string;
}

export interface ChatThread {
  id: string | number;
  title: string;
  lastUpdated?: string;
  lastMessage?: string;
  timestamp?: string;
  hasOrder?: boolean;
  orderStatus?: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  messages?: Message[];
}

export const chatThreadsData: ChatThread[] = [
  {
    id: 'thread-1',
    title: 'Find wireless headphones under ₹5000',
    lastMessage: 'Perfect! Your order is confirmed',
    timestamp: '2 hours ago',
    hasOrder: true,
    orderStatus: 'shipped',
    messages: [
      {
        id: 'msg-1-1',
        type: 'user',
        content: 'Find wireless headphones under ₹5000',
        timestamp: '10:30 AM'
      },
      {
        id: 'msg-1-2',
        type: 'ai',
        content: 'I found some great wireless headphones under ₹5000! Here are my top picks with excellent ratings:',
        timestamp: '10:30 AM'
      },
      {
        id: 'msg-1-3',
        type: 'product',
        products: [
          {
            id: 'prod-1',
            name: 'Sony WH-CH520 Wireless Headphones',
            price: 4499,
            originalPrice: 5990,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            rating: 4.5,
            reviews: 12453,
            description: 'Wireless on-ear headphones with up to 50 hours battery life',
            features: ['50hrs Battery', 'Quick Charge', 'Built-in Mic', 'Lightweight']
          },
          {
            id: 'prod-2',
            name: 'boAt Rockerz 450 Bluetooth Headset',
            price: 1999,
            originalPrice: 2990,
            image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
            rating: 4.3,
            reviews: 8921,
            description: 'Wireless Bluetooth headphones with immersive audio',
            features: ['15hrs Playback', 'Padded Ear Cushions', 'Dual Modes', 'Foldable']
          }
        ],
        timestamp: '10:30 AM'
      },
      {
        id: 'msg-1-4',
        type: 'user',
        content: 'The Sony one looks great! I\'ll take it',
        timestamp: '10:32 AM'
      },
      {
        id: 'msg-1-5',
        type: 'ai',
        content: 'Excellent choice! The Sony WH-CH520 is very popular. Let me prepare your order confirmation.',
        timestamp: '10:32 AM'
      },
      {
        id: 'msg-1-6',
        type: 'order-status',
        order: {
          orderId: 'ORD-2024-001',
          status: 'shipped',
          product: {
            id: 'prod-1',
            name: 'Sony WH-CH520 Wireless Headphones',
            price: 4499,
            originalPrice: 5990,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            rating: 4.5,
            reviews: 12453
          },
          orderDate: 'Dec 22, 2024',
          estimatedDelivery: 'Dec 24, 2024',
          trackingId: 'TRACK123456789',
          shippingAddress: '123 MG Road, Bangalore 560001'
        },
        timestamp: '10:33 AM'
      }
    ]
  },
  {
    id: 'thread-2',
    title: 'I need a gift for my mom\'s birthday',
    lastMessage: 'Here are some thoughtful gift ideas',
    timestamp: '5 hours ago',
    hasOrder: false,
    messages: [
      {
        id: 'msg-2-1',
        type: 'user',
        content: 'I need a gift for my mom\'s birthday',
        timestamp: '7:15 AM'
      },
      {
        id: 'msg-2-2',
        type: 'ai',
        content: 'How wonderful! I\'d love to help you find the perfect gift. What are your mom\'s interests? And what\'s your budget?',
        timestamp: '7:15 AM'
      },
      {
        id: 'msg-2-3',
        type: 'user',
        content: 'She loves jewelry and elegant accessories. Budget around ₹3000',
        timestamp: '7:17 AM'
      },
      {
        id: 'msg-2-4',
        type: 'ai',
        content: 'Perfect! Here are some elegant jewelry pieces that would make beautiful birthday gifts:',
        timestamp: '7:17 AM'
      },
      {
        id: 'msg-2-5',
        type: 'product',
        products: [
          {
            id: 'prod-3',
            name: 'Pearl Drop Earrings with Gold Plating',
            price: 2799,
            originalPrice: 4999,
            image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
            rating: 4.7,
            reviews: 3421,
            description: 'Elegant pearl drop earrings with 18K gold plating',
            features: ['18K Gold Plated', 'Natural Pearls', 'Gift Boxed', '1 Year Warranty']
          },
          {
            id: 'prod-4',
            name: 'Designer Silk Scarf Collection',
            price: 1899,
            originalPrice: 3500,
            image: 'https://images.unsplash.com/photo-1601924287166-019cc06ca9f5?w=400&h=400&fit=crop',
            rating: 4.6,
            reviews: 1876,
            description: 'Luxurious silk scarf with floral patterns',
            features: ['100% Pure Silk', 'Hand-rolled Edges', 'Multiple Colors', 'Gift Wrapped']
          }
        ],
        timestamp: '7:18 AM'
      },
      {
        id: 'msg-2-6',
        type: 'order-cta',
        content: 'These would be perfect gifts! Would you like to order one? I can arrange gift wrapping and include a personalized message card.',
        timestamp: '7:18 AM'
      }
    ]
  },
  {
    id: 'thread-3',
    title: 'Show me trending sneakers this week',
    lastMessage: 'Order confirmed! Arriving tomorrow',
    timestamp: '1 day ago',
    hasOrder: true,
    orderStatus: 'confirmed',
    messages: [
      {
        id: 'msg-3-1',
        type: 'user',
        content: 'Show me trending sneakers this week',
        timestamp: 'Yesterday, 3:20 PM'
      },
      {
        id: 'msg-3-2',
        type: 'ai',
        content: 'Great timing! Here are the hottest sneakers trending right now with amazing deals:',
        timestamp: 'Yesterday, 3:20 PM'
      },
      {
        id: 'msg-3-3',
        type: 'product',
        products: [
          {
            id: 'prod-5',
            name: 'Nike Air Max 270 React',
            price: 8999,
            originalPrice: 12995,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
            rating: 4.8,
            reviews: 5432,
            description: 'Premium running shoes with Air Max cushioning',
            features: ['Air Max Technology', 'Breathable Mesh', 'Durable Outsole', 'Multiple Colors']
          },
          {
            id: 'prod-6',
            name: 'Adidas Ultraboost 22',
            price: 9499,
            originalPrice: 14999,
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
            rating: 4.7,
            reviews: 4123,
            description: 'Revolutionary comfort with Boost technology',
            features: ['Boost Cushioning', 'Primeknit Upper', 'Continental Rubber', 'Energy Return']
          }
        ],
        timestamp: 'Yesterday, 3:21 PM'
      },
      {
        id: 'msg-3-4',
        type: 'user',
        content: 'The Nike Air Max looks perfect! Size 9 please',
        timestamp: 'Yesterday, 3:25 PM'
      },
      {
        id: 'msg-3-5',
        type: 'ai',
        content: 'Great choice! Confirming Nike Air Max 270 React in size 9. Processing your order now...',
        timestamp: 'Yesterday, 3:25 PM'
      },
      {
        id: 'msg-3-6',
        type: 'order-status',
        order: {
          orderId: 'ORD-2024-002',
          status: 'confirmed',
          product: {
            id: 'prod-5',
            name: 'Nike Air Max 270 React',
            price: 8999,
            originalPrice: 12995,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
            rating: 4.8,
            reviews: 5432
          },
          orderDate: 'Dec 21, 2024',
          estimatedDelivery: 'Dec 23, 2024',
          trackingId: 'TRACK987654321',
          shippingAddress: '456 Koramangala, Bangalore 560034'
        },
        timestamp: 'Yesterday, 3:26 PM'
      }
    ]
  },
  {
    id: 'thread-4',
    title: 'Find organic skincare for sensitive skin',
    lastMessage: 'Check out these gentle products',
    timestamp: '2 days ago',
    hasOrder: false,
    messages: [
      {
        id: 'msg-4-1',
        type: 'user',
        content: 'Find organic skincare for sensitive skin',
        timestamp: 'Dec 20, 11:30 AM'
      },
      {
        id: 'msg-4-2',
        type: 'ai',
        content: 'I understand sensitive skin needs special care. Here are certified organic skincare products specifically formulated for sensitive skin:',
        timestamp: 'Dec 20, 11:30 AM'
      },
      {
        id: 'msg-4-3',
        type: 'product',
        products: [
          {
            id: 'prod-7',
            name: 'Organic Aloe Vera Gel - Pure & Natural',
            price: 399,
            originalPrice: 699,
            image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
            rating: 4.6,
            reviews: 2341,
            description: '99% pure aloe vera gel for sensitive skin',
            features: ['Certified Organic', 'Fragrance Free', 'Dermatologist Tested', 'No Parabens']
          },
          {
            id: 'prod-8',
            name: 'Gentle Cleansing Face Wash',
            price: 549,
            originalPrice: 899,
            image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
            rating: 4.5,
            reviews: 1876,
            description: 'pH-balanced cleanser for sensitive skin',
            features: ['Hypoallergenic', 'Soap Free', 'Natural Ingredients', 'Cruelty Free']
          }
        ],
        timestamp: 'Dec 20, 11:31 AM'
      },
      {
        id: 'msg-4-4',
        type: 'order-cta',
        content: 'Both products are dermatologist-recommended for sensitive skin. Would you like to try them? I can create a combo offer for you!',
        timestamp: 'Dec 20, 11:31 AM'
      }
    ]
  },
  {
    id: 'thread-5',
    title: 'Best laptop for college student',
    lastMessage: 'Delivered! Hope you love it',
    timestamp: '1 week ago',
    hasOrder: true,
    orderStatus: 'delivered',
    messages: [
      {
        id: 'msg-5-1',
        type: 'user',
        content: 'Best laptop for college student',
        timestamp: 'Dec 15, 2:00 PM'
      },
      {
        id: 'msg-5-2',
        type: 'ai',
        content: 'Perfect timing for college prep! Here are the best laptops for students - great performance and battery life:',
        timestamp: 'Dec 15, 2:00 PM'
      },
      {
        id: 'msg-5-3',
        type: 'product',
        products: [
          {
            id: 'prod-9',
            name: 'Dell Inspiron 15 3000 Series',
            price: 42999,
            originalPrice: 54990,
            image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
            rating: 4.4,
            reviews: 3421,
            description: 'Intel i5 11th Gen, 8GB RAM, 512GB SSD',
            features: ['8GB RAM', '512GB SSD', '15.6" FHD Display', 'Windows 11']
          }
        ],
        timestamp: 'Dec 15, 2:01 PM'
      },
      {
        id: 'msg-5-4',
        type: 'user',
        content: 'This looks perfect! Let\'s order it',
        timestamp: 'Dec 15, 2:10 PM'
      },
      {
        id: 'msg-5-5',
        type: 'order-status',
        order: {
          orderId: 'ORD-2024-003',
          status: 'delivered',
          product: {
            id: 'prod-9',
            name: 'Dell Inspiron 15 3000 Series',
            price: 42999,
            originalPrice: 54990,
            image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
            rating: 4.4,
            reviews: 3421
          },
          orderDate: 'Dec 15, 2024',
          estimatedDelivery: 'Dec 18, 2024',
          trackingId: 'TRACK456789123',
          shippingAddress: '789 Whitefield, Bangalore 560066'
        },
        timestamp: 'Dec 18, 10:00 AM'
      },
      {
        id: 'msg-5-6',
        type: 'ai',
        content: '🎉 Your laptop has been delivered! Hope it serves you well throughout college. Let me know if you need any accessories or software!',
        timestamp: 'Dec 18, 10:05 AM'
      }
    ]
  },
  {
    id: 'thread-6',
    title: 'Show my recent orders',
    lastMessage: 'Here are your recent orders',
    timestamp: '3 days ago',
    hasOrder: true,
    orderStatus: 'shipped',
    messages: [
      {
        id: 'msg-6-1',
        type: 'user',
        content: 'Show my recent orders',
        timestamp: 'Dec 19, 4:30 PM'
      },
      {
        id: 'msg-6-2',
        type: 'ai',
        content: 'Here are your recent orders! You can tap on any order to see more details and track delivery:',
        timestamp: 'Dec 19, 4:30 PM'
      },
      {
        id: 'msg-6-3',
        type: 'order-carousel',
        orders: [
          {
            orderId: 'ORD-2024-001',
            status: 'shipped',
            product: {
              id: 'prod-1',
              name: 'Sony WH-CH520 Wireless Headphones',
              price: 4499,
              originalPrice: 5990,
              image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 12453
            },
            orderDate: 'Dec 22, 2024',
            estimatedDelivery: 'Dec 24, 2024',
            trackingId: 'TRACK123456789',
            shippingAddress: '123 MG Road, Bangalore 560001'
          },
          {
            orderId: 'ORD-2024-002',
            status: 'confirmed',
            product: {
              id: 'prod-5',
              name: 'Nike Air Max 270 React',
              price: 8999,
              originalPrice: 12995,
              image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 5432
            },
            orderDate: 'Dec 21, 2024',
            estimatedDelivery: 'Dec 23, 2024',
            trackingId: 'TRACK987654321',
            shippingAddress: '456 Koramangala, Bangalore 560034'
          },
          {
            orderId: 'ORD-2024-003',
            status: 'delivered',
            product: {
              id: 'prod-9',
              name: 'Dell Inspiron 15 3000 Series',
              price: 42999,
              originalPrice: 54990,
              image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
              rating: 4.4,
              reviews: 3421
            },
            orderDate: 'Dec 15, 2024',
            estimatedDelivery: 'Dec 18, 2024',
            trackingId: 'TRACK456789123',
            shippingAddress: '789 Whitefield, Bangalore 560066'
          }
        ],
        timestamp: 'Dec 19, 4:30 PM'
      },
      {
        id: 'msg-6-4',
        type: 'ai',
        content: 'Your Sony headphones are on their way and should arrive tomorrow! The Nike sneakers have been confirmed and will ship soon. Need help with anything else?',
        timestamp: 'Dec 19, 4:31 PM'
      }
    ]
  }
];