import React from 'react';
import { motion } from 'motion/react';

/**
 * AnimatedText component that reveals text character by character for a more natural feel
 * Can be disabled for instant display
 */
interface AnimatedTextProps {
  text: string;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  animate = false,
  delay = 0 
}) => {
  if (!animate) {
    return <p className={className}>{text}</p>;
  }

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
