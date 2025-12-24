import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';

export const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Contact Form */}
                    <GlassCard className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Send Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </GlassCard>

                    {/* Info & Map */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <GlassCard className="p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Email Us</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">hello@luma.ai</p>
                                </div>
                            </GlassCard>
                            <GlassCard className="p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Call Us</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </GlassCard>
                        </div>

                        <GlassCard className="p-2 h-80 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                <MapPin className="w-12 h-12 text-gray-400 animate-bounce" />
                                <span className="sr-only">Map Placeholder</span>
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                <a
                                    href="#"
                                    className="px-6 py-2 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
                                >
                                    Open in Maps
                                </a>
                            </div>
                        </GlassCard>

                        <div className="text-center">
                            <h3 className="font-bold text-xl mb-2">Visit our Office</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                123 Innovation Dr, Tech City<br />
                                CA 94043, United States
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
