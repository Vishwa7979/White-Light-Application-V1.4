import svgPaths from "./svg-7all08ud2b";
import imgImage649 from "figma:asset/93d25a87fbaa2633cb633d7e58182c508a364ce7.png";

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

function IconParkOutlineGoodTwo() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="icon-park-outline:good-two">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_9_4860)" id="icon-park-outline:good-two">
          <path d={svgPaths.p3a252400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-1, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_9_4860">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-gradient-to-r content-stretch flex flex-col from-[#231f1f] items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[22px] to-[#353131]">
      <div aria-hidden="true" className="absolute border-[#231f1f] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <IconParkOutlineGoodTwo />
    </div>
  );
}

function IconParkOutlineBadTwo() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="icon-park-outline:bad-two">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_9_4872)" id="icon-park-outline:bad-two">
          <path d={svgPaths.p1ade77c0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14286" />
        </g>
        <defs>
          <clipPath id="clip0_9_4872">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dislike() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[22px]" data-name="Dislike">
      <IconParkOutlineBadTwo />
    </div>
  );
}

function EpRefresh() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ep:refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ep:refresh">
          <path d={svgPaths.p2559ea00} fill="var(--fill-0, #A1A1AA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dislike1() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[22px]" data-name="Dislike">
      <EpRefresh />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[13px] left-[3px] top-[2px] w-[11.701px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <g id="Group 118">
          <path d={svgPaths.p123d8600} fill="var(--fill-0, #A1A1AA)" id="Subtract" />
          <rect height="10.05" id="Rectangle 296" rx="2.5" stroke="var(--stroke-0, #A1A1AA)" transform="rotate(180 9.25 12.5)" width="8.75" x="9.25" y="12.5" />
        </g>
      </svg>
    </div>
  );
}

function EpRefresh1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="ep:refresh">
      <Group />
    </div>
  );
}

function Dislike2() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[22px]" data-name="Dislike">
      <EpRefresh1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame />
      <Dislike />
      <Dislike1 />
      <Dislike2 />
    </div>
  );
}

function MessageItem() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[450px] relative rounded-[11px] shrink-0 w-[260px]" data-name="message item">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#fcfcfc] text-[14px] tracking-[0.28px] w-[min-content]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px relative shrink-0">
      <MessageItem />
    </div>
  );
}

export default function AiTextBubble() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative size-full" data-name="Ai Text Bubble">
      <Group1 />
      <Frame1 />
    </div>
  );
}