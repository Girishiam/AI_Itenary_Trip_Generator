import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { cn } from '../lib/utils';

const FAQS = [
    {
        question: "How does the AI itinerary generation work?",
        answer: "Our advanced AI analyzes millions of data points—including flight availability, local events, weather patterns, and user reviews—to build a personalized day-by-day plan that matches your specific preferences and budget."
    },
    {
        question: "Is Luma really free to use?",
        answer: "Yes! Luma is currently free for all users. We believe in democratizing travel planning. In the future, we may introduce premium features for power travelers, but the core itinerary generation will always remain accessible."
    },
    {
        question: "Can I customize the generated itinerary?",
        answer: "Absolutely. Think of the AI generation as a first draft. You can drag-and-drop activities, swap hotels, adjust timings, and add your own custom stops. The itinerary is fully flexible to your needs."
    },
    {
        question: "Does Luma book flights and hotels for me?",
        answer: "We provide direct booking links to trusted partners (like Booking.com, Skyscanner, and Expedia) with the best rates pre-selected. We don't handle payments directly, ensuring your financial security."
    },
    {
        question: "Can I share my itinerary with friends?",
        answer: "Yes, collaboration is key! You can generate a shareable link to invite friends to view or edit the trip. You can also export your plan to PDF or sync it directly to Google Maps."
    }
];

export const FAQ = () => {
    return (
        <section className="relative w-full py-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4"
                    >
                        <HelpCircle className="w-4 h-4" />
                        Common Questions
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
                    >
                        Got Suggestions? <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">We've Got Answers.</span>
                    </motion.h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <FIFOItem key={idx} faq={faq} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FIFOItem = ({ faq, index }: { faq: any, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <GlassCard
                className={cn(
                    "p-0 transition-all duration-300 border-white/10 overflow-hidden",
                    isOpen ? "bg-white/10 dark:bg-white/5 ring-1 ring-purple-500/30" : "hover:bg-white/5"
                )}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-6 text-left"
                >
                    <span className="text-lg font-bold text-gray-900 dark:text-white pr-8">
                        {faq.question}
                    </span>
                    <div className={cn(
                        "p-2 rounded-full transition-colors",
                        isOpen ? "bg-purple-500 text-white" : "bg-white/5 text-gray-400 group-hover:text-white"
                    )}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                                {faq.answer}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </GlassCard>
        </motion.div>
    );
};
