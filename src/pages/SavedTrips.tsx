import { GlassCard } from '../components/ui/GlassCard';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SavedTrips = () => {
    // Mock Data for Saved Trips
    const savedTrips = [
        {
            id: 1,
            destination: 'Kyoto, Japan',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60',
            date: 'Apr 10 - Apr 24, 2024',
            duration: '14 Days',
            budget: '$4,500',
            status: 'Upcoming'
        },
        {
            id: 2,
            destination: 'Santorini, Greece',
            image: 'https://images.unsplash.com/photo-1613395877344-13d4c2ce5dbe?w=800&auto=format&fit=crop&q=60',
            date: 'Jun 15 - Jun 22, 2024',
            duration: '7 Days',
            budget: '$3,200',
            status: 'Planning'
        },
        {
            id: 3,
            destination: 'Reykjavik, Iceland',
            image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&auto=format&fit=crop&q=60',
            date: 'Sep 05 - Sep 12, 2024',
            duration: '8 Days',
            budget: '$2,800',
            status: 'Draft'
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Saved Itineraries
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Your dream trips, safely stored for future adventures.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {savedTrips.map((trip) => (
                        <GlassCard key={trip.id} className="group overflow-hidden border-white/20 dark:border-white/10 hover:border-blue-500/50 transition-all duration-500">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={trip.image}
                                    alt={trip.destination}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                        {trip.destination}
                                    </h3>
                                </div>
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/20">
                                    {trip.status}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-purple-500" />
                                            <span>{trip.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-blue-500" />
                                            <span>{trip.duration}</span>
                                        </div>
                                        <span className="font-bold text-gray-900 dark:text-white">{trip.budget}</span>
                                    </div>
                                </div>

                                <Link
                                    to="/trip-plan"
                                    className="w-full py-3 rounded-xl bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group-hover:shadow-lg group-hover:shadow-blue-500/20"
                                >
                                    View Itinerary
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </GlassCard>
                    ))}

                    {/* Add New Trip Card */}
                    <Link to="/generate" className="block h-full min-h-[400px]">
                        <div className="h-full rounded-3xl border-2 border-dashed border-gray-300 dark:border-white/10 flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/5 transition-all cursor-pointer group">
                            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl font-light">+</span>
                            </div>
                            <span className="font-medium">Plan a New Trip</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
