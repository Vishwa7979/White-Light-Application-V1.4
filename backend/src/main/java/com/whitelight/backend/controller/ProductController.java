package com.whitelight.backend.controller;

import com.whitelight.backend.dto.ApiResponse;
import com.whitelight.backend.dto.ProductDto;
import com.whitelight.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProductDto>>> getAllProducts(@RequestParam(required = false) String search) {
        List<ProductDto> products;
        if (search != null && !search.isEmpty()) {
            products = productService.searchProducts(search);
        } else {
            products = productService.getAllProducts();
        }
        return ResponseEntity.ok(ApiResponse.success(products, "Products fetched successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductDto>> getProductById(@PathVariable Long id) {
        ProductDto product = productService.getProductDtoById(id);
        if (product == null) {
            return ResponseEntity.status(404).body(ApiResponse.error("Product not found"));
        }
        return ResponseEntity.ok(ApiResponse.success(product, "Product fetched successfully"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ProductDto>> createProduct(@RequestBody ProductDto productDto) {
        return ResponseEntity
                .ok(ApiResponse.success(productService.createProduct(productDto), "Product created successfully"));
    }
}
