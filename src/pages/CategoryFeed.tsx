import { useLocation } from 'react-router-dom';
import { useTrendingVideos } from '../hooks/useYouTube';
import { VideoCard } from '../components/shared/VideoCard';
import { Loader } from '../components/shared/Loader';


// Map category names to IDs
const CATEGORY_IDS: Record<string, string> = {
    music: '10',
    sports: '17',
    gaming: '20',
    news: '25',
    movies: '30',
    learning: '27',
    fashion: '26',
    shopping: '24', // Entertainment/Lifestyle proxy
    live: '24', // Entertainment proxy (YouTube API doesn't have a simple 'live' category ID for trending)
    trending: '', // Default to general trending
};

const CategoryFeed = () => {
    const location = useLocation();
    const categoryName = location.pathname.substring(1); // remove leading slash
    const categoryId = CATEGORY_IDS[categoryName] || '';

    const { data: videos, isLoading, error } = useTrendingVideos(categoryId);

    if (isLoading) return <Loader />;

    if (error) {
        return (
            <div className="flex justify-center items-center h-full text-center">
                <div>
                    <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
                    <p className="text-gray-400">Failed to load videos for {categoryName}.</p>
                </div>
            </div>
        );
    }

    // Simple shuffle/filter simulation for demo purposes
    // If we had real data, we'd use the categoryId to fetch.
    const displayVideos = videos || [];

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold capitalize mb-4">{categoryName}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                {displayVideos.map((video) => (
                    <VideoCard key={video.id as string} video={video} />
                ))}
            </div>
        </div>
    );
};

export default CategoryFeed;
