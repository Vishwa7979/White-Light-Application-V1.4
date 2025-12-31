import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Matrix from './ui/background';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'falling' | 'transition' | 'reveal'>('falling');
  const [matrixFade, setMatrixFade] = useState(1);

  useEffect(() => {
    // Phase 1: Full brightness Matrix rain (0-2 seconds)
    const fallingTimer = setTimeout(() => {
      setPhase('transition');
      setMatrixFade(0.8);
    }, 2000);

    // Phase 2: Dimmed Matrix with Transition spinner (2-12 seconds)
    const revealTimer = setTimeout(() => {
      setPhase('reveal');
      setMatrixFade(0.65);
    }, 12000);

    // Phase 3: Complete after 17 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 17000);

    return () => {
      clearTimeout(fallingTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="bg-black relative size-full overflow-hidden">
      {/* Matrix background with falling characters */}
      <div className="absolute inset-0 z-0">
        <Matrix 
          backgroundColor="rgba(0, 0, 0, 1)"
          textColor="#ff6b4a"
          fadeOpacity={matrixFade}
        />
      </div>

      {/* Dark overlay for reveal phase */}
      {phase === 'reveal' && (
        <motion.div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{ backgroundColor: '#000' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      )}

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center size-full px-6">
        <AnimatePresence mode="wait">
          {/* Phase 3: Logo and Text Reveal */}
          {phase === 'reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center flex flex-col items-center w-full"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 200 }}
                className="mb-10 relative"
              >
                <div className="relative" style={{ width: '100px', height: '100px' }}>
                  {/* Central light beam */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: '4px',
                      height: '70px',
                      background: 'linear-gradient(180deg, #ffffff 0%, #ffd700 50%, #ff6b4a 100%)',
                      borderRadius: '2px',
                      boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
                    }}
                  />

                  {/* Sound waves - left */}
                  {[0, 1, 2].map((i) => (
                    <div
                      key={`left-${i}`}
                      className="absolute left-1/2 top-1/2 -translate-y-1/2"
                      style={{
                        width: '30px',
                        height: `${40 - i * 10}px`,
                        border: '2px solid',
                        borderColor: i === 1 ? '#ffd700' : '#00d4ff',
                        borderRight: 'none',
                        borderRadius: '50px 0 0 50px',
                        left: `${-15 - i * 12}px`,
                        opacity: 0.8
                      }}
                    />
                  ))}

                  {/* Sound waves - right */}
                  {[0, 1, 2].map((i) => (
                    <div
                      key={`right-${i}`}
                      className="absolute left-1/2 top-1/2 -translate-y-1/2"
                      style={{
                        width: '30px',
                        height: `${40 - i * 10}px`,
                        border: '2px solid',
                        borderColor: i === 1 ? '#ffd700' : '#00d4ff',
                        borderLeft: 'none',
                        borderRadius: '0 50px 50px 0',
                        left: `${15 + i * 12}px`,
                        opacity: 0.8
                      }}
                    />
                  ))}

                  {/* Center pulse dot */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #ffffff 0%, #ffd700 100%)',
                      boxShadow: '0 0 20px rgba(255, 215, 0, 1)'
                    }}
                    animate={{
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />

                  {/* Orbiting particles */}
                  {[0, 1, 2, 3].map((i) => {
                    const angle = (i * Math.PI) / 2;
                    return (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute"
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: i % 2 === 0 ? '#00d4ff' : '#ffd700',
                          boxShadow: `0 0 8px ${i % 2 === 0 ? '#00d4ff' : '#ffd700'}`,
                          left: `${50 + Math.cos(angle) * 45}px`,
                          top: `${50 + Math.sin(angle) * 45}px`,
                          marginLeft: '-3px',
                          marginTop: '-3px'
                        }}
                        animate={{
                          rotate: 360
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'linear'
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>

              {/* WHITELIGHT Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center gap-0">
                  <h1 
                    style={{
                      fontSize: '48px',
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #ffffff 0%, #ffd700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase'
                    }}
                  >
                    WHITE
                  </h1>
                  <h1 
                    style={{
                      fontSize: '48px',
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #00d4ff 0%, #00ffcc 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginLeft: '-8px'
                    }}
                  >
                    LIGHT
                  </h1>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-3 mb-6"
              >
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent 0%, #00d4ff 100%)' }} />
                <div style={{ width: '8px', height: '8px', background: '#ffd700', borderRadius: '50%', boxShadow: '0 0 10px #ffd700' }} />
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #00d4ff 0%, transparent 100%)' }} />
              </motion.div>

              {/* Voice Commerce */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mb-2 flex items-center gap-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#00ff88',
                    boxShadow: '0 0 10px #00ff88'
                  }}
                />
                <h2 
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  Voice Commerce
                </h2>
              </motion.div>

              {/* Shop by Speaking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mb-10"
              >
                <p style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', letterSpacing: '0.12em', opacity: 0.9, fontStyle: 'italic' }}>
                  <span style={{ color: '#ffd700', fontWeight: 600, fontStyle: 'normal' }}>Shop</span> by{' '}
                  <span style={{ color: '#00d4ff', fontWeight: 600, fontStyle: 'normal' }}>Speaking</span>
                </p>
              </motion.div>

              {/* Waveform indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="flex items-end gap-1 h-8"
              >
                {[0, 1, 2, 3, 4, 2, 1].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-1 rounded-full"
                    style={{
                      background: i % 2 === 0 ? '#00d4ff' : '#ffd700',
                      boxShadow: `0 0 4px ${i % 2 === 0 ? '#00d4ff' : '#ffd700'}`
                    }}
                    animate={{
                      height: [`${12 + height * 3}px`, `${20 + height * 4}px`, `${12 + height * 3}px`]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Phase 2: Transition */}
          {phase === 'transition' && (
            <motion.div
              key="transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-20 h-20"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '3px solid transparent', borderTopColor: '#ffd700' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-2 rounded-full"
                style={{ border: '3px solid transparent', borderBottomColor: '#00d4ff' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
                }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <div className="relative">
          <div
            className="w-[180px] h-[3px] rounded-full relative overflow-hidden"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <motion.div
              className="h-full rounded-full absolute left-0 top-0"
              style={{ 
                background: 'linear-gradient(90deg, #ffd700 0%, #00d4ff 50%, #00ff88 100%)',
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)'
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 17, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}