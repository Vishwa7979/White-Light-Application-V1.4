import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import svgPaths from "./imports/svg-lrq3vvu4xl";
import imgRectangle249873 from "figma:asset/6080c08b6c75549ad76751ee6ded58bbaf910003.png";
import imgOrbThinking from "figma:asset/93d25a87fbaa2633cb633d7e58182c508a364ce7.png";
import SplashScreen from './components/SplashScreen';
import AuthOrAvatarSelection from './components/AuthOrAvatarSelection';
import AvatarSelectionScreen, { getCustomAvatar } from './components/AvatarSelectionScreen';
import AvatarWelcomeScreen from './components/AvatarWelcomeScreen';
import AvatarChatGridMenu from './components/AvatarChatGridMenu';
import AvatarChatModeMenu from './components/AvatarChatModeMenu';
import AvatarChatAppsMenu from './components/AvatarChatAppsMenu';
import AvatarChatLanguageSettings from './components/AvatarChatLanguageSettings';
import AvatarTextChatScreen from './components/AvatarTextChatScreen';
import FlightDetailsScreen from './components/FlightDetailsScreen';
import HotelDetailsScreen from './components/HotelDetailsScreen';
import CabDetailsScreen from './components/CabDetailsScreen';
import MySpacesScreen from './components/MySpacesScreen';
import HandloomStoreScreen from './components/HandloomStoreScreen';
import AvatarDiscoverScreen from './components/AvatarDiscoverScreen';
import { ChatModePill } from './components/ChatModePill';
import AvatarSideMenu from './components/AvatarSideMenu';
import SettingsScreen from './components/SettingsScreen';
import OrdersHistoryScreen from './components/OrdersHistoryScreen';
import ThemeAppIconScreen from './components/ThemeAppIconScreen';
import PersonalizeScreen from './components/PersonalizeScreen';
import LocationSettingsScreen from './components/LocationSettingsScreen';
import NotificationsScreen from './components/NotificationsScreen';
import { BackButton } from './components/BackButton';
import { chatThreadsData, ChatThread } from './utils/chatThreadsData';
import { getOrCreateConversation } from './utils/quickPickConversations';
import { VoiceProductGrid } from './components/VoiceProductCard';
import { Product } from './utils/chatThreadsData';
import { recognizeProduct } from './utils/imageProductRecognition';
import { generateImageBasedConversation } from './utils/imageBasedConversations';
import ScanScreen from './components/ScanScreen';
import { getRandomVoiceFlow, VoiceConversationFlow } from './utils/voiceConversationFlows';
import apiClient from './utils/apiClient';

// Hooks
import { useAuth } from './hooks/useAuth';
import { useThreads } from './hooks/useThreads';
import { useOrders } from './hooks/useOrders';
import { useProducts } from './hooks/useProducts';

// E-commerce components for voice screen
import { ProductDetailExpanded } from './components/ProductDetailExpanded';
import { BiddingFlow } from './components/BiddingFlow';
import { OrderConfirmation } from './components/OrderConfirmation';
import { PaymentScreen } from './components/PaymentScreen';
import { OrderTrackingScreen } from './components/OrderTrackingScreen';
import { OrderSuccessScreen } from './components/OrderSuccessScreen';
import { Toaster } from 'react-hot-toast';

