import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowLeft, KeyRound } from 'lucide-react';
import { useState } from 'react';

export const OTPVerification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const source = location.state?.source || 'forgot-password'; // Default to forgot-password flow
    const [otp, setOtp] = useState(['', '', '', '', '']); // 5 digit OTP

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            (element.nextSibling as HTMLInputElement).focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            // Focus previous input on backspace if current is empty
            if (e.target instanceof HTMLInputElement && e.target.previousSibling) {
                (e.target.previousSibling as HTMLInputElement).focus();
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, verify OTP here.

        if (source === 'signup') {
            // If coming from signup, maybe log them in or go to signin
            navigate('/signin');
        } else {
            // Default forgot-password flow
            navigate('/reset-password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />

            <GlassCard className="w-full max-w-md p-8 relative z-10">
                <Link to={source === 'signup' ? "/signup" : "/forgot-password"} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                        <KeyRound className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Check your email</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        We sent a code to your email. Enter it below to verify your identity.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex justify-center gap-3">
                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="w-12 h-14 text-center text-2xl font-bold rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    type="text"
                                    name="otp"
                                    maxLength={1}
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onKeyDown={e => handleKeyDown(e, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}
                    </div>

                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Verify Code
                    </button>

                    <div className="text-center">
                        <p className="text-sm text-gray-500">
                            Didn't receive the email? <button type="button" className="text-blue-500 font-medium hover:underline">Click to resend</button>
                        </p>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
};
