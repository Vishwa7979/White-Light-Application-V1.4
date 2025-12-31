# WhiteLight Voice-First Commerce Application - Complete Replication Prompt

## Core Concept

Build a voice-first avatar chat prototype for conversational commerce with a "DarkGreys" design system. The guiding principle is: **"My mother should be able to shop just by talking"** - meaning:
- Conversation is the PRIMARY interface
- UI is supportive, not dominant
- AI handles complexity silently in the background
- Entire shopping journey completable by voice with fewer than 3 taps
- All interactions feel natural and effortless

## Technical Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS v4.0 (using CSS variables, NO tailwind.config.js)
- **Animations**: Motion/React (formerly Framer Motion) - `import { motion } from 'motion/react'`
- **Icons**: lucide-react
- **State Management**: React useState/useEffect hooks
- **Routing**: Single-page app with screen-based navigation (no React Router)
- **Storage**: localStorage for persistence

## Design System: DarkGreys Theme

### Color Palette
```css
/* Backgrounds */
--bg-primary: #1A1A1C
--bg-secondary: #2A2A2C
--bg-tertiary: #3A3A3C

/* Text */
--text-primary: #FFFFFF
--text-secondary: #999999
--text-tertiary: #666666

/* Accent */
--accent-blue: #4A9EFF
--accent-red: #EF4444
--accent-green: #10B981

/* Borders */
--border-primary: #2A2A2C
--border-secondary: #424242
```

### Typography Rules
- **CRITICAL**: Do NOT use Tailwind font size classes (text-xl, text-2xl, etc.)
- **CRITICAL**: Do NOT use font weight classes (font-bold, font-semibold, etc.)
- **CRITICAL**: Do NOT use line-height classes (leading-tight, etc.)
- Typography is defined in `/styles/globals.css` with default HTML element styling
- Only override typography when user explicitly requests it

### Animation Standards
- **Screen Transitions**: Spring animations with stiffness: 300, damping: 30
- **Modal Slides**: Slide from bottom with `y: '100%'` to `y: 0`
- **Fades**: 0.3s duration
- **Toggles**: Spring animations with stiffness: 500, damping: 30
- **Stagger Effects**: Use delays of 0.05s increments for list items

## Application Flow Architecture

### Screen Flow (Single Consistent Path)
```
Splash Screen (2s auto-advance)
    ↓
Authentication Screen
    ↓
Avatar Selection Screen (5 avatars: Emma, Alex, Noah, Roamie + Custom)
    ↓
Avatar Welcome Screen (avatar introduces themselves)
    ↓
Voice Chat Screen (main hub)
```

### Navigation Structure
```
Voice Chat Screen (Main Hub)
├── Side Menu (hamburger top-left)
│   ├── Chats (expandable list)
│   ├── Discover
│   ├── Your Spaces
│   └── Settings ⚙️
├── Text Chat Screens (from side menu chats)
├── Notifications (bell icon top-right)
├── Product Detail Screens
├── Flight/Hotel/Cab Details
├── Handloom Store
├── My Spaces Screen
└── Settings (from side menu)
    ├── Orders History
    ├── Theme & App Icon
    ├── Personalize
    ├── Location
    ├── App Language
    └── Voice & Language
```

## Screen Specifications

