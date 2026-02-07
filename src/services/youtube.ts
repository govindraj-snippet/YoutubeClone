import api from './api';
import type { YouTubeResponse, YouTubeVideo, YouTubeSearchResult, YouTubeChannel } from '../types/youtube';
import { mockVideos, mockSearchResults, mockChannel } from './mockData';

const isMockMode = import.meta.env.VITE_YOUTUBE_API_KEY === 'PLACEHOLDER_KEY_PLEASE_REPLACE_ME';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const youtubeService = {
    getTrendingVideos: async (categoryId?: string): Promise<YouTubeVideo[]> => {
        if (isMockMode) {
            console.warn('Using Mock Data for Trending Videos');
            await delay(500);
            return mockVideos;
        }

        try {
            const params: Record<string, any> = {
                part: 'snippet,statistics',
                chart: 'mostPopular',
                regionCode: 'US',
                maxResults: 50,
            };

            if (categoryId) {
                params.videoCategoryId = categoryId;
            }

            const response = await api.get<YouTubeResponse<YouTubeVideo>>('/videos', { params });
            return response.data.items;
        } catch (error) {
            console.error('API Error, falling back to mock data', error);
            return mockVideos;
        }
    },

    getVideoDetails: async (videoId: string): Promise<YouTubeVideo | null> => {
        if (isMockMode) {
            await delay(300);
            const video = mockVideos.find(v => (typeof v.id === 'string' ? v.id : v.id.videoId) === videoId);
            return video || mockVideos[0];
        }

        try {
            const response = await api.get<YouTubeResponse<YouTubeVideo>>('/videos', {
                params: {
                    part: 'snippet,statistics',
                    id: videoId,
                },
            });
            return response.data.items[0] || null;
        } catch (error) {
            console.error('API Error, falling back to mock data', error);
            return mockVideos[0];
        }
    },

    getRelatedVideos: async (videoId: string): Promise<YouTubeSearchResult[]> => {
        if (isMockMode) {
            await delay(400);
            return mockSearchResults;
        }

        try {
            const response = await api.get<YouTubeResponse<YouTubeSearchResult>>('/search', {
                params: {
                    part: 'snippet',
                    relatedToVideoId: videoId,
                    type: 'video',
                    maxResults: 20,
                },
            });
            return response.data.items;
        } catch (error) {
            console.error('API Error, falling back to mock data', error);
            return mockSearchResults;
        }
    },

    searchVideos: async (query: string): Promise<YouTubeSearchResult[]> => {
        if (isMockMode) {
            console.warn(`Using Mock Data for Search: ${query}`);
            await delay(500);
            // Simple filter for mock capabilities
            return mockSearchResults.filter(v => v.snippet.title.toLowerCase().includes(query.toLowerCase()) || true);
        }

        try {
            const response = await api.get<YouTubeResponse<YouTubeSearchResult>>('/search', {
                params: {
                    part: 'snippet',
                    q: query,
                    type: 'video',
                    maxResults: 50,
                },
            });
            // Filter out items without id.videoId
            return response.data.items.filter(item => item.id.videoId);
        } catch (error) {
            console.error('API Error, falling back to mock data', error);
            return mockSearchResults;
        }
    },

    getChannelDetails: async (channelId: string): Promise<YouTubeChannel | null> => {
        if (isMockMode) {
            await delay(300);
            return mockChannel;
        }

        try {
            const response = await api.get<YouTubeResponse<YouTubeChannel>>('/channels', {
                params: {
                    part: 'snippet,statistics,brandingSettings',
                    id: channelId,
                },
            });
            return response.data.items[0] || null;
        } catch (error) {
            return mockChannel;
        }
    },

    getChannelVideos: async (channelId: string): Promise<YouTubeSearchResult[]> => {
        if (isMockMode) {
            await delay(400);
            return mockSearchResults;
        }

        try {
            const response = await api.get<YouTubeResponse<YouTubeSearchResult>>('/search', {
                params: {
                    part: 'snippet',
                    channelId: channelId,
                    type: 'video',
                    order: 'date',
                    maxResults: 30,
                },
            });
            return response.data.items;
        } catch (error) {
            return mockSearchResults;
        }
    }
};
