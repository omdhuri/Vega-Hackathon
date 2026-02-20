import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="glass-card w-80 md:w-96 mb-4 overflow-hidden border border-gray-200 bg-white shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-brand/10 p-4 flex justify-between items-center border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center">
                                    <MessageSquare size={16} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Chatnavi AI</h3>
                                    <p className="text-xs text-green-600 flex items-center gap-1">● Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-gray-200 p-1 rounded transition">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="h-80 p-4 overflow-y-auto space-y-4 bg-gray-50">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-xs text-white">AI</div>
                                <div className="glass-card p-3 rounded-tl-sm text-sm bg-gray-100 text-gray-800 shadow-sm border-transparent">
                                    Hi Vetrick! I noticed you're looking at flights to London. Do you need help finding hotels in Soho?
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-gray-200 bg-white flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-gray-100 border border-transparent rounded-lg px-3 py-2 text-sm focus:outline-none focus:bg-white focus:border-brand transition-colors text-gray-800"
                            />
                            <button className="bg-brand p-2 rounded-lg hover:bg-blue-600 transition">
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform ${isOpen ? 'bg-gray-200 text-gray-600' : 'bg-brand text-white animate-bounce'}`}
            >
                {isOpen ? <X /> : <MessageSquare />}
            </button>
        </div>
    );
};

export default Chatbot;
