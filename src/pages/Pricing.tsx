import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { cn } from '../lib/utils';

const plans = [
    {
        name: 'Explorer',
        price: 'Free',
        period: '/forever',
        description: 'Perfect for casual travelers planning their next getaway.',
        features: [
            'Basic Itinerary Generation',
            '3 Saved Trips',
            'Standard Support',
            'Mobile Access'
        ],
        notIncluded: [
            'AI Travel Assistant',
            'Offline Maps',
            'Trip Collaboration',
            'Exclusive Deals'
        ],
        popular: false
    },
    {
        name: 'Adventurer',
        price: '$9.99',
        period: '/month',
        description: 'For frequent travelers who want smart features.',
        features: [
            'Unlimited Itinerary Generation',
            'Unlimited Saved Trips',
            'AI Travel Assistant',
            'Trip Collaboration',
            'Priority Support',
            'Mobile Access'
        ],
        notIncluded: [
            'Offline Maps',
            'Exclusive Deals'
        ],
        popular: true
    },
    {
        name: 'Globetrotter',
        price: '$19.99',
        period: '/month',
        description: 'The ultimate toolkit for serious world travelers.',
        features: [
            'Everything in Adventurer',
            'Offline Maps & Guides',
            'Exclusive Travel Deals',
            'Concierge Service',
            'Custom Export Options',
            'Early Access to Features'
        ],
        notIncluded: [],
        popular: false
    }
];

export const Pricing = () => {
    return (
        <div className="min-h-screen pt-32 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                        Choose Your Journey
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Whether you're a weekend explorer or a world traveler, we have a plan for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <GlassCard className={cn(
                                "h-full p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:scale-105",
                                plan.popular ? "border-blue-500/30 bg-blue-500/5" : "border-white/10"
                            )}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-500/10 text-green-500 shrink-0">
                                                <Check className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-sm text-gray-700 dark:text-gray-200">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3 opacity-50">
                                            <div className="p-1 rounded-full bg-gray-500/10 text-gray-500 shrink-0">
                                                <X className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-sm text-gray-700 dark:text-gray-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={cn(
                                    "w-full py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95",
                                    plan.popular
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                                        : "bg-white dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/20"
                                )}>
                                    Get Started
                                </button>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};
