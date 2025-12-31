import React from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-x2vsine00s";
import imgRectangle249873 from "figma:asset/a991af8d0f9705a68889e044a39e85ff09b980a6.png";
import { cn } from '../lib/utils';
import { BackButton } from './BackButton';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Shopping icon URLs
const SHOPPING_BAG_ICON = "https://images.unsplash.com/photo-1560073210-1eb8ea89d4cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJhZyUyMG1pbmltYWx8ZW58MXx8fHwxNzY2MzkwNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const SMARTPHONE_ICON = "https://images.unsplash.com/photo-1647880087466-a1318b812de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwaWNvbiUyMG1pbmltYWx8ZW58MXx8fHwxNzY2MzkwNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const GIFT_ICON = "https://images.unsplash.com/photo-1601307666167-910027240bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwcmliYm9ufGVufDF8fHx8MTc2NjMxMDE2OHww&ixlib=rb-4.1.0&q=80&w=1080";
const SALE_ICON = "https://images.unsplash.com/photo-1594968973184-9040a5a79963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlJTIwZGlzY291bnQlMjBwZXJjZW50fGVufDF8fHx8MTc2NjM5MDQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const TRENDING_ICON = "https://images.unsplash.com/photo-1632639761587-e332fe77c6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZmxhbWUlMjBpY29ufGVufDF8fHx8MTc2NjM5MDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080";

// Additional quick pick icons
const LAPTOP_ICON = "https://images.unsplash.com/photo-1554125970-e3f2399e937f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtaW5pbWFsfGVufDF8fHx8MTc2NjM5Nzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080";
const WATCH_ICON = "https://images.unsplash.com/photo-1755621123450-9b1c21b5b704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMHRpbWVwaWVjZXxlbnwxfHx8fDE3NjYzNjc4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CAKE_ICON = "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzY2MzMyNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const SHOES_ICON = "https://images.unsplash.com/photo-1597892657493-6847b9640bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXN8ZW58MXx8fHwxNzY2Mzk3OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const SOFA_ICON = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBzb2ZhfGVufDF8fHx8MTc2NjMxODAwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const HEADPHONES_ICON = "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW98ZW58MXx8fHwxNzY2MzMwMTk0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const COFFEE_ICON = "https://images.unsplash.com/photo-1608354580875-30bd4168b351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtlcnxlbnwxfHx8fDE3NjYyODcyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const LUGGAGE_ICON = "https://images.unsplash.com/photo-1714235058886-a0b38ad5066c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBsdWdnYWdlfGVufDF8fHx8MTc2NjMzNTQxMHww&ixlib=rb-4.1.0&q=80&w=1080";
const BOOK_ICON = "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVhZGluZ3xlbnwxfHx8fDE3NjYzNzk2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const GAMING_ICON = "https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2NjM1ODgzNXww&ixlib=rb-4.1.0&q=80&w=1080";

// --- Shared Components ---

function Time() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative shrink-0" data-name="Time">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
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

function StatusBarIPhone() {
  return (
    <div className="content-stretch flex h-[50px] items-center justify-between relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-full" data-name="Status Bar - iPhone 16">
      <Time />
      <Levels />
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

function Hamburger() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hamburger 1">
      <Group />
    </div>
  );
}

function Planner({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px] cursor-pointer hover:bg-white/10 transition-colors" 
      data-name="Planner" 
      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}
    >
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Hamburger />
    </div>
  );
}

function Frame14({ onMenuClick, onBack }: { onMenuClick?: () => void, onBack?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Planner onClick={onMenuClick} />
      {onBack && <BackButton onClick={onBack} />}
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

function Conversations() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px]" data-name="Conversations" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <HugeiconsNotificationSnooze />
    </div>
  );
}

function Frame13({ onNotificationsClick }: { onNotificationsClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <Conversations onClick={onNotificationsClick} />
    </div>
  );
}

function Frame1({ onMenuClick, onNotificationsClick, onBack }: { onMenuClick?: () => void, onNotificationsClick?: () => void, onBack?: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-0 relative w-full">
          <Frame14 onMenuClick={onMenuClick} onBack={onBack} />
          <Frame13 onNotificationsClick={onNotificationsClick} />
        </div>
      </div>
    </div>
  );
}

