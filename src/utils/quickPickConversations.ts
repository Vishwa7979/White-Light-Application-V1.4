// Quick Pick Conversations Mapping
// Maps each quick pick to a contextual conversation thread with sequential, interactive flow

import { ChatThread } from './chatThreadsData';

export interface QuickPickConversation {
  quickPickPrompt: string;
  conversation: ChatThread;
}

// Comprehensive conversation threads for all 14 quick picks
// Each conversation is designed to be sequential - messages appear one-by-one as user interacts
export const quickPickConversations: QuickPickConversation[] = [
  {
    quickPickPrompt: "Find me a Samsung phone under ₹20,000",
    conversation: {
      id: 'qp-samsung-phone',
      title: 'Find me a Samsung phone',
      lastMessage: 'Here are the best Samsung phones',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-sp-1',
          type: 'user',
          content: 'Find me a Samsung phone under ₹20,000',
          timestamp: 'Just now'
        },
        {
          id: 'msg-sp-2',
          type: 'ai',
          content: 'Great choice! I can help you find the perfect Samsung phone. What matters most to you - camera quality, battery life, or gaming performance?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT - expects user to respond
        {
          id: 'msg-sp-3',
          type: 'user',
          content: 'I want good battery life and a decent camera',
          timestamp: 'Just now'
        },
        {
          id: 'msg-sp-4',
          type: 'ai',
          content: 'Perfect! For battery life and camera, Samsung has excellent 5G options. Here are the top picks under ₹20,000:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-sp-5',
          type: 'product',
          products: [
            {
              id: 'prod-samsung-1',
              name: 'Samsung Galaxy M34 5G',
              price: 18999,
              originalPrice: 24999,
              image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 8432,
              description: '6GB RAM, 128GB Storage, 6000mAh Battery',
              features: ['5G Ready', '120Hz Display', '50MP Camera', '6000mAh Battery']
            },
            {
              id: 'prod-samsung-2',
              name: 'Samsung Galaxy F14 5G',
              price: 14999,
              originalPrice: 19999,
              image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
              rating: 4.4,
              reviews: 5621,
              description: '4GB RAM, 128GB Storage, Segment Best Display',
              features: ['6.6" FHD+', '5G Network', 'Long Battery', 'Fast Charging']
            },
            {
              id: 'prod-samsung-3',
              name: 'Samsung Galaxy A14 5G',
              price: 16499,
              originalPrice: 21999,
              image: 'https://images.unsplash.com/photo-1583573607873-4ab69a4d0e9f?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 7234,
              description: '6GB RAM, 128GB Storage, Triple Camera',
              features: ['50MP Triple Camera', '5000mAh Battery', '90Hz Display', 'Expandable Storage']
            },
            {
              id: 'prod-samsung-4',
              name: 'Samsung Galaxy M13 5G',
              price: 13999,
              originalPrice: 18999,
              image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
              rating: 4.3,
              reviews: 4532,
              description: '4GB RAM, 64GB Storage, Mediatek Dimensity',
              features: ['Dimensity 700', 'Dual Camera', '5000mAh', 'OneUI 5.0']
            },
            {
              id: 'prod-samsung-5',
              name: 'Samsung Galaxy F23 5G',
              price: 17999,
              originalPrice: 22999,
              image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 6123,
              description: '6GB RAM, 128GB Storage, Snapdragon 750G',
              features: ['Snapdragon 750G', '6000mAh Battery', '120Hz Display', '25W Fast Charge']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-sp-6',
          type: 'ai',
          content: 'The M34 is my top recommendation - it has a massive 6000mAh battery that lasts 2 days and a 50MP camera. The F14 is ₹4000 cheaper with solid specs. Both come with 1-year warranty and free delivery!',
          timestamp: 'Just now'
        },
        {
          id: 'msg-sp-7',
          type: 'order-cta',
          content: 'Would you like to order the Samsung Galaxy M34 5G? I can arrange delivery by tomorrow with secure payment and easy returns!',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "Find me a gift for my wife",
    conversation: {
      id: 'qp-gift-wife',
      title: 'Gift for my wife',
      lastMessage: 'Here are some beautiful gift options',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-gw-1',
          type: 'user',
          content: 'Find me a gift for my wife',
          timestamp: 'Just now'
        },
        {
          id: 'msg-gw-2',
          type: 'ai',
          content: 'How thoughtful! I\'d love to help you find the perfect gift. Is this for a special occasion like birthday, anniversary, or just to show appreciation?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-gw-3',
          type: 'user',
          content: 'It\'s our anniversary next week',
          timestamp: 'Just now'
        },
        {
          id: 'msg-gw-4',
          type: 'ai',
          content: 'Congratulations! Anniversary gifts should be extra special. What does she love - jewelry, fashion, beauty products, or perhaps something personalized?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-gw-5',
          type: 'user',
          content: 'She loves jewelry and elegant accessories',
          timestamp: 'Just now'
        },
        {
          id: 'msg-gw-6',
          type: 'ai',
          content: 'Wonderful! Here are exquisite jewelry pieces that will make your anniversary unforgettable:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-gw-7',
          type: 'product',
          products: [
            {
              id: 'prod-jewelry-1',
              name: 'Diamond-Studded Rose Gold Bracelet',
              price: 12999,
              originalPrice: 19999,
              image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 2341,
              description: 'Elegant rose gold bracelet with certified diamonds',
              features: ['Certified Diamonds', '18K Rose Gold', 'Gift Wrapped', 'Lifetime Exchange']
            },
            {
              id: 'prod-jewelry-2',
              name: 'Pearl Necklace Set with Earrings',
              price: 8999,
              originalPrice: 14999,
              image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 1876,
              description: 'Classic pearl necklace with matching earrings',
              features: ['Natural Pearls', 'Sterling Silver', 'Matching Set', 'Luxury Box']
            },
            {
              id: 'prod-jewelry-3',
              name: 'Emerald & Diamond Ring',
              price: 15999,
              originalPrice: 24999,
              image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 3124,
              description: 'Stunning emerald ring with diamond accents',
              features: ['Natural Emerald', '14K White Gold', 'Certificate Included', 'Free Resizing']
            },
            {
              id: 'prod-jewelry-4',
              name: 'Personalized Name Pendant',
              price: 4999,
              originalPrice: 7999,
              image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 5432,
              description: 'Customizable gold pendant with her name',
              features: ['22K Gold Plated', 'Personalized Engraving', 'Delicate Chain', '2-Day Delivery']
            },
            {
              id: 'prod-jewelry-5',
              name: 'Luxury Watch for Women',
              price: 18999,
              originalPrice: 29999,
              image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 2987,
              description: 'Elegant timepiece with crystal-studded bezel',
              features: ['Swiss Movement', 'Sapphire Crystal', 'Water Resistant', '2-Year Warranty']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-gw-8',
          type: 'ai',
          content: 'Both pieces are timeless and romantic! The rose gold bracelet adds modern elegance, while the pearl set is classic sophistication. I can arrange premium gift wrapping with a personalized anniversary card and ensure delivery 2 days before your anniversary!',
          timestamp: 'Just now'
        },
        {
          id: 'msg-gw-9',
          type: 'order-cta',
          content: 'Perfect for your anniversary! Would you like to order the Diamond-Studded Rose Gold Bracelet? It comes with complimentary gift wrapping and a personalized card.',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "Show me the best deals this week",
    conversation: {
      id: 'qp-best-deals',
      title: 'Best deals this week',
      lastMessage: 'Amazing offers just for you!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-bd-1',
          type: 'user',
          content: 'Show me the best deals this week',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bd-2',
          type: 'ai',
          content: 'Great timing! This week we have incredible deals across categories. Here are the hottest offers with up to 50% off:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bd-3',
          type: 'product',
          products: [
            {
              id: 'prod-deal-1',
              name: 'Apple AirPods Pro (2nd Gen)',
              price: 19999,
              originalPrice: 26900,
              image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 15432,
              description: 'Active Noise Cancellation, up to 6hrs listening',
              features: ['ANC', 'Spatial Audio', 'MagSafe Charging', 'Sweat Resistant']
            },
            {
              id: 'prod-deal-2',
              name: 'Sony 43" 4K Ultra HD Smart TV',
              price: 32999,
              originalPrice: 54990,
              image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 9234,
              description: '4K HDR, Google TV, Dolby Audio',
              features: ['4K HDR', 'Google TV', 'Voice Remote', '3 HDMI Ports']
            },
            {
              id: 'prod-deal-3',
              name: 'Fitbit Charge 6 Fitness Tracker',
              price: 11999,
              originalPrice: 17999,
              image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 6721,
              description: 'Heart Rate, Sleep Tracking, 7-day Battery',
              features: ['Heart Rate Monitor', 'GPS', 'Sleep Tracking', '7-Day Battery']
            },
            {
              id: 'prod-deal-4',
              name: 'Dyson V8 Cordless Vacuum',
              price: 24999,
              originalPrice: 39990,
              image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 5432,
              description: 'Powerful suction, 40-min runtime',
              features: ['Cordless', 'HEPA Filter', '40min Runtime', 'Multiple Attachments']
            },
            {
              id: 'prod-deal-5',
              name: 'Kindle Paperwhite (16GB)',
              price: 12999,
              originalPrice: 16999,
              image: 'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 18234,
              description: 'Waterproof e-reader with adjustable warm light',
              features: ['6.8" Display', 'Waterproof', 'Warm Light', '16GB Storage']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-bd-4',
          type: 'ai',
          content: 'These deals end in 3 days! Up to 40% off on select items. Which category interests you most - electronics, home appliances, or entertainment?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-bd-5',
          type: 'user',
          content: 'The AirPods look great!',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bd-6',
          type: 'order-cta',
          content: 'Amazing choice! The AirPods Pro are at ₹6,901 off - that\'s the lowest price this year. Would you like to grab them before the deal ends? Limited stock available!',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "What's trending right now?",
    conversation: {
      id: 'qp-trending',
      title: 'Trending products',
      lastMessage: 'Check out what\'s hot!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-tr-1',
          type: 'user',
          content: 'What\'s trending right now?',
          timestamp: 'Just now'
        },
        {
          id: 'msg-tr-2',
          type: 'ai',
          content: 'Here are the most popular products this week - everyone\'s talking about these! These items have seen a huge spike in searches and purchases:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-tr-3',
          type: 'product',
          products: [
            {
              id: 'prod-trend-1',
              name: 'iPhone 15 Pro Max',
              price: 134900,
              originalPrice: 159900,
              image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 28432,
              description: 'Titanium Design, A17 Pro Chip, 256GB',
              features: ['Titanium Frame', 'A17 Pro', '48MP Camera', 'USB-C']
            },
            {
              id: 'prod-trend-2',
              name: 'Stanley Quencher Tumbler 40oz',
              price: 3499,
              originalPrice: 4999,
              image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 12876,
              description: 'Viral insulated tumbler keeps drinks cold 48hrs',
              features: ['48hr Cold', 'Leak Proof', 'Dishwasher Safe', 'Fits Cup Holder']
            },
            {
              id: 'prod-trend-3',
              name: 'Nike Air Force 1 \'07',
              price: 7995,
              originalPrice: 9995,
              image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 23456,
              description: 'Classic white sneakers, iconic style',
              features: ['Leather Upper', 'Cushioned Sole', 'Classic Design', 'Multiple Sizes']
            },
            {
              id: 'prod-trend-4',
              name: 'Olaplex Hair Treatment Set',
              price: 5999,
              originalPrice: 8999,
              image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 9876,
              description: 'Viral hair repair system loved by influencers',
              features: ['Bond Repair', 'No.3 & No.8', 'All Hair Types', 'Salon Quality']
            },
            {
              id: 'prod-trend-5',
              name: 'PlayStation 5 Slim',
              price: 44990,
              originalPrice: 54990,
              image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 15234,
              description: 'Latest gaming console with Spider-Man 2',
              features: ['1TB SSD', 'Ray Tracing', 'DualSense Controller', 'Game Included']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-tr-4',
          type: 'ai',
          content: 'These are flying off the shelves! The Stanley tumbler is especially popular on social media. Want to see more trending items in a specific category?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "I need a laptop for work and creative tasks",
    conversation: {
      id: 'qp-laptop-work',
      title: 'Laptop for work',
      lastMessage: 'Perfect laptops for productivity',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-lw-1',
          type: 'user',
          content: 'I need a laptop for work and creative tasks',
          timestamp: 'Just now'
        },
        {
          id: 'msg-lw-2',
          type: 'ai',
          content: 'Great! For work and creative tasks, you\'ll want good performance and a quality display. What\'s your budget range?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-lw-3',
          type: 'user',
          content: 'Around ₹60,000 to ₹80,000',
          timestamp: 'Just now'
        },
        {
          id: 'msg-lw-4',
          type: 'ai',
          content: 'Perfect budget! Here are excellent laptops for creative professionals in that range:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-lw-5',
          type: 'product',
          products: [
            {
              id: 'prod-laptop-1',
              name: 'MacBook Air M2',
              price: 74990,
              originalPrice: 94900,
              image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 18432,
              description: 'M2 Chip, 8GB RAM, 256GB SSD, 13.6" Retina',
              features: ['M2 Chip', '18hr Battery', 'Retina Display', 'Lightweight']
            },
            {
              id: 'prod-laptop-2',
              name: 'HP Pavilion Plus 14',
              price: 68990,
              originalPrice: 89990,
              image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 7234,
              description: 'Intel i7 12th Gen, 16GB RAM, 512GB SSD',
              features: ['2.8K OLED', '16GB RAM', 'Backlit Keyboard', 'Thunderbolt 4']
            },
            {
              id: 'prod-laptop-3',
              name: 'Dell XPS 13 Plus',
              price: 79990,
              originalPrice: 99990,
              image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 9876,
              description: 'Intel i5 12th Gen, 16GB RAM, 512GB SSD',
              features: ['13.4" FHD+', 'Premium Build', 'Fingerprint Reader', 'WiFi 6E']
            },
            {
              id: 'prod-laptop-4',
              name: 'ASUS VivoBook Pro 15',
              price: 64990,
              originalPrice: 84990,
              image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 5432,
              description: 'AMD Ryzen 7, 16GB RAM, 512GB SSD',
              features: ['OLED Display', 'GeForce GTX', 'Numpad', 'Harman Kardon']
            },
            {
              id: 'prod-laptop-5',
              name: 'Lenovo IdeaPad Slim 5',
              price: 62990,
              originalPrice: 79990,
              image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
              rating: 4.4,
              reviews: 6234,
              description: 'Intel i7 12th Gen, 16GB RAM, 512GB SSD',
              features: ['14" 2.2K', 'Metal Body', 'Backlit KB', 'Rapid Charge']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-lw-6',
          type: 'ai',
          content: 'The MacBook Air is excellent for creative work with Final Cut Pro and Adobe apps. The HP offers better value with more RAM and an OLED display. Which direction are you leaning - macOS or Windows?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "Show me smartwatch deals",
    conversation: {
      id: 'qp-smartwatch',
      title: 'Smartwatch deals',
      lastMessage: 'Amazing smartwatch offers!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-sw-1',
          type: 'user',
          content: 'Show me smartwatch deals',
          timestamp: 'Just now'
        },
        {
          id: 'msg-sw-2',
          type: 'ai',
          content: 'Fantastic timing! We have amazing deals on smartwatches right now. Here are the best offers across all price ranges:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-sw-3',
          type: 'product',
          products: [
            {
              id: 'prod-watch-1',
              name: 'Apple Watch Series 9 GPS',
              price: 37900,
              originalPrice: 45900,
              image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 23421,
              description: 'Always-On Retina Display, Blood Oxygen, ECG',
              features: ['S9 Chip', 'Blood Oxygen', 'ECG', 'Crash Detection']
            },
            {
              id: 'prod-watch-2',
              name: 'Samsung Galaxy Watch 6',
              price: 24999,
              originalPrice: 32999,
              image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 15432,
              description: 'Advanced Sleep Tracking, Heart Rate, GPS',
              features: ['Sleep Coaching', 'Body Composition', '40hr Battery', 'Sapphire Crystal']
            },
            {
              id: 'prod-watch-3',
              name: 'Noise ColorFit Pro 4',
              price: 2999,
              originalPrice: 6999,
              image: 'https://images.unsplash.com/photo-1617625802912-cde586faf331?w=400&h=400&fit=crop',
              rating: 4.3,
              reviews: 8921,
              description: 'Budget smartwatch with all essential features',
              features: ['1.78" Display', '100 Sports Modes', '7-Day Battery', 'IP68 Waterproof']
            },
            {
              id: 'prod-watch-4',
              name: 'Fitbit Versa 4',
              price: 16999,
              originalPrice: 22999,
              image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 12345,
              description: 'Comprehensive fitness & health tracking',
              features: ['Built-in GPS', 'Sleep Score', '6-Day Battery', 'Alexa Built-in']
            },
            {
              id: 'prod-watch-5',
              name: 'Garmin Forerunner 255',
              price: 28999,
              originalPrice: 36999,
              image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 7654,
              description: 'Premium running watch with advanced metrics',
              features: ['Multi-Band GPS', 'Training Readiness', '14-Day Battery', 'Race Predictor']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-sw-4',
          type: 'ai',
          content: 'From premium to budget-friendly, all great options! The Apple Watch has the best ecosystem if you use iPhone. The Samsung offers great value with advanced health features. Which features matter most to you - fitness tracking, notifications, or battery life?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "I need birthday party supplies",
    conversation: {
      id: 'qp-birthday',
      title: 'Birthday party supplies',
      lastMessage: 'Let\'s plan an amazing party!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-bp-1',
          type: 'user',
          content: 'I need birthday party supplies',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bp-2',
          type: 'ai',
          content: 'How exciting! Let\'s make this party special. What\'s the age group and theme you\'re thinking of?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-bp-3',
          type: 'user',
          content: '5 year old, unicorn theme',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bp-4',
          type: 'ai',
          content: 'Perfect! Unicorn themes are magical for 5-year-olds. Here are some adorable party supplies to make it unforgettable:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bp-5',
          type: 'product',
          products: [
            {
              id: 'prod-party-1',
              name: 'Unicorn Birthday Party Decoration Kit',
              price: 1499,
              originalPrice: 2999,
              image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 3421,
              description: 'Complete decoration set with balloons, banner, tableware',
              features: ['50+ Pieces', 'Balloons Included', 'Serves 16', 'Photo Props']
            },
            {
              id: 'prod-party-2',
              name: 'Unicorn Cake Topper & Cupcake Set',
              price: 599,
              originalPrice: 1299,
              image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 2134,
              description: 'Glittery unicorn cake toppers and cupcake decorations',
              features: ['Glitter Finish', 'Reusable', '24 Cupcake Toppers', 'Food Safe']
            },
            {
              id: 'prod-party-3',
              name: 'Unicorn Party Favor Bags (Set of 12)',
              price: 799,
              originalPrice: 1499,
              image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 1876,
              description: 'Pre-filled goodie bags with unicorn toys',
              features: ['12 Bags', 'Toys Included', 'Stickers & Tattoos', 'Ready to Give']
            },
            {
              id: 'prod-party-4',
              name: 'Rainbow Unicorn Piñata',
              price: 1299,
              originalPrice: 2199,
              image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 2543,
              description: 'Large unicorn piñata with rainbow mane',
              features: ['Holds 2kg Candy', 'Pull-String Safe', 'Handmade', 'Photo Ready']
            },
            {
              id: 'prod-party-5',
              name: 'Unicorn Face Painting Kit',
              price: 899,
              originalPrice: 1599,
              image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 1654,
              description: 'Non-toxic face paint set with unicorn stencils',
              features: ['8 Colors', 'Brushes Included', 'Stencils', 'Easy Wash']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-bp-6',
          type: 'ai',
          content: 'These will make the party magical! I can also help you find unicorn party games, return gifts, and a unicorn birthday dress. Want to see those too?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "Find me running shoes for marathon training",
    conversation: {
      id: 'qp-running-shoes',
      title: 'Running shoes',
      lastMessage: 'Best shoes for marathon training',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-rs-1',
          type: 'user',
          content: 'Find me running shoes for marathon training',
          timestamp: 'Just now'
        },
        {
          id: 'msg-rs-2',
          type: 'ai',
          content: 'Excellent goal! Marathon training requires proper cushioning and support to prevent injuries. Here are the best running shoes recommended by marathon runners:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-rs-3',
          type: 'product',
          products: [
            {
              id: 'prod-shoes-1',
              name: 'Nike ZoomX Vaporfly Next% 2',
              price: 17995,
              originalPrice: 22995,
              image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 8432,
              description: 'Elite marathon racing shoe with carbon plate',
              features: ['Carbon Fiber Plate', 'ZoomX Foam', 'Lightweight', 'Energy Return']
            },
            {
              id: 'prod-shoes-2',
              name: 'Adidas Ultraboost 23',
              price: 14999,
              originalPrice: 18999,
              image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 12341,
              description: 'Maximum cushioning for long distance comfort',
              features: ['Boost Technology', 'Continental Rubber', 'Primeknit Upper', 'Torsion System']
            },
            {
              id: 'prod-shoes-3',
              name: 'Hoka Clifton 9',
              price: 12999,
              originalPrice: 16999,
              image: 'https://images.unsplash.com/photo-1515396800500-aaf4e13c2fda?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 9876,
              description: 'Plush cushioning meets lightweight design',
              features: ['Meta-Rocker', 'Compression EVA', 'Breathable Mesh', 'Early Stage Rocker']
            },
            {
              id: 'prod-shoes-4',
              name: 'Brooks Ghost 15',
              price: 11999,
              originalPrice: 14999,
              image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 11234,
              description: 'Neutral support for smooth transitions',
              features: ['DNA LOFT', 'Segmented Crash Pad', 'Soft Cushioning', '3D Fit Print']
            },
            {
              id: 'prod-shoes-5',
              name: 'ASICS Gel-Nimbus 25',
              price: 13499,
              originalPrice: 17999,
              image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 7654,
              description: 'Superior cushioning for high-mileage training',
              features: ['FF BLAST+', 'Gel Technology', 'Engineered Mesh', 'AHAR Rubber']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-rs-4',
          type: 'ai',
          content: 'The Vaporfly is race-day ready with its carbon plate, while Ultraboost and Hoka are perfect for daily training miles. What\'s your shoe size and preferred fit - snug or roomy toe box?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "Best wireless headphones under ₹5000",
    conversation: {
      id: 'qp-headphones',
      title: 'Wireless headphones',
      lastMessage: 'Top picks under ₹5000',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-hp-1',
          type: 'user',
          content: 'Best wireless headphones under ₹5000',
          timestamp: 'Just now'
        },
        {
          id: 'msg-hp-2',
          type: 'ai',
          content: 'Great budget! Here are the best wireless headphones under ₹5000 with excellent sound quality and battery life:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-hp-3',
          type: 'product',
          products: [
            {
              id: 'prod-hp-1',
              name: 'Sony WH-CH520 Wireless Headphones',
              price: 4499,
              originalPrice: 5990,
              image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 15432,
              description: 'Up to 50 hours battery, crystal clear sound',
              features: ['50hr Battery', 'Quick Charge', 'Built-in Mic', 'Lightweight']
            },
            {
              id: 'prod-hp-2',
              name: 'JBL Tune 760NC',
              price: 4999,
              originalPrice: 7999,
              image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 9821,
              description: 'Active Noise Cancellation, Pure Bass Sound',
              features: ['ANC', 'JBL Pure Bass', '35hr Battery', 'Foldable']
            },
            {
              id: 'prod-hp-3',
              name: 'boAt Rockerz 550',
              price: 2999,
              originalPrice: 4990,
              image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop',
              rating: 4.3,
              reviews: 23456,
              description: 'Budget-friendly with physical playback controls',
              features: ['20hr Battery', 'Physical Controls', 'Plush Earcups', 'Dual Modes']
            },
            {
              id: 'prod-hp-4',
              name: 'Sennheiser HD 450BT',
              price: 4899,
              originalPrice: 13999,
              image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 6543,
              description: 'Premium sound with active noise cancellation',
              features: ['ANC', 'Deep Bass', '30hr Battery', 'Voice Assistant']
            },
            {
              id: 'prod-hp-5',
              name: 'Soundcore Life Q30',
              price: 4499,
              originalPrice: 6999,
              image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 11234,
              description: 'Multi-mode ANC with Hi-Res audio',
              features: ['Multi-Mode ANC', '40hr Battery', 'Hi-Res Audio', 'App Support']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-hp-4',
          type: 'ai',
          content: 'Both are excellent choices! Sony offers the longest battery life at 50 hours, while JBL has active noise cancellation. Sennheiser provides premium sound quality. Which feature is more important to you - battery life, ANC, or sound quality?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "I want to upgrade my living room furniture",
    conversation: {
      id: 'qp-furniture',
      title: 'Living room furniture',
      lastMessage: 'Transform your living space!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-fur-1',
          type: 'user',
          content: 'I want to upgrade my living room furniture',
          timestamp: 'Just now'
        },
        {
          id: 'msg-fur-2',
          type: 'ai',
          content: 'Exciting! A living room makeover. What\'s your style preference - modern, traditional, or minimalist?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-fur-3',
          type: 'user',
          content: 'Modern minimalist, neutral colors',
          timestamp: 'Just now'
        },
        {
          id: 'msg-fur-4',
          type: 'ai',
          content: 'Perfect! Here are stunning modern minimalist furniture pieces in neutral tones:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-fur-5',
          type: 'product',
          products: [
            {
              id: 'prod-fur-1',
              name: 'Scandinavian L-Shape Sofa (Beige)',
              price: 45999,
              originalPrice: 69999,
              image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 3421,
              description: '6-seater L-shape sofa with premium fabric',
              features: ['Premium Linen Fabric', 'Solid Wood Frame', 'Removable Covers', 'Free Assembly']
            },
            {
              id: 'prod-fur-2',
              name: 'Modern Coffee Table with Storage',
              price: 12999,
              originalPrice: 18999,
              image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 2134,
              description: 'Minimalist design with hidden storage',
              features: ['Hidden Storage', 'Tempered Glass Top', 'Engineered Wood', 'Easy Assembly']
            },
            {
              id: 'prod-fur-3',
              name: 'Mid-Century Accent Chair (Grey)',
              price: 15999,
              originalPrice: 24999,
              image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 1876,
              description: 'Comfortable accent chair with wooden legs',
              features: ['Upholstered Seat', 'Wooden Legs', 'Ergonomic', '2-Piece Set']
            },
            {
              id: 'prod-fur-4',
              name: 'Floating TV Unit (White Oak)',
              price: 18999,
              originalPrice: 28999,
              image: 'https://images.unsplash.com/photo-1565183928294-7d22f6f53d58?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 2987,
              description: 'Wall-mounted TV unit with cable management',
              features: ['Wall-Mounted', 'Cable Management', 'Up to 55" TV', 'Soft-Close Drawers']
            },
            {
              id: 'prod-fur-5',
              name: 'Minimalist Bookshelf (5-Tier)',
              price: 8999,
              originalPrice: 13999,
              image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=400&fit=crop',
              rating: 4.4,
              reviews: 3456,
              description: 'Open shelving unit for books and decor',
              features: ['5 Tiers', 'Metal Frame', 'Wooden Shelves', 'Anti-Tip Kit']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-fur-6',
          type: 'ai',
          content: 'These pieces will create a cohesive modern look! The L-shape sofa is perfect as an anchor piece, and the coffee table complements it beautifully. I can also help you find matching rugs, wall art, and lighting. Interested?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "Best coffee maker for home",
    conversation: {
      id: 'qp-coffee',
      title: 'Coffee maker for home',
      lastMessage: 'Brew barista-quality coffee!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-cf-1',
          type: 'user',
          content: 'Best coffee maker for home',
          timestamp: 'Just now'
        },
        {
          id: 'msg-cf-2',
          type: 'ai',
          content: 'Great! Nothing beats fresh coffee at home. What type do you prefer - espresso, drip coffee, or French press?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-cf-3',
          type: 'user',
          content: 'Espresso and cappuccinos',
          timestamp: 'Just now'
        },
        {
          id: 'msg-cf-4',
          type: 'ai',
          content: 'Excellent choice! Here are the best espresso machines for making café-quality drinks at home:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-cf-5',
          type: 'product',
          products: [
            {
              id: 'prod-coffee-1',
              name: 'Nespresso Vertuo Next Coffee Maker',
              price: 14990,
              originalPrice: 19990,
              image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 8432,
              description: 'One-touch espresso and coffee maker',
              features: ['One-Touch Operation', '5 Cup Sizes', 'Fast Heat-up', 'Auto Shut-off']
            },
            {
              id: 'prod-coffee-2',
              name: 'Breville Barista Express',
              price: 42999,
              originalPrice: 54990,
              image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 5621,
              description: 'Professional espresso machine with grinder',
              features: ['Built-in Grinder', 'Milk Frother', 'PID Temperature', 'Pressure Gauge']
            },
            {
              id: 'prod-coffee-3',
              name: 'De\'Longhi Dedica EC685',
              price: 24999,
              originalPrice: 32999,
              image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 7234,
              description: 'Compact espresso machine with frother',
              features: ['15 Bar Pump', 'Cappuccino System', 'Compact Design', '3 Filters']
            },
            {
              id: 'prod-coffee-4',
              name: 'Sage Bambino Plus',
              price: 35999,
              originalPrice: 44999,
              image: 'https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 4321,
              description: 'Premium compact espresso maker',
              features: ['Auto Milk Frother', 'ThermoJet Heating', '3 Milk Settings', 'Stainless Steel']
            },
            {
              id: 'prod-coffee-5',
              name: 'Mr. Coffee Café Barista',
              price: 12999,
              originalPrice: 18999,
              image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop',
              rating: 4.3,
              reviews: 9876,
              description: 'Budget-friendly espresso & cappuccino maker',
              features: ['15 Bar Pump', 'Automatic Frother', 'One-Touch Control', 'Easy Clean']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-cf-6',
          type: 'ai',
          content: 'Nespresso is super convenient with capsules and consistent results. Breville gives you full barista control with fresh beans. De\'Longhi is a great middle ground. Which style appeals to you - convenience or full control?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "I need travel essentials for my upcoming trip",
    conversation: {
      id: 'qp-travel',
      title: 'Travel essentials',
      lastMessage: 'Get ready for your adventure!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-tr-1',
          type: 'user',
          content: 'I need travel essentials for my upcoming trip',
          timestamp: 'Just now'
        },
        {
          id: 'msg-tr-2',
          type: 'ai',
          content: 'How exciting! Where are you headed? Beach vacation, city exploration, or mountain adventure?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-tr-3',
          type: 'user',
          content: 'International trip, 10 days in Europe',
          timestamp: 'Just now'
        },
        {
          id: 'msg-tr-4',
          type: 'ai',
          content: 'Perfect! Here are must-have travel essentials for your Europe trip:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-tr-5',
          type: 'product',
          products: [
            {
              id: 'prod-travel-1',
              name: 'Samsonite 28" Hardside Spinner Luggage',
              price: 9999,
              originalPrice: 15999,
              image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 12341,
              description: 'Lightweight, durable luggage with TSA lock',
              features: ['TSA Lock', '360° Spinner Wheels', 'Expandable', '10-Year Warranty']
            },
            {
              id: 'prod-travel-2',
              name: 'Travel Adapter Universal with USB',
              price: 1299,
              originalPrice: 2499,
              image: 'https://images.unsplash.com/photo-1591290619762-0282f6f13b96?w=400&h=400&fit=crop',
              rating: 4.5,
              reviews: 6721,
              description: 'Works in 150+ countries, multiple USB ports',
              features: ['150+ Countries', '4 USB Ports', 'Surge Protection', 'Compact Design']
            },
            {
              id: 'prod-travel-3',
              name: 'Portable Charger 20000mAh Power Bank',
              price: 1999,
              originalPrice: 3999,
              image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 9234,
              description: 'High capacity power bank for all devices',
              features: ['20000mAh', 'Fast Charging', 'LED Display', 'Airline Approved']
            },
            {
              id: 'prod-travel-4',
              name: 'Packing Cubes Set (6 Pieces)',
              price: 899,
              originalPrice: 1799,
              image: 'https://images.unsplash.com/photo-1544976900-33e06489e2c4?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 8765,
              description: 'Organize luggage with compression cubes',
              features: ['6 Sizes', 'Compression Zippers', 'Mesh Top', 'Lightweight']
            },
            {
              id: 'prod-travel-5',
              name: 'Travel Neck Pillow Memory Foam',
              price: 799,
              originalPrice: 1499,
              image: 'https://images.unsplash.com/photo-1584448065333-4d8c90a1ef9b?w=400&h=400&fit=crop',
              rating: 4.4,
              reviews: 11234,
              description: 'Comfortable neck support for long flights',
              features: ['Memory Foam', 'Washable Cover', 'Compact', 'Carry Bag Included']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-tr-6',
          type: 'ai',
          content: 'These are travel essentials! The Samsonite luggage is perfect for 10 days, and the universal adapter works in all European countries. I can also help you find portable toiletries, travel backpacks, and RFID wallets. Need those too?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "Show me bestselling books this month",
    conversation: {
      id: 'qp-books',
      title: 'Bestselling books',
      lastMessage: 'Top reads this month!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-bk-1',
          type: 'user',
          content: 'Show me bestselling books this month',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bk-2',
          type: 'ai',
          content: 'Great! What genres do you enjoy - fiction, non-fiction, mystery, or self-help?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-bk-3',
          type: 'user',
          content: 'Fiction and mystery',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bk-4',
          type: 'ai',
          content: 'Excellent taste! Here are this month\'s bestselling fiction and mystery books that readers are raving about:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-bk-5',
          type: 'product',
          products: [
            {
              id: 'prod-book-1',
              name: 'The Woman in Me by Britney Spears',
              price: 599,
              originalPrice: 999,
              image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 15432,
              description: 'Brave and astonishingly moving memoir',
              features: ['#1 Bestseller', 'Hardcover', '288 Pages', 'New Release']
            },
            {
              id: 'prod-book-2',
              name: 'The Thursday Murder Club Series',
              price: 449,
              originalPrice: 799,
              image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 12341,
              description: 'Clever, cozy mystery series',
              features: ['Award Winner', 'Paperback', 'Series Book', 'Mystery Thriller']
            },
            {
              id: 'prod-book-3',
              name: 'Project Hail Mary by Andy Weir',
              price: 549,
              originalPrice: 899,
              image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 23456,
              description: 'Sci-fi thriller from author of The Martian',
              features: ['Bestseller', 'Space Adventure', '476 Pages', 'Highly Rated']
            },
            {
              id: 'prod-book-4',
              name: 'The Silent Patient by Alex Michaelides',
              price: 399,
              originalPrice: 699,
              image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 34567,
              description: 'Gripping psychological thriller',
              features: ['Psychological Thriller', 'Twist Ending', '336 Pages', 'Book Club Pick']
            },
            {
              id: 'prod-book-5',
              name: 'Where the Crawdads Sing',
              price: 499,
              originalPrice: 799,
              image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 45678,
              description: 'Coming-of-age mystery set in marshlands',
              features: ['Literary Fiction', '#1 NYT Bestseller', '384 Pages', 'Award Winner']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-bk-6',
          type: 'ai',
          content: 'All page-turners! The Thursday Murder Club is perfect if you love clever mysteries with humor. The Silent Patient has an incredible twist. Project Hail Mary is great if you enjoyed The Martian. Want more recommendations in any specific sub-genre?',
          timestamp: 'Just now'
        }
      ]
    }
  },
  {
    quickPickPrompt: "Which gaming console should I buy?",
    conversation: {
      id: 'qp-gaming',
      title: 'Gaming console',
      lastMessage: 'Best consoles for you!',
      timestamp: 'Just now',
      hasOrder: false,
      messages: [
        {
          id: 'msg-gm-1',
          type: 'user',
          content: 'Which gaming console should I buy?',
          timestamp: 'Just now'
        },
        {
          id: 'msg-gm-2',
          type: 'ai',
          content: 'Great question! What type of games do you enjoy - exclusive titles, online multiplayer, or versatility?',
          timestamp: 'Just now'
        },
        // USER INTERACTION POINT
        {
          id: 'msg-gm-3',
          type: 'user',
          content: 'Exclusive games and best graphics',
          timestamp: 'Just now'
        },
        {
          id: 'msg-gm-4',
          type: 'ai',
          content: 'Perfect! Here are the best gaming consoles with amazing exclusives and cutting-edge graphics:',
          timestamp: 'Just now'
        },
        {
          id: 'msg-gm-5',
          type: 'product',
          products: [
            {
              id: 'prod-console-1',
              name: 'PlayStation 5 (PS5) Standard Edition',
              price: 49990,
              originalPrice: 54990,
              image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
              rating: 4.9,
              reviews: 28432,
              description: '4K gaming, ultra-fast SSD, DualSense controller',
              features: ['4K 120fps', 'Ray Tracing', 'Ultra-Fast SSD', 'Haptic Feedback']
            },
            {
              id: 'prod-console-2',
              name: 'Xbox Series X',
              price: 49990,
              originalPrice: 52990,
              image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 23421,
              description: 'Most powerful Xbox ever, Game Pass included',
              features: ['12 Teraflops', '4K 120fps', 'Quick Resume', 'Game Pass Ultimate']
            },
            {
              id: 'prod-console-3',
              name: 'Nintendo Switch OLED',
              price: 31999,
              originalPrice: 34999,
              image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop',
              rating: 4.7,
              reviews: 19876,
              description: 'Portable gaming with vibrant OLED screen',
              features: ['7" OLED Screen', 'Portable + Docked', 'Enhanced Audio', 'Nintendo Exclusives']
            },
            {
              id: 'prod-console-4',
              name: 'PlayStation 5 Digital Edition',
              price: 39990,
              originalPrice: 44990,
              image: 'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=400&h=400&fit=crop',
              rating: 4.8,
              reviews: 17654,
              description: 'All-digital PS5 at lower price',
              features: ['Digital Only', 'Same Performance', '4K Gaming', 'DualSense Controller']
            },
            {
              id: 'prod-console-5',
              name: 'Xbox Series S',
              price: 29990,
              originalPrice: 32990,
              image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=400&fit=crop',
              rating: 4.6,
              reviews: 15432,
              description: 'Compact next-gen gaming console',
              features: ['1440p Gaming', 'Digital Only', 'Compact Design', 'Game Pass Ready']
            }
          ],
          timestamp: 'Just now'
        },
        {
          id: 'msg-gm-6',
          type: 'ai',
          content: 'PS5 has incredible exclusives like Spider-Man 2, God of War, and Horizon. Xbox Series X offers Game Pass with 100+ games and backward compatibility. Nintendo Switch OLED is perfect if you want portability plus exclusives like Zelda. Which ecosystem appeals to you?',
          timestamp: 'Just now'
        }
      ]
    }
  }
];

// Helper function to find conversation by prompt
export function getConversationByPrompt(prompt: string): ChatThread | null {
  // First try exact match
  const exactMatch = quickPickConversations.find(qp => 
    qp.quickPickPrompt.toLowerCase() === prompt.toLowerCase()
  );
  if (exactMatch) return exactMatch.conversation;
  
  // Then try partial match with at least 3 significant words
  const normalizedPrompt = prompt.toLowerCase().trim();
  const match = quickPickConversations.find(qp => {
    const quickPickWords = qp.quickPickPrompt.toLowerCase().split(' ').filter(w => w.length > 2);
    const promptWords = normalizedPrompt.split(' ').filter(w => w.length > 2);
    
    // Check if at least 3 significant words match
    let matchCount = 0;
    for (const word of quickPickWords) {
      if (promptWords.includes(word)) {
        matchCount++;
      }
    }
    
    // Return true if at least 3 words match
    return matchCount >= 3;
  });
  
  return match ? match.conversation : null;
}

// Helper to get a default conversation for any prompt
export function getOrCreateConversation(prompt: string): ChatThread {
  const existing = getConversationByPrompt(prompt);
  if (existing) return existing;
  
  // Return a generic conversation if no match
  return {
    id: 'generic-' + Date.now(),
    title: prompt,
    lastMessage: 'Let me help you with that',
    timestamp: 'Just now',
    hasOrder: false,
    messages: [
      {
        id: 'msg-gen-1',
        type: 'user',
        content: prompt,
        timestamp: 'Just now'
      },
      {
        id: 'msg-gen-2',
        type: 'ai',
        content: 'I can help you with that! Let me find what you\'re looking for.',
        timestamp: 'Just now'
      }
    ]
  };
}
