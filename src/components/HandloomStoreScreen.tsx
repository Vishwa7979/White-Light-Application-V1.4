import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-6bpoewntas";
import svgPathsSmart from "../imports/svg-fbsmvezpvt";
import AvatarChatGridMenu from "./AvatarChatGridMenu";
import AvatarChatAppsMenu from "./AvatarChatAppsMenu";
import { ChatModePill } from "./ChatModePill";
import imgImage649 from "figma:asset/93d25a87fbaa2633cb633d7e58182c508a364ce7.png";
import imgRectangle250118 from "figma:asset/f45961de6401a66d0f7d11196422c684fecde321.png";
import imgRectangle250115 from "figma:asset/c03279079268e3f829ff3d5ce763c244008cf838.png";
import imgRectangle250116 from "figma:asset/c487f539732c944bcb643b110157eb2889f1bbf6.png";
import imgRectangle250117 from "figma:asset/acdb9c8a6450dd833d28b464ab050b774c65c776.png";

function Bg() {
  return (
    <div className="absolute h-full left-0 top-0 w-full" data-name="bg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 852">
        <g clipPath="url(#clip0_15_4756)" filter="url(#filter0_n_15_4756)" id="bg">
          <path d="M0 0H393V852H0V0Z" fill="var(--fill-0, #121212)" id="Rectangle 249869" />
          <g filter="url(#filter1_f_15_4756)" id="Ellipse 14568">
            <circle cx="402.5" cy="734.5" fill="url(#paint0_linear_15_4756)" fillOpacity="0.5" r="117.5" />
          </g>
          <g filter="url(#filter2_f_15_4756)" id="Ellipse 14569">
            <circle cx="-37.5" cy="444.5" fill="url(#paint1_linear_15_4756)" fillOpacity="0.5" r="117.5" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="852" id="filter0_n_15_4756" width="393" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence baseFrequency="2 2" numOctaves="3" result="noise" seed="9694" stitchTiles="stitch" type="fractalNoise" />
            <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
            <feFlood floodColor="rgba(0, 0, 0, 0.2)" result="color1Flood" />
            <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
            <feMerge result="effect1_noise_15_4756">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="635" id="filter1_f_15_4756" width="635" x="85" y="417">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_15_4756" stdDeviation="100" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="635" id="filter2_f_15_4756" width="635" x="-355" y="127">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_15_4756" stdDeviation="100" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_15_4756" x1="402.5" x2="402.5" y1="828.5" y2="661.552">
            <stop stopColor="#A046F6" />
            <stop offset="1" stopColor="#381154" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_15_4756" x1="-37.5" x2="-37.5" y1="538.5" y2="371.552">
            <stop stopColor="#A046F6" />
            <stop offset="1" stopColor="#381154" />
          </linearGradient>
          <clipPath id="clip0_15_4756">
            <rect fill="white" height="852" width="393" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Ellipse 14506">
            <circle cx="10" cy="10" fill="var(--fill-0, black)" fillOpacity="0.45" r="10" />
            <circle cx="10" cy="10" r="9.6" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.5px] mt-[2.5px] relative rounded-[100px] size-[15px]" data-name="image 649">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute h-[135.42%] left-[-17.8%] max-w-none top-[-12.26%] w-[135.47%]" src={imgImage649} />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative shrink-0 w-full">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#f4f4f5] text-[14px] tracking-[0.28px] w-full">Product Ideas</p>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal relative shrink-0 text-[#9b9b9b] text-[11px] tracking-[0.22px] w-full">Suggest product categories for handloom items.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative shrink-0 w-[134px]">
      <Group />
      <Frame8 />
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a1a1aa] text-[11px] text-nowrap tracking-[0.22px]">2d</p>
    </div>
  );
}

function Frame10() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] content-stretch flex flex-col h-[180px] items-start justify-end left-[calc(40%+49.8px)] p-[16px] rounded-[20px] top-[140px] w-[166px] cursor-pointer hover:scale-105 transition-transform"
    >
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Frame2 />
    </motion.div>
  );
}

