import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Wallet, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from './ui/GlassCard';

const SUGGESTIONS = [
    {
        id: 1,
        destination: "Kyoto, Japan",
        image: "/CardsandBanner/1.jpg",
        price: "$2,400",
        days: "7 Days",
        travelers: "2 People",
        rating: 4.8,
        tag: "Cultural",
        budget: "Medium"
    },
    {
        id: 2,
        destination: "Santorini, Greece",
        image: "/CardsandBanner/2.jpg",
        price: "$3,200",
        days: "5 Days",
        travelers: "Couple",
        rating: 4.9,
        tag: "Romantic",
        budget: "High"
    },
    {
        id: 3,
        destination: "Bali, Indonesia",
        image: "/CardsandBanner/3.jpg",
        price: "$1,800",
        days: "10 Days",
        travelers: "Group (4)",
        rating: 4.7,
        tag: "Adventure",
        budget: "Low"
    },
    {
        id: 4,
        destination: "Swiss Alps",
        image: "/CardsandBanner/4.jpg",
        price: "$4,500",
        days: "6 Days",
        travelers: "Family",
        rating: 5.0,
        tag: "Luxury",
        budget: "High"
    },
    {
        id: 5,
        destination: "Marrakech, Morocco",
        image: "/CardsandBanner/5.jpg",
        price: "$1,500",
        days: "6 Days",
        travelers: "Solo",
        rating: 4.6,
        tag: "Exotic",
        budget: "Low"
    },
    {
        id: 6,
        destination: "New York, USA",
        image: "/CardsandBanner/6.jpg",
        price: "$3,000",
        days: "5 Days",
        travelers: "2 People",
        rating: 4.8,
        tag: "Urban",
        budget: "High"
    },
    {
        id: 7,
        destination: "Cappadocia, Turkey",
        image: "/CardsandBanner/7.jpg",
        price: "$2,100",
        days: "5 Days",
        travelers: "Couple",
        rating: 4.9,
        tag: "Scenic",
        budget: "Medium"
    }
];

export const SuggestionCarousel = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const scroll = () => {
            if (!isPaused) {
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    // Reset to start seamlessly (since we duplicated items)
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 0.8; // Speed control
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);


    return (
        <section className="relative w-full py-20 overflow-hidden">

            {/* Section Header */}
            <div className="text-center mb-12 relative z-10 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    Suggestions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">For You</span>
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                    Based on trending destinations and your potential preferences.
                </p>
            </div>

            {/* Scrolling Container */}
            <div
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Edge Gradients */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 py-8 px-4 overflow-x-hidden no-scrollbar"
                    style={{
                        width: '100%',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {/* Tripled Array for safe infinite loop buffer */}
                    {[...SUGGESTIONS, ...SUGGESTIONS, ...SUGGESTIONS].map((item, idx) => (
                        <div key={`${item.id}-${idx}`} className="inline-block"> {/* Wrapper for inline behavior */}
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

const Card = ({ item }: { item: any }) => (
    <div className="w-[320px] md:w-[360px] group perspective-1000">
        <div className="relative h-[420px] rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            <GlassCard className="h-full p-0 overflow-hidden border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md whitespace-normal"> {/* whitespace-normal resets text layout */}
                {/* Image Section */}
                <div className="h-1/2 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                        src={item.image}
                        alt={item.destination}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                            {item.tag}
                        </span>
                    </div>
                    <div className="absolute bottom-4 left-4 z-20 text-white">
                        <h3 className="text-2xl font-bold drop-shadow-md">{item.destination}</h3>
                        <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                            <Star className="w-4 h-4 fill-current" /> {item.rating}
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                            <Wallet className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">{item.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-500" />
                            <span className="text-sm font-medium">{item.travelers}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 border-t border-white/10 pt-4">
                        <Calendar className="w-4 h-4 text-pink-500" />
                        <span className="text-sm font-medium">{item.days} Trip</span>
                    </div>

                    <div className="pt-2">
                        <Link
                            to="/trip-plan"
                            className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-lg hover:shadow-purple-500/25 transition-all active:scale-95"
                        >
                            View Itinerary
                        </Link>
                    </div>
                </div>
            </GlassCard>
        </div>
    </div>
);