function PageHeadersDark({ onMenuClick, onNotificationsClick, onBack }: { onMenuClick?: () => void, onNotificationsClick?: () => void, onBack?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[120px] items-start left-0 top-0 w-full z-50 pointer-events-none" data-name="Page Headers - Dark">
      <StatusBarIPhone />
      <div className="pointer-events-auto w-full">
          <Frame1 onMenuClick={onMenuClick} onNotificationsClick={onNotificationsClick} onBack={onBack} />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[20px] left-0 opacity-20 w-full z-50 pointer-events-none" data-name="Home Indicator">
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[139px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-white h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

// --- Welcome Screen Components ---

function AvatarFrameDefault({ customImage }: { customImage?: string | null }) {
  return (
    <div className="absolute bg-black h-full w-full left-1/2 overflow-clip top-0 translate-x-[-50%]" data-name="AVATAR FRAME - DEFAULT">
      <div className="absolute inset-0">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={customImage || imgRectangle249873} />
      </div>
    </div>
  );
}

function AvatarTopLayer() {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none" data-name="AVATAR TOP LAYER">
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(12, 11, 11, 0.35) 0%, rgba(0, 0, 0, 0) 15.975%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.42) 70%, rgba(11, 10, 10, 0.7) 100%)" }} />
    </div>
  );
}

function AvatarFrameDefault1({ customImage }: { customImage?: string | null }) {
  return (
    <div className="absolute bg-black h-full w-full overflow-hidden top-0 left-0" data-name="Avatar Frame - Default">
      <AvatarFrameDefault customImage={customImage} />
      <AvatarTopLayer />
    </div>
  );
}

function WelcomeText() {
  return (
    <div className="flex flex-col gap-[14px] items-start w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#f4f4f5] text-[18px] tracking-[0.36px] w-full"
      >
        <p className="leading-[1.2]">👋 Welcome aboard!</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="flex flex-col font-['Sora:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#fcfcfc] text-[28px] tracking-[0.56px] w-full"
      >
        <p className="leading-[1.2]">I'm here to help you shop, discover, and save.</p>
      </motion.div>
    </div>
  );
}

function ChipIcon({ src }: { src: string }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <div className="relative shrink-0 size-[18px]" data-name="Image">
        {src === SMARTPHONE_ICON ? (
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ImageWithFallback alt="" className="absolute left-[-36.31%] max-w-none size-[188.89%] top-[-49.35%]" src={src} />
             </div>
        ) : (
             <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={src} />
        )}
      </div>
    </div>
  );
}

function Chip({ icon, text, onClick }: { icon: string, text: string, onClick: () => void }) {
  return (
    <motion.button 
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(38,38,38,0.4)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.2)] content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0 border border-[#365371] hover:border-[#517cd0] transition-colors"
    >
      <ChipIcon src={icon} />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#f4f4f5] text-[13px] text-nowrap tracking-[0.26px]">{text}</p>
    </motion.button>
  );
}

function SuggestionChips({ onSelect }: { onSelect: (prompt: string) => void }) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar -mx-5 px-5">
        <motion.div 
            className="flex gap-[10px] items-center w-max pb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Chip icon={SMARTPHONE_ICON} text="Find me a Samsung phone" onClick={() => onSelect("Find me a Samsung phone under ₹20,000")} />
          <Chip icon={GIFT_ICON} text="Gift for my wife" onClick={() => onSelect("Find me a gift for my wife")} />
          <Chip icon={SALE_ICON} text="Best deals this week" onClick={() => onSelect("Show me the best deals this week")} />
          <Chip icon={TRENDING_ICON} text="Trending products" onClick={() => onSelect("What's trending right now?")} />
          <Chip icon={LAPTOP_ICON} text="Laptop for work" onClick={() => onSelect("I need a laptop for work and creative tasks")} />
          <Chip icon={WATCH_ICON} text="Smartwatch deals" onClick={() => onSelect("Show me smartwatch deals")} />
          <Chip icon={CAKE_ICON} text="Birthday party supplies" onClick={() => onSelect("I need birthday party supplies")} />
          <Chip icon={SHOES_ICON} text="Running shoes" onClick={() => onSelect("Find me running shoes for marathon training")} />
          <Chip icon={HEADPHONES_ICON} text="Wireless headphones" onClick={() => onSelect("Best wireless headphones under ₹5000")} />
          <Chip icon={SOFA_ICON} text="Living room furniture" onClick={() => onSelect("I want to upgrade my living room furniture")} />
          <Chip icon={COFFEE_ICON} text="Coffee maker" onClick={() => onSelect("Best coffee maker for home")} />
          <Chip icon={LUGGAGE_ICON} text="Travel essentials" onClick={() => onSelect("I need travel essentials for my upcoming trip")} />
          <Chip icon={BOOK_ICON} text="Bestselling books" onClick={() => onSelect("Show me bestselling books this month")} />
          <Chip icon={GAMING_ICON} text="Gaming console" onClick={() => onSelect("Which gaming console should I buy?")} />
        </motion.div>
    </div>
  );
}

