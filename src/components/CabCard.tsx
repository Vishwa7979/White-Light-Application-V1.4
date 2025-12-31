import React from 'react';
import imgImage687 from "figma:asset/c2a4a6c2c38ecf8898d84c4252ad7a083f21e45f.png";

function Frame4() {
  return (
    <div className="content-stretch flex font-['Urbanist:Medium',sans-serif] font-medium items-center justify-between leading-[1.2] relative shrink-0 text-[#7a7a83] text-[11px] text-nowrap tracking-[0.22px] w-full">
      <p className="relative shrink-0">Zurich Airport</p>
      <p className="relative shrink-0 text-right">Fri, 19 Sep</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[9px] text-nowrap tracking-[0.18px]">SUV</p>
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #7A7A83)" id="Ellipse 5631" r="1" />
        </svg>
      </div>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[9px] text-nowrap tracking-[0.18px]">Automatic</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[14px] text-white tracking-[0.28px] w-full">Volvo XC40</p>
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-end leading-[1.2] relative shrink-0 text-right w-[57px]">
      <p className="font-['Urbanist:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold min-w-full relative shrink-0 text-[14px] text-white tracking-[0.28px] w-[min-content]">₹5,200</p>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[10px] text-nowrap tracking-[0.2px]">per day</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-0.3px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 313 1">
            <path d="M0 0.3H313" id="Vector 535" stroke="var(--stroke-0, white)" strokeOpacity="0.16" strokeWidth="0.6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['Urbanist:Medium_Italic',sans-serif] font-medium grow italic leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#e1e1e2] text-[12px] tracking-[0.24px]">“Easy city driving with space for luggage”</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame3 />
      <Frame8 />
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

function Default({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="bg-[rgba(29,29,32,0.6)] content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[32px] shrink-0 w-[353px]" data-name="Default">
      <div aria-hidden="true" className="absolute border border-[#3f3f46] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame4 />
      <div className="h-[76px] relative shrink-0 w-[185px]" data-name="image 687">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[231.54%] left-[-34.29%] max-w-none top-[-87.28%] w-[168.57%]" src={imgImage687} />
        </div>
      </div>
      <Frame7 />
      <Frame onClick={onSelect} />
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

export default function CabCard({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative size-full" data-name="Default">
      <Default onSelect={onSelect} />
      <Frame2 />
    </div>
  );
}
