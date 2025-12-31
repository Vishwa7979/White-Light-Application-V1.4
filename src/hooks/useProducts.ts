import { useState, useEffect, useCallback } from 'react';
import apiClient from '../utils/apiClient';

export interface Product {
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

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const response = await apiClient.get<Product[]>('/products');
            setProducts(response.data);
            setError(null);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch products');
        } finally {
            setLoading(false);
        }
    }, []);

    const searchProducts = useCallback(async (query: string) => {
        setLoading(true);
        try {
            const response = await apiClient.get<Product[]>(`/products/search?q=${query}`);
            setProducts(response.data);
            setError(null);
        } catch (err: any) {
            setError(err.message || 'Search failed');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return { products, loading, error, refetch: fetchProducts, searchProducts };
};
