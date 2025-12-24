import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Wallet, Users, Download, Share2, MapPin, Sparkles, Info, Plane, Hotel, Star, Clock } from 'lucide-react';
import { mockExoticTrip } from '../data/mockData';
import { DayItinerary } from '../components/DayItinerary';
import { BudgetChart } from '../components/BudgetChart';
import { RecommendationCard } from '../components/RecommendationCard';
import { GlassCard } from '../components/ui/GlassCard';
import { Footer } from '../components/Footer';

export const TripDetails = () => {
    // Top-down extraction
    const { meta, itinerary, budgetBreakdown, facts, flights, hotels, topActivities } = mockExoticTrip as any;
    const [selectedDay, setSelectedDay] = useState(1);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper for determining time of day greeting/context
    const getTimeContext = (dayNum: number) => {
        return dayNum === 1 ? "Start your journey" : dayNum === itinerary.length ? "Finish strong" : "Explore deeper";
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 dark:bg-[#050510] overflow-hidden selection:bg-purple-500/30">
            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)' }}
            />

            {/* Hero Header */}
            <div className="max-w-7xl mx-auto mb-16 relative">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 group transform transition-all duration-700 hover:shadow-purple-900/20">
                    <img
                        src={meta.image}
                        alt={meta.destination}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute bottom-10 left-8 md:left-12 max-w-3xl text-white z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <span className="bg-white/20 backdrop-blur-md border border-white/10 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest text-white shadow-lg">
                                Prepared for You
                            </span>
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> AI CURATED
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none"
                        >
                            {meta.destination}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl font-light"
                        >
                            {(meta as any).description || "Experience the journey of a lifetime."}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 md:gap-8"
                        >
                            <GlassCard className="!bg-white/10 !border-white/10 px-5 py-3 flex items-center gap-3 text-white">
                                <Calendar className="w-5 h-5 text-blue-400" />
                                <div>
                                    <div className="text-xs text-gray-400 uppercase font-bold">Dates</div>
                                    <div className="font-semibold">{meta.dates}</div>
                                </div>
                            </GlassCard>
                            <GlassCard className="!bg-white/10 !border-white/10 px-5 py-3 flex items-center gap-3 text-white">
                                <Users className="w-5 h-5 text-purple-400" />
                                <div>
                                    <div className="text-xs text-gray-400 uppercase font-bold">Travelers</div>
                                    <div className="font-semibold">{meta.travelers}</div>
                                </div>
                            </GlassCard>
                            <GlassCard className="!bg-white/10 !border-white/10 px-5 py-3 flex items-center gap-3 text-white">
                                <Wallet className="w-5 h-5 text-green-400" />
                                <div>
                                    <div className="text-xs text-gray-400 uppercase font-bold">Budget</div>
                                    <div className="font-semibold">${meta.totalBudget}</div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>

                    <div className="absolute top-8 right-8 flex gap-3 z-20">
                        <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95 border border-white/10">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-bold flex items-center gap-2 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 border border-white/10 hover:border-white/30">
                            <Download className="w-5 h-5" />
                            Download Itinerary
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN: Itinerary & Recommendations (8 cols) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Day Selector */}
                        <div className="relative">
                            <div className="flex items-end justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">
                                        Your Daily Plan
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                                        Curated specifically for your interests and pace.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar mask-gradient-right p-1">
                                {itinerary.map((day: any) => (
                                    <button
                                        key={day.day}
                                        onClick={() => setSelectedDay(day.day)}
                                        className={`group relative min-w-[140px] p-5 rounded-[2rem] transition-all duration-300 flex flex-col items-center justify-center gap-1 border ${selectedDay === day.day
                                                ? 'bg-[#0F172A] text-white scale-105 border-[#0F172A]'
                                                : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/20'
                                            }`}
                                    >
                                        <span className={`text-xs font-medium uppercase tracking-wider ${selectedDay === day.day ? 'text-gray-400' : 'text-gray-400'
                                            }`}>
                                            Day {day.day}
                                        </span>
                                        <span className="font-bold text-lg leading-tight">
                                            {day.title.split(' ')[0]}...
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedDay}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-20 hidden md:block" />

                                        <div className="mb-8 pl-0 md:pl-8">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                                                <Sparkles className="w-3 h-3" />
                                                {getTimeContext(selectedDay)}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                                {itinerary[selectedDay - 1].title}
                                            </h3>
                                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl bg-white dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
                                                "{itinerary[selectedDay - 1].summary}"
                                            </p>
                                        </div>

                                        <div className="md:pl-2">
                                            <DayItinerary dayData={itinerary[selectedDay - 1]} />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Top Activities Section */}
                        <div id="activities" className="pt-10">
                            <h2 className="text-3xl font-bold mb-2">Highlights & Must-Dos</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-8">Unmissable experiences curated for this trip.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {topActivities?.map((activity: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <GlassCard className="h-full p-0 overflow-hidden group hover:ring-2 hover:ring-blue-500/30 transition-all duration-500">
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={activity.image}
                                                    alt={activity.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                                <div className="absolute bottom-4 left-4 text-white">
                                                    <h3 className="font-bold text-xl mb-1">{activity.title}</h3>
                                                    <div className="flex items-center gap-3 text-xs font-semibold text-gray-300">
                                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {activity.duration}</span>
                                                        <span className="flex items-center gap-1 text-yellow-400"><Star className="w-3 h-3 fill-current" /> {activity.rating}</span>
                                                    </div>
                                                </div>
                                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-bold border border-white/20">
                                                    {activity.price}
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                                    {activity.desc}
                                                </p>
                                                <button className="w-full py-2 rounded-xl border border-blue-500/30 text-blue-600 dark:text-blue-400 font-bold text-sm hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors">
                                                    Book Experience
                                                </button>
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </div>
                        </div>


                        {/* Flight Recommendations */}
                        <div id="flights" className="pt-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                                    <Plane className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Recommended Flights</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Best value & comfort options found</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {flights.map((flight: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <RecommendationCard type="flight" data={flight} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Hotel Recommendations */}
                        <div id="hotels" className="pt-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500">
                                    <Hotel className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Premium Stays</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Top rated by fellow travelers</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {hotels.map((hotel: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <RecommendationCard type="hotel" data={hotel} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Budget & Info (4 cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Sticky scrolling container could go here */}
                        <div className="sticky top-24 space-y-8">

                            {/* Budget Breakdown */}
                            <GlassCard className="p-6 relative overflow-hidden border-t-4 border-t-purple-500">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Wallet className="w-24 h-24 rotate-12" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 relative z-10">Estimated Budget</h3>
                                <div className="h-[250px] -ml-4">
                                    <BudgetChart data={budgetBreakdown} />
                                </div>

                                <div className="space-y-3 mt-2">
                                    {budgetBreakdown.map((item: any, idx: number) => (
                                        <div key={idx} className="flex items-center justify-between text-sm group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full ring-2 ring-opacity-50 ring-offset-2 ring-offset-transparent transition-all group-hover:scale-125" style={{ backgroundColor: item.color, '--tw-ring-color': item.color } as any} />
                                                <span className="text-gray-600 dark:text-gray-300 font-medium">{item.name}</span>
                                            </div>
                                            <span className="font-bold font-mono group-hover:text-purple-500 transition-colors">${item.value}</span>
                                        </div>
                                    ))}
                                    <div className="border-t-2 border-dashed border-gray-200 dark:border-white/10 pt-4 mt-4 flex justify-between items-baseline">
                                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total</span>
                                        <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                            ${meta.totalBudget}
                                        </span>
                                    </div>
                                </div>
                            </GlassCard>

                            {/* Interesting Facts */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Info className="w-5 h-5 text-blue-500" />
                                    <h3 className="text-xl font-bold">Local Insights</h3>
                                </div>
                                <div className="space-y-4">
                                    {facts.map((fact: any, index: number) => (
                                        <GlassCard key={index} className="p-0 overflow-hidden group hover:ring-2 ring-blue-500/20 transition-all">
                                            <div className="h-32 relative overflow-hidden">
                                                <img src={fact.image} alt={fact.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                                <div className="absolute bottom-3 left-4 right-4">
                                                    <div className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-wider">Did you know?</div>
                                                    <div className="text-white font-bold leading-tight">
                                                        {fact.title}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                "{fact.desc}"
                                            </div>
                                        </GlassCard>
                                    ))}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <GlassCard className="p-2 h-64 overflow-hidden relative group cursor-pointer border-0 ring-1 ring-gray-200 dark:ring-white/10">
                                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/115.1889,-8.4095,9,0/600x600?access_token=YOUR_TOKEN')] bg-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                                    <div className="bg-white dark:bg-black p-3 rounded-full shadow-xl z-10 animate-bounce">
                                        <MapPin className="w-6 h-6 text-red-500 fill-current" />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <div className="text-white font-bold text-lg">Interactive Map</div>
                                    <div className="text-gray-300 text-xs">Click to explore locations</div>
                                </div>
                            </GlassCard>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
