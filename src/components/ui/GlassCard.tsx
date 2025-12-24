import React from 'react';
import type { ComponentProps } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

type GlassCardProps = ComponentProps<typeof motion.div> & {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
};

export const GlassCard = ({ children, className, hoverEffect = false, ...props }: GlassCardProps) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { scale: 1.02, rotateX: 2, rotateY: 2 } : {}}
            className={cn(
                "relative rounded-2xl border transition-colors duration-300 overflow-hidden", // transitions only colors
                // Using separate layer for blur to avoid re-compositing the filter on every frame
                "border-white/30 shadow-lg dark:border-white/10 dark:shadow-2xl dark:shadow-purple-900/20",
                className
            )}
            {...props}
        >
            {/* Pure Blur Layer - static, no transitions */}
            <div className="absolute inset-0 -z-10 bg-white/20 dark:bg-black/40 backdrop-blur-md dark:backdrop-blur-xl" />

            {/* Content Container */}
            <div className="relative z-0 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
};