// Import Urbanist font via Google Fonts CDN
const FontLoader = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
      
      body, button, input, textarea, div, span, p, h1, h2, h3, h4, h5, h6 {
        font-family: 'Urbanist', sans-serif !important;
      }
    `}
  </style>
);

// --- Types ---
type AppState = 'listening' | 'thinking' | 'responding';
type MobileScreen = 'splash' | 'selection' | 'welcome' | 'chat' | 'text_chat' | 'flight_details' | 'hotel_details' | 'cab_details' | 'your_spaces' | 'handloom_store' | 'discover' | 'notifications' | 'settings' | 'orders' | 'theme' | 'personalize' | 'location' | 'app_language' | 'voice_language';

interface Message {
  id: number;
  text: string;
  role: 'user' | 'ai';
}

// --- Assets & Icons (Mobile Chat) ---

function AvatarFrameDefault({ customImage }: { customImage?: string | null }) {
  return (
    <div className="absolute bg-black h-full w-full overflow-hidden" data-name="AVATAR FRAME - DEFAULT">
      <div className="absolute inset-0">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={customImage || imgRectangle249873} />
      </div>
    </div>
  );
}

function AvatarTopLayer() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" data-name="AVATAR TOP LAYER">
      <div className="absolute backdrop-blur-[0px] inset-0" style={{ backgroundImage: "linear-gradient(rgba(12, 11, 11, 0.35) 0%, rgba(0, 0, 0, 0) 15.975%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.42) 70%, rgba(11, 10, 10, 0.7) 100%)" }} />
    </div>
  );
}

function SolarStopBold() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="solar:stop-bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:stop-bold">
          <path d={svgPaths.p393f9300} fill="var(--fill-0, #F4F4F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TablerPlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="tabler:plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="tabler:plus">
          <path d={svgPaths.p65d7f00} id="Vector" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function RiApps2AiLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ri:apps-2-ai-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ri:apps-2-ai-line">
          <path d={svgPaths.p5e85100} fill="var(--fill-0, #D0D0D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BiCcCircle({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bi:cc-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_4981)" id="bi:cc-circle">
          <path d={svgPaths.p3a4eea00} fill={active ? "#1D1D20" : "#D0D0D4"} id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_4981">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Keyboard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Keyboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Keyboard">
          <path d={svgPaths.p2008e500} id="Vector" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          <path d="M4.375 10H15.625" id="Vector_2" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          <path d="M4.375 7.5H15.625" id="Vector_3" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          <path d="M4.375 12.5H5" id="Vector_4" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          <path d="M7.5 12.5H12.5" id="Vector_5" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
          <path d="M15 12.5H15.625" id="Vector_6" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="h-[50px] relative shrink-0 w-[125.67px]" data-name="Levels">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 50">
        <g id="Levels">
          <path clipRule="evenodd" d={svgPaths.p3d06d400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p13765300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="74.8417" y="19" />
            <path d={svgPaths.p29d1d6c0} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="76.3417" y="20.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_8.33%_16.66%_8.34%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14">
        <g id="Group">
          <path d={svgPaths.p14915600} fill="var(--fill-0, #EAEAEA)" id="Vector" />
          <path d={svgPaths.p18ac0400} fill="var(--fill-0, #EAEAEA)" id="Vector_2" />
          <path d={svgPaths.p1fb3cc70} fill="var(--fill-0, #EAEAEA)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function HugeiconsNotificationSnooze() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="hugeicons:notification-snooze-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="hugeicons:notification-snooze-03">
          <g id="Group">
            <path d={svgPaths.p2a374700} id="Vector" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p101d000} id="Vector_2" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <circle cx="15" cy="5" fill="var(--fill-0, #FC2626)" id="Ellipse 5632" r="3" />
        </g>
      </svg>
    </div>
  );
}

// --- Effects ---

const GlowOverlay = ({ state }: { state: AppState }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen">
      {/* Listening Glow - Teal Side/Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: state === 'listening' ? 0.6 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-t from-teal-500/40 via-teal-900/10 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: state === 'listening' ? 0.4 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-teal-500/30 to-transparent"
      />

      {/* Thinking Glow - Purple Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: state === 'thinking' ? 0.7 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-purple-600/60 via-purple-900/20 to-transparent"
      />

      {/* Responding Glow - Dark Blue Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: state === 'responding' ? 0.8 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-blue-700/70 via-blue-900/30 to-transparent"
      />
    </div>
  );
};

const Sparkles = ({ active }: { active: boolean }) => {
  return (
    <div className={cn(
      "absolute bottom-[160px] left-0 right-0 h-[120px] pointer-events-none z-0 transition-opacity duration-1000",
      active ? "opacity-100" : "opacity-0"
    )}>
      {/* Mask to keep particles very low and faded at the top */}
      <div className="w-full h-full [mask-image:linear-gradient(to_top,transparent_0%,black_20%,black_50%,transparent_100%)] relative">
        {Array.from({ length: 200 }).map((_, i) => (
          <SparkleParticle key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

const SparkleParticle = ({ index }: { index: number }) => {
  // Mostly small dust, occasional larger bokeh
  const isBokeh = Math.random() > 0.85;
  const size = isBokeh ? 3 + Math.random() * 4 : 1 + Math.random() * 2;

  // Spread across the width, concentrated slightly more in center
  const randomX = Math.random();
  const xStart = (randomX - 0.5) * 380;

  return (
    <motion.div
      className={cn(
        "absolute bottom-0 left-1/2 rounded-full",
        isBokeh ? "bg-purple-300/40 blur-[0.5px]" : "bg-white/80"
      )}
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${xStart}px)`,
        boxShadow: isBokeh ? "none" : "0 0 2px rgba(255, 255, 255, 0.5)"
      }}
      initial={{ y: 20, opacity: 0, scale: 0 }}
      animate={{
        y: -40 - Math.random() * 60, // Limit height significantly: only moves up 40-100px total
        x: xStart + (Math.random() - 0.5) * 30, // Subtle horizontal drift
        opacity: isBokeh ? [0, 0.5, 0] : [0, 0.8, 0],
        scale: [0, 1, 0.2]
      }}
      transition={{
        duration: 3 + Math.random() * 3, // Slow float
        repeat: Infinity,
        delay: Math.random() * 4,
        ease: "easeOut"
      }}
    />
  );
};

// --- Typewriter Component ---
const Typewriter = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    } else if (index === text.length && text.length > 0) {
      if (onComplete) onComplete();
    }
  }, [index, text, onComplete]);

  return <span>{displayedText}</span>;
};

