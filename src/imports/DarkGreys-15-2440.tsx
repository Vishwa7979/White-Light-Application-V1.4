import svgPaths from "./svg-x2vsine00s";
import imgRectangle249873 from "figma:asset/a991af8d0f9705a68889e044a39e85ff09b980a6.png";
import imgImage from "figma:asset/1395b37dc7e9b1c0f16c775f796cc61d1ecdf0c0.png";
import imgImage1 from "figma:asset/8e35f2b7b64bfc0a5ae3f713906d7a3bfc3fd64b.png";
import imgImage2 from "figma:asset/41714f7f4d12e64d7dd2c1e872bb4cc3d176b6fd.png";
import imgImage3 from "figma:asset/96e9bf7e42c61a44c7e979ac58fc63ba58da6f8c.png";
import imgImage4 from "figma:asset/f2ebc85769c78b173d0bec68a976b81b3cce2e9d.png";

function AvatarFrameDefault() {
  return (
    <div className="absolute bg-black h-[852px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[393px]" data-name="AVATAR FRAME - DEFAULT">
      <div className="absolute inset-[0_-56.49%_0.12%_-56.49%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle249873} />
      </div>
    </div>
  );
}

function AvatarTopLayer() {
  return (
    <div className="absolute h-[852px] left-0 top-0 w-[393px]" data-name="AVATAR TOP LAYER">
      <div className="absolute backdrop-blur-[27px] backdrop-filter inset-0" style={{ backgroundImage: "linear-gradient(rgba(12, 11, 11, 0.35) 0%, rgba(0, 0, 0, 0) 15.975%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.42) 70%, rgba(11, 10, 10, 0.7) 100%)" }} />
    </div>
  );
}

function AvatarFrameDefault1() {
  return (
    <div className="absolute bg-black h-[852px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[393px]" data-name="Avatar Frame - Default">
      <AvatarFrameDefault />
      <AvatarTopLayer />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start leading-[0] left-[20px] text-center top-[495px] w-[353px]">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#f4f4f5] text-[18px] tracking-[0.36px] w-full">
        <p className="leading-[1.2]">👋 Welcome aboard!</p>
      </div>
      <div className="flex flex-col font-['Sora:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#fcfcfc] text-[28px] tracking-[0.56px] w-full">
        <p className="leading-[1.2]">I’m here to help you build, sell, and grow.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <div className="relative shrink-0 size-[18px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute backdrop-blur-[20px] backdrop-filter content-stretch flex gap-[6px] h-[40px] items-center justify-center left-[calc(50%+0.5px)] px-[14px] py-[10px] rounded-[30px] top-[639px] translate-x-[-50%] w-[186px]" style={{ backgroundImage: "linear-gradient(193.531deg, rgb(251, 101, 124) 1.3202%, rgba(0, 0, 0, 0) 57.121%), linear-gradient(104.842deg, rgba(0, 0, 0, 0) 34.963%, rgba(251, 146, 60, 0.6) 87.345%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 186 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-13.485 2.2 -19.979 -5.6638 93 20)\\'><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(19,19,19,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Frame2 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#f4f4f5] text-[13px] text-nowrap tracking-[0.26px]">What can I build here?</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <div className="relative shrink-0 size-[18px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-36.31%] max-w-none size-[188.89%] top-[-49.35%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.2)] content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#365371] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame3 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#f4f4f5] text-[13px] text-nowrap tracking-[0.26px]">How do I start a store?</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <div className="relative shrink-0 size-[18px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.2)] content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#365371] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame9 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#f4f4f5] text-[13px] text-nowrap tracking-[0.26px]">How do I offer services?</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <div className="relative shrink-0 size-[18px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.2)] content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#365371] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame10 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#f4f4f5] text-[13px] text-nowrap tracking-[0.26px]">Show sample experiences</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <div className="relative shrink-0 size-[18px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.2)] content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#365371] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame11 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#f4f4f5] text-[13px] text-nowrap tracking-[0.26px]">What are others creating?</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-1/2 top-[699px] translate-x-[-50%] w-[601px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
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

function Group() {
  return (
    <div className="absolute inset-[16.67%_8.33%_16.66%_8.34%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14">
        <g id="Group">
          <path d={svgPaths.p14915600} fill="var(--fill-0, #EAEAEA)" id="Vector" />
          <path d={svgPaths.p18ac0400} fill="var(--fill-0, #EAEAEA)" id="Vector_2" />
          <path d={svgPaths.p1fb3cc70} fill="var(--fill-0, #EAEAEA)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Hamburger() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hamburger 1">
      <Group />
    </div>
  );
}

function Planner() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px]" data-name="Planner" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Hamburger />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Planner />
    </div>
  );
}

function HugeiconsNotificationSnooze() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="hugeicons:notification-snooze-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="hugeicons:notification-snooze-03">
          <g id="Group">
            <path d={svgPaths.p2a374700} id="Vector" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p101d000} id="Vector_2" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <circle cx="15" cy="5" fill="var(--fill-0, #FC2626)" id="Ellipse 5632" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Conversations() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px]" data-name="Conversations" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <HugeiconsNotificationSnooze />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <Conversations />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-0 relative w-full">
          <Frame14 />
          <Frame13 />
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
      <HomeIndicator />
      <AvatarFrameDefault1 />
      <Frame />
      <div className="absolute flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#b9b9b9] text-[13px] text-center text-nowrap top-[804px] tracking-[0.26px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.2]">Tap to Type , Hold to Speak with Avatar</p>
      </div>
      <Frame8 />
      <Frame12 />
      <PageHeadersDark />
    </div>
  );
}