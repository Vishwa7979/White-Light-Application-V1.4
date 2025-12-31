# Conversational Interface Flow Documentation

## Overview
This document outlines the clear conversational flow for the voice-first avatar chat prototype, ensuring users can seamlessly navigate between voice and text interactions with synchronized conversation content.

## User Journey & Navigation Flow

### From Welcome Screen → Voice First Screen
**Triggers:**
1. ✅ **Quick Pick Chips** (all 14 cards) - User clicks any suggestion chip
   - Examples: "Find me a Samsung phone", "Gift for my wife", "Laptop for work", etc.
   - **Action**: `onStartChat('voice', prompt)` 
   - **Destination**: Voice First Screen (listening mode)
   - **State**: Automatically transitions to "thinking" with user's prompt
   - **Conversation**: Loads contextual conversation based on quick pick topic

2. ✅ **Double-click/Hold Avatar background**
   - **Action**: `onStartChat('voice')`
   - **Destination**: Voice First Screen (listening mode)

3. ✅ **Bottom hint text** - "Hold to Speak with Avatar"
   - **Action**: `onStartChat('voice')`
   - **Destination**: Voice First Screen (listening mode)

### From Welcome Screen → Text First Screen
**Triggers:**
1. ✅ **"What can I shop for?" Button** (main prompt button)
   - **Action**: `onStartChat('text')`
   - **Destination**: Text First Screen (AvatarTextChatScreen)
   - **State**: Ready for text input

2. ✅ **Bottom hint text** - "Tap to Type"
   - **Action**: `onStartChat('text')`
   - **Destination**: Text First Screen (AvatarTextChatScreen)
   - **State**: Ready for text input

## Contextual Conversations

### Quick Pick Conversation Mapping
Each of the 14 quick picks loads a relevant, pre-designed conversation thread:

1. **"Find me a Samsung phone"** → Samsung phone shopping thread with M34 5G and F14 5G
2. **"Gift for my wife"** → Jewelry and elegant accessories conversation
3. **"Best deals this week"** → Multi-category deals (AirPods Pro, Sony TV, Fitbit)
4. **"What's trending right now?"** → Trending products (iPhone 15 Pro, Stanley Tumbler)
5. **"Laptop for work"** → Work/creative laptop conversation (MacBook Air M2, HP Pavilion)
6. **"Smartwatch deals"** → Smartwatch offers (Apple Watch, Galaxy Watch, Noise)
7. **"Birthday party supplies"** → Party planning conversation (Unicorn theme example)
8. **"Running shoes"** → Marathon training shoes (Nike Vaporfly, Adidas Ultraboost)
9. **"Wireless headphones"** → Headphones under ₹5000 (Sony, JBL)
10. **"Living room furniture"** → Modern minimalist furniture thread
11. **"Coffee maker"** → Espresso machine conversation (Nespresso, Breville)
12. **"Travel essentials"** → International trip supplies (Luggage, adapter, power bank)
13. **"Bestselling books"** → Fiction and mystery book recommendations
14. **"Gaming console"** → Gaming console comparison (PS5, Xbox Series X)

### Conversation Structure
Each conversation includes:
- Initial user prompt
- AI acknowledgment and follow-up questions
- User preferences/clarifications
- Product recommendations with cards
- Natural back-and-forth dialogue
- Contextual AI guidance

## Voice First Screen (Chat Mode)
**File**: `/App.tsx` - `mobileScreen === 'chat'`

**Features:**
- Full avatar display with background effects
- Three states:
  - **Listening**: Teal glow, "Listening..." indicator
  - **Thinking**: Purple glow, sparkle particles, orb animation
  - **Responding**: Blue glow, AI response with typewriter effect
- Conversation history displayed as overlaid text
- Bottom dock with controls:
  - Add (+) button → Opens apps menu
  - Apps grid button → Opens grid menu
  - Microphone (center) → Voice input control
  - CC button → Subtitles toggle
  - Keyboard button → Switch to Text First Screen

**Navigation:**
- Back button → Returns to Welcome Screen
- Keyboard icon → Switches to Text First Screen (maintains conversation)

## Text First Screen (Chat Mode)
**File**: `/components/AvatarTextChatScreen.tsx`

