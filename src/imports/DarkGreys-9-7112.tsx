import svgPaths from "./svg-fbsmvezpvt";
import imgImage649 from "figma:asset/93d25a87fbaa2633cb633d7e58182c508a364ce7.png";
import imgLifestylePeopleEmotionsCasualConceptConfidentNiceSmilingAsianWomanCrossArmsChestConfidentReadyHelpListeningCoworkersTakingPartConversation5 from "figma:asset/a991af8d0f9705a68889e044a39e85ff09b980a6.png";

function Bg() {
  return (
    <div className="absolute h-[852px] left-0 overflow-clip top-0 w-[393px]" data-name="bg">
      <div className="absolute bg-[#121212] h-[852px] left-0 top-0 w-[393px]" />
    </div>
  );
}

function MessageItem() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#27272a] items-end max-w-[230px] px-[16px] py-[12px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 to-[rgba(51,51,51,0.6)]" data-name="message item">
      <p className="basis-0 font-['Urbanist:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#f4f4f5] text-[14px] tracking-[0.28px]">Lorem Ipsum</p>
    </div>
  );
}

function UserMessage() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[353px]" data-name="User Message">
      <MessageItem />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 14506">
            <circle cx="16" cy="16" fill="var(--fill-0, black)" fillOpacity="0.45" r="16" />
            <circle cx="16" cy="16" r="15.6" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[4px] mt-[4px] relative rounded-[100px] size-[24px]" data-name="image 649">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute h-[135.42%] left-[-17.8%] max-w-none top-[-12.26%] w-[135.47%]" src={imgImage649} />
        </div>
      </div>
    </div>
  );
}

function MessageItem1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[450px] relative rounded-[11px] shrink-0 w-[260px]" data-name="message item">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#d7d7d7] text-[14px] tracking-[0.28px] w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#27272a] text-[13px] text-nowrap tracking-[0.26px]">{`👍 `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-r content-stretch flex from-[rgba(35,31,31,0.6)] gap-[2px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0 to-[#382f25]">
      <div aria-hidden="true" className="absolute border border-[#231e18] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame7 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#fcfcfc] text-[13px] text-nowrap tracking-[0.26px]">Let’s Proceed with Checkout</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#b9b9b9] text-[13px] text-nowrap tracking-[0.26px]">{`✏️ `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(38,38,38,0.3)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[14px] py-[10px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(29,29,29,0.8)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame8 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[13px] text-nowrap tracking-[0.26px]">Make Changes</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
      <MessageItem1 />
      <Frame4 />
    </div>
  );
}

function AiResponse() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[353px]" data-name="Ai Response">
      <Group1 />
      <Frame10 />
    </div>
  );
}

function MessageItem2() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#27272a] items-end max-w-[230px] px-[16px] py-[12px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 to-[rgba(51,51,51,0.6)]" data-name="message item">
      <p className="basis-0 font-['Urbanist:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#f4f4f5] text-[14px] tracking-[0.28px]">{`👍 Let’s Proceed with Checkout `}</p>
    </div>
  );
}

function UserMessage1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[353px]" data-name="User Message">
      <MessageItem2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bottom-[529px] content-stretch flex flex-col gap-[24px] items-center left-[20px] w-[353px]">
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a83] text-[14px] text-center text-nowrap tracking-[0.28px]">
        <p className="leading-[1.2]">TODAY</p>
      </div>
      <UserMessage />
      <AiResponse />
      <UserMessage1 />
    </div>
  );
}

function SuggestionChips() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[6px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(144,144,238,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Create</p>
    </div>
  );
}

function SuggestionChips1() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[6px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(144,144,238,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Build</p>
    </div>
  );
}

function SuggestionChips2() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[6px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(144,144,238,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Start</p>
    </div>
  );
}

function SuggestionChips3() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[6px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(144,144,238,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Launch</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <SuggestionChips />
      <SuggestionChips1 />
      <SuggestionChips2 />
      <SuggestionChips3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute backdrop-blur-[20px] backdrop-filter bottom-[401px] content-stretch flex flex-col gap-[10px] items-start justify-end left-1/2 pb-[50px] pt-[14px] px-[20px] rounded-tl-[20px] rounded-tr-[20px] translate-x-[-50%] w-[393px]" style={{ backgroundImage: "linear-gradient(134.664deg, rgb(19, 19, 19) 0%, rgba(29, 29, 32, 0.6) 97.864%)" }}>
      <div aria-hidden="true" className="absolute border border-[#1b1b1e] border-solid inset-0 pointer-events-none rounded-tl-[20px] rounded-tr-[20px]" />
      <Frame6 />
    </div>
  );
}

function SuggestionChips4() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e1e1e2] text-[11px] text-nowrap tracking-[0.22px]">Category</p>
    </div>
  );
}

