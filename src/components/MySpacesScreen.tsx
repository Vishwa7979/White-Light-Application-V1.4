import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Package,
  Heart,
  Users,
  Gift,
  Search,
  Settings,
  Clock,
  Truck,
  CheckCircle,
  Star,
  Store,
  BadgeCheck,
  DollarSign,
  Bell,
  Zap,
  Globe,
  CreditCard,
  MessageCircle,
  Send
} from 'lucide-react';
import { BackButton } from './BackButton';
import { chatThreadsData, ChatThread } from '../utils/chatThreadsData';

/* -------------------------------------------------------------------------- */
/*                            Header Components                               */
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

function TopHeader({ onMenuClick, onBack }: { onMenuClick?: () => void, onBack?: () => void }) {
  return (
    <div className="absolute flex h-[80px] items-start justify-between left-0 px-[20px] top-[44px] w-full z-50">
      <div className="flex items-center gap-[12px]">
        <Planner onClick={onMenuClick} />
        {onBack && <BackButton onClick={onBack} />}
        <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.32px]">
          <p className="leading-[1.2]">My Spaces</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                        Collapsible Section Base                            */
/* -------------------------------------------------------------------------- */

interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  previewContent: React.ReactNode;
  expandedContent: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  accentColor?: string;
}

function CollapsibleSection({
  title,
  icon,
  previewContent,
  expandedContent,
  isExpanded,
  onToggle,
  accentColor = 'teal'
}: CollapsibleSectionProps) {
  const accentColors = {
    teal: 'from-teal-500/20 to-teal-600/10 border-teal-500/30',
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    green: 'from-green-500/20 to-green-600/10 border-green-500/30',
    orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/30',
    pink: 'from-pink-500/20 to-pink-600/10 border-pink-500/30'
  };

  return (
    <motion.div
      className={`backdrop-blur-[20px] bg-gradient-to-br ${accentColors[accentColor as keyof typeof accentColors] || accentColors.teal} border rounded-[24px] overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header - Always Visible */}
      <motion.button
        onClick={onToggle}
        className="w-full p-[20px] flex items-center justify-between"
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-[12px]">
          <div className="size-[48px] rounded-[16px] bg-[rgba(26,26,26,0.8)] flex items-center justify-center">
            {icon}
          </div>
          <div className="text-left">
            <h3 className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-white">
              {title}
            </h3>
            {!isExpanded && previewContent}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="size-[24px] text-white/60" />
        </motion.div>
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-[20px] pb-[20px]">
              <div className="h-[1px] bg-white/10 mb-[16px]" />
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          Section Components                                */
/* -------------------------------------------------------------------------- */

// 0. My Chats Section
function MyChatsSection({ isExpanded, onToggle, onChatClick, threads }: { isExpanded: boolean, onToggle: () => void, onChatClick?: (chatId: string) => void, threads: ChatThread[] }) {
  const chats = threads.map(thread => ({
    id: thread.id,
    threadId: thread.id,
    avatar: 'Emma',
    title: thread.title,
    message: thread.lastMessage,
    timestamp: thread.timestamp,
    unread: thread.hasOrder && (thread.orderStatus === 'pending' || thread.orderStatus === 'confirmed'),
    type: thread.hasOrder ? 'Shopping' : 'Chat',
    orderStatus: thread.orderStatus
  }));

  // Avatar images mapping
  const avatarImages: { [key: string]: string } = {
    'Emma': 'https://i.pravatar.cc/150?img=5',
    'Alex': 'https://i.pravatar.cc/150?img=33',
    'Noah': 'https://i.pravatar.cc/150?img=12',
    'Roamie': 'https://i.pravatar.cc/150?img=8'
  };

  return (
    <CollapsibleSection
      title="Chats"
      icon={<MessageCircle className="size-[24px] text-blue-400" />}
      previewContent={
        <div className="flex items-center gap-[8px]">
          <div className="size-[8px] rounded-full bg-blue-400" />
          <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-white/60">
            {chats.filter(c => c.unread).length} unread messages
          </p>
        </div>
      }
      expandedContent={
        <div className="space-y-[8px] max-h-[400px] overflow-y-auto no-scrollbar">
          {chats.map((chat) => (
            <motion.div
              key={chat.id}
              onClick={() => onChatClick?.(chat.threadId)}
              className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[16px] p-[14px] hover:border-blue-500/30 transition-colors cursor-pointer"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-[12px]">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="size-[48px] rounded-full overflow-hidden border-2 border-blue-500/30">
                    <img
                      src={avatarImages[chat.avatar]}
                      alt={chat.avatar}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {chat.unread && (
                    <div className="absolute -top-1 -right-1 size-[14px] rounded-full bg-blue-500 border-2 border-[#1a1a1a] flex items-center justify-center">
                      <div className="size-[6px] rounded-full bg-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-[6px]">
                    <div className="flex items-center gap-[8px]">
                      <p className={`font-['Urbanist:SemiBold',sans-serif] text-[13px] ${chat.unread ? 'text-white' : 'text-white/80'} line-clamp-1`}>
                        {chat.title}
                      </p>
                    </div>
                    <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-white/50 shrink-0">
                      {chat.timestamp}
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px] mb-[4px]">
                    <div className="px-[8px] py-[2px] rounded-full bg-blue-500/20 border border-blue-500/30">
                      <p className="font-['Urbanist:Medium',sans-serif] text-[9px] text-blue-400 uppercase">
                        {chat.type}
                      </p>
                    </div>
                    {chat.orderStatus && (
                      <div className={`px-[8px] py-[2px] rounded-full ${chat.orderStatus === 'delivered' ? 'bg-green-500/20 border-green-500/30' :
                          chat.orderStatus === 'shipped' ? 'bg-blue-500/20 border-blue-500/30' :
                            chat.orderStatus === 'confirmed' ? 'bg-yellow-500/20 border-yellow-500/30' :
                              'bg-orange-500/20 border-orange-500/30'
                        } border`}>
                        <p className={`font-['Urbanist:Medium',sans-serif] text-[9px] uppercase ${chat.orderStatus === 'delivered' ? 'text-green-400' :
                            chat.orderStatus === 'shipped' ? 'text-blue-400' :
                              chat.orderStatus === 'confirmed' ? 'text-yellow-400' :
                                'text-orange-400'
                          }`}>
                          {chat.orderStatus}
                        </p>
                      </div>
                    )}
                  </div>
                  <p className={`font-['Urbanist:Regular',sans-serif] text-[12px] ${chat.unread ? 'text-white/90' : 'text-white/60'} line-clamp-1 leading-[1.4]`}>
                    {chat.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      }
      isExpanded={isExpanded}
      onToggle={onToggle}
      accentColor="blue"
    />
  );
}

// 1. My Orders Section
function MyOrdersSection({ isExpanded, onToggle }: { isExpanded: boolean, onToggle: () => void }) {
  const orders = [
    { id: 'ORD123456', status: 'Out for Delivery', eta: 'Today by 7:00 PM', product: 'Wireless Headphones' },
    { id: 'ORD123455', status: 'Shipped', eta: 'Tomorrow', product: 'Smart Watch' }
  ];

  return (
    <CollapsibleSection
      title="My Orders"
      icon={<Package className="size-[24px] text-teal-400" />}
      previewContent={
        <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-white/60">
          {orders.length} active orders
        </p>
      }
      expandedContent={
        <div className="space-y-[12px]">
          {orders.map((order, idx) => (
            <div key={order.id} className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[16px] p-[16px]">
              <div className="flex items-start justify-between mb-[8px]">
                <div className="flex-1">
                  <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white mb-[4px]">
                    {order.product}
                  </p>
                  <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/50">
                    #{order.id}
                  </p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="size-[8px] rounded-full bg-green-400 animate-pulse" />
                  <p className="font-['Urbanist:Medium',sans-serif] text-[12px] text-green-400">
                    {order.status}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[6px] mb-[12px]">
                <Truck className="size-[14px] text-white/50" />
                <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/60">
                  {order.eta}
                </p>
              </div>
              <button className="w-full bg-teal-500/20 border border-teal-500/30 rounded-[12px] py-[10px] font-['Urbanist:SemiBold',sans-serif] text-[13px] text-teal-400 hover:bg-teal-500/30 transition-colors">
                Track Order
              </button>
            </div>
          ))}
        </div>
      }
      isExpanded={isExpanded}
      onToggle={onToggle}
      accentColor="teal"
    />
  );
}

// 2. My Finds Section
function MyFindsSection({ isExpanded, onToggle }: { isExpanded: boolean, onToggle: () => void }) {
  const finds = [
    { id: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop', name: 'Smartwatch Pro' },
    { id: 2, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop', name: 'Sunglasses' },
    { id: 3, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop', name: 'Headphones' },
    { id: 4, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&h=200&fit=crop', name: 'Smartphone' }
  ];

  return (
    <CollapsibleSection
      title="My Finds"
      icon={<Heart className="size-[24px] text-purple-400" />}
      previewContent={
        <div className="flex -space-x-2">
          {finds.slice(0, 3).map((find, idx) => (
            <div key={find.id} className="size-[32px] rounded-[8px] border-2 border-[#1a1a1a] overflow-hidden">
              <img src={find.image} alt={find.name} className="w-full h-full object-cover" />
            </div>
          ))}
          {finds.length > 3 && (
            <div className="size-[32px] rounded-[8px] border-2 border-[#1a1a1a] bg-[#2a2a2a] flex items-center justify-center">
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[10px] text-white">
                +{finds.length - 3}
              </p>
            </div>
          )}
        </div>
      }
      expandedContent={
        <div className="grid grid-cols-2 gap-[12px]">
          {finds.map((find) => (
            <div key={find.id} className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[16px] overflow-hidden hover:border-purple-500/30 transition-colors cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img src={find.image} alt={find.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-[12px]">
                <p className="font-['Urbanist:SemiBold',sans-serif] text-[13px] text-white truncate">
                  {find.name}
                </p>
                <div className="flex items-center gap-[4px] mt-[4px]">
                  <Heart className="size-[12px] text-purple-400 fill-purple-400" />
                  <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-white/60">
                    Saved
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
      isExpanded={isExpanded}
      onToggle={onToggle}
      accentColor="purple"
    />
  );
}

// 3. My Creators & Stores Section
function MyCreatorsSection({ isExpanded, onToggle }: { isExpanded: boolean, onToggle: () => void }) {
  const creators = [
    { name: 'Tech Guru Raj', avatar: 'https://i.pravatar.cc/150?img=12', verified: true, followers: '24K' },
    { name: 'Fashion Emma', avatar: 'https://i.pravatar.cc/150?img=5', verified: true, followers: '18K' },
    { name: 'Audio Expert Sam', avatar: 'https://i.pravatar.cc/150?img=8', verified: false, followers: '12K' }
  ];

  return (
    <CollapsibleSection
      title="My Creators & Stores"
      icon={<Users className="size-[24px] text-blue-400" />}
      previewContent={
        <div className="flex -space-x-2">
          {creators.slice(0, 3).map((creator, idx) => (
            <div key={idx} className="size-[32px] rounded-full border-2 border-[#1a1a1a] overflow-hidden">
              <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      }
      expandedContent={
        <div className="space-y-[12px]">
          {creators.map((creator, idx) => (
            <div key={idx} className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[16px] p-[16px] flex items-center justify-between hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-[12px]">
                <div className="size-[48px] rounded-full overflow-hidden border-2 border-blue-500/30">
                  <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-[6px]">
                    <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white">
                      {creator.name}
                    </p>
                    {creator.verified && <BadgeCheck className="size-[14px] text-blue-400" />}
                  </div>
                  <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/60">
                    {creator.followers} followers
                  </p>
                </div>
              </div>
              <button className="px-[16px] py-[8px] bg-blue-500/20 border border-blue-500/30 rounded-[12px] font-['Urbanist:SemiBold',sans-serif] text-[12px] text-blue-400 hover:bg-blue-500/30 transition-colors">
                Following
              </button>
            </div>
          ))}
        </div>
      }
      isExpanded={isExpanded}
      onToggle={onToggle}
      accentColor="blue"
    />
  );
}

// 4. My Deals & Rewards Section
function MyDealsSection({ isExpanded, onToggle }: { isExpanded: boolean, onToggle: () => void }) {
  return (
    <CollapsibleSection
      title="My Deals & Rewards"
      icon={<Gift className="size-[24px] text-green-400" />}
      previewContent={
        <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-green-400">
          You saved ₹12,450 so far
        </p>
      }
      expandedContent={
        <div className="space-y-[12px]">
          <div className="backdrop-blur-[10px] bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-[16px] p-[16px]">
            <div className="flex items-center justify-between mb-[8px]">
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white">
                Cashback Available
              </p>
              <p className="font-['Urbanist:Bold',sans-serif] text-[18px] text-green-400">
                ₹2,450
              </p>
            </div>
            <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/60 mb-[12px]">
              Use on your next purchase
            </p>
            <button className="w-full bg-green-500/30 border border-green-500/50 rounded-[12px] py-[10px] font-['Urbanist:SemiBold',sans-serif] text-[13px] text-green-400">
              Redeem Now
            </button>
          </div>

          <div className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[16px] p-[16px]">
            <div className="flex items-center gap-[12px] mb-[8px]">
              <DollarSign className="size-[20px] text-green-400" />
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white">
                Bank Offers
              </p>
            </div>
            <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/60">
              10% off on HDFC Credit Cards • Min ₹1,500
            </p>
          </div>

          <div className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[16px] p-[16px]">
            <div className="flex items-center justify-between mb-[8px]">
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white">
                Referral Progress
              </p>
              <p className="font-['Urbanist:Medium',sans-serif] text-[13px] text-white/60">
                2/5 friends
              </p>
            </div>
            <div className="w-full h-[6px] bg-[#2a2a2a] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-[40%]" />
            </div>
            <p className="font-['Urbanist:Regular',sans-serif] text-[11px] text-white/50 mt-[8px]">
              3 more referrals to unlock ₹500 bonus
            </p>
          </div>
        </div>
      }
      isExpanded={isExpanded}
      onToggle={onToggle}
      accentColor="green"
    />
  );
}

// 5. My Requests Section
function MyRequestsSection({ isExpanded, onToggle }: { isExpanded: boolean, onToggle: () => void }) {
  const requests = [
    { id: 1, product: 'iPhone 15 Pro Max', status: 'Searching', timestamp: '2 hours ago' },
    { id: 2, product: 'Nike Air Jordan', status: 'Found 3 offers', timestamp: '5 hours ago' }
  ];

  return (
    <CollapsibleSection
      title="My Requests"
      icon={<Search className="size-[24px] text-orange-400" />}
      previewContent={
        <div className="flex items-center gap-[6px]">
          <div className="size-[8px] rounded-full bg-orange-400 animate-pulse" />
          <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-orange-400">
            Searching
          </p>
        </div>
      }
      expandedContent={
        <div className="space-y-[12px]">
          {requests.map((request) => (
            <div key={request.id} className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[16px] p-[16px]">
              <div className="flex items-start justify-between mb-[8px]">
                <div className="flex-1">
                  <p className="font-['Urbanist:SemiBold',sans-serif] text-[14px] text-white mb-[4px]">
                    {request.product}
                  </p>
                  <p className="font-['Urbanist:Regular',sans-serif] text-[12px] text-white/50">
                    {request.timestamp}
                  </p>
                </div>
                <div className="flex items-center gap-[6px] px-[12px] py-[6px] bg-orange-500/20 border border-orange-500/30 rounded-full">
                  {request.status === 'Searching' ? (
                    <>
                      <div className="size-[6px] rounded-full bg-orange-400 animate-pulse" />
                      <p className="font-['Urbanist:Medium',sans-serif] text-[11px] text-orange-400">
                        Searching
                      </p>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="size-[12px] text-green-400" />
                      <p className="font-['Urbanist:Medium',sans-serif] text-[11px] text-green-400">
                        Found
                      </p>
                    </>
                  )}
                </div>
              </div>
              {request.status !== 'Searching' && (
                <button className="w-full bg-orange-500/20 border border-orange-500/30 rounded-[12px] py-[10px] font-['Urbanist:SemiBold',sans-serif] text-[13px] text-orange-400 hover:bg-orange-500/30 transition-colors">
                  View Offers
                </button>
              )}
            </div>
          ))}
        </div>
      }
      isExpanded={isExpanded}
      onToggle={onToggle}
      accentColor="orange"
    />
  );
}

// 6. My Preferences Section
function MyPreferencesSection({ isExpanded, onToggle }: { isExpanded: boolean, onToggle: () => void }) {
  return (
    <CollapsibleSection
      title="My Preferences"
      icon={<Settings className="size-[24px] text-pink-400" />}
      previewContent={
        <p className="font-['Urbanist:Regular',sans-serif] text-[13px] text-white/60">
          Customize your experience
        </p>
      }
      expandedContent={
        <div className="space-y-[16px]">
          {/* Delivery Preference */}
          <div>
            <p className="font-['Urbanist:SemiBold',sans-serif] text-[13px] text-white mb-[8px]">
              Delivery Preference
            </p>
            <div className="flex gap-[8px]">
              <button className="flex-1 bg-pink-500/20 border border-pink-500/30 rounded-[12px] py-[10px] font-['Urbanist:SemiBold',sans-serif] text-[13px] text-pink-400">
                Fast
              </button>
              <button className="flex-1 bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[12px] py-[10px] font-['Urbanist:SemiBold',sans-serif] text-[13px] text-white/60 hover:border-pink-500/30 transition-colors">
                Economical
              </button>
            </div>
          </div>

          {/* Language */}
          <div>
            <p className="font-['Urbanist:SemiBold',sans-serif] text-[13px] text-white mb-[8px]">
              Language
            </p>
            <div className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[12px] p-[12px] flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <Globe className="size-[18px] text-white/60" />
                <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-white">
                  English
                </p>
              </div>
              <ChevronDown className="size-[18px] text-white/40" />
            </div>
          </div>

          {/* Default Payment */}
          <div>
            <p className="font-['Urbanist:SemiBold',sans-serif] text-[13px] text-white mb-[8px]">
              Default Payment
            </p>
            <div className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[12px] p-[12px] flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <CreditCard className="size-[18px] text-white/60" />
                <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-white">
                  UPI
                </p>
              </div>
              <ChevronDown className="size-[18px] text-white/40" />
            </div>
          </div>

          {/* Notifications */}
          <div>
            <p className="font-['Urbanist:SemiBold',sans-serif] text-[13px] text-white mb-[8px]">
              Notifications
            </p>
            <div className="backdrop-blur-[10px] bg-[rgba(26,26,26,0.6)] border border-[#2a2a2a] rounded-[12px] p-[12px] flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <Bell className="size-[18px] text-white/60" />
                <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-white">
                  All notifications
                </p>
              </div>
              <div className="size-[48px] rounded-full bg-pink-500 flex items-center justify-center">
                <div className="size-[20px] rounded-full bg-white translate-x-[10px]" />
              </div>
            </div>
          </div>
        </div>
      }
      isExpanded={isExpanded}
      onToggle={onToggle}
      accentColor="pink"
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                            Main Component                                  */
/* -------------------------------------------------------------------------- */

export default function MySpacesScreen({
  onOpenSideMenu,
  onBack,
  onChatClick,
  threads = chatThreadsData
}: {
  onOpenSideMenu?: () => void,
  onBack?: () => void,
  onChatClick?: (chatId: string) => void,
  threads?: ChatThread[]
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleToggle = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-black relative w-full h-full overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute bg-[#0a0a0a] inset-0 w-full h-full pointer-events-none" />

      {/* Top Fixed Elements */}
      <StatusBarIPhone />
      <TopHeader onMenuClick={onOpenSideMenu} onBack={onBack} />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto w-full no-scrollbar relative z-10 pt-[124px] pb-[40px] px-[20px]">
        <div className="w-full max-w-[393px] mx-auto space-y-[16px]">
          <MyChatsSection
            isExpanded={expandedSection === 'chats'}
            onToggle={() => handleToggle('chats')}
            onChatClick={onChatClick}
            threads={threads}
          />
          <MyOrdersSection
            isExpanded={expandedSection === 'orders'}
            onToggle={() => handleToggle('orders')}
          />
          <MyFindsSection
            isExpanded={expandedSection === 'finds'}
            onToggle={() => handleToggle('finds')}
          />
          <MyCreatorsSection
            isExpanded={expandedSection === 'creators'}
            onToggle={() => handleToggle('creators')}
          />
          <MyDealsSection
            isExpanded={expandedSection === 'deals'}
            onToggle={() => handleToggle('deals')}
          />
          <MyRequestsSection
            isExpanded={expandedSection === 'requests'}
            onToggle={() => handleToggle('requests')}
          />
          <MyPreferencesSection
            isExpanded={expandedSection === 'preferences'}
            onToggle={() => handleToggle('preferences')}
          />
        </div>
      </div>

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