import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDestinations } from '../services/api';
import { Map, Clock, DollarSign, Sun, CloudRain, Star, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ItineraryView = () => {
    const { id } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching based on ID (defaulting to first item for prototype)
        getDestinations().then(data => {
            setTrip(data[0]); // Hardcoded to Kyoto for demo
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className="text-gray-600 text-center pt-24">Loading your journey...</div>;

    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-6"
            >
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-brand/20 text-brand rounded-full text-xs font-bold uppercase tracking-wide">5 Days</span>
                        <span className="flex items-center gap-1 text-accent text-sm"><Star size={14} fill="currentColor" /> {trip.rating}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold">{trip.name}</h1>
                    <p className="text-gray-600 mt-2 text-lg">{trip.subtitle}</p>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <button className="p-3 glass-card hover:bg-gray-100 transition"><Share2 size={20} /></button>
                    <button className="px-6 py-3 bg-brand text-white rounded-full font-bold hover:bg-emerald-700 transition">Book Trip</button>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Timeline */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Day 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-6"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-display font-bold">Day 1: Arrival & Culture</h2>
                            <span className="text-sm text-gray-400">Oct 12th</span>
                        </div>

                        <div className="space-y-6 relative border-l border-gray-200 ml-3 pl-8">
                            {trip.day_plan.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className={`absolute -left-[39px] w-5 h-5 rounded-full border-2 border-brand bg-white z-10 ${index === 0 ? 'bg-brand' : ''}`}></div>
                                    <div className="glass-card p-4 hover:shadow-md transition">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-brand font-mono text-sm">{item.time}</span>
                                            <span className="text-xs text-gray-500 uppercase">{item.type}</span>
                                        </div>
                                        <h3 className="font-bold text-lg">{item.activity}</h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            {item.type === 'transport' && 'Haruka Express • 75 mins'}
                                            {item.type === 'hotel' && 'The Thousand Kyoto • 5 Stars'}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Add Item Button */}
                            <button className="w-full py-3 border border-dashed border-gray-300 rounded-xl text-gray-500 hover:text-brand hover:border-brand transition flex items-center justify-center gap-2 text-sm">
                                + Add Activity
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Widgets */}
                <div className="space-y-6">
                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-4 h-64 relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/135.7681,35.0116,12,0/600x400?access_token=placeholder')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition">
                            <Map size={32} className="text-gray-600" />
                        </div>
                        <div className="absolute bottom-4 left-4 z-10">
                            <h3 className="font-bold">Interactive Map</h3>
                            <p className="text-xs text-gray-500">View 4 locations</p>
                        </div>
                    </motion.div>

                    {/* Budget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-green-500/20 text-green-400 rounded-lg"><DollarSign size={20} /></div>
                            <div>
                                <h3 className="font-bold">Daily Budget</h3>
                                <p className="text-xs text-gray-400">¥15,000 / ¥35,000 used</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-[45%]"></div>
                        </div>
                    </motion.div>

                    {/* Weather */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-6 flex justify-between items-center"
                    >
                        <div>
                            <h3 className="font-bold">Kyoto Weather</h3>
                            <p className="text-xs text-gray-500">Partly Cloudy</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-display font-bold">22°</span>
                            <Sun size={20} className="text-yellow-400 inline ml-2" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ItineraryView;
