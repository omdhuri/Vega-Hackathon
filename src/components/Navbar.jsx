import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Enforce Light Mode
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavLink = ({ to, label }) => (
        <Link
            to={to}
            className="hover:text-primary transition-colors text-sm font-medium"
        >
            {label}
        </Link>
    );

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-surface-light/80 backdrop-blur-md border-b border-gray-200'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <Bot size={20} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-text-light">TripGenie</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-light">
                        <NavLink to="/" label="How it Works" />
                        <NavLink to="/dashboard" label="Features" />
                        <NavLink to="/community" label="Destinations" />
                        <NavLink to="#" label="Pricing" />
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/login" className="px-4 py-2 text-sm font-medium text-primary hover:bg-emerald-50 rounded-lg transition-colors">
                            Log In
                        </Link>
                        <Link to="/dashboard" className="px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary-hover rounded-lg shadow-sm transition-all transform hover:scale-105">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-text-light p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-surface-light border-t border-gray-200">
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:bg-gray-50">How it Works</Link>
                        <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:bg-gray-50">Features</Link>
                        <Link to="/destinations" className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:bg-gray-50">Destinations</Link>
                        <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:bg-gray-50">Pricing</Link>
                        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
                            <Link to="/login" className="w-full text-center px-4 py-2 text-sm font-medium text-primary hover:bg-emerald-50 rounded-lg transition-colors">
                                Log In
                            </Link>
                            <Link to="/dashboard" className="w-full text-center px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary-hover rounded-lg shadow-sm">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
