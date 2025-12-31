package com.whitelight.backend.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ChatThreadDto {
    private Long id;
    private String title;
    private LocalDateTime lastUpdated;
}
