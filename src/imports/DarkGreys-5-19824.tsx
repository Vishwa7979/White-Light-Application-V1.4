import svgPaths from "./svg-daopcfy9pg";
import imgLifestylePeopleEmotionsCasualConceptConfidentNiceSmilingAsianWomanCrossArmsChestConfidentReadyHelpListeningCoworkersTakingPartConversation5 from "figma:asset/a991af8d0f9705a68889e044a39e85ff09b980a6.png";

function Bg() {
  return (
    <div className="absolute h-[852px] left-0 overflow-clip top-0 w-[393px]" data-name="bg">
      <div className="absolute bg-[#121212] h-[852px] left-0 top-0 w-[393px]" />
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
          <path d={svgPaths.p17eff400} fill="var(--fill-0, #EAEAEA)" id="Vector" />
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Planner />
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.2]">Select Avatar</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[20px] py-0 relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function PageHeadersDark() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[120px] items-start left-0 top-0 w-[393px]" data-name="Page Headers - Dark">
      <StatusBarIPhone />
      <Frame3 />
    </div>
  );
}

function AvatarSelectionFrame() {
  return (
    <div className="absolute h-[560px] left-[20px] overflow-clip rounded-[30px] top-[140px] w-[353px]" data-name="Avatar Selection Frame">
      <div className="absolute h-[560px] left-0 rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.04)] top-0 w-[353px]" data-name="lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgLifestylePeopleEmotionsCasualConceptConfidentNiceSmilingAsianWomanCrossArmsChestConfidentReadyHelpListeningCoworkersTakingPartConversation5} />
      </div>
      <div className="absolute backdrop-blur-[27px] backdrop-filter border border-[rgba(123,123,123,0.2)] border-solid h-[560px] left-0 rounded-[30px] top-0 w-[353px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 64.003%, rgba(0, 0, 0, 0.42) 72.554%, rgba(11, 10, 10, 0.7) 100%)" }} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[0] left-1/2 text-center top-[561px] translate-x-[-50%] w-[293px]">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[1.2] relative shrink-0 text-[#fcfcfc] text-[20px] tracking-[0.4px] w-full">
        <p className="mb-0">👋</p>
        <p>Hey! I am Roamie</p>
      </div>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#f4f4f5] text-[16px] tracking-[0.32px] w-full">
        <p className="leading-[1.2]">{`High-pitched & bright voice`}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[calc(50%+0.5px)] top-[720px] translate-x-[-50%]">
      <div className="bg-white h-[4px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[4px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[4px] rounded-[20px] shrink-0 w-[14px]" />
      <div className="bg-[#3f4b5a] h-[4px] rounded-[20px] shrink-0 w-[14px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute backdrop-blur-[21px] backdrop-filter bg-[#1d1d20] content-stretch flex h-[48px] items-center justify-center left-[20px] p-[10px] rounded-[32px] top-[764px] w-[353px]">
      <div aria-hidden="true" className="absolute border border-[#3a3a3e] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#eaeaea] text-[16px] text-nowrap tracking-[0.32px]">Select</p>
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

export default function DarkGreys() {
  return (
    <div className="bg-black relative size-full" data-name="Dark - Greys">
      <Bg />
      <PageHeadersDark />
      <AvatarSelectionFrame />
      <Frame2 />
      <Frame1 />
      <Frame />
      <HomeIndicator />
    </div>
  );
}