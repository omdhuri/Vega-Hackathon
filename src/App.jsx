import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

// Pages
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ItineraryView from './pages/ItineraryView';
import CommunityPage from './pages/CommunityPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen relative">
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/itinerary/:id" element={<ItineraryView />} />
                    <Route path="/community" element={<CommunityPage />} />
                </Routes>
                <Chatbot />
            </div>
        </Router>
    );
}

export default App;
