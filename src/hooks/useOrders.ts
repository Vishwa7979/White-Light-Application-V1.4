import { useState, useEffect, useCallback } from 'react';
import apiClient from '../utils/apiClient';

export interface Order {
    id: number;
    orderNumber: string;
    orderDate: string;
    status: string;
    product: any;
    shippingAddress: string;
    trackingId?: string;
    estimatedDelivery: string;
}

export const useOrders = (isAuthenticated: boolean) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchOrders = useCallback(async () => {
        if (!isAuthenticated) return;
        setLoading(true);
        try {
            const response = await apiClient.get<Order[]>('/orders');
            setOrders(response.data);
        } catch (err) {
            console.error('Failed to fetch orders', err);
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated]);

    const placeOrder = async (productId: number, shippingAddress: string) => {
        try {
            const response = await apiClient.post<Order>('/orders', { productId, shippingAddress });
            await fetchOrders();
            return response.data;
        } catch (err) {
            console.error('Failed to place order', err);
            throw err;
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    return { orders, loading, fetchOrders, placeOrder };
};
