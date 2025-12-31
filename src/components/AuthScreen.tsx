import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useAuth } from '../hooks/useAuth';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Smartphone } from 'lucide-react';

interface AuthScreenProps {
  onAuthComplete: (userData: { email?: string; mobile?: string; name: string; authMethod?: string }) => void;
}

export default function AuthScreen({ onAuthComplete }: AuthScreenProps) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mobile + OTP states
  const [inputType, setInputType] = useState<'email' | 'mobile'>('email');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(0);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Detect if input is mobile or email
  const detectInputType = (value: string) => {
    const cleaned = value.replace(/\s+/g, '').replace(/[()-]/g, '');
    const isMobile = /^[6-9]\d{9}$/.test(cleaned);
    return isMobile ? 'mobile' : 'email';
  };

  // Handle email/mobile input change
  const handleInputChange = (value: string) => {
    setEmail(value);
    const type = detectInputType(value);

    if (type !== inputType) {
      setInputType(type);
      setOtpSent(false);
      setOtp(['', '', '', '', '', '']);
    }
  };

  // Send OTP
  const handleSendOTP = async () => {
    setIsLoading(true);
    try {
      // Structure for real backend OTP request
      // const response = await apiClient.post('/auth/send-otp', { mobile: email });

      // For now, simulating the backend call but keeping the logic ready
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      console.log('🔐 OTP sent (Simulator):', generatedOtp);

      setTimeout(() => {
        setOtpSent(true);
        setIsLoading(false);
        startResendTimer(30);
        setTimeout(() => otpInputRefs.current[0]?.focus(), 100);
      }, 1000);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to send OTP');
      setIsLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOTP = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      toast.error('Please enter complete OTP');
      return;
    }

    setIsLoading(true);
    try {
      // Structure for real backend OTP verification
      // const response = await apiClient.post('/auth/verify-otp', { mobile: email, otp: enteredOtp });
      // const { token, user } = response.data;

      // Simulating successful verification for now but using real-like logic flow
      setTimeout(() => {
        const token = 'simulated_otp_token_' + Date.now();
        const userData = {
          mobile: email,
          name: mode === 'signup' ? name : 'User',
          authMethod: 'mobile'
        };

        localStorage.setItem('whitelight_user', JSON.stringify(userData));
        localStorage.setItem('whitelight_auth_token', token);
        onAuthComplete(userData);
      }, 1500);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'OTP Verification failed');
      setIsLoading(false);
    }
  };

  // OTP input handlers
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = pastedData.split('').concat(Array(6 - pastedData.length).fill(''));
    setOtp(newOtp);
    const nextEmpty = pastedData.length < 6 ? pastedData.length : 5;
    otpInputRefs.current[nextEmpty]?.focus();
  };

  // Resend timer
  const startResendTimer = (seconds: number) => {
    setResendTimer(seconds);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === 'signin') {
        const data = await login(email, password);
        if (data && data.token) {
          onAuthComplete({ email, name: email.split('@')[0], authMethod: 'email' });
        }
      } else {
        const data = await register(name, email, password);
        if (data && data.token) {
          toast.success('Account created successfully!');
          onAuthComplete({ email, name, authMethod: 'email' });
        }
      }
    } catch (error: any) {
      console.error('Auth Error:', error);
      toast.error(error.response?.data?.message || 'Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSSOAuth = (provider: string) => {
    setIsLoading(true);

    // Structure for OAuth/SSO Integration
    // window.location.href = `${apiClient.defaults.baseURL}/auth/oauth2/authorize/${provider}`;

    // Simulating SSO authentication for now
    setTimeout(() => {
      const userData = {
        email: `user@${provider}.com`,
        name: `${provider} User`,
        authMethod: provider
      };

      localStorage.setItem('whitelight_user', JSON.stringify(userData));
      localStorage.setItem('whitelight_auth_token', 'simulated_sso_token_' + Date.now());

      onAuthComplete(userData);
    }, 1500);
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-50" />

      {/* Animated orbs in background */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #ff6b4a 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-16 h-16 mb-4 relative">
            {/* Mini logo */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '3px',
                height: '48px',
                background: 'linear-gradient(180deg, #ffffff 0%, #ffd700 50%, #ff6b4a 100%)',
                borderRadius: '2px',
                boxShadow: '0 0 12px rgba(255, 215, 0, 0.6)'
              }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #ffffff 0%, #ffd700 100%)',
                boxShadow: '0 0 16px rgba(255, 215, 0, 1)'
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <h1 className="text-3xl mb-2">
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #ffd700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
                letterSpacing: '0.1em'
              }}
            >
              WHITE
            </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #00ffcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
                letterSpacing: '0.1em'
              }}
            >
              LIGHT
            </span>
          </h1>
          <p className="text-gray-400 text-sm">Voice Commerce Platform</p>
        </motion.div>

        {/* Auth Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8"
        >
          {/* Toggle Sign In / Sign Up */}
          <div className="flex gap-2 mb-6 p-1 bg-gray-800/50 rounded-xl">
            <button
              onClick={() => setMode('signin')}
              className="flex-1 py-2.5 px-4 rounded-lg transition-all duration-300"
              style={{
                background: mode === 'signin' ? 'linear-gradient(135deg, #00d4ff 0%, #00ffcc 100%)' : 'transparent',
                color: mode === 'signin' ? '#000000' : '#9ca3af',
                fontWeight: mode === 'signin' ? 600 : 500
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className="flex-1 py-2.5 px-4 rounded-lg transition-all duration-300"
              style={{
                background: mode === 'signup' ? 'linear-gradient(135deg, #00d4ff 0%, #00ffcc 100%)' : 'transparent',
                color: mode === 'signup' ? '#000000' : '#9ca3af',
                fontWeight: mode === 'signup' ? 600 : 500
              }}
            >
              Sign Up
            </button>
          </div>

          {/* SSO Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSSOAuth('google')}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white hover:bg-gray-100 text-gray-900 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>

            <button
              onClick={() => handleSSOAuth('apple')}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white hover:bg-gray-100 text-gray-900 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>

            <button
              onClick={() => handleSSOAuth('microsoft')}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white hover:bg-gray-100 text-gray-900 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#f25022" d="M1 1h10v10H1z" />
                <path fill="#00a4ef" d="M13 1h10v10H13z" />
                <path fill="#7fba00" d="M1 13h10v10H1z" />
                <path fill="#ffb900" d="M13 13h10v10H13z" />
              </svg>
              Continue with Microsoft
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {mode === 'signup' && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      required={mode === 'signup'}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative">
              {inputType === 'email' ? (
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              ) : (
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              )}
              <input
                type="text"
                value={email}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={inputType === 'email' ? 'Email address' : 'Mobile number (10 digits)'}
                required
                disabled={otpSent}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Password field for email OR OTP flow for mobile */}
            <AnimatePresence mode="wait">
              {inputType === 'email' ? (
                <motion.div
                  key="password"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="otp"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {!otpSent ? (
                    <button
                      type="button"
                      onClick={handleSendOTP}
                      disabled={email.replace(/\D/g, '').length !== 10 || isLoading}
                      className="w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: isLoading ? '#374151' : 'linear-gradient(135deg, #00d4ff 0%, #00ffcc 100%)',
                        color: '#000000',
                        fontWeight: 600
                      }}
                    >
                      {isLoading ? 'Sending...' : 'Send OTP'}
                      {!isLoading && <ArrowRight className="w-5 h-5" />}
                    </button>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-3 text-center">
                          Enter OTP sent to +91 {email}
                        </p>
                        <div className="flex gap-2 justify-between" onPaste={handleOtpPaste}>
                          {[0, 1, 2, 3, 4, 5].map((index) => (
                            <input
                              key={index}
                              ref={(el) => { otpInputRefs.current[index] = el; }}
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]"
                              maxLength={1}
                              value={otp[index]}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
                              onKeyDown={(e) => handleOtpKeyDown(index, e)}
                              className="w-12 h-14 text-center text-2xl bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="text-center">
                        {resendTimer > 0 ? (
                          <p className="text-gray-500 text-sm">
                            Resend OTP in {resendTimer}s
                          </p>
                        ) : (
                          <button
                            type="button"
                            onClick={handleSendOTP}
                            className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                          >
                            Resend OTP
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={handleVerifyOTP}
                        disabled={otp.join('').length !== 6 || isLoading}
                        className="w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          background: isLoading ? '#374151' : 'linear-gradient(135deg, #00d4ff 0%, #00ffcc 100%)',
                          color: '#000000',
                          fontWeight: 600
                        }}
                      >
                        {isLoading ? (
                          <motion.div
                            className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                        ) : (
                          <>
                            Verify OTP
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {mode === 'signin' && inputType === 'email' && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            {inputType === 'email' && (
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: isLoading ? '#374151' : 'linear-gradient(135deg, #00d4ff 0%, #00ffcc 100%)',
                  color: '#000000',
                  fontWeight: 600
                }}
              >
                {isLoading ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                ) : (
                  <>
                    {mode === 'signin' ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </form>

          {/* Terms */}
          {mode === 'signup' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-gray-500 text-center mt-4"
            >
              By signing up, you agree to our{' '}
              <button className="text-cyan-400 hover:text-cyan-300">Terms of Service</button>
              {' '}and{' '}
              <button className="text-cyan-400 hover:text-cyan-300">Privacy Policy</button>
            </motion.p>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500">
            Powered by AI • Secured by WhiteLight
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}