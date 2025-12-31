package com.whitelight.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/recognition")
public class ImageRecognitionController {

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadImage(@RequestParam("file") MultipartFile file) {
        // Mock Logic: Return a static response based on filename or random
        String filename = file.getOriginalFilename() != null ? file.getOriginalFilename().toLowerCase() : "";

        String detectedItem;
        String category;

        if (filename.contains("shoe") || filename.contains("sneaker")) {
            detectedItem = "Nike Air Max 270";
            category = "Footwear";
        } else if (filename.contains("headphone") || filename.contains("sony")) {
            detectedItem = "Sony WH-CH520";
            category = "Electronics";
        } else if (filename.contains("bag") || filename.contains("scarf")) {
            detectedItem = "Designer Silk Scarf";
            category = "Fashion";
        } else {
            detectedItem = "Unknown Item";
            category = "General";
        }

        Map<String, String> response = new HashMap<>();
        response.put("detectedItem", detectedItem);
        response.put("category", category);
        response.put("confidence", "98.5%");
        response.put("message", "I found a match! It looks like a " + detectedItem + ".");

        return ResponseEntity.ok(response);
    }
}
