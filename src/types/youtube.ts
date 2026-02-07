export interface YouTubeThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface YouTubeSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: YouTubeThumbnail;
        medium: YouTubeThumbnail;
        high: YouTubeThumbnail;
        standard?: YouTubeThumbnail;
        maxres?: YouTubeThumbnail;
    };
    channelTitle: string;
    tags?: string[];
    categoryId?: string;
    liveBroadcastContent?: string;
    localized?: {
        title: string;
        description: string;
    };
    customUrl?: string; // Added for Channel details
}

export interface YouTubeStatistics {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
    subscriberCount?: string; // For channels
    videoCount?: string; // For channels
    hiddenSubscriberCount?: boolean;
}

export interface YouTubeVideo {
    kind: 'youtube#video';
    id: string | { kind: string; videoId: string }; // Search results use object id
    snippet: YouTubeSnippet;
    statistics?: YouTubeStatistics;
    player?: {
        embedHtml: string;
    };
}

export interface YouTubeChannel {
    kind: 'youtube#channel';
    id: string;
    snippet: YouTubeSnippet;
    statistics: YouTubeStatistics;
    brandingSettings?: {
        channel?: {
            title: string;
            description: string;
            keywords: string;
            unsubscribedTrailer: string;
        };
        image?: {
            bannerExternalUrl: string;
        };
    };
}

export interface YouTubeSearchResult {
    kind: 'youtube#searchResult';
    id: {
        kind: string;
        videoId?: string;
        channelId?: string;
        playlistId?: string;
    };
    snippet: YouTubeSnippet;
}

export interface YouTubeResponse<T> {
    kind: string;
    etag: string;
    nextPageToken?: string;
    prevPageToken?: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: T[];
}
