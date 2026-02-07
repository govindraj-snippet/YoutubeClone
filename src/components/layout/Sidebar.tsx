import { Home, Compass, Clock, PlaySquare, Users, ThumbsUp, Flame, ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { Link, useLocation } from 'react-router-dom';

const sidebarItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Shorts', path: '/shorts' },
    { icon: Users, label: 'Subscriptions', path: '/subscriptions' },
];

const secondaryItems = [
    { icon: Clock, label: 'History', path: '/history' },
    { icon: PlaySquare, label: 'Your videos', path: '/your-videos' },
    { icon: Clock, label: 'Watch later', path: '/watch-later' },
    { icon: ThumbsUp, label: 'Liked videos', path: '/liked' },
];

const exploreItems = [
    { icon: Flame, label: 'Trending', path: '/trending' },
    { icon: ShoppingBag, label: 'Shopping', path: '/shopping' },
    { icon: Music2, label: 'Music', path: '/music' },
    { icon: Film, label: 'Movies', path: '/movies' },
    { icon: Radio, label: 'Live', path: '/live' },
    { icon: Gamepad2, label: 'Gaming', path: '/gaming' },
    { icon: Newspaper, label: 'News', path: '/news' },
    { icon: Trophy, label: 'Sports', path: '/sports' },
    { icon: Lightbulb, label: 'Learning', path: '/learning' },
    { icon: Shirt, label: 'Fashion & Beauty', path: '/fashion' },
];


export const Sidebar = () => {
    const { isSidebarOpen } = useAppStore();
    const location = useLocation();

    const SidebarItem = ({ icon: Icon, label, path }: { icon: any, label: string, path: string }) => {
        const isActive = location.pathname === path;
        return (
            <Link
                to={path}
                className={`flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors ${isActive ? 'bg-gray-800 font-medium' : ''}`}
            >
                <Icon size={24} />
                <span className={`text-sm ${isActive ? 'font-medium' : ''}`}>{label}</span>
            </Link>
        );
    };

    if (!isSidebarOpen) return null; // Or mini sidebar design

    return (
        <aside className="w-60 bg-[#0f0f0f] fixed left-0 top-14 bottom-0 overflow-y-auto px-4 pb-4 z-40 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <div className="flex flex-col gap-2 py-4 border-b border-gray-800">
                {sidebarItems.map((item) => (
                    <SidebarItem key={item.label} {...item} />
                ))}
            </div>
            <div className="flex flex-col gap-2 py-4 border-b border-gray-800">
                <h3 className="px-3 text-lg font-bold mb-1">You</h3>
                {secondaryItems.map((item) => (
                    <SidebarItem key={item.label} {...item} />
                ))}
            </div>
            <div className="flex flex-col gap-2 py-4">
                <h3 className="px-3 text-lg font-bold mb-1">Explore</h3>
                {exploreItems.map((item) => (
                    <SidebarItem key={item.label} {...item} />
                ))}
            </div>
            <div className="py-4 px-3 text-xs text-gray-500 font-medium">
                <p>About Press Copyright</p>
                <p>Contact us Creators</p>
                <p>Advertise Developers</p>
                <br />
                <p>© 2024 Google LLC</p>
            </div>
        </aside>
    );
};
