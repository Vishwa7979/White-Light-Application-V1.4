import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { cn } from '../lib/utils';
import svgPaths from "../imports/svg-daopcfy9pg";
import imgAvatar1 from "figma:asset/015a2733c87f2e600867b918318403a5ac78676e.png";
import imgAvatar2 from "figma:asset/f217a3d5d0fea0ef1770221a2a71a20c10be6689.png";
import imgAvatar3 from "figma:asset/df39310782883a5e9136564008a69a1d0fca6b86.png";
import imgRoamie from "figma:asset/a991af8d0f9705a68889e044a39e85ff09b980a6.png";
import CustomAvatarCreationScreen from './CustomAvatarCreationScreen';
import { User, Plus } from 'lucide-react';

// --- Types & Data ---

type AvatarData = {
  id: string;
  name: string;
  voice: string;
  emoji: string;
  image: string;
  imgClass: string;
  imgWrapperClass?: string;
  isCustom?: boolean;
};

// Function to get custom avatar from localStorage
export const getCustomAvatar = (): AvatarData | null => {
  const customAvatarData = localStorage.getItem('customAvatar');
  if (customAvatarData) {
    try {
      const data = JSON.parse(customAvatarData);
      return {
        id: 'custom',
        name: 'You',
        voice: 'Your unique voice',
        emoji: '✨',
        image: data.photoUrl,
        imgClass: 'absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[30px] size-full',
        isCustom: true
      };
    } catch (e) {
      return null;
    }
  }
  return null;
};

export const avatars: AvatarData[] = [
  {
    id: 'emma',
    name: 'Emma',
    voice: 'Warm & friendly voice',
    emoji: '😊',
    image: imgAvatar1,
    imgClass: 'absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[30px] size-full'
  },
  {
    id: 'alex',
    name: 'Alex',
    voice: 'Professional & clear voice',
    emoji: '👓',
    image: imgAvatar2,
    imgClass: 'absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[30px] size-full'
  },
  {
    id: 'noah',
    name: 'Noah',
    voice: 'Energetic & enthusiastic voice',
    emoji: '🎯',
    image: imgAvatar3,
    imgClass: 'absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[30px] size-full'
  },
  {
    id: 'roamie',
    name: 'Roamie',
    voice: 'High-pitched & bright voice',
    emoji: '👋',
    image: imgRoamie,
    imgClass: 'absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full'
  }
];

export type { AvatarData };

// --- Sub-components ---

function Bg() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" data-name="bg">
      <div className="absolute bg-[#121212] w-full h-full left-0 top-0" />
    </div>
  );
}

