import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── Mock Data ────────────────────────────────────────────────────────────────
const kpiData = [
    {
        label: 'Total Travelers',
        value: '12,847',
        change: '+8.2%',
        up: true,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        gradient: 'from-blue-500 to-indigo-500',
        light: 'bg-blue-50',
        text: 'text-blue-600',
        ring: 'ring-blue-100',
    },
    {
        label: 'Active Guides',
        value: '1,234',
        change: '+3.5%',
        up: true,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        gradient: 'from-emerald-500 to-teal-500',
        light: 'bg-emerald-50',
        text: 'text-emerald-600',
        ring: 'ring-emerald-100',
    },
    {
        label: 'Monthly Revenue',
        value: '₹8.4L',
        change: '+12.1%',
        up: true,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        gradient: 'from-amber-400 to-orange-500',
        light: 'bg-amber-50',
        text: 'text-amber-600',
        ring: 'ring-amber-100',
    },
    {
        label: 'Pending Approvals',
        value: '47',
        change: '-5 today',
        up: false,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        gradient: 'from-rose-400 to-red-500',
        light: 'bg-rose-50',
        text: 'text-rose-600',
        ring: 'ring-rose-100',
    },
];

const recentActivity = [
    { type: 'guide', action: 'New guide application', name: 'Rahul Sharma', location: 'Jaipur, Rajasthan', time: '2 min ago', status: 'Pending', statusColor: 'text-amber-700 bg-amber-50 border-amber-200' },
    { type: 'booking', action: 'Tour booking confirmed', name: 'Sarah Chen', location: 'Munnar, Kerala', time: '14 min ago', status: 'Confirmed', statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { type: 'report', action: 'Dispute reported', name: 'Amir Khan', location: 'Agra, UP', time: '1 hr ago', status: 'Review', statusColor: 'text-red-700 bg-red-50 border-red-200' },
    { type: 'guide', action: 'Guide approved', name: 'Priya Menon', location: 'Goa', time: '3 hr ago', status: 'Approved', statusColor: 'text-blue-700 bg-blue-50 border-blue-200' },
    { type: 'booking', action: 'Tour completed', name: 'James Wilson', location: 'Varanasi, UP', time: '5 hr ago', status: 'Done', statusColor: 'text-gray-600 bg-gray-100 border-gray-200' },
];

const popularDestinations = [
    { name: 'Goa', bookings: 432, pct: 86 },
    { name: 'Rajasthan', bookings: 381, pct: 76 },
    { name: 'Kerala', bookings: 298, pct: 59 },
    { name: 'Himachal', bookings: 245, pct: 49 },
    { name: 'Uttarakhand', bookings: 211, pct: 42 },
];

const navItems = [
    { icon: '📊', label: 'Dashboard' },
    { icon: '👥', label: 'Travelers' },
    { icon: '🗺️', label: 'Guides' },
    { icon: '📅', label: 'Bookings' },
    { icon: '💬', label: 'Disputes' },
    { icon: '💰', label: 'Revenue' },
    { icon: '⚙️', label: 'Settings' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AdminDashboard() {
    const [activeNav, setActiveNav] = useState('Dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-gray-50 flex font-body">

            {/* ── Sidebar ─────────────────────────────── */}
            <aside
                className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-60 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 shadow-sm`}
            >
                {/* Logo */}
                <div className="p-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-200">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-display text-sm font-bold text-gray-800">TripGenie</p>
                            <p className="text-[10px] text-gray-400">Admin Console</p>
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            id={`admin-nav-${item.label.toLowerCase()}`}
                            onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeNav === item.label
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                                }`}
                        >
                            <span className="text-base">{item.icon}</span>
                            {item.label}
                            {item.label === 'Disputes' && (
                                <span className="ml-auto bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                            )}
                            {item.label === 'Guides' && (
                                <span className="ml-auto bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">47</span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Admin profile */}
                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xs">
                            SA
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-gray-800 text-xs font-semibold truncate">Super Admin</p>
                            <p className="text-gray-400 text-[10px] truncate">admin@tripgenie.in</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>
                </div>
            </aside>

            {/* Sidebar mobile overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* ── Main Content ────────────────────────── */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Top Bar */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 gap-4 sticky top-0 z-30 shadow-sm">
                    <button
                        id="admin-sidebar-toggle"
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="flex-1">
                        <h1 className="font-display text-gray-800 text-lg font-bold hidden sm:block">Dashboard Overview</h1>
                        <p className="text-gray-400 text-xs hidden sm:block">Friday, 20 Feb 2026 · Good morning, Admin 👋</p>
                    </div>

                    {/* Search */}
                    <div className="relative hidden md:block">
                        <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            id="admin-search"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search travelers, guides…"
                            className="bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-gray-700 placeholder-gray-400 text-sm w-56 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                        />
                    </div>

                    {/* Bell */}
                    <button id="admin-notifications" className="relative p-2.5 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
                    </button>

                    <Link to="/login" className="hidden sm:block text-xs text-gray-400 hover:text-emerald-600 transition-colors font-body">
                        ← Traveller Login
                    </Link>
                </header>

                {/* Body */}
                <main className="flex-1 p-4 lg:p-6 space-y-5 overflow-y-auto">

                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                        {kpiData.map((kpi, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-2.5 rounded-xl ${kpi.light} ${kpi.text} ring-4 ${kpi.ring}`}>
                                        {kpi.icon}
                                    </div>
                                    <span
                                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${kpi.up
                                                ? 'text-emerald-700 bg-emerald-50'
                                                : 'text-orange-600 bg-orange-50'
                                            }`}
                                    >
                                        {kpi.change}
                                    </span>
                                </div>
                                <p className="font-display text-2xl font-bold text-gray-800">{kpi.value}</p>
                                <p className="text-gray-400 text-xs mt-0.5">{kpi.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Middle Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                        {/* Recent Activity */}
                        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="font-display text-gray-800 font-bold">Recent Activity</h2>
                                <button className="text-xs text-emerald-600 hover:text-emerald-700 transition-colors font-body font-medium">View all →</button>
                            </div>
                            <div className="space-y-1.5">
                                {recentActivity.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-base flex-shrink-0">
                                            {item.type === 'guide' ? '🗺️' : item.type === 'booking' ? '📅' : '⚠️'}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-800 text-xs font-semibold truncate">{item.name}</p>
                                            <p className="text-gray-400 text-[11px] truncate">{item.action} · {item.location}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.statusColor}`}>
                                                {item.status}
                                            </span>
                                            <span className="text-gray-300 text-[10px]">{item.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Col */}
                        <div className="space-y-4">
                            {/* Top Destinations */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="font-display text-gray-800 font-bold text-sm">Top Destinations</h2>
                                    <span className="text-gray-400 text-xs">This month</span>
                                </div>
                                <div className="space-y-3">
                                    {popularDestinations.map((dest, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-gray-700 text-xs font-medium">{dest.name}</span>
                                                <span className="text-gray-400 text-xs">{dest.bookings}</span>
                                            </div>
                                            <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700"
                                                    style={{ width: `${dest.pct}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-semibold mb-3">Quick Actions</p>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Approve Pending Guides', count: 47, color: 'text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100', id: 'admin-approve-guides' },
                                        { label: 'Resolve Disputes', count: 3, color: 'text-red-700 bg-red-50 border-red-200 hover:bg-red-100', id: 'admin-resolve-disputes' },
                                        { label: 'Export Report', count: null, color: 'text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100', id: 'admin-export-report' },
                                    ].map((action) => (
                                        <button
                                            key={action.label}
                                            id={action.id}
                                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs font-semibold font-body transition-all ${action.color}`}
                                        >
                                            <span>{action.label}</span>
                                            {action.count != null ? (
                                                <span className="font-bold">{action.count}</span>
                                            ) : (
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Health */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-display text-gray-800 font-bold">System Health</h2>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-emerald-600 text-xs font-body font-medium">All systems operational</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { label: 'API Uptime', value: '99.9%', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                                { label: 'Avg Response', value: '112ms', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
                                { label: 'DB Queries/s', value: '1,240', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
                                { label: 'Error Rate', value: '0.01%', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
                            ].map((stat) => (
                                <div key={stat.label} className={`p-4 rounded-xl ${stat.bg} border ${stat.border} text-center`}>
                                    <p className={`text-xl font-bold font-display ${stat.color}`}>{stat.value}</p>
                                    <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