### 1. Splash Screen
- **Duration**: 2 seconds
- **Background**: Solid dark (#1A1A1C)
- **Content**: App logo/branding centered
- **Animation**: Fade in logo
- **Auto-advance**: Automatically goes to Authentication

### 2. Authentication Screen

#### Features
- Three user flows:
  1. **New User Signup**: Name → Email → Password
  2. **Returning User Login**: Email → Password
  3. **Auto-Login**: If user data exists in localStorage

#### SSO Integration
- Google SSO button
- Apple SSO button  
- Microsoft SSO button
- All styled with dark theme, icons, and hover effects

#### Implementation Details
```typescript
// localStorage key
const USER_KEY = 'whitelight_user';

// User data structure
interface User {
  name: string;
  email: string;
  password?: string; // hashed in production
  loginMethod: 'email' | 'google' | 'apple' | 'microsoft';
  createdAt: string;
}

// Auto-login check
useEffect(() => {
  const savedUser = localStorage.getItem(USER_KEY);
  if (savedUser) {
    // Skip to avatar selection
  }
}, []);
```

#### UI Specifications
- Dark background (#1A1A1C)
- Input fields with border (#2A2A2C), white text
- Blue accent button (#4A9EFF)
- "Already have an account?" / "Create new account" toggle
- Error messages in red (#EF4444)

### 3. Avatar Selection Screen

#### 5 Avatar Options

**Pre-built Avatars (4):**
1. **Emma** - Female, friendly, warm voice
2. **Alex** - Male, professional, confident voice
3. **Noah** - Male, casual, energetic voice
4. **Roamie** - Gender-neutral, tech-savvy voice

**Custom Avatar (5th option):**
- Upload photo button
- Record voice sample (10 seconds)
- Shows preview after creation
- Stores in localStorage as base64

#### Selection State Management
```typescript
// Avatar stored in localStorage
const AVATAR_KEY = 'whitelight_selected_avatar';

interface AvatarData {
  id: string;
  name: string;
  type: 'preset' | 'custom';
  image?: string; // base64 for custom
  voiceSample?: string; // base64 audio for custom
}
```

#### UI Specifications
- Grid layout of avatar cards
- Each card shows avatar image, name
- Selected state: Blue border (#4A9EFF) + checkmark
- "Continue" button at bottom (only enabled when avatar selected)
- Smooth card hover effects

### 4. Avatar Welcome Screen

#### Behavior
- Shows selected avatar (full screen background)
- Avatar "speaks" welcome message (show text with typewriter effect)
- Welcome message personalized with user's name
- Auto-advance after 3 seconds OR tap to continue

#### Welcome Messages (by avatar)
- **Emma**: "Hi [Name]! I'm Emma, your shopping companion. I'm here to help you find exactly what you need. Just tell me what you're looking for!"
- **Alex**: "Hello [Name], I'm Alex. I'll help you discover amazing products through simple conversation. Ready to get started?"
- **Noah**: "Hey [Name]! Noah here. Let's make shopping fun and easy. Just talk to me like a friend!"
- **Roamie**: "Greetings [Name]. I'm Roamie. I'll guide you through a seamless shopping experience. What interests you today?"

### 5. Voice Chat Screen (Main Hub)

#### Layout Structure
```
┌─────────────────────────┐
│ ☰ Menu    🔔 Notify    │ ← Header (transparent overlay)
├─────────────────────────┤
│                         │
│   Avatar Background     │ ← Full-screen avatar image
│   + Glow Effects        │   (Emma, Alex, Noah, or Roamie)
│   + Sparkles (thinking) │
│                         │
├─────────────────────────┤
│  Smart Input Dock ⬆️    │ ← Bottom dock (blur backdrop)
└─────────────────────────┘
```

#### Avatar States & Visual Effects

**1. Listening State**
- Pulsing blue glow around avatar edges
- Waveform animation at bottom
- "Listening..." text indicator

**2. Thinking State**
- Sparkle particle effects around avatar
- Gentle rotation of sparkles
- "Thinking..." text indicator
- Avatar has subtle breathing animation

**3. Responding State**
- Soft white glow
- Text appears with typewriter effect
- Avatar image subtle scale pulse (1.0 to 1.02)

#### Smart Input Dock (Bottom)

**Components:**
```
┌────────────────────────────────┐
│  📎 | [Text Input] | 🎤 Hold   │
├────────────────────────────────┤
│  💡 Suggestion Chips           │
│  [Summer Dresses] [Track Order]│
├────────────────────────────────┤
│  Dynamic Action Buttons        │
│  [🎁 Browse]  [🔍 Search More] │
└────────────────────────────────┘
```

**Features:**
- **Attach Menu (📎)**: Opens image upload menu
  - Camera
  - Gallery
  - Product Scan
- **Apps Menu (🎨)**: Grid of mini-apps
  - Flights
  - Hotels
  - Cabs
  - Spaces
  - Handloom Store
- **Hold to Speak (🎤)**: 
  - Long press to activate voice
  - Release to send
  - Shows listening animation while held
  - Haptic feedback on press/release
- **Suggestion Chips**: Contextual quick actions
- **Dynamic Actions**: Change based on conversation context

#### Voice Conversation Flow System

**4 Pre-built Conversation Flows:**

**Flow 1: Product Search**
```typescript
{
  id: 'product_search',
  steps: [
    {
      user: "Show me summer dresses",
      avatar: "Great choice! I've found some beautiful summer dresses for you.",
      action: 'show_product_carousel',
      products: [/* array of 4-6 products */]
    },
    {
      user: "I like the blue one",
      avatar: "Excellent taste! The Azure Summer Dress. Let me show you more details.",
      action: 'show_product_detail',
      product: {/* full product object */}
    },
    {
      user: "Add to cart",
      avatar: "Added to your cart! Would you like to continue shopping or check out?",
      action: 'add_to_cart'
    }
  ]
}
```

**Flow 2: Order Tracking**
```typescript
{
  id: 'order_tracking',
  steps: [
    {
      user: "Track my order",
      avatar: "Let me check your recent orders for you.",
      action: 'show_orders'
    },
    {
      user: "Where is my handloom saree?",
      avatar: "Your Handwoven Silk Saree is out for delivery! Expected by 6 PM today.",
      action: 'show_tracking',
      orderNumber: 'ORD-2024-001'
    }
  ]
}
```

**Flow 3: Travel Booking**
```typescript
{
  id: 'travel_booking',
  steps: [
    {
      user: "Book a flight to Mumbai",
      avatar: "I'll help you find flights to Mumbai. When would you like to travel?",
      action: 'ask_travel_dates'
    },
    {
      user: "Next Friday",
      avatar: "Perfect! Here are available flights to Mumbai next Friday.",
      action: 'show_flight_carousel'
    }
  ]
}
```

**Flow 4: Bidding**
```typescript
{
  id: 'bidding',
  steps: [
    {
      user: "Can I bid on this?",
      avatar: "Yes! This vintage pottery piece is available for bidding. Current bid is ₹5,000.",
      action: 'show_bidding_flow'
    },
    {
      user: "I bid 5500",
      avatar: "Your bid of ₹5,500 has been placed! I'll notify you if someone outbids.",
      action: 'place_bid'
    }
  ]
}
```

#### Order Management Carousels

Carousels automatically appear in conversation thread when relevant:

**1. Product Carousel**
- Horizontal scrollable cards
- Each card: Image, Title, Price, Quick "Add to Cart" button
- Tap card for full details

**2. Flight Carousel**
- Flight cards with airline, time, price
- Direct "Book" button on card

**3. Hotel Carousel**
- Hotel images, ratings, price per night
- "View Details" button

**4. Order Status Carousel**
- Shows recent orders
- Status badges (Delivered, In Transit, Processing)
- "Track" button on each

### 6. Text Chat Screens (Side Menu Navigation)

#### Chat Thread Interface
```
┌─────────────────────────┐
│ ← [Avatar] Chat Title   │ ← Header
├─────────────────────────┤
│ User: Hey there         │
│                         │
│         Avatar: Hello!  │
│                         │
│ User: Show products     │
│                         │
│    [Product Carousel]   │ ← Embedded
│                         │
│         Avatar: Found!  │
└─────────────────────────┘
│ [Message Input]    Send │
└─────────────────────────┘
```

#### Sample Chat Threads (Pre-populated)
```typescript
const chatThreadsData = [
  {
    id: '1',
    title: 'Summer Collection',
    lastMessage: 'Here are some beautiful summer dresses',
    timestamp: '2m ago',
    avatar: 'Emma',
    messages: [
      { role: 'user', content: 'Show me summer dresses' },
      { role: 'avatar', content: 'Here are beautiful summer dresses', 
        products: [/* carousel */] }
    ]
  },
  {
    id: '2',
    title: 'Order Tracking',
    lastMessage: 'Your order is out for delivery',
    timestamp: '1h ago',
    avatar: 'Alex',
    messages: [/* ... */]
  },
  // 4-6 pre-populated threads
];
```

### 7. Side Menu

#### Structure
```
┌──────────────────┐
│ [Avatar Circle]  │
│ User Name        │
│ user@email.com   │
├──────────────────┤
│ 🏠 Home          │
│ 🔍 Discover      │
│ 📦 Your Spaces   │
│                  │
│ 💬 Chats ▼       │ ← Expandable
│   └ Thread 1     │
│   └ Thread 2     │
│   └ Thread 3     │
│                  │
├──────────────────┤
│           ⚙️ Settings │
└──────────────────┘
```

#### Features
- Slide in from left with backdrop blur
- User profile at top (avatar circle with initials)
- Expandable "Chats" section (click to expand/collapse)
- Each chat shows title and last message preview
- Settings icon bottom-right corner
- Click outside to close

### 8. Settings Screen

#### Main Settings Menu
```
┌─────────────────────────┐
│ ✕                Settings │
├─────────────────────────┤
│  [👤]                   │
│  User Name              │
│  Manage Account →       │
├─────────────────────────┤
│ 👁️ Incognito Mode  [⚫] │ ← Toggle
│ 🏆 WhiteLight Pro      →│
│ 🛍️ Orders             →│
│ 🎨 Theme & App Icon   →│
│ 🌐 App Language       →│
│ 🎤 Voice & Language   →│
│ ✨ Personalize        →│
│ 📋 Tasks              →│
│ 📍 Location           →│
│ 🔔 Push Notifications [⚫]│
│ 🗺️ Map Provider       →│
│ 🔗 Connectors         →│
├─────────────────────────┤
│ HELP & SUPPORT          │
│ Get started            →│
│ Voice Shopping Guide   →│
│ Help & FAQ            →│
├─────────────────────────┤
│ FOLLOW US               │
│ 𝕏 X                    →│
│ 💬 Discord             →│
├─────────────────────────┤
│ Privacy policy         →│
│ Terms of service       →│
│                         │
│ 🚪 Sign out (red)       │
│                         │
│ WhiteLight v1.0.0       │
│ Build 10001             │
└─────────────────────────┘
```

#### Settings Sub-Screens (7 Functional)

**1. Incognito Mode**
- Toggle switch (persists to localStorage)
- When ON: browsing/shopping not saved to history
- Visual indicator throughout app when active

**2. Orders History Screen**
```typescript
interface Order {
  id: string; // e.g., "ORD-2024-001"
  date: string;
  status: 'delivered' | 'in_transit' | 'processing';
  statusText: string;
  total: string; // e.g., "$129.99"
  items: number;
  product: string; // main product name
  image: string; // product image URL
}
```
- List of orders with images
- Color-coded status icons (green=delivered, blue=in_transit, yellow=processing)
- Tap order for details
- Back button returns to Settings

**3. Theme & App Icon Screen**

**Themes:**
```typescript
const themes = [
  { 
    id: 'dark', 
    name: 'Dark Grey', 
    colors: ['#1A1A1C', '#2A2A2C', '#3A3A3C'] 
  },
  { 
    id: 'midnight', 
    name: 'Midnight Blue', 
    colors: ['#0D1B2A', '#1B263B', '#415A77'] 
  },
  { 
    id: 'forest', 
    name: 'Forest Night', 
    colors: ['#1A2E1A', '#2D4A2D', '#406640'] 
  },
  { 
    id: 'plum', 
    name: 'Plum Dark', 
    colors: ['#1A0F1E', '#2E1A33', '#472952'] 
  }
];
```

**App Icons:**
```typescript
const appIcons = [
  { id: 'default', name: 'Default', emoji: '🌟' },
  { id: 'shopping', name: 'Shopping', emoji: '🛍️' },
  { id: 'sparkle', name: 'Sparkle', emoji: '✨' },
  { id: 'voice', name: 'Voice', emoji: '🎤' },
  { id: 'gradient', name: 'Gradient', emoji: '🌈' },
  { id: 'minimal', name: 'Minimal', emoji: '⚪' }
];
```
- Theme selector with color preview swatches
- Icon grid (3 columns)
- Checkmarks on selected items
- Changes apply immediately

**4. App Language Screen**
- Opens existing AvatarChatLanguageSettings component
- Language dropdown
- Subtitle settings toggle

**5. Voice & Language Screen**
- Same as App Language (reuses AvatarChatLanguageSettings)
- Voice recognition language settings
- Avatar voice preferences

**6. Personalize Screen**

Sections:
```
VOICE SHOPPING EXPERIENCE
├ Voice-First Interface      [Toggle]
├ Auto-Play Responses        [Toggle]
└ Voice Hints                [Toggle]

SHOPPING PREFERENCES
├ Smart Product Suggestions  [Toggle]
├ Favorite Categories        → [Handloom, Organic Cotton, Pottery]
├ Size Preferences           → [Add sizes]
└ Budget Range              → [Set range]

PRIVACY & DATA
├ Voice Recording Storage    →
├ Shopping History          →
└ Clear Preferences         → (red text)
```

**7. Location Settings Screen**

```
LOCATION SERVICES
├ Enable Location           [Toggle]
└ Auto-Detect Location      [Toggle]

[📍 Use Current Location button]

SAVED ADDRESSES
├ 🏠 Home (Default)
│  123 Main St, Apt 4B
│  Mumbai, MH 400001        ✓
│
├ 💼 Work
│  Tech Park, Building A
│  Bangalore, KA 560001
│
└ [+ Add New Address]

DELIVERY PREFERENCES
├ Preferred Delivery Time    → [Evening (6-9 PM)]
└ Special Instructions       → [Ring doorbell twice]
```

### 9. E-Commerce Screens

#### Product Detail Expanded
```
┌─────────────────────────┐
│ ✕               ❤️ Save  │
├─────────────────────────┤
│                         │
│   [Product Image]       │
│   Gallery (swipeable)   │
│                         │
├─────────────────────────┤
│ Product Name            │
│ ⭐⭐⭐⭐⭐ 4.8 (234)      │
│                         │
│ $129.99  50% OFF        │
│ ~~~~~~~~~~~~~~~~        │
│                         │
│ Description...          │
│                         │
│ Size: [S] [M] [L] [XL]  │
│ Color: 🔵 🔴 🟢         │
│                         │
│ [Add to Cart] [Buy Now] │
└─────────────────────────┘
```

#### Bidding Flow
```
Current Bid: ₹5,000
Your Max Bid: [Input ₹____]

Bid History:
├ User123: ₹5,000 - 2m ago
├ You: ₹4,800 - 5m ago
└ User456: ₹4,500 - 10m ago

[Place Bid]
```

#### Order Confirmation Screen
```
Order Summary
├ Product: Handwoven Silk Saree
├ Quantity: 1
├ Size: Free Size
├ Price: ₹12,999
├ Shipping: ₹199
├ Tax: ₹1,300
└ Total: ₹14,498

Delivery Address:
Home - 123 Main St...

[Confirm Order]
```

#### Payment Screen
```
Payment Method
├ 💳 Credit/Debit Card
├ 📱 UPI
├ 🏦 Net Banking
└ 💰 Cash on Delivery

[Pay ₹14,498]
```

#### Order Tracking Screen
```
Order #ORD-2024-001

📦 Order Placed
✓ Dec 20, 3:45 PM

🏭 Processing
✓ Dec 21, 10:30 AM

📮 Shipped
✓ Dec 23, 2:15 PM

🚚 Out for Delivery
⌛ Today, Expected by 6 PM

🏠 Delivered
⌛ Not yet
```

#### Order Success Screen
```
✓ Order Placed Successfully!

Order #ORD-2024-001
Estimated Delivery: Dec 26

[Track Order]
[Continue Shopping]
```

### 10. Specialized Commerce Screens

#### Handloom Store Screen
```
┌─────────────────────────┐
│ ← Handloom Store   🔍   │
├─────────────────────────┤
│ [Hero Banner]           │
│ Authentic Handwoven     │
├─────────────────────────┤
│ Categories:             │
│ [Sarees][Kurtas][Dupattas]│
├─────────────────────────┤
│ Featured Products       │
│ ┌─────┐ ┌─────┐ ┌─────┐│
│ │  🧵 │ │  🧵 │ │  🧵 ││
│ │Saree│ │Kurta│ │Stole││
│ │₹999 │ │₹699 │ │₹499 ││
│ └─────┘ └─────┘ └─────┘│
└─────────────────────────┘
```

#### Flight Details Screen
```
Mumbai → Delhi
AI 503 • Dec 28

Departure: 10:30 AM (BOM)
Arrival: 12:45 PM (DEL)
Duration: 2h 15m

Economy • Non-stop
Baggage: 15kg

₹5,499 per person

[Select Seat]
[Book Now]
```

#### Hotel Details Screen
```
Grand Palace Hotel ⭐⭐⭐⭐⭐
Mumbai, Maharashtra

[Image Gallery]

₹8,999/night
Taxes extra

Amenities:
✓ Free WiFi
✓ Pool
✓ Gym
✓ Restaurant
✓ Room Service

Reviews: 4.8/5 (1,234)

[Check Availability]
[Book Now]
```

#### Cab Details Screen
```
Toyota Etios
Sedan • 4 Seats

Pickup: Home
Drop: Airport Terminal 2

Distance: 18 km
Time: 35 minutes

Base Fare: ₹150
Distance: ₹180
Total: ₹330

Driver: Raj Kumar
⭐ 4.9 (450 trips)

[Book Cab]
```

### 11. Discover & Spaces Screens

#### Discover Screen
```
┌─────────────────────────┐
│ ☰           Discover 🔔 │
├─────────────────────────┤
│ Trending Now            │
│ ┌────────┬────────┐     │
│ │Fashion │ Handloom│    │
│ └────────┴────────┘     │
├─────────────────────────┤
│ Featured Deals          │
│ [50% OFF Summer Sale]   │
├─────────────────────────┤
│ New Arrivals           │
│ [Product Grid]         │
├─────────────────────────┤
│ Recommended for You     │
│ [Product Carousel]      │
└─────────────────────────┘
```

#### Your Spaces Screen
```
┌─────────────────────────┐
│ ← Your Spaces      +    │
├─────────────────────────┤
│ Active Spaces           │
│                         │
│ 🏠 Home                 │
│    3 items • Updated 2h │
│                         │
│ ❤️ Wishlist             │
│    12 items • Updated 1d│
│                         │
│ 🎁 Gift Ideas           │
│    5 items • Updated 3d │
│                         │
│ 👗 Summer Collection    │
│    8 items • Updated 1w │
└─────────────────────────┘
```

### 12. Notifications Screen
```
┌─────────────────────────┐
│ ←        Notifications  │
├─────────────────────────┤
│ 🚚 Order Delivered      │
│    Your Handloom Saree  │
│    2m ago               │
├─────────────────────────┤
│ 💰 Price Drop Alert     │
│    Summer Dress -30%    │
│    1h ago               │
├─────────────────────────┤
│ ⭐ Rate Your Purchase   │
│    Cotton Kurta         │
│    3h ago               │
├─────────────────────────┤
│ 📦 Order Shipped        │
│    Track: ORD-2024-002  │
│    5h ago               │
└─────────────────────────┘
```

### 13. Image Scan Screen
```
┌─────────────────────────┐
│ ✕        Scan Product   │
├─────────────────────────┤
│                         │
│   [Camera Viewfinder]   │
│   ┌─────────────────┐   │
│   │                 │   │
│   │   Frame Area    │   │
│   │                 │   │
│   └─────────────────┘   │
│                         │
│   Point camera at       │
│   product to identify   │
│                         │
│   [📷 Capture]          │
│   [🖼️ Upload from Gallery]│
└─────────────────────────┘
```

## Key Features Implementation

### 1. Authentication System

```typescript
// authKey state for logout flow
const [authKey, setAuthKey] = useState(0);

// Logout handler
const handleLogout = () => {
  localStorage.removeItem('whitelight_user');
  localStorage.removeItem('whitelight_selected_avatar');
  setAuthKey(prev => prev + 1); // Force remount
  setMobileScreen('splash'); // Direct to splash
};

// AuthOrAvatarSelection component with authKey
<AuthOrAvatarSelection key={authKey} ... />
```

### 2. Avatar Synchronization

All screens must show the selected avatar consistently:
- Avatar image in side menu
- Avatar background on voice chat screen
- Avatar name in chat threads
- Avatar greeting in welcome screen

```typescript
// Get selected avatar everywhere
const selectedAvatar = localStorage.getItem('whitelight_selected_avatar');
const avatarData = JSON.parse(selectedAvatar || '{}');
```

### 3. Voice Conversation System

```typescript
// Voice state machine
type AppState = 'listening' | 'thinking' | 'responding';

const [state, setState] = useState<AppState>('listening');
const [transcript, setTranscript] = useState('');
const [response, setResponse] = useState('');

// Hold to speak logic
const handleMouseDown = () => {
  setState('listening');
  startVoiceRecognition();
};

const handleMouseUp = () => {
  stopVoiceRecognition();
  setState('thinking');
  
  // Simulate AI processing
  setTimeout(() => {
    setState('responding');
    generateResponse(transcript);
  }, 1500);
};

// Match transcript to conversation flows
const findMatchingFlow = (userInput: string) => {
  // Check against pre-built flows
  // Return matching flow or generate dynamic response
};
```

### 4. Product Data Structure

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[]; // gallery
  category: string;
  rating: number;
  reviews: number;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  vendor?: string;
}
```

### 5. Chat Thread Data Structure

```typescript
interface Message {
  id: number;
  role: 'user' | 'avatar';
  content: string;
  timestamp: string;
  products?: Product[]; // embedded carousel
  order?: Order; // embedded order card
  image?: string; // user uploaded image
}

interface ChatThread {
  id: string;
  title: string;
  avatar: string; // avatar name
  lastMessage: string;
  timestamp: string;
  messages: Message[];
  unread?: number;
}
```

### 6. localStorage Keys Structure

```typescript
// All localStorage keys used
const STORAGE_KEYS = {
  USER: 'whitelight_user',
  AVATAR: 'whitelight_selected_avatar',
  INCOGNITO: 'whitelight_incognito',
  THEME: 'whitelight_theme',
  APP_ICON: 'whitelight_app_icon',
  CART: 'whitelight_cart',
  ORDERS: 'whitelight_orders',
  CHAT_THREADS: 'whitelight_chat_threads',
  SETTINGS: 'whitelight_settings'
};
```

## Component Architecture

### Reusable Components to Build

1. **BackButton**: Left arrow button for screen headers
2. **ChatModePill**: Floating mode selector (Voice/Text)
3. **ProductCard**: Reusable product display card
4. **OrderStatusCard**: Order tracking card with status
5. **ToggleSwitch**: Animated toggle for settings
6. **ImageWithFallback**: Image component with loading state
7. **AnimatedText**: Typewriter effect text
8. **VoiceWaveform**: Animated waveform for listening state
9. **Sparkles**: Particle effect for thinking state
10. **GlowOverlay**: Colored overlay for avatar states

### Layout Components

1. **AvatarFrameDefault**: Full-screen avatar background
2. **AvatarTopLayer**: Overlay effects layer
3. **SmartInputDock**: Bottom input dock with all features
4. **SideMenu**: Navigation side menu
5. **SettingsScreen**: Main settings screen
6. **NotificationsScreen**: Notifications list

## Animation Specifications

### Screen Transitions
```typescript
// Enter from right
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -20 }}
transition={{ duration: 0.3 }}

// Slide up from bottom (modals)
initial={{ y: '100%' }}
animate={{ y: 0 }}
exit={{ y: '100%' }}
transition={{ type: 'spring', stiffness: 300, damping: 30 }}

// Fade in/out
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}
```

### Micro-interactions
```typescript
// Button hover
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}

// List item stagger
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.05 }}

