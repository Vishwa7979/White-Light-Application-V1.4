import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';
import { Send, Mic, MapPin, Store } from 'lucide-react';
import { BackButton } from './BackButton';
// cleaned up imports


// Commerce Components
import { DeliverySpeedCarousel } from './DeliverySpeedCarousel';
import { TrendingProductsCarousel, TrendingProduct } from './TrendingProductCard';
import { CreatorPicksSection, CreatorPick } from './CreatorPicksSection';
import { FeaturedDealsSection, FeaturedDeal } from './FeaturedDealsSection';
import { ProductCarousel } from './ProductCard';
import { OrderConfirmation } from './OrderConfirmation';
import { ProductDetailExpanded } from './ProductDetailExpanded';
import { BiddingFlow } from './BiddingFlow';
import { AvatarInlay } from './AvatarInlay';
import { PaymentScreen } from './PaymentScreen';
import { OrderTrackingScreen } from './OrderTrackingScreen';
import { OrderSuccessScreen } from './OrderSuccessScreen';

// Hooks
import { useAuth } from '../hooks/useAuth';
import { useProducts } from '../hooks/useProducts';
import { useThreads } from '../hooks/useThreads';

// Shared Components
import AvatarChatGridMenu from './AvatarChatGridMenu';
import AvatarChatAppsMenu from './AvatarChatAppsMenu';
import { ChatModePill } from './ChatModePill';

/* -------------------------------------------------------------------------- */
/*                                Types                                       */
/* -------------------------------------------------------------------------- */

type AppState = 'listening' | 'thinking' | 'responding';

interface TextBoxHandle {
  submit: () => string;
}

/* -------------------------------------------------------------------------- */
/*                            Visual Effects                                  */
/* -------------------------------------------------------------------------- */