function MainPromptButton({ onSelect }: { onSelect: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className="cursor-pointer backdrop-blur-[20px] backdrop-filter content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[14px] py-[10px] rounded-[30px] w-[186px] z-20 shadow-[0_0_15px_rgba(251,101,124,0.3)] hover:shadow-[0_0_20px_rgba(251,101,124,0.5)] transition-shadow" 
      style={{ backgroundImage: "linear-gradient(193.531deg, rgb(251, 101, 124) 1.3202%, rgba(0, 0, 0, 0) 57.121%), linear-gradient(104.842deg, rgba(0, 0, 0, 0) 34.963%, rgba(251, 146, 60, 0.6) 87.345%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 186 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\\' r=\\'10\\' gradientTransform=\\'matrix(-13.485 2.2 -19.979 -5.6638 93 20)\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\'/></radialGradient></defs></svg>')" }}
    >
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
        <div className="relative shrink-0 size-[18px]" data-name="Image">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={SHOPPING_BAG_ICON} />
        </div>
      </div>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#f4f4f5] text-[13px] text-nowrap tracking-[0.26px]">What can I shop for?</p>
    </motion.div>
  );
}

// --- Main Export ---

interface AvatarWelcomeScreenProps {
    onStartChat: (mode: 'voice' | 'text', initialPrompt?: string) => void;
    onOpenSideMenu?: () => void;
    onOpenNotifications?: () => void;
    onBack?: () => void;
    selectedAvatarImage?: string | null;
}

export default function AvatarWelcomeScreen({ onStartChat, onOpenSideMenu, onOpenNotifications, onBack, selectedAvatarImage }: AvatarWelcomeScreenProps) {
  const lastTap = React.useRef(0);

  const handleInteraction = (e: React.SyntheticEvent) => {
      const now = Date.now();
      const timeDiff = now - lastTap.current;
      
      if (timeDiff < 300 && timeDiff > 0) {
          onStartChat('voice');
          e.preventDefault();
      }
      
      lastTap.current = now;
  };

  return (
    <div className="bg-black relative h-full w-full overflow-hidden flex flex-col" data-name="Dark - Greys">
      <div 
        className="absolute inset-0 z-0"
        onDoubleClick={() => onStartChat('voice')}
        onTouchEnd={handleInteraction}
      >
        <AvatarFrameDefault1 customImage={selectedAvatarImage} />
      </div>
      <PageHeadersDark onMenuClick={onOpenSideMenu} onNotificationsClick={onOpenNotifications} onBack={onBack} />
      
      {/* Interactive Content Overlay - Flex Column anchored to bottom */}
      <div className="flex-1 w-full flex flex-col justify-end pb-8 px-5 z-20 pointer-events-none">
          <div className="pointer-events-auto w-full mb-8">
             <WelcomeText />
          </div>
          
          <div className="pointer-events-auto w-full flex justify-center mb-6">
             <MainPromptButton onSelect={() => onStartChat('text')} />
          </div>

          <div className="pointer-events-auto w-full mb-6">
             <SuggestionChips onSelect={(prompt) => onStartChat('voice', prompt)} />
          </div>
          
          <div className="pointer-events-auto w-full">
            <motion.div 
                className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] text-[#b9b9b9] text-[13px] text-center text-nowrap tracking-[0.26px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <p className="leading-[1.2]">
                    <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onStartChat('text')}>Tap to Type</span>
                    {' , '}
                    <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onStartChat('voice')}>Hold to Speak with Avatar</span>
                </p>
            </motion.div>
          </div>
      </div>

      <HomeIndicator />
    </div>
  );
}