// Toggle switch
animate={{ x: enabled ? 20 : 2 }}
transition={{ type: 'spring', stiffness: 500, damping: 30 }}

// Pulse effect (avatar responding)
animate={{ scale: [1, 1.02, 1] }}
transition={{ repeat: Infinity, duration: 2 }}
```

## Mock Data to Include

### Products (10-15 items)
```typescript
const mockProducts = [
  {
    id: 'p1',
    name: 'Handwoven Silk Saree',
    price: 12999,
    image: 'https://images.unsplash.com/photo-...',
    category: 'Handloom',
    rating: 4.8
  },
  // ... more products
];
```

### Flights (5-8 options)
```typescript
const mockFlights = [
  {
    id: 'f1',
    airline: 'Air India',
    flightNumber: 'AI 503',
    from: 'Mumbai',
    to: 'Delhi',
    departure: '10:30 AM',
    arrival: '12:45 PM',
    price: 5499
  },
  // ... more flights
];
```

### Hotels (5-8 options)
### Orders (3-5 sample orders)
### Chat Threads (4-6 threads with conversation history)

## Important Implementation Notes

### 1. No Tailwind Config
Do NOT create `tailwind.config.js`. Use Tailwind v4.0 with CSS variables in `globals.css`.

### 2. Typography Restrictions
NEVER use these Tailwind classes unless explicitly requested:
- Font sizes: `text-xs`, `text-sm`, `text-lg`, `text-xl`, `text-2xl`, etc.
- Font weights: `font-bold`, `font-semibold`, `font-medium`, etc.
- Line heights: `leading-tight`, `leading-relaxed`, etc.

### 3. Images
- Use Unsplash for all product/avatar images
- Use `https://images.unsplash.com/photo-...` format
- For custom avatars, use base64 encoding

