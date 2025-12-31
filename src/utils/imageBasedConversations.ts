import { ChatThread } from './chatThreadsData';
import { RecognizedProduct, ProductCategory } from './imageProductRecognition';

export interface ImageConversationMessage {
  id: string;
  role: 'user' | 'ai';
  text: string;
  type?: 'text' | 'typing' | 'product';
  delay?: number;
  products?: any[];
  image?: string; // For user-uploaded images
}

/**
 * Generate conversation flow based on recognized product from image
 */
export function generateImageBasedConversation(
  recognizedProduct: RecognizedProduct,
  uploadedImageUrl: string
): ChatThread {
  const { category, productName, initialQuestion, specifications, products } = recognizedProduct;
  
  // Base conversation ID
  const conversationId = `image-${category}-${Date.now()}`;
  
  // User's initial message with image
  const userImageMessage: ImageConversationMessage = {
    id: `${conversationId}-user-1`,
    role: 'user',
    text: 'I uploaded an image',
    type: 'text',
    image: uploadedImageUrl
  };
  
  // AI recognition and initial question
  const aiRecognitionMessage: ImageConversationMessage = {
    id: `${conversationId}-ai-1`,
    role: 'ai',
    text: initialQuestion,
    type: 'text',
    delay: 1200
  };
  
  // Build specification questions based on category
  const specificationMessages = generateSpecificationFlow(category, conversationId);
  
  // Final product display message
  const productDisplayMessage: ImageConversationMessage = {
    id: `${conversationId}-ai-products`,
    role: 'ai',
    text: `Based on what you're looking for, here are some great options:`,
    type: 'product',
    products: products,
    delay: 1500
  };
  
  // Combine all messages
  const allMessages = [
    userImageMessage,
    aiRecognitionMessage,
    ...specificationMessages,
    productDisplayMessage
  ];
  
  return {
    id: conversationId,
    title: `Shopping for ${productName}`,
    subtitle: 'Image-based product search',
    timestamp: 'Just now',
    unreadCount: 0,
    category: category,
    image: uploadedImageUrl,
    messages: allMessages.map((msg, index) => ({
      id: index + 1,
      role: msg.role,
      text: msg.text,
      type: msg.type,
      delay: msg.delay,
      products: msg.products,
      image: msg.image
    }))
  } as any;
}

