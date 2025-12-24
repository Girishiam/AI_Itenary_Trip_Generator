import { create } from 'zustand';

interface AppState {
    theme: 'light' | 'dark';
    isAuthenticated: boolean;
    toggleTheme: () => void;
    login: () => void;
    logout: () => void;
}

export const useStore = create<AppState>((set) => ({
    theme: 'dark', // Default to dark as per 'Obsidian' vibe
    isAuthenticated: false,
    toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        // Side effect: Update document class
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        return { theme: newTheme };
    }),
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));
