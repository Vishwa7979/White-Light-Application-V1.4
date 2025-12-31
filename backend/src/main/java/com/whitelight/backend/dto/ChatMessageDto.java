package com.whitelight.backend.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ChatMessageDto {
    private Long id;
    private String text;
    private boolean isUser;
    private LocalDateTime timestamp;
    private boolean hasProductCard;
    private ProductDto product;
}
