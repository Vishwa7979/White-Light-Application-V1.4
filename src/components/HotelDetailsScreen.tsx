import React from 'react';
import svgPaths from "../imports/svg-pjfzviklda";
import imgB467A636602548379Df14255C80C92E31 from "figma:asset/4ea466f1b67fd87dcd190a775c45f9a086f345ce.png";
import imgImage685 from "figma:asset/fbaa074acad8c2827683302428dfd40460af05fc.png";

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0">
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[18px] text-white tracking-[0.36px] w-full">Hotel Adler Zürich</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end leading-[1.2] relative shrink-0 text-nowrap">
      <p className="font-['Urbanist:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-white tracking-[0.36px]">₹14,500</p>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[13px] text-right tracking-[0.26px]">per night</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame20 />
      <Frame16 />
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Star">
          <path d={svgPaths.p11d55580} fill="var(--fill-0, #FFA617)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Rating">
      <Star />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[13px] text-nowrap tracking-[0.26px]">4.7</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Rating />
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #7A7A83)" id="Ellipse 5631" r="1" />
        </svg>
      </div>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[13px] text-nowrap tracking-[0.26px]">📍 Old Town</p>
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #7A7A83)" id="Ellipse 5631" r="1" />
        </svg>
      </div>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[13px] text-nowrap tracking-[0.26px]">12 min from station</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame19 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[0px] text-[13px] tracking-[0.26px] w-full">
        <span>{`Make yourself at home in one of the 361 guestrooms featuring iPod docking stations and LED televisions. Your pillowtop bed comes with premium bedding. Wireless Internet access (surcharge)... `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-white underline">{`Show More `}</span>
      </p>
      <Frame />
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 2147242633">
          <path d={svgPaths.p8e5ec00} id="columns" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame24 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[14px] text-nowrap tracking-[0.28px]">Pool View</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 2147242633">
          <path d={svgPaths.p6c16080} id="bed (4)" stroke="var(--stroke-0, white)" strokeWidth="0.777778" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame26 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[14px] text-nowrap tracking-[0.28px]">1 King Bed or 2 Twin Beds</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 2147242633">
          <path d={svgPaths.p6d6a300} id="maximize" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame30 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[14px] text-nowrap tracking-[0.28px]">375 sq.ft Room Size</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-start flex flex-wrap gap-[11px_22px] items-start relative shrink-0 w-[317px]">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[13px] text-nowrap tracking-[0.26px]">3+</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Urbanist:Regular',sans-serif] font-normal items-center justify-between relative shrink-0 text-nowrap w-full">
      <p className="leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-white tracking-[0.36px]">Amenities</p>
      <p className="leading-[1.5] overflow-ellipsis overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] tracking-[0.26px]">View All</p>
    </div>
  );
}

function CarbonCafe() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="carbon:cafe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="carbon:cafe">
          <path d={svgPaths.p3f0c8380} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #27272A)" strokeWidth="0.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#27272a] h-[48px] relative rounded-[14px] shadow-[0px_0px_12.308px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[10px] relative size-full">
          <CarbonCafe />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[48px]">
      <Frame5 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[0.26px] w-full">Cafe</p>
    </div>
  );
}

