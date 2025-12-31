import { Product } from './chatThreadsData';

export interface VoiceMessage {
  id: number;
  role: 'user' | 'ai';
  text: string;
}

export interface VoiceConversationFlow {
  id: string;
  title: string;
  messages: VoiceMessage[];
  products: Product[];
}

// Helper to create products
const createProduct = (
  id: number,
  name: string,
  price: string,
  rating: number,
  reviews: number,
  image: string,
  brand?: string
): Product => ({
  id: id.toString(),
  name,
  price: parseFloat(price.replace(/[₹,]/g, '')),
  rating,
  reviews,
  image,
  brand
});

// Flow 1: Cricket Bat for Son
const cricketBatFlow: VoiceConversationFlow = {
  id: 'cricket-bat',
  title: 'Looking for a cricket bat for my son',
  messages: [
    { id: 1, role: 'user', text: 'I\'m looking for a cricket bat for my son' },
    { id: 2, role: 'ai', text: 'That\'s wonderful! I\'d love to help you find the perfect cricket bat. How old is your son?' },
    { id: 3, role: 'user', text: 'He\'s 12 years old' },
    { id: 4, role: 'ai', text: 'Perfect! At 12, he\'ll need a size 6 bat. Is he playing at school level or more casually?' },
    { id: 5, role: 'user', text: 'He plays for his school team' },
    { id: 6, role: 'ai', text: 'Excellent! For school-level cricket, I\'d recommend getting a quality bat. What\'s your budget range?' },
    { id: 7, role: 'user', text: 'Around ₹2,000 to ₹5,000' },
    { id: 8, role: 'ai', text: 'Perfect! I\'ve found some excellent cricket bats in your budget range. These are all size 6, perfect for a 12-year-old school player. Let me show you the best options!' }
  ],
  products: [
    createProduct(
      1,
      'SG Nexus Plus Kashmir Willow Cricket Bat',
      '₹3,299',
      4.5,
      120,
      'https://images.unsplash.com/photo-1635351610543-752b8abe48aa?w=400&h=400&fit=crop',
      'SG'
    ),
    createProduct(
      2,
      'SS Ton Reserve Edition English Willow Bat',
      '₹4,850',
      4.7,
      150,
      'https://images.unsplash.com/photo-1595207732481-22cccd3480fe?w=400&h=400&fit=crop',
      'SS'
    ),
    createProduct(
      3,
      'MRF Genius Grand Edition Cricket Bat',
      '₹4,299',
      4.6,
      130,
      'https://images.unsplash.com/photo-1758791184255-411236a49346?w=400&h=400&fit=crop',
      'MRF'
    ),
    createProduct(
      4,
      'Kookaburra Kahuna Pro Cricket Bat',
      '₹3,799',
      4.4,
      110,
      'https://images.unsplash.com/photo-1709134800864-15d9d04bc1f2?w=400&h=400&fit=crop',
      'Kookaburra'
    ),
    createProduct(
      5,
      'DSC Condor Flite Kashmir Willow Bat',
      '₹2,499',
      4.3,
      90,
      'https://images.unsplash.com/photo-1614683911823-609a503fc76e?w=400&h=400&fit=crop',
      'DSC'
    )
  ]
};

// Flow 2: Walking Stick
const walkingStickFlow: VoiceConversationFlow = {
  id: 'walking-stick',
  title: 'I want to buy a walking stick',
  messages: [
    { id: 1, role: 'user', text: 'I want to buy a walking stick' },
    { id: 2, role: 'ai', text: 'I\'d be happy to help you find the right walking stick. Is this for yourself or someone else?' },
    { id: 3, role: 'user', text: 'It\'s for my father' },
    { id: 4, role: 'ai', text: 'That\'s thoughtful of you! Does your father need it for regular support or after an injury?' },
    { id: 5, role: 'user', text: 'He needs regular support for walking' },
    { id: 6, role: 'ai', text: 'I understand. Would he prefer a single-point stick for light support, or a quad cane with four points for more stability?' },
    { id: 7, role: 'user', text: 'I think a quad cane would be better for more stability' },
    { id: 8, role: 'ai', text: 'Excellent choice! Quad canes provide great stability. Let me show you some highly-rated options that are comfortable, adjustable, and reliable!' }
  ],
  products: [
    createProduct(
      1,
      'Drive Medical Deluxe Quad Cane with Small Base',
      '₹1,299',
      4.6,
      100,
      'https://images.unsplash.com/photo-1764072955216-547f731d176d?w=400&h=400&fit=crop',
      'Drive Medical'
    ),
    createProduct(
      2,
      'Medline Premium Quad Walking Stick',
      '₹1,799',
      4.7,
      120,
      'https://images.unsplash.com/photo-1763908189432-1a992461522c?w=400&h=400&fit=crop',
      'Medline'
    ),
    createProduct(
      3,
      'HealthSense Adjustable Quad Cane',
      '₹1,499',
      4.5,
      90,
      'https://images.unsplash.com/photo-1757065824225-76d339b10f43?w=400&h=400&fit=crop',
      'HealthSense'
    ),
    createProduct(
      4,
      'Vissco Invalid Quad Stick with Large Base',
      '₹1,650',
      4.4,
      80,
      'https://images.unsplash.com/photo-1668451415285-1193fa199a0b?w=400&h=400&fit=crop',
      'Vissco'
    ),
    createProduct(
      5,
      'Flamingo Premium Walking Stick',
      '₹999',
      4.3,
      70,
      'https://images.unsplash.com/photo-1595205159255-a70227422168?w=400&h=400&fit=crop',
      'Flamingo'
    )
  ]
};

