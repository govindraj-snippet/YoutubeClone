import { useQuery } from '@tanstack/react-query';
import { youtubeService } from '../services/youtube';

export const useTrendingVideos = (categoryId?: string) => {
    return useQuery({
        queryKey: ['trendingVideos', categoryId],
        queryFn: () => youtubeService.getTrendingVideos(categoryId),
    });
};

export const useSearchVideos = (query: string) => {
    return useQuery({
        queryKey: ['searchVideos', query],
        queryFn: () => youtubeService.searchVideos(query),
        enabled: !!query,
    });
};

export const useVideoDetails = (videoId: string) => {
    return useQuery({
        queryKey: ['videoDetails', videoId],
        queryFn: () => youtubeService.getVideoDetails(videoId),
        enabled: !!videoId,
    });
};

export const useRelatedVideos = (videoId: string) => {
    return useQuery({
        queryKey: ['relatedVideos', videoId],
        queryFn: () => youtubeService.getRelatedVideos(videoId),
        enabled: !!videoId,
    });
};

export const useChannelDetails = (channelId: string) => {
    return useQuery({
        queryKey: ['channelDetails', channelId],
        queryFn: () => youtubeService.getChannelDetails(channelId),
        enabled: !!channelId,
    });
};

export const useChannelVideos = (channelId: string) => {
    return useQuery({
        queryKey: ['channelVideos', channelId],
        queryFn: () => youtubeService.getChannelVideos(channelId),
        enabled: !!channelId,
    });
};
