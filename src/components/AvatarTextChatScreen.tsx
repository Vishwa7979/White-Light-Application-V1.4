import React from 'react';
import svgPaths from "../imports/svg-5n82iuife2";
import svgPathsBubble from "../imports/svg-7all08ud2b";
import svgPathsSmart from "../imports/svg-fbsmvezpvt";
import { Mic, MicOff, Maximize2 } from "lucide-react";
import imgImage649 from "figma:asset/93d25a87fbaa2633cb633d7e58182c508a364ce7.png";
import imgPreparationFlowerBoxWithMacaroonsTopViewFloristWorkplace1 from "figma:asset/48b154faab861cba20325ca8c755b5cde26ebec4.png";
import imgPreparationFlowerBoxWithMacaroonsTopViewFloristWorkplace2 from "figma:asset/e93674a8a22059f587e87ec443ce1a7497e346c7.png";
import imgPreparationFlowerBoxWithMacaroonsTopViewFloristWorkplace3 from "figma:asset/0a1c0ac7e4935ab9b46711ad7d9c4d04f4365509.png";
import imgLifestylePeopleEmotionsCasualConceptConfidentNiceSmilingAsianWomanCrossArmsChestConfidentReadyHelpListeningCoworkersTakingPartConversation5 from "figma:asset/a991af8d0f9705a68889e044a39e85ff09b980a6.png";
import { motion, useAnimation, PanInfo } from "motion/react";

import AvatarChatAppsMenu from "./AvatarChatAppsMenu";
import AvatarChatGridMenu from "./AvatarChatGridMenu";
import { ChatModePill } from "./ChatModePill";
import { BackButton } from './BackButton';
import { ProductCarousel } from './ProductCard';
import { ImageUploadMenu, ImagePreview } from './ImageUploadMenu';
import { OrderConfirmation } from './OrderConfirmation';
import { AnimatePresence } from 'motion/react';
import { ChatThread } from '../utils/chatThreadsData';
import { OrderStatusCard, OrderCTACard } from './OrderStatusCard';
import { ThreadProductCarousel } from './ThreadProductCarousel';
import { OrderCarousel } from './OrderCarousel';
import { PaymentScreen } from './PaymentScreen';
import { OrderTrackingScreen } from './OrderTrackingScreen';
import { OrderSuccessScreen } from './OrderSuccessScreen';
import { ProductDetailExpanded } from './ProductDetailExpanded';
import { BiddingFlow } from './BiddingFlow';

/* -------------------------------------------------------------------------- */
/*                                SVG Paths                                   */
/* -------------------------------------------------------------------------- */

const svgPathsReply = {
  p12f8cc00: "M12.2 3.80667C11.94 3.54667 11.52 3.54667 11.26 3.80667L8 7.06L4.74 3.8C4.48 3.54 4.06 3.54 3.8 3.8C3.54 4.06 3.54 4.48 3.8 4.74L7.06 8L3.8 11.26C3.54 11.52 3.54 11.94 3.8 12.2C4.06 12.46 4.48 12.46 4.74 12.2L8 8.94L11.26 12.2C11.52 12.46 11.94 12.46 12.2 12.2C12.46 11.94 12.46 11.52 12.2 11.26L8.94 8L12.2 4.74C12.4533 4.48667 12.4533 4.06 12.2 3.80667Z",
  pbe998a0: "M15 12.75V11.85C15 10.5898 15 9.95984 14.7548 9.47849C14.5391 9.05512 14.1949 8.71094 13.7715 8.49524C13.2901 8.24999 12.6602 8.24999 11.4 8.24999H3M3 8.24999L6 5.24999M3 8.24999L6 11.25",
};

/* -------------------------------------------------------------------------- */
/*                              Core Components                               */
/* -------------------------------------------------------------------------- */

function Bg() {
  return (
    <div className="absolute h-full left-0 overflow-clip top-0 w-full" data-name="bg">
      <div className="absolute bg-[#121212] h-full left-0 top-0 w-full" />
    </div>
  );
}

const SwipeableMessage = ({ children, onReply, message }: { children: React.ReactNode, onReply: (msg: Message) => void, message: Message }) => {
  const controls = useAnimation();

  return (
    <motion.div
      style={{ touchAction: "pan-y", width: "100%" }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={{ right: 0.3, left: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.x > 80) {
          onReply(message);
        }
      }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

function MessageItem({ text = "Lorem Ipsum" }: { text?: string }) {
  return (
    <motion.div
      className="content-stretch flex items-end max-w-[230px] px-[16px] py-[12px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px] shrink-0"
      data-name="message item"
      style={{ backgroundImage: "linear-gradient(257.089deg, rgba(51, 51, 51, 0.4) 3.3598%, rgba(51, 51, 51, 0.2) 94.67%)" }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(53,53,53,0)] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px]" />
      <p className="basis-0 font-['Urbanist:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#f4f4f5] text-[14px] text-left tracking-[0.28px]">{text}</p>
    </motion.div>
  );
}

function UserMessage({ text }: { text?: string }) {
  return (
    <motion.div
      className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full"
      data-name="User Message"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <MessageItem text={text} />
    </motion.div>
  );
}

// Typing indicator for AI messages
function TypingIndicator({ customImage }: { customImage?: string | null }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
      <Group1 customImage={customImage} />
      <div className="flex items-center gap-[6px] px-[16px] py-[12px] rounded-[16px] bg-[rgba(38,38,38,0.4)] border border-[rgba(53,53,53,0.3)]">
        <motion.div
          className="w-[6px] h-[6px] rounded-full bg-[#a1a1aa]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-[6px] h-[6px] rounded-full bg-[#a1a1aa]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-[6px] h-[6px] rounded-full bg-[#a1a1aa]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
        />
      </div>
    </div>
  );
}

function Group1({ customImage }: { customImage?: string | null }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 14506">
            <circle cx="16" cy="16" fill="var(--fill-0, black)" fillOpacity="0.45" r="16" />
            <circle cx="16" cy="16" r="15.6" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[4px] mt-[4px] relative rounded-[100px] size-[24px]" data-name="image 649">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={customImage || imgImage649} />
        </div>
      </div>
    </div>
  );
}

function IconParkOutlineGoodTwo() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="icon-park-outline:good-two">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_9_4860)" id="icon-park-outline:good-two">
          <path d={svgPathsBubble.p3a252400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-1, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_9_4860">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LikeButton() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-r content-stretch flex flex-col from-[#231f1f] items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[22px] to-[#353131]">
      <div aria-hidden="true" className="absolute border-[#231f1f] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <IconParkOutlineGoodTwo />
    </div>
  );
}

function IconParkOutlineBadTwo() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="icon-park-outline:bad-two">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_9_4872)" id="icon-park-outline:bad-two">
          <path d={svgPathsBubble.p1ade77c0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14286" />
        </g>
        <defs>
          <clipPath id="clip0_9_4872">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DislikeButton() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[22px]" data-name="Dislike">
      <IconParkOutlineBadTwo />
    </div>
  );
}

function EpRefresh() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ep:refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ep:refresh">
          <path d={svgPathsBubble.p2559ea00} fill="var(--fill-0, #A1A1AA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RefreshButton() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[22px]" data-name="Dislike">
      <EpRefresh />
    </div>
  );
}

