import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { avatars, getCustomAvatar, type AvatarData } from './AvatarSelectionScreen';

type AppState = 'listening' | 'thinking' | 'responding';

interface AvatarInlayProps {
  state?: AppState;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size?: 'small' | 'medium' | 'large';
}

export function AvatarInlay({ 
  state = 'listening', 
  position = 'bottom-right',
  size = 'medium' 
}: AvatarInlayProps) {
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarData>(avatars[0]);

  // Load selected avatar from localStorage
  useEffect(() => {
    const loadAvatar = () => {
      const savedAvatarId = localStorage.getItem('selectedAvatar');
      if (savedAvatarId) {
        // First check if it's a custom avatar
        if (savedAvatarId === 'custom') {
          const customAvatar = getCustomAvatar();
          if (customAvatar) {
            setSelectedAvatar(customAvatar);
            return;
          }
        }
        // Otherwise load from standard avatars
        const avatar = avatars.find(a => a.id === savedAvatarId);
        if (avatar) {
          setSelectedAvatar(avatar);
        }
      }
    };

    // Load on mount
    loadAvatar();

    // Listen for storage changes (cross-tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'selectedAvatar' || e.key === 'customAvatar') {
        loadAvatar();
      }
    };

    // Listen for custom event (same-tab)
    const handleAvatarChange = (e: Event) => {
      loadAvatar();
    };
    
    // Listen for custom avatar created event
    const handleCustomAvatarCreated = (e: Event) => {
      loadAvatar();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('avatarChanged', handleAvatarChange);
    window.addEventListener('customAvatarCreated', handleCustomAvatarCreated);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('avatarChanged', handleAvatarChange);
      window.removeEventListener('customAvatarCreated', handleCustomAvatarCreated);
    };
  }, []);

  const sizeClasses = {
    small: 'size-[80px]',
    medium: 'size-[100px]',
    large: 'size-[120px]'
  };

  const positionClasses = {
    'bottom-right': 'bottom-[140px] right-[20px]',
    'bottom-left': 'bottom-[140px] left-[20px]',
    'top-right': 'top-[140px] right-[20px]',
    'top-left': 'top-[140px] left-[20px]'
  };

  const getGlowColor = () => {
    switch (state) {
      case 'listening':
        return 'rgba(20, 184, 166, 0.4)'; // teal
      case 'thinking':
        return 'rgba(168, 85, 247, 0.5)'; // purple
      case 'responding':
        return 'rgba(59, 130, 246, 0.5)'; // blue
      default:
        return 'rgba(81, 124, 208, 0.3)';
    }
  };

  const getPulseAnimation = () => {
    if (state === 'thinking') {
      return {
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0]
      };
    } else if (state === 'responding') {
      return {
        scale: [1, 1.02, 1]
      };
    }
    return {};
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} z-40 pointer-events-none`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        ...getPulseAnimation()
      }}
      transition={{ 
        opacity: { duration: 0.3 },
        scale: state === 'thinking' ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }}
    >
      {/* Outer glow ring */}
      <motion.div
        className={`absolute inset-0 ${sizeClasses[size]} rounded-full`}
        animate={{
          boxShadow: [
            `0 0 0 0 ${getGlowColor()}`,
            `0 0 0 8px ${getGlowColor().replace('0.4', '0').replace('0.5', '0')}`,
            `0 0 0 0 ${getGlowColor()}`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Avatar container */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden`}>
        {/* Border */}
        <motion.div
          className="absolute inset-0 rounded-full border-[3px]"
          animate={{
            borderColor: state === 'listening' 
              ? '#14b8a6' 
              : state === 'thinking' 
              ? '#a855f7' 
              : '#3b82f6'
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Avatar image */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden">
          <img 
            src={selectedAvatar.image} 
            alt={selectedAvatar.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* State indicator */}
        <motion.div
          className="absolute bottom-[6px] right-[6px] size-[16px] rounded-full border-2 border-[#1a1a1a]"
          animate={{
            backgroundColor: state === 'listening' 
              ? '#14b8a6' 
              : state === 'thinking' 
              ? '#a855f7' 
              : '#3b82f6'
          }}
          transition={{ duration: 0.3 }}
        >
          {state === 'thinking' && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <div className="size-[8px] border-2 border-white border-t-transparent rounded-full" />
            </motion.div>
          )}
        </motion.div>

        {/* Listening wave animation */}
        {state === 'listening' && (
          <motion.div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute size-[40%] rounded-full bg-teal-400"
              animate={{
                scale: [0, 1.5],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Avatar name label (optional) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <div className="backdrop-blur-[10px] bg-[rgba(0,0,0,0.6)] px-[10px] py-[4px] rounded-[8px]">
          <p className="font-['Urbanist:Medium',sans-serif] text-[11px] text-white">
            {selectedAvatar.name}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}