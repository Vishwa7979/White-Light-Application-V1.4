package com.whitelight.backend.dto;

import lombok.Data;
import java.util.List;

@Data
public class ProductDto {
    private Long id;
    private String name;
    private Double price;
    private Double originalPrice;
    private String image;
    private Double rating;
    private Integer reviews;
    private String description;
    private List<String> features;
}
