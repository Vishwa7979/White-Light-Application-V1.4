import React from 'react';
import svgPaths from "../imports/svg-961jg7ri13";
import imgImage685 from "figma:asset/fbaa074acad8c2827683302428dfd40460af05fc.png";

function Frame4() {
  return (
    <div className="absolute content-stretch flex font-['Urbanist:Medium',sans-serif] font-medium items-center justify-between leading-[1.2] left-[25px] px-[10px] py-0 text-[#f4f4f5] text-[10px] text-nowrap top-[14px] tracking-[0.2px] w-[280px]">
      <p className="relative shrink-0">Zurich Central</p>
      <p className="relative shrink-0 text-right">Fri, 19 Sep</p>
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
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[9px] text-nowrap tracking-[0.18px]">4.7</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Rating />
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #7A7A83)" id="Ellipse 5631" r="1" />
        </svg>
      </div>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[9px] text-nowrap tracking-[0.18px]">📍 Old Town</p>
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #7A7A83)" id="Ellipse 5631" r="1" />
        </svg>
      </div>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[9px] text-nowrap tracking-[0.18px]">12 min from station</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[14px] text-white tracking-[0.28px] w-full">Hotel Adler Zürich</p>
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-end leading-[1.2] relative shrink-0 text-right w-[57px]">
      <p className="font-['Urbanist:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white tracking-[0.28px] w-full">₹14,500</p>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[0.2px] w-full">per night</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between px-[10px] py-0 relative w-full">
          <Frame7 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-0.3px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 325 1">
            <path d="M0 0.3H325" id="Vector 535" stroke="var(--stroke-0, white)" strokeOpacity="0.16" strokeWidth="0.6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-0 relative w-full">
          <p className="font-['Urbanist:Medium_Italic',sans-serif] font-medium italic leading-[1.2] relative shrink-0 text-[#e1e1e2] text-[11px] tracking-[0.22px] w-[314px]">Close to transport, smooth check-in after morning arrival.</p>
        </div>
      </div>
    </div>
  );
}

function Frame({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0.9)] h-[36px] relative rounded-[32px] shrink-0 w-full cursor-pointer hover:bg-white/80 transition-colors">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[18px] py-[10px] relative size-full">
          <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1d1d20] text-[13px] text-nowrap tracking-[0.26px]">Select</p>
        </div>
      </div>
    </div>
  );
}

function Frame8({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="absolute bottom-[13px] content-stretch flex flex-col gap-[12px] items-start left-1/2 translate-x-[-50%] w-[325px]">
      <Frame6 />
      <Frame3 />
      <Frame9 />
      <Frame onClick={onSelect} />
    </div>
  );
}

function Group({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[rgba(29,29,32,0.6)] h-[280px] left-0 rounded-[26px] top-0 w-[353px]" />
      <div className="absolute h-[280px] left-0 rounded-[26px] top-0 w-[353px]" data-name="image 685">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[26px]">
          <img alt="" className="absolute h-[100.83%] left-0 max-w-none top-[-0.42%] w-full" src={imgImage685} />
        </div>
      </div>
      <div 
        className="absolute backdrop-blur-[27px] backdrop-filter border border-[rgba(123,123,123,0.2)] border-solid h-[280px] left-0 rounded-[26px] top-0 w-[353px]" 
        data-name="image 686" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(11, 10, 10, 0.42) 0%, rgba(0, 0, 0, 0) 21.078%, rgba(0, 0, 0, 0) 40.1%, rgba(0, 0, 0, 0.42) 53.084%, rgba(11, 10, 10, 0.7) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)"
        }} 
      />
      <Frame4 />
      <Frame8 onSelect={onSelect} />
    </div>
  );
}

function Default({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="h-[280px] overflow-clip relative rounded-[26px] shrink-0 w-full" data-name="Default">
      <Group onSelect={onSelect} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-white h-[2px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[2px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[2px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[2px] rounded-[20px] shrink-0 w-[14px]" />
    </div>
  );
}

export default function HotelCard({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative size-full" data-name="Default">
      <Default onSelect={onSelect} />
      <Frame2 />
    </div>
  );
}