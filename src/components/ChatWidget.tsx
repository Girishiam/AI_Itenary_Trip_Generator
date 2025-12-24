import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! I\'m Luma, your personal travel architect. Where would you like to explore today?' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages(prev => [...prev, { type: 'user', text: input }]);
        setInput('');

        // Simulating sophisticated AI typing delay
        setTimeout(() => {
            setMessages(prev => [...prev, {
                type: 'bot',
                text: "That helps! I can craft a bespoke itinerary for you. Try using our 'Plan Trip' feature to customize every detail."
            }]);
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-6 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10, x: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10, x: 10 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }} // Bezier for premium feel
                        className="origin-bottom-right"
                    >
                        <GlassCard className="w-[380px] h-[600px] p-0 overflow-hidden !rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl bg-white/80 dark:bg-[#0a0a0b]/90 backdrop-blur-3xl ring-1 ring-black/5">
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="px-6 py-5 border-b border-gray-100 dark:border-white/5 flex items-center justify-between bg-white/50 dark:bg-white/5 backdrop-blur-md shrink-0">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 ring-2 ring-white dark:ring-white/10">
                                                <img src="/logo.webp" alt="Bot" className="w-6 h-6 object-contain invert brightness-0" />
                                            </div>
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#0a0a0b] rounded-full shadow-sm"></span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[16px] text-gray-900 dark:text-white leading-tight tracking-tight">Luma Assistant</h3>
                                            <p className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">Online Now</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all text-gray-400 hover:rotate-90 duration-300"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Messages */}
                                <div className="flex-1 p-5 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-white/10 scrollbar-track-transparent">
                                    {messages.map((msg, idx) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            key={idx}
                                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`flex flex-col gap-1 max-w-[85%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                                                <span className="text-[10px] text-gray-400 font-medium px-1">
                                                    {msg.type === 'user' ? 'You' : 'Luma AI'}
                                                </span>
                                                <div
                                                    className={`p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.type === 'user'
                                                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-tr-sm shadow-blue-500/20'
                                                        : 'bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-200 rounded-tl-sm'
                                                        }`}
                                                >
                                                    {msg.text}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-4 bg-white/10 dark:bg-black/40 backdrop-blur-md border-t border-white/10 shrink-0">
                                    <form
                                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                        className="relative flex items-center gap-2"
                                    >
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Ask anything..."
                                            className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl pl-4 pr-12 py-3 outline-none text-gray-900 dark:text-white placeholder:text-gray-500 text-sm focus:ring-1 focus:ring-blue-500/50 transition-all"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!input.trim()}
                                            className="absolute right-2 p-1.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </form>
                                    <div className="mt-2 flex justify-center">
                                        <span className="text-[10px] text-gray-400 font-medium opacity-50">AI Powered Experience</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button with Helper Text */}
            <div className="flex items-center gap-4 group">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="hidden lg:flex items-center gap-2 bg-white dark:bg-[#0a0a0b] text-gray-900 dark:text-white pl-4 pr-2 py-2.5 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 dark:border-white/10 text-sm font-semibold whitespace-nowrap mr-2"
                        >
                            <span>Need inspiration? 🌍</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hovered:bg-gray-100 dark:hover:bg-white/10 rounded-full"
                            >
                                <X className="w-3 h-3 text-gray-400" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center z-50 transition-all hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] ring-4 ring-white dark:ring-[#0a0a0b] ring-opacity-50"
                >
                    {/* Icon Transition */}
                    <div className="relative z-10">
                        <AnimatePresence mode='wait'>
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-7 h-7 text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="logo"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-full flex items-center justify-center p-3.5"
                                >
                                    <img
                                        src="/logo.webp"
                                        alt="Chat"
                                        className="w-full h-full object-contain invert brightness-0 pointer-events-none select-none"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.button>
            </div>
        </div>
    );
};
