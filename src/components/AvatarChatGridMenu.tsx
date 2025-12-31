import React from 'react';
import { motion } from "motion/react";
import svgPaths from "./svg-jvnabewr2l";

// --- Icons ---

function HeroiconsDocument() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="heroicons:document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heroicons:document">
          <path d={svgPaths.p30523180} id="Vector" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BasilCameraOutline() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="basil:camera-outline">
        <div className="absolute inset-[8.33%_4.17%_12.5%_4.17%]" data-name="Group">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
                <g id="Group">
                <path clipRule="evenodd" d={svgPaths.p19645e00} fill="#A1A1AA" fillRule="evenodd" id="Vector" />
                <path clipRule="evenodd" d={svgPaths.p1c8ccd30} fill="#A1A1AA" fillRule="evenodd" id="Vector_2" />
                </g>
            </svg>
        </div>
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="upload 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_8_614)" id="upload 2">
          <path clipRule="evenodd" d={svgPaths.pfa91c00} fill="#A1A1AA" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_614">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Scan1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="scan 1">
        <div className="absolute inset-[6.25%]" data-name="Scan">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <g id="Scan">
                <path d={svgPaths.p91d1550} fill="#A1A1AA" id="Vector" />
                <path d={svgPaths.p8da4000} fill="#A1A1AA" id="Vector_2" />
                <path d={svgPaths.p3ec6d400} fill="#A1A1AA" id="Vector_3" />
                <path d={svgPaths.p5c62580} fill="#A1A1AA" id="Vector_4" />
                <path d={svgPaths.p36c75c00} fill="#A1A1AA" id="Vector_5" />
                </g>
            </svg>
        </div>
    </div>
  );
}

function HugeiconsGoogleDrive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="hugeicons:google-drive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="hugeicons:google-drive">
          <path d={svgPaths.p38064800} id="Vector" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit (2) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit (2) 1">
          <path d={svgPaths.p30911880} fill="#A1A1AA" id="Vector" />
          <path d={svgPaths.p3fbab680} fill="#A1A1AA" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

// --- Grid Item Component ---

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  }
};

function GridItem({ icon: Icon, label, onClick }: { icon: React.ComponentType, label: string, onClick?: () => void }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="relative rounded-[24px] w-full aspect-[104/100] group cursor-pointer overflow-visible" 
      style={{ backgroundImage: "linear-gradient(118.512deg, rgba(20, 20, 21, 0.95) 47.794%, rgba(23, 27, 28, 0.95) 100%)" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
       {/* Gradient Border Overlay */}
       <div 
          aria-hidden="true" 
          className="absolute inset-0 rounded-[24px] pointer-events-none"
          style={{
             padding: '1px',
             background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(77,109,246,0.5) 26%, rgba(255,177,255,0.15) 53%, rgba(124,46,144,0.15) 78%, rgba(216,255,111,0.5) 100%)',
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'exclude',
             WebkitMaskComposite: 'xor'
          }}
       />
       
       {/* Content */}
       <div className="flex flex-col justify-center size-full">
         <div className="content-stretch flex flex-col gap-[15px] items-start justify-center px-[16px] py-[10px] relative size-full">
            <Icon />
            <p className="font-['Urbanist:Light',sans-serif] font-light leading-[1.2] relative shrink-0 text-[#e1e1e2] text-[12px] text-nowrap tracking-[0.24px] group-hover:text-white transition-colors">{label}</p>
         </div>
       </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function AvatarChatGridMenu({ onSelect }: { onSelect?: (label: string) => void }) {
  // Reorder: Media first, Document third
  const items = [
    { icon: Upload, label: "Media" },
    { icon: BasilCameraOutline, label: "Camera" },
    { icon: HeroiconsDocument, label: "Document" },
    { icon: Scan1, label: "Scan" },
    { icon: HugeiconsGoogleDrive, label: "Google Drive" },
    { icon: Edit, label: "Add Manual" },
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 gap-[12px] w-full justify-items-center"
    >
       {items.map((item, index) => (
         <GridItem key={index} icon={item.icon} label={item.label} onClick={() => onSelect?.(item.label)} />
       ))}
    </motion.div>
  );
}