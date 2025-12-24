import { suggestions } from '../data/mockData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';

export const Destinations = () => {
    return (
        <div className="min-h-screen pt-32 pb-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                        Explore Popular Destinations
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover the world's most breathtaking locations, curated just for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {suggestions.map((place: any, index: number) => (
                        <motion.div
                            key={place.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Link to={`/destination/${place.id}`} className="block h-full">
                                <GlassCard className="h-full overflow-hidden flex flex-col p-0 border-0 bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={place.image}
                                            alt={place.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="text-white text-sm font-medium">{place.rating}</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="flex items-center gap-1.5 mb-1 text-blue-300 text-sm font-medium">
                                                <MapPin className="w-4 h-4" />
                                                {place.location}
                                            </div>
                                            <h3 className="text-xl font-bold">{place.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                                            {place.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                                            <div>
                                                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Starting from</span>
                                                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{place.price}</div>
                                            </div>
                                            <div className="p-2 rounded-full bg-blue-50 dark:bg-white/5 group-hover:bg-blue-100 dark:group-hover:bg-white/10 text-blue-600 dark:text-blue-400 transition-colors">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};
