import imgImage from "figma:asset/9efae69a0685fdb8a425a2bf0238e819a9f60f86.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#8e8e8e] text-[11px] tracking-[0.22px]">08:45 PM</p>
      <p className="font-['Urbanist:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-white tracking-[0.4px]">SUB</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.2] relative shrink-0 text-nowrap">
      <Frame4 />
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#e1e1e2] text-[11px] tracking-[0.22px]">Surabaya</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[14px] relative w-[117px]">
        <div className="absolute inset-[-0.64px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 1">
            <line id="Line 9219" stroke="var(--stroke-0, #737373)" strokeDasharray="3 3" strokeWidth="0.64" x2="117" y1="0.32" y2="0.32" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] ml-[44.5px] mt-0 relative size-[32px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="32" src={imgImage} width="32" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[9px] text-nowrap tracking-[0.18px]">3h 25m</p>
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #7A7A83)" id="Ellipse 5630" r="1.5" />
        </svg>
      </div>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[9px] text-nowrap tracking-[0.18px]">Non-Stop</p>
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #7A7A83)" id="Ellipse 5630" r="1.5" />
        </svg>
      </div>
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[9px] text-nowrap tracking-[0.18px]">Lowest Price</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[#d0d0d4] text-[9px] text-center tracking-[0.18px] w-[min-content]">SQ-923</p>
      <Group />
      <Frame />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#8e8e8e] text-[11px] text-nowrap tracking-[0.22px]">12:10 AM</p>
      <p className="font-['Urbanist:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-white tracking-[0.4px] w-[43px]">SIN</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end leading-[1.2] relative shrink-0 text-right">
      <Frame8 />
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Singapore</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[317px]">
      <Frame2 />
      <Frame10 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Urbanist:Medium',sans-serif] font-medium gap-[4px] items-center leading-[1.2] relative shrink-0 text-center text-nowrap">
      <p className="relative shrink-0 text-[#8e8e8e] text-[11px] tracking-[0.22px]">Arline</p>
      <p className="relative shrink-0 text-[14px] text-white tracking-[0.28px]">Emirates</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[4px] items-center leading-[1.2] relative shrink-0 text-center text-nowrap">
      <p className="font-['Urbanist:Medium',sans-serif] relative shrink-0 text-[#8e8e8e] text-[11px] tracking-[0.22px]">Price</p>
      <p className="font-['Urbanist:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[14px] text-white tracking-[0.28px]">₹42,800</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-['Urbanist:Medium',sans-serif] font-medium gap-[4px] items-center leading-[1.2] relative shrink-0 text-center text-nowrap">
      <p className="relative shrink-0 text-[#8e8e8e] text-[11px] tracking-[0.22px]">Class</p>
      <p className="relative shrink-0 text-[14px] text-white tracking-[0.28px]">Economy</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#27272a] content-stretch flex gap-[24px] h-[53px] items-center px-[23px] py-[9px] relative rounded-[16px] shrink-0 w-[317px]">
      <div aria-hidden="true" className="absolute border-[#737373] border-[0.24px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame5 />
      <div className="flex h-[30px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[30px]">
            <div className="absolute inset-[-0.44px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
                <line id="Line 9224" stroke="var(--stroke-0, #737373)" strokeWidth="0.44" x2="30" y1="0.22" y2="0.22" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame6 />
      <div className="flex h-[30px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[30px]">
            <div className="absolute inset-[-0.44px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
                <line id="Line 9224" stroke="var(--stroke-0, #737373)" strokeWidth="0.44" x2="30" y1="0.22" y2="0.22" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0.9)] h-[36px] relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[18px] py-[10px] relative size-full">
          <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1d1d20] text-[13px] text-nowrap tracking-[0.26px]">Select</p>
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <div className="bg-gradient-to-b from-[#282828] relative rounded-[29px] shrink-0 to-[#161616] w-full" data-name="Default">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[12px] py-[13px] relative w-full">
          <Frame11 />
          <Frame9 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-white h-[2px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[2px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[2px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[2px] rounded-[20px] shrink-0 w-[14px]" />
    </div>
  );
}

export default function Default1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative size-full" data-name="Default">
      <Default />
      <Frame1 />
    </div>
  );
}