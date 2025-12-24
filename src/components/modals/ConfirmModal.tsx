import { GlassCard } from '../ui/GlassCard';
import { X, AlertTriangle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: 'danger' | 'info';
}

export const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    type = 'danger'
}: ConfirmModalProps) => {

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-auto">
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
                        className="relative w-full max-w-md mx-4 z-10"
                    >
                        <GlassCard className="p-6 border-white/20 dark:border-white/10">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500 hover:text-white" />
                            </button>

                            <div className="flex flex-col items-center text-center mb-6">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${type === 'danger' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'
                                    }`}>
                                    {type === 'danger' ? <AlertTriangle className="w-8 h-8" /> : <Check className="w-8 h-8" />}
                                </div>
                                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {message}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={onClose}
                                    className="flex-1 py-3 rounded-xl bg-white/5 border border-black/5 dark:border-white/10 font-bold hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                                >
                                    {cancelText}
                                </button>
                                <button
                                    onClick={() => { onConfirm(); onClose(); }}
                                    className={`flex-1 py-3 rounded-xl font-bold text-white shadow-lg transition-all ${type === 'danger'
                                        ? 'bg-red-500 hover:bg-red-600 hover:shadow-red-500/30'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/30'
                                        }`}
                                >
                                    {confirmText}
                                </button>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
