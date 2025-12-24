import { motion } from 'framer-motion';
import { Target, Users, Lightbulb } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const AboutUs = () => {
    return (
        <section className="relative w-full py-24 px-6 overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <img
                        src="/about_us2.jpg"
                        alt="Luma Team"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Floating Stats Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-8 left-8 right-8 z-20"
                    >
                        <GlassCard className="p-6 bg-white/10 backdrop-blur-xl border-white/20">
                            <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/20">
                                <div>
                                    <p className="text-2xl font-bold text-white">98%</p>
                                    <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">Satisfaction</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">2M+</p>
                                    <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">Trips Planned</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">190+</p>
                                    <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">Countries</p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </motion.div>

                {/* Content Side */}
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
                            Our Story
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Redefining Travel with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Artificial Intelligence</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            Luma was born from a simple frustration: planning a trip took longer than the trip itself. We believed technology could solve this.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our mission is to democratize personal travel concierge services. By harnessing the power of advanced AI, we create hyper-personalized itineraries that adapt to your unique style, budget, and dreams—instantly.
                        </p>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ValueCard
                            icon={Target}
                            title="Precision"
                            desc="Itineraries accurate to the minute, tailored to your pace."
                            delay={0.2}
                        />
                        <ValueCard
                            icon={Users}
                            title="Human-Centric"
                            desc="Technology that feels personal, warm, and understanding."
                            delay={0.3}
                        />
                        <ValueCard
                            icon={Lightbulb}
                            title="Innovation"
                            desc="Constantly evolving algorithms to find hidden gems."
                            delay={0.4}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ValueCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
    >
        <GlassCard className="p-4 hover:bg-white/5 transition-colors border-white/5">
            <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400">
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                        {desc}
                    </p>
                </div>
            </div>
        </GlassCard>
    </motion.div>
);
