import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowRight, Github, Chrome } from 'lucide-react';

export const SignIn = () => {
    const navigate = useNavigate();
    const { login } = useStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mimic API call delay
        login(); // Sets authenticated user in store
        navigate('/'); // Redirect to Home
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />

            <GlassCard className="w-full max-w-md p-8 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-gray-600 dark:text-gray-400">Sign in to continue your journey</p>
                </div>

                <div className="space-y-4 mb-6">
                    <button className="w-full py-3 px-4 rounded-xl bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center gap-3 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <Chrome className="w-5 h-5" />
                        <span>Continue with Google</span>
                    </button>
                    <button className="w-full py-3 px-4 rounded-xl bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center gap-3 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <Github className="w-5 h-5" />
                        <span>Continue with GitHub</span>
                    </button>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-black text-gray-500">Or continue with email</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium ml-1">Password</label>
                            <Link to="/forgot-password" className="text-xs text-blue-500 hover:underline">Forgot password?</Link>
                        </div>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        Sign In
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                        Sign up
                    </Link>
                </div>
            </GlassCard>
        </div>
    );
};
