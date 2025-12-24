import { motion } from 'framer-motion';
import { MapPin, Camera, ArrowUpRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const GALLERY_ITEMS = [
    {
        id: 1,
        image: "/CardsandBanner/1.webp",
        location: "Fushimi Inari, Kyoto",
        user: "@hiroshi_travels",
        overview: "Walking through the thousands of vermilion torii gates at dawn.",
        size: "large" // Spans 2 cols
    },
    {
        id: 2,
        image: "/CardsandBanner/2.webp",
        location: "Oia, Santorini",
        user: "@sophia_wanders",
        overview: "Sunset views that literally take your breath away.",
        size: "small"
    },
    {
        id: 3,
        image: "/CardsandBanner/3.webp",
        location: "Ubud, Bali",
        user: "@jake_explores",
        overview: "Finding peace in the lush green rice terraces.",
        size: "small"
    },
    {
        id: 4,
        image: "/CardsandBanner/4.webp",
        location: "Zermatt, Switzerland",
        user: "@alpine_amy",
        overview: "The Matterhorn standing tall against the clear blue sky.",
        size: "small"
    },
    {
        id: 5,
        image: "/CardsandBanner/5.webp",
        location: "Marrakech Medina",
        user: "@omar_vibes",
        overview: "Lost in the colorful chaos of the souks.",
        size: "large"
    },
    {
        id: 6,
        image: "/CardsandBanner/6.webp",
        location: "Manhattan, NYC",
        user: "@city_dreams",
        overview: "The city that never sleeps, captured from above.",
        size: "small"
    }
];

export const FeaturedGallery = () => {
    return (
        <section className="relative w-full py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 relative z-10">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Gallery</span>
                        </motion.h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-lg text-lg">
                            Captured by our community of global explorers. Share your moments to be featured.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/gallery"
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all text-gray-900 dark:text-white font-medium"
                        >
                            See All Photos
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {GALLERY_ITEMS.map((item, idx) => (
                        <GalleryItem key={item.id} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const GalleryItem = ({ item, index }: { item: any, index: number }) => {
    // Determine col-span based on "size" property for a bento feel
    const isLarge = item.size === "large";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "group relative rounded-3xl overflow-hidden cursor-pointer",
                isLarge ? "md:col-span-2" : "md:col-span-1"
            )}
        >
            <div className="absolute inset-0 bg-gray-900 animate-pulse" /> {/* Placeholder */}

            <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src={item.image}
                    alt={item.location}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                        {item.overview}
                    </h3>

                    <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 border-t border-white/20 pt-4">
                        <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                            <Camera className="w-4 h-4" />
                            <span>{item.user}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Right Decoration */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <GlassCard className="p-2 rounded-full">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                </GlassCard>
            </div>
        </motion.div>
    );
};