// --- Mobile App Component ---
function MobileApp() {
  const { user, isAuthenticated, logout } = useAuth();
  const {
    threads: userThreads,
    loading: threadsLoading,
    sendMessage: sendChatMessage,
    createThread,
    fetchMessages
  } = useThreads(isAuthenticated);

  const {
    orders: userOrders,
    placeOrder
  } = useOrders(isAuthenticated);

  const {
    products: allProducts,
    searchProducts
  } = useProducts();

  // --- UI State ---
  const [mobileScreen, setMobileScreen] = useState<MobileScreen>('splash');
  const [authKey, setAuthKey] = useState(0); // Key to force auth component remount on logout
  const [state, setState] = useState<AppState>('listening');
  const [dockOpen, setDockOpen] = useState(false);
  const [chatModeOpen, setChatModeOpen] = useState(false);
  const [showLanguageSettings, setShowLanguageSettings] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [ccEnabled, setCcEnabled] = useState(true);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedAvatarImage, setSelectedAvatarImage] = useState<string | null>(null);
  const [selectedChatThread, setSelectedChatThread] = useState<any | null>(null);
  const [revealedMessageCount, setRevealedMessageCount] = useState(0); // Track conversation progression

  // Toggle handlers that ensure mutual exclusivity
  const toggleDock = () => {
    if (!dockOpen) setChatModeOpen(false);
    setDockOpen(!dockOpen);
  };

  const toggleChatMode = () => {
    if (!chatModeOpen) setDockOpen(false);
    setChatModeOpen(!chatModeOpen);
  };

  // Logout handler
  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('whitelight_auth_token');
    localStorage.removeItem('whitelight_user');

    // Close side menu
    setSideMenuOpen(false);

    // Force auth component to remount and go directly to selection screen
    setAuthKey(prev => prev + 1);
    setMobileScreen('selection');
  };

  // Conversation history
  const [messages, setMessages] = useState<Message[]>([]);
  const [nextMessageId, setNextMessageId] = useState(1);
  const [transcript, setTranscript] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  // Voice conversation flow state
  const [activeVoiceFlow, setActiveVoiceFlow] = useState<VoiceConversationFlow | null>(null);
  const [voiceFlowStep, setVoiceFlowStep] = useState(0);

  // E-commerce flow state for voice screen
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showBiddingFlow, setShowBiddingFlow] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showTracking, setShowTracking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [orderStatusShown, setOrderStatusShown] = useState(false); // Track if we've shown the status message

  // Image upload state for voice chat
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const cameraInputRef = React.useRef<HTMLInputElement>(null);
  const documentInputRef = React.useRef<HTMLInputElement>(null);
  const [showScanScreen, setShowScanScreen] = useState(false);
  const [scanMode, setScanMode] = useState<'camera' | 'scan'>('camera');

  // Load custom avatar image on mount
  useEffect(() => {
    const savedAvatarId = localStorage.getItem('selectedAvatar');
    if (savedAvatarId === 'custom') {
      const customAvatar = getCustomAvatar();
      if (customAvatar) {
        setSelectedAvatarImage(customAvatar.image);
      }
    }

    // Listen for custom avatar creation
    const handleCustomAvatarCreated = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.avatar) {
        setSelectedAvatarImage(customEvent.detail.avatar.image);
      }
    };

    window.addEventListener('customAvatarCreated', handleCustomAvatarCreated);

    return () => {
      window.removeEventListener('customAvatarCreated', handleCustomAvatarCreated);
    };
  }, []);

  // Load conversation thread when entering voice screen
  useEffect(() => {
    if (selectedChatThread && mobileScreen === 'chat') {
      // Reset conversation state when entering voice screen
      setMessages([]);
      setCurrentMessageIndex(0);
      setCurrentProducts([]);
      setState('listening');
      setTranscript("");
      setOrderStatusShown(false); // Reset order status tracking

      // Auto-load first user message immediately into history
      if (selectedChatThread.messages.length >= 2) {
        const firstMsg = selectedChatThread.messages[0];

        // Add first user message to history immediately
        if ((firstMsg as any).type === 'user' && ((firstMsg as any).content || (firstMsg as any).text)) {
          setMessages([{ id: 1, text: (firstMsg as any).content || (firstMsg as any).text, role: 'user' }]);

          // Then trigger thinking state
          setTimeout(() => {
            setState('thinking');

            // After thinking, show AI response or products
            setTimeout(() => {
              const secondMsg = selectedChatThread.messages[1];
              if (((secondMsg as any).type === 'ai' || (secondMsg as any).role === 'ai') && ((secondMsg as any).content || (secondMsg as any).text)) {
                setTranscript((secondMsg as any).content || (secondMsg as any).text);
                setState('responding');
                setCurrentMessageIndex(2); // Next message to load
              } else if ((secondMsg as any).type === 'product' && (secondMsg as any).products) {
                setCurrentProducts((secondMsg as any).products);
                setState('responding');
                setCurrentMessageIndex(2); // Next message to load
              }
            }, 1500); // Thinking duration
          }, 300);
        }
      }
    }
  }, [selectedChatThread, mobileScreen]);

  // Auto-advance from thinking to responding (DISABLED - now handled inline in handleInteraction)
  // Removed previously problematic useEffect

  const handleInteraction = () => {
    // Handle voice flow (Hold to Speak with Avatar)
    if (activeVoiceFlow && !selectedChatThread) {
      if (state === 'listening') {
        // Check if we've reached the end of the conversation
        if (voiceFlowStep >= activeVoiceFlow.messages.length) {
          // Show products at the end
          if (activeVoiceFlow.products.length > 0 && currentProducts.length === 0) {
            setCurrentProducts(activeVoiceFlow.products);
            setState('responding');
          }
          return;
        }

        const currentMessage = activeVoiceFlow.messages[voiceFlowStep];

        // If it's a user message, add to history and go to thinking
        if (currentMessage.role === 'user') {
          // Add user message to history
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: currentMessage.text,
            role: 'user'
          }]);

          setState('thinking');
          setVoiceFlowStep(prev => prev + 1);

          // Auto-advance to AI response after thinking
          setTimeout(() => {
            if (voiceFlowStep + 1 < activeVoiceFlow.messages.length) {
              const nextMessage = activeVoiceFlow.messages[voiceFlowStep + 1];
              if (nextMessage.role === 'ai') {
                setTranscript(nextMessage.text);
                setState('responding');
                setVoiceFlowStep(prev => prev + 1);
              } else {
                setState('listening');
              }
            } else {
              setState('listening');
            }
          }, 1500);
        } else {
          // AI message directly (shouldn't happen in normal flow, but handle it)
          setTranscript(currentMessage.text);
          setState('responding');
          setVoiceFlowStep(prev => prev + 1);
        }
      } else if (state === 'responding') {
        // Complete AI response and return to listening
        handleResponseComplete();
      }
      return;
    }

    // Handle quick pick thread-based flow
    if (!selectedChatThread) {
      return;
    }

    if (state === 'listening') {
      // Load next message from conversation thread sequentially
      if (currentMessageIndex >= selectedChatThread.messages.length) {
        // End of conversation - no more messages
        return;
      }

      const currentMsg = selectedChatThread.messages[currentMessageIndex];

      if (currentMsg.type === 'user' && currentMsg.content) {
        // User message - add to history immediately and go to thinking
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: currentMsg.content!,
          role: 'user'
        }]);
        setCurrentMessageIndex(prev => prev + 1);
        setState('thinking');

        // Auto-advance to next message after thinking delay
        setTimeout(() => {
          const nextIdx = currentMessageIndex + 1;
          if (nextIdx < selectedChatThread.messages.length) {
            const nextMsg = selectedChatThread.messages[nextIdx];

            if (nextMsg.type === 'ai' && nextMsg.content) {
              setCurrentProducts([]); // Clear any previous products
              setTranscript(nextMsg.content);
              setState('responding');
              setCurrentMessageIndex(nextIdx + 1);
            } else if (nextMsg.type === 'product' && nextMsg.products) {
              setTranscript("");
              setCurrentProducts(nextMsg.products);
              setState('responding');
              setCurrentMessageIndex(nextIdx + 1);
            }
          } else {
            setState('listening');
          }
        }, 1500); // 1.5 second thinking state

      } else if (currentMsg.type === 'ai' && currentMsg.content) {
        // Direct AI message (not after a user message) - show immediately
        setCurrentProducts([]); // Clear any previous products
        setTranscript(currentMsg.content);
        setState('responding');
        setCurrentMessageIndex(prev => prev + 1);
      } else if (currentMsg.type === 'product' && currentMsg.products) {
        // Direct product message - show products
        setTranscript("");
        setCurrentProducts(currentMsg.products);
        setState('responding');
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        // Skip unsupported message types and try next
        setCurrentMessageIndex(prev => prev + 1);
      }
    } else if (state === 'responding') {
      // Manual advance - complete the current response
      handleResponseComplete();
    }
  };

  const handleResponseComplete = () => {
    // Save current AI message to history (only if it's text, not products)
    if (transcript && !currentProducts.length) {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: transcript,
        role: 'ai'
      }]);
    }

    // If products were shown, keep them visible but don't add to history
    // They will be cleared when the next message loads

    // Reset for next interaction
    setTranscript("");
    setState('listening');
  };

  // Auto-complete typewriter effect
  const handleTypewriterComplete = () => {
    // After AI finishes typing, wait a moment then auto-advance
    setTimeout(() => {
      handleResponseComplete();
    }, 2000);
  };

  // E-commerce handlers for voice screen
  const handleProductView = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const handleQuickBuy = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(false);
    setShowOrderConfirmation(true);
  };

  const handleFindBestPrice = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(false);
    setShowBiddingFlow(true);
  };

  const handleOrderConfirm = () => {
    setShowOrderConfirmation(false);
    setShowPayment(true);
  };

  const handlePaymentComplete = async () => {
    let finalOrderNumber = `ORD${Date.now().toString().slice(-8)}`;

    try {
      if (selectedProduct) {
        // Place order in backend using our hook
        const order = await placeOrder(
          selectedProduct.id,
          "123 Main Street, Mumbai, Maharashtra 400001"
        );

        if (order && order.orderNumber) {
          finalOrderNumber = order.orderNumber;
        }
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }

    setOrderNumber(finalOrderNumber);
    setShowPayment(false);

    // Close all e-commerce modals and return to conversation
    setShowProductDetail(false);
    setShowBiddingFlow(false);
    setShowOrderConfirmation(false);
    setShowTracking(false);
    setShowSuccess(false);

    // Clear products to show conversation
    setCurrentProducts([]);

    // Add payment success message to conversation
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text: `🎉 Payment successful! Your order ${finalOrderNumber} is confirmed.`,
      role: 'ai'
    }]);

    // Add delivery status message after a brief delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: `📦 Your order is being processed and will be delivered by tomorrow, 10 AM - 2 PM. Track your order anytime!`,
        role: 'ai'
      }]);
    }, 1000);

    // Return to listening state
    setState('listening');
  };

  const handleDelivered = () => {
    setShowTracking(false);
    setShowSuccess(false);

    // Close all e-commerce modals
    setShowProductDetail(false);
    setShowBiddingFlow(false);
    setShowOrderConfirmation(false);
    setShowPayment(false);

    // Clear products to show conversation
    setCurrentProducts([]);

    // Add delivery success message to conversation
    if (selectedProduct) {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: `🎉 Your order has been delivered successfully! Enjoy your ${selectedProduct.name || 'purchase'}!`,
        role: 'ai'
      }]);
    }

    // Return to listening state
    setState('listening');
  };

  const handleContinueShopping = () => {
    // Close all e-commerce modals
    setShowSuccess(false);
    setShowProductDetail(false);
    setShowBiddingFlow(false);
    setShowOrderConfirmation(false);
    setShowPayment(false);
    setShowTracking(false);

    // Reset order state
    setSelectedProduct(null);
    setOrderNumber(null);
    setOrderStatusShown(false);

    // Clear products and return to conversation
    setCurrentProducts([]);
    setState('listening');
  };

  // Check if user returns to conversation during an order journey
  useEffect(() => {
    if (mobileScreen === 'chat' && !orderStatusShown) {
      const hasActiveOrder = showProductDetail || showBiddingFlow || showOrderConfirmation || showPayment || showTracking || showSuccess;

      if (hasActiveOrder && selectedProduct) {
        setOrderStatusShown(true); // Prevent showing again

        // Determine what stage they're at
        let statusMessage = '';
        if (showProductDetail) {
          statusMessage = `You were viewing ${selectedProduct.name}. Would you like to continue?`;
        } else if (showBiddingFlow) {
          statusMessage = `You have an active price bidding for ${selectedProduct.name}. Check it out when you're ready!`;
        } else if (showOrderConfirmation) {
          statusMessage = `Your order for ${selectedProduct.name} is waiting for confirmation. Complete it anytime!`;
        } else if (showPayment) {
          statusMessage = `Payment pending for ${selectedProduct.name}. Complete your order when ready!`;
        } else if (showTracking && orderNumber) {
          statusMessage = `Your order ${orderNumber} is being tracked. Tap to view delivery status!`;
        } else if (showSuccess && orderNumber) {
          statusMessage = `Order ${orderNumber} delivered successfully! 🎉`;
        }

        if (statusMessage) {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: statusMessage,
            role: 'ai'
          }]);
        }
      }
    }
  }, [mobileScreen, showProductDetail, showBiddingFlow, showOrderConfirmation, showPayment, showTracking, showSuccess, selectedProduct, orderNumber, orderStatusShown]);

  // Handle grid menu selection (for image upload in voice chat)
  const handleGridMenuSelect = (label: string) => {
    if (label === 'Media') {
      fileInputRef.current?.click();
    } else if (label === 'Camera') {
      setScanMode('camera');
      setShowScanScreen(true);
    } else if (label === 'Document') {
      documentInputRef.current?.click();
    } else if (label === 'Scan') {
      setScanMode('scan');
      setShowScanScreen(true);
    } else if (label === 'Google Drive') {
      // TODO: Implement Google Drive integration
      console.log('Google Drive integration coming soon');
    } else if (label === 'Add Manual') {
      // TODO: Implement manual entry
      console.log('Manual entry coming soon');
    }
    // Close the dock after selection
    setDockOpen(false);
  };

  // Handle image file selection
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await processImageFile(file);

    // Reset file input
    e.target.value = '';
  };

  // Handle image selection from scan screen
  const handleScanImageSelect = async (file: File) => {
    await processImageFile(file);
  };

  // Process image file (shared logic for both upload methods)
  const processImageFile = async (file: File) => {
    // Create object URL for preview
    const imageUrl = URL.createObjectURL(file);
    setUploadedImageUrl(imageUrl);

    // Show thinking state while processing
    setState('thinking');

    try {
      // Recognize product from image
      const recognizedProduct = await recognizeProduct(file);

      // Generate conversation based on recognized product
      const conversation = generateImageBasedConversation(recognizedProduct, imageUrl);

      // Set as active thread
      setSelectedChatThread(conversation);
      setRevealedMessageCount(0);

      // Reset and start fresh conversation
      setMessages([]);
      setCurrentMessageIndex(0);
      setCurrentProducts([]);
      setState('listening');

      // Auto-load the conversation
      setTimeout(() => {
        if (conversation.messages && conversation.messages.length >= 2) {
          const firstMsg = conversation.messages[0];

          // Add first user message with image
          if ((firstMsg as any).role === 'user' || (firstMsg as any).type === 'user') {
            setMessages([{
              id: 1,
              text: (firstMsg as any).text || (firstMsg as any).content || 'I uploaded an image',
              role: 'user'
            }]);

            // Then trigger thinking state
            setTimeout(() => {
              setState('thinking');

              // After thinking, show AI response
              setTimeout(() => {
                const secondMsg = conversation.messages ? conversation.messages[1] : null;
                if (secondMsg && ((secondMsg as any).role === 'ai' || (secondMsg as any).type === 'ai') && ((secondMsg as any).text || (secondMsg as any).content)) {
                  setTranscript((secondMsg as any).text || (secondMsg as any).content);
                  setState('responding');
                  setCurrentMessageIndex(2); // Next message to load
                }
              }, 1500);
            }, 300);
          }
        }
      }, 500);

    } catch (error) {
      console.error('Error processing image:', error);
      setState('listening');
    }
  };

  return (
    <div className="relative w-full md:max-w-[393px] h-full bg-black shadow-2xl overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {mobileScreen === 'splash' ? (
          <motion.div
            key="splash"
            className="w-full h-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SplashScreen onComplete={() => setMobileScreen('selection')} />
          </motion.div>
        ) : mobileScreen === 'selection' ? (
          <motion.div
            key="selection"
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AuthOrAvatarSelection key={authKey} onAvatarSelect={(image) => { setMobileScreen('welcome'); setSelectedAvatarImage(image); }} />
          </motion.div>
        ) : mobileScreen === 'welcome' ? (
          <motion.div
            key="welcome"
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AvatarWelcomeScreen
              selectedAvatarImage={selectedAvatarImage}
              onStartChat={(mode, prompt) => {
                if (mode === 'voice' && !prompt) {
                  // Hold to Speak - Create NEW voice conversation flow
                  const newFlow = getRandomVoiceFlow();
                  setActiveVoiceFlow(newFlow);
                  setVoiceFlowStep(0);
                  setMessages([]);
                  setCurrentMessageIndex(0);
                  setCurrentProducts([]);
                  setState('listening');
                  setTranscript("");
                  setSelectedChatThread(null);
                } else if (prompt) {
                  // Quick pick - Load contextual conversation
                  const conversation = getOrCreateConversation(prompt);
                  setSelectedChatThread(conversation);
                  setRevealedMessageCount(0);
                  setActiveVoiceFlow(null);
                }
                setMobileScreen(mode === 'text' ? 'text_chat' : 'chat');
              }}
              onOpenSideMenu={() => setSideMenuOpen(true)}
              onOpenNotifications={() => setMobileScreen('notifications')}
              onBack={() => setMobileScreen('selection')}
            />
          </motion.div>
        ) : mobileScreen === 'text_chat' ? (
          <motion.div
            key="text_chat"
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AvatarTextChatScreen
              selectedAvatarImage={selectedAvatarImage}
              selectedChatThread={selectedChatThread}
              onSwitchToVoice={() => setMobileScreen('chat')}
              onOpenSideMenu={() => setSideMenuOpen(true)}
              onSelectFlight={() => setMobileScreen('flight_details')}
              onSelectHotel={() => setMobileScreen('hotel_details')}
              onSelectCab={() => setMobileScreen('cab_details')}
              onBack={() => setMobileScreen('welcome')}
            />
          </motion.div>
        ) : mobileScreen === 'flight_details' ? (
          <motion.div
            key="flight_details"
            className="w-full h-full relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FlightDetailsScreen onBack={() => setMobileScreen('text_chat')} />
          </motion.div>
        ) : mobileScreen === 'hotel_details' ? (
          <motion.div
            key="hotel_details"
            className="w-full h-full relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HotelDetailsScreen onBack={() => setMobileScreen('text_chat')} />
          </motion.div>
        ) : mobileScreen === 'cab_details' ? (
          <motion.div
            key="cab_details"
            className="w-full h-full relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CabDetailsScreen onBack={() => setMobileScreen('text_chat')} />
          </motion.div>
        ) : mobileScreen === 'your_spaces' ? (
          <motion.div
            key="your_spaces"
            className="w-full h-full relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MySpacesScreen
              onOpenSideMenu={() => setSideMenuOpen(true)}
              onBack={() => setMobileScreen('chat')}
              onChatClick={(chatId) => {
                const thread = userThreads.find((t: any) => String(t.id) === String(chatId));
                if (thread) {
                  setSelectedChatThread(thread);
                  setMobileScreen('text_chat');
                }
              }}
              threads={userThreads}
            />
          </motion.div>
        ) : mobileScreen === 'handloom_store' ? (
          <motion.div
            key="handloom_store"
            className="w-full h-full relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HandloomStoreScreen onBack={() => setMobileScreen('your_spaces')} />
          </motion.div>
        ) : mobileScreen === 'discover' ? (
          <motion.div
            key="discover"
            className="w-full h-full relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AvatarDiscoverScreen
              onOpenSideMenu={() => setSideMenuOpen(true)}
              onOpenNotifications={() => setMobileScreen('notifications')}
              onBack={() => setMobileScreen('chat')}
            />
          </motion.div>
        ) : mobileScreen === 'settings' ? (
          <motion.div
            key="settings"
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SettingsScreen
              onClose={() => setMobileScreen('chat')}
              onLogout={handleLogout}
              onNavigate={(screen) => setMobileScreen(screen as MobileScreen)}
            />
          </motion.div>
        ) : mobileScreen === 'orders' ? (
          <motion.div
            key="orders"
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <OrdersHistoryScreen onClose={() => setMobileScreen('settings')} />
          </motion.div>
        ) : mobileScreen === 'theme' ? (
          <motion.div
            key="theme"
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ThemeAppIconScreen onClose={() => setMobileScreen('settings')} />
          </motion.div>
        ) : mobileScreen === 'personalize' ? (
          <motion.div
            key="personalize"
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PersonalizeScreen onClose={() => setMobileScreen('settings')} />
          </motion.div>
        ) : mobileScreen === 'location' ? (
          <motion.div
            key="location"
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LocationSettingsScreen onClose={() => setMobileScreen('settings')} />
          </motion.div>
        ) : mobileScreen === 'app_language' || mobileScreen === 'voice_language' ? (
          <motion.div
            key="language"
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AvatarChatLanguageSettings
              onClose={() => setMobileScreen('settings')}
              subtitlesEnabled={ccEnabled}
              setSubtitlesEnabled={setCcEnabled}
            />
          </motion.div>
        ) : mobileScreen === 'notifications' ? (
          <motion.div
            key="notifications"
            className="w-full h-full relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <NotificationsScreen onBack={() => setMobileScreen('chat')} />
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background */}
            <AvatarFrameDefault customImage={selectedAvatarImage} />
            <AvatarTopLayer />

            {/* Effects */}
            <GlowOverlay state={state} />
            <Sparkles active={state === 'thinking'} />
            <AnimatePresence>
              {showLanguageSettings && (
                <AvatarChatLanguageSettings
                  onClose={() => setShowLanguageSettings(false)}
                  subtitlesEnabled={ccEnabled}
                  setSubtitlesEnabled={setCcEnabled}
                />
              )}
            </AnimatePresence>

            {/* --- Top Bar --- */}
            <div className="absolute top-0 left-0 w-full z-50 pt-[14px]">
              <div className="flex justify-between items-center px-[24px]">
                {/* Time */}
                <div className="w-[54px] text-center">
                  <span className="font-sans text-[17px] text-white font-semibold">9:41</span>
                </div>
                {/* Levels */}
                <Levels />
              </div>

              <div className="flex justify-between items-center px-[20px] mt-2">
                <div className="flex gap-[12px] items-center">
                  <button
                    onClick={() => setSideMenuOpen(true)}
                    className="backdrop-blur-[21px] flex items-center justify-center p-[10px] rounded-[32px] size-[40px] border border-[#1d1d1d] bg-black/20 hover:bg-white/10 transition-colors"
                  >
                    <div className="relative size-[20px] overflow-hidden">
                      <Group />
                    </div>
                  </button>
                  <BackButton onClick={() => setMobileScreen('welcome')} />
                </div>

                <button
                  onClick={() => setMobileScreen('notifications')}
                  className="backdrop-blur-[21px] flex items-center justify-center p-[10px] rounded-[32px] size-[40px] border border-[#1d1d1d] bg-black/20 hover:bg-white/10 transition-colors"
                >
                  <HugeiconsNotificationSnooze />
                </button>
              </div>
            </div>

            {/* --- Content Area --- */}
            <div className="absolute inset-0 flex flex-col justify-end z-40 pb-[30px] px-[20px]">

              {/* Transcript Display - Scrollable Container */}
              <div className="mb-[220px] max-h-[400px] w-full px-[10px] flex flex-col justify-end overflow-y-auto no-scrollbar">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
                  {/* Conversation History - oldest at top, newest at bottom */}
                  <AnimatePresence>
                    {messages.map((message, index) => {
                      const isLatest = index === messages.length - 1;
                      return (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: isLatest ? 1 : 0.6,
                            y: 0
                          }}
                          transition={{ duration: 0.3 }}
                          className={cn(
                            "flex w-full",
                            message.role === 'user' ? 'justify-end' : 'justify-start'
                          )}
                        >
                          <div className={cn(
                            "max-w-[280px] px-[16px] py-[10px] rounded-[16px]",
                            message.role === 'user'
                              ? 'bg-gradient-to-l from-[#27272a] to-[rgba(51,51,51,0.6)] rounded-br-[4px]'
                              : 'bg-[rgba(38,38,38,0.4)] border border-[rgba(53,53,53,0.3)] rounded-bl-[4px]'
                          )}>
                            <p className="font-normal text-[14px] text-[#f4f4f5] tracking-[0.28px] leading-[1.4]">
                              {message.text}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                  {/* Active AI response (while responding) - shown with typewriter - only if not already in history */}
                  {state === 'responding' && ccEnabled && transcript && !messages.some(m => m.text === transcript && m.role === 'ai') && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex w-full justify-start"
                    >
                      <div className="max-w-[280px] px-[16px] py-[10px] rounded-[16px] bg-[rgba(38,38,38,0.4)] border border-[rgba(53,53,53,0.3)] rounded-bl-[4px]">
                        <div className="font-normal text-[14px] text-[#f4f4f5] tracking-[0.28px] leading-[1.4]">
                          <Typewriter
                            text={transcript}
                            onComplete={handleTypewriterComplete}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Product Grid Display - Above Dock */}
              <AnimatePresence>
                {currentProducts.length > 0 && (
                  <motion.div
                    key="products"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-[220px] left-0 right-0 z-30"
                  >
                    <VoiceProductGrid
                      products={currentProducts}
                      onProductClick={handleProductView}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* --- Bottom Dock --- */}
              <motion.div
                layout
                className="absolute bottom-0 left-0 w-full backdrop-blur-[20px] rounded-t-[32px] overflow-hidden z-50"
                style={{
                  backgroundImage: "linear-gradient(264.042deg, rgba(29, 29, 29, 0.6) 0.61931%, rgba(0, 0, 0, 0.2) 100%)"
                }}
                animate={{
                  height: "auto",
                  paddingTop: "24px",
                  paddingBottom: "32px",
                }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                {/* Top Border */}
                <div aria-hidden="true" className="absolute border-[#3494aa] border-[1.5px_0px_0px] border-solid inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]" />

                {/* Inner Shadow */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.5)] z-10" />

                {/* Content Container */}
                <div className="flex flex-col items-center w-full px-[20px] relative z-20">

                  {/* ORB (Shared Element) */}
                  <motion.div
                    layout="position"
                    className="relative z-20 cursor-pointer min-h-[60px] min-w-[60px] flex items-center justify-center shrink-0 mb-4"
                    onClick={!dockOpen ? handleInteraction : undefined}
                  >
                    <motion.div
                      className="relative size-[60px] flex items-center justify-center"
                    >
                      <motion.img
                        src={imgOrbThinking}
                        alt="AI Orb"
                        className="w-full h-full object-contain"
                        animate={{
                          filter: state === 'responding'
                            ? "hue-rotate(-40deg) brightness(1.2) drop-shadow(0 0 10px rgba(37,99,235,0.5))"
                            : state === 'thinking'
                              ? "hue-rotate(0deg) brightness(1) drop-shadow(0 0 15px rgba(168,85,247,0.6))"
                              : "hue-rotate(0deg) brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.3))",

                          scale: state === 'responding'
                            ? [1, 1.15, 1]
                            : state === 'thinking'
                              ? [1, 1.05, 1]
                              : [1, 1.02, 1],

                          rotate: state === 'thinking' ? [0, 5, -5, 0] : 0
                        }}
                        transition={{
                          filter: { duration: 0.5, ease: "easeInOut" },
                          scale: {
                            duration: state === 'responding' ? 1.5 : state === 'thinking' ? 0.5 : 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          },
                          rotate: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                      />

                      {/* Overlay for Responding */}
                      <motion.div
                        animate={{ opacity: state === 'responding' ? 0.3 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-blue-500 mix-blend-overlay rounded-full"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Controls Row */}
                  <motion.div
                    layout="position"
                    className="w-full flex items-center justify-between mb-4" // Added margin-bottom to separate from Grid
                  >
                    <div className="flex gap-[12px] items-center">
                      <button
                        onClick={toggleDock}
                        className={cn(
                          "flex items-center justify-center p-[10px] rounded-[32px] size-[48px] transition-all duration-300",
                          dockOpen
                            ? "bg-[#eaeaea] text-black shadow-lg" // Expanded: White button, black icon
                            : "bg-[#1d1d1d]/80 text-white backdrop-blur-[21px] hover:bg-white/10" // Collapsed: Dark button
                        )}
                      >
                        <motion.div
                          animate={{ rotate: dockOpen ? 45 : 0 }} // Rotate to X
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <TablerPlus />
                        </motion.div>
                      </button>
                      <button
                        onClick={toggleChatMode}
                        className={cn(
                          "flex items-center justify-center rounded-[100px] size-[48px] transition-all duration-300",
                          chatModeOpen
                            ? "bg-[#fcfcfc] text-black shadow-lg"
                            : "hover:bg-white/5 text-white"
                        )}
                      >
                        <RiApps2AiLine />
                      </button>
                      {selectedMode && <ChatModePill label={selectedMode} onClose={() => setSelectedMode(null)} />}
                    </div>
                    <div className="flex gap-[12px] items-center">
                      <button
                        onClick={() => setShowLanguageSettings(true)}
                        className={cn(
                          "flex items-center justify-center p-[10px] rounded-[32px] size-[48px] transition-colors",
                          ccEnabled ? "bg-[#fcfcfc]" : "bg-[#1d1d1d]/80 backdrop-blur-[21px]"
                        )}
                      >
                        <BiCcCircle active={ccEnabled} />
                      </button>
                      <button
                        onClick={() => setMobileScreen('text_chat')}
                        className="backdrop-blur-[21px] flex items-center justify-center p-[10px] rounded-[32px] size-[48px] bg-[#1d1d1d]/80 hover:bg-white/10 transition-colors"
                      >
                        <Keyboard />
                      </button>
                    </div>
                  </motion.div>

                  {/* Expandable Menus (Appears Below Controls) */}
                  <AnimatePresence mode="wait">
                    {dockOpen && (
                      <motion.div
                        key="grid-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, // Spring-like feel
                          opacity: { duration: 0.3 }
                        }}
                        className="w-full overflow-hidden"
                      >
                        <div className="pb-6 pt-2">
                          <AvatarChatGridMenu onSelect={handleGridMenuSelect} />
                        </div>
                      </motion.div>
                    )}
                    {chatModeOpen && (
                      <motion.div
                        key="chat-mode-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, // Spring-like feel
                          opacity: { duration: 0.3 }
                        }}
                        className="w-full overflow-hidden"
                      >
                        <div className="pb-6 pt-2">
                          <AvatarChatModeMenu onSelect={(label) => { setSelectedMode(label); setChatModeOpen(false); }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>

              {/* Overlay (Hidden if logic is changed, but here we just replace the div and ignore the subsequent overlay code by effectively hiding it or making it redundant if possible) */}
              {/* Note: I am replacing ONLY the bottom dock div. The overlay code follows immediately after. */}
              {/* If I don't touch the overlay code (which is outside selection), it will still render if dockOpen is true. */}
              {/* To prevent the overlay from showing, I need to hack it? No, I can't. */}
              {/* Wait, the user selection ends at the closing div of the dock. */}
              {/* The overlay is OUTSIDE the selection. */}
              {/* If I can't edit the overlay, it WILL show up. */}
              {/* This is a problem. */}
              {/* I will assume the edit tool can handle a slightly larger context if I provide it, OR I will make the dockOpen state NOT trigger the overlay. */}
              {/* Ah, I can rename the state used in the new component to something else? No, I can't change the hook definition. */}
              {/* I will proceed with modifying the dock. If the overlay shows up, it's because of the selection constraint. */}
              {/* Actually, I'll try to include the overlay in the old_str if I can match it. */}
            </div>

            {/* E-Commerce Flow Modals for Voice Screen */}
            {/* Product Detail Modal */}
            <AnimatePresence>
              {showProductDetail && selectedProduct && (
                <ProductDetailExpanded
                  product={selectedProduct}
                  onClose={() => setShowProductDetail(false)}
                  onQuickBuy={handleQuickBuy}
                  onFindBestPrice={handleFindBestPrice}
                />
              )}
            </AnimatePresence>

            {/* Bidding Flow Modal */}
            <AnimatePresence>
              {showBiddingFlow && selectedProduct && (
                <BiddingFlow
                  product={selectedProduct}
                  onClose={() => setShowBiddingFlow(false)}
                  onAcceptOffer={() => {
                    setShowBiddingFlow(false);
                    setShowOrderConfirmation(true);
                  }}
                />
              )}
            </AnimatePresence>

            {/* Order Confirmation Modal */}
            <AnimatePresence>
              {showOrderConfirmation && selectedProduct && (
                <OrderConfirmation
                  product={{
                    image: selectedProduct.image,
                    name: selectedProduct.name,
                    price: typeof selectedProduct.price === 'number'
                      ? `₹${selectedProduct.price.toLocaleString('en-IN')}`
                      : selectedProduct.price
                  }}
                  deliveryAddress="123 Main Street, Mumbai, Maharashtra 400001"
                  deliveryEta="Tomorrow, 10 AM - 2 PM"
                  onConfirm={handleOrderConfirm}
                  onCancel={() => setShowOrderConfirmation(false)}
                />
              )}
            </AnimatePresence>

            {/* Payment Screen Modal */}
            <AnimatePresence>
              {showPayment && selectedProduct && (
                <PaymentScreen
                  orderTotal={typeof selectedProduct.price === 'number'
                    ? `₹${selectedProduct.price.toLocaleString('en-IN')}`
                    : selectedProduct.price}
                  onPaymentComplete={handlePaymentComplete}
                  onBack={() => setShowPayment(false)}
                />
              )}
            </AnimatePresence>

            {/* Order Tracking Screen Modal */}
            <AnimatePresence>
              {showTracking && orderNumber && (
                <OrderTrackingScreen
                  orderNumber={orderNumber}
                  onDelivered={handleDelivered}
                  onClose={() => setShowTracking(false)}
                />
              )}
            </AnimatePresence>

            {/* Order Success Screen Modal */}
            <AnimatePresence>
              {showSuccess && selectedProduct && orderNumber && (
                <OrderSuccessScreen
                  orderNumber={orderNumber}
                  productName={selectedProduct.name || 'Your Product'}
                  onContinueShopping={handleContinueShopping}
                />
              )}
            </AnimatePresence>

            {/* Scan Screen Modal */}
            <AnimatePresence>
              {showScanScreen && (
                <ScanScreen
                  mode={scanMode}
                  onClose={() => setShowScanScreen(false)}
                  onImageSelect={handleScanImageSelect}
                />
              )}
            </AnimatePresence>

            {/* Hidden file inputs for image upload */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleImageUpload}
            />
            <input
              ref={documentInputRef}
              type="file"
              accept=".pdf,.doc,.docx,image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sideMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-[90] backdrop-blur-sm"
              onClick={() => setSideMenuOpen(false)}
            />
            <AvatarSideMenu onSettings={() => { setSideMenuOpen(false); setMobileScreen('settings'); }}
              onClose={() => setSideMenuOpen(false)}
              onSelectSpaces={() => {
                setSideMenuOpen(false);
                setMobileScreen('your_spaces');
              }}
              onSelectDiscover={() => {
                setSideMenuOpen(false);
                setMobileScreen('discover');
              }}
              onSelectHome={() => {
                setSideMenuOpen(false);
                setMobileScreen('chat');
              }}
              onChatClick={(chatId) => {
                const thread = userThreads.find((t: any) => String(t.id) === String(chatId));
                if (thread) {
                  setSelectedChatThread(thread);
                  setSideMenuOpen(false);
                  setMobileScreen('text_chat');
                }
              }}
              threads={userThreads}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main App ---

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-screen bg-black" />; // Show black screen while mounting

  return (
    <div className="flex justify-center bg-black w-full h-screen overflow-hidden">
      <FontLoader />

      {showSplash ? (
        <motion.div
          key="splash"
          className="w-full h-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SplashScreen onComplete={() => setShowSplash(false)} />
        </motion.div>
      ) : (
        <MobileApp />
      )}
    </div>
  );
}