function OcticonGitBranch() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="octicon:git-branch-24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="octicon:git-branch-24">
          <path d={svgPaths.p184eef80} fill="var(--fill-0, #EAEAEA)" id="Vector" />
          <path d={svgPaths.p36219f80} fill="var(--fill-0, #EAEAEA)" id="Vector_2" />
          <path d={svgPaths.p2f0c7d72} fill="var(--fill-0, #EAEAEA)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-r content-stretch flex from-[#231f1f] gap-[6px] h-[22px] items-center justify-center px-[10px] py-[4px] relative rounded-[32px] shrink-0 to-[#353131]">
      <div aria-hidden="true" className="absolute border-[#231f1f] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <OcticonGitBranch />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#d7d7d7] text-[9px] text-nowrap tracking-[0.18px]">Branched Chat</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Ellipse 14506">
            <circle cx="10" cy="10" fill="var(--fill-0, black)" fillOpacity="0.45" r="10" />
            <circle cx="10" cy="10" r="9.6" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.5px] mt-[2.5px] relative rounded-[100px] size-[15px]" data-name="image 649">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute h-[135.42%] left-[-17.8%] max-w-none top-[-12.26%] w-[135.47%]" src={imgImage649} />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative shrink-0 w-full">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#f4f4f5] text-[14px] tracking-[0.28px] w-full">Product Ideas</p>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal relative shrink-0 text-[#9b9b9b] text-[11px] tracking-[0.22px] w-full">Suggest product categories for handloom items.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative shrink-0 w-[134px]">
      <Group1 />
      <Frame13 />
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a1a1aa] text-[11px] text-nowrap tracking-[0.22px]">2d</p>
    </div>
  );
}

function Frame12() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-end left-[calc(40%+49.8px)] p-[16px] rounded-[20px] top-[341px] w-[166px] cursor-pointer hover:scale-105 transition-transform"
    >
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Frame />
      <Frame3 />
    </motion.div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Ellipse 14506">
            <circle cx="10" cy="10" fill="var(--fill-0, black)" fillOpacity="0.45" r="10" />
            <circle cx="10" cy="10" r="9.6" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.5px] mt-[2.5px] relative rounded-[100px] size-[15px]" data-name="image 649">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute h-[135.42%] left-[-17.8%] max-w-none top-[-12.26%] w-[135.47%]" src={imgImage649} />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative shrink-0 w-full">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#f4f4f5] text-[14px] tracking-[0.28px] w-full">Store Creation</p>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal relative shrink-0 text-[#9b9b9b] text-[11px] tracking-[0.22px] w-full">Help me set up my Handloom Store.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative shrink-0 w-[134px]">
      <Group2 />
      <Frame14 />
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a1a1aa] text-[11px] text-nowrap tracking-[0.22px]">2d</p>
    </div>
  );
}

function Frame9() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] content-stretch flex flex-col items-start justify-end left-[20px] p-[16px] rounded-[20px] top-[140px] w-[166px] cursor-pointer hover:scale-105 transition-transform"
    >
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Frame4 />
    </motion.div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-50px] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[14px] size-[72px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[14px] size-full" src={imgRectangle250118} />
          <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0 rounded-[14px]" />
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] ml-[26px] mt-[30px] relative text-[#fcfcfc] text-[11px] text-nowrap tracking-[0.22px]">+20</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[50px] py-0 relative shrink-0">
      <div className="mr-[-50px] relative rounded-[14px] shrink-0 size-[72px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[14px]">
          <img alt="" className="absolute h-[139.83%] left-0 max-w-none top-[-0.29%] w-full" src={imgRectangle250115} />
        </div>
      </div>
      <div className="mr-[-50px] relative rounded-[14px] shrink-0 size-[72px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[14px] size-full" src={imgRectangle250116} />
      </div>
      <div className="mr-[-50px] relative rounded-[14px] shrink-0 size-[72px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[14px]">
          <img alt="" className="absolute h-[108.59%] left-[-41.86%] max-w-none top-[-8.59%] w-[184.82%]" src={imgRectangle250117} />
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Ellipse 14506">
            <circle cx="10" cy="10" fill="var(--fill-0, black)" fillOpacity="0.45" r="10" />
            <circle cx="10" cy="10" r="9.6" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.5px] mt-[2.5px] relative rounded-[100px] size-[15px]" data-name="image 649">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute h-[135.42%] left-[-17.8%] max-w-none top-[-12.26%] w-[135.47%]" src={imgImage649} />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative shrink-0 w-full">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#f4f4f5] text-[14px] tracking-[0.28px] w-full">Product Listing</p>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal relative shrink-0 text-[#9b9b9b] text-[11px] tracking-[0.22px] w-full">Generate price ranges for uploaded products.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative shrink-0 w-[134px]">
      <Group3 />
      <Frame16 />
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a1a1aa] text-[11px] text-nowrap tracking-[0.22px]">2d</p>
    </div>
  );
}

