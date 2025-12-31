export interface ProductDto {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    image: string;
    rating: number;
    reviews: number;
    description: string;
    features: string[];
}

export interface ChatMessageDto {
    id: number;
    text: string;
    user: boolean;
    timestamp: string;
    hasProductCard: boolean;
    product?: ProductDto;
}

export interface ChatThreadDto {
    id: number;
    title: string;
    lastUpdated: string;
}

export interface OrderDto {
    id: number;
    orderNumber: string;
    orderDate: string;
    status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
    product: ProductDto;
    shippingAddress: string;
    trackingId?: string;
    estimatedDelivery: string;
}

export interface UserDto {
    id: number;
    email: string;
    fullName: string;
}