// Flow 3: Hearing Aid
const hearingAidFlow: VoiceConversationFlow = {
  id: 'hearing-aid',
  title: 'Looking for a hearing aid',
  messages: [
    { id: 1, role: 'user', text: 'I\'m looking for a hearing aid' },
    { id: 2, role: 'ai', text: 'I can help you find a suitable hearing aid. Is this for mild, moderate, or severe hearing loss?' },
    { id: 3, role: 'user', text: 'It\'s for moderate hearing loss' },
    { id: 4, role: 'ai', text: 'Got it! For moderate hearing loss, you have several options. Would you prefer a behind-the-ear model or an in-the-ear model?' },
    { id: 5, role: 'user', text: 'Behind-the-ear would be better' },
    { id: 6, role: 'ai', text: 'Great choice! Behind-the-ear models are comfortable and easy to use. Are you looking for a rechargeable model or one with replaceable batteries?' },
    { id: 7, role: 'user', text: 'Rechargeable would be more convenient' },
    { id: 8, role: 'ai', text: 'Perfect! Rechargeable models are very convenient. Here are the best rechargeable behind-the-ear hearing aids for moderate hearing loss!' }
  ],
  products: [
    createProduct(
      1,
      'Signia Pure Charge&Go 3X Hearing Aid',
      '₹45,999',
      4.8,
      150,
      'https://images.unsplash.com/photo-1596088869451-491e167efabb?w=400&h=400&fit=crop',
      'Signia'
    ),
    createProduct(
      2,
      'Phonak Audeo Paradise P50-R',
      '₹52,000',
      4.9,
      160,
      'https://images.unsplash.com/photo-1692160756374-6f68339df7cd?w=400&h=400&fit=crop',
      'Phonak'
    ),
    createProduct(
      3,
      'ReSound ONE Rechargeable Hearing Aid',
      '₹48,500',
      4.7,
      140,
      'https://images.unsplash.com/photo-1739764576392-bc1f4b349985?w=400&h=400&fit=crop',
      'ReSound'
    ),
    createProduct(
      4,
      'Widex MOMENT mRIC R D Hearing Aid',
      '₹54,999',
      4.8,
      150,
      'https://images.unsplash.com/photo-1596088869451-491e167efabb?w=400&h=400&fit=crop',
      'Widex'
    ),
    createProduct(
      5,
      'Starkey Livio Edge AI Rechargeable',
      '₹56,000',
      4.9,
      160,
      'https://images.unsplash.com/photo-1596088869451-491e167efabb?w=400&h=400&fit=crop',
      'Starkey'
    )
  ]
};

// Flow 4: Budget Smartphone
const budgetSmartphoneFlow: VoiceConversationFlow = {
  id: 'budget-smartphone',
  title: 'Looking for a Budget Smart Phone',
  messages: [
    { id: 1, role: 'user', text: 'I\'m looking for a budget smartphone' },
    { id: 2, role: 'ai', text: 'I\'d love to help you find a great budget smartphone! What\'s your budget range?' },
    { id: 3, role: 'user', text: 'Around ₹10,000 to ₹15,000' },
    { id: 4, role: 'ai', text: 'Perfect budget range! What\'s your primary use - gaming, photography, or general everyday use?' },
    { id: 5, role: 'user', text: 'Mainly for photography and social media' },
    { id: 6, role: 'ai', text: 'Great! So you\'ll want a good camera. How much storage would you need - 64GB or 128GB?' },
    { id: 7, role: 'user', text: '128GB would be better for photos' },
    { id: 8, role: 'ai', text: 'Excellent choice! I\'ve found some fantastic budget smartphones with great cameras and 128GB storage. Here are the top picks for you!' }
  ],
  products: [
    createProduct(
      1,
      'Redmi Note 12 5G (128GB, Frosted Green)',
      '₹14,999',
      4.4,
      100,
      'https://images.unsplash.com/photo-1760900051041-90417b9c110e?w=400&h=400&fit=crop',
      'Redmi'
    ),
    createProduct(
      2,
      'Realme Narzo 60 5G (128GB, Mars Orange)',
      '₹14,499',
      4.5,
      110,
      'https://images.unsplash.com/photo-1645782054550-f7ee24753e34?w=400&h=400&fit=crop',
      'Realme'
    ),
    createProduct(
      3,
      'Samsung Galaxy M14 5G (128GB, Sapphire Blue)',
      '₹13,990',
      4.3,
      90,
      'https://images.unsplash.com/photo-1721864428861-e4a9e9f9a5ee?w=400&h=400&fit=crop',
      'Samsung'
    ),
    createProduct(
      4,
      'Poco X5 5G (128GB, Wildcat Blue)',
      '₹14,999',
      4.6,
      100,
      'https://images.unsplash.com/photo-1728565029373-289608e05ee5?w=400&h=400&fit=crop',
      'Poco'
    ),
    createProduct(
      5,
      'Motorola G73 5G (128GB, Midnight Blue)',
      '₹13,999',
      4.4,
      90,
      'https://images.unsplash.com/photo-1760531953684-769354b5ebb4?w=400&h=400&fit=crop',
      'Motorola'
    )
  ]
};

// Export all flows
export const voiceConversationFlows: VoiceConversationFlow[] = [
  cricketBatFlow,
  walkingStickFlow,
  hearingAidFlow,
  budgetSmartphoneFlow
];

// Helper function to get a random flow
export const getRandomVoiceFlow = (): VoiceConversationFlow => {
  const randomIndex = Math.floor(Math.random() * voiceConversationFlows.length);
  return voiceConversationFlows[randomIndex];
};

// Helper function to get flow by ID
export const getVoiceFlowById = (id: string): VoiceConversationFlow | undefined => {
  return voiceConversationFlows.find(flow => flow.id === id);
};