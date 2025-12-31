import React from 'react';

const svgPathsChatMode = {
  p2bd16d80: "M10.675 3.33083C10.4475 3.10333 10.08 3.10333 9.8525 3.33083L7 6.1775L4.1475 3.325C3.92 3.0975 3.5525 3.0975 3.325 3.325C3.0975 3.5525 3.0975 3.92 3.325 4.1475L6.1775 7L3.325 9.8525C3.0975 10.08 3.0975 10.4475 3.325 10.675C3.5525 10.9025 3.92 10.9025 4.1475 10.675L7 7.8225L9.8525 10.675C10.08 10.9025 10.4475 10.9025 10.675 10.675C10.9025 10.4475 10.9025 10.08 10.675 9.8525L7.8225 7L10.675 4.1475C10.8967 3.92583 10.8967 3.5525 10.675 3.33083Z",
  p3e28ebf0: "M6 1.00014C6.4315 1.00014 6.8505 1.05514 7.25 1.15764L7 2.12614C6.40884 1.97351 5.79057 1.95822 5.19258 2.08147C4.59459 2.20471 4.03275 2.46321 3.55011 2.83716C3.06747 3.21111 2.67684 3.69058 2.40815 4.23884C2.13947 4.7871 1.99985 5.38959 2 6.00014C2 6.66714 2.1625 7.30864 2.47 7.88314L2.645 8.20964L2.317 9.68314L3.7905 9.35565L4.11701 9.53065C4.69632 9.84012 5.34321 10.0014 6 10.0001C6.56556 10.0002 7.12468 9.88023 7.64049 9.64829C8.15629 9.41635 8.61705 9.07767 8.99236 8.65459C9.36766 8.23151 9.64899 7.73366 9.81777 7.19388C9.98655 6.6541 10.0389 6.08466 9.97151 5.52314L10.965 5.40514C10.9883 5.60014 11 5.79848 11 6.00014C11 8.76164 8.7615 11.0001 6 11.0001C5.17869 11.0013 4.36984 10.7993 3.6455 10.4121L1 11.0001L1.588 8.35464C1.20085 7.63031 0.998851 6.82146 1 6.00014C1 3.23864 3.2385 1.00014 6 1.00014ZM9.76501 0.660145C9.78394 0.613334 9.81643 0.573245 9.85829 0.545017C9.90016 0.516789 9.94951 0.501709 10 0.501709C10.0505 0.501709 10.0998 0.516789 10.1417 0.545017C10.1836 0.573245 10.2161 0.613334 10.235 0.660145L10.362 0.965145C10.5743 1.48268 10.9769 1.89911 11.487 2.12864L11.8455 2.28864C11.8914 2.30988 11.9303 2.34382 11.9575 2.38643C11.9847 2.42905 11.9992 2.47857 11.9992 2.52914C11.9992 2.57972 11.9847 2.62924 11.9575 2.67186C11.9303 2.71447 11.8914 2.7484 11.8455 2.76964L11.4665 2.93864C10.9688 3.1616 10.5728 3.56301 10.3565 4.06364L10.2335 4.34664C10.2143 4.39273 10.1819 4.43209 10.1403 4.45978C10.0988 4.48747 10.0499 4.50224 10 4.50224C9.95007 4.50224 9.90126 4.48747 9.85971 4.45978C9.81816 4.43209 9.78573 4.39273 9.76651 4.34664L9.643 4.06414C9.42697 3.56341 9.0311 3.16183 8.5335 2.93864L8.1535 2.76964C8.10746 2.74847 8.06846 2.71453 8.04112 2.67186C8.01378 2.62919 7.99925 2.57957 7.99925 2.52889C7.99925 2.47822 8.01378 2.4286 8.04112 2.38593C8.06846 2.34326 8.10746 2.30932 8.1535 2.28814L8.5125 2.12814C9.02261 1.89895 9.42543 1.4829 9.638 0.965645L9.76501 0.660145Z"
};

function RiChatAi3Line() {
  return (
    <div className="absolute left-1/2 size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ri:chat-ai-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="ri:chat-ai-3-line">
          <path d={svgPathsChatMode.p3e28ebf0} fill="var(--fill-0, #FFB1FF)" id="Vector" />
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

function ChatModeLabel({ label }: { label: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ChatModeItems12Px />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffb1ff] text-[11px] text-nowrap tracking-[0.22px]">
        {label}
      </p>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPathsChatMode.p2bd16d80} fill="var(--fill-0, #A1A1AA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function ChatModePill({ label = "Chat", onClose }: { label?: string, onClose?: () => void }) {
  return (
    <div className="bg-[rgba(255,177,255,0.1)] content-stretch flex gap-[10px] h-[28px] items-center justify-center px-[10px] py-[6px] relative rounded-[60px] shrink-0" data-name="Chat Modes">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,177,255,0.6)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <ChatModeLabel label={label} />
      <div onClick={(e) => { e.stopPropagation(); onClose?.(); }} className="cursor-pointer"><CloseIcon /></div>
    </div>
  );
}