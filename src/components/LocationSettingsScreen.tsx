import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, MapPin, Navigation, Check } from 'lucide-react';

interface LocationSettingsScreenProps {
  onClose: () => void;
}

const savedAddresses = [
  {
    id: 'home',
    label: 'Home',
    address: '123 Main Street, Apartment 4B',
    city: 'Mumbai, Maharashtra 400001',
    isDefault: true
  },
  {
    id: 'work',
    label: 'Work',
    address: 'Tech Park, Building A, Floor 5',
    city: 'Bangalore, Karnataka 560001',
    isDefault: false
  },
];

export default function LocationSettingsScreen({ onClose }: LocationSettingsScreenProps) {
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [autoDetect, setAutoDetect] = useState(true);
  const [defaultAddress, setDefaultAddress] = useState('home');

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
        <h1 className="text-white text-lg">Location</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Location Services */}
        <div className="py-2">
          <SectionHeader title="Location Services" />
          
          <ToggleItem
            label="Enable Location"
            description="Allow WhiteLight to access your location"
            enabled={locationEnabled}
            onToggle={() => setLocationEnabled(!locationEnabled)}
          />

          <ToggleItem
            label="Auto-Detect Location"
            description="Automatically detect your current location"
            enabled={autoDetect}
            onToggle={() => setAutoDetect(!autoDetect)}
          />
        </div>

        {/* Current Location */}
        <div className="p-5">
          <button className="w-full p-4 bg-[#2A2A2C]/50 hover:bg-[#2A2A2C] rounded-xl border border-[#2A2A2C] transition-colors flex items-center gap-3">
            <div className="w-12 h-12 bg-[#4A9EFF]/20 rounded-full flex items-center justify-center">
              <Navigation className="w-6 h-6 text-[#4A9EFF]" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-white text-base mb-1">Use Current Location</h3>
              <p className="text-[#999999] text-sm">Mumbai, Maharashtra</p>
            </div>
          </button>
        </div>

        {/* Saved Addresses */}
        <div className="mt-2">
          <SectionHeader title="Saved Addresses" />
          
          {savedAddresses.map((address) => (
            <button
              key={address.id}
              onClick={() => setDefaultAddress(address.id)}
              className="w-full px-5 py-4 flex items-start gap-3 hover:bg-white/5 transition-colors border-b border-[#2A2A2C]/50"
            >
              <div className="w-10 h-10 bg-[#2A2A2C] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#4A9EFF]" />
              </div>
              
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-white text-base">{address.label}</h4>
                  {address.id === defaultAddress && (
                    <span className="px-2 py-0.5 bg-[#4A9EFF]/20 text-[#4A9EFF] text-xs rounded">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-[#999999] text-sm mb-1">{address.address}</p>
                <p className="text-[#666666] text-sm">{address.city}</p>
              </div>

              {address.id === defaultAddress && (
                <Check className="w-5 h-5 text-[#4A9EFF] flex-shrink-0 mt-2" />
              )}
            </button>
          ))}

          <button className="w-full px-5 py-4 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors border-b border-[#2A2A2C]/50">
            <span className="text-[#4A9EFF] text-base">+ Add New Address</span>
          </button>
        </div>

        {/* Delivery Preferences */}
        <div className="mt-4">
          <SectionHeader title="Delivery Preferences" />
          
          <div className="px-5 pb-4">
            <button className="w-full p-4 bg-[#2A2A2C]/50 hover:bg-[#2A2A2C] rounded-xl border border-[#2A2A2C] transition-colors text-left">
              <h4 className="text-white text-base mb-1">Preferred Delivery Time</h4>
              <p className="text-[#999999] text-sm">Evening (6 PM - 9 PM)</p>
            </button>
          </div>

          <div className="px-5 pb-4">
            <button className="w-full p-4 bg-[#2A2A2C]/50 hover:bg-[#2A2A2C] rounded-xl border border-[#2A2A2C] transition-colors text-left">
              <h4 className="text-white text-base mb-1">Special Instructions</h4>
              <p className="text-[#999999] text-sm">Ring the doorbell twice</p>
            </button>
          </div>
        </div>

        {/* Note */}
        <div className="p-5 pb-8">
          <div className="bg-[#2A2A2C]/50 rounded-lg p-4">
            <p className="text-[#999999] text-sm leading-relaxed">
              Your location helps us show nearby stores, accurate delivery times, and local product availability.
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
    <div className="w-full px-5 py-4 flex items-center gap-3 border-b border-[#2A2A2C]/50">
      <div className="flex-1">
        <h4 className="text-white text-base mb-1">{label}</h4>
        <p className="text-[#999999] text-sm">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative w-12 h-7 rounded-full transition-colors ${
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
