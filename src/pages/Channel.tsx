import { useParams } from 'react-router-dom';
import { useChannelDetails, useChannelVideos } from '../hooks/useYouTube';
import { VideoCard } from '../components/shared/VideoCard';
import { Loader } from '../components/shared/Loader';
import { formatViews } from '../utils/format';

const Channel = () => {
    const { channelId } = useParams();
    const { data: channel, isLoading: isChannelLoading } = useChannelDetails(channelId || '');
    const { data: videos, isLoading: isVideosLoading } = useChannelVideos(channelId || '');

    if (isChannelLoading || !channel) return <Loader />;

    return (
        <div className="flex flex-col w-full">
            {/* Banner */}
            {channel.brandingSettings?.image?.bannerExternalUrl && (
                <div className="h-32 sm:h-48 md:h-64 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${channel.brandingSettings.image.bannerExternalUrl})` }}>
                </div>
            )}

            {/* Channel Header */}
            <div className="p-4 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-800 pb-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gray-700">
                    <img src={channel.snippet.thumbnails.high.url} alt={channel.snippet.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl font-bold">{channel.snippet.title}</h1>
                    <div className="flex flex-col sm:flex-row gap-2 text-gray-400 mt-2 text-sm sm:text-base">
                        <span>{channel.snippet.customUrl}</span>
                        <span>•</span>
                        <span>{formatViews(channel.statistics.subscriberCount)} subscribers</span>
                        <span>•</span>
                        <span>{formatViews(channel.statistics.videoCount)} videos</span>
                    </div>
                    <p className="mt-4 text-gray-400 max-w-2xl line-clamp-2">{channel.snippet.description}</p>
                    <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition self-center sm:self-start">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Videos Tab */}
            <div className="p-4 sm:p-8">
                <h2 className="text-xl font-bold mb-6 border-b-2 border-white inline-block pb-1">Videos</h2>
                {isVideosLoading ? <Loader /> : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {videos?.map((video) => (
                            <VideoCard key={video.id.videoId} video={video} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Channel;
