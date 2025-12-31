import { useState, useCallback, useEffect } from 'react';
import apiClient from '../utils/apiClient';

export interface User {
    id: number;
    email: string;
    fullName: string;
}

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem('whitelight_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('whitelight_auth_token'));

    const login = useCallback(async (email: string, password: string) => {
        try {
            const response = await apiClient.post<any>('/auth/authenticate', { email, password });
            const { token, user: userData } = response.data;

            localStorage.setItem('whitelight_auth_token', token);
            if (userData) {
                localStorage.setItem('whitelight_user', JSON.stringify(userData));
                setUser(userData);
            }
            setIsAuthenticated(true);
            return response.data;
        } catch (err) {
            console.error('Login failed', err);
            throw err;
        }
    }, []);

    const register = useCallback(async (name: string, email: string, password: string) => {
        try {
            const response = await apiClient.post<any>('/auth/register', { name, email, password });
            const { token, user: userData } = response.data;

            localStorage.setItem('whitelight_auth_token', token);
            if (userData) {
                localStorage.setItem('whitelight_user', JSON.stringify(userData));
                setUser(userData);
            }
            setIsAuthenticated(true);
            return response.data;
        } catch (err) {
            console.error('Registration failed', err);
            throw err;
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('whitelight_auth_token');
        localStorage.removeItem('whitelight_user');
        setUser(null);
        setIsAuthenticated(false);
    }, []);

    return { user, isAuthenticated, login, register, logout };
};
