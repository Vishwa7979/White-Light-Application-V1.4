import { useState, useEffect, useCallback } from 'react';
import apiClient from '../utils/apiClient';
import { ChatThread } from '../utils/chatThreadsData';

export interface ChatMessage {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: string;
    hasProductCard: boolean;
    product?: any;
}

export const useThreads = (isAuthenticated: boolean) => {
    const [threads, setThreads] = useState<ChatThread[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentThreadMessages, setCurrentThreadMessages] = useState<ChatMessage[]>([]);

    const fetchThreads = useCallback(async () => {
        if (!isAuthenticated) return;
        setLoading(true);
        try {
            const response = await apiClient.get<ChatThread[]>('/chat/threads');
            setThreads(response.data);
        } catch (err) {
            console.error('Failed to fetch threads', err);
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated]);

    const fetchMessages = useCallback(async (threadId: number) => {
        setLoading(true);
        try {
            const response = await apiClient.get<ChatMessage[]>(`/chat/threads/${threadId}/messages`);
            setCurrentThreadMessages(response.data);
        } catch (err) {
            console.error('Failed to fetch messages', err);
        } finally {
            setLoading(false);
        }
    }, []);

    const sendMessage = useCallback(async (threadId: number, text: string) => {
        try {
            const response = await apiClient.post<ChatMessage>(`/chat/threads/${threadId}/messages`, { text });
            // The processUserMessage on backend returns current user message, 
            // but AI response is also saved. We might want to refetch or manually append if AI response is not returned immediately.
            // For now, let's refetch to be safe and consistent.
            await fetchMessages(threadId);
            return response.data;
        } catch (err) {
            console.error('Failed to send message', err);
            throw err;
        }
    }, [fetchMessages]);

    const createThread = useCallback(async (title?: string) => {
        try {
            const response = await apiClient.post<ChatThread>('/chat/threads', { title });
            await fetchThreads();
            return response.data;
        } catch (err) {
            console.error('Failed to create thread', err);
            throw err;
        }
    }, [fetchThreads]);

    useEffect(() => {
        fetchThreads();
    }, [fetchThreads]);

    return { threads, loading, currentThreadMessages, fetchMessages, sendMessage, createThread, refetchThreads: fetchThreads };
};
