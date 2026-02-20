import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, User, Map, Heart } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4">
            <div className="max-w-6xl mx-auto glass-card px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center">
                        <Compass size={18} className="text-white" />
                    </div>
                    <span className="text-xl font-display font-bold tracking-tight text-gray-900">TripGenie</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" icon={<Compass size={18} />} label="Explore" active={isActive('/')} />
                    <NavLink to="/community" icon={<Heart size={18} />} label="Community" active={isActive('/community')} />
                    <NavLink to="/dashboard" icon={<Map size={18} />} label="My Trips" active={isActive('/dashboard')} />
                </div>

                {/* User / CTA */}
                <div className="flex items-center gap-4">
                    <Link to="/dashboard" className="p-2 rounded-full hover:bg-gray-100 transition">
                        <User size={20} className="text-gray-600" />
                    </Link>
                    <button className="hidden md:block bg-brand hover:bg-blue-600 px-5 py-2 rounded-full font-medium transition text-sm">
                        Plan Trip
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, icon, label, active }) => (
    <Link
        to={to}
        className={`flex items-center gap-2 text-sm font-medium transition-colors ${active ? 'text-brand' : 'text-gray-500 hover:text-gray-900'
            }`}
    >
        {icon}
        <span>{label}</span>
    </Link>
);

export default Navbar;
