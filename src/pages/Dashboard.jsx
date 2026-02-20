import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Calendar, CreditCard, Clock, User } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand to-purple-500 flex items-center justify-center text-2xl font-bold">VW</div>
                <div>
                    <h1 className="text-3xl font-display font-bold">Welcome back, Vetrick 👋</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="bg-white border border-gray-100 shadow-sm px-2 py-0.5 rounded">New York 🇺🇸</span>
                        <span>→</span>
                        <span className="bg-white border border-gray-100 shadow-sm px-2 py-0.5 rounded">Taipei City 🇹🇼</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: "Upcoming Trips", val: "2", icon: <Plane /> },
                    { label: "Budget Spent", val: "$2,450", icon: <CreditCard /> },
                    { label: "Visa Validity", val: "180 Days", icon: <Calendar /> },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 flex justify-between items-center"
                    >
                        <div>
                            <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-bold">{stat.val}</h3>
                        </div>
                        <div className="p-3 rounded-full bg-gray-100 text-gray-600">{stat.icon}</div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Flight Card */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-bold mb-4">Next Flight</h2>
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="glass-card p-8 border-t-4 border-t-brand"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-gray-900">LHR</div>
                                <div className="text-sm text-gray-500">London</div>
                                <div className="text-brand font-mono mt-1">15:00</div>
                            </div>
                            <div className="flex-1 px-8 text-center relative">
                                <div className="border-t-2 border-dashed border-gray-300 w-full absolute top-1/2 left-0 -translate-y-1/2"></div>
                                <Plane className="rotate-90 text-gray-400 bg-white relative z-10 mx-auto" size={24} />
                                <div className="text-xs text-gray-500 mt-4">7h 40m</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-gray-900">JFK</div>
                                <div className="text-sm text-gray-500">New York</div>
                                <div className="text-brand font-mono mt-1">19:40</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-100 text-center">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Passenger</p>
                                <p className="font-bold">Vetrick W.</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Flight</p>
                                <p className="font-bold">BA-117</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Seat</p>
                                <p className="font-bold">4K</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Gate</p>
                                <p className="font-bold text-brand">02</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Assistant Teaser */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Travel Assistant</h2>
                    <div className="glass-card p-6 h-full flex flex-col justify-center text-center bg-gradient-to-b from-green-50 to-transparent">
                        <div className="w-16 h-16 bg-brand rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg shadow-brand/30 animate-bounce">
                            <User className="text-white" size={32} />
                        </div>
                        <h3 className="text-lg font-bold">Hi, I'm Chatnavi</h3>
                        <p className="text-sm text-gray-500 mt-2 mb-6">Your personal travel assistant — available 24/7 for any trip need.</p>
                        <button className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition">Start Chat</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
