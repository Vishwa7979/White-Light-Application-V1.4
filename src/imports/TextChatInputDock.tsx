import svgPaths from "./svg-kneq4mv7hx";

function TextBox() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[4px] relative rounded-[22px] shrink-0 w-[353px]" data-name="Text Box">
      <p className="-webkit-box font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#a1a1aa] text-[14px] w-full">Ask Anything</p>
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
          <path d={svgPaths.p5e85100} fill="var(--fill-0, #1D1D20)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChatModeButton() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[38px]" data-name="Chat Mode Button">
      <RiApps2AiLine />
    </div>
  );
}

function RiChatAi3Line() {
  return (
    <div className="absolute left-1/2 size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ri:chat-ai-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="ri:chat-ai-3-line">
          <path d={svgPaths.p3e28ebf0} fill="var(--fill-0, #FFB1FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChatModeItems12Px() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Chat Mode Items-12px">
      <RiChatAi3Line />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ChatModeItems12Px />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffb1ff] text-[11px] text-nowrap tracking-[0.22px]">Chat</p>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.p2bd16d80} fill="var(--fill-0, #A1A1AA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChatModes() {
  return (
    <div className="bg-[rgba(255,177,255,0.1)] content-stretch flex gap-[10px] h-[28px] items-center justify-center px-[10px] py-[6px] relative rounded-[60px] shrink-0" data-name="Chat Modes">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,177,255,0.6)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <Frame1 />
      <Close />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <AttachButton />
      <ChatModeButton />
      <ChatModes />
    </div>
  );
}

function IonMicOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ion:mic-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ion:mic-outline">
          <path d={svgPaths.p350bf700} id="Vector" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36fcca80} id="Vector_2" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[38px]" data-name="Action Buttons" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 38 38\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.755 2.09 -4.0818 -5.3806 19 19)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[#1d1d1d] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <IonMicOutline />
    </div>
  );
}

function TextBox1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Text Box">
      <Frame />
      <ActionButtons />
    </div>
  );
}

export default function TextChatInputDock() {
  return (
    <div className="backdrop-blur-[15px] backdrop-filter relative rounded-tl-[32px] rounded-tr-[32px] size-full" data-name="Text Chat - Input Dock" style={{ backgroundImage: "linear-gradient(253.083deg, rgb(29, 29, 29) 2.2669%, rgba(0, 0, 0, 0) 104.24%)" }}>
      <div aria-hidden="true" className="absolute border-[#424242] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[26px] items-start pb-[40px] pt-[20px] px-[20px] relative size-full">
          <TextBox />
          <TextBox1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.5)]" />
    </div>
  );
}