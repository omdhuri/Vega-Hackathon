import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, ArrowRight, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handlePlanTrip = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate AI processing
        setTimeout(() => {
            setLoading(false);
            navigate('/itinerary/new'); // Navigate to itinerary view
        }, 1500);
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Aurora Background Elements */}
            {/* Aurora Background Elements - Subtle LightBlobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-100 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -z-10" />

            {/* Hero Section */}
            <main className="container mx-auto px-6 pt-32 pb-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-green-100 bg-green-50 text-sm font-medium text-brand mb-6 inline-block">
                            ✨ AI-Powered Travel Assistant
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-gray-900">
                            Plan Your <span className="text-brand">Dream Trip</span> <br /> in Seconds
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Tell us your style, budget, and dates. TripGenie's AI builds a personalized day-by-day itinerary with hidden gems, hotels, and dining.
                        </p>
                    </motion.div>
                </div>

                {/* Preference Form (Glass Card) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="glass-card max-w-5xl mx-auto p-4 md:p-6"
                >
                    <form onSubmit={handlePlanTrip} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Destination */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <MapPin size={20} className="text-gray-400 group-focus-within:text-brand transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Where to? (e.g. Japan)"
                                className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all shadow-sm"
                                required
                            />
                        </div>

                        {/* Dates */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Calendar size={20} className="text-gray-400 group-focus-within:text-brand transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Duration (e.g. 5 days)"
                                className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all shadow-sm"
                            />
                        </div>

                        {/* Budget */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <DollarSign size={20} className="text-gray-400 group-focus-within:text-brand transition-colors" />
                            </div>
                            <select className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all cursor-pointer shadow-sm">
                                <option className="bg-white" value="">Select Budget</option>
                                <option className="bg-white" value="low">Budget Friendly</option>
                                <option className="bg-white" value="mid">Balanced Comfort</option>
                                <option className="bg-white" value="high">Luxury Indulgence</option>
                            </select>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-gradient-to-r from-brand to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-brand/25"
                        >
                            {loading ? (
                                <>
                                    <Wand2 className="animate-spin" size={20} />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    Generate Plan
                                    <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>

                {/* Features / Social Proof */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        { title: "Smart Filtering", desc: "We match destinations to your 'Vibe' - purely relaxation or high adventure." },
                        { title: "Cost Estimator", desc: "Real-time budget tracking so you never overspend on your journey." },
                        { title: "Interactive Maps", desc: "Visualize your daily route with integrated maps for easy navigation." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center mb-4 text-brand">
                                <Wand2 size={20} />
                            </div>
                            <h3 className="text-xl font-display font-bold mb-2 text-gray-900">{feature.title}</h3>
                            <p className="text-sm text-gray-500">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
