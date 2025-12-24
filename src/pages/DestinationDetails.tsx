import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight, DollarSign, Calendar, Sparkles, ArrowLeft } from 'lucide-react';
import { suggestions } from '../data/mockData';
import { GlassCard } from '../components/ui/GlassCard';
import { Footer } from '../components/Footer';

export const DestinationDetails = () => {
    const { id } = useParams();
    const destination = suggestions.find(p => p.id === Number(id));

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
                    <Link to="/destinations" className="text-blue-400 hover:text-blue-300">Back to Destinations</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050510] relative overflow-hidden text-white selection:bg-purple-500/30">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)' }}
            />

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={destination.image}
                        alt={destination.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/50 to-transparent" />
                </motion.div>

                <div className="absolute top-24 left-6 z-20">
                    <Link to="/destinations" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/40 transition-all text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 text-blue-400 font-bold tracking-wider uppercase mb-2">
                            <MapPin className="w-5 h-5" />
                            {destination.location}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                            {destination.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                            <span className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                {destination.rating} Rating
                            </span>
                            <span className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
                                <DollarSign className="w-4 h-4 text-green-400" />
                                Starting at {destination.price}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Description */}
                <div className="lg:col-span-2 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-purple-500" />
                            About the Destination
                        </h2>
                        <div className="prose prose-lg prose-invert text-gray-400 leading-relaxed">
                            <p className="text-xl text-gray-200 mb-6 font-light">
                                {destination.description}
                            </p>
                            <p>
                                Immerse yourself in the local culture, cuisine, and breathtaking landscapes.
                                Whether you're seeking adventure or relaxation, {destination.title} offers an unforgettable experience tailored just for you.
                                Our AI-powered planner can help you discover hidden gems and organize the perfect itinerary.
                            </p>
                        </div>
                    </motion.div>

                    {/* Gallery Grid (Placeholder for now, reusing same image for demo effect) */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <GlassCard key={i} className="p-0 overflow-hidden aspect-square h-full border-0 bg-white/5 hover:bg-white/10">
                                    <img
                                        src={destination.image}
                                        alt="Gallery"
                                        className={`w-full h-full object-cover hover:scale-110 transition-transform duration-700 ${i === 2 ? 'md:col-span-1' : ''}`} // Just simple logic for demo
                                    />
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: CTA Card */}
                <div className="lg:col-span-1 relative">
                    <div className="sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard className="p-8 border-t-4 border-t-purple-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Calendar className="w-32 h-32 -rotate-12" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">Plan Your Trip</h3>
                                <p className="text-gray-400 text-sm mb-8">
                                    Ready to experience {destination.title}? Let AI build your perfect itinerary in seconds.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                                        <span className="text-gray-400">Duration</span>
                                        <span className="font-semibold">5-10 Days Recommended</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                                        <span className="text-gray-400">Best Season</span>
                                        <span className="font-semibold">Spring / Autumn</span>
                                    </div>
                                </div>

                                <Link
                                    to="/generate"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-purple-500/25 transition-all text-center flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Generate Itinerary
                                </Link>

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    100% Adjustable • Free to Generate
                                </p>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
