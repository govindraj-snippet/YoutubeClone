export const Loader = () => {
    return (
        <div className="flex justify-center items-center w-full h-full p-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
    );
};

export const VideoCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="aspect-video bg-gray-800 rounded-xl animate-pulse" />
            <div className="flex gap-2">
                <div className="w-10 h-10 bg-gray-800 rounded-full animate-pulse" />
                <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse" />
                    <div className="h-3 bg-gray-800 rounded w-1/2 animate-pulse" />
                </div>
            </div>
        </div>
    );
};