function CopyIconGroup() {
  return (
    <div className="absolute h-[13px] left-[3px] top-[2px] w-[11.701px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <g id="Group 118">
          <path d={svgPathsBubble.p123d8600} fill="var(--fill-0, #A1A1AA)" id="Subtract" />
          <rect height="10.05" id="Rectangle 296" rx="2.5" stroke="var(--stroke-0, #A1A1AA)" transform="rotate(180 9.25 12.5)" width="8.75" x="9.25" y="12.5" />
        </g>
      </svg>
    </div>
  );
}

function EpRefresh1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="ep:refresh">
      <CopyIconGroup />
    </div>
  );
}

function CopyButton() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[22px]" data-name="Dislike">
      <EpRefresh1 />
    </div>
  );
}

function ResponseActions() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <LikeButton />
      <DislikeButton />
      <RefreshButton />
      <CopyButton />
    </div>
  );
}

function MessageItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[450px] relative rounded-[11px] shrink-0 group" data-name="message item">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#d7d7d7] text-[14px] tracking-[0.28px] w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <ResponseActions />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#27272a] text-[13px] text-nowrap tracking-[0.26px]">{`👍 `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-r content-stretch flex from-[rgba(35,31,31,0.6)] gap-[2px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0 to-[#382f25]">
      <div aria-hidden="true" className="absolute border border-[#231e18] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame6 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d7d7d7] text-[13px] text-nowrap tracking-[0.26px]">Let’s Proceed with Checkout</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#b9b9b9] text-[13px] text-nowrap tracking-[0.26px]">{`✏️ `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.3)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(29,29,29,0.8)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame7 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#9b9b9b] text-[13px] text-nowrap tracking-[0.26px]">Make Changes</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
      <MessageItem1 />
      <Frame4 />
    </div>
  );
}

function AiResponse({ customImage }: { customImage?: string | null }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Ai Response">
      <Group1 customImage={customImage} />
      <Frame12 />
    </div>
  );
}

function MessageItem2() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#27272a] items-end max-w-[230px] px-[16px] py-[12px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 to-[rgba(51,51,51,0.6)]" data-name="message item">
      <p className="basis-0 font-['Urbanist:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#f4f4f5] text-[14px] text-left tracking-[0.28px]">{`👍 Let’s Proceed with Checkout `}</p>
    </div>
  );
}

function UserMessage1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="User Message">
      <MessageItem2 />
    </div>
  );
}

function Group2({ customImage }: { customImage?: string | null }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 14506">
            <circle cx="16" cy="16" fill="var(--fill-0, black)" fillOpacity="0.45" r="16" />
            <circle cx="16" cy="16" r="15.6" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[4px] mt-[4px] relative rounded-[100px] size-[24px]" data-name="image 649">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={customImage || imgImage649} />
        </div>
      </div>
    </div>
  );
}

function MessageItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[450px] relative rounded-[11px] shrink-0 group" data-name="message item">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#d7d7d7] text-[14px] tracking-[0.28px] w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <ResponseActions />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start pb-[16px] pt-0 px-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[12px] text-white tracking-[0.24px]">
            <span className="font-['Urbanist:Light',sans-serif] font-light">{`Earthy & Natural`}</span>
            <span className="font-['Urbanist:Regular',sans-serif]">{` - warm tones`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 w-[140px]" data-name="Container" style={{ backgroundImage: "linear-gradient(124.645deg, rgba(255, 255, 255, 0.25) 39.635%, rgba(0, 0, 0, 0.1) 96.383%)" }}>
      <div aria-hidden="true" className="absolute border-[#d8ff6f] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_12.028px_24.056px_-14.434px_rgba(0,0,0,0.25)]" />
      <div className="h-[120px] pointer-events-none relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="preparation-flower-box-with-macaroons-top-view-florist-workplace 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[16px] rounded-tr-[16px] size-full" src={imgPreparationFlowerBoxWithMacaroonsTopViewFloristWorkplace1} />
        <div aria-hidden="true" className="absolute border-[#d8ff6f] border-[0.6px_0.6px_0px] border-solid inset-0 rounded-tl-[16px] rounded-tr-[16px]" />
      </div>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start pb-[16px] pt-0 px-[10px] relative w-full">
          <p className="basis-0 font-['Urbanist:Light',sans-serif] font-light grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[12px] text-white tracking-[0.24px]">Minimal Craft Studio - clean, calm</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 w-[140px]" data-name="Container" style={{ backgroundImage: "linear-gradient(130.462deg, rgba(255, 255, 255, 0.25) 13.227%, rgba(0, 0, 0, 0.1) 59.287%)" }}>
      <div aria-hidden="true" className="absolute border-[0.6px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_12.028px_24.056px_-14.434px_rgba(0,0,0,0.25)]" />
      <div className="h-[120px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="preparation-flower-box-with-macaroons-top-view-florist-workplace 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[16px] rounded-tr-[16px]">
          <img alt="" className="absolute h-[127.9%] left-[-63.32%] max-w-none top-[0.36%] w-[226.65%]" src={imgPreparationFlowerBoxWithMacaroonsTopViewFloristWorkplace2} />
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start pb-[16px] pt-0 px-[10px] relative w-full">
          <p className="basis-0 font-['Urbanist:Light',sans-serif] font-light grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[12px] text-white tracking-[0.24px]">{`Colorful & Folk -bright artisan`}</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 w-[140px]" data-name="Container" style={{ backgroundImage: "linear-gradient(130.462deg, rgba(255, 255, 255, 0.25) 13.227%, rgba(0, 0, 0, 0.1) 59.287%)" }}>
      <div aria-hidden="true" className="absolute border-[0.6px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_12.028px_24.056px_-14.434px_rgba(0,0,0,0.25)]" />
      <div className="h-[120px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="preparation-flower-box-with-macaroons-top-view-florist-workplace 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[16px] rounded-tr-[16px] size-full" src={imgPreparationFlowerBoxWithMacaroonsTopViewFloristWorkplace3} />
      </div>
      <Frame10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-center flex flex-wrap gap-[14px] items-center relative shrink-0">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
      <MessageItem3 />
      <Frame2 />
    </div>
  );
}

function AiResponse1({ customImage }: { customImage?: string | null }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Ai Response">
      <Group2 customImage={customImage} />
      <Frame13 />
    </div>
  );
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai' | 'typing';
  type?: 'text' | 'products' | 'image' | 'thread_products' | 'order_status' | 'order_cta' | 'order_carousel' | 'typing' | 'flight_card' | 'hotel_card' | 'cab_card';
  products?: Array<{
    image: string;
    name: string;
    price: string;
    originalPrice?: string;
    deliveryEta: string;
    reason: string;
    rating?: number;
    isFastest?: boolean;
    isBestValue?: boolean;
    isLocalStore?: boolean;
  }>;
  threadProducts?: import('../utils/chatThreadsData').Product[];
  order?: import('../utils/chatThreadsData').Order;
  orders?: import('../utils/chatThreadsData').Order[];
  imageUrl?: string;
}

