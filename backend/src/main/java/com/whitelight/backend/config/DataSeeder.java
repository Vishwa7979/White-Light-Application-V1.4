package com.whitelight.backend.config;

import com.whitelight.backend.model.Product;
import com.whitelight.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

        private final ProductRepository productRepository;

        public DataSeeder(ProductRepository productRepository) {
                this.productRepository = productRepository;
        }

        @Override
        public void run(String... args) throws Exception {
                if (productRepository.count() == 0) {
                        seedProducts();
                }
        }

        private void seedProducts() {
                List<Product> products = Arrays.asList(
                                // Headphones
                                new Product(
                                                "Sony WH-CH520 Wireless Headphones",
                                                4499.0,
                                                5990.0,
                                                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
                                                4.5,
                                                12453,
                                                "Wireless on-ear headphones with up to 50 hours battery life",
                                                Arrays.asList("50hrs Battery", "Quick Charge", "Built-in Mic",
                                                                "Lightweight")),
                                new Product(
                                                "boAt Rockerz 450 Bluetooth Headset",
                                                1999.0,
                                                2990.0,
                                                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
                                                4.3,
                                                8921,
                                                "Wireless Bluetooth headphones with immersive audio",
                                                Arrays.asList("15hrs Playback", "Padded Ear Cushions", "Dual Modes",
                                                                "Foldable")),

                                // Jewelry
                                new Product(
                                                "Pearl Drop Earrings with Gold Plating",
                                                2799.0,
                                                4999.0,
                                                "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
                                                4.7,
                                                3421,
                                                "Elegant pearl drop earrings with 18K gold plating",
                                                Arrays.asList("18K Gold Plated", "Natural Pearls", "Gift Boxed",
                                                                "1 Year Warranty")),
                                new Product(
                                                "Designer Silk Scarf Collection",
                                                1899.0,
                                                3500.0,
                                                "https://images.unsplash.com/photo-1601924287166-019cc06ca9f5?w=400&h=400&fit=crop",
                                                4.6,
                                                1876,
                                                "Luxurious silk scarf with floral patterns",
                                                Arrays.asList("100% Pure Silk", "Hand-rolled Edges", "Multiple Colors",
                                                                "Gift Wrapped")),

                                // Sneakers
                                new Product(
                                                "Nike Air Max 270 React",
                                                8999.0,
                                                12995.0,
                                                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
                                                4.8,
                                                5432,
                                                "Premium running shoes with Air Max cushioning",
                                                Arrays.asList("Air Max Technology", "Breathable Mesh",
                                                                "Durable Outsole", "Multiple Colors")),
                                new Product(
                                                "Adidas Ultraboost 22",
                                                9499.0,
                                                14999.0,
                                                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
                                                4.7,
                                                4123,
                                                "Revolutionary comfort with Boost technology",
                                                Arrays.asList("Boost Cushioning", "Primeknit Upper",
                                                                "Continental Rubber", "Energy Return")),

                                // Skincare
                                new Product(
                                                "Organic Aloe Vera Gel - Pure & Natural",
                                                399.0,
                                                699.0,
                                                "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
                                                4.6,
                                                2341,
                                                "99% pure aloe vera gel for sensitive skin",
                                                Arrays.asList("Certified Organic", "Fragrance Free",
                                                                "Dermatologist Tested", "No Parabens")),
                                new Product(
                                                "Gentle Cleansing Face Wash",
                                                549.0,
                                                899.0,
                                                "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
                                                4.5,
                                                1876,
                                                "pH-balanced cleanser for sensitive skin",
                                                Arrays.asList("Hypoallergenic", "Soap Free", "Natural Ingredients",
                                                                "Cruelty Free")),

                                // Laptops
                                new Product(
                                                "Dell Inspiron 15 3000 Series",
                                                42999.0,
                                                54990.0,
                                                "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
                                                4.4,
                                                3421,
                                                "Intel i5 11th Gen, 8GB RAM, 512GB SSD",
                                                Arrays.asList("8GB RAM", "512GB SSD", "15.6\" FHD Display",
                                                                "Windows 11")),

                                // Cricket Bats
                                new Product("SG Nexus Plus Kashmir Willow Cricket Bat", 3299.0, 4500.0,
                                                "https://images.unsplash.com/photo-1635351610543-752b8abe48aa?w=400&h=400&fit=crop",
                                                4.5, 120,
                                                "High quality Kashmir Willow bat",
                                                Arrays.asList("Size 6", "Kashmir Willow", "SG Grade")),
                                new Product("SS Ton Reserve Edition English Willow Bat", 4850.0, 6000.0,
                                                "https://images.unsplash.com/photo-1595207732481-22cccd3480fe?w=400&h=400&fit=crop",
                                                4.7, 150,
                                                "English Willow Bat for pro players",
                                                Arrays.asList("English Willow", "Grade A", "Lightweight")),

                                // Walking Sticks
                                new Product("Drive Medical Deluxe Quad Cane", 1299.0, 1500.0,
                                                "https://images.unsplash.com/photo-1764072955216-547f731d176d?w=400&h=400&fit=crop",
                                                4.6, 100,
                                                "Quad cane with small base",
                                                Arrays.asList("Quad base", "Adjustable height")),

                                // Hearing Aids
                                new Product("Signia Pure Charge&Go 3X", 45999.0, 50000.0,
                                                "https://images.unsplash.com/photo-1596088869451-491e167efabb?w=400&h=400&fit=crop",
                                                4.8, 150,
                                                "Rechargeable hearing aid",
                                                Arrays.asList("Rechargeable", "Bluetooth", "App Control")),

                                // Smartphones
                                new Product("Redmi Note 12 5G", 14999.0, 18999.0,
                                                "https://images.unsplash.com/photo-1760900051041-90417b9c110e?w=400&h=400&fit=crop",
                                                4.4, 100,
                                                "5G budget smartphone",
                                                Arrays.asList("5G", "128GB Storage", "48MP Camera")));

                if (products != null) {
                        productRepository.saveAll(products);
                }
                if (products != null) {
                        System.out.println("Seeded " + products.size() + " products.");
                }
        }
}
