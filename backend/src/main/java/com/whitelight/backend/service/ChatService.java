package com.whitelight.backend.service;

import com.whitelight.backend.dto.ChatMessageDto;
import com.whitelight.backend.dto.ChatThreadDto;
import com.whitelight.backend.model.ChatMessage;
import com.whitelight.backend.model.ChatThread;
import com.whitelight.backend.model.Product;
import com.whitelight.backend.model.User;
import com.whitelight.backend.repository.ChatMessageRepository;
import com.whitelight.backend.repository.ChatThreadRepository;
import com.whitelight.backend.repository.ProductRepository;
import com.whitelight.backend.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatThreadRepository threadRepository;
    private final ChatMessageRepository messageRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final ProductService productService;

    public List<ChatThreadDto> getUserThreads(String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return threadRepository.findByUserOrderByLastUpdatedDesc(user).stream()
                .map(this::mapThreadToDto)
                .toList();
    }

    public ChatThreadDto createThread(String userEmail, String title) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        ChatThread thread = new ChatThread(user, title != null ? title : "New Conversation", LocalDateTime.now());
        return mapThreadToDto(threadRepository.save(thread));
    }

    @SuppressWarnings("null")
    public ChatThread getThread(Long threadId) {
        return threadRepository.findById(threadId).orElse(null);
    }

    @SuppressWarnings("null")
    public List<ChatMessageDto> getThreadMessages(Long threadId) {
        ChatThread thread = threadRepository.findById(threadId)
                .orElseThrow(() -> new RuntimeException("Thread not found"));
        return messageRepository.findByThreadOrderByTimestampAsc(thread).stream()
                .map(this::mapMessageToDto)
                .toList();
    }

    @SuppressWarnings("null")
    public ChatMessageDto processUserMessage(Long threadId, String userText) {
        ChatThread thread = threadRepository.findById(threadId)
                .orElseThrow(() -> new RuntimeException("Thread not found"));

        // 1. Save User Message
        ChatMessage userMessage = new ChatMessage(thread, userText, true, LocalDateTime.now(), false, null);
        messageRepository.save(userMessage);

        // 2. Generate AI Response (Mock Logic ported from voiceConversationFlows.ts)
        generateAiResponse(thread, userText);

        // Update thread timestamp
        thread.setLastUpdated(LocalDateTime.now());
        threadRepository.save(thread);

        return mapMessageToDto(userMessage);
    }

    private void generateAiResponse(ChatThread thread, String userText) {
        String lowerText = userText.toLowerCase();
        String responseText = "I'm sorry, I didn't quite catch that. Could you please repeat?";
        Product recommendedProduct = null;

        // MATCHING LOGIC FROM voiceConversationFlows.ts

        // 1. Cricket Bat Flow
        if (lowerText.contains("cricket bat") || lowerText.contains("son") || lowerText.contains("sport")) {
            if (lowerText.contains("looking for")) {
                responseText = "That's wonderful! I'd love to help you find the perfect cricket bat. How old is your son?";
            } else if (lowerText.contains("12 years") || lowerText.contains("old")) {
                responseText = "Perfect! At 12, he'll need a size 6 bat. Is he playing at school level or more casually?";
            } else if (lowerText.contains("school") || lowerText.contains("team")) {
                responseText = "Excellent! For school-level cricket, I'd recommend getting a quality bat. What's your budget range?";
            } else if (lowerText.contains("2000") || lowerText.contains("5000")) {
                responseText = "Perfect! I've found some excellent cricket bats in your budget range. These are all size 6, perfect for a 12-year-old school player. Let me show you the best options!";
                recommendedProduct = productRepository.findByNameContainingIgnoreCase("SG Nexus").stream().findFirst()
                        .orElse(null);
            } else {
                responseText = "I can help you find a cricket bat. Could you tell me who it is for?";
            }
        }
        // 2. Walking Stick Flow
        else if (lowerText.contains("walking stick") || lowerText.contains("father") || lowerText.contains("support")) {
            if (lowerText.contains("buy")) {
                responseText = "I'd be happy to help you find the right walking stick. Is this for yourself or someone else?";
            } else if (lowerText.contains("father")) {
                responseText = "That's thoughtful of you! Does your father need it for regular support or after an injury?";
            } else if (lowerText.contains("regular support")) {
                responseText = "I understand. Would he prefer a single-point stick for light support, or a quad cane with four points for more stability?";
            } else if (lowerText.contains("quad") || lowerText.contains("stability")) {
                responseText = "Excellent choice! Quad canes provide great stability. Let me show you some highly-rated options that are comfortable, adjustable, and reliable!";
                recommendedProduct = productRepository.findByNameContainingIgnoreCase("Quad Cane").stream().findFirst()
                        .orElse(null);
            } else {
                responseText = "I can help with walking sticks. Is it for daily use?";
            }
        }
        // 3. Hearing Aid Flow
        else if (lowerText.contains("hearing aid")) {
            if (lowerText.contains("looking for")) {
                responseText = "I can help you find a suitable hearing aid. Is this for mild, moderate, or severe hearing loss?";
            } else if (lowerText.contains("moderate")) {
                responseText = "Got it! For moderate hearing loss, you have several options. Would you prefer a behind-the-ear model or an in-the-ear model?";
            } else if (lowerText.contains("behind")) {
                responseText = "Great choice! Behind-the-ear models are comfortable and easy to use. Are you looking for a rechargeable model or one with replaceable batteries?";
            } else if (lowerText.contains("rechargeable")) {
                responseText = "Perfect! Rechargeable models are very convenient. Here are the best rechargeable behind-the-ear hearing aids for moderate hearing loss!";
                recommendedProduct = productRepository.findByNameContainingIgnoreCase("Signia").stream().findFirst()
                        .orElse(null);
            } else {
                responseText = "We have many hearing aids. What level of hearing loss is it for?";
            }
        }
        // 4. Budget Smartphone Flow
        else if (lowerText.contains("smartphone") || lowerText.contains("phone")) {
            if (lowerText.contains("budget")) {
                responseText = "I'd love to help you find a great budget smartphone! What's your budget range?";
            } else if (lowerText.contains("10000") || lowerText.contains("15000")) {
                responseText = "Perfect budget range! What's your primary use - gaming, photography, or general everyday use?";
            } else if (lowerText.contains("photography") || lowerText.contains("social")) {
                responseText = "Great! So you'll want a good camera. How much storage would you need - 64GB or 128GB?";
            } else if (lowerText.contains("128gb")) {
                responseText = "Excellent choice! I've found some fantastic budget smartphones with great cameras and 128GB storage. Here are the top picks for you!";
                recommendedProduct = productRepository.findByNameContainingIgnoreCase("Redmi").stream().findFirst()
                        .orElse(null);
            } else {
                responseText = "I can show you our smartphones. What is your budget?";
            }
        }
        // General fallback
        else {
            if (lowerText.contains("hello") || lowerText.contains("hi")) {
                responseText = "Hello! How can I help you find the perfect product today?";
            } else if (lowerText.contains("thank")) {
                responseText = "You're welcome! Let me know if you need anything else.";
            }
        }

        ChatMessage aiMessage = new ChatMessage(
                thread,
                responseText,
                false,
                LocalDateTime.now().plusSeconds(1),
                recommendedProduct != null,
                recommendedProduct);
        messageRepository.save(aiMessage);
    }

    private ChatThreadDto mapThreadToDto(ChatThread thread) {
        if (thread == null)
            return null;
        ChatThreadDto dto = new ChatThreadDto();
        dto.setId(thread.getId());
        dto.setTitle(thread.getTitle());
        dto.setLastUpdated(thread.getLastUpdated());
        return dto;
    }

    private ChatMessageDto mapMessageToDto(ChatMessage message) {
        if (message == null)
            return null;
        ChatMessageDto dto = new ChatMessageDto();
        dto.setId(message.getId());
        dto.setText(message.getText());
        dto.setUser(message.isUser());
        dto.setTimestamp(message.getTimestamp());
        dto.setHasProductCard(message.isHasProductCard());
        dto.setProduct(productService.mapToDto(message.getProduct()));
        return dto;
    }
}
