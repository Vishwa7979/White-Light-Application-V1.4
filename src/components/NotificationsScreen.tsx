import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Trash2 } from 'lucide-react@0.487.0';
import svgPaths from "../imports/svg-kbhwncfmnc";

// Notification type
interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  borderColor: string;
  hasRedDot: boolean;
  isRead: boolean;
}

// Mock notifications data
const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Task Status Updated",
    description: "The status of your ongoing task has been changed.",
    time: "Today",
    borderColor: "#ff8337",
    hasRedDot: true,
    isRead: false
  },
  {
    id: 2,
    title: "Deadline Approaching",
    description: "Your task deadline is coming soon — please complete it on time.",
    time: "Yesterday",
    borderColor: "#e53b3f",
    hasRedDot: true,
    isRead: false
  },
  {
    id: 3,
    title: "New Task Assigned",
    description: "You have a new task waiting for your attention.",
    time: "Yesterday",
    borderColor: "#65b0fb",
    hasRedDot: true,
    isRead: false
  },
  {
    id: 4,
    title: "Task Status Updated",
    description: "The status of your ongoing task has been changed.",
    time: "2d",
    borderColor: "#1d1d1d",
    hasRedDot: false,
    isRead: true
  },
  {
    id: 5,
    title: "New Task Assigned",
    description: "You have a new task waiting for your attention.",
    time: "2d",
    borderColor: "#1d1d1d",
    hasRedDot: false,
    isRead: true
  },
  {
    id: 6,
    title: "Deadline Approaching",
    description: "Your task deadline is coming soon — please complete it on time.",
    time: "3d",
    borderColor: "#1d1d1d",
    hasRedDot: false,
    isRead: true
  },
  {
    id: 7,
    title: "New Task Assigned",
    description: "You have a new task waiting for your attention.",
    time: "3d",
    borderColor: "#1d1d1d",
    hasRedDot: false,
    isRead: true
  },
  {
    id: 8,
    title: "Task Status Updated",
    description: "The status of your ongoing task has been changed.",
    time: "4d",
    borderColor: "#1d1d1d",
    hasRedDot: false,
    isRead: true
  }
];