function CarbonRestaurant() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="carbon:restaurant">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="carbon:restaurant">
          <path d={svgPaths.p223c2a00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #27272A)" strokeWidth="0.2" />
          <path d={svgPaths.pbb6d500} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #27272A)" strokeWidth="0.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-center justify-center px-[9px] py-[10px] relative rounded-[14px] shadow-[0px_0px_12.308px_0px_rgba(0,0,0,0.04)] shrink-0 size-[48px]">
      <CarbonRestaurant />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame8 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[0.26px]">Restaurant</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[22.92%_8.34%_19.79%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.45%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 18">
          <g id="Group">
            <path d={svgPaths.p2af64b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
            <path d={svgPaths.p16b2bd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MynauiWifi() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="mynaui:wifi">
      <Group />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-center justify-center px-[9px] py-[10px] relative rounded-[14px] shadow-[0px_0px_12.308px_0px_rgba(0,0,0,0.04)] shrink-0 size-[48px]">
      <MynauiWifi />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame13 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[0.26px]">Free Wi-fi</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[18.75%_14.59%_18.75%_14.58%]" data-name="Group">
      <div className="absolute inset-[-3.33%_-2.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <g id="Group">
            <path d={svgPaths.p3ae35d00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.16667" />
            <path d={svgPaths.p3be34480} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.16667" />
            <path d={svgPaths.p2fba6fa0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BitcoinIconsCarOutline() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="bitcoin-icons:car-outline">
      <Group1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-center justify-center px-[9px] py-[10px] relative rounded-[14px] shadow-[0px_0px_12.308px_0px_rgba(0,0,0,0.04)] shrink-0 size-[48px]">
      <BitcoinIconsCarOutline />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame14 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[0.26px]">Free Parking</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame11 />
    </div>
  );
}

function Ioe() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="_ÎÓÈ_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p391ef080} fill="var(--fill-0, #3F3F46)" id="Vector" />
      </svg>
      <div className="absolute left-1/2 size-[28px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="b467a636-6025-4837-9df1-4255c80c92e3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.77%] left-[-14.29%] max-w-none top-[-9.52%] w-[133.33%]" src={imgB467A636602548379Df14255C80C92E31} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[1.2] relative shrink-0 text-nowrap">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold relative shrink-0 text-[15px] text-white tracking-[0.3px]">$138(Saved)</p>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal relative shrink-0 text-[#7a7a83] text-[13px] text-center tracking-[0.26px]">8% saved</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[13px] text-nowrap tracking-[0.26px]">Cost Saving</p>
      <Frame2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#27272a] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center px-[14px] py-[9px] relative w-full">
          <Ioe />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0.9)] h-[36px] relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[18px] py-[10px] relative size-full">
          <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1d1d20] text-[13px] text-nowrap tracking-[0.26px]">See Rooms</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[11px] py-0 relative w-full">
          <Frame27 />
          <Frame25 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.3px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
                <path d="M0 0.3H331" id="Vector 535" stroke="var(--stroke-0, white)" strokeOpacity="0.16" strokeWidth="0.6" />
              </svg>
            </div>
          </div>
          <p className="font-['Urbanist:Medium_Italic',sans-serif] font-medium italic leading-[1.2] min-w-full relative shrink-0 text-[#e1e1e2] text-[15px] tracking-[0.3px] w-[min-content]">Close to transport, smooth check-in after morning arrival.</p>
          <Frame12 />
          <Frame17 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start w-full px-[20px] mx-auto mt-[144px] pb-[40px]">
      <div className="aspect-[353/193] relative rounded-[26px] shrink-0 w-full" data-name="image 685">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[26px]">
          <img alt="" className="absolute h-[146.29%] left-0 max-w-none top-[-16.92%] w-full" src={imgImage685} />
        </div>
      </div>
      <Frame29 />
    </div>
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

function Arrow() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow">
          <path d={svgPaths.pe7f2500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Planner({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Planner" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Arrow />
    </div>
  );
}

function Frame15({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Planner onClick={onBack} />
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.2]">{`Hotel details `}</p>
      </div>
    </div>
  );
}

function Frame3({ onBack }: { onBack?: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[20px] py-0 relative w-full">
          <Frame15 onBack={onBack} />
        </div>
      </div>
    </div>
  );
}

function PageHeadersDark({ onBack }: { onBack?: () => void }) {
  return (
    <div className="absolute backdrop-blur-[30px] backdrop-filter content-stretch flex flex-col gap-[10px] h-[120px] items-start left-0 top-0 w-full z-10" data-name="Page Headers - Dark" style={{ backgroundImage: "linear-gradient(73.5203deg, rgba(0, 0, 0, 0) 0.37632%, rgba(29, 29, 29, 0.6) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <StatusBarIPhone />
      <Frame3 onBack={onBack} />
    </div>
  );
}

export default function HotelDetailsScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-[#121212] relative size-full overflow-y-auto" data-name="Dark - Greys">
      <PageHeadersDark onBack={onBack} />
      <Frame28 />
      <HomeIndicator />
    </div>
  );
}
