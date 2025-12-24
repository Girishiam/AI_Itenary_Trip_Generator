import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Wallet, Plane, Hotel, Wand2 } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { cn } from '../lib/utils';

export const TravelForm = () => {
    const [formData, setFormData] = useState({
        destination: '',
        startDate: '',
        endDate: '',
        travelers: 1,
        budget: '',
        includeFlights: false,
        includeHotels: true,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleToggle = (key: 'includeFlights' | 'includeHotels') => {
        setFormData(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section className="relative z-20 -mt-24 px-4 pb-20 w-full flex justify-center">
            <GlassCard className="w-full max-w-5xl bg-white/80 dark:bg-black/60 backdrop-blur-2xl border-white/40 shadow-2xl p-6 md:p-8">
                <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                        <Wand2 className="w-5 h-5 text-purple-500 animate-pulse" />
                        <span className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                            AI Travel Wizard
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Destination */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-500" />
                                Where to?
                            </label>
                            <input
                                type="text"
                                name="destination"
                                value={formData.destination}
                                onChange={handleInputChange}
                                placeholder="e.g., Kyoto, Japan"
                                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:text-white"
                            />
                        </div>

                        {/* Dates */}
                        <div className="space-y-2 lg:col-span-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-pink-500" />
                                When?
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-600 dark:text-white dark:[color-scheme:dark]"
                                />
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-600 dark:text-white dark:[color-scheme:dark]"
                                />
                            </div>
                        </div>

                        {/* Travelers */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <Users className="w-4 h-4 text-green-500" />
                                Travelers
                            </label>
                            <div className="flex items-center gap-3 bg-white/50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 px-4 py-2.5">
                                <button
                                    onClick={() => setFormData(p => ({ ...p, travelers: Math.max(1, p.travelers - 1) }))}
                                    className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
                                >
                                    -
                                </button>
                                <span className="flex-1 text-center font-semibold dark:text-white">{formData.travelers}</span>
                                <button
                                    onClick={() => setFormData(p => ({ ...p, travelers: Math.min(10, p.travelers + 1) }))}
                                    className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                        {/* Budget */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <Wallet className="w-4 h-4 text-yellow-500" />
                                Budget
                            </label>
                            <input
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                placeholder="e.g. 5000"
                                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
                            />
                        </div>

                        {/* Toggles */}
                        <div className="flex gap-4 lg:col-span-2">
                            <button
                                onClick={() => handleToggle('includeFlights')}
                                className={cn(
                                    "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300",
                                    formData.includeFlights
                                        ? "bg-blue-500/10 border-blue-500 text-blue-600 dark:text-blue-400"
                                        : "bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-blue-300"
                                )}
                            >
                                <Plane className={cn("w-5 h-5", formData.includeFlights && "fill-current")} />
                                <span className="font-medium">Flights</span>
                            </button>

                            <button
                                onClick={() => handleToggle('includeHotels')}
                                className={cn(
                                    "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300",
                                    formData.includeHotels
                                        ? "bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400"
                                        : "bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-purple-300"
                                )}
                            >
                                <Hotel className={cn("w-5 h-5", formData.includeHotels && "fill-current")} />
                                <span className="font-medium">Hotels</span>
                            </button>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
                        >
                            <SparklesIcon />
                            Generate Trip
                        </motion.button>
                    </div>
                </div>
            </GlassCard>
        </section>
    );
};

const SparklesIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" fill="currentColor" />
    </svg>
);
