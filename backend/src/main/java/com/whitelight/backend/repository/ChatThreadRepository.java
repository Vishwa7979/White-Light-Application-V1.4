package com.whitelight.backend.repository;

import com.whitelight.backend.model.ChatThread;
import com.whitelight.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatThreadRepository extends JpaRepository<ChatThread, Long> {
    List<ChatThread> findByUserOrderByLastUpdatedDesc(User user);
}
