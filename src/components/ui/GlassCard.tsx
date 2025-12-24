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
                "rounded-2xl border p-6 transition-all duration-300",
                // Light Mode: Frosted glass
                "bg-white/20 backdrop-blur-md border-white/30 shadow-lg",
                // Dark Mode: Deep obsidian glass
                "dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-2xl dark:shadow-purple-900/20",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
