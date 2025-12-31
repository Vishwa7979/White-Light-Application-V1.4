function SuggestionChips() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Category</p>
    </div>
  );
}

function SuggestionChips1() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,166,23,0.2)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#7a7a83] text-[11px] text-nowrap tracking-[0.22px]">Purpose</p>
    </div>
  );
}

function SuggestionChips2() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,166,23,0.2)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#7a7a83] text-[11px] text-nowrap tracking-[0.22px]">Domain</p>
    </div>
  );
}

export default function TextBox() {
  return (
    <div className="relative rounded-[22px] size-full" data-name="Text Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[10px] items-center p-[4px] relative size-full">
          <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#fcfcfc] text-[14px] text-nowrap">|</p>
          <SuggestionChips />
          <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#a1a1aa] text-[14px] text-nowrap tracking-[0.28px]">a</p>
          <SuggestionChips1 />
          <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#a1a1aa] text-[14px] text-nowrap tracking-[0.28px]">for</p>
          <SuggestionChips2 />
        </div>
      </div>
    </div>
  );
}