function Frame11() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] content-stretch flex flex-col gap-[10px] items-start justify-end left-[20px] p-[16px] rounded-[20px] top-[293px] w-[166px] cursor-pointer hover:scale-105 transition-transform"
    >
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Frame15 />
      <Frame5 />
    </motion.div>
  );
}

/* Helper Components for Smart Input */

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
        <div 
           onClick={onClick}
           className="cursor-pointer bg-[rgba(81,124,208,0.15)] hover:bg-[rgba(81,124,208,0.25)] border border-[rgba(81,124,208,0.3)] backdrop-blur-sm flex items-center justify-center px-[10px] py-[2px] rounded-[60px] transition-all animate-in slide-in-from-left-2 fade-in duration-300 ml-1"
        >
            <span className="text-[#517cd0] text-[11px] font-['Urbanist:Medium',sans-serif] tracking-wide neon-text-glow">
                {value}
            </span>
        </div>
    );
}

type Segment = { type: 'text', value: string } | { type: 'chip', value: string };

export interface TextBoxHandle {
    submit: () => string | null;
}

const TextBox = React.forwardRef<TextBoxHandle, { mode: 'default' | 'smart', onFocus: () => void, onBlur?: () => void }>(({ mode, onFocus, onBlur }, ref) => {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [inputWidth, setInputWidth] = useState<number | string>('100%');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

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
  useEffect(() => {
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
  useEffect(() => {
    if (mode !== 'smart') {
        setSegments([]);
        setInputValue("");
        setSuggestion(null);
    }
  }, [mode]);

  // Determine suggestion based on current state
  useEffect(() => {
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
        data-name="Attach Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 38 38\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.755 2.09 -4.0818 -5.3806 19 19)\\'><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(19,19,19,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
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
        data-name="Chat Mode Button">
      <RiApps2AiLine />
    </div>
  );
}

function Frame7({ onAttachClick, onAppsClick, selectedMode, onClearMode }: { onAttachClick?: () => void, onAppsClick?: () => void, selectedMode?: string | null, onClearMode?: () => void }) {
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
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px]" data-name="Action Buttons" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 38 38\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.755 2.09 -4.0818 -5.3806 19 19)\\'><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(19,19,19,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[#1d1d1d] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <IonMicOutline />
    </div>
  );
}

function TextBox1({ onVoiceMode, mode, onAttachClick, onAppsClick, selectedMode, onClearMode }: { onVoiceMode?: () => void, mode: 'default' | 'smart', onAttachClick?: () => void, onAppsClick?: () => void, selectedMode?: string | null, onClearMode?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Text Box">
      <Frame7 onAttachClick={onAttachClick} onAppsClick={onAppsClick} selectedMode={selectedMode} onClearMode={onClearMode} />
      <ActionButtons onClick={onVoiceMode} mode={mode} />
    </div>
  );
}

function TextChatInputDock() {
  const textBoxRef = useRef<TextBoxHandle>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);
  
  const [smartMode, setSmartMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'none' | 'attach' | 'apps'>('none');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  useEffect(() => {
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
  }, [smartMode, activeMenu]);

  const handleSend = () => {
      const message = textBoxRef.current?.submit();
      if (message) {
          console.log("Sent message:", message);
          // Here you would handle the message
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

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={dockRef} 
        className={`absolute backdrop-blur-[15px] backdrop-filter content-stretch flex flex-col gap-[26px] items-start left-1/2 -translate-x-1/2 w-full max-w-[393px] pb-[30px] pt-[20px] px-[20px] rounded-tl-[32px] rounded-tr-[32px] z-50 transition-all duration-300 ${smartMode && isFocused ? 'ai-glow-active' : ''}`} 
        data-name="Text Chat - Input Dock" 
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
        <TextBox1 
            onVoiceMode={handleSend} 
            mode={smartMode ? 'smart' : 'default'} 
            onAttachClick={() => toggleMenu('attach')}
            onAppsClick={() => toggleMenu('apps')}
            selectedMode={selectedMode}
            onClearMode={() => setSelectedMode(null)}
        />
        
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
      </motion.div>
    </>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[20px] left-0 opacity-20 w-[393px] z-50" data-name="Home Indicator">
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
    <div className="content-stretch flex h-[50px] items-center justify-between relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-[393px]" data-name="Status Bar - iPhone 16">
      <Time />
      <Levels />
    </div>
  );
}

function StashArrowUpDuotone() {
  return (
    <div className="relative size-[20px]" data-name="stash:arrow-up-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="stash:arrow-up-duotone">
          <path d={svgPaths.p361dad80} fill="var(--fill-0, #EAEAEA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Planner({ onBack }: { onBack?: () => void }) {
  return (
    <div 
      onClick={onBack}
      className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px] cursor-pointer hover:bg-white/10 transition-colors" 
      data-name="Planner" 
      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\'><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(19,19,19,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
    >
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <StashArrowUpDuotone />
        </div>
      </div>
    </div>
  );
}

function Frame6({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Planner onBack={onBack} />
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.2]">Handloom Store Creation</p>
      </div>
    </div>
  );
}

function Frame1({ onBack }: { onBack?: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[20px] py-0 relative w-full">
          <Frame6 onBack={onBack} />
        </div>
      </div>
    </div>
  );
}

function PageHeadersDark({ onBack }: { onBack?: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute backdrop-blur-[30px] backdrop-filter content-stretch flex flex-col gap-[10px] h-[120px] items-start left-0 top-0 w-[393px] z-50" 
      data-name="Page Headers - Dark"
      style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)" }}
    >
      <StatusBarIPhone />
      <Frame1 onBack={onBack} />
    </motion.div>
  );
}

export default function HandloomStoreScreen({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-black relative size-full flex flex-col overflow-hidden" data-name="Dark - Greys">
      <Bg />
      <PageHeadersDark onBack={onBack} />
      
      {/* Scrollable Content Area with Grid Layout */}
      {/* Scrollable Content Area with Staggered Layout (Masonry-like) */}
      <div className="flex-1 overflow-y-auto w-full no-scrollbar relative z-10 pt-[130px] pb-[180px]">
        <div className="flex flex-row justify-center gap-[21px] w-full max-w-[393px] mx-auto px-[20px]">
          {/* Left Column */}
          <div className="flex flex-col gap-[21px] w-[166px]">
            {/* Store Creation Card (Frame 9) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] flex flex-col items-start justify-end p-[16px] rounded-[20px] cursor-pointer hover:scale-105 transition-transform relative h-auto"
            >
              <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
              <Frame4 />
            </motion.div>

            {/* Product Listing Card with Images (Frame 11) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] flex flex-col gap-[10px] items-start justify-end p-[16px] rounded-[20px] cursor-pointer hover:scale-105 transition-transform relative h-auto"
            >
              <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
              <Frame15 />
              <Frame5 />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[21px] w-[166px]">
            {/* Product Ideas Card (Frame 10) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] flex flex-col items-start justify-end p-[16px] rounded-[20px] h-[180px] cursor-pointer hover:scale-105 transition-transform relative"
            >
              <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
              <Frame2 />
            </motion.div>

            {/* Product Ideas Card with Branched Chat Badge (Frame 12) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] flex flex-col gap-[10px] items-start justify-end p-[16px] rounded-[20px] h-[180px] cursor-pointer hover:scale-105 transition-transform relative"
            >
              <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
              <Frame />
              <Frame3 />
            </motion.div>
          </div>
        </div>
      </div>
      
      <TextChatInputDock />
      <HomeIndicator />
    </div>
  );
}