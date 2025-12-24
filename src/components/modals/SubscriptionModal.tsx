import { GlassCard } from '../ui/GlassCard';
import { X, CreditCard, Check, AlertTriangle } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ConfirmModal } from './ConfirmModal';

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
    const { user, updateUser } = useStore();
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const plans = [
        {
            name: 'Free',
            price: '$0',
            features: ['3 Itineraries/month', 'Basic Support', 'Standard Generation'],
            color: 'bg-gray-500'
        },
        {
            name: 'Pro',
            price: '$19',
            features: ['Unlimited Itineraries', 'Priority Support', 'Advanced AI Models', 'Offline Access'],
            color: 'bg-blue-600',
            popular: true
        },
        {
            name: 'Ultimate',
            price: '$49',
            features: ['Everything in Pro', 'Concierge Service', 'Custom Branding', 'API Access'],
            color: 'bg-purple-600'
        }
    ];

    const handleUpgrade = (plan: 'Free' | 'Pro' | 'Ultimate') => {
        updateUser({ plan });
        // In real app, redirect to payment gateway
    };

    const handleCancelClick = () => {
        setIsConfirmOpen(true);
    };

    const confirmCancel = () => {
        updateUser({ plan: 'Free' });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center -top-24 mt-24 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-4xl mx-4 z-10"
                    >
                        <GlassCard className="p-8 border-white/20 dark:border-white/10 max-h-[85vh] overflow-y-auto custom-scrollbar">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500 hover:text-white" />
                            </button>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                                    <CreditCard className="w-6 h-6 text-purple-500" />
                                    Subscription Plan
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Manage your billing and subscription preferences.
                                </p>
                            </div>

                            {/* Current Plan Badge */}
                            <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Current Plan</p>
                                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                                        {user?.plan || 'Free'} Plan
                                    </p>
                                </div>
                                {user?.plan !== 'Free' && (
                                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-bold border border-green-500/30">
                                        Active
                                    </span>
                                )}
                            </div>

                            {/* Plans Grid */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.name}
                                        className={`relative p-6 rounded-2xl border transition-all ${user?.plan === plan.name
                                            ? 'bg-blue-600/10 border-blue-500 ring-1 ring-blue-500'
                                            : 'bg-white/5 border-white/10 hover:border-white/20'
                                            }`}
                                    >
                                        {plan.popular && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full">
                                                MOST POPULAR
                                            </div>
                                        )}
                                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-3xl font-bold">{plan.price}</span>
                                            <span className="text-sm text-gray-500">/mo</span>
                                        </div>
                                        <ul className="space-y-3 mb-6">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={() => handleUpgrade(plan.name as any)}
                                            className={`w-full py-2 rounded-lg font-bold text-sm transition-all ${user?.plan === plan.name
                                                ? 'bg-blue-500/20 text-blue-400 cursor-default'
                                                : 'bg-white/10 hover:bg-white/20 text-white'
                                                }`}
                                            disabled={user?.plan === plan.name}
                                        >
                                            {user?.plan === plan.name ? 'Current Plan' : 'Upgrade'}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Cancel Subscription */}
                            {user?.plan !== 'Free' && (
                                <div className="border-t border-white/10 pt-6">
                                    <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        Danger Zone
                                    </h4>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-500">
                                            Cancel your subscription and downgrade to the Free plan.
                                        </p>
                                        <button
                                            onClick={handleCancelClick}
                                            className="px-4 py-2 border border-red-500/30 text-red-500 hover:bg-red-500/10 rounded-lg text-sm font-bold transition-all"
                                        >
                                            Cancel Subscription
                                        </button>
                                    </div>
                                </div>
                            )}
                        </GlassCard>
                    </motion.div>
                </div>
            )}
            <ConfirmModal
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
                onConfirm={confirmCancel}
                title="Cancel Subscription?"
                message="Are you sure you want to cancel? You will lose access to premium features immediately."
                confirmText="Yes, Cancel"
                type="danger"
            />
        </AnimatePresence>
    );
};
