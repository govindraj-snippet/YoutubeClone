import { Link } from 'react-router-dom';
import type { YouTubeVideo, YouTubeSearchResult } from '../../types/youtube';
import { formatViews, formatDate } from '../../utils/format';

interface VideoCardProps {
    video: YouTubeVideo | YouTubeSearchResult;
    layout?: 'grid' | 'list'; // 'list' for search results or sidebar
}

export const VideoCard = ({ video, layout = 'grid' }: VideoCardProps) => {
    const { id, snippet, statistics } = video as any;
    // Determine videoId: search result has id.videoId, video detail has id (string)
    const videoId = typeof id === 'string' ? id : id.videoId;

    // Note: Search API results don't include contentDetails (duration) or statistics (views) directly in snippet
    // If statistics are missing, we might need to fetch them separately if this is a search result
    // But for "Home" (Videos endpoint), we have them.
    // For Search endpoint, we don't have stats unless we do a second call. 
    // For now, simpler to just display unavailable data gracefully or fetch.
    // The 'video' prop coming from getTrendingVideos() (Videos resource) has statistics.
    // The 'video' prop coming from searchVideos() (Search resource) does NOT have statistics.

    return (
        <Link to={`/watch/${videoId}`} className={`group flex ${layout === 'list' ? 'flex-row gap-4' : 'flex-col gap-2'}`}>
            <div className={`relative rounded-xl overflow-hidden aspect-video ${layout === 'list' ? 'w-40 sm:w-64 min-w-[160px]' : 'w-full'}`}>
                <img
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {/* Only show duration if we have it (unlikely in search snippet unless we enriched it) */}
                {/* <div className="absolute bottom-1 right-1 bg-black/80 px-1 text-xs rounded text-white font-medium">
          {formatDuration(contentDetails?.duration)}
        </div> */}
            </div>

            <div className="flex flex-col gap-1 flex-1">
                <h3 className={`font-bold text-white line-clamp-2 ${layout === 'list' ? 'text-lg' : 'text-base'}`}>
                    {snippet.title}
                </h3>
                <div className="text-sm text-gray-400">
                    <Link to={`/channel/${snippet.channelId}`} className="hover:text-white transition-colors">
                        {snippet.channelTitle}
                    </Link>
                    <div className="flex items-center gap-1">
                        {statistics?.viewCount && (
                            <>
                                <span>{formatViews(statistics.viewCount)}</span>
                                <span>•</span>
                            </>
                        )}
                        <span>{formatDate(snippet.publishedAt)}</span>
                    </div>
                </div>
                {layout === 'list' && (
                    <p className="text-sm text-gray-400 mt-2 line-clamp-1">
                        {snippet.description}
                    </p>
                )}
            </div>
        </Link>
    );
};
