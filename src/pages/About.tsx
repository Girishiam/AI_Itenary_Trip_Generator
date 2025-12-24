import { AboutUs } from '../components/AboutUs';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { Users, Globe, Award } from 'lucide-react';

export const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-0">
            {/* Hero Section of About Page */}
            <div className="relative px-4 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                        Reimagining Travel
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        We are a team of explorers, engineers, and visionaries dedicated to making the world more accessible through AI.
                    </p>
                </div>
            </div>

            <AboutUs />

            {/* Stats Section */}
            <div className="py-20 px-4 bg-gray-50/50 dark:bg-black/20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Users, label: 'Happy Travelers', value: '50k+' },
                        { icon: Globe, label: 'Destinations', value: '100+' },
                        { icon: Award, label: 'Awards Won', value: '12' },
                    ].map((stat, index) => (
                        <GlassCard key={index} className="p-8 flex flex-col items-center text-center">
                            <stat.icon className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-4xl font-bold mb-2">{stat.value}</div>
                            <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </GlassCard>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((member) => (
                            <div key={member} className="group text-center">
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                                    <img
                                        src={`https://i.pravatar.cc/300?img=${member + 10}`}
                                        alt="Team Member"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-1">Alex Turner</h3>
                                <p className="text-blue-600 dark:text-blue-400 text-sm">Co-Founder</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
