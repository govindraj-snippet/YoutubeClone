import { useLocation } from 'react-router-dom';
import { useTrendingVideos } from '../hooks/useYouTube';
import { VideoCard } from '../components/shared/VideoCard';
import { Loader } from '../components/shared/Loader';
import { History, ThumbsUp, Clock, PlaySquare } from 'lucide-react';

const Library = () => {
    const location = useLocation();
    const type = location.pathname.substring(1); // 'history', 'liked', 'watch-later', etc.
    const { data: videos, isLoading } = useTrendingVideos();

    if (isLoading) return <Loader />;

    const getIcon = () => {
        switch (type) {
            case 'history': return <History size={24} />;
            case 'liked': return <ThumbsUp size={24} />;
            case 'watch-later': return <Clock size={24} />;
            default: return <PlaySquare size={24} />;
        }
    };

    const getTitle = () => {
        switch (type) {
            case 'history': return 'Watch History';
            case 'liked': return 'Liked Videos';
            case 'watch-later': return 'Watch Later';
            case 'your-videos': return 'Your Videos';
            default: return 'Library';
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                <div className="p-3 bg-gray-800 rounded-full">
                    {getIcon()}
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{getTitle()}</h1>
                    <p className="text-gray-400 text-sm">Mock Data for Demonstration</p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {videos?.slice(0, 10).map((video) => (
                    <VideoCard key={video.id as string} video={video} layout="list" />
                ))}
            </div>
        </div>
    );
};

export default Library;