const GlowOverlay = ({ state }: { state: AppState }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: state === 'listening' ? 0.6 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-t from-teal-500/40 via-teal-900/10 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: state === 'thinking' ? 0.7 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-purple-600/60 via-purple-900/20 to-transparent"
      />
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
    <div className={`absolute bottom-[160px] left-0 right-0 h-[120px] pointer-events-none z-10 transition-opacity duration-1000 ${active ? "opacity-100" : "opacity-0"}`}>
      <div className="w-full h-full [mask-image:linear-gradient(to_top,transparent_0%,black_20%,black_50%,transparent_100%)] relative">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-1/2 rounded-full bg-white/80"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `calc(50% + ${(Math.random() - 0.5) * 300}px)`,
              boxShadow: "0 0 2px rgba(255, 255, 255, 0.5)"
            }}
            initial={{ y: 20, opacity: 0, scale: 0 }}
            animate={{
              y: -40 - Math.random() * 60,
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.2]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                           Header Components                                */
/* -------------------------------------------------------------------------- */

function StatusBarIPhone() {
  return (
    <div className="absolute flex h-[44px] items-start justify-center left-0 top-0 w-full z-50 pointer-events-none">
      <div className="mt-[13.67px] relative size-[66.67px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
          <g id="Time">
            <text fill="var(--fill-0, white)" fontFamily="var(--font-family-0, 'SFProText-Semibold', 'SF Pro Text', sans-serif)" fontSize="var(--font-size-0, 14.98px)" fontWeight="var(--font-weight-0, 600)" id="9:41" letterSpacing="var(--letter-spacing-0, -0.26px)">
              <tspan x="0" y="14.2619">9:41</tspan>
            </text>
          </g>
        </svg>
      </div>
      <div className="flex gap-[5px] items-start ml-auto mr-[14.67px] mt-[17.33px] relative shrink-0">
        <div className="relative shrink-0 size-[17px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
            <g id="Cellular Connection">
              <path d="M11.6471 0.75C11.3208 0.75 11.0565 1.01438 11.0565 1.34062V10.4094C11.0565 10.7356 11.3208 11 11.6471 11C11.9733 11 12.2377 10.7356 12.2377 10.4094V1.34062C12.2377 1.01438 11.9733 0.75 11.6471 0.75Z" fill="var(--fill-0, white)" fillOpacity="var(--fill-opacity-0, 1)" fillRule="evenodd" id="Combined-Shape" />
              <path d="M7.88673 3.125C7.56049 3.125 7.29611 3.38937 7.29611 3.71562V10.4094C7.29611 10.7356 7.56049 11 7.88673 11C8.21298 11 8.47736 10.7356 8.47736 10.4094V3.71562C8.47736 3.38937 8.21298 3.125 7.88673 3.125Z" fill="var(--fill-0, white)" fillOpacity="var(--fill-opacity-1, 1)" fillRule="evenodd" id="Combined-Shape_2" />
              <path d="M4.7169 5.5C4.39066 5.5 4.12628 5.76438 4.12628 6.09062V10.4094C4.12628 10.7356 4.39066 11 4.7169 11C5.04315 11 5.30753 10.7356 5.30753 10.4094V6.09062C5.30753 5.76438 5.04315 5.5 4.7169 5.5Z" fill="var(--fill-0, white)" fillOpacity="var(--fill-opacity-2, 0.4)" fillRule="evenodd" id="Combined-Shape_3" />
              <path d="M1.54707 7.875C1.22082 7.875 0.956451 8.13937 0.956451 8.46562V10.4094C0.956451 10.7356 1.22082 11 1.54707 11C1.87332 11 2.1377 10.7356 2.1377 10.4094V8.46562C2.1377 8.13937 1.87332 7.875 1.54707 7.875Z" fill="var(--fill-0, white)" fillOpacity="var(--fill-opacity-3, 0.4)" fillRule="evenodd" id="Combined-Shape_4" />
            </g>
          </svg>
        </div>
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
            <g id="Wifi">
              <path d="M7.77805 9.43671C8.19477 9.43671 8.53235 9.77429 8.53235 10.191C8.53235 10.6077 8.19477 10.9453 7.77805 10.9453C7.36133 10.9453 7.02375 10.6077 7.02375 10.191C7.02375 9.77429 7.36133 9.43671 7.77805 9.43671Z" fill="var(--fill-0, white)" id="Path" />
              <path clipRule="evenodd" d="M3.45919 6.75734C5.63672 4.8931 8.91938 4.8931 11.0969 6.75734C11.352 6.98278 11.7482 6.95859 11.9736 6.7035C12.1991 6.44841 12.1749 6.05225 11.9198 5.82681C9.34453 3.60447 5.2116 3.60447 2.63626 5.82681C2.38116 6.05225 2.35697 6.44841 2.58241 6.7035C2.80785 6.95859 3.20401 6.98278 3.45919 6.75734ZM1.01513 4.56491C4.32366 1.66359 9.37825 1.66359 12.6868 4.56491C12.9548 4.80197 13.3491 4.77606 13.5862 4.50803C13.8232 4.24 13.7973 3.8458 13.5292 3.60873C9.81836 0.353434 4.20756 0.353434 0.496719 3.60873C0.228688 3.8458 0.20278 4.24 0.439845 4.50803C0.676911 4.77606 1.0711 4.80197 1.33913 4.56491H1.01513ZM9.68531 8.25659C8.53235 7.24781 6.82235 7.24781 5.66939 8.25659C5.42691 8.47322 5.03916 8.45153 4.82254 8.20906C4.60591 7.96658 4.6276 7.57882 4.87008 7.3622C6.42867 6.00538 8.92603 6.00538 10.4846 7.3622C10.7271 7.57882 10.7488 7.96658 10.5322 8.20906C10.3155 8.45153 9.92779 8.47322 9.68531 8.25659Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Path_2" />
            </g>
          </svg>
        </div>
        <div className="relative shrink-0 size-[25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
            <g id="Battery">
              <rect fill="var(--fill-0, white)" fillOpacity="var(--fill-opacity-0, 0.4)" height="10.8333" id="Rectangle" rx="2.32292" width="21.1667" x="0.666672" y="0.75" />
              <path d="M23.4167 4.125V7.625C24.0531 7.34375 24.5 6.71875 24.5 6V5.75C24.5 5.03125 24.0531 4.40625 23.4167 4.125Z" fill="var(--fill-0, white)" fillOpacity="var(--fill-opacity-1, 0.4)" id="Path" />
              <rect fill="var(--fill-0, white)" height="7.5" id="Rectangle_2" rx="1.5" width="17.5" x="2.08334" y="2.25" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Planner({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex h-[40px] items-center justify-center relative rounded-[10px] shrink-0 w-[40px]"
      whileTap={{ scale: 0.9 }}
    >
      <div className="flex-none rotate-[180deg]">
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="hugeicons:menu-11">
              <path d="M4 5L20 5" id="Vector" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M4 12L20 12" id="Vector_2" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M4 19L20 19" id="Vector_3" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </motion.button>
  );
}

function NotificationBell({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex h-[40px] items-center justify-center relative rounded-[10px] shrink-0 w-[40px]"
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative shrink-0 size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="hugeicons:notification-snooze-03">
            <g id="Group">
              <path d="M7.5 3.5C7.5 2.11929 8.61929 1 10 1C11.3807 1 12.5 2.11929 12.5 3.5C14.9314 4.39458 16.6667 6.71501 16.6667 9.44444V11.4444C16.6667 11.675 16.7246 11.9023 16.8356 12.1063L17.5833 13.3889C18.1944 14.4479 17.4361 15.7778 16.25 15.7778H3.75C2.56389 15.7778 1.80556 14.4479 2.41667 13.3889L3.16444 12.1063C3.27535 11.9023 3.33333 11.675 3.33333 11.4444V9.44444C3.33333 6.71501 5.06863 4.39458 7.5 3.5Z" id="Vector" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M7.5 15.7778C7.5 17.1585 8.61929 18.2778 10 18.2778C11.3807 18.2778 12.5 17.1585 12.5 15.7778" id="Vector_2" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <circle cx="15" cy="5" fill="var(--fill-0, #FC2626)" id="Ellipse 5632" r="3" />
          </g>
        </svg>
      </div>
    </motion.button>
  );
}

function TopHeader({ onOpenSideMenu, onOpenNotifications, onBack }: { onOpenSideMenu?: () => void, onOpenNotifications?: () => void, onBack?: () => void }) {
  return (
    <div className="absolute flex h-[80px] items-start justify-between left-0 px-[20px] top-[44px] w-full z-50">
      <div className="flex items-center gap-[12px]">
        <Planner onClick={onOpenSideMenu} />
        {onBack && <BackButton onClick={onBack} />}
      </div>
      <NotificationBell onClick={onOpenNotifications} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                        Commerce Discovery Feed                             */
/* -------------------------------------------------------------------------- */

function DigitalStoreCard({ store }: { store: { name: string; distance: string; deliveryPromise: string; creator?: string; image: string } }) {
  return (
    <motion.div
      className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.3)] border border-[#363641] content-stretch flex gap-[12px] p-[12px] relative rounded-[18px] shrink-0 w-[260px] hover:border-[#517cd0] transition-colors"
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative shrink-0 w-[70px] h-[70px] rounded-[12px] overflow-hidden">
        <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col gap-[4px] justify-center min-w-0">
        <p className="font-['Urbanist:Medium',sans-serif] text-[14px] text-white truncate">
          {store.name}
        </p>
        <div className="flex items-center gap-[4px]">
          <MapPin className="size-[11px] text-[#7a7a83]" />
          <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#7a7a83]">
            {store.distance}
          </p>
        </div>
        <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-[#22c55e]">
          {store.deliveryPromise}
        </p>
      </div>

      <div className="flex items-center">
        <Store className="size-[16px] text-[#517cd0]" />
      </div>
    </motion.div>
  );
}

function DigitalStoresNearYou() {
  const stores = [
    {
      name: 'Tech Galaxy Store',
      distance: '0.8 km',
      deliveryPromise: '15 min delivery',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop'
    },
    {
      name: 'Fashion Hub',
      distance: '1.2 km',
      deliveryPromise: '30 min delivery',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop'
    },
    {
      name: 'Grocery Express',
      distance: '0.5 km',
      deliveryPromise: '10 min delivery',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-[16px]">
        <div className="flex items-center gap-[8px]">
          <Store className="size-[20px] text-[#517cd0]" />
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[18px] text-[#f4f4f5]">
            Digital Stores Near You
          </p>
        </div>
        <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-[#7a7a83]">
          All stores
        </p>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar -mx-5 px-5">
        <div className="flex gap-[12px] w-max pb-1">
          {stores.map((store, index) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <DigitalStoreCard store={store} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CommerceDiscoveryFeed({ onProductSelect, onDeliverySpeedSelect }: { onProductSelect?: (product: any) => void, onDeliverySpeedSelect?: (speed: any) => void }) {
  const { products, loading: productsLoading } = useProducts();
  const [trendingProducts, setTrendingProducts] = useState<TrendingProduct[]>([]);
  const [creatorPicks, setCreatorPicks] = useState<CreatorPick[]>([]);
  const [featuredDeals, setFeaturedDeals] = useState<FeaturedDeal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!productsLoading && products.length > 0) {
      // Map to Trending Products
      const mappedTrending: TrendingProduct[] = products.map((p: any, index: number) => ({
        id: p.id.toString(),
        image: p.image,
        name: p.name,
        price: `₹${p.price}`,
        originalPrice: `₹${p.originalPrice}`,
        creator: {
          name: 'WhiteLight Verified',
          avatar: 'https://i.pravatar.cc/150?img=12'
        },
        reason: 'Trending now',
        location: 'Online',
        trendingRank: index + 1,
        rating: p.rating || 4.5
      }));

      // Map to Creator Picks (using same products for demo)
      const mappedCreatorPicks: CreatorPick[] = products.slice(0, 2).map((p: any) => ({
        id: p.id.toString(),
        product: {
          image: p.image,
          name: p.name,
          price: `₹${p.price}`,
          deliveryEta: 'Tomorrow'
        },
        creator: {
          name: 'Expert Choice',
          avatar: 'https://i.pravatar.cc/150?img=9',
          verified: true
        },
        badges: ['Fast', 'Trusted'],
        reason: 'Highly recommended by our experts.'
      }));

      // Map to Featured Deals
      const mappedFeaturedDeals: FeaturedDeal[] = products.slice(0, 3).map((p: any) => ({
        id: p.id.toString(),
        image: p.image,
        name: p.name,
        price: `₹${p.price}`,
        originalPrice: `₹${p.originalPrice}`,
        savings: `₹${(p.originalPrice - p.price).toFixed(0)}`,
        reason: 'Limited time offer!',
        expiresIn: 'in 24 hours',
        stock: 'low',
        discount: `${Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}% OFF`
      }));

      setTrendingProducts(mappedTrending);
      setCreatorPicks(mappedCreatorPicks);
      setFeaturedDeals(mappedFeaturedDeals);
      setIsLoading(false);
    } else if (!productsLoading && products.length === 0) {
      setIsLoading(false);
    }
  }, [products, productsLoading]);
  // Products fetched via API

  return (
    <div className="w-full flex flex-col gap-[32px]">
      {/* Delivery Speed Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <DeliverySpeedCarousel onSelect={onDeliverySpeedSelect || (() => { })} />
      </motion.div>

      {/* Trending Products Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <TrendingProductsCarousel
          products={trendingProducts}
          onViewProduct={onProductSelect || (() => { })}
          onBuyNow={onProductSelect || (() => { })}
          onFindBestPrice={onProductSelect || (() => { })}
        />
      </motion.div>

      {/* Featured Deals Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <FeaturedDealsSection deals={featuredDeals} />
      </motion.div>

      {/* Creator Picks Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <CreatorPicksSection picks={creatorPicks} />
      </motion.div>

      {/* Digital Stores Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <DigitalStoresNearYou />
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Chat Input Components                            */
/* -------------------------------------------------------------------------- */

const TextBox = React.forwardRef<TextBoxHandle, { mode: 'default' | 'smart', onFocus?: () => void, onBlur?: () => void }>(
  function TextBox({ mode, onFocus, onBlur }, ref) {
    const [text, setText] = React.useState("");

    React.useImperativeHandle(ref, () => ({
      submit: () => {
        const currentText = text;
        setText("");
        return currentText;
      }
    }));

    return (
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={mode === 'smart' ? "Type your message or ask anything..." : "Type a message"}
          className="w-full min-h-[44px] max-h-[120px] bg-transparent border-none outline-none resize-none font-['Urbanist:Regular',sans-serif] text-[15px] text-white placeholder:text-[#7a7a83] p-0"
          rows={1}
          style={{ lineHeight: '1.4' }}
        />
      </div>
    );
  }
);

function AttachButton({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center justify-center relative shrink-0 size-[24px]"
      whileTap={{ scale: 0.9 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M10 3L8 21" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M16 3L14 21" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M3.5 9H21.5" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M2.5 15H20.5" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </motion.button>
  );
}

function ChatModeButton({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center justify-center relative shrink-0 size-[24px]"
      whileTap={{ scale: 0.9 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="3" y="3" />
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="10" y="3" />
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="17" y="3" />
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="3" y="10" />
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="10" y="10" />
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="17" y="10" />
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="3" y="17" />
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="10" y="17" />
        <rect fill="var(--fill-0, #D0D0D4)" height="4" rx="1" width="4" x="17" y="17" />
      </svg>
    </motion.button>
  );
}

function ActionButtons({ onClick, mode }: { onClick?: () => void, mode: 'default' | 'smart' }) {
  const [isPulsing, setIsPulsing] = React.useState(false);

  React.useEffect(() => {
    if (mode === 'smart') {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center justify-center relative shrink-0 size-[44px] rounded-full ${mode === 'smart' ? 'bg-[#517cd0]' : 'bg-[rgba(81,124,208,0.2)]'
        } transition-colors duration-300`}
      whileTap={{ scale: 0.9 }}
      animate={isPulsing ? {
        boxShadow: [
          '0 0 0 0 rgba(81, 124, 208, 0.4)',
          '0 0 0 10px rgba(81, 124, 208, 0)',
          '0 0 0 0 rgba(81, 124, 208, 0)'
        ]
      } : {}}
      transition={{ duration: 1.5, repeat: isPulsing ? Infinity : 0 }}
    >
      {mode === 'smart' ? (
        <Send className="size-[20px] text-white" />
      ) : (
        <Mic className="size-[20px] text-[#517cd0]" />
      )}
    </motion.button>
  );
}

function ChatInputDock({ smartMode, setSmartMode, onSendMessage }: {
  smartMode: boolean,
  setSmartMode: (mode: boolean) => void,
  onSendMessage: (text: string) => void
}) {
  const textBoxRef = useRef<TextBoxHandle>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const [activeMenu, setActiveMenu] = useState<'none' | 'attach' | 'apps'>('none');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (!smartMode && activeMenu === 'none') return;

      const target = event.target as Node;
      const isInsideDock = dockRef.current?.contains(target);

      if (!isInsideDock) {
        if (activeMenu !== 'none') {
          setActiveMenu('none');
        } else {
          setSmartMode(false);
        }
      }
    }

    if (smartMode || activeMenu !== 'none') {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [smartMode, setSmartMode, activeMenu]);

  const handleSend = () => {
    const message = textBoxRef.current?.submit();
    if (message) {
      onSendMessage(message);
    }
  };

  const toggleMenu = (menu: 'attach' | 'apps') => {
    if (activeMenu === menu) {
      setActiveMenu('none');
    } else {
      setActiveMenu(menu);
      setSmartMode(true);
    }
  };

  return (
    <>
      <style>{`
        @keyframes ai-glow {
          0% { box-shadow: 0 0 0px rgba(81, 124, 208, 0); border-color: #424242; }
          50% { box-shadow: 0 -5px 20px rgba(81, 124, 208, 0.3), inset 0 0 10px rgba(81, 124, 208, 0.1); border-color: #517cd0; }
          100% { box-shadow: 0 0 0px rgba(81, 124, 208, 0); border-color: #424242; }
        }
        .ai-glow-active {
          animation: ai-glow 2s infinite ease-in-out;
          border-top: 1px solid #517cd0 !important;
        }
      `}</style>
      <div
        ref={dockRef}
        className={`absolute backdrop-blur-[15px] backdrop-filter content-stretch flex flex-col gap-[26px] items-start left-1/2 -translate-x-1/2 w-full max-w-2xl pb-[30px] pt-[20px] px-[20px] rounded-tl-[32px] rounded-tr-[32px] z-30 transition-all duration-300 ${smartMode && isFocused ? 'ai-glow-active' : ''}`}
        style={{
          bottom: '0px',
          backgroundImage: smartMode
            ? "linear-gradient(253.851deg, rgb(20, 25, 37) 0.61931%, rgba(20, 25, 37, 0.95) 100%)"
            : "linear-gradient(251.95deg, rgb(29, 29, 29) 2.2669%, rgba(0, 0, 0, 0) 104.24%)"
        }}
      >
        <div aria-hidden="true" className={`absolute border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px] transition-colors duration-300 ${smartMode ? 'border-[#517cd0]' : 'border-[#424242]'}`} />

        <TextBox
          ref={textBoxRef}
          mode={smartMode ? 'smart' : 'default'}
          onFocus={() => { setSmartMode(true); setIsFocused(true); }}
          onBlur={() => setIsFocused(false)}
        />

        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
            <AttachButton onClick={() => toggleMenu('attach')} />
            <ChatModeButton onClick={() => toggleMenu('apps')} />
            {selectedMode && <ChatModePill mode={selectedMode} active={false} onClick={() => setSelectedMode(null)} />}
          </div>
          <ActionButtons onClick={smartMode ? handleSend : undefined} mode={smartMode ? 'smart' : 'default'} />
        </div>

        {activeMenu === 'attach' && (
          <div className="w-full pt-[0px] pb-[10px] animate-in slide-in-from-bottom-5 fade-in duration-300">
            <AvatarChatGridMenu />
          </div>
        )}
        {activeMenu === 'apps' && (
          <div className="w-full pt-[0px] pb-[0px] animate-in slide-in-from-bottom-5 fade-in duration-300">
            <AvatarChatAppsMenu onSelect={(label) => { setSelectedMode(label); toggleMenu('apps'); }} />
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.5)] rounded-tl-[32px] rounded-tr-[32px]" />
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Main Component                                   */
/* -------------------------------------------------------------------------- */

export default function AvatarDiscoverScreen({
  onOpenSideMenu,
  onOpenNotifications,
  onBack
}: {
  onOpenSideMenu?: () => void,
  onOpenNotifications?: () => void,
  onBack?: () => void
}) {
  const { isAuthenticated } = useAuth();
  const { createThread, sendMessage } = useThreads(isAuthenticated);
  const [smartMode, setSmartMode] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [state, setState] = useState<AppState>('listening');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showBiddingFlow, setShowBiddingFlow] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showTracking, setShowTracking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [avatarMessage, setAvatarMessage] = useState<string>('');
  const [threadId, setThreadId] = useState<string | number | null>(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        const res = await createThread('New Conversation');
        setThreadId(res.id);
      } catch (err) {
        console.error('Failed to init chat', err);
      }
    };
    initChat();
  }, [createThread]);

  const handleSendMessage = async (text: string) => {
    setMessages(prev => [...prev, text]);
    setState('thinking');

    try {
      if (!threadId) {
        // Retry creating thread if missing, or just log error
        console.error('No thread ID, cannot send message');
        // Attempt to recover or just wait (in real app, we'd handle this robustly)
        setState('listening');
        return;
      }

      const aiMsg = await sendMessage(Number(threadId), text);

      setState('responding');
      setAvatarMessage(aiMsg.text);

      if (aiMsg.hasProductCard && aiMsg.product) {
        // Auto-show product if recommended
        // handleProductView(aiMsg.product); // Optional: auto-view
      }

      setTimeout(() => {
        setState('listening');
        setAvatarMessage('');
      }, 4000);

    } catch (error) {
      console.error('Chat error:', error);
      setState('responding');
      setAvatarMessage('I am unable to reach the server right now.');
      setTimeout(() => {
        setState('listening');
        setAvatarMessage('');
      }, 3000);
    }
  };

  const handleProductView = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
    setState('responding');
    setAvatarMessage(`Great choice! The ${product.name} is highly recommended. Let me show you the details.`);
    setTimeout(() => {
      setState('listening');
    }, 1500);
  };

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(false);
    setShowBiddingFlow(false);
    setShowOrderConfirmation(true);
    setState('responding');
    setAvatarMessage(`Perfect! Let's get this ordered for you.`);
    setTimeout(() => {
      setState('listening');
    }, 1500);
  };

  const handleFindBestPrice = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(false);
    setShowBiddingFlow(true);
    setState('thinking');
    setAvatarMessage('Let me find the best price for you from nearby sellers...');
    setTimeout(() => {
      setState('responding');
    }, 1500);
  };

  const handleAcceptOffer = (offer: any) => {
    setState('responding');
    setAvatarMessage(`Excellent! I've secured ${offer.price} from ${offer.seller}. Let's complete your order.`);
    setShowBiddingFlow(false);
    setTimeout(() => {
      setShowOrderConfirmation(true);
      setState('listening');
    }, 1000);
  };

  const handleDeliverySpeedSelect = (speed: any) => {
    setState('thinking');
    setAvatarMessage(`Looking for products with ${speed.label} delivery...`);
    setTimeout(() => {
      setState('responding');
      setAvatarMessage(`Found products available for ${speed.label} delivery!`);
      setTimeout(() => {
        setState('listening');
        setAvatarMessage('');
      }, 2000);
    }, 800);
  };

  const handleOrderConfirm = () => {
    setShowOrderConfirmation(false);
    setShowPayment(true);
    setState('thinking');
    setAvatarMessage('Processing your payment securely...');
    setTimeout(() => {
      setState('listening');
      setAvatarMessage('');
    }, 1500);
  };

  const handlePaymentComplete = () => {
    // Generate order number
    const newOrderNumber = `ORD${Date.now().toString().slice(-8)}`;
    setOrderNumber(newOrderNumber);
    setShowPayment(false);
    setShowTracking(true);
    setState('responding');
    setAvatarMessage('🎉 Payment successful! Your order is being processed.');
    setTimeout(() => {
      setState('listening');
      setAvatarMessage('');
    }, 2000);
  };

  const handleDelivered = () => {
    setShowTracking(false);
    setShowSuccess(true);
    setState('responding');
    setAvatarMessage('🎉 Your order has been delivered! Hope you love it!');
    setTimeout(() => {
      setState('listening');
      setAvatarMessage('');
    }, 2000);
  };

  const handleContinueShopping = () => {
    setShowSuccess(false);
    setSelectedProduct(null);
    setState('listening');
    setAvatarMessage('What else can I help you find today?');
    setTimeout(() => {
      setAvatarMessage('');
    }, 2000);
  };

  return (
    <div className="bg-black relative w-full h-full overflow-hidden flex flex-col" data-name="Discover - Commerce">
      {/* Background */}
      <div className="absolute bg-[#121212] inset-0 w-full h-full pointer-events-none" />

      {/* Effects */}
      <GlowOverlay state={state} />
      <Sparkles active={state === 'thinking'} />

      {/* Top Fixed Elements */}
      <StatusBarIPhone />
      <TopHeader onOpenSideMenu={onOpenSideMenu} onOpenNotifications={onOpenNotifications} onBack={onBack} />

      {/* Avatar Message Overlay */}
      <AnimatePresence>
        {avatarMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[140px] left-1/2 -translate-x-1/2 z-40 max-w-[320px] w-full px-[20px]"
          >
            <div className="backdrop-blur-[20px] bg-[rgba(81,124,208,0.15)] border border-[#517cd0] rounded-[20px] p-[16px]">
              <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-white text-center leading-[1.5]">
                {avatarMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar Inlay */}
      <AvatarInlay state={state} position="bottom-right" size="medium" />

      {/* Scrollable Commerce Discovery Feed */}
      <div className="flex-1 overflow-y-auto w-full no-scrollbar relative z-10 pt-[124px] pb-[180px] px-[20px]">
        <div className="w-full max-w-[393px] mx-auto">
          <CommerceDiscoveryFeed
            onProductSelect={handleProductView}
            onDeliverySpeedSelect={handleDeliverySpeedSelect}
          />
        </div>
      </div>

      {/* Chat Input Dock */}
      <ChatInputDock smartMode={smartMode} setSmartMode={setSmartMode} onSendMessage={handleSendMessage} />

      {/* Product Detail Modal */}
      <AnimatePresence>
        {showProductDetail && selectedProduct && (
          <ProductDetailExpanded
            product={selectedProduct}
            onClose={() => setShowProductDetail(false)}
            onQuickBuy={handleBuyNow}
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
            onAcceptOffer={handleAcceptOffer}
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
              price: selectedProduct.price,
              deliveryEta: 'Tomorrow, 10 AM - 2 PM',
              reason: selectedProduct.reason || 'Great choice!'
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
            orderTotal={selectedProduct.price}
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
            productName={selectedProduct.name}
            onContinueShopping={handleContinueShopping}
          />
        )}
      </AnimatePresence>

      {/* Home Indicator */}
      <div className="absolute bottom-0 h-[20px] left-0 opacity-20 w-full pointer-events-none z-50">
        <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[139px]">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="bg-white h-[5px] rounded-[100px] w-[139px]" />
          </div>
        </div>
      </div>
    </div>
  );
}