import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  ChevronRight, 
  User, 
  ShoppingBag, 
  Palette, 
  Globe, 
  Volume2, 
  Sparkles, 
  CheckSquare, 
  MapPin, 
  Bell,
  Map,
  Link2,
  HelpCircle,
  FileText,
  Shield,
  LogOut,
  EyeOff,
  Award
} from 'lucide-react';

interface SettingsScreenProps {
  onClose: () => void;
  onLogout: () => void;
  onNavigate?: (screen: string) => void;
  userName?: string;
  userEmail?: string;
}

export default function SettingsScreen({ onClose, onLogout, onNavigate, userName = "User", userEmail }: SettingsScreenProps) {
  const [incognitoMode, setIncognitoMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  // Get user data from localStorage
  const savedUser = localStorage.getItem('whitelight_user');
  const userData = savedUser ? JSON.parse(savedUser) : null;
  const displayName = userData?.name || userName;
  const displayEmail = userData?.email || userEmail || 'user@example.com';

  // Handle incognito mode toggle
  const handleIncognitoToggle = () => {
    setIncognitoMode(!incognitoMode);
    // Store in localStorage for persistence
    localStorage.setItem('whitelight_incognito', JSON.stringify(!incognitoMode));
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="absolute inset-0 z-[200] bg-[#1A1A1C] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2A2A2C]">
        <button 
          onClick={onClose}
          className="p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-lg">Settings</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* User Profile Section */}
        <div className="px-5 py-6 border-b border-[#2A2A2C]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h2 className="text-white text-lg">{displayName}</h2>
              <button className="text-[#4A9EFF] text-sm mt-1 hover:underline">
                Manage Account
              </button>
            </div>
          </div>
        </div>

        {/* Main Settings */}
        <div className="py-2">
          {/* Incognito Mode */}
          <SettingItemToggle
            icon={<EyeOff className="w-5 h-5" />}
            label="Incognito Mode"
            enabled={incognitoMode}
            onToggle={handleIncognitoToggle}
          />

          {/* WhiteLight Pro */}
          <SettingItem
            icon={<Award className="w-5 h-5" />}
            label="WhiteLight Pro"
            value="Subscribed"
            hasChevron
          />

          {/* Orders */}
          <SettingItem
            icon={<ShoppingBag className="w-5 h-5" />}
            label="Orders"
            hasChevron
            onClick={() => onNavigate?.('orders')}
          />

          {/* Theme & App Icon */}
          <SettingItem
            icon={<Palette className="w-5 h-5" />}
            label="Theme & App Icon"
            hasChevron
            onClick={() => onNavigate?.('theme')}
          />

          {/* App Language */}
          <SettingItem
            icon={<Globe className="w-5 h-5" />}
            label="App Language"
            hasChevron
            onClick={() => onNavigate?.('app_language')}
          />

          {/* Voice & Language */}
          <SettingItem
            icon={<Volume2 className="w-5 h-5" />}
            label="Voice & Language"
            hasChevron
            onClick={() => onNavigate?.('voice_language')}
          />

          {/* Personalize */}
          <SettingItem
            icon={<Sparkles className="w-5 h-5" />}
            label="Personalize"
            hasChevron
            onClick={() => onNavigate?.('personalize')}
          />

          {/* Tasks */}
          <SettingItem
            icon={<CheckSquare className="w-5 h-5" />}
            label="Tasks"
            hasChevron
          />

          {/* Location */}
          <SettingItem
            icon={<MapPin className="w-5 h-5" />}
            label="Location"
            hasChevron
            onClick={() => onNavigate?.('location')}
          />

          {/* Push Notifications */}
          <SettingItemToggle
            icon={<Bell className="w-5 h-5" />}
            label="Push Notifications"
            enabled={pushNotifications}
            onToggle={() => setPushNotifications(!pushNotifications)}
          />

          {/* Map Provider */}
          <SettingItem
            icon={<Map className="w-5 h-5" />}
            label="Map Provider"
            value="Google Maps"
            hasChevron
          />

          {/* Connectors */}
          <SettingItem
            icon={<Link2 className="w-5 h-5" />}
            label="Connectors"
            hasChevron
          />
        </div>

        {/* Help & Support Section */}
        <div className="mt-4">
          <SectionHeader title="Help & Support" />
          <SettingItemSimple label="Get started" />
          <SettingItemSimple label="Voice Shopping Guide" />
          <SettingItemSimple label="Help & FAQ" />
        </div>

        {/* Follow Us Section */}
        <div className="mt-4">
          <SectionHeader title="Follow Us" />
          <SettingItem
            icon={<span className="text-white text-sm">𝕏</span>}
            label="X"
            hasChevron
          />
          <SettingItem
            icon={<span className="text-white text-sm">💬</span>}
            label="Discord"
            hasChevron
          />
        </div>

        {/* Legal & Logout Section */}
        <div className="mt-4 pb-8">
          <SettingItemSimple label="Privacy policy" />
          <SettingItemSimple label="Terms of service" />
          
          {/* Sign Out Button */}
          <button
            onClick={onLogout}
            className="w-full px-5 py-4 flex items-center gap-3 hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-5 h-5 text-red-500" />
            <span className="text-red-500 text-base">Sign out</span>
          </button>

          {/* Version Info */}
          <div className="px-5 py-4 text-[#666666] text-xs">
            WhiteLight v1.0.0 • Build 10001
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Setting Item with Icon and Chevron
function SettingItem({ 
  icon, 
  label, 
  value, 
  hasChevron = false,
  onClick
}: { 
  icon: React.ReactNode; 
  label: string; 
  value?: string; 
  hasChevron?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className="w-full px-5 py-4 flex items-center gap-3 hover:bg-white/5 transition-colors border-b border-[#2A2A2C]/50" onClick={onClick}>
      <div className="text-[#999999]">{icon}</div>
      <span className="flex-1 text-left text-white text-base">{label}</span>
      {value && <span className="text-[#4A9EFF] text-sm">{value}</span>}
      {hasChevron && <ChevronRight className="w-5 h-5 text-[#666666]" />}
    </button>
  );
}

// Setting Item with Toggle Switch
function SettingItemToggle({ 
  icon, 
  label, 
  enabled, 
  onToggle 
}: { 
  icon: React.ReactNode; 
  label: string; 
  enabled: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="w-full px-5 py-4 flex items-center gap-3 border-b border-[#2A2A2C]/50">
      <div className="text-[#999999]">{icon}</div>
      <span className="flex-1 text-left text-white text-base">{label}</span>
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

// Simple Setting Item (no icon)
function SettingItemSimple({ label }: { label: string }) {
  return (
    <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-white/5 transition-colors border-b border-[#2A2A2C]/50">
      <span className="text-white text-base">{label}</span>
      <ChevronRight className="w-5 h-5 text-[#666666]" />
    </button>
  );
}

// Section Header
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="px-5 py-3">
      <h3 className="text-[#666666] text-sm uppercase tracking-wider">{title}</h3>
    </div>
  );
}