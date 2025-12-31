import svgPaths from "./svg-1rqjnh11mp";

function RiChatAi3Line() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ri:chat-ai-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_9_3085)" id="ri:chat-ai-3-line">
          <path d={svgPaths.p27424400} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_3085">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative rounded-[60px] size-full" style={{ backgroundImage: "linear-gradient(113.699deg, rgba(255, 177, 255, 0.01) 68.456%, rgba(23, 27, 28, 0.36) 97.572%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-[-0.8px] pointer-events-none rounded-[60.8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[6px] relative size-full">
          <RiChatAi3Line />
          <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#fcfcfc] text-[13px] text-nowrap tracking-[0.26px]">Chat</p>
        </div>
      </div>
    </div>
  );
}