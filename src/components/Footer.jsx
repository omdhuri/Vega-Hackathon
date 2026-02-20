import React from 'react';
import { Compass, Facebook, Camera, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <Compass size={20} />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-text-light dark:text-white">TripGenie</span>
                        </div>
                        <p className="text-muted-light dark:text-muted-dark text-sm leading-relaxed max-w-xs mb-6">
                            The world's smartest AI travel planner. Create custom itineraries, track budgets, and explore the world with confidence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors"><Camera size={20} /></a>
                            <a href="#" className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-light dark:text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-light dark:text-muted-dark">
                            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">App</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-light dark:text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-light dark:text-muted-dark">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-light dark:text-white mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-light dark:text-muted-dark">
                            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-light dark:text-muted-dark">© 2024 TripGenie AI Inc. All rights reserved.</p>
                    <div className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Systems Operational
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