function Frame5({ onSwitchToVoice, smartMode, messages = [], onReply, selectedAvatarImage, onProductSelect, onPlaceOrder, onSelectFlight, onSelectHotel, onSelectCab }: { onSwitchToVoice?: () => void, smartMode: boolean, messages?: Message[], onReply: (msg: Message) => void, selectedAvatarImage?: string | null, onProductSelect?: (product: any) => void, onPlaceOrder?: () => void, onSelectFlight?: () => void, onSelectHotel?: () => void, onSelectCab?: () => void }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  // Mock initial messages as objects to enable reply feature on them too
  const initialUserMsg: Message = { id: 'init-1', text: 'Lorem Ipsum', sender: 'user' };

  return (
    <div
      ref={scrollRef}
      className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 content-stretch flex flex-col gap-[24px] items-center w-full max-w-2xl px-[20px] overflow-y-auto no-scrollbar pt-[280px] transition-[padding] duration-300 ${smartMode ? 'pb-[260px]' : 'pb-[160px]'}`}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <motion.div
        className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a83] text-[14px] text-center text-nowrap tracking-[0.28px]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="leading-[1.2]">TODAY</p>
      </motion.div>

      {/* Show demo conversation only if no messages loaded */}
      {messages.length === 0 && (
        <>
          <SwipeableMessage message={initialUserMsg} onReply={onReply}>
            <UserMessage />
          </SwipeableMessage>

          <AiResponse />
          <UserMessage1 />
          <AiResponse1 />
          <UserMessage1 />
          <AiResponse />
          <UserMessage1 />
        </>
      )}

      {/* Dynamic Messages */}
      {messages.map((msg) => (
        msg.type === 'typing' ? (
          <TypingIndicator key={msg.id} customImage={selectedAvatarImage} />
        ) : msg.sender === 'user' ? (
          <SwipeableMessage key={msg.id} message={msg} onReply={onReply}>
            <UserMessage text={msg.text} />
          </SwipeableMessage>
        ) : (
          msg.type === 'products' && msg.products ? (
            <motion.div
              key={msg.id}
              className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Group1 customImage={selectedAvatarImage} />
              <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
                {msg.text && (
                  <motion.div
                    className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.2)] border border-[#365371] rounded-[20px] px-[16px] py-[12px] w-full"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.4] text-[#f4f4f5] text-[15px]">{msg.text}</p>
                  </motion.div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <ProductCarousel
                    products={msg.products.map(product => ({
                      ...product,
                      onSelect: onProductSelect ? () => onProductSelect(product) : undefined
                    }))}
                  />
                </motion.div>
                <ResponseActions />
              </div>
            </motion.div>
          ) : msg.type === 'thread_products' && msg.threadProducts ? (
            <motion.div
              key={msg.id}
              className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Group1 customImage={selectedAvatarImage} />
              <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <ThreadProductCarousel
                    products={msg.threadProducts}
                    onProductSelect={onProductSelect}
                  />
                </motion.div>
                <ResponseActions />
              </div>
            </motion.div>
          ) : msg.type === 'order_status' && msg.order ? (
            <div key={msg.id} className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Group1 customImage={selectedAvatarImage} />
              <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
                <OrderStatusCard order={msg.order} />
                <ResponseActions />
              </div>
            </div>
          ) : msg.type === 'order_cta' ? (
            <div key={msg.id} className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Group1 customImage={selectedAvatarImage} />
              <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
                <OrderCTACard
                  content={msg.text}
                  onAction={onPlaceOrder}
                />
                <ResponseActions />
              </div>
            </div>
          ) : msg.type === 'order_carousel' && msg.orders ? (
            <motion.div
              key={msg.id}
              className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Group1 customImage={selectedAvatarImage} />
              <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <OrderCarousel
                    orders={msg.orders}
                    onOrderSelect={(order) => {
                      console.log('Order selected:', order);
                    }}
                  />
                </motion.div>
                <ResponseActions />
              </div>
            </motion.div>
          ) : msg.type === 'image' && msg.imageUrl ? (
            <SwipeableMessage key={msg.id} message={msg} onReply={onReply}>
              <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-end min-h-px min-w-px relative shrink-0">
                  <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(251,146,60,0.2)] border border-[rgba(251,146,60,0.5)] rounded-[20px] p-[8px] max-w-[80%]">
                    <img src={msg.imageUrl} alt="Uploaded" className="max-w-full rounded-[12px] max-h-[300px] object-cover" />
                    {msg.text && (
                      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.4] text-[#f4f4f5] text-[15px] mt-2">{msg.text}</p>
                    )}
                  </div>
                </div>
              </div>
            </SwipeableMessage>
          ) : msg.sender === 'ai' && msg.type === 'text' ? (
            <motion.div
              key={msg.id}
              className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Group1 customImage={selectedAvatarImage} />
              <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <MessageItem text={msg.text} />
                </motion.div>
                <ResponseActions />
              </div>
            </motion.div>
          ) : msg.type === 'flight_card' ? (
            <div key={msg.id} className="w-full flex justify-center py-4">
              <button onClick={onSelectFlight} className="bg-blue-600/20 border border-blue-500/50 rounded-xl p-4 text-white hover:bg-blue-600/30 transition-all">
                ✈️ View Flight Details
              </button>
            </div>
          ) : msg.type === 'hotel_card' ? (
            <div key={msg.id} className="w-full flex justify-center py-4">
              <button onClick={onSelectHotel} className="bg-indigo-600/20 border border-indigo-500/50 rounded-xl p-4 text-white hover:bg-indigo-600/30 transition-all">
                🏨 View Hotel Details
              </button>
            </div>
          ) : msg.type === 'cab_card' ? (
            <div key={msg.id} className="w-full flex justify-center py-4">
              <button onClick={onSelectCab} className="bg-orange-600/20 border border-orange-500/50 rounded-xl p-4 text-white hover:bg-orange-600/30 transition-all">
                🚕 View Cab Details
              </button>
            </div>
          ) : null
        )
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Reply Bar Components                             */
/* -------------------------------------------------------------------------- */

function ReplyIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="reply-svgrepo-com 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="reply-svgrepo-com 1">
          <path d={svgPathsReply.pbe998a0} id="Vector" stroke="var(--stroke-0, #DA46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ReplyContent({ message }: { message: Message }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#da46ff] text-[13px] text-nowrap tracking-[0.26px]">
        {message.sender === 'user' ? 'You' : 'Ai'}
      </p>
      <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#eaeaea] text-[14px] tracking-[0.28px] w-[min-content]">
        {message.text}
      </p>
    </div>
  );
}

function ReplyContainer({ message }: { message: Message }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[310px]">
      <ReplyIcon />
      <ReplyContent message={message} />
    </div>
  );
}

function ReplyClose({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-[16px] cursor-pointer" data-name="close" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPathsReply.p12f8cc00} fill="var(--fill-0, #B5B5B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReplyFrame({ message, onClose }: { message: Message, onClose: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <ReplyContainer message={message} />
      <ReplyClose onClick={onClose} />
    </div>
  );
}

function MessageReply({ message, onClose }: { message: Message | null, onClose: () => void }) {
  if (!message) return null;
  return (
    <div className="absolute backdrop-blur-[20px] backdrop-filter bottom-[107px] content-stretch flex flex-col gap-[10px] items-start justify-end left-1/2 pb-[50px] pt-[14px] px-[20px] rounded-tl-[20px] rounded-tr-[20px] translate-x-[-50%] w-full max-w-[500px] z-20 animate-in slide-in-from-bottom-4 fade-in duration-300" data-name="Message Reply" style={{ backgroundImage: "linear-gradient(129.364deg, rgba(40, 40, 48, 0.8) 0.8825%, rgba(29, 29, 32, 0.48) 101.94%)" }}>
      <div aria-hidden="true" className="absolute border border-[#363641] border-solid inset-0 pointer-events-none rounded-tl-[20px] rounded-tr-[20px]" />
      <ReplyFrame message={message} onClose={onClose} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Suggestion Chip Components                       */
/* -------------------------------------------------------------------------- */

function CommittedChip({ value }: { value: string }) {
  return (
    <div
      className="content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0 bg-[rgba(255,166,23,0.1)] border border-[rgba(255,166,23,0.2)] animate-in zoom-in-50 duration-200"
      data-name="Suggestion Chips"
    >
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">
        {value}
      </p>
    </div>
  );
}

function SuggestionPill({ value, onClick }: { value: string, onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer bg-[rgba(81,124,208,0.15)] hover:bg-[rgba(81,124,208,0.25)] border border-[rgba(81,124,208,0.3)] backdrop-blur-sm flex items-center justify-center px-[10px] py-[2px] rounded-[60px] ml-1"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(81,124,208,0.3)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-[#517cd0] text-[11px] font-['Urbanist:Medium',sans-serif] tracking-wide neon-text-glow">
        {value}
      </span>
    </motion.div>
  );
}

type Segment = { type: 'text', value: string } | { type: 'chip', value: string };

export interface TextBoxHandle {
  submit: () => string | null;
}

const TextBox = React.forwardRef<TextBoxHandle, { mode: 'default' | 'smart', onFocus: () => void, onBlur?: () => void }>(({ mode, onFocus, onBlur }, ref) => {
  const [segments, setSegments] = React.useState<Segment[]>([]);
  const [inputValue, setInputValue] = React.useState("");
  const [suggestion, setSuggestion] = React.useState<string | null>(null);
  const [inputWidth, setInputWidth] = React.useState<number | string>('100%');

  const inputRef = React.useRef<HTMLInputElement>(null);
  const measureRef = React.useRef<HTMLSpanElement>(null);

  React.useImperativeHandle(ref, () => ({
    submit: () => {
      const fullMessage = segments.map(s => s.value).join(" ") + (inputValue ? " " + inputValue : "");
      // Clear state
      setSegments([]);
      setInputValue("");
      setSuggestion(null);
      return fullMessage.trim();
    }
  }));

  // Measure text width for auto-sizing input
  React.useEffect(() => {
    if (measureRef.current) {
      if (inputValue.length > 0) {
        // Add slight buffer for cursor
        setInputWidth(measureRef.current.offsetWidth + 8);
      } else {
        // If empty, behave differently based on context
        if (segments.length > 0) {
          setInputWidth(10); // Minimal width for cursor
        } else {
          setInputWidth('100%'); // Full width for placeholder
        }
      }
    }
  }, [inputValue, segments]);

  // Reset when leaving smart mode
  React.useEffect(() => {
    if (mode !== 'smart') {
      setSegments([]);
      setInputValue("");
      setSuggestion(null);
    }
  }, [mode]);

  // Determine suggestion based on current state
  React.useEffect(() => {
    if (mode !== 'smart') return;

    const lower = inputValue.toLowerCase().trim();

    // Step 1: User types "I" -> Suggest Category
    if (segments.length === 0) {
      if (lower === 'i') {
        setSuggestion("Create");
        return;
      }
    }
    // Step 2: User types "a" -> Suggest Purpose
    else if (segments.length === 2) { // I + Create
      if (lower === 'a' || lower === 'an') {
        setSuggestion("Website");
        return;
      }
    }
    // Step 3: User types "for" -> Suggest Domain
    else if (segments.length === 4) { // I + Create + a + Website
      if (lower === 'for') {
        setSuggestion("Startup");
        return;
      }
    }

    setSuggestion(null);
  }, [inputValue, segments, mode]);

  const acceptSuggestion = () => {
    if (!suggestion) return;

    setSegments(prev => [
      ...prev,
      { type: 'text', value: inputValue.trim() },
      { type: 'chip', value: suggestion }
    ]);
    setInputValue("");
    setSuggestion(null);

    // Keep focus
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && suggestion) {
      e.preventDefault();
      acceptSuggestion();
    }

    if (e.key === 'Backspace' && inputValue === '' && segments.length > 0) {
      const newSegments = [...segments];
      const last = newSegments.pop(); // Remove chip
      if (last?.type === 'chip') {
        const lastText = newSegments.pop(); // Remove text
        if (lastText?.type === 'text') {
          setInputValue(lastText.value + " ");
        }
      }
      setSegments(newSegments);
    }
  };

  return (
    <div
      className="content-stretch flex flex-wrap items-center gap-[6px] p-[4px] pl-[12px] relative rounded-[22px] shrink-0 w-full min-h-[46px]"
      data-name="Text Box"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Render History Segments */}
      {segments.map((seg, i) => (
        seg.type === 'chip' ? (
          <CommittedChip key={i} value={seg.value} />
        ) : (
          <span key={i} className="font-['Urbanist:Regular',sans-serif] text-[#f4f4f5] text-[14px] pt-[2px]">
            {seg.value}
          </span>
        )
      ))}

      {/* Hidden Span for Measuring Width */}
      <span ref={measureRef} className="absolute opacity-0 pointer-events-none font-['Urbanist:Regular',sans-serif] text-[14px] whitespace-pre -z-50 h-0 overflow-hidden">
        {inputValue}
      </span>

      {/* Active Input Area Container - Flex row to keep Input and Pill tight */}
      <div className="flex items-center flex-1 min-w-0 h-[30px]">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ width: typeof inputWidth === 'number' ? `${inputWidth}px` : inputWidth }}
          placeholder={segments.length === 0 ? "Ask Anything" : ""}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#f4f4f5] placeholder:text-[#a1a1aa] text-[14px] bg-transparent border-none outline-none p-0 m-0 transition-all duration-300 ${mode === 'smart' ? 'placeholder:text-[#517cd0]' : ''}`}
          autoComplete="off"
        />

        {/* Suggestion Pill appears IMMEDIATELY after the auto-sized input */}
        {mode === 'smart' && suggestion && (
          <SuggestionPill value={suggestion} onClick={acceptSuggestion} />
        )}
      </div>
    </div>
  );
});

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

function AttachButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px] cursor-pointer"
      data-name="Attach Button"
      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 38 38\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.755 2.09 -4.0818 -5.3806 19 19)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}
    >
      <div aria-hidden="true" className="absolute border-[#1d1d1d] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <TablerPlus />
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

function ChatModeButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[38px] cursor-pointer"
      data-name="Chat Mode Button"
    >
      <RiApps2AiLine />
    </div>
  );
}

function Frame14({ onAttachClick, onAppsClick, selectedMode, onClearMode }: { onAttachClick?: () => void, onAppsClick?: () => void, selectedMode?: string | null, onClearMode?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <AttachButton onClick={onAttachClick} />
      <ChatModeButton onClick={onAppsClick} />
      {selectedMode && <ChatModePill label={selectedMode} onClose={onClearMode} />}
    </div>
  );
}

function IonMicOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ion:mic-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ion:mic-outline">
          <path d={svgPaths.p350bf700} id="Vector" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36fcca80} id="Vector_2" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionButtons({ onClick, mode }: { onClick?: () => void, mode: 'default' | 'smart' }) {
  if (mode === 'smart') {
    return (
      <div
        onClick={onClick}
        className="backdrop-blur-[21px] backdrop-filter bg-[#517cd0] content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px] cursor-pointer shadow-[0_0_15px_rgba(81,124,208,0.5)] animate-pulse"
        data-name="Action Buttons"
      >
        <IconoirSendSolid />
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px] cursor-pointer hover:bg-white/10 transition-colors"
      data-name="Action Buttons"
      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 38 38\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.755 2.09 -4.0818 -5.3806 19 19)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}
    >
      <div aria-hidden="true" className="absolute border-[#1d1d1d] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <IonMicOutline />
    </div>
  );
}

