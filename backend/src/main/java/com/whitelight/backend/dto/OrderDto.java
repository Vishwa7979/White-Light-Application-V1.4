package com.whitelight.backend.dto;

import com.whitelight.backend.model.OrderStatus;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class OrderDto {
    private Long id;
    private String orderNumber;
    private LocalDateTime orderDate;
    private OrderStatus status;
    private ProductDto product;
    private String shippingAddress;
    private String trackingId;
    private LocalDateTime estimatedDelivery;
}
