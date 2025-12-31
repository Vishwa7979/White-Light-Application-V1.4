// Conversation Timing and Variation Helpers
// Provides natural delays and varied responses for more human-like conversations

/**
 * Calculate natural typing delay based on message length and type
 */
export function calculateTypingDelay(messageLength: number, messageType: 'short' | 'medium' | 'long' | 'product'): number {
  const baseDelays = {
    short: 800,    // Quick acknowledgments
    medium: 1200,  // Regular text responses
    long: 1800,    // Detailed explanations
    product: 1500  // Product searches/results
  };
  
  const baseDelay = baseDelays[messageType];
  
  // Add slight variation (±200ms) for naturalness
  const variation = Math.random() * 400 - 200;
  
  return Math.max(500, baseDelay + variation);
}

/**
 * Get varied acknowledgment phrases for user inputs
 */
export function getAcknowledgment(context?: string): string {
  const general = [
    "Got it!",
    "Perfect!",
    "Understood!",
    "On it!",
    "Sure thing!",
    "Absolutely!"
  ];
  
  const searching = [
    "Let me find that for you...",
    "Searching now...",
    "Looking that up...",
    "Give me just a moment...",
    "Checking our options..."
  ];
  
  const products = [
    "Let me show you what we have...",
    "Here's what I found...",
    "I've got some great options...",
    "Check these out...",
    "I think you'll like these..."
  ];
  
  if (context === 'search') {
    return searching[Math.floor(Math.random() * searching.length)];
  } else if (context === 'products') {
    return products[Math.floor(Math.random() * products.length)];
  }
  
  return general[Math.floor(Math.random() * general.length)];
}

/**
 * Determine message type based on content
 */
export function classifyMessageType(content: string): 'short' | 'medium' | 'long' {
  const wordCount = content.split(' ').length;
  
  if (wordCount <= 5) return 'short';
  if (wordCount <= 15) return 'medium';
  return 'long';
}

/**
 * Get natural pause duration between consecutive AI messages
 */
export function getPauseBetweenMessages(previousType?: string, nextType?: string): number {
  // Longer pause when switching from text to products
  if (previousType === 'text' && nextType === 'product') {
    return 600;
  }
  
  // Medium pause between text messages
  if (previousType === 'text' && nextType === 'text') {
    return 400;
  }
  
  // Short pause for rapid responses
  return 300;
}

/**
 * Enhanced typing indicator duration based on what's being "typed"
 */
export function getTypingDuration(messageType: 'text' | 'product' | 'order'): number {
  const durations = {
    text: 800,
    product: 1200,
    order: 1000
  };
  
  const baseDuration = durations[messageType];
  const variation = Math.random() * 300 - 150;
  
  return Math.max(600, baseDuration + variation);
}