function TextBox1({ onVoiceMode, mode, onAttachClick, onAppsClick, selectedMode, onClearMode }: { onVoiceMode?: () => void, mode: 'default' | 'smart', onAttachClick?: () => void, onAppsClick?: () => void, selectedMode?: string | null, onClearMode?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Text Box">
      <Frame14 onAttachClick={onAttachClick} onAppsClick={onAppsClick} selectedMode={selectedMode} onClearMode={onClearMode} />
      <ActionButtons onClick={onVoiceMode} mode={mode} />
    </div>
  );
}

function TextChatInputDock({ onVoiceMode, smartMode, setSmartMode, onSendMessage, onImageUpload, uploadedImage, onRemoveImage }: { onVoiceMode?: () => void, smartMode: boolean, setSmartMode: (mode: boolean) => void, onSendMessage: (text: string) => void, onImageUpload?: () => void, uploadedImage?: string | null, onRemoveImage?: () => void }) {
  const textBoxRef = React.useRef<TextBoxHandle>(null);
  const dockRef = React.useRef<HTMLDivElement>(null);
  const suggestionRef = React.useRef<HTMLDivElement>(null);

  const [activeMenu, setActiveMenu] = React.useState<'none' | 'attach' | 'apps'>('none');
  const [isFocused, setIsFocused] = React.useState(false);
  const [selectedMode, setSelectedMode] = React.useState<string | null>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (!smartMode && activeMenu === 'none') return;

      const target = event.target as Node;
      const isInsideDock = dockRef.current?.contains(target);
      const isInsideSuggestion = suggestionRef.current?.contains(target);

      // If clicking outside dock and suggestion area
      if (!isInsideDock && !isInsideSuggestion) {
        // If menu is open, close it
        if (activeMenu !== 'none') {
          setActiveMenu('none');
        } else {
          // If just smart mode is on, close it
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
      console.log("Sent message:", message);
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
      <style>
        {`
          @keyframes ai-glow {
            0% { box-shadow: 0 0 0px rgba(81, 124, 208, 0); border-color: #424242; }
            50% { box-shadow: 0 -5px 20px rgba(81, 124, 208, 0.3), inset 0 0 10px rgba(81, 124, 208, 0.1); border-color: #517cd0; }
            100% { box-shadow: 0 0 0px rgba(81, 124, 208, 0); border-color: #424242; }
          }
          .ai-glow-active {
            animation: ai-glow 2s infinite ease-in-out;
            border-top: 1px solid #517cd0 !important;
          }
          .neon-text-glow {
             text-shadow: 0 0 5px rgba(81, 124, 208, 0.5), 0 0 10px rgba(81, 124, 208, 0.3);
          }
        `}
      </style>

      {/* Menus Layer - Only suggestions now */}
      <div ref={suggestionRef} className="z-20">
        <SuggestionDock isVisible={smartMode && activeMenu === 'none' && isFocused} />
      </div>

      <div ref={dockRef}
        className={`absolute backdrop-blur-[15px] backdrop-filter content-stretch flex flex-col gap-[26px] items-start left-1/2 -translate-x-1/2 w-full max-w-2xl pb-[30px] pt-[20px] px-[20px] rounded-tl-[32px] rounded-tr-[32px] z-30 transition-all duration-300 ${smartMode && isFocused ? 'ai-glow-active' : ''}`}
        data-name="Text Chat - Input Dock"
        style={{
          bottom: '0px',
          backgroundImage: smartMode
            ? "linear-gradient(253.851deg, rgb(20, 25, 37) 0.61931%, rgba(20, 25, 37, 0.95) 100%)"
            : "linear-gradient(251.95deg, rgb(29, 29, 29) 2.2669%, rgba(0, 0, 0, 0) 104.24%)"
        }}>
        <div aria-hidden="true" className={`absolute border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px] transition-colors duration-300 ${smartMode ? 'border-[#517cd0]' : 'border-[#424242]'}`} />
        <TextBox
          ref={textBoxRef}
          mode={smartMode ? 'smart' : 'default'}
          onFocus={() => { setSmartMode(true); setIsFocused(true); }}
          onBlur={() => setIsFocused(false)}
        />
        <TextBox1
          onVoiceMode={smartMode ? handleSend : onVoiceMode}
          mode={smartMode ? 'smart' : 'default'}
          onAttachClick={onImageUpload || (() => toggleMenu('attach'))}
          onAppsClick={() => toggleMenu('apps')}
          selectedMode={selectedMode}
          onClearMode={() => setSelectedMode(null)}
        />

        {/* Image Preview */}
        {uploadedImage && onRemoveImage && (
          <div className="w-full pt-[0px] pb-[10px] animate-in slide-in-from-bottom-3 fade-in duration-200">
            <ImagePreview imageUrl={uploadedImage} onRemove={onRemoveImage} />
          </div>
        )}

        {/* Embedded Menu Content */}
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

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[20px] left-0 opacity-20 w-full" data-name="Home Indicator">
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[139px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-white h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

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
    <div onClick={onClick} className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px] cursor-pointer" data-name="Planner" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Hamburger />
    </div>
  );
}

function Frame11({ onMenuClick, onBack, chatTitle }: { onMenuClick?: () => void, onBack?: () => void, chatTitle?: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Planner onClick={onMenuClick} />
      {onBack && <BackButton onClick={onBack} />}
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[16px] tracking-[0.32px] max-w-[220px]">
        <p className="leading-[1.2] truncate">{chatTitle || 'New Chat'}</p>
      </div>
    </div>
  );
}

function Frame3({ onMenuClick, onBack, chatTitle }: { onMenuClick?: () => void, onBack?: () => void, chatTitle?: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[20px] py-0 relative w-full">
          <Frame11 onMenuClick={onMenuClick} onBack={onBack} chatTitle={chatTitle} />
        </div>
      </div>
    </div>
  );
}

function PageHeadersDark({ onMenuClick, onBack, chatTitle }: { onMenuClick?: () => void, onBack?: () => void, chatTitle?: string }) {
  return (
    <div className="absolute backdrop-blur-[30px] backdrop-filter content-stretch flex flex-col gap-[10px] h-[120px] items-start left-0 top-0 w-full z-50" data-name="Page Headers - Dark" style={{ backgroundImage: "linear-gradient(73.5203deg, rgba(0, 0, 0, 0) 0.37632%, rgba(29, 29, 29, 0.6) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <StatusBarIPhone />
      <Frame3 onMenuClick={onMenuClick} onBack={onBack} chatTitle={chatTitle} />
    </div>
  );
}

function SuggestionChips() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[6px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(144,144,238,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Create</p>
    </div>
  );
}

function SuggestionChips1() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[6px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(144,144,238,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Build</p>
    </div>
  );
}

function SuggestionChips2() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[6px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(144,144,238,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Start</p>
    </div>
  );
}

function SuggestionChips3() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[6px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(144,144,238,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Launch</p>
    </div>
  );
}

function SuggestionChipsContainer() {
  return (
    <div className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <SuggestionChips />
      <SuggestionChips1 />
      <SuggestionChips2 />
      <SuggestionChips3 />
    </div>
  );
}

const SuggestionDock = React.forwardRef<HTMLDivElement, { isVisible: boolean }>(({ isVisible }, ref) => {
  if (!isVisible) return null;
  return (
    <div ref={ref} className="absolute backdrop-blur-[20px] backdrop-filter bottom-[155px] content-stretch flex flex-col gap-[10px] items-start justify-end left-1/2 pb-[30px] pt-[14px] px-[20px] rounded-tl-[20px] rounded-tr-[20px] -translate-x-1/2 w-full max-w-2xl z-20" style={{ backgroundImage: "linear-gradient(134.664deg, rgb(19, 19, 19) 0%, rgba(29, 29, 32, 0.6) 97.864%)" }}>
      <div aria-hidden="true" className="absolute border border-[#1b1b1e] border-solid inset-0 pointer-events-none rounded-tl-[20px] rounded-tr-[20px]" />
      <SuggestionChipsContainer />
    </div>
  );
});

function SuggestionChips4() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Category</p>
    </div>
  );
}

function SuggestionChips5() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,166,23,0.2)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#7a7a83] text-[11px] text-nowrap tracking-[0.22px]">Purpose</p>
    </div>
  );
}