function generateSpecificationFlow(category: ProductCategory, conversationId: string): ImageConversationMessage[] {
  const messages: ImageConversationMessage[] = [];
  
  switch (category) {
    case 'shoe':
      // User confirms yes
      messages.push({
        id: `${conversationId}-user-2`,
        role: 'user',
        text: 'Yes, I am!',
        type: 'text'
      });
      
      // AI asks about size
      messages.push({
        id: `${conversationId}-ai-2`,
        role: 'ai',
        text: 'Great! What size are you looking for?',
        type: 'text',
        delay: 800
      });
      
      // User provides size
      messages.push({
        id: `${conversationId}-user-3`,
        role: 'user',
        text: 'Size 10',
        type: 'text'
      });
      
      // AI asks about color
      messages.push({
        id: `${conversationId}-ai-3`,
        role: 'ai',
        text: 'Perfect! Any color preference?',
        type: 'text',
        delay: 800
      });
      
      // User provides color
      messages.push({
        id: `${conversationId}-user-4`,
        role: 'user',
        text: 'Black or white would be great',
        type: 'text'
      });
      
      // AI acknowledges and searches
      messages.push({
        id: `${conversationId}-ai-4`,
        role: 'ai',
        text: 'Excellent choice! Let me find the best options for you...',
        type: 'text',
        delay: 1000
      });
      break;
      
    case 'headset':
      // User confirms yes
      messages.push({
        id: `${conversationId}-user-2`,
        role: 'user',
        text: 'Yes, exactly!',
        type: 'text'
      });
      
      // AI asks about type
      messages.push({
        id: `${conversationId}-ai-2`,
        role: 'ai',
        text: 'Great! Are you looking for over-ear or in-ear headphones?',
        type: 'text',
        delay: 800
      });
      
      // User provides type
      messages.push({
        id: `${conversationId}-user-3`,
        role: 'user',
        text: 'Over-ear would be perfect',
        type: 'text'
      });
      
      // AI asks about budget
      messages.push({
        id: `${conversationId}-ai-3`,
        role: 'ai',
        text: 'Got it! What\'s your budget range?',
        type: 'text',
        delay: 800
      });
      
      // User provides budget
      messages.push({
        id: `${conversationId}-user-4`,
        role: 'user',
        text: 'Around ₹20,000 to ₹30,000',
        type: 'text'
      });
      
      // AI asks about usage
      messages.push({
        id: `${conversationId}-ai-4`,
        role: 'ai',
        text: 'Perfect! Will you be using them mainly for music, gaming, or work calls?',
        type: 'text',
        delay: 900
      });
      
      // User provides usage
      messages.push({
        id: `${conversationId}-user-5`,
        role: 'user',
        text: 'Mostly for music and work calls',
        type: 'text'
      });
      
      // AI acknowledges and searches
      messages.push({
        id: `${conversationId}-ai-5`,
        role: 'ai',
        text: 'Excellent! I\'ll find you the best noise-canceling headphones in that range...',
        type: 'text',
        delay: 1000
      });
      break;
      
    case 'laptop':
      // User confirms yes
      messages.push({
        id: `${conversationId}-user-2`,
        role: 'user',
        text: 'Yes, I need a new laptop',
        type: 'text'
      });
      
      // AI asks about primary use
      messages.push({
        id: `${conversationId}-ai-2`,
        role: 'ai',
        text: 'Great! What will you primarily use it for? Work, gaming, or creative tasks?',
        type: 'text',
        delay: 800
      });
      
      // User provides use case
      messages.push({
        id: `${conversationId}-user-3`,
        role: 'user',
        text: 'Mainly for work and some creative tasks',
        type: 'text'
      });
      
      // AI asks about screen size
      messages.push({
        id: `${conversationId}-ai-3`,
        role: 'ai',
        text: 'Perfect! Do you prefer a 13-inch for portability or 15-inch for more screen space?',
        type: 'text',
        delay: 900
      });
      
      // User provides screen preference
      messages.push({
        id: `${conversationId}-user-4`,
        role: 'user',
        text: '13-inch would be ideal for portability',
        type: 'text'
      });
      
      // AI asks about RAM
      messages.push({
        id: `${conversationId}-ai-4`,
        role: 'ai',
        text: 'Got it! How much RAM do you need? 8GB, 16GB, or 32GB?',
        type: 'text',
        delay: 800
      });
      
      // User provides RAM
      messages.push({
        id: `${conversationId}-user-5`,
        role: 'user',
        text: '16GB should be good',
        type: 'text'
      });
      
      // AI acknowledges and searches
      messages.push({
        id: `${conversationId}-ai-5`,
        role: 'ai',
        text: 'Excellent choice! Let me find the best 13-inch laptops with 16GB RAM...',
        type: 'text',
        delay: 1100
      });
      break;
      
    case 'mobile':
      // User confirms yes
      messages.push({
        id: `${conversationId}-user-2`,
        role: 'user',
        text: 'Yes, looking for a new phone',
        type: 'text'
      });
      
      // AI asks about storage
      messages.push({
        id: `${conversationId}-ai-2`,
        role: 'ai',
        text: 'Great! How much storage do you need? 128GB, 256GB, or 512GB?',
        type: 'text',
        delay: 800
      });
      
      // User provides storage
      messages.push({
        id: `${conversationId}-user-3`,
        role: 'user',
        text: '256GB would be perfect',
        type: 'text'
      });
      
      // AI asks about camera
      messages.push({
        id: `${conversationId}-ai-3`,
        role: 'ai',
        text: 'Perfect! How important is camera quality to you?',
        type: 'text',
        delay: 800
      });
      
      // User provides camera preference
      messages.push({
        id: `${conversationId}-user-4`,
        role: 'user',
        text: 'Very important, I take a lot of photos',
        type: 'text'
      });
      
      // AI asks about budget
      messages.push({
        id: `${conversationId}-ai-4`,
        role: 'ai',
        text: 'Got it! What\'s your budget range for the phone?',
        type: 'text',
        delay: 900
      });
      
      // User provides budget
      messages.push({
        id: `${conversationId}-user-5`,
        role: 'user',
        text: 'Around ₹60,000 to ₹80,000',
        type: 'text'
      });
      
      // AI acknowledges and searches
      messages.push({
        id: `${conversationId}-ai-5`,
        role: 'ai',
        text: 'Excellent! I\'ll find you phones with the best cameras in that range...',
        type: 'text',
        delay: 1000
      });
      break;
      
    default:
      // Generic flow
      messages.push({
        id: `${conversationId}-user-2`,
        role: 'user',
        text: 'Yes!',
        type: 'text'
      });
      
      messages.push({
        id: `${conversationId}-ai-2`,
        role: 'ai',
        text: 'Let me find the best options for you...',
        type: 'text',
        delay: 1000
      });
  }
  
  return messages;
}
