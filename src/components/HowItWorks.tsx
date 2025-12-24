import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Compass, Sparkles, Map, Sliders, Share2, Plane, CheckCircle2 } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { cn } from '../lib/utils';

const STEPS = [
    {
        icon: Compass,
        title: "Share Your Vision",
        description: "Tell us where and when. We handle the complex logistics while you dream.",
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-cyan-500/20",
        features: ["Smart Budgeting", "Travel Style Preferences", "Group Size Handling"],
        image: "/CardsandBanner/4.jpg"
    },
    {
        icon: Sparkles,
        title: "AI Analysis",
        description: "Our engine scans millions of data points to find your perfect match.",
        color: "text-purple-400",
        gradient: "from-purple-500/20 to-violet-500/20",
        features: ["Real-time Availability", "Local Events Scanning", "Weather Prediction"],
        image: "/CardsandBanner/5.jpg"
    },
    {
        icon: Map,
        title: "Full Itinerary",
        description: "Receive a comprehensive day-by-day plan with every detail sorted.",
        color: "text-pink-400",
        gradient: "from-pink-500/20 to-rose-500/20",
        features: ["Hour-by-hour Plans", "Transport Logistics", "Cost Estimation"],
        image: "/CardsandBanner/6.jpg"
    },
    {
        icon: Sliders,
        title: "Customize & Refine",
        description: "Tweak the pace, swap activities, and make it uniquely yours.",
        color: "text-orange-400",
        gradient: "from-orange-500/20 to-amber-500/20",
        features: ["Drag & Drop Edits", "Alternative Options", "Smart Rescheduling"],
        image: "/CardsandBanner/7.jpg"
    },
    {
        icon: Share2,
        title: "Export & Go",
        description: "Download offline maps and share plans with your travel buddies.",
        color: "text-emerald-400",
        gradient: "from-emerald-500/20 to-green-500/20",
        features: ["Offline PDF Access", "Google Maps Sync", "Group Sharing Link"],
        image: "/CardsandBanner/8.jpg"
    }
];

export const HowItWorks = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    return (
        <section ref={containerRef} className="relative w-full py-32 overflow-hidden">
            {/* Reduced particle count for performance */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 py-2"
                    >
                        How It Works
                    </motion.h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Your dream trip, generated in seconds.
                    </p>
                </div>

                <div className="relative">
                    {/* Flight Path Line - Optimized with scaleY */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 hidden md:block -translate-x-1/2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            style={{
                                scaleY: pathLength,
                                transformOrigin: "top"
                            }}
                            className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] will-change-transform"
                        />
                    </div>

                    {/* Floating Plane */}
                    <motion.div
                        className="absolute left-1/2 hidden md:flex items-center justify-center -translate-x-1/2 z-20 will-change-transform"
                        style={{
                            top: useTransform(pathLength, [0, 1], ["0%", "100%"]),
                            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
                        }}
                    >
                        <div className="bg-black border border-white/20 p-3 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.6)] backdrop-blur-xl">
                            <Plane className="w-6 h-6 text-white rotate-180" />
                        </div>
                    </motion.div>

                    {/* Steps */}
                    <div className="space-y-32">
                        {STEPS.map((step, idx) => (
                            <StepCard key={idx} step={step} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ step, index }: { step: any, index: number }) => {
    const isEvent = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }} // Reduced margin to trigger earlier
            transition={{ duration: 0.6, ease: "easeOut" }} // Faster for snippier feel
            className={cn(
                "relative flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between will-change-transform",
                isEvent ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Context Card (Text) */}
            <div className="w-full md:w-[45%] group perspective-1000">
                <div
                    className={cn(
                        "relative p-1 rounded-2xl bg-gradient-to-br transition-all duration-500 hover:scale-[1.01]",
                        step.gradient,
                        "hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                    )}
                >
                    <GlassCard className="h-full p-8 bg-black/80 backdrop-blur-md border-white/10 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10", step.color)}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {step.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 font-medium leading-relaxed">
                                {step.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {step.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-gray-300">
                                        <CheckCircle2 className={cn("w-3 h-3", step.color)} />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* Empty Center Column */}
            <div className="hidden md:block w-[10%]" />

            {/* Image Card (Opposite Side) */}
            <div className="w-full md:w-[45%] h-[320px] rounded-2xl overflow-hidden relative group shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" // Reduced zoom for performance
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Step {index + 1}</p>
                    <p className="text-lg font-bold text-white">{step.title}</p>
                </div>
            </div>
        </motion.div>
    );
};
