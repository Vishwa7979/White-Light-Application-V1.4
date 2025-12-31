package com.whitelight.backend.service;

import com.whitelight.backend.dto.OrderDto;
import com.whitelight.backend.model.Order;
import com.whitelight.backend.model.OrderStatus;
import com.whitelight.backend.model.Product;
import com.whitelight.backend.model.User;
import com.whitelight.backend.repository.OrderRepository;
import com.whitelight.backend.repository.ProductRepository;
import com.whitelight.backend.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final ProductService productService;

    @SuppressWarnings("null")
    public OrderDto placeOrder(String userEmail, Long productId, String shippingAddress) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Order order = new Order();
        order.setUser(user);
        order.setProduct(product);
        order.setStatus(OrderStatus.PENDING);
        order.setOrderNumber("ORD-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        order.setOrderDate(LocalDateTime.now());
        order.setEstimatedDelivery(LocalDateTime.now().plusDays(5));
        order.setShippingAddress(shippingAddress);

        return mapToDto(orderRepository.save(order));
    }

    public List<OrderDto> getUserOrders(String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return orderRepository.findByUserOrderByOrderDateDesc(user).stream()
                .map(this::mapToDto)
                .toList();
    }

    @SuppressWarnings("null")
    public OrderDto getOrderDtoById(Long id) {
        return orderRepository.findById(id)
                .map(this::mapToDto)
                .orElse(null);
    }

    @SuppressWarnings("null")
    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    private OrderDto mapToDto(Order order) {
        if (order == null)
            return null;
        OrderDto dto = new OrderDto();
        dto.setId(order.getId());
        dto.setOrderNumber(order.getOrderNumber());
        dto.setOrderDate(order.getOrderDate());
        dto.setStatus(order.getStatus());
        dto.setProduct(productService.mapToDto(order.getProduct()));
        dto.setShippingAddress(order.getShippingAddress());
        dto.setTrackingId(order.getTrackingId());
        dto.setEstimatedDelivery(order.getEstimatedDelivery());
        return dto;
    }
}
