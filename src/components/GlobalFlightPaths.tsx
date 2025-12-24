import { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Cloud } from 'lucide-react';

export const GlobalFlightPaths = memo(() => {
    const [flights, setFlights] = useState<{ id: number, start: { x: number, y: number }, end: { x: number, y: number }, duration: number }[]>([]);

    useEffect(() => {
        const spawnFlight = () => {
            // Enforce Left <-> Right crossing to avoid short paths
            const isLeftToRight = Math.random() > 0.5;

            // Random start Y and end Y to create diagonals or straights
            const startY = Math.random() * 90 + 5; // 5vh to 95vh
            const endY = Math.random() * 90 + 5;

            const start = {
                x: isLeftToRight ? -10 : 110,
                y: startY
            };

            const end = {
                x: isLeftToRight ? 110 : -10,
                y: endY
            };

            const newFlight = {
                id: Date.now(),
                start,
                end,
                duration: 35 + Math.random() * 25 // 35-60s duration for smooth slow flight
            };

            setFlights(prev => [...prev.slice(-4), newFlight]); // Limit max flights

            // Cleanup
            setTimeout(() => {
                setFlights(prev => prev.filter(f => f.id !== newFlight.id));
            }, newFlight.duration * 1000 + 2000);
        };

        const interval = setInterval(() => {
            if (Math.random() > 0.35) spawnFlight();
        }, 4000); // Increased to 4000ms for better performance balance

        // Initial spawn
        spawnFlight();

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
            style={{ contain: 'strict' }} // CSS Containment to isolate from layout thrashing
        >
            {/* Clouds Layer - High visibility */}
            <div className="absolute inset-0 z-0" style={{ willChange: 'transform' }}> {/* Hint for compositor */}
                <CloudFloater top="10%" speed={90} scale={1.2} opacity={0.6} />
                <CloudFloater top="25%" speed={120} scale={0.8} opacity={0.5} />
                <CloudFloater top="40%" speed={150} scale={0.6} opacity={0.4} />
                <CloudFloater top="60%" speed={100} scale={1.0} opacity={0.5} />
                <CloudFloater top="80%" speed={80} scale={1.4} opacity={0.6} />
                <CloudFloater top="15%" speed={110} scale={0.9} opacity={0.3} color="text-blue-300 dark:text-gray-600" />
            </div>

            {/* Flights Layer */}
            <AnimatePresence>
                {flights.map(flight => (
                    <FlightAnimation key={flight.id} flight={flight} />
                ))}
            </AnimatePresence>
        </div>
    );
});

const CloudFloater = ({ top, speed, scale, opacity, color }: { top: string, speed: number, scale: number, opacity: number, color?: string }) => (
    <motion.div
        initial={{ x: "-20vw", opacity: 0 }}
        animate={{ x: "120vw", opacity }}
        transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear"
        }}
        className={`absolute ${color || 'text-blue-100 dark:text-gray-700'}`}
        style={{ top, transform: `scale(${scale})`, willChange: 'transform' }} // Added will-change
    >
        <Cloud className="fill-current w-32 h-16" /> {/* Removed blur-sm */}
    </motion.div>
);

const FlightAnimation = ({ flight }: { flight: any }) => {
    // Calculate Angle based on start/end interaction
    const dy = flight.end.y - flight.start.y;
    const dx = flight.end.x - flight.start.x;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    return (
        <motion.div
            className="absolute top-0 left-0 w-8 h-8 z-10"
            initial={{
                x: `${flight.start.x}vw`,
                y: `${flight.start.y}vh`,
                opacity: 0,
                scale: 0.5,
                rotate: angle
            }}
            animate={{
                x: `${flight.end.x}vw`,
                y: `${flight.end.y}vh`,
                opacity: [0, 1, 1, 0],
                scale: 0.8
            }}
            transition={{
                duration: flight.duration,
                ease: "linear",
                times: [0, 0.1, 0.9, 1]
            }}
            style={{ willChange: 'transform' }} // Optimization: Promote to own layer
        >
            <div className="relative flex items-center justify-center w-12 h-12">
                {/* 
                   Plane: Rotated 45deg to point East (Right).
                */}
                <Plane className="w-8 h-8 text-gray-500 dark:text-gray-400 fill-white dark:fill-gray-900 rotate-45 z-20 drop-shadow-lg" />

                {/* 
                   Trail:
                   Positioned straight left from center, adjusted for visual tail connection.
                */}
                <motion.div
                    className="absolute z-10 h-[3px] w-32 bg-gradient-to-l from-white/80 via-white/40 to-transparent blur-[1px]"
                    style={{
                        right: '50%',
                        top: '50%',
                        marginTop: '-1.5px', // Center vertically
                        transform: 'translateX(6px)', // Tuck slightly into the plane
                        transformOrigin: 'right center'
                    }}
                />
            </div>
        </motion.div>
    );
}
