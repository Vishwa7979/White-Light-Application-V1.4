import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface BackButtonProps {
  onClick: () => void;
  className?: string;
}

export function BackButton({ onClick, className = '' }: BackButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`backdrop-blur-[21px] backdrop-filter flex items-center justify-center p-[10px] rounded-[32px] size-[40px] bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ChevronLeft className="w-[20px] h-[20px] text-white" strokeWidth={2.5} />
    </motion.button>
  );
}
