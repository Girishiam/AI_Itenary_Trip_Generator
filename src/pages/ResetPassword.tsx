import { Link } from 'react-router-dom';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowLeft, Lock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export const ResetPassword = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />

            <GlassCard className="w-full max-w-md p-8 relative z-10">
                {!isSubmitted ? (
                    <>
                        <Link to="/signin" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Sign In
                        </Link>

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-500">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h1 className="text-3xl font-bold mb-2">Set new password</h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                Must be at least 8 characters.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">New Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Confirm Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Reset Password
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 animate-in zoom-in duration-300">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Password Reset!</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Your password has been successfully reset. Click below to log in magically.
                        </p>
                        <Link to="/signin" className="inline-flex py-3 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Continue to Sign In
                        </Link>
                    </div>
                )}
            </GlassCard>
        </div>
    );
};
