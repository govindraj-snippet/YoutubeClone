import { Menu, Search, Mic, Video, Bell } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
    const { toggleSidebar } = useAppStore();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <nav className="h-14 bg-[#0f0f0f] fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                    <Menu size={24} />
                </button>
                <Link to="/" className="flex items-center gap-1">
                    <div className="relative flex items-center justify-center bg-red-600 text-white rounded-lg h-7 w-10">
                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tighter">YouTube</span>
                </Link>
            </div>

            <div className="hidden sm:flex flex-1 max-w-[720px] ml-10 items-center justify-center">
                <form onSubmit={handleSearch} className="flex flex-1 items-center">
                    <div className="flex flex-1 items-center bg-[#121212] border border-gray-700 rounded-l-full px-4 py-0.5 focus-within:border-blue-500 ml-8">
                        <div className="hidden md:block mr-2 text-gray-400">
                            {/* Search icon inside input? No, standard is just input */}
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-transparent outline-none py-1.5 text-white placeholder-gray-400 font-normal"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="bg-[#222] border border-l-0 border-gray-700 px-5 py-[7px] rounded-r-full hover:bg-[#303030] transition-colors">
                        <Search size={20} className="text-gray-200" />
                    </button>
                </form>
                <button className="ml-4 p-2 bg-[#121212] hover:bg-[#303030] rounded-full transition-colors">
                    <Mic size={20} />
                </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <button className="hidden sm:block p-2 hover:bg-gray-800 rounded-full">
                    <Video size={24} />
                </button>
                <button className="p-2 hover:bg-gray-800 rounded-full">
                    <Bell size={24} />
                </button>
                <button className="p-2 hover:bg-gray-800 rounded-full">
                    <div className="w-8 h-8 bg-purple-600 rounded-full text-center leading-8 text-sm font-medium">U</div>
                </button>
            </div>
        </nav>
    );
};
