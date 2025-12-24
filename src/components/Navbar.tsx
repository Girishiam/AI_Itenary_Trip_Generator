import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Generate Itinerary', path: '/generate' },
        { name: 'Destinations', path: '/suggestions' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "w-full max-w-7xl mx-auto rounded-full px-6 py-4 transition-all duration-500",
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
                            src="/logo.png"
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
                    </div>

                    <div className={cn(
                        "pl-4 border-l transition-colors",
                        isScrolled ? "border-gray-300 dark:border-white/20" : "border-white/20"
                    )}>
                        <ThemeToggle />
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};
