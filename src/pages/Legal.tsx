import { motion } from 'framer-motion';
import { Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

const LegalLayout = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 dark:bg-[#050510]">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 mb-8 text-gray-500 hover:text-blue-500 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <GlassCard className="p-8 md:p-12 border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-white/10 pb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                                {title}
                            </h1>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                            {children}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export const PrivacyPolicy = () => (
    <LegalLayout title="Privacy Policy" icon={Lock}>
        <p className="lead">Last updated: December 25, 2024</p>

        <h3>1. Introduction</h3>
        <p>
            At Luma ("we", "our", or "us"), we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our AI-powered itinerary generation services.
        </p>

        <h3>2. Information We Collect</h3>
        <ul>
            <li><strong>Personal Information:</strong> Name, email address, and profile pictures when you create an account.</li>
            <li><strong>Travel Preferences:</strong> Destination interests, budget constraints, and travel dates to generate itineraries.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our application, including device type and browser version.</li>
        </ul>

        <h3>3. How We Use Your Information</h3>
        <p>We strictly use your data to:</p>
        <ul>
            <li>Generate personalized travel itineraries using our AI algorithms.</li>
            <li>Process subscription payments and manage your account.</li>
            <li>Improve our AI models (using anonymized, aggregated data only).</li>
            <li>Communicate strictly necessary service updates.</li>
        </ul>

        <h3>4. Data Security</h3>
        <p>
            We implement industry-standard encryption (AES-256) and security protocols to protect your data.
            We do not sell your personal data to third parties.
        </p>
    </LegalLayout>
);

export const TermsOfService = () => (
    <LegalLayout title="Terms of Service" icon={FileText}>
        <p className="lead">Effective Date: December 25, 2024</p>

        <h3>1. Acceptance of Terms</h3>
        <p>
            By accessing or using Luma, you agree to be bound by these Terms of Service. If you disagree with any part of these terms,
            you may not use our service.
        </p>

        <h3>2. Description of Service</h3>
        <p>
            Luma provides AI-generated travel itineraries. Please note that these are <strong>recommendations only</strong>.
            We are not responsible for:
        </p>
        <ul>
            <li>Accuracy of pricing or availability of third-party services (flights, hotels).</li>
            <li>Changes in local laws, visa requirements, or safety conditions.</li>
            <li>Cancellations or issues with bookings made based on our suggestions.</li>
        </ul>

        <h3>3. User Responsibilities</h3>
        <p>You agree not to:</p>
        <ul>
            <li>Use the service for any illegal purpose.</li>
            <li>Attempt to reverse-engineer our AI models or scrape data.</li>
            <li>Share your account credentials with others.</li>
        </ul>

        <h3>4. Subscription & Billing</h3>
        <p>
            Subscriptions are billed monthly. You may cancel at any time, but no refunds will be issued for partial months.
            Free tier users are limited to 3 generations per month.
        </p>
    </LegalLayout>
);

export const CookiePolicy = () => (
    <LegalLayout title="Cookie Policy" icon={Eye}>
        <p className="lead">Our approach to cookies is simple: functionality first.</p>

        <h3>1. What are Cookies?</h3>
        <p>
            Cookies are small text files stored on your device that help us remember your preferences and login state.
        </p>

        <h3>2. Cookies We Use</h3>
        <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10">
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mt-0">Essential Cookies</h4>
                <p className="mb-0 text-sm">Required for authentication and keeping you logged in. Cannot be disabled.</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10">
                <h4 className="font-bold text-purple-600 dark:text-purple-400 mt-0">Preference Cookies</h4>
                <p className="mb-0 text-sm">Remember your theme (Dark/Light) and language settings.</p>
            </div>
        </div>

        <h3>3. Managing Cookies</h3>
        <p>
            You can control or delete cookies through your browser settings. However, disabling essential cookies may prevent you from logging in.
        </p>
    </LegalLayout>
);
