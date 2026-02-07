import { useTrendingVideos } from '../hooks/useYouTube';
import { VideoCard } from '../components/shared/VideoCard';
import { Loader } from '../components/shared/Loader';

const Home = () => {
    const { data: videos, isLoading, error } = useTrendingVideos();

    if (isLoading) return <Loader />;

    if (error) {
        return (
            <div className="flex justify-center items-center h-full text-center">
                <div>
                    <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
                    <p className="text-gray-400">Failed to load trending videos. Please try again later.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {videos?.map((video) => (
                <VideoCard key={video.id as string} video={video} />
            ))}
        </div>
    );
};

export default Home;
