import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Edit3, Wand2, Plane, Star, ArrowRight, Check, MapPin, Send, Zap, Sliders, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
            {/* Hero Section */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-teal-300/20 dark:bg-teal-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">Used by 10K+ Travelers</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-light dark:text-white mb-6 font-display">
                        Create a Personalized <br className="hidden md:block" />
                        <span className="relative inline-block">
                            Trip Plan 🛫
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-300 dark:text-emerald-700 opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                            </svg>
                        </span>
                        in Seconds with AI
                    </h1>

                    <p className="mt-6 text-xl text-muted-light dark:text-muted-dark max-w-2xl mx-auto font-body">
                        Craft your perfect detailed day-by-day itinerary based on your interests, budget, and travel style — instantly and effortlessly.
                    </p>

                    <div className="mt-10 max-w-3xl mx-auto">
                        <div className="p-2 bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-2">
                            <div className="flex-1 w-full relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Globe size={20} className="text-muted-light dark:text-muted-dark" />
                                </div>
                                <input
                                    className="block w-full pl-11 pr-4 py-3 bg-transparent border-none rounded-xl text-text-light dark:text-text-dark placeholder-muted-light dark:placeholder-muted-dark focus:ring-2 focus:ring-primary focus:bg-gray-50 dark:focus:bg-gray-800 transition-colors focus:outline-none"
                                    placeholder="Where do you want to go? e.g., Bali, Paris, Tokyo..."
                                    type="text"
                                />
                            </div>
                            <button className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-hover shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
                                <Wand2 size={18} />
                                Generate Trip
                            </button>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-muted-light dark:text-muted-dark">
                            <span>Popular:</span>
                            <button className="hover:text-primary underline decoration-dotted">Tokyo in Spring</button>
                            <span>•</span>
                            <button className="hover:text-primary underline decoration-dotted">10 Days in Italy</button>
                            <span>•</span>
                            <button className="hover:text-primary underline decoration-dotted">Bali on a Budget</button>
                        </div>
                    </div>
                </div>

                {/* UI Mockup / Visual */}
                <div className="mt-16 relative max-w-6xl mx-auto px-4">
                    <div className="relative rounded-2xl bg-surface-light dark:bg-surface-dark shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 text-center text-xs text-muted-light dark:text-muted-dark font-mono">tripgenie.com/plan/bali-adventure</div>
                        </div>
                        <div className="flex flex-col md:flex-row h-[500px]">
                            {/* Sidebar Mockup */}
                            <div className="hidden md:flex flex-col w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xs font-semibold text-muted-light dark:text-muted-dark uppercase tracking-wider mb-3">Navigation</h3>
                                        <ul className="space-y-2">
                                            <li><a className="flex items-center gap-3 px-3 py-2 text-primary bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-sm font-medium" href="#"><Zap size={18} />Travel Assistant</a></li>
                                            <li><a className="flex items-center gap-3 px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium" href="#"><Compass size={18} />Explore</a></li>
                                            <li><a className="flex items-center gap-3 px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium" href="#"><Plane size={18} />My Trips <span className="ml-auto text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-gray-500">3</span></a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold text-muted-light dark:text-muted-dark uppercase tracking-wider mb-3">Recent Drafts</h3>
                                        <ul className="space-y-3">
                                            <li className="group cursor-pointer">
                                                <div className="text-sm font-medium text-text-light dark:text-text-dark group-hover:text-primary">Korea in 5 Days</div>
                                                <div className="text-xs text-muted-light dark:text-muted-dark">Spring Food Tour</div>
                                            </li>
                                            <li className="group cursor-pointer">
                                                <div className="text-sm font-medium text-text-light dark:text-text-dark group-hover:text-primary">Solo Trip to China</div>
                                                <div className="text-xs text-muted-light dark:text-muted-dark">January 2024</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Mockup */}
                            <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-800 p-8 relative">
                                <div className="max-w-3xl mx-auto space-y-8">
                                    <div className="text-center">
                                        <span className="text-sm font-medium text-primary mb-2 block font-display italic">Top Summer Picks, Just For You</span>
                                        <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">Ultimate Bali Gateway 🌴</h2>
                                        <div className="flex justify-center gap-4 text-xs text-muted-light dark:text-muted-dark">
                                            <span className="flex items-center gap-1"><Compass size={14} /> 7 Days</span>
                                            <span className="flex items-center gap-1"><Sliders size={14} /> $1,200 Est. Budget</span>
                                        </div>
                                    </div>

                                    {/* Tiles */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            { title: "Ubud - Bali Tour", loc: "Ubud, Gianyar", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=300" },
                                            { title: "Canggu - Beach Club", loc: "Canggu, Badung", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=300" },
                                            { title: "Uluwatu Temple", loc: "Pecatu, South Kuta", img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=300" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                                <div className="h-32 bg-gray-200 dark:bg-gray-600 relative">
                                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="p-3">
                                                    <h4 className="font-medium text-text-light dark:text-white text-sm">{item.title}</h4>
                                                    <p className="text-xs text-muted-light dark:text-muted-dark mt-1 flex items-center gap-1">
                                                        <MapPin size={10} /> {item.loc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* AI Message Mockup */}
                                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                                        <div className="flex gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-primary text-xs font-bold">AI</div>
                                            <div className="flex-1">
                                                <p className="text-sm text-text-light dark:text-text-dark bg-gray-50 dark:bg-gray-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl">Based on your preferences for nature and culture, I've added a sunrise trek to Mount Batur for Day 3. Would you like to add a spa visit afterwards?</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <input className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none" placeholder="Ask to modify itinerary..." type="text" />
                                            <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-hover"><Send size={14} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm font-semibold text-muted-light dark:text-muted-dark uppercase tracking-wider mb-6">Trusted by modern travelers from</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 font-bold text-gray-400">
                        <span>Coinbase</span>
                        <span>Linear</span>
                        <span>Gumroad</span>
                        <span>Loom</span>
                        <span>Opendoor</span>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-medium bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full text-sm">Easy as one, two, three</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-light dark:text-white">Plan Smarter Trips In Seconds</h2>
                        <p className="mt-4 text-muted-light dark:text-muted-dark max-w-2xl mx-auto">Let AI craft a personalized, day-by-day itinerary tailored to your interests, budget, and travel style.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="group relative p-8 bg-background-light dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <Edit3 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">1. Tell us your style</h3>
                            <p className="text-muted-light dark:text-muted-dark leading-relaxed">Enter your destination, dates, budget, and preferences. Whether you're a foodie, adventurer, or culture seeker.</p>
                        </div>
                        <div className="group relative p-8 bg-background-light dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                <Wand2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">2. Get an AI Itinerary</h3>
                            <p className="text-muted-light dark:text-muted-dark leading-relaxed">Our advanced AI generates a complete day-by-day plan with hidden gems, optimal routes, and local favorites.</p>
                        </div>
                        <div className="group relative p-8 bg-background-light dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                                <Plane size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">3. Customize & Go</h3>
                            <p className="text-muted-light dark:text-muted-dark leading-relaxed">Refine your plan with a chat interface. Book flights and hotels directly. Sync everything to your calendar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white dark:bg-surface-dark">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to plan your dream trip?</h2>
                            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">Join thousands of travelers who are saving time and discovering more with TripGenie AI.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
                                    Start Planning for Free
                                </button>
                                <button className="px-8 py-4 bg-emerald-800 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-900 transition-colors border border-emerald-700">
                                    Download iOS App
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
