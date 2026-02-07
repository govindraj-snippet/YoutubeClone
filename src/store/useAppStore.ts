import { create } from 'zustand';

interface AppState {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isSidebarOpen: true,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    closeSidebar: () => set({ isSidebarOpen: false }),
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),
}));
