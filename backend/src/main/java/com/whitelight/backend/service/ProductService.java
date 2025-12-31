package com.whitelight.backend.service;

import com.whitelight.backend.dto.ProductDto;
import com.whitelight.backend.model.Product;
import com.whitelight.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDto> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::mapToDto)
                .toList();
    }

    public List<ProductDto> searchProducts(String query) {
        return productRepository.findByNameContainingIgnoreCase(query).stream()
                .map(this::mapToDto)
                .toList();
    }

    @SuppressWarnings("null")
    public ProductDto getProductDtoById(Long id) {
        return productRepository.findById(id)
                .map(this::mapToDto)
                .orElse(null);
    }

    @SuppressWarnings("null")
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public ProductDto createProduct(ProductDto productDto) {
        Product product = new Product();
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setOriginalPrice(productDto.getOriginalPrice());
        product.setImage(productDto.getImage());
        product.setRating(productDto.getRating());
        product.setReviews(productDto.getReviews());
        product.setDescription(productDto.getDescription());
        product.setFeatures(productDto.getFeatures());

        Product savedProduct = productRepository.save(product);
        return mapToDto(savedProduct);
    }

    public ProductDto mapToDto(Product product) {
        if (product == null)
            return null;
        ProductDto dto = new ProductDto();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setPrice(product.getPrice());
        dto.setOriginalPrice(product.getOriginalPrice());
        dto.setImage(product.getImage());
        dto.setRating(product.getRating());
        dto.setReviews(product.getReviews());
        dto.setDescription(product.getDescription());
        dto.setFeatures(product.getFeatures());
        return dto;
    }
}
