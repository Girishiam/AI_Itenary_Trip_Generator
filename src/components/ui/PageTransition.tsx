import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

// Keeping variants for future advanced usage, commenting out to satisfy linter if needed,
// or exporing them. For now, I'll use them in the motion.div directly or ignore the unused warning if I plan to use them.
// actually, let's just use them so the code is cleaner.
const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

export const PageTransition = ({ children, className }: PageTransitionProps) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
