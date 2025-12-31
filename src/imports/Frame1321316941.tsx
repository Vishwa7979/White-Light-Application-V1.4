import svgPaths from "./svg-zl1npnuu6e";

function HeroiconsDocument() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="heroicons:document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heroicons:document">
          <path d={svgPaths.p30523180} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(118.512deg, rgba(20, 20, 21, 0.95) 47.794%, rgba(23, 27, 28, 0.95) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-[-0.8px] pointer-events-none rounded-[24.8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[15px] items-start justify-center px-[16px] py-[10px] relative size-full">
          <HeroiconsDocument />
          <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.2] relative shrink-0 text-[#e1e1e2] text-[12px] text-nowrap tracking-[0.24px]">Document</p>
        </div>
      </div>
    </div>
  );
}