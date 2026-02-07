

const Shorts = () => {
    // Mock shorts data (usually different aspect ratio, 9:16)
    const mockShorts = Array.from({ length: 8 }).map((_, i) => ({
        id: `short-${i}`,
        title: `Amazing Short Video #${i + 1}`,
        views: '1.2M',
    }));

    return (
        <div className="flex flex-col items-center gap-6 py-4">
            {mockShorts.map((short) => (
                <div key={short.id} className="relative w-[360px] h-[640px] bg-gray-800 rounded-xl overflow-hidden shadow-lg snap-center flex-shrink-0">
                    {/* Placeholder for video content */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <span className="text-gray-500 font-bold">Short Video Player</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-16">
                        <h3 className="font-bold text-white mb-2">{short.title}</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                            <span className="text-sm font-medium">@creator</span>
                        </div>
                    </div>

                    <div className="absolute bottom-4 right-2 flex flex-col gap-4 items-center">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">👍</div>
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">👎</div>
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">💬</div>
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">share</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shorts;
