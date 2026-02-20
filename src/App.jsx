import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

// Main Pages
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ItineraryView from './pages/ItineraryView';
import CommunityPage from './pages/CommunityPage';

// Auth & Admin Pages
import TravellerLogin from './pages/TravellerLogin';
import GuideLogin from './pages/GuideLogin';
import AdminDashboard from './pages/AdminDashboard';

// Routes that should NOT show the global Navbar/Chatbot
const STANDALONE_ROUTES = ['/login', '/guide/login', '/admin'];

function AppShell() {
    const location = useLocation();
    const isStandalone = STANDALONE_ROUTES.includes(location.pathname);

    return (
        <div className="min-h-screen relative">
            {!isStandalone && <Navbar />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/itinerary/:id" element={<ItineraryView />} />
                <Route path="/community" element={<CommunityPage />} />

                {/* Auth & Admin */}
                <Route path="/login" element={<TravellerLogin />} />
                <Route path="/guide/login" element={<GuideLogin />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
            {!isStandalone && <Chatbot />}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppShell />
        </Router>
    );
}

export default App;