function Time() {
  return (
    <div className="flex items-center justify-center px-[24px] py-[14px] shrink-0" data-name="Time">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] shrink-0 text-[17px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="flex h-[50px] items-center justify-between shrink-0 w-full" data-name="Status Bar - iPhone 16">
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
    <div className="backdrop-blur-[21px] backdrop-filter flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px]" data-name="Planner" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\\'><stop stop-color=\\\'rgba(38,38,38,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(19,19,19,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
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
    <div className="flex gap-[14px] items-center shrink-0">
      <Planner />
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.2]">Select Avatar</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="flex gap-[14px] items-center px-[20px] py-0 w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function PageHeadersDark() {
  return (
    <div className="flex flex-col gap-[10px] w-full shrink-0 z-20" data-name="Page Headers - Dark">
      <StatusBarIPhone />
      <Frame3 />
    </div>
  );
}

// Reusable card component adapted for Flex layout
function AvatarCardSlide({ avatar, onClick }: { avatar: AvatarData, onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-full rounded-[30px] overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
      data-name="Avatar Selection Frame"
    >
      {/* Image Container */}
      {avatar.imgWrapperClass ? (
        <div className={avatar.imgWrapperClass}>
          <img alt={avatar.name} className={avatar.imgClass} src={avatar.image} />
        </div>
      ) : (
        <img alt={avatar.name} className={avatar.imgClass} src={avatar.image} />
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none rounded-[30px] border border-[rgba(123,123,123,0.2)]"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 64.003%, rgba(0, 0, 0, 0.42) 72.554%, rgba(11, 10, 10, 0.7) 100%)" }}
      />

      {/* Info overlaid at bottom of card */}
      <div className="absolute bottom-[40px] left-0 right-0 flex flex-col gap-[10px] items-center text-center z-10 px-4">
        <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[1.2] text-[#fcfcfc] text-[20px] tracking-[0.4px] w-full drop-shadow-md">
          <p className="mb-0 text-[24px]">{avatar.emoji}</p>
          <p>Hey! I am {avatar.name}</p>
        </div>
        <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center text-[#f4f4f5] text-[16px] tracking-[0.32px] w-full opacity-90">
          <p className="leading-[1.2]">{avatar.voice}</p>
        </div>
      </div>
    </div>
  );
}

// Create Your Avatar placeholder slide
function CreateAvatarSlide({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-full rounded-[30px] overflow-hidden cursor-pointer hover:opacity-95 transition-opacity bg-gradient-to-br from-[#1d1d20] via-[#2d2d30] to-[#1d1d20]"
      data-name="Create Avatar Frame"
    >
      {/* Border */}
      <div className="absolute inset-0 rounded-[30px] border-2 border-dashed border-[#4D6DF6]/50" />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none rounded-[30px]"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 64.003%, rgba(0, 0, 0, 0.42) 72.554%, rgba(11, 10, 10, 0.7) 100%)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4D6DF6] to-[#7B3FF2] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4D6DF6] to-[#7B3FF2] animate-pulse opacity-50" />
          <Plus className="w-12 h-12 text-white relative z-10" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="font-['Sora:Bold',sans-serif] font-bold text-[#fcfcfc] text-[24px] tracking-[0.4px] drop-shadow-md">
            Create Your Avatar
          </p>
          <p className="font-['Urbanist:Regular',sans-serif] font-normal text-[#f4f4f5] text-[14px] tracking-[0.32px] opacity-90 max-w-xs">
            Upload your photo & record your voice for a personalized experience
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1({ activeIndex, total, onDotClick }: { activeIndex: number, total: number, onDotClick: (index: number) => void }) {
  return (
    <div className="flex gap-[6px] items-center justify-center py-2 shrink-0 z-20">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`h-[4px] rounded-[20px] shrink-0 transition-all duration-300 cursor-pointer hover:opacity-80 ${i === activeIndex ? 'bg-white w-[24px]' : 'bg-[#3f4b5a] w-[14px]'}`}
        />
      ))}
    </div>
  );
}

function SelectButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative backdrop-blur-[21px] backdrop-filter bg-[#1d1d20] flex h-[48px] items-center justify-center w-full p-[10px] rounded-[32px] hover:bg-[#2d2d30] transition-colors cursor-pointer z-30 active:scale-95 shrink-0"
    >
      <div aria-hidden="true" className="absolute border border-[#3a3a3e] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#eaeaea] text-[16px] text-nowrap tracking-[0.32px]">Select</p>
    </button>
  );
}

function HomeIndicator() {
  return (
    <div className="w-full h-[20px] flex items-end justify-center pb-[8px] opacity-20 z-30 pointer-events-none shrink-0" data-name="Home Indicator">
      <div className="bg-white h-[5px] rounded-[100px] w-[139px]" />
    </div>
  );
}

const SlickStyles = () => (
  <style>{`
    .slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
    .slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0;height:100%;}
    .slick-list:focus{outline:none}
    .slick-list.dragging{cursor:pointer;cursor:hand}
    .slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
    .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto;height:100%;}
    .slick-track:before,.slick-track:after{display:table;content:''}
    .slick-track:after{clear:both}
    .slick-loading .slick-track{visibility:hidden}
    .slick-slide{display:none;float:left;height:100%;min-height:1px}
    [dir='rtl'] .slick-slide{float:right}
    .slick-slide img{display:block}
    .slick-slide.slick-loading img{display:none}
    .slick-slide.slick-dragging img{pointer-events:none}
    .slick-initialized .slick-slide{display:block}
    .slick-loading .slick-slide{visibility:hidden}
    .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
    .slick-arrow.slick-hidden{display:none}
    
    /* Ensure the slider and its children take full height */
    .slick-slider, .slick-list, .slick-track, .slick-slide, .slick-slide > div {
      height: 100%;
    }
  `}</style>
);

export default function AvatarSelectionScreen({ onSelect }: { onSelect: (avatarImage: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCustomCreation, setShowCustomCreation] = useState(false);
  const [allAvatars, setAllAvatars] = useState<AvatarData[]>([]);
  const sliderRef = useRef<Slider>(null);

  // Load avatars on mount
  React.useEffect(() => {
    const customAvatar = getCustomAvatar();
    const avatarsList = [...avatars];
    if (customAvatar) {
      // If custom avatar exists, add it to the list
      avatarsList.push(customAvatar);
    }
    setAllAvatars(avatarsList);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => setCurrentIndex(newIndex),
  };

  const handleDotClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const handleCreateCustom = (photoUrl: string, voiceBlob: Blob) => {
    // Save custom avatar data to localStorage
    const customAvatarData = {
      photoUrl,
      voiceBlob: URL.createObjectURL(voiceBlob), // Store as URL for now
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('customAvatar', JSON.stringify(customAvatarData));

    // Add custom avatar to the list
    const customAvatar: AvatarData = {
      id: 'custom',
      name: 'You',
      voice: 'Your unique voice',
      emoji: '✨',
      image: photoUrl,
      imgClass: 'absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[30px] size-full',
      isCustom: true
    };

    setAllAvatars([...avatars, customAvatar]);
    setShowCustomCreation(false);

    // Navigate to the new custom avatar slide
    setTimeout(() => {
      sliderRef.current?.slickGoTo(avatars.length);
    }, 100);

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('customAvatarCreated', { detail: { avatar: customAvatar } }));
  };

  const handleSelect = () => {
    const isCreateNewSlide = currentIndex === allAvatars.length;

    if (isCreateNewSlide) {
      // Open custom avatar creation screen
      setShowCustomCreation(true);
    } else {
      const selectedAvatar = allAvatars[currentIndex];
      // Save to localStorage for use in other screens
      localStorage.setItem('selectedAvatar', selectedAvatar.id);
      // Dispatch custom event for same-tab updates
      window.dispatchEvent(new CustomEvent('avatarChanged', { detail: { avatarId: selectedAvatar.id } }));
      // Also pass the image to the parent component
      onSelect(selectedAvatar.image);
    }
  };

  return (
    <>
      {showCustomCreation && (
        <CustomAvatarCreationScreen
          onComplete={handleCreateCustom}
          onClose={() => setShowCustomCreation(false)}
        />
      )}

      <div className="flex flex-col h-full w-full bg-black relative overflow-hidden" data-name="Dark - Greys">
        <SlickStyles />
        <Bg />

        {/* Header - Fixed at Top */}
        <PageHeadersDark />

        {/* Main Content Area - Flexible */}
        <div className="flex-1 min-h-0 w-full px-5 py-4 z-10">
          <Slider ref={sliderRef} {...settings}>
            {allAvatars.map((avatar) => (
              <div key={avatar.id} className="h-full outline-none px-1">
                <AvatarCardSlide avatar={avatar} onClick={handleSelect} />
              </div>
            ))}
            {/* Add Create Avatar Slide if no custom avatar exists */}
            {!allAvatars.some(a => a.isCustom) && (
              <div key="create-avatar" className="h-full outline-none px-1">
                <CreateAvatarSlide onClick={handleSelect} />
              </div>
            )}
          </Slider>
        </div>

        {/* Footer Controls - Fixed at Bottom */}
        <div className="flex flex-col gap-4 px-5 pb-2 shrink-0 z-30 w-full">
          <Frame1 activeIndex={currentIndex} total={allAvatars.length + (!allAvatars.some(a => a.isCustom) ? 1 : 0)} onDotClick={handleDotClick} />
          <SelectButton onClick={handleSelect} />
        </div>

        <HomeIndicator />
      </div>
    </>
  );
}