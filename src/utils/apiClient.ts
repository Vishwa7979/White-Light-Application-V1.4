import axios from 'axios';
import { toast } from 'react-hot-toast';

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    timestamp: string;
}

const apiClient = axios.create({
    baseURL: 'http://localhost:8081/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to attach JWT token to every request
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('whitelight_auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor to handle standardized responses and errors
apiClient.interceptors.response.use(
    (response) => {
        // Extract data from ApiResponse wrapper
        const apiResponse = response.data as ApiResponse<any>;
        if (apiResponse.success) {
            console.log(`API Success [${response.config.url}]:`, apiResponse.data);
            return { ...response, data: apiResponse.data };
        }
        return response;
    },
    (error) => {
        const message = error.response?.data?.message || error.message || 'An unexpected error occurred';

        if (error.response?.status === 401) {
            toast.error('Session expired. Please sign in again.');
            localStorage.removeItem('whitelight_auth_token');
            localStorage.removeItem('whitelight_user');
            // Optional: window.location.href = '/login';
        } else if (error.response?.status === 403) {
            toast.error('You do not have permission to perform this action.');
        } else {
            toast.error(message);
        }

        return Promise.reject(error);
    }
);

export default apiClient;
