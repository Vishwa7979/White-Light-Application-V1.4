import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, ChevronRight } from 'lucide-react';

interface PersonalizeScreenProps {
  onClose: () => void;
}

export default function PersonalizeScreen({ onClose }: PersonalizeScreenProps) {
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [productSuggestions, setProductSuggestions] = useState(true);
  const [voiceHints, setVoiceHints] = useState(true);

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
        <h1 className="text-white text-lg">Personalize</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Voice Shopping Experience */}
        <div className="py-2">
          <SectionHeader title="Voice Shopping Experience" />
          
          <ToggleItem
            label="Voice-First Interface"
            description="Prioritize voice commands over visual UI"
            enabled={voiceEnabled}
            onToggle={() => setVoiceEnabled(!voiceEnabled)}
          />

          <ToggleItem
            label="Auto-Play Responses"
            description="Automatically play avatar voice responses"
            enabled={autoPlayEnabled}
            onToggle={() => setAutoPlayEnabled(!autoPlayEnabled)}
          />

          <ToggleItem
            label="Voice Hints"
            description="Show helpful voice command suggestions"
            enabled={voiceHints}
            onToggle={() => setVoiceHints(!voiceHints)}
          />
        </div>

        {/* Shopping Preferences */}
        <div className="mt-4">
          <SectionHeader title="Shopping Preferences" />
          
          <ToggleItem
            label="Smart Product Suggestions"
            description="Get personalized recommendations based on your taste"
            enabled={productSuggestions}
            onToggle={() => setProductSuggestions(!productSuggestions)}
          />

          <NavigationItem
            label="Favorite Categories"
            description="Handloom, Organic Cotton, Pottery"
          />

          <NavigationItem
            label="Size Preferences"
            description="Save your common sizes"
          />

          <NavigationItem
            label="Budget Range"
            description="Set your preferred price range"
          />
        </div>

        {/* Privacy & Data */}
        <div className="mt-4">
          <SectionHeader title="Privacy & Data" />
          
          <NavigationItem
            label="Voice Recording Storage"
            description="Manage your voice data"
          />

          <NavigationItem
            label="Shopping History"
            description="Control what we remember"
          />

          <NavigationItem
            label="Clear Preferences"
            description="Reset all personalization"
            danger
          />
        </div>

        {/* Note */}
        <div className="p-5 pb-8">
          <div className="bg-[#2A2A2C]/50 rounded-lg p-4">
            <p className="text-[#999999] text-sm leading-relaxed">
              Personalization helps WhiteLight understand your shopping style and provide better recommendations through voice conversations.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="px-5 py-3">
      <h3 className="text-[#666666] text-sm uppercase tracking-wider">{title}</h3>
    </div>
  );
}

function ToggleItem({ 
  label, 
  description, 
  enabled, 
  onToggle 
}: { 
  label: string; 
  description: string; 
  enabled: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="w-full px-5 py-4 flex items-start gap-3 border-b border-[#2A2A2C]/50">
      <div className="flex-1">
        <h4 className="text-white text-base mb-1">{label}</h4>
        <p className="text-[#999999] text-sm">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative w-12 h-7 rounded-full transition-colors flex-shrink-0 mt-1 ${
          enabled ? 'bg-[#4A9EFF]' : 'bg-[#3A3A3C]'
        }`}
      >
        <motion.div
          initial={false}
          animate={{ x: enabled ? 20 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute top-1 w-5 h-5 rounded-full bg-white"
        />
      </button>
    </div>
  );
}

function NavigationItem({ 
  label, 
  description, 
  danger = false 
}: { 
  label: string; 
  description: string; 
  danger?: boolean;
}) {
  return (
    <button className="w-full px-5 py-4 flex items-start gap-3 hover:bg-white/5 transition-colors border-b border-[#2A2A2C]/50">
      <div className="flex-1 text-left">
        <h4 className={`text-base mb-1 ${danger ? 'text-red-500' : 'text-white'}`}>
          {label}
        </h4>
        <p className="text-[#999999] text-sm">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-[#666666] flex-shrink-0 mt-1" />
    </button>
  );
}
