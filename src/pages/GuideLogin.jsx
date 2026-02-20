import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GuideLogin() {
    const [form, setForm] = useState({ email: '', password: '', guideId: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [step, setStep] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) { setStep(2); return; }
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex overflow-hidden">

            {/* ── Left Panel — Brand ───────────────────────────── */}
            <div className="hidden lg:flex flex-col justify-between w-5/12 relative p-10 overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700">
                {/* Subtle pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: '28px 28px',
                    }}
                />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                {/* Logo */}
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="font-display text-xl font-bold text-white">TripGenie</span>
                    </div>

                    <h1 className="font-display text-4xl font-bold text-white leading-tight mb-4">
                        Your expertise.<br />
                        <span className="text-yellow-300">Their adventure.</span>
                    </h1>
                    <p className="text-white/70 text-sm font-body leading-relaxed max-w-xs">
                        Join thousands of certified guides creating unforgettable experiences for travelers around the world.
                    </p>
                </div>

                {/* Perks */}
                <div className="relative z-10 space-y-3">
                    {[
                        { icon: '🌍', label: 'Active in 60+ countries' },
                        { icon: '⭐', label: '4.9 avg guide rating' },
                        { icon: '💰', label: 'Earn on your own schedule' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-white/90 text-sm font-body">{item.label}</span>
                        </div>
                    ))}
                </div>

                <p className="relative z-10 text-white/40 text-xs font-body">© 2025 TripGenie · Guide Portal</p>
            </div>

            {/* ── Right Panel — Form ───────────────────────────── */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gray-50 relative">
                {/* Top soft blob */}
                <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none -translate-y-1/3" />

                <div className="w-full max-w-sm relative z-10 animate-fade-up">
                    {/* Mobile logo */}
                    <div className="lg:hidden flex items-center gap-3 mb-8">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="font-display text-lg font-bold text-gray-800">TripGenie</span>
                    </div>

                    {/* Step indicator */}
                    <div className="flex items-center gap-2 mb-6">
                        {[1, 2].map((s) => (
                            <div key={s} className="flex items-center gap-2">
                                <div
                                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-body border-2 transition-all duration-300 ${step > s
                                            ? 'bg-emerald-600 border-emerald-600 text-white'
                                            : step === s
                                                ? 'border-emerald-600 text-emerald-600 bg-white'
                                                : 'border-gray-200 text-gray-400 bg-white'
                                        }`}
                                >
                                    {step > s ? '✓' : s}
                                </div>
                                {s < 2 && (
                                    <div className={`w-10 h-0.5 rounded-full transition-all duration-300 ${step > s ? 'bg-emerald-600' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                        <span className="ml-2 text-gray-400 text-xs font-body">
                            {step === 1 ? 'Credentials' : 'Guide Verification'}
                        </span>
                    </div>

                    <div className="mb-6">
                        <h2 className="font-display text-2xl font-bold text-gray-800 mb-1">
                            {step === 1 ? 'Guide Sign In' : 'Verify Your ID'}
                        </h2>
                        <p className="text-gray-500 text-sm font-body">
                            {step === 1
                                ? 'Access your guide portal and manage your tours'
                                : 'Enter your certified Guide ID to complete verification'}
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-lg shadow-gray-200/50">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {step === 1 ? (
                                <>
                                    <div>
                                        <label className="block text-xs text-gray-600 font-semibold mb-1.5 font-body">Email Address</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-gray-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </span>
                                            <input
                                                id="guide-email"
                                                type="email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                placeholder="guide@example.com"
                                                required
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-body focus:outline-none focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-1.5">
                                            <label className="text-xs text-gray-600 font-semibold font-body">Password</label>
                                            <a href="#" className="text-xs text-emerald-600 hover:text-emerald-700 font-body font-medium transition-colors">Forgot?</a>
                                        </div>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-gray-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </span>
                                            <input
                                                id="guide-password"
                                                type={showPass ? 'text' : 'password'}
                                                value={form.password}
                                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                                placeholder="••••••••"
                                                required
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-11 py-3 text-gray-800 placeholder-gray-400 text-sm font-body focus:outline-none focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                                            />
                                            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-xs text-gray-600 font-semibold mb-1.5 font-body">Certified Guide ID</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-gray-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" />
                                                </svg>
                                            </span>
                                            <input
                                                id="guide-id"
                                                type="text"
                                                value={form.guideId}
                                                onChange={(e) => setForm({ ...form, guideId: e.target.value })}
                                                placeholder="TG-GUIDE-XXXXXX"
                                                required
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-body focus:outline-none focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all duration-200 uppercase tracking-widest"
                                            />
                                        </div>
                                        <p className="text-gray-400 text-xs mt-1.5 font-body">
                                            Find your Guide ID in your approval email from TripGenie HQ
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                                        <svg className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <p className="text-emerald-700 text-xs font-body">Your ID is encrypted and verified against our certified guide database.</p>
                                    </div>
                                </>
                            )}

                            <div className="pt-1 space-y-2">
                                <button
                                    id="guide-submit-btn"
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm font-body shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Verifying…
                                        </>
                                    ) : step === 1 ? (
                                        <>Continue <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></>
                                    ) : (
                                        <>Enter Guide Portal <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></>
                                    )}
                                </button>
                                {step === 2 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-600 hover:text-gray-800 text-sm font-body transition-all duration-200"
                                    >
                                        ← Back
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <p className="text-center text-gray-400 text-xs mt-5 font-body">
                        Not a guide yet?{' '}
                        <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">Apply to become one</a>
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-3">
                        <Link to="/login" className="text-xs text-gray-400 hover:text-emerald-600 transition-colors font-body">Traveller Login</Link>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <Link to="/admin" className="text-xs text-gray-400 hover:text-emerald-600 transition-colors font-body">Admin Panel</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
