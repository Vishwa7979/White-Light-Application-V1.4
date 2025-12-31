package com.whitelight.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chat_messages")
public class ChatMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "thread_id", nullable = false)
    @com.fasterxml.jackson.annotation.JsonIgnore
    private ChatThread thread;

    @Column(length = 2000)
    private String text;
    private boolean isUser; // true if sent by user, false if AI
    private LocalDateTime timestamp;
    private boolean hasProductCard;

    @ManyToOne(fetch = FetchType.EAGER) // Eager to avoid lazy loading issues when serializing product cards
    @JoinColumn(name = "product_id")
    private Product product;

    public ChatMessage() {
    }

    public ChatMessage(ChatThread thread, String text, boolean isUser, LocalDateTime timestamp, boolean hasProductCard,
            Product product) {
        this.thread = thread;
        this.text = text;
        this.isUser = isUser;
        this.timestamp = timestamp;
        this.hasProductCard = hasProductCard;
        this.product = product;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ChatThread getThread() {
        return thread;
    }

    public void setThread(ChatThread thread) {
        this.thread = thread;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isUser() {
        return isUser;
    }

    public void setUser(boolean user) {
        isUser = user;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public boolean isHasProductCard() {
        return hasProductCard;
    }

    public void setHasProductCard(boolean hasProductCard) {
        this.hasProductCard = hasProductCard;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
