import { Link, useNavigate } from 'react-router-dom';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowLeft, Mail } from 'lucide-react';

export const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />

            <GlassCard className="w-full max-w-md p-8 relative z-10">
                <Link to="/signin" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Sign In
                </Link>

                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                        <Mail className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        No worries, we'll send you reset instructions.
                    </p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); navigate('/verify-otp', { state: { source: 'forgot-password' } }); }} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            placeholder="Enter your email"
                        />
                    </div>

                    <button className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Reset Password
                    </button>
                </form>
            </GlassCard>
        </div>
    );
};
