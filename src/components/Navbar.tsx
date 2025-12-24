import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { useStore } from '../store/useStore';
import { ChevronDown, User, Heart, Settings, LogOut } from 'lucide-react';
import { EditProfileModal } from './modals/EditProfileModal';
import { SubscriptionModal } from './modals/SubscriptionModal';

export const Navbar = () => {
    const { isAuthenticated, user, logout } = useStore();
    const [isScrolled, setIsScrolled] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isEditProfileOpen, setEditProfileOpen] = useState(false);
    const [isSubscriptionOpen, setSubscriptionOpen] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 20;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    });

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Generate Itinerary', path: '/generate' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "w-full max-w-7xl mx-auto rounded-full px-6 py-4 transition-all duration-500 pointer-events-auto",
                    "flex items-center justify-between",
                    // Base State: Transparent with subtle gradient for text readability
                    "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-[2px] border border-white/5",
                    // Scroll State: Frosted Glass
                    isScrolled && "bg-white/70 backdrop-blur-xl border-white/20 shadow-xl dark:bg-black/50 dark:border-white/10",
                    "hover:bg-white/10 dark:hover:bg-black/30 transition-all"
                )}
            >
                {/* Left: Logo & Brand */}
                <Link to="/" className="flex items-center gap-3 group shrink-0">
                    <div className={cn(
                        "relative h-10 w-10 flex items-center justify-center rounded-xl border shadow-inner overflow-hidden group-hover:scale-105 transition-all",
                        isScrolled ? "bg-white/50 border-white/20 dark:bg-white/10 dark:border-white/10" : "bg-white/10 backdrop-blur-sm border-white/20"
                    )}>
                        <img
                            src="/logo.webp"
                            alt="Luma Logo"
                            className="h-8 w-8 object-contain drop-shadow-md"
                        />
                    </div>
                    <span className={cn(
                        "text-xl md:text-2xl font-bold tracking-tight transition-colors drop-shadow-sm",
                        isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                    )}>
                        Luma
                    </span>
                </Link>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex items-center justify-center flex-1 mx-4">
                    <div className={cn(
                        "flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-sm transition-all",
                        isScrolled ? "bg-white/50 border-gray-200 dark:bg-black/20 dark:border-white/10" : "bg-black/10 border-white/5"
                    )}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    isScrolled
                                        ? "text-gray-700 hover:bg-black/5 hover:text-black dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
                                        : "text-white/90 hover:bg-white/20 hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right: Auth & Theme */}
                <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden md:flex items-center gap-4">
                        {isAuthenticated && user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                    className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-blue-500 transition-colors">
                                        <img src={user.avatar} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                    <span className={cn("text-sm font-bold", isScrolled ? "text-gray-700 dark:text-gray-200" : "text-white")}>
                                        {user.name}
                                    </span>
                                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isScrolled ? "text-gray-500" : "text-white/60", userDropdownOpen && "rotate-180")} />
                                </button>

                                <AnimatePresence>
                                    {userDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl p-2 z-50"
                                        >
                                            <div className="px-4 py-3 border-b border-gray-200 dark:border-white/10 mb-2">
                                                <p className="text-sm font-bold text-gray-900 dark:text-white">{user.name}</p>
                                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                            </div>

                                            <button
                                                onClick={() => { setEditProfileOpen(true); setUserDropdownOpen(false); }}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
                                            >
                                                <User className="w-4 h-4" />
                                                Edit Profile
                                            </button>
                                            <Link
                                                to="/saved-trips"
                                                onClick={() => setUserDropdownOpen(false)}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
                                            >
                                                <Heart className="w-4 h-4" />
                                                Saved Itineraries
                                            </Link>
                                            <button
                                                onClick={() => { setSubscriptionOpen(true); setUserDropdownOpen(false); }}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
                                            >
                                                <Settings className="w-4 h-4" />
                                                Subscription & Plan
                                            </button>

                                            <div className="h-px bg-gray-200 dark:bg-white/10 my-2" />

                                            <button
                                                onClick={() => { logout(); setUserDropdownOpen(false); }}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-sm font-medium text-red-600 dark:text-red-400 transition-colors"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Log Out
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/signin"
                                    className={cn(
                                        "text-sm font-bold transition-colors",
                                        isScrolled ? "text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400" : "text-white/90 hover:text-blue-300"
                                    )}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    <div className={cn(
                        "pl-4 border-l transition-colors",
                        isScrolled ? "border-gray-300 dark:border-white/20" : "border-white/20"
                    )}>
                        <ThemeToggle />
                    </div>
                </div>
            </motion.nav>

            <EditProfileModal isOpen={isEditProfileOpen} onClose={() => setEditProfileOpen(false)} />
            <SubscriptionModal isOpen={isSubscriptionOpen} onClose={() => setSubscriptionOpen(false)} />
        </div>
    );
};