### 4. State Management
- No Redux/Zustand needed
- Use React useState/useEffect
- localStorage for persistence
- Context API only if absolutely necessary

### 5. Responsive Design
- Mobile-first approach
- Works on 375px to 768px screens
- Desktop shows mobile view centered (max-width: 428px)

### 6. Performance
- Lazy load images
- Debounce search inputs
- Optimize animations (use `will-change`)
- Virtual scrolling for long lists

### 7. Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Focus indicators on all interactive elements

## File Structure

```
/
├── App.tsx (main component, routing logic)
├── index.html
├── styles/
│   └── globals.css (Tailwind + custom CSS variables)
├── components/
│   ├── SplashScreen.tsx
│   ├── AuthScreen.tsx
│   ├── AuthOrAvatarSelection.tsx
│   ├── AvatarSelectionScreen.tsx
│   ├── CustomAvatarCreationScreen.tsx
│   ├── AvatarWelcomeScreen.tsx
│   ├── AvatarSideMenu.tsx
│   ├── AvatarChatGridMenu.tsx (Apps menu)
│   ├── AvatarChatModeMenu.tsx
│   ├── AvatarChatLanguageSettings.tsx
│   ├── AvatarTextChatScreen.tsx
│   ├── SettingsScreen.tsx
│   ├── OrdersHistoryScreen.tsx
│   ├── ThemeAppIconScreen.tsx
│   ├── PersonalizeScreen.tsx
│   ├── LocationSettingsScreen.tsx
│   ├── NotificationsScreen.tsx
│   ├── ProductDetailExpanded.tsx
│   ├── BiddingFlow.tsx
│   ├── OrderConfirmation.tsx
│   ├── PaymentScreen.tsx
│   ├── OrderTrackingScreen.tsx
│   ├── OrderSuccessScreen.tsx
│   ├── FlightDetailsScreen.tsx
│   ├── HotelDetailsScreen.tsx
│   ├── CabDetailsScreen.tsx
│   ├── HandloomStoreScreen.tsx
│   ├── MySpacesScreen.tsx
│   ├── AvatarDiscoverScreen.tsx
│   ├── ScanScreen.tsx
│   ├── BackButton.tsx
│   ├── ChatModePill.tsx
│   ├── ProductCard.tsx
│   ├── VoiceProductCard.tsx
│   └── OrderStatusCard.tsx
├── utils/
│   ├── chatThreadsData.ts (mock chat threads)
│   ├── voiceConversationFlows.ts (4 pre-built flows)
│   ├── quickPickConversations.ts
│   └── imageProductRecognition.ts
└── lib/
    └── utils.ts (cn helper function)
```

