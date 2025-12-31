import svgPaths from "./svg-6bpoewntas";
import imgImage649 from "figma:asset/93d25a87fbaa2633cb633d7e58182c508a364ce7.png";
import imgRectangle250118 from "figma:asset/f45961de6401a66d0f7d11196422c684fecde321.png";
import imgRectangle250115 from "figma:asset/c03279079268e3f829ff3d5ce763c244008cf838.png";
import imgRectangle250116 from "figma:asset/c487f539732c944bcb643b110157eb2889f1bbf6.png";
import imgRectangle250117 from "figma:asset/acdb9c8a6450dd833d28b464ab050b774c65c776.png";

function Bg() {
  return (
    <div className="absolute h-[852px] left-0 top-0 w-[393px]" data-name="bg">
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
    <div className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] content-stretch flex flex-col h-[180px] items-start justify-end left-[calc(40%+49.8px)] p-[16px] rounded-[20px] top-[140px] w-[166px]">
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Frame2 />
    </div>
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
    <div className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-end left-[calc(40%+49.8px)] p-[16px] rounded-[20px] top-[341px] w-[166px]">
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Frame />
      <Frame3 />
    </div>
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
    <div className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] content-stretch flex flex-col items-start justify-end left-[20px] p-[16px] rounded-[20px] top-[140px] w-[166px]">
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Frame4 />
    </div>
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
    <div className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] content-stretch flex flex-col gap-[10px] items-start justify-end left-[20px] p-[16px] rounded-[20px] top-[293px] w-[166px]">
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Frame15 />
      <Frame5 />
    </div>
  );
}

function TextBox() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[4px] relative rounded-[22px] shrink-0 w-[353px]" data-name="Text Box">
      <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#a1a1aa] text-[14px] w-full">Ask Anything</p>
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

function AttachButton() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px]" data-name="Attach Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 38 38\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.755 2.09 -4.0818 -5.3806 19 19)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
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

function ChatModeButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[38px]" data-name="Chat Mode Button">
      <RiApps2AiLine />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <AttachButton />
      <ChatModeButton />
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

function ActionButtons() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px]" data-name="Action Buttons" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 38 38\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.755 2.09 -4.0818 -5.3806 19 19)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[#1d1d1d] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <IonMicOutline />
    </div>
  );
}

function TextBox1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Text Box">
      <Frame7 />
      <ActionButtons />
    </div>
  );
}

function TextChatInputDock() {
  return (
    <div className="absolute backdrop-blur-[15px] backdrop-filter bottom-0 content-stretch flex flex-col gap-[26px] items-start left-1/2 pb-[30px] pt-[20px] px-[20px] rounded-tl-[32px] rounded-tr-[32px] translate-x-[-50%] w-[393px]" data-name="Text Chat - Input Dock" style={{ backgroundImage: "linear-gradient(251.95deg, rgb(29, 29, 29) 2.2669%, rgba(0, 0, 0, 0) 104.24%)" }}>
      <div aria-hidden="true" className="absolute border-[#424242] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]" />
      <TextBox />
      <TextBox1 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.5)]" />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[20px] left-0 opacity-20 w-[393px]" data-name="Home Indicator">
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

function Planner() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px]" data-name="Planner" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <StashArrowUpDuotone />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Planner />
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.2]">Handloom Store Creation</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[20px] py-0 relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function PageHeadersDark() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[120px] items-start left-0 top-0 w-[393px]" data-name="Page Headers - Dark">
      <StatusBarIPhone />
      <Frame1 />
    </div>
  );
}

export default function DarkGreys() {
  return (
    <div className="bg-black relative size-full" data-name="Dark - Greys">
      <HomeIndicator />
      <PageHeadersDark />
      <Bg />
      <Frame10 />
      <Frame12 />
      <Frame9 />
      <Frame11 />
      <TextChatInputDock />
    </div>
  );
}