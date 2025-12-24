import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Monitor, Search, Plane } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const WatchDemo = () => {
    return (
        <div className="min-h-screen pt-24 pb-0 bg-[#050510] relative overflow-hidden text-white selection:bg-blue-500/30">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/20 via-[#050510] to-[#050510]" />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4"
                    >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Watch functionality in action</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400"
                    >
                        Mastering Your <br className="hidden md:block" />
                        Dream Trip Generator
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        See how our AI transforms your preferences into a complete, bookable itinerary in seconds.
                    </motion.p>
                </div>

                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative w-full max-w-5xl mx-auto mb-32 group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                    <GlassCard className="relative p-2 rounded-2xl overflow-hidden bg-black/50 border-white/10 aspect-video flex items-center justify-center">
                        {/* YouTube Embed */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0"
                            title="Product Demo Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-xl w-full h-full"
                        ></iframe>
                    </GlassCard>
                </motion.div>

                {/* How to Use Steps */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-gray-400">Three simple steps to your perfect vacation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <GlassCard className="h-full p-8 relative overflow-hidden group hover:bg-white/10 transition-colors border-white/5">
                                    <div className={`absolute top-0 right-0 p-32 bg-${step.color}-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-${step.color}-500/20 transition-all`} />

                                    <div className={`w-14 h-14 rounded-2xl bg-${step.color}-500/20 flex items-center justify-center mb-6 text-${step.color}-400 group-hover:scale-110 transition-transform duration-500`}>
                                        <step.icon className="w-7 h-7" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Step 0{index + 1}</div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors">{step.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {step.desc}
                                        </p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Innovative CTA */}
                <div className="relative py-24 text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-3xl" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start?</h2>
                        <Link
                            to="/generate"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
                        >
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Create My Trip Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

const STEPS = [
    {
        title: "Share Your Vision",
        desc: "Tell our AI where you want to go, your dates, and your budget. The more details you provide, the better the magic works.",
        icon: Search,
        color: 'blue'
    },
    {
        title: "AI Curates Everything",
        desc: "We scan thousands of flights, hotels, and local experiences to build a perfectly timed itinerary that matches your style.",
        icon: Monitor, // Using Monitor as "Processing/AI" metaphor
        color: 'purple'
    },
    {
        title: "Review & Explore",
        desc: "Get a comprehensive day-by-day plan with costs, maps, and booking links. Tweak it or book it as is!",
        icon: Plane,
        color: 'green'
    }
];
