package com.whitelight.backend.controller;

import com.whitelight.backend.dto.ApiResponse;
import com.whitelight.backend.dto.ChatMessageDto;
import com.whitelight.backend.dto.ChatThreadDto;
import com.whitelight.backend.service.ChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/chat")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @GetMapping("/threads")
    public ResponseEntity<ApiResponse<List<ChatThreadDto>>> getUserThreads(Authentication authentication) {
        return ResponseEntity.ok(ApiResponse.success(chatService.getUserThreads(authentication.getName()),
                "Chat threads fetched successfully"));
    }

    @PostMapping("/threads")
    public ResponseEntity<ApiResponse<ChatThreadDto>> createThread(Authentication authentication,
            @RequestBody(required = false) Map<String, String> body) {
        String title = body != null ? body.get("title") : null;
        return ResponseEntity.ok(ApiResponse.success(chatService.createThread(authentication.getName(), title),
                "Thread created successfully"));
    }

    @GetMapping("/threads/{threadId}/messages")
    public ResponseEntity<ApiResponse<List<ChatMessageDto>>> getThreadMessages(@PathVariable Long threadId) {
        return ResponseEntity.ok(
                ApiResponse.success(chatService.getThreadMessages(threadId), "Message history fetched successfully"));
    }

    @PostMapping("/threads/{threadId}/messages")
    public ResponseEntity<ApiResponse<ChatMessageDto>> sendMessage(@PathVariable Long threadId,
            @RequestBody Map<String, String> body) {
        String text = body.get("text");
        return ResponseEntity.ok(
                ApiResponse.success(chatService.processUserMessage(threadId, text), "Message processed successfully"));
    }
}
