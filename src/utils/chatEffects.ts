// Chat Effects and Animations
// Provides subtle effects to enhance the conversation experience

/**
 * Scroll to bottom with smooth animation
 */
export function scrollToBottom(element: HTMLElement | null, smooth: boolean = true) {
  if (!element) return;
  
  element.scrollTo({
    top: element.scrollHeight,
    behavior: smooth ? 'smooth' : 'auto'
  });
}

/**
 * Calculate stagger delay for multiple items
 */
export function getStaggerDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay;
}

/**
 * Determine if messages should be grouped (consecutive AI messages)
 */
export function shouldGroupMessages(
  currentMessage: { sender: string },
  previousMessage?: { sender: string }
): boolean {
  if (!previousMessage) return false;
  return currentMessage.sender === previousMessage.sender && currentMessage.sender === 'ai';
}

/**
 * Get random entrance animation variant
 */
export function getEntranceVariant(): 'fade' | 'slide' | 'scale' {
  const variants: ('fade' | 'slide' | 'scale')[] = ['fade', 'slide', 'scale'];
  return variants[Math.floor(Math.random() * variants.length)];
}

/**
 * Haptic feedback simulation (for mobile-like feel)
 */
export function triggerHaptic(type: 'light' | 'medium' | 'heavy' = 'light') {
  // In a real implementation, this would trigger device haptics
  // For web, we could add subtle visual feedback
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    const patterns = {
      light: 10,
      medium: 20,
      heavy: 30
    };
    navigator.vibrate(patterns[type]);
  }
}
