import React, { useState } from 'react';
import { motion } from "motion/react";
import svgPaths from "../imports/svg-66wq6p6jwz";

// --- Icons ---
function Component() {
  return (
    <div className="h-[22px] relative shrink-0 w-[42px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 22">
        <g id="Component 2">
          <rect fill="var(--fill-0, #8318E7)" height="21" id="Rectangle 1" rx="10.5" stroke="var(--stroke-0, #27272A)" width="41" x="0.5" y="0.5" />
          <circle cx="31" cy="11" fill="var(--fill-0, white)" id="Ellipse 1" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Tick() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Tick">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Tick">
          <path clipRule="evenodd" d={svgPaths.p2b40a800} fill="var(--fill-0, #B774FC)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function CharmCross() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="charm:cross">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="charm:cross">
          <path d={svgPaths.p39d78000} id="Vector" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// --- Main Component ---
interface AvatarChatLanguageSettingsProps {
    onClose: () => void;
    subtitlesEnabled: boolean;
    setSubtitlesEnabled: (enabled: boolean) => void;
}

const LANGUAGES = [
    "English", "Hindi", "Telugu", "Hinglish", "Abkhaz", "Aborlan", "Abron", 
    "Acehnese", "Acholi", "Achomi", "Adamawa Fulfulde", "Adyghe", "Afar", 
    "Afrikaans", "Ahirani", "Ajagbe", "Akan", "Akoose", "Alas", "Alphabet"
];

export default function AvatarChatLanguageSettings({ onClose, subtitlesEnabled, setSubtitlesEnabled }: AvatarChatLanguageSettingsProps) {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    return (
        <div className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none">
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 backdrop-blur-[10px] backdrop-filter bg-[rgba(29,29,32,0.8)] pointer-events-auto"
                onClick={onClose}
            />

            {/* Content Container (Frame12) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="relative flex flex-col gap-[20px] items-center w-[353px] pointer-events-auto"
            >
                {/* Settings Card */}
                <div className="backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.8)] relative rounded-[24px] shrink-0 w-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.4)] overflow-hidden">
                    <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0)] border-solid inset-0 pointer-events-none rounded-[24px]" />
                    
                    <div className="size-full">
                        <div className="content-stretch flex flex-col gap-[30px] items-start pb-[20px] pt-[24px] px-[20px] relative w-full">
                            
                            {/* Subtitle Toggle Row */}
                            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer" onClick={() => setSubtitlesEnabled(!subtitlesEnabled)}>
                                <div className="flex flex-col font-['Urbanist',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[18px] text-nowrap tracking-[0.36px]">
                                    <p className="leading-[1.2]">Subtitle</p>
                                </div>
                                
                                {/* Toggle Switch */}
                                <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                                    <div className="h-[22px] relative shrink-0 w-[42px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 22">
                                            <rect 
                                                fill={subtitlesEnabled ? "#8318E7" : "#3f3f46"} 
                                                height="21" rx="10.5" 
                                                stroke="#27272A" width="41" x="0.5" y="0.5" 
                                                className="transition-colors duration-200"
                                            />
                                            <motion.circle 
                                                cx={subtitlesEnabled ? 31 : 11} 
                                                cy="11" r="10" fill="white" 
                                                animate={{ cx: subtitlesEnabled ? 31 : 11 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-['Urbanist',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#d0d0d4] text-[14px] text-nowrap tracking-[0.28px]">
                                        {subtitlesEnabled ? "On" : "Off"}
                                    </p>
                                </div>
                            </div>

                            {/* Language List */}
                            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Urbanist',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[18px] text-nowrap tracking-[0.36px]">
                                    <p className="leading-[1.2]">Select Your Language</p>
                                </div>
                                
                                <div className="content-stretch flex flex-col gap-[30px] h-[300px] items-start overflow-y-auto relative shrink-0 w-full pr-2 no-scrollbar">
                                    {LANGUAGES.map((lang) => {
                                        const isSelected = selectedLanguage === lang;
                                        return (
                                            <div 
                                                key={lang} 
                                                className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
                                                onClick={() => setSelectedLanguage(lang)}
                                            >
                                                <div className={`flex flex-col font-['Urbanist',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap tracking-[0.64px] ${isSelected ? 'text-[#b774fc]' : 'text-[#a1a1aa]'}`}>
                                                    <p className="leading-[1.2]">{lang}</p>
                                                </div>
                                                {isSelected && <Tick />}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Select Button */}
                            <button 
                                onClick={onClose}
                                className="backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0.9)] h-[48px] relative rounded-[32px] shrink-0 w-full hover:bg-white transition-colors active:scale-[0.98]"
                            >
                                <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
                                <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center px-[18px] py-[10px] relative size-full">
                                        <p className="font-['Urbanist',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1d1d20] text-[16px] text-nowrap tracking-[0.32px]">Select</p>
                                    </div>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>

                {/* Close (X) Button */}
                <button 
                    onClick={onClose}
                    className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px] hover:bg-white/10 transition-colors" 
                    style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}
                >
                    <div aria-hidden="true" className="absolute border border-[#3a3a3e] border-solid inset-0 pointer-events-none rounded-[32px]" />
                    <CharmCross />
                </button>
            </motion.div>
        </div>
    );
}