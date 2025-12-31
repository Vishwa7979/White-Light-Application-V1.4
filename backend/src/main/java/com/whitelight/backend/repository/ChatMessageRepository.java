package com.whitelight.backend.repository;

import com.whitelight.backend.model.ChatMessage;
import com.whitelight.backend.model.ChatThread;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findByThreadOrderByTimestampAsc(ChatThread thread);
}
