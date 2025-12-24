import { create } from 'zustand';

interface User {
    name: string;
    email: string;
    avatar?: string;
    plan: 'Free' | 'Pro' | 'Ultimate';
}

interface AppState {
    theme: 'light' | 'dark';
    isAuthenticated: boolean;
    user: User | null;
    toggleTheme: () => void;
    login: (userData?: User) => void;
    logout: () => void;
    updateUser: (data: Partial<User>) => void;
}

export const useStore = create<AppState>((set) => ({
    theme: 'dark', // Default to dark as per 'Obsidian' vibe
    isAuthenticated: false,
    user: null,
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
    login: (userData) => set({
        isAuthenticated: true,
        user: userData || {
            name: 'Girish',
            email: 'girish@example.com',
            plan: 'Free',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        }
    }),
    logout: () => set({ isAuthenticated: false, user: null }),
    updateUser: (data) => set((state) => ({
        user: state.user ? { ...state.user, ...data } : null
    })),
}));