// Shield icon component
function BiShieldLock({ isRead }: { isRead: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bi:shield-lock">
      <div className="absolute inset-[0_6.25%]" data-name="Group">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
          <g id="Group">
            <path d={svgPaths.pc36e440} fill={isRead ? "#A1A1AA" : "#F4F4F5"} id="Vector" />
            <path d={svgPaths.p37432000} fill="#27272A" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Status bar component
function StatusBarIPhone() {
  return (
    <div className="content-stretch flex h-[50px] items-center justify-between relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-full" data-name="Status Bar - iPhone 16">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative shrink-0" data-name="Time">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          9:41
        </p>
      </div>
      <div className="h-[50px] relative shrink-0 w-[125.67px]" data-name="Levels">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 50">
          <g id="Levels">
            <path clipRule="evenodd" d={svgPaths.p3d06d400} fill="white" fillRule="evenodd" id="Cellular Connection" />
            <path clipRule="evenodd" d={svgPaths.p13765300} fill="white" fillRule="evenodd" id="Wifi" />
            <g id="Battery">
              <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="white" width="24" x="74.8417" y="19" />
              <path d={svgPaths.p29d1d6c0} fill="white" id="Cap" opacity="0.4" />
              <rect fill="white" height="9" id="Capacity" rx="2.5" width="21" x="76.3417" y="20.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

// Home indicator
function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[20px] left-0 opacity-20 w-full" data-name="Home Indicator">
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[139px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-white h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

interface NotificationsScreenProps {
  onBack: () => void;
}

export default function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [swipedId, setSwipedId] = useState<number | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  const handleSwipe = (id: number) => {
    setSwipedId(swipedId === id ? null : id);
  };

  const handleDeleteClick = (id: number) => {
    setDeleteConfirmId(id);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmId !== null) {
      setNotifications(notifications.filter(n => n.id !== deleteConfirmId));
      setDeleteConfirmId(null);
      setSwipedId(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmId(null);
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="bg-black relative w-full h-full overflow-hidden flex flex-col" data-name="Notifications Screen">
      {/* Background */}
      <div className="absolute h-full left-0 top-0 w-full bg-[#121212]" />
      
      {/* Page Header */}
      <div 
        className="backdrop-blur-[30px] backdrop-filter content-stretch flex flex-col gap-[10px] h-[120px] items-start w-full z-30 shrink-0" 
        data-name="Page Headers - Dark" 
        style={{ backgroundImage: "linear-gradient(73.5203deg, rgba(0, 0, 0, 0) 0.37632%, rgba(29, 29, 29, 0.6) 100%)" }}
      >
        <div aria-hidden="true" className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <StatusBarIPhone />
        
        {/* Header content */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[20px] py-0 relative w-full">
              {/* Back button and title */}
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <button 
                  onClick={onBack}
                  className="backdrop-blur-[21px] backdrop-filter content-stretch flex items-center justify-center p-[10px] relative rounded-[32px] shrink-0 size-[40px] hover:bg-white/10 transition-colors"
                  style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.9 2.2 -4.2966 -5.6638 20 20)\\'><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(19,19,19,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
                >
                  <div aria-hidden="true" className="absolute border border-[#1d1d1d] border-solid inset-0 pointer-events-none rounded-[32px]" />
                  <ChevronLeft className="size-[20px] text-[#EAEAEA]" />
                </button>
                <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.32px]">
                  <p className="leading-[1.2]">Notifications</p>
                </div>
              </div>
              
              {/* Clear All button */}
              <button 
                onClick={handleClearAll}
                className="content-stretch flex gap-[4px] items-center relative shrink-0 hover:opacity-80 transition-opacity"
              >
                <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px]">Clear All</p>
                <div className="relative shrink-0 size-[16px]" data-name="ep:arrow-up-bold">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="ep:arrow-up-bold">
                      <path d={svgPaths.p2eb34630} fill="white" id="Vector" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto w-full px-[20px] pt-[20px] pb-[20px] relative z-10">
        <div className="content-stretch flex flex-col gap-[20px] items-end w-full">
          <AnimatePresence>
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full"
              >
                {/* Notification Card */}
                <motion.div 
                  className="backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.6)] relative rounded-[16px] shrink-0 w-full cursor-pointer"
                  animate={{ x: swipedId === notification.id ? -70 : 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  onClick={() => !notification.isRead && handleSwipe(notification.id)}
                >
                  <div 
                    aria-hidden="true" 
                    className="absolute border border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]" 
                    style={{ borderColor: notification.borderColor }}
                  />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[14px] items-center pl-[14px] pr-[20px] py-[14px] relative w-full">
                      {/* Icon */}
                      <div className="bg-[#27272a] content-stretch flex gap-[10px] items-center p-[9px] relative rounded-[10px] shrink-0 size-[42px]">
                        {notification.hasRedDot && (
                          <div className="absolute bg-[#ff4246] right-[-2px] rounded-[50px] size-[9px] top-[-2px]" />
                        )}
                        <BiShieldLock isRead={notification.isRead} />
                      </div>
                      
                      {/* Content */}
                      <div className="basis-0 content-stretch flex gap-[11px] grow items-start leading-[1.2] min-h-px min-w-px relative shrink-0">
                        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
                          <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#f4f4f5] text-[14px] text-nowrap tracking-[0.28px]">{notification.title}</p>
                          <p className="font-['Urbanist:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9b9b9b] text-[11px] tracking-[0.22px] w-[min-content]">{notification.description}</p>
                        </div>
                        <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#a1a1aa] text-[11px] text-right tracking-[0.22px] w-[52px]">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Delete Button (revealed on swipe) */}
                <AnimatePresence>
                  {swipedId === notification.id && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => handleDeleteClick(notification.id)}
                      className="bg-[#27272a] content-stretch flex h-[77px] items-center justify-center px-[10px] py-[26px] relative rounded-[16px] shrink-0 w-[62px]"
                    >
                      <Trash2 className="size-[22px] text-[#FA423E]" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirmId !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute backdrop-blur-[10px] backdrop-filter bg-[rgba(29,29,32,0.4)] h-full left-0 top-0 w-full z-40"
              onClick={handleCancelDelete}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(39,39,42,0.8)] bottom-[40px] left-[20px] right-[20px] max-w-[353px] mx-auto content-stretch flex flex-col gap-[40px] items-start p-[20px] rounded-[24px] z-50"
            >
              <div aria-hidden="true" className="absolute border border-[rgba(78,78,78,0)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.4)]" />
              
              {/* Title and description */}
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[18px] text-nowrap tracking-[0.36px]">
                  <p className="leading-[1.2]">Delete Notification</p>
                </div>
                <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#d7d7d7] text-[14px] tracking-[0.28px] w-[min-content]">Are you sure you want to delete this notification? This action cannot be undone.</p>
              </div>
              
              {/* Buttons */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <button 
                  onClick={handleConfirmDelete}
                  className="backdrop-blur-[10px] backdrop-filter bg-[#fa423e] content-stretch flex h-[48px] items-center justify-center px-[18px] py-[10px] relative rounded-[32px] shrink-0 w-[146px] hover:bg-[#e53b3f] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[32px]" />
                  <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.32px]">Delete</p>
                </button>
                <button 
                  onClick={handleCancelDelete}
                  className="backdrop-blur-[21px] backdrop-filter bg-[#1d1d20] content-stretch flex h-[48px] items-center justify-center p-[10px] relative rounded-[32px] shrink-0 w-[146px] hover:bg-[#2d2d30] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#3a3a3e] border-solid inset-0 pointer-events-none rounded-[32px]" />
                  <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#eaeaea] text-[16px] text-nowrap tracking-[0.32px]">Cancel</p>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <HomeIndicator />
    </div>
  );
}