**Features:**
- Dark background (#1D1D20)
- Avatar bubble (top right corner)
- Conversation bubbles (user on right, AI on left)
- Product/result cards displayed inline
- Bottom "Smart" input dock:
  - Text input: "Ask Anything"
  - Suggestion chips below input
  - Action buttons (attach, apps)
  - Send button (replaces mic when typing)
  - Bottom navigation tabs: Chat, Experience, Store, Creator

**Navigation:**
- Back button → Returns to Welcome Screen
- Voice button (in dock) → Switches to Voice First Screen (maintains conversation)

## Conversation State Management

### Shared Conversation Thread
- **Source**: `/utils/quickPickConversations.ts`
- **Structure**: `ChatThread` with messages array
- **State**: Stored in `selectedChatThread` in App.tsx
- **Synchronization**: Both voice and text screens receive the same `selectedChatThread`

### Flow:
1. User clicks quick pick → `getOrCreateConversation(prompt)` finds matching thread
2. Thread is set in `selectedChatThread` state
3. Both voice and text screens can access the same conversation
4. User can switch between modes while maintaining context

### State Transitions
```
Welcome Screen
    ├─→ Quick Pick Clicked ──→ Load Conversation ──→ Voice First (with context)
    ├─→ Main Button Clicked ──→ Text First (empty state)
    ├─→ "Tap to Type" Clicked ──→ Text First (empty state)
    └─→ "Hold to Speak" / Double-click ──→ Voice First (listening)

Voice First Screen
    ├─→ Keyboard Icon ──→ Text First (same conversation thread)
    └─→ Back Button ──→ Welcome Screen

Text First Screen
    ├─→ Voice Icon ──→ Voice First (same conversation thread)
    └─→ Back Button ──→ Welcome Screen
```

## Current Implementation Status

### ✅ Fully Implemented
1. ✅ Quick pick chips navigate to Voice First Screen with contextual prompts
2. ✅ 14 pre-designed conversation threads mapped to quick picks
3. ✅ Main "What can I shop for?" button navigates to Text First Screen
4. ✅ "Tap to Type" hint navigates to Text First Screen
5. ✅ "Hold to Speak with Avatar" hint navigates to Voice First Screen
6. ✅ Voice First Screen has complete state management (listening/thinking/responding)
7. ✅ Text First Screen has conversation interface with product cards
8. ✅ Both screens support back navigation to Welcome
9. ✅ Avatar selection persists across all screens
10. ✅ Conversation thread synchronization via `selectedChatThread` state
11. ✅ `getOrCreateConversation()` helper function for dynamic conversation loading

### 🔄 Conversation Synchronization
**How it works:**
- Quick pick click → Loads relevant `ChatThread` from `/utils/quickPickConversations.ts`
- Thread stored in `selectedChatThread` state (App.tsx)
- Passed to both `AvatarTextChatScreen` (text mode) and voice screen
- Users see same products, messages, and context regardless of mode
- Seamless switching preserves full conversation history

**Example Flow:**
1. User clicks "Find me a Samsung phone" chip
2. System loads Samsung phone conversation thread
3. User goes to Voice First Screen, sees conversation start
4. User clicks keyboard icon → Switches to Text First Screen
5. **Same conversation** displayed with chat bubbles and product cards
6. User continues shopping in either mode with consistent context

## Voice-First Principles
✅ "My mother should be able to shop just by talking"
- Conversation is the primary interface
- UI is supportive, not dominant
- AI handles complexity silently
- Entire shopping journey completable by voice
- Fewer than 3 taps required for complete flow
- **Same conversation content** whether using voice or text

## Quick Summary

### 🎤 Voice First Entry Points:
- Click any of the 14 quick pick chips → **Loads contextual conversation**
- Double-click/hold avatar background
- Click "Hold to Speak with Avatar" text

### ⌨️ Text First Entry Points:
- Click "What can I shop for?" button
- Click "Tap to Type" text

### 🔄 Mode Switching:
- Voice → Text: Keyboard icon in voice dock
- Text → Voice: Voice/mic icon in text dock
- **Both preserve exact same conversation thread**

### 📊 Conversation Consistency:
- ✅ Same products shown in both modes
- ✅ Same AI responses and guidance
- ✅ Same user intents preserved
- ✅ Seamless context retention when switching
- ✅ No data loss between modes

## Technical Architecture

### Data Flow:
```
QuickPick Click
    ↓
getOrCreateConversation(prompt)
    ↓
Find matching ChatThread from quickPickConversations[]
    ↓
Set selectedChatThread state
    ↓
Pass to Voice or Text Screen
    ↓
Render conversation with messages & products
    ↓
User switches modes
    ↓
Same selectedChatThread passed to new screen
    ↓
Conversation continues seamlessly
```

### Key Files:
- `/utils/quickPickConversations.ts` - 14 conversation threads
- `/utils/chatThreadsData.ts` - ChatThread interface and structure
- `/App.tsx` - State management and screen routing
- `/components/AvatarWelcomeScreen.tsx` - Quick pick chips
- `/components/AvatarTextChatScreen.tsx` - Text mode display

## Design Specifications
- **Voice First**: Full avatar background with gradient overlays and glow effects
- **Text First**: Dark background with avatar bubble and product cards
- **Both**: DarkGreys design system with consistent typography and spacing
- **Z-index Layering**: Background (0) → Effects (10-40) → Content (20-50)
- **Animations**: Smooth transitions with Motion/React, staggered reveals
- **Conversation Display**: Adapts to each mode while maintaining content fidelity