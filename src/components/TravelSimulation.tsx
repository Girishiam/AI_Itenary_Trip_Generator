import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Plane, Anchor, Mountain, Sun } from 'lucide-react';

export const TravelSimulation = () => {
    return (
        <section className="relative w-full h-[400px] overflow-hidden bg-gradient-to-b from-sky-100 to-white dark:from-[#0a0a0a] dark:to-black">

            {/* Background Sun/Moon */}
            <div className="absolute top-10 right-20">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                    <Sun className="w-24 h-24 text-yellow-500/50 dark:text-yellow-100/20" />
                </motion.div>
            </div>

            {/* Parallax Mountains */}
            <div className="absolute bottom-0 left-0 w-full flex items-end opacity-20 dark:opacity-10 pointer-events-none">
                <Mountain className="w-96 h-96 text-gray-400 transform -translate-x-10 translate-y-20" />
                <Mountain className="w-[500px] h-[500px] text-gray-300 transform -translate-x-20 translate-y-40" />
                <Mountain className="w-[600px] h-[400px] text-gray-500 transform translate-x-40 translate-y-10" />
            </div>

            {/* Moving Clouds */}
            <CloudLayer speed={20} top="10%" left="10%" scale={1.2} delay={0} />
            <CloudLayer speed={35} top="25%" left="60%" scale={0.8} delay={2} />
            <CloudLayer speed={45} top="15%" left="80%" scale={1.0} delay={5} />
            <CloudLayer speed={25} top="40%" left="30%" scale={0.6} delay={1} />

            {/* The Plane & Contrails */}
            <PlaneAnimation />

            {/* The Ocean & Boat */}
            <div className="absolute bottom-0 w-full h-32 overflow-hidden">
                {/* Water Waves */}
                <div className="absolute bottom-0 w-[200%] h-32 bg-blue-500/10 dark:bg-blue-400/5 blur-xl animate-wave" />
                <div className="absolute bottom-0 w-[200%] h-24 bg-blue-600/10 dark:bg-blue-500/5 blur-lg translate-x-10 animate-wave-slow" />

                {/* Boat */}
                <BoatAnimation />
            </div>

        </section>
    );
};

const PlaneAnimation = () => {
    const [particles, setParticles] = useState<{ id: number, x: number, y: number }[]>([]);

    // Add particles periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setParticles(prev => [
                ...prev.slice(-20), // Keep last 20
                { id: Date.now(), x: Math.random() * 10, y: Math.random() * 10 }
            ]);
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-[30%] w-full h-20 pointer-events-none">
            <motion.div
                initial={{ x: "-10%" }}
                animate={{ x: "110%" }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="relative"
            >
                {/* Plane */}
                <div className="relative z-20 transform rotate-12">
                    <Plane className="w-12 h-12 text-blue-600 dark:text-blue-400 fill-blue-600/20" />
                </div>

                {/* Contrails */}
                <div className="absolute top-1/2 right-full flex gap-2 overflow-visible">
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0.8, scale: 1, x: 0 }}
                            animate={{ opacity: 0, scale: 2, x: -100 }}
                            transition={{ duration: 2 }}
                            className="w-2 h-2 rounded-full bg-white dark:bg-gray-500 blur-[1px]"
                            style={{ marginTop: p.y }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const CloudLayer = ({ speed, top, left, scale, delay }: { speed: number, top: string, left: string, scale: number, delay: number }) => (
    <motion.div
        className="absolute text-white/80 dark:text-white/10"
        style={{ top, left }}
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            delay: delay
        }}
    >
        <Cloud className="w-20 h-20 fill-current" style={{ transform: `scale(${scale})` }} />
    </motion.div>
);

const BoatAnimation = () => {
    return (
        <motion.div
            className="absolute bottom-8 left-[20%]"
            animate={{
                y: [0, -5, 0],
                rotate: [0, 1, -1, 0]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Anchor className="w-10 h-10 text-gray-500 dark:text-gray-400 opacity-50 rotate-45" />

            {/* Simple Boat Shape created with CSS/Divs if Anchor isn't enough, but let's stick to icons for consistency */}
            <div className="relative -mt-2">
                <div className="w-16 h-6 bg-gray-800 dark:bg-gray-700 rounded-b-full shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="absolute bottom-full left-1/2 -mb-1 w-0.5 h-8 bg-gray-800 dark:bg-gray-700" />
                <div className="absolute bottom-full left-1/2 -mb-1 w-8 h-6 bg-white/10 border-r-8 border-b-8 border-transparent border-r-gray-800 dark:border-r-gray-700 skew-x-12 origin-bottom-left" />
            </div>
        </motion.div>
    );
};
