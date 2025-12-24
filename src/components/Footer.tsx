import { Facebook, Twitter, Instagram, Linkedin, Send, MapPin, Mail, Phone } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="relative w-full pt-20 pb-10 px-6 overflow-hidden border-t border-gray-200 dark:border-white/10">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-gray-100 dark:from-black to-transparent -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                                L
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Luma
                            </span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Crafting unforgettable journeys with the power of Artificial Intelligence. Your world, discovered.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={Twitter} href="#" />
                            <SocialIcon icon={Instagram} href="#" />
                            <SocialIcon icon={Linkedin} href="#" />
                            <SocialIcon icon={Facebook} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/gallery">Gallery</FooterLink>
                            <FooterLink to="/destinations">Destinations</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-blue-500" />
                                <span>123 Innovation Dr, Tech City</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-purple-500" />
                                <span>hello@luma.ai</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-pink-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Newsletter</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                            Subscribe for latest travel trends and exclusive offers.
                        </p>
                        <GlassCard className="p-1 pr-2 bg-white/5 border-white/10 overflow-hidden">
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    type="email"
                                    placeholder="Your email..."
                                    className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white px-4 py-2 min-w-0 placeholder:text-gray-500"
                                />
                                <button className="shrink-0 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Luma AI. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-blue-500 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon: Icon, href }: { icon: any, href: string }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
    >
        <Icon className="w-5 h-5" />
    </a>
);

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <li>
        <Link
            to={to}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
        >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            {children}
        </Link>
    </li>
);

