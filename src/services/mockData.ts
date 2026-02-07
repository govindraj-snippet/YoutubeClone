import type { YouTubeVideo, YouTubeSearchResult, YouTubeChannel } from '../types/youtube';

export const mockVideos: YouTubeVideo[] = [
    {
        kind: 'youtube#video',
        id: 'dQw4w9WgXcQ',
        snippet: {
            publishedAt: '2009-10-25T06:57:33Z',
            channelId: 'UC38IQsAvIsxxjztdMZQtwHA',
            title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
            description: 'The official video for “Never Gonna Give You Up” by Rick Astley. \n\nTaken from the album ‘Whenever You Need Somebody’ – deluxe 2CD and digital deluxe out 6th May 2022.',
            thumbnails: {
                default: { url: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg', width: 120, height: 90 },
                medium: { url: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', width: 320, height: 180 },
                high: { url: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg', width: 480, height: 360 }
            },
            channelTitle: 'Rick Astley',
            tags: ['Rick Astley', 'Never Gonna Give You Up', 'Pop'],
            categoryId: '10'
        },
        statistics: {
            viewCount: '1412834124',
            likeCount: '16000000',
            favoriteCount: '0',
            commentCount: '2000000'
        }
    },
    {
        kind: 'youtube#video',
        id: 'kXYiU_JCYtU',
        snippet: {
            publishedAt: '2020-01-01T12:00:00Z',
            channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            title: 'Numb [Official Music Video] - Linkin Park',
            description: 'Linkin Park "Numb" off of the album METEORA. Directed by Joe Hahn.',
            thumbnails: {
                default: { url: 'https://i.ytimg.com/vi/kXYiU_JCYtU/default.jpg', width: 120, height: 90 },
                medium: { url: 'https://i.ytimg.com/vi/kXYiU_JCYtU/mqdefault.jpg', width: 320, height: 180 },
                high: { url: 'https://i.ytimg.com/vi/kXYiU_JCYtU/hqdefault.jpg', width: 480, height: 360 }
            },
            channelTitle: 'Linkin Park',
            categoryId: '10'
        },
        statistics: {
            viewCount: '2050300400',
            likeCount: '12000000',
            favoriteCount: '0',
            commentCount: '500000'
        }
    },
    {
        kind: 'youtube#video',
        id: 'jNQXAC9IVRw',
        snippet: {
            publishedAt: '2005-04-24T03:31:52Z',
            channelId: 'UC4QZ_Js_hAjChinVVfQS-ig',
            title: 'Me at the zoo',
            description: 'The first video on YouTube. Maybe it\'s time to go back to the zoo?',
            thumbnails: {
                default: { url: 'https://i.ytimg.com/vi/jNQXAC9IVRw/default.jpg', width: 120, height: 90 },
                medium: { url: 'https://i.ytimg.com/vi/jNQXAC9IVRw/mqdefault.jpg', width: 320, height: 180 },
                high: { url: 'https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg', width: 480, height: 360 }
            },
            channelTitle: 'jawed',
            categoryId: '22'
        },
        statistics: {
            viewCount: '265000000',
            likeCount: '13000000',
            favoriteCount: '0',
            commentCount: '11000000'
        }
    },
    {
        kind: 'youtube#video',
        id: 'TestingVideoId1',
        snippet: {
            publishedAt: '2023-10-15T14:30:00Z',
            channelId: 'UC_TestingChannel',
            title: 'Building a YouTube Clone in 1 Hour',
            description: 'Watch me code a full YouTube clone using React, Tailwind, and TypeScript! Learn how to use the YouTube Data API.',
            thumbnails: {
                default: { url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=320&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', width: 120, height: 90 },
                medium: { url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=320&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', width: 320, height: 180 },
                high: { url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=480&auto=format&fit=crop&q=80&ixlib=rb-4.0.3', width: 480, height: 360 }
            },
            channelTitle: 'Code With Me',
            categoryId: '28'
        },
        statistics: {
            viewCount: '54000',
            likeCount: '3200',
            favoriteCount: '0',
            commentCount: '450'
        }
    },
    {
        kind: 'youtube#video',
        id: 'TestingVideoId2',
        snippet: {
            publishedAt: '2024-01-20T09:15:00Z',
            channelId: 'UC_TechReview',
            title: 'The Future of AI in 2025',
            description: 'Deep dive into what we can wait for in the next few years regarding Artificial Intelligence.',
            thumbnails: {
                default: { url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', width: 120, height: 90 },
                medium: { url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', width: 320, height: 180 },
                high: { url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=480&auto=format&fit=crop&q=80&ixlib=rb-4.0.3', width: 480, height: 360 }
            },
            channelTitle: 'Tech Vision',
            categoryId: '28'
        },
        statistics: {
            viewCount: '890000',
            likeCount: '45000',
            favoriteCount: '0',
            commentCount: '1200'
        }
    }
];

export const mockSearchResults: YouTubeSearchResult[] = mockVideos.map(video => ({
    kind: 'youtube#searchResult',
    id: {
        kind: 'youtube#video',
        videoId: typeof video.id === 'string' ? video.id : video.id.videoId
    },
    snippet: video.snippet
}));

export const mockChannel: YouTubeChannel = {
    kind: 'youtube#channel',
    id: 'UC38IQsAvIsxxjztdMZQtwHA',
    snippet: {
        title: 'Code With Me',
        description: 'Learn coding through practical examples!',
        publishedAt: '2019-01-01T00:00:00Z',
        thumbnails: {
            default: { url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=60', width: 88, height: 88 },
            medium: { url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=240&auto=format&fit=crop&q=60', width: 240, height: 240 },
            high: { url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60', width: 800, height: 800 }
        },
        localized: { title: 'Code With Me', description: 'Learn coding through practical examples!' },
        channelId: 'UC38IQsAvIsxxjztdMZQtwHA',
        channelTitle: 'Code With Me'
    },
    statistics: {
        viewCount: '5000000',
        subscriberCount: '100000',
        hiddenSubscriberCount: false,
        videoCount: '50',
        favoriteCount: '0',
        commentCount: '0',
        likeCount: '0'
    },
    brandingSettings: {
        image: {
            bannerExternalUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=80'
        }
    }
};
