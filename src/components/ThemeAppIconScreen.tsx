import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

interface ThemeAppIconScreenProps {
  onClose: () => void;
}

const themes = [
  { id: 'dark', name: 'Dark Grey', description: 'Classic dark theme', colors: ['#1A1A1C', '#2A2A2C', '#3A3A3C'] },
  { id: 'midnight', name: 'Midnight Blue', description: 'Deep blue tones', colors: ['#0D1B2A', '#1B263B', '#415A77'] },
  { id: 'forest', name: 'Forest Night', description: 'Dark green ambiance', colors: ['#1A2E1A', '#2D4A2D', '#406640'] },
  { id: 'plum', name: 'Plum Dark', description: 'Rich purple hues', colors: ['#1A0F1E', '#2E1A33', '#472952'] },
];

const appIcons = [
  { id: 'default', name: 'Default', emoji: '🌟' },
  { id: 'shopping', name: 'Shopping', emoji: '🛍️' },
  { id: 'sparkle', name: 'Sparkle', emoji: '✨' },
  { id: 'voice', name: 'Voice', emoji: '🎤' },
  { id: 'gradient', name: 'Gradient', emoji: '🌈' },
  { id: 'minimal', name: 'Minimal', emoji: '⚪' },
];

export default function ThemeAppIconScreen({ onClose }: ThemeAppIconScreenProps) {
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const [selectedIcon, setSelectedIcon] = useState('default');

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="absolute inset-0 z-[210] bg-[#1A1A1C] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2A2A2C]">
        <button 
          onClick={onClose}
          className="p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-lg">Theme & App Icon</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Theme Section */}
        <div className="p-5">
          <h2 className="text-[#999999] text-sm uppercase tracking-wider mb-4">App Theme</h2>
          <div className="space-y-3">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`w-full p-4 rounded-xl border transition-all ${
                  selectedTheme === theme.id
                    ? 'border-[#4A9EFF] bg-[#4A9EFF]/10'
                    : 'border-[#2A2A2C] bg-[#2A2A2C]/50 hover:bg-[#2A2A2C]'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Theme Preview */}
                  <div className="flex gap-1">
                    {theme.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-12 rounded"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  {/* Theme Info */}
                  <div className="flex-1 text-left">
                    <h3 className="text-white text-base mb-1">{theme.name}</h3>
                    <p className="text-[#999999] text-sm">{theme.description}</p>
                  </div>

                  {/* Check Mark */}
                  {selectedTheme === theme.id && (
                    <Check className="w-5 h-5 text-[#4A9EFF]" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* App Icon Section */}
        <div className="p-5 pt-0">
          <h2 className="text-[#999999] text-sm uppercase tracking-wider mb-4">App Icon</h2>
          <div className="grid grid-cols-3 gap-4">
            {appIcons.map((icon) => (
              <button
                key={icon.id}
                onClick={() => setSelectedIcon(icon.id)}
                className={`relative aspect-square rounded-2xl border-2 transition-all flex flex-col items-center justify-center p-4 ${
                  selectedIcon === icon.id
                    ? 'border-[#4A9EFF] bg-[#4A9EFF]/10'
                    : 'border-[#2A2A2C] bg-[#2A2A2C]/50 hover:bg-[#2A2A2C]'
                }`}
              >
                <div className="text-4xl mb-2">{icon.emoji}</div>
                <span className="text-white text-xs text-center">{icon.name}</span>
                
                {/* Check Badge */}
                {selectedIcon === icon.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#4A9EFF] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="p-5 pt-0 pb-8">
          <div className="bg-[#2A2A2C]/50 rounded-lg p-4">
            <p className="text-[#999999] text-sm leading-relaxed">
              Theme and icon changes will be applied immediately. You can change them anytime from Settings.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
