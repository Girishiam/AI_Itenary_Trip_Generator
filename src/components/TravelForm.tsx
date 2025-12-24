import { useState } from 'react';
import { MapPin, Calendar, Users, Wallet, Plane, Hotel, Wand2, ArrowRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';
import { LoadingScreen } from './LoadingScreen';

interface TravelFormProps {
    className?: string;
}

export const TravelForm = ({ className }: TravelFormProps) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

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

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
    };

    const handleLoadingComplete = () => {
        setIsLoading(false);
        navigate('/trip-plan');
    };

    if (isLoading) {
        return <LoadingScreen onComplete={handleLoadingComplete} />;
    }

    return (
        <section className={cn("relative z-20 -mt-24 px-4 pb-20 w-full flex justify-center", className)}>
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


                        {/* Activity Level - Now 1 column */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <span className="text-lg">🏄</span>
                                Select Activities
                            </label>
                            <select
                                name="activityLevel"
                                value={(formData as any).activityLevel}
                                onChange={(e) => setFormData(prev => ({ ...prev, activityLevel: e.target.value }))}
                                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-600 dark:text-white appearance-none cursor-pointer"
                            >
                                <option className="dark:bg-gray-800 dark:text-white" value="Relaxation">Relaxation</option>
                                <option className="dark:bg-gray-800 dark:text-white" value="Low Adrenalin">Low Adrenalin</option>
                                <option className="dark:bg-gray-800 dark:text-white" value="Moderate Adrenalin">Moderate Adrenalin</option>
                                <option className="dark:bg-gray-800 dark:text-white" value="High Adrenalin">High Adrenalin</option>
                            </select>
                        </div>

                        {/* Toggles - Keeps 2 columns */}
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
                    </div>

                    {/* Submit Logic */}
                    <div className="pt-8 flex justify-center w-full">
                        <button
                            onClick={handleGenerate}
                            className="group relative w-full md:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 text-lg">Generate Dream Trip</span>
                            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </GlassCard>
        </section>
    );
};


