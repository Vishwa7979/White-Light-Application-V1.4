export type ProductCategory = 'shoe' | 'headset' | 'laptop' | 'mobile' | 'unknown';

export interface RecognizedProduct {
  category: ProductCategory;
  productName: string;
  initialQuestion: string;
  specifications: string[];
  products: any[];
}

/**
 * Simple image recognition based on filename or mock detection
 * In production, this would use actual ML/AI image recognition
 */
export async function recognizeProduct(file: File): Promise<RecognizedProduct> {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const filename = file.name.toLowerCase();
  
  // Shoe detection
  if (filename.includes('shoe') || filename.includes('sneaker') || filename.includes('boot')) {
    return {
      category: 'shoe',
      productName: 'Running Shoes',
      initialQuestion: 'Are you looking for running shoes?',
      specifications: ['Size', 'Color preference', 'Brand preference'],
      products: generateShoeProducts()
    };
  }
  
  // Headset detection
  if (filename.includes('headset') || filename.includes('headphone') || filename.includes('earphone')) {
    return {
      category: 'headset',
      productName: 'Wireless Headphones',
      initialQuestion: 'Are you looking for wireless headphones?',
      specifications: ['Type (over-ear/in-ear)', 'Budget range', 'Usage (gaming/music)'],
      products: generateHeadsetProducts()
    };
  }
  
  // Laptop detection
  if (filename.includes('laptop') || filename.includes('notebook') || filename.includes('macbook')) {
    return {
      category: 'laptop',
      productName: 'Laptop',
      initialQuestion: 'Are you looking for a laptop?',
      specifications: ['Screen size', 'RAM', 'Primary use (work/gaming/creative)'],
      products: generateLaptopProducts()
    };
  }
  
  // Mobile detection
  if (filename.includes('phone') || filename.includes('mobile') || filename.includes('smartphone')) {
    return {
      category: 'mobile',
      productName: 'Smartphone',
      initialQuestion: 'Are you looking for a smartphone?',
      specifications: ['Storage', 'Camera quality', 'Budget'],
      products: generateMobileProducts()
    };
  }
  
  // Default: try to detect from image content (mock)
  // In production, this would use actual image analysis
  return {
    category: 'shoe', // Default to shoe for demo
    productName: 'Running Shoes',
    initialQuestion: 'Are you looking for running shoes?',
    specifications: ['Size', 'Color preference', 'Brand preference'],
    products: generateShoeProducts()
  };
}

function generateShoeProducts() {
  return [
    {
      id: 'shoe-1',
      name: 'Nike Air Max Plus',
      price: 4999,
      originalPrice: 6999,
      discount: 29,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.5,
      reviews: 234,
      badge: 'Popular',
      sizes: ['8', '9', '10', '11'],
      colors: ['Blue', 'Black', 'White']
    },
    {
      id: 'shoe-2',
      name: 'Adidas Ultraboost 21',
      price: 5499,
      originalPrice: 7499,
      discount: 27,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.7,
      reviews: 189,
      badge: 'Best Seller',
      sizes: ['8', '9', '10', '11', '12'],
      colors: ['White', 'Grey', 'Black']
    },
    {
      id: 'shoe-3',
      name: 'Puma RS-X',
      price: 3999,
      originalPrice: 5499,
      discount: 27,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.3,
      reviews: 156,
      badge: 'New',
      sizes: ['8', '9', '10'],
      colors: ['Red', 'White', 'Blue']
    }
  ];
}

function generateHeadsetProducts() {
  return [
    {
      id: 'headset-1',
      name: 'Sony WH-1000XM5',
      price: 24999,
      originalPrice: 29999,
      discount: 17,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.8,
      reviews: 512,
      badge: 'Best Seller',
      features: ['ANC', 'Bluetooth 5.2', '30hr battery'],
      colors: ['Black', 'Silver']
    },
    {
      id: 'headset-2',
      name: 'Bose QuietComfort 45',
      price: 22999,
      originalPrice: 27999,
      discount: 18,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.6,
      reviews: 389,
      badge: 'Popular',
      features: ['ANC', 'Bluetooth 5.1', '24hr battery'],
      colors: ['Black', 'White']
    },
    {
      id: 'headset-3',
      name: 'JBL Tune 760NC',
      price: 4999,
      originalPrice: 6999,
      discount: 29,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.4,
      reviews: 278,
      badge: 'Budget Pick',
      features: ['ANC', 'Bluetooth 5.0', '35hr battery'],
      colors: ['Blue', 'Black', 'White']
    }
  ];
}

function generateLaptopProducts() {
  return [
    {
      id: 'laptop-1',
      name: 'MacBook Air M2',
      price: 99999,
      originalPrice: 119900,
      discount: 17,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.9,
      reviews: 834,
      badge: 'Editor\'s Choice',
      specs: ['M2 Chip', '8GB RAM', '256GB SSD', '13.6" Display'],
      colors: ['Silver', 'Space Grey', 'Starlight', 'Midnight']
    },
    {
      id: 'laptop-2',
      name: 'Dell XPS 13',
      price: 89999,
      originalPrice: 104999,
      discount: 14,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.7,
      reviews: 567,
      badge: 'Best Seller',
      specs: ['Intel i7', '16GB RAM', '512GB SSD', '13.4" FHD+'],
      colors: ['Platinum', 'Graphite']
    },
    {
      id: 'laptop-3',
      name: 'HP Pavilion 15',
      price: 54999,
      originalPrice: 69999,
      discount: 21,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.3,
      reviews: 432,
      badge: 'Value',
      specs: ['AMD Ryzen 5', '8GB RAM', '512GB SSD', '15.6" FHD'],
      colors: ['Silver', 'Black']
    }
  ];
}

function generateMobileProducts() {
  return [
    {
      id: 'mobile-1',
      name: 'iPhone 15 Pro',
      price: 134900,
      originalPrice: 134900,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1592286927505-02c0e2724e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.9,
      reviews: 1245,
      badge: 'Premium',
      specs: ['A17 Pro', '128GB', '48MP Camera', '6.1" Display'],
      colors: ['Titanium', 'Blue', 'White', 'Black']
    },
    {
      id: 'mobile-2',
      name: 'Samsung Galaxy S24',
      price: 79999,
      originalPrice: 89999,
      discount: 11,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.7,
      reviews: 892,
      badge: 'Popular',
      specs: ['Snapdragon 8 Gen 3', '256GB', '50MP Camera', '6.2" AMOLED'],
      colors: ['Violet', 'Grey', 'Cream']
    },
    {
      id: 'mobile-3',
      name: 'OnePlus 12',
      price: 64999,
      originalPrice: 69999,
      discount: 7,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      rating: 4.6,
      reviews: 634,
      badge: 'Best Value',
      specs: ['Snapdragon 8 Gen 3', '256GB', '50MP Camera', '6.7" AMOLED'],
      colors: ['Green', 'Black']
    }
  ];
}
