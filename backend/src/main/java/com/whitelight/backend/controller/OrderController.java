package com.whitelight.backend.controller;

import com.whitelight.backend.dto.ApiResponse;
import com.whitelight.backend.dto.OrderDto;
import com.whitelight.backend.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<OrderDto>> placeOrder(
            Authentication authentication,
            @RequestBody Map<String, Object> request) {
        String email = authentication.getName();
        // In a real app, use a proper DTO
        Long productId = Long.valueOf(request.get("productId").toString());
        String address = (String) request.get("shippingAddress");

        return ResponseEntity.ok(
                ApiResponse.success(orderService.placeOrder(email, productId, address), "Order placed successfully"));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<OrderDto>>> getUserOrders(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity
                .ok(ApiResponse.success(orderService.getUserOrders(email), "Order history fetched successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<OrderDto>> getOrderById(@PathVariable Long id) {
        OrderDto order = orderService.getOrderDtoById(id);
        if (order == null) {
            return ResponseEntity.status(404).body(ApiResponse.error("Order not found"));
        }
        return ResponseEntity.ok(ApiResponse.success(order, "Order details fetched successfully"));
    }
}