function SuggestionChips5() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,166,23,0.2)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#7a7a83] text-[11px] text-nowrap tracking-[0.22px]">Purpose</p>
    </div>
  );
}

function SuggestionChips6() {
  return (
    <div className="bg-[rgba(255,166,23,0.05)] content-stretch flex h-[30px] items-center justify-center px-[14px] py-[4px] relative rounded-[60px] shrink-0" data-name="Suggestion Chips">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,166,23,0.2)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#7a7a83] text-[11px] text-nowrap tracking-[0.22px]">Domain</p>
    </div>
  );
}

function TextBox() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center p-[4px] relative rounded-[22px] shrink-0 w-[353px]" data-name="Text Box">
      <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#fcfcfc] text-[14px] text-nowrap">|</p>
      <SuggestionChips4 />
      <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#a1a1aa] text-[14px] text-nowrap tracking-[0.28px]">a</p>
      <SuggestionChips5 />
      <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#a1a1aa] text-[14px] text-nowrap tracking-[0.28px]">for</p>
      <SuggestionChips6 />
    </div>
  );
}

function TablerPlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="tabler:plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="tabler:plus">
          <path d={svgPaths.p65d7f00} id="Vector" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function AttachButton() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px]" data-name="Attach Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 38 38\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.755 2.09 -4.0818 -5.3806 19 19)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[#1d1d1d] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <TablerPlus />
    </div>
  );
}

function RiApps2AiLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ri:apps-2-ai-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ri:apps-2-ai-line">
          <path d={svgPaths.p5e85100} fill="var(--fill-0, #D0D0D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChatModeButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[38px]" data-name="Chat Mode Button">
      <RiApps2AiLine />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <AttachButton />
      <ChatModeButton />
    </div>
  );
}

function IconoirSendSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconoir:send-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconoir:send-solid">
          <path clipRule="evenodd" d={svgPaths.p19ca9ec0} fill="var(--fill-0, #1D1D20)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter bg-[#fcfcfc] content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px]" data-name="Action Buttons">
      <IconoirSendSolid />
    </div>
  );
}

function TextBox1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Text Box">
      <Frame11 />
      <ActionButtons />
    </div>
  );
}

function TextChatInputDock() {
  return (
    <div className="absolute backdrop-blur-[20px] backdrop-filter bottom-[291px] content-stretch flex flex-col gap-[26px] items-center left-1/2 p-[20px] rounded-tl-[32px] rounded-tr-[32px] translate-x-[-50%] w-[393px]" data-name="Text Chat - Input Dock" style={{ backgroundImage: "linear-gradient(253.851deg, rgb(20, 25, 37) 0.61931%, rgba(0, 0, 0, 0) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#517cd0] border-[1.5px_0px_0px] border-solid inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]" />
      <TextBox />
      <TextBox1 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.5)]" />
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Planner />
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.2]">New Chat</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[20px] py-0 relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function PageHeadersDark() {
  return (
    <div className="absolute backdrop-blur-[30px] backdrop-filter content-stretch flex flex-col gap-[10px] h-[120px] items-start left-0 top-0 w-[393px]" data-name="Page Headers - Dark" style={{ backgroundImage: "linear-gradient(73.5203deg, rgba(0, 0, 0, 0) 0.37632%, rgba(29, 29, 29, 0.6) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <StatusBarIPhone />
      <Frame3 />
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

function Space() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] bottom-0 h-[42px] left-0 right-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)]" data-name="Space">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[16px] text-center text-white top-1/2 tracking-[-0.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">space</p>
      </div>
    </div>
  );
}

function Space1() {
  return (
    <div className="absolute h-[42px] left-0 right-0 rounded-[4.6px] top-0" data-name="Space">
      <Space />
    </div>
  );
}

function Row3() {
  return (
    <div className="absolute bottom-0 h-[42px] left-[25.7%] right-[25.7%]" data-name="Row 4">
      <Space1 />
    </div>
  );
}

function Return() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.12)] bottom-0 h-[42px] left-[75.83%] right-[0.76%] rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)]" data-name="Return">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[16px] text-center text-white top-1/2 tracking-[-0.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">return</p>
      </div>
    </div>
  );
}

function KeyboardSwitch() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] bottom-0 h-[42px] left-[0.76%] right-[75.83%] rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)]" data-name="Keyboard Switch">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[16px] text-center text-white top-1/2 tracking-[-0.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">123</p>
      </div>
    </div>
  );
}

function Key() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.29px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">z</p>
      </div>
    </div>
  );
}

function Key1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.29px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">x</p>
      </div>
    </div>
  );
}

function Key2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.29px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">c</p>
      </div>
    </div>
  );
}

function Key3() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.29px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">v</p>
      </div>
    </div>
  );
}

function Key4() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.29px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">b</p>
      </div>
    </div>
  );
}

function Key5() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.29px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">n</p>
      </div>
    </div>
  );
}

