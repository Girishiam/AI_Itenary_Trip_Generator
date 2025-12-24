import { motion } from 'framer-motion';
import { Camera, Coffee, MapPin, Bus, Utensils } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const ActivityIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'Food': return <Utensils className="w-4 h-4 text-orange-400" />;
        case 'Sightseeing': return <Camera className="w-4 h-4 text-blue-400" />;
        case 'Logistics': return <Bus className="w-4 h-4 text-gray-400" />;
        case 'Nature': return <MapPin className="w-4 h-4 text-green-400" />;
        default: return <Coffee className="w-4 h-4 text-purple-400" />;
    }
};

export const DayItinerary = ({ dayData }: { dayData: any }) => {
    return (
        <div className="relative pl-8 border-l-2 border-gray-200 dark:border-white/10 space-y-8">
            {dayData.activities.map((activity: any, index: number) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[39px] top-6 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 z-10" />

                    <GlassCard className="p-6 hover:border-blue-500/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                            <h4 className="text-lg font-bold flex items-center gap-2">
                                <ActivityIcon type={activity.type} />
                                {activity.title}
                            </h4>
                            <span className="text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                                {activity.time}
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {activity.desc}
                        </p>
                    </GlassCard>
                </motion.div>
            ))}
        </div>
    );
};
