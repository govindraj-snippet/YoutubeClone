import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { useAppStore } from '../../store/useAppStore';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const { isSidebarOpen } = useAppStore();

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white">
            <Navbar />
            <Sidebar />
            <main
                className={`pt-14 transition-all duration-300 ${isSidebarOpen ? 'md:pl-60' : 'pl-0'
                    }`}
            >
                <div className="p-4 sm:p-6">
                    {children}
                </div>
            </main>
        </div>
    );
};