function Key6() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.29px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">m</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute bottom-[54px] content-stretch flex gap-[6px] items-start left-[15.78%] right-[15.78%]" data-name="Row 3">
      <Key />
      <Key1 />
      <Key2 />
      <Key3 />
      <Key4 />
      <Key5 />
      <Key6 />
    </div>
  );
}

function DeleteKey() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.12)] bottom-[54px] h-[42px] left-[88.04%] right-[0.76%] rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)]" data-name="Delete Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[20px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">􀆛</p>
      </div>
    </div>
  );
}

function ShiftKey() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.12)] bottom-[54px] h-[42px] left-[0.76%] right-[88.04%] rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)]" data-name="Shift Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.5px)] text-[20px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">􀆝</p>
      </div>
    </div>
  );
}

function Key7() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">a</p>
      </div>
    </div>
  );
}

function Key8() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">s</p>
      </div>
    </div>
  );
}

function Key9() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">d</p>
      </div>
    </div>
  );
}

function Key10() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">f</p>
      </div>
    </div>
  );
}

function Key11() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">g</p>
      </div>
    </div>
  );
}

function Key12() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">h</p>
      </div>
    </div>
  );
}

function Key13() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">j</p>
      </div>
    </div>
  );
}

function Key14() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">k</p>
      </div>
    </div>
  );
}

function Key15() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">l</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute bottom-[108px] content-stretch flex gap-[6px] items-start left-[5.85%] right-[5.85%]" data-name="Row 2">
      <Key7 />
      <Key8 />
      <Key9 />
      <Key10 />
      <Key11 />
      <Key12 />
      <Key13 />
      <Key14 />
      <Key15 />
    </div>
  );
}

function Key16() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">q</p>
      </div>
    </div>
  );
}

function Key17() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">w</p>
      </div>
    </div>
  );
}

function Key18() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">e</p>
      </div>
    </div>
  );
}

function Key19() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">r</p>
      </div>
    </div>
  );
}

function Key20() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">t</p>
      </div>
    </div>
  );
}

function Key21() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">y</p>
      </div>
    </div>
  );
}

function Key22() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">u</p>
      </div>
    </div>
  );
}

function Key23() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">i</p>
      </div>
    </div>
  );
}

function Key24() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">o</p>
      </div>
    </div>
  );
}

function Key25() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Key">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">p</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="absolute bottom-[162px] content-stretch flex gap-[6px] items-start left-[0.76%] right-[0.76%]" data-name="Row 1">
      <Key16 />
      <Key17 />
      <Key18 />
      <Key19 />
      <Key20 />
      <Key21 />
      <Key22 />
      <Key23 />
      <Key24 />
      <Key25 />
    </div>
  );
}

function KeyboardIPhoneLayouts() {
  return (
    <div className="h-[204px] relative shrink-0 w-full" data-name="Keyboard - iPhone Layouts">
      <Row3 />
      <Return />
      <KeyboardSwitch />
      <Row2 />
      <DeleteKey />
      <ShiftKey />
      <Row1 />
      <Row />
    </div>
  );
}

function EmojiAndMic() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Emoji and Mic">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[25px] px-[20px] relative size-full">
          <div className="relative shrink-0 size-[26.92px]" data-name="Emoji">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
              <path d={svgPaths.p2d450400} fill="var(--fill-0, #E7E7E7)" id="Emoji" />
            </svg>
          </div>
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e7e7e7] text-[27px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">􀊰</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeIndicator1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Home Indicator">
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[139px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-white h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function KeyboardIPhoneIOs() {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(56,56,56,0.75)] bottom-0 content-stretch flex flex-col items-center justify-end left-0 pb-0 pt-[3px] px-0 w-[393px]" data-name="Keyboard - iPhone - iOS 17">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <div className="h-[5px] opacity-60 w-full" data-name="Spacer" />
        </div>
      </div>
      <KeyboardIPhoneLayouts />
      <EmojiAndMic />
      <HomeIndicator1 />
    </div>
  );
}

export default function DarkGreys() {
  return (
    <div className="bg-black relative size-full" data-name="Dark - Greys">
      <Frame2 />
      <TextChatInputDock />
      <PageHeadersDark />
      <HomeIndicator />
      <KeyboardIPhoneIOs />
      <Bg />
      <Frame5 />
      <div className="absolute h-[126px] left-[calc(60%+41.2px)] pointer-events-none rounded-[16px] top-[140px] w-[96px]" data-name="lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgLifestylePeopleEmotionsCasualConceptConfidentNiceSmilingAsianWomanCrossArmsChestConfidentReadyHelpListeningCoworkersTakingPartConversation5} />
        <div aria-hidden="true" className="absolute border border-[#fcfcfc] border-solid inset-0 rounded-[16px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.04)]" />
      </div>
    </div>
  );
}