import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, X } from 'lucide-react';

interface ImageUploadMenuProps {
  onImageSelect: (file: File) => void;
  onClose: () => void;
}

export function ImageUploadMenu({ onImageSelect, onClose }: ImageUploadMenuProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-end justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-[500px] bg-[#1a1a1a] rounded-t-[24px] p-6 pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[18px] text-white font-semibold">Add Image</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#3a3a3a] transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {/* Camera */}
          <button
            onClick={() => cameraInputRef.current?.click()}
            className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-[16px] p-4 flex items-center gap-4 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[rgba(251,101,124,0.2)] flex items-center justify-center">
              <Camera className="w-6 h-6 text-[#fb657c]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[15px] text-white font-medium">Take Photo</p>
              <p className="text-[12px] text-[#999] mt-0.5">Use camera to capture image</p>
            </div>
          </button>
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Gallery */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-[16px] p-4 flex items-center gap-4 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[rgba(59,130,246,0.2)] flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-[#3b82f6]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[15px] text-white font-medium">Choose from Gallery</p>
              <p className="text-[12px] text-[#999] mt-0.5">Select from your photos</p>
            </div>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ImagePreviewProps {
  imageUrl: string;
  onRemove: () => void;
}

export function ImagePreview({ imageUrl, onRemove }: ImagePreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative w-20 h-20 rounded-[12px] overflow-hidden border border-[#333]"
    >
      <img src={imageUrl} alt="Upload preview" className="w-full h-full object-cover" />
      <button
        onClick={onRemove}
        className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#fb657c] flex items-center justify-center shadow-lg"
      >
        <X className="w-3 h-3 text-white" />
      </button>
    </motion.div>
  );
}
