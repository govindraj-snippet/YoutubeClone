import { useParams } from 'react-router-dom';
import { useVideoDetails, useRelatedVideos } from '../hooks/useYouTube';
import { VideoCard } from '../components/shared/VideoCard';
import { Loader } from '../components/shared/Loader';
import { formatViews, formatDate } from '../utils/format';
import { ThumbsUp, Share2, Download, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

const Watch = () => {
    const { videoId } = useParams();
    const { data: video, isLoading: isVideoLoading } = useVideoDetails(videoId || '');
    const { data: relatedVideos, isLoading: isRelatedLoading } = useRelatedVideos(videoId || '');
    const [showDescription, setShowDescription] = useState(false);

    if (isVideoLoading || !video) return <Loader />;

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-[1700px] mx-auto">
            {/* Left Column: Player & Details */}
            <div className="flex-1">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mb-4">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={video.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <h1 className="text-xl md:text-2xl font-bold mb-2">{video.snippet.title}</h1>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-4 mb-4">
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold ${!video.snippet.thumbnails ? 'bg-purple-600' : ''}`}>
                            {/* Avatar placeholder or channel thumbnail if available */}
                            {video.snippet.channelTitle.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{video.snippet.channelTitle}</h3>
                            {/* <p className="text-gray-400 text-sm">1.2M subscribers</p> Note: requires channel details fetch */}
                        </div>
                        <button className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition ml-4">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto">
                        <button className="flex items-center gap-2 bg-[#222] hover:bg-[#303030] px-4 py-2 rounded-full transition">
                            <ThumbsUp size={20} />
                            <span className="font-bold text-sm">{formatViews(video.statistics?.likeCount)}</span>
                        </button>
                        <button className="flex items-center gap-2 bg-[#222] hover:bg-[#303030] px-4 py-2 rounded-full transition">
                            <Share2 size={20} />
                            <span className="font-bold text-sm">Share</span>
                        </button>
                        <button className="hidden sm:flex items-center gap-2 bg-[#222] hover:bg-[#303030] px-4 py-2 rounded-full transition">
                            <Download size={20} />
                            <span className="font-bold text-sm">Download</span>
                        </button>
                        <button className="bg-[#222] hover:bg-[#303030] p-2 rounded-full transition">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                </div>

                <div className="bg-[#222] rounded-xl p-4 cursor-pointer hover:bg-[#333] transition" onClick={() => setShowDescription(!showDescription)}>
                    <div className="flex gap-2 font-bold mb-2 text-sm">
                        <span>{formatViews(video.statistics?.viewCount)}</span>
                        <span>{formatDate(video.snippet.publishedAt)}</span>
                    </div>
                    <p className={`text-sm whitespace-pre-wrap ${showDescription ? '' : 'line-clamp-2'}`}>
                        {video.snippet.description}
                    </p>
                    <button className="text-sm font-bold mt-1 text-gray-300">
                        {showDescription ? 'Show less' : '...more'}
                    </button>
                </div>

                <div className="block lg:hidden mt-6">
                    <h3 className="font-bold mb-4">Related Videos</h3>
                    {/* Mobile view relateds */}
                </div>
            </div>

            {/* Right Column: Related Videos */}
            <div className="lg:w-[400px] flex flex-col gap-2">
                {isRelatedLoading ? <Loader /> : relatedVideos?.map((related) => (
                    <VideoCard key={related.id.videoId} video={related} layout="list" />
                ))}
            </div>
        </div>
    );
};

export default Watch;
