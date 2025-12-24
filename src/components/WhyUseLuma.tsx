import { motion } from 'framer-motion';
import { Brain, Zap, Globe, ShieldCheck } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const FEATURES = [
    {
        icon: Brain,
        title: "AI-Powered Personalization",
        description: "Our algorithms learn your preferences to curate trips that feel uniquely yours, down to the last detail."
    },
    {
        icon: Zap,
        title: "Instant Itineraries",
        description: "Forget weeks of planning. Get a complete, optimized travel plan in seconds, not days."
    },
    {
        icon: Globe,
        title: "Global Expertise",
        description: "Access hidden gems and local favorites in over 190 countries, verified by real travelers."
    },
    {
        icon: ShieldCheck,
        title: "Seamless & Secure",
        description: "Book flights and hotels with confidence. Your data and transactions are protected by bank-grade security."
    }
];

export const WhyUseLuma = () => {
    return (
        <section className="relative w-full py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Column: Content & Features */}
                <div className="flex-1 space-y-10 z-10 w-full">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold"
                        >
                            Why Choose Us
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Travel Smarter, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Not Harder.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"
                        >
                            Luma isn't just a trip planner; it's your personal travel concierge. We combine advanced AI with human-centric design to transform how you explore the world.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {FEATURES.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                            >
                                <GlassCard className="h-full p-6 hover:bg-white/40 dark:hover:bg-white/5 transition-colors border-white/50 dark:border-white/10" hoverEffect>
                                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 text-white shadow-lg">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="flex-1 relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                    <img
                        src="/about_us.jpg"
                        alt="Travelers exploring"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute bottom-8 left-8 right-8 z-20"
                    >
                        <GlassCard className="bg-white/90 dark:bg-black/80 backdrop-blur-xl border-white/20 p-4 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Trusted By</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">50,000+ <span className="text-base font-normal text-gray-500">Travelers</span></p>
                            </div>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800" />
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
