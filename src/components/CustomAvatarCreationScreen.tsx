import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Mic, Check, X, Upload, User, Play, Pause } from 'lucide-react';
import ScanScreen from './ScanScreen';

interface CustomAvatarCreationScreenProps {
  onComplete: (avatarImage: string, voiceBlob: Blob) => void;
  onClose: () => void;
}

export default function CustomAvatarCreationScreen({ onComplete, onClose }: CustomAvatarCreationScreenProps) {
  const [step, setStep] = useState<'banner' | 'photo' | 'voice' | 'confirm'>('photo'); // Changed from 'banner' to 'photo'
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [voiceBlob, setVoiceBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScanScreen, setShowScanScreen] = useState(true); // Auto-show scan screen
  const [micPermissionError, setMicPermissionError] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePhotoUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
    setPhotoFile(file);
    setShowScanScreen(false);
    setStep('voice');
  };

  const startRecording = async () => {
    try {
      setMicPermissionError(false);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setVoiceBlob(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setMicPermissionError(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const playRecording = () => {
    if (voiceBlob && !isPlaying) {
      const url = URL.createObjectURL(voiceBlob);
      const audio = new Audio(url);
      audioRef.current = audio;
      
      audio.onended = () => {
        setIsPlaying(false);
      };
      
      audio.play();
      setIsPlaying(true);
    } else if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleConfirm = () => {
    if (photoUrl) {
      // Create a dummy voice blob if none exists (user skipped)
      const finalVoiceBlob = voiceBlob || new Blob([''], { type: 'audio/webm' });
      onComplete(photoUrl, finalVoiceBlob);
    }
  };

  const skipVoiceRecording = () => {
    setStep('confirm');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <AnimatePresence>
        {showScanScreen && (
          <ScanScreen
            mode="camera"
            onClose={() => setShowScanScreen(false)}
            onImageSelect={handlePhotoUpload}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-16 pb-4">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1d1d20] border border-[#3a3a3e] hover:bg-[#2d2d30] transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white text-lg font-semibold">Create Your Avatar</h2>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Content */}
        <div className="flex-1 px-5 py-6 overflow-y-auto">
          {step === 'banner' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full text-center gap-6"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#4D6DF6] to-[#7B3FF2] flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-white">Your Personal Avatar</h1>
                <p className="text-[#a0a0a0] text-sm max-w-md">
                  Upload your photo and clone your voice to create a personalized shopping experience
                </p>
              </div>

              <div className="space-y-4 w-full max-w-sm mt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1d1d20] border border-[#3a3a3e]">
                  <div className="w-10 h-10 rounded-full bg-[#4D6DF6]/20 flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5 text-[#4D6DF6]" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-medium text-sm">Upload Your Photo</h3>
                    <p className="text-[#a0a0a0] text-xs mt-1">We'll use your photo as your avatar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1d1d20] border border-[#3a3a3e]">
                  <div className="w-10 h-10 rounded-full bg-[#7B3FF2]/20 flex items-center justify-center shrink-0">
                    <Mic className="w-5 h-5 text-[#7B3FF2]" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-medium text-sm">Record Your Voice</h3>
                    <p className="text-[#a0a0a0] text-xs mt-1">Clone your voice for natural conversations</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowScanScreen(true)}
                className="w-full max-w-sm mt-6 h-12 rounded-full bg-[#4D6DF6] text-white font-medium hover:bg-[#5D7DF6] transition-colors active:scale-95"
              >
                Get Started
              </button>
            </motion.div>
          )}

          {step === 'voice' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {/* Photo Preview */}
              {photoUrl && (
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#4D6DF6] shadow-xl">
                  <img src={photoUrl} alt="Your avatar" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-2 text-center">
                <h2 className="text-xl font-bold text-white">Now, Record Your Voice</h2>
                <p className="text-[#a0a0a0] text-sm max-w-md">
                  Say a few sentences so we can clone your voice. Read the prompt below:
                </p>
              </div>

              {/* Recording Prompt */}
              <div className="p-4 rounded-2xl bg-[#1d1d20] border border-[#3a3a3e] max-w-md">
                <p className="text-white text-sm italic leading-relaxed">
                  "Hello! I'm excited to try this voice-first shopping experience. I love finding great products and having natural conversations while I shop."
                </p>
              </div>

              {/* Recording UI */}
              <div className="flex flex-col items-center gap-4 mt-4">
                {isRecording && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-red-500 text-lg font-semibold"
                  >
                    Recording: {formatTime(recordingTime)}
                  </motion.div>
                )}

                {voiceBlob && !isRecording && (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={playRecording}
                      className="w-12 h-12 rounded-full bg-[#4D6DF6] flex items-center justify-center hover:bg-[#5D7DF6] transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-1" />
                      )}
                    </button>
                    <span className="text-white text-sm">Play recording</span>
                  </div>
                )}

                {!voiceBlob ? (
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                      isRecording
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-[#4D6DF6] hover:bg-[#5D7DF6]'
                    }`}
                  >
                    <Mic className="w-8 h-8 text-white" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setVoiceBlob(null);
                      setRecordingTime(0);
                    }}
                    className="text-[#a0a0a0] text-sm hover:text-white transition-colors underline"
                  >
                    Record again
                  </button>
                )}
              </div>

              {voiceBlob && (
                <button
                  onClick={() => setStep('confirm')}
                  className="w-full max-w-sm mt-6 h-12 rounded-full bg-[#4D6DF6] text-white font-medium hover:bg-[#5D7DF6] transition-colors active:scale-95"
                >
                  Continue
                </button>
              )}

              {micPermissionError && (
                <div className="text-red-500 text-sm mt-4">
                  Could not access microphone. Please grant permission and try again.
                </div>
              )}

              <button
                onClick={skipVoiceRecording}
                className="text-[#a0a0a0] text-sm hover:text-white transition-colors underline mt-2"
              >
                Skip voice recording
              </button>
            </motion.div>
          )}

          {step === 'confirm' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {/* Avatar Preview */}
              {photoUrl && (
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#4D6DF6] shadow-2xl">
                    <img src={photoUrl} alt="Your avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-[#4D6DF6] flex items-center justify-center border-4 border-black">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold text-white">Perfect! You're All Set</h2>
                <p className="text-[#a0a0a0] text-sm max-w-md">
                  Your custom avatar is ready. Confirm to start using it across all screens.
                </p>
              </div>

              {/* Summary */}
              <div className="space-y-3 w-full max-w-sm">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#1d1d20] border border-[#3a3a3e]">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-white text-sm">Photo uploaded</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#1d1d20] border border-[#3a3a3e]">
                  <div className={`w-8 h-8 rounded-full ${voiceBlob ? 'bg-green-500/20' : 'bg-gray-500/20'} flex items-center justify-center`}>
                    <Check className={`w-4 h-4 ${voiceBlob ? 'text-green-500' : 'text-gray-500'}`} />
                  </div>
                  <span className="text-white text-sm">
                    {voiceBlob ? `Voice recorded (${formatTime(recordingTime)})` : 'Voice recording skipped'}
                  </span>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full max-w-sm mt-6 h-12 rounded-full bg-gradient-to-r from-[#4D6DF6] to-[#7B3FF2] text-white font-medium hover:opacity-90 transition-opacity active:scale-95"
              >
                Create My Avatar
              </button>

              <button
                onClick={() => setStep('banner')}
                className="text-[#a0a0a0] text-sm hover:text-white transition-colors"
              >
                Start Over
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}