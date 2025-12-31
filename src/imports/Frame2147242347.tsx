function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[353px]">
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[18px] tracking-[0.36px] w-full">
        <p className="leading-[1.2]">Lorem Ipsum is simply dummy text of the printing and types |</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-[rgba(252,252,252,0.4)] text-right tracking-[0.36px] w-[min-content]">
        <p className="leading-[1.2]">How do I start my store?</p>
      </div>
      <Frame />
    </div>
  );
}