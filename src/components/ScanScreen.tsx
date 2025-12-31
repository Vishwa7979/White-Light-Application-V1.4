import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon, Search, Zap, Sparkles, Scan } from 'lucide-react';

interface ScanScreenProps {
  onClose: () => void;
  onImageSelect: (file: File) => void;
  mode: 'camera' | 'scan';
}

export default function ScanScreen({ onClose, onImageSelect, mode }: ScanScreenProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    
    // Process after a short delay for better UX
    setTimeout(() => {
      setIsProcessing(true);
      setTimeout(() => {
        onImageSelect(file);
        onClose();
      }, 800);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black"
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-8 pb-4"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
        }}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            <Scan className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">
              {mode === 'camera' ? 'Camera Scan' : 'Product Scanner'}
            </span>
          </div>

          <div className="w-10 h-10" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Camera Viewfinder Frame */}
        {!previewUrl ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-[280px] h-[280px]"
          >
            {/* Scanning Animation */}
            <motion.div
              animate={{
                y: [0, 280, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-0 right-0 h-[2px] z-10"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #4D6DF6 50%, transparent 100%)',
                boxShadow: '0 0 20px rgba(77, 109, 246, 0.6)'
              }}
            />

            {/* Corner Brackets */}
            {/* Top Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-0 left-0 w-16 h-16"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/90 to-transparent rounded-full" />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/90 to-transparent rounded-full" />
            </motion.div>

            {/* Top Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-0 right-0 w-16 h-16"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-white/90 to-transparent rounded-full" />
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-white/90 to-transparent rounded-full" />
            </motion.div>

            {/* Bottom Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 w-16 h-16"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/90 to-transparent rounded-full" />
              <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-white/90 to-transparent rounded-full" />
            </motion.div>

            {/* Bottom Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-0 right-0 w-16 h-16"
            >
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-white/90 to-transparent rounded-full" />
              <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-white/90 to-transparent rounded-full" />
            </motion.div>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(77, 109, 246, 0.2) 0%, transparent 70%)'
                }}
              >
                <Sparkles className="w-10 h-10 text-white/60" />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* Image Preview */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-[280px] h-[280px] rounded-3xl overflow-hidden"
          >
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            
            {isProcessing && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white"
                />
              </div>
            )}
          </motion.div>
        )}

        {/* Instruction Text */}
        {!previewUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-[180px] left-0 right-0 text-center px-8"
          >
            <p className="text-white/80 text-sm mb-1">
              {mode === 'camera' ? 'Position product in frame' : 'Align product within scanner'}
            </p>
            <p className="text-white/50 text-xs">
              We'll identify it and help you shop
            </p>
          </motion.div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 px-6"
        style={{
          background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
        }}
      >
        <div className="flex items-center justify-center gap-6 mb-6">
          {/* Gallery Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => fileInputRef.current?.click()}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
          >
            <ImageIcon className="w-6 h-6 text-white" />
          </motion.button>

          {/* Main Capture/Scan Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => fileInputRef.current?.click()}
            className="relative w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-2xl hover:shadow-white/50 transition-all"
            style={{
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(77, 109, 246, 0.3) 0%, transparent 70%)'
              }}
            />
            <Search className="w-8 h-8 text-black relative z-10" />
          </motion.button>

          {/* Spacer */}
          <div className="w-14 h-14" />
        </div>

        {/* Bottom Action Bar */}
        <div className="flex items-center justify-around px-4 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
          <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl bg-white/10">
            <Search className="w-5 h-5 text-white" />
            <span className="text-white text-[10px] font-medium">Search</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors">
            <Zap className="w-5 h-5 text-white/70" />
            <span className="text-white/70 text-[10px]">Quick Scan</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors">
            <Sparkles className="w-5 h-5 text-white/70" />
            <span className="text-white/70 text-[10px]">AI Detect</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