function SuggestionChips6() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,166,23,0.2)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#7a7a83] text-[11px] text-nowrap tracking-[0.22px]">Domain</p>
    </div>
  );
}

function IconoirSendSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconoir:send-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconoir:send-solid">
          <path clipRule="evenodd" d={svgPathsSmart.p19ca9ec0} fill="var(--fill-0, #1D1D20)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FloatingAvatar({ onExpand, customImage }: { onExpand?: () => void, customImage?: string | null }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

  return (
    <div
      className={`absolute h-[126px] right-[20px] top-[140px] w-[96px] transition-all duration-300 z-20 ${isExpanded ? 'scale-110' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full rounded-[16px] overflow-hidden cursor-pointer">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
          src={customImage || imgLifestylePeopleEmotionsCasualConceptConfidentNiceSmilingAsianWomanCrossArmsChestConfidentReadyHelpListeningCoworkersTakingPartConversation5}
        />
        <div aria-hidden="true" className="absolute border border-[#fcfcfc] border-solid inset-0 rounded-[16px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.04)]" />
      </div>

      {/* Controls Overlay */}
      <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <button
          onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
          className="bg-[#1c1c1c]/80 backdrop-blur-md p-2 rounded-full border border-[#333] hover:bg-[#2c2c2c] text-white shadow-lg flex items-center justify-center"
        >
          {isMuted ? <MicOff size={16} /> : <Mic size={16} />}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onExpand?.(); }}
          className="bg-[#1c1c1c]/80 backdrop-blur-md p-2 rounded-full border border-[#333] hover:bg-[#2c2c2c] text-white shadow-lg flex items-center justify-center"
        >
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
}

interface AvatarTextChatScreenProps {
  onSwitchToVoice: () => void;
  onOpenSideMenu?: () => void;
  selectedAvatarImage?: string | null;
  selectedChatThread?: ChatThread | null;
  onSelectFlight?: () => void;
  onSelectHotel?: () => void;
  onSelectCab?: () => void;
  onBack?: () => void;
}

export default function AvatarTextChatScreen({
  onSwitchToVoice,
  onOpenSideMenu,
  selectedAvatarImage,
  selectedChatThread,
  onSelectFlight,
  onSelectHotel,
  onSelectCab,
  onBack
}: AvatarTextChatScreenProps) {
  const [smartMode, setSmartMode] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [replyingTo, setReplyingTo] = React.useState<Message | null>(null);
  const [showImageUpload, setShowImageUpload] = React.useState(false);
  const [uploadedImage, setUploadedImage] = React.useState<string | null>(null);
  const [showOrderConfirmation, setShowOrderConfirmation] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<any>(null);
  const [isThreadLoaded, setIsThreadLoaded] = React.useState(false);
  const [currentThreadIndex, setCurrentThreadIndex] = React.useState(0); // Track conversation progression
  const [lastShownProducts, setLastShownProducts] = React.useState<any[]>([]); // Track products for order flow

  // Ecommerce flow state
  const [showProductDetail, setShowProductDetail] = React.useState(false);
  const [showBiddingFlow, setShowBiddingFlow] = React.useState(false);
  const [showPayment, setShowPayment] = React.useState(false);
  const [showTracking, setShowTracking] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState<string | null>(null);

  // Load chat thread messages PROGRESSIVELY (not all at once)
  React.useEffect(() => {
    if (selectedChatThread && !isThreadLoaded) {
      // For threads with orders or completed conversations, load ALL messages at once
      // For other threads, load progressively
      const messages = selectedChatThread.messages || [];
      const shouldLoadAllMessages = selectedChatThread.hasOrder || (messages.length) <= 6;

      if (shouldLoadAllMessages) {
        // Load all messages for completed conversations
        const convertedMessages: Message[] = [];

        messages?.forEach(msg => {
          if (msg.type === 'user') {
            convertedMessages.push({
              id: msg.id,
              text: msg.content || '',
              sender: 'user' as const,
              type: 'text' as const
            });
          } else if (msg.type === 'ai') {
            convertedMessages.push({
              id: msg.id,
              text: msg.content || '',
              sender: 'ai' as const,
              type: 'text' as const
            });
          } else if (msg.type === 'product' && msg.products) {
            convertedMessages.push({
              id: msg.id,
              text: '',
              sender: 'ai' as const,
              type: 'thread_products' as const,
              threadProducts: msg.products
            });
          } else if (msg.type === 'order-status' && msg.order) {
            convertedMessages.push({
              id: msg.id,
              text: '',
              sender: 'ai' as const,
              type: 'order_status' as const,
              order: msg.order
            });
          } else if (msg.type === 'order-cta') {
            convertedMessages.push({
              id: msg.id,
              text: msg.content || '',
              sender: 'ai' as const,
              type: 'order_cta' as const
            });
          } else if (msg.type === 'order-carousel' && msg.orders) {
            convertedMessages.push({
              id: msg.id,
              text: '',
              sender: 'ai' as const,
              type: 'order_carousel' as const,
              orders: msg.orders
            });
          }
        });

        setMessages(convertedMessages);
        setCurrentThreadIndex(selectedChatThread.messages?.length || 0);
        setIsThreadLoaded(true);
      } else {
        // Progressive loading for ongoing conversations
        const convertedMessages: Message[] = [];

        if (selectedChatThread.messages.length > 0) {
          // Add first message (user)
          const firstMsg = selectedChatThread.messages![0];
          if (firstMsg.type === 'user') {
            convertedMessages.push({
              id: firstMsg.id,
              text: firstMsg.content || '',
              sender: 'user' as const,
              type: 'text' as const
            });
          }

          // Add second message (AI response) automatically
          if (selectedChatThread.messages && selectedChatThread.messages.length > 1) {
            const secondMsg = selectedChatThread.messages[1];
            if (secondMsg.type === 'ai') {
              convertedMessages.push({
                id: secondMsg.id,
                text: secondMsg.content || '',
                sender: 'ai' as const,
                type: 'text' as const
              });
            }
          }
        }

        setMessages(convertedMessages);
        setCurrentThreadIndex(2); // Next message to load (index 2)
        setIsThreadLoaded(true);
      }
    } else if (!selectedChatThread && isThreadLoaded) {
      // Reset when thread is cleared
      setMessages([]);
      setIsThreadLoaded(false);
      setCurrentThreadIndex(0);
    }
  }, [selectedChatThread, isThreadLoaded]);

  // Function to load next message from thread
  const loadNextThreadMessage = React.useCallback(() => {
    setCurrentThreadIndex(prevIndex => {
      if (!selectedChatThread || prevIndex >= (selectedChatThread.messages?.length || 0)) {
        return prevIndex;
      }

      const nextMsg = selectedChatThread.messages![prevIndex];
      let newMessage: Message;

      if (nextMsg.type === 'user') {
        newMessage = {
          id: nextMsg.id,
          text: nextMsg.content || '',
          sender: 'user' as const,
          type: 'text' as const
        };
      } else if (nextMsg.type === 'ai') {
        newMessage = {
          id: nextMsg.id,
          text: nextMsg.content || '',
          sender: 'ai' as const,
          type: 'text' as const
        };
      } else if (nextMsg.type === 'product' && nextMsg.products) {
        newMessage = {
          id: nextMsg.id,
          text: '',
          sender: 'ai' as const,
          type: 'thread_products' as const,
          threadProducts: nextMsg.products
        };
        // Track products for potential order flow
        setLastShownProducts(nextMsg.products);
      } else if (nextMsg.type === 'order-status' && nextMsg.order) {
        newMessage = {
          id: nextMsg.id,
          text: '',
          sender: 'ai' as const,
          type: 'order_status' as const,
          order: nextMsg.order
        };
      } else if (nextMsg.type === 'order-cta') {
        newMessage = {
          id: nextMsg.id,
          text: nextMsg.content || '',
          sender: 'ai' as const,
          type: 'order_cta' as const
        };
      } else if (nextMsg.type === 'order-carousel' && nextMsg.orders) {
        newMessage = {
          id: nextMsg.id,
          text: '',
          sender: 'ai' as const,
          type: 'order_carousel' as const,
          orders: nextMsg.orders
        };
      } else {
        newMessage = {
          id: nextMsg.id,
          text: nextMsg.content || '',
          sender: 'ai' as const,
          type: 'text' as const
        };
      }

      setMessages(prev => {
        // Check if this message already exists to prevent duplicates
        if (prev.some(msg => msg.id === newMessage.id)) {
          return prev; // Don't add duplicate
        }
        return [...prev, newMessage];
      });

      return prevIndex + 1;
    });
  }, [selectedChatThread]);

  const handleSendMessage = (text: string) => {
    // If we're in a thread conversation, load ONLY THE NEXT message(s) (sequential, user-driven flow)
    if (selectedChatThread && currentThreadIndex < (selectedChatThread.messages?.length || 0)) {
      // Check if the next message is a user message - if so, we need to load it AND the AI response
      const nextMsg = selectedChatThread.messages![currentThreadIndex];

      if (nextMsg.type === 'user') {
        // This is a user interaction point in the conversation
        // Load the user message first
        loadNextThreadMessage();

        // Show typing indicator before AI response
        const typingId = `typing-${Date.now()}`;
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: typingId,
            text: '',
            sender: 'typing' as const,
            type: 'typing' as const
          }]);
        }, 400);

        // Remove typing indicator and load the AI response
        setTimeout(() => {
          setMessages(prev => prev.filter(msg => msg.id !== typingId));
          loadNextThreadMessage();
        }, 1200);

        // Check if there's a product message right after the AI response
        if (currentThreadIndex + 2 < (selectedChatThread.messages?.length || 0)) {
          const possibleProductMsg = selectedChatThread.messages![currentThreadIndex + 2];
          if (possibleProductMsg.type === 'product') {
            // Show typing indicator before products
            const productTypingId = `typing-${Date.now() + 1}`;
            setTimeout(() => {
              setMessages(prev => [...prev, {
                id: productTypingId,
                text: '',
                sender: 'typing' as const,
                type: 'typing' as const
              }]);
            }, 1500);

            // Load the product message
            setTimeout(() => {
              setMessages(prev => prev.filter(msg => msg.id !== productTypingId));
              loadNextThreadMessage();
            }, 2400);
          }
        }
      } else {
        // Just load the next single message with typing indicator
        const typingId = `typing-${Date.now()}`;
        setMessages(prev => [...prev, {
          id: typingId,
          text: '',
          sender: 'typing' as const,
          type: 'typing' as const
        }]);

        setTimeout(() => {
          setMessages(prev => prev.filter(msg => msg.id !== typingId));
          loadNextThreadMessage();
        }, 800);
      }

      setUploadedImage(null);
      setReplyingTo(null);
      return;
    }

    // For free-form chat (not thread-based), add user message manually
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      type: uploadedImage ? 'image' : 'text',
      imageUrl: uploadedImage || undefined
    };

    const newMessages = [newMessage];

    // Commerce intent detection with typing indicators
    if (text.toLowerCase().includes('phone') || text.toLowerCase().includes('samsung') || text.toLowerCase().includes('mobile')) {
      // Show typing indicator
      const typingId = `typing-${Date.now()}`;
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: typingId,
          text: '',
          sender: 'typing' as const,
          type: 'typing' as const
        }]);
      }, 500);

      setTimeout(() => {
        setMessages(prev => prev.filter(msg => msg.id !== typingId));
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'I found these Samsung phones under ₹20,000 for you:',
          sender: 'ai',
          type: 'products',
          products: [
            {
              image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
              name: 'Samsung Galaxy A34 5G (8GB RAM, 128GB)',
              price: '₹19,999',
              originalPrice: '₹24,999',
              deliveryEta: 'Delivery by Tomorrow',
              reason: 'Best value - ₹5,000 cheaper than usual',
              rating: 4.3,
              isBestValue: true
            },
            {
              image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
              name: 'Samsung Galaxy M34 5G (6GB RAM, 128GB)',
              price: '₹18,499',
              deliveryEta: 'Delivery Today',
              reason: 'Fastest delivery - arrives in 4 hours',
              rating: 4.1,
              isFastest: true
            },
            {
              image: 'https://images.unsplash.com/photo-1583573607873-4ab69a4d0e9f?w=400&h=400&fit=crop',
              name: 'Samsung Galaxy F14 5G (4GB RAM, 128GB)',
              price: '₹15,999',
              deliveryEta: 'Delivery by Tomorrow',
              reason: 'Local store nearby - can see it first',
              rating: 4.0,
              isLocalStore: true
            }
          ]
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 1500);
    } else if (text.toLowerCase().includes('gift') || text.toLowerCase().includes('wife')) {
      // Show typing indicator
      const typingId = `typing-${Date.now()}`;
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: typingId,
          text: '',
          sender: 'typing' as const,
          type: 'typing' as const
        }]);
      }, 500);

      setTimeout(() => {
        setMessages(prev => prev.filter(msg => msg.id !== typingId));
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Here are some thoughtful gift ideas for your wife:',
          sender: 'ai',
          type: 'products',
          products: [
            {
              image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
              name: 'Premium Jewelry Set with Earrings',
              price: '₹2,499',
              originalPrice: '₹4,999',
              deliveryEta: 'Delivery Today',
              reason: 'Most popular gift - 4.8★ rating',
              rating: 4.8,
              isFastest: true
            },
            {
              image: 'https://images.unsplash.com/photo-1588444650921-d2c3732cd5f1?w=400&h=400&fit=crop',
              name: 'Luxury Perfume Gift Set',
              price: '₹3,299',
              deliveryEta: 'Delivery Tomorrow',
              reason: 'Best seller - includes gift wrapping',
              rating: 4.6,
              isBestValue: true
            }
          ]
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 800);
    } else if (text.toLowerCase().includes('cheaper') || text.toLowerCase().includes('better price')) {
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'm checking with nearby sellers for better prices...",
          sender: 'ai',
          type: 'text'
        };
        setMessages(prev => [...prev, aiMessage]);

        setTimeout(() => {
          const dealMessage: Message = {
            id: (Date.now() + 2).toString(),
            text: 'Found a better deal from a local store - ₹1,200 less!',
            sender: 'ai',
            type: 'text'
          };
          setMessages(prev => [...prev, dealMessage]);
        }, 1500);
      }, 600);
    } else if (text.toLowerCase().includes('flight')) {
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Here are the flight details',
          sender: 'ai',
          type: 'flight_card'
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 600);
    } else if (text.toLowerCase().includes('hotel')) {
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Here are the hotel details',
          sender: 'ai',
          type: 'hotel_card'
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 600);
    } else if (text.toLowerCase().includes('cab') || text.toLowerCase().includes('taxi')) {
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Here are the cab details',
          sender: 'ai',
          type: 'cab_card'
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 600);
    }

    setMessages(prev => [...prev, ...newMessages]);
    setReplyingTo(null);
    setUploadedImage(null); // Clear uploaded image after sending
  };

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleReply = (msg: Message) => {
    setReplyingTo(msg);
    setSmartMode(true);
  };

  // Ecommerce flow handlers
  const handleProductView = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(false);
    setShowBiddingFlow(false);
    setShowOrderConfirmation(true);
  };

  const handleFindBestPrice = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(false);
    setShowBiddingFlow(true);
  };

  const handlePlaceOrder = () => {
    // Set the first product from the last shown products as selected
    if (lastShownProducts.length > 0 && !selectedProduct) {
      setSelectedProduct(lastShownProducts[0]);
    }
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    // Generate order number
    const newOrderNumber = `ORD${Date.now().toString().slice(-8)}`;
    setOrderNumber(newOrderNumber);
    setShowPayment(false);
    setShowTracking(true);

    // Add success message to chat
    setTimeout(() => {
      const successMessage: Message = {
        id: Date.now().toString(),
        text: '🎉 Payment successful! Your order is being processed.',
        sender: 'ai',
        type: 'text'
      };
      setMessages(prev => [...prev, successMessage]);
    }, 500);
  };

  const handleDelivered = () => {
    setShowTracking(false);
    setShowSuccess(true);

    // Add delivery success message to chat
    setTimeout(() => {
      const deliveredMessage: Message = {
        id: Date.now().toString(),
        text: '🎉 Your order has been delivered! Hope you love it!',
        sender: 'ai',
        type: 'text'
      };
      setMessages(prev => [...prev, deliveredMessage]);
    }, 500);
  };

  const handleContinueShopping = () => {
    setShowSuccess(false);
    setSelectedProduct(null);

    // Add continue shopping message to chat
    setTimeout(() => {
      const continueMessage: Message = {
        id: Date.now().toString(),
        text: 'What else can I help you find today?',
        sender: 'ai',
        type: 'text'
      };
      setMessages(prev => [...prev, continueMessage]);
    }, 300);
  };

  return (
    <div className="bg-black relative size-full overflow-hidden" data-name="Dark - Greys">
      <HomeIndicator />
      <PageHeadersDark
        onMenuClick={onOpenSideMenu}
        onBack={onBack}
        chatTitle={selectedChatThread?.title}
      />
      <Bg />
      <Frame5
        onSwitchToVoice={onSwitchToVoice}
        smartMode={smartMode}
        messages={messages}
        onReply={handleReply}
        selectedAvatarImage={selectedAvatarImage}
        onProductSelect={handleProductView}
        onPlaceOrder={handlePlaceOrder}
        onSelectFlight={onSelectFlight}
        onSelectHotel={onSelectHotel}
        onSelectCab={onSelectCab}
      />
      <FloatingAvatar onExpand={onSwitchToVoice} customImage={selectedAvatarImage} />

      {/* Reply UI positioned relative to Dock */}
      <MessageReply message={replyingTo} onClose={() => setReplyingTo(null)} />

      <TextChatInputDock
        onVoiceMode={onSwitchToVoice}
        smartMode={smartMode}
        setSmartMode={setSmartMode}
        onSendMessage={handleSendMessage}
        onImageUpload={() => setShowImageUpload(true)}
        uploadedImage={uploadedImage}
        onRemoveImage={() => setUploadedImage(null)}
      />

      {/* Image Upload Menu */}
      <AnimatePresence>
        {showImageUpload && (
          <ImageUploadMenu
            onImageSelect={handleImageSelect}
            onClose={() => setShowImageUpload(false)}
          />
        )}
      </AnimatePresence>

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
            onAcceptOffer={(offer) => {
              setShowBiddingFlow(false);
              setShowOrderConfirmation(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* Order Confirmation */}
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
            onConfirm={() => {
              setShowOrderConfirmation(false);
              setShowPayment(true);
            }}
            onCancel={() => setShowOrderConfirmation(false)}
          />
        )}
      </AnimatePresence>

      {/* Payment Screen */}
      <AnimatePresence>
        {showPayment && (
          <PaymentScreen
            orderTotal={selectedProduct?.price ? `₹${selectedProduct.price.toLocaleString('en-IN')}` : "₹19,999"}
            onPaymentComplete={handlePaymentComplete}
            onBack={() => setShowPayment(false)}
          />
        )}
      </AnimatePresence>

      {/* Order Tracking Screen */}
      <AnimatePresence>
        {showTracking && orderNumber && (
          <OrderTrackingScreen
            orderNumber={orderNumber}
            onDelivered={handleDelivered}
            onClose={() => setShowTracking(false)}
          />
        )}
      </AnimatePresence>

      {/* Order Success Screen */}
      <AnimatePresence>
        {showSuccess && selectedProduct && orderNumber && (
          <OrderSuccessScreen
            orderNumber={orderNumber}
            productName={selectedProduct.name || 'Your Product'}
            onContinueShopping={handleContinueShopping}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