## Testing Requirements

Before considering the app complete, verify:

1. ✅ User can complete signup flow and login
2. ✅ User can select avatar (preset or custom)
3. ✅ Avatar persists across sessions
4. ✅ Voice chat screen loads with selected avatar
5. ✅ All 4 conversation flows work end-to-end
6. ✅ Side menu opens and navigates correctly
7. ✅ All 7 settings sub-screens are functional
8. ✅ Incognito mode toggles and persists
9. ✅ Orders screen shows mock orders
10. ✅ Theme selection changes colors
11. ✅ Location settings shows saved addresses
12. ✅ Personalize toggles work
13. ✅ Product detail opens from carousel
14. ✅ Add to cart flows through to order confirmation
15. ✅ Logout clears data and returns to login
16. ✅ Notifications screen displays properly
17. ✅ Flight/Hotel/Cab details screens work
18. ✅ Handloom store shows products
19. ✅ Discover screen displays trending items
20. ✅ Your Spaces lists collections

## Final Deliverable Checklist

- [ ] All screens implemented and navigable
- [ ] DarkGreys theme consistently applied
- [ ] All animations smooth (60fps)
- [ ] Voice conversation flows work
- [ ] E-commerce checkout flow complete
- [ ] Settings fully functional
- [ ] Authentication with logout working
- [ ] Avatar synchronization across all screens
- [ ] localStorage persistence working
- [ ] Mobile responsive (375px-768px)
- [ ] No console errors
- [ ] Clean, readable code
- [ ] Proper TypeScript types
- [ ] Comments on complex logic

## Success Criteria

The application is successful when:
1. My mother could shop just by talking
2. Entire journey completable with < 3 taps
3. UI feels invisible, conversation feels natural
4. Avatar responds intelligently to requests
5. Shopping experience feels effortless
6. All features work smoothly without bugs

---

**Build this exactly as specified. This is a voice-first conversational commerce platform where the conversation IS the interface, and the UI elegantly supports that primary interaction model.**
