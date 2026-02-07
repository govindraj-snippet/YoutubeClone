import { useSearchParams } from 'react-router-dom';
import { useSearchVideos } from '../hooks/useYouTube';
import { VideoCard } from '../components/shared/VideoCard';
import { Loader } from '../components/shared/Loader';
import { Filter } from 'lucide-react';

const SearchFeed = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { data: videos, isLoading, error } = useSearchVideos(query);

    if (isLoading) return <Loader />;

    if (error || !videos?.length) {
        return (
            <div className="flex justify-center items-center h-full text-center p-10">
                <div>
                    <h2 className="text-xl font-bold mb-2">No results found</h2>
                    <p className="text-gray-400">Try searching for something else.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-2 border-b border-gray-800 pb-2 mb-2">
                <Filter size={20} />
                <span className="font-medium">Filters</span>
            </div>
            {videos.map((video) => (
                <VideoCard key={video.id.videoId} video={video} layout="list" />
            ))}
        </div>
    );
};

export default SearchFeed;
