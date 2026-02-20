import React from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, Map, User, Star, ArrowRight } from 'lucide-react';

const ITINERARIES = [
    {
        title: "Ultimate Bali Cultural Tour",
        author: "Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600",
        tags: ["Culture", "Nature"],
        likes: 1240,
        days: 7
    },
    {
        title: "Kyoto Spring Food Tour",
        author: "Kenji Moto",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600",
        tags: ["Foodie", "City"],
        likes: 856,
        days: 5
    },
    {
        title: "Iceland Ring Road",
        author: "Erik Thor",
        image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=600",
        tags: ["Adventure", "Road Trip"],
        likes: 2100,
        days: 10
    }
];

const CommunityPage = () => {
    return (
        <div className="pt-24 pb-20 px-6 container mx-auto">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-display font-bold mb-2">Explore Community</h1>
                    <p className="text-gray-400">Discover itineraries crafted by travel experts and locals.</p>
                </div>
                <div className="glass-card p-2 flex items-center gap-2">
                    <Search size={20} className="text-gray-400 ml-2" />
                    <input
                        type="text"
                        placeholder="Search destinations..."
                        className="bg-transparent border-none focus:outline-none text-gray-900 w-64 placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Featured Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card p-8 bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 relative overflow-hidden group"
                >
                    <div className="relative z-10">
                        <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2 block">Premium Feature</span>
                        <h2 className="text-2xl font-bold mb-2">Unlock AI Travel Agent</h2>
                        <p className="text-gray-600 text-sm mb-6 max-w-sm">Get personalized real-time suggestions and booking assistance 24/7.</p>
                        <button className="bg-brand text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-emerald-700 transition">Try Free</button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card p-8 relative overflow-hidden group hover:border-brand/50 transition cursor-pointer"
                >
                    <h2 className="text-2xl font-bold mb-2">Become a Local Expert 🌏</h2>
                    <p className="text-gray-600 text-sm mb-6">Share your hidden gems and earn rewards by creating guides for your city.</p>
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs">
                                <User size={16} />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs font-bold">+2k</div>
                    </div>
                </motion.div>
            </div>

            {/* Itinerary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ITINERARIES.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card group overflow-hidden hover:shadow-lg transition"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center gap-1">
                                <Star size={12} className="text-yellow-400" fill="currentColor" /> 4.9
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex gap-2 mb-3">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-brand bg-brand/10 px-2 py-1 rounded-md">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-brand transition">{item.title}</h3>
                            <p className="text-gray-500 text-sm mb-4">by {item.author}</p>

                            <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                                <span className="flex items-center gap-1"><Map size={14} /> {item.days} Days</span>
                                <span className="flex items-center gap-1 group-hover:text-red-400 transition cursor-pointer"><Heart size={14} /> {item.likes}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CommunityPage;
