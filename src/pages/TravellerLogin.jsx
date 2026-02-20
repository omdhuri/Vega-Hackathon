import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TravellerLogin() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/40 to-teal-50/30 flex items-center justify-center relative overflow-hidden px-4 py-12">

            {/* Soft decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-100/50 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-yellow-100/30 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="w-full max-w-md relative z-10 animate-fade-up">

                {/* Brand Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-200 mb-4">
                        <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="font-display text-3xl font-bold text-gray-800 mb-1">Welcome Back, Explorer</h1>
                    <p className="text-gray-500 text-sm font-body">Your next adventure is just a login away</p>
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-xl shadow-gray-200/50">

                    {/* Google SSO */}
                    <button
                        id="traveller-google-btn"
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium font-body transition-all duration-200 shadow-sm hover:shadow-md mb-6"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-gray-400 text-xs font-body">or sign in with email</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-xs text-gray-600 font-semibold mb-1.5 font-body">Email Address</label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-3.5 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <input
                                    id="traveller-email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-body focus:outline-none focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="text-xs text-gray-600 font-semibold font-body">Password</label>
                                <a href="#" className="text-xs text-emerald-600 hover:text-emerald-700 font-body font-medium transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3.5 top-3.5 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                                <input
                                    id="traveller-password"
                                    type={showPass ? 'text' : 'password'}
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    placeholder="••••••••"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-12 py-3 text-gray-800 placeholder-gray-400 text-sm font-body focus:outline-none focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPass ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center gap-2">
                            <input
                                id="traveller-remember"
                                type="checkbox"
                                className="w-4 h-4 rounded border-gray-300 accent-emerald-600 cursor-pointer"
                            />
                            <label htmlFor="traveller-remember" className="text-xs text-gray-500 font-body cursor-pointer">
                                Remember me for 30 days
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            id="traveller-login-btn"
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm font-body shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Signing you in…
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-gray-500 text-xs mt-6 font-body">
                        Don't have an account?{' '}
                        <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                            Create one free
                        </a>
                    </p>
                </div>

                {/* Footer links */}
                <div className="flex items-center justify-center gap-4 mt-5">
                    <Link to="/guide/login" className="text-xs text-gray-400 hover:text-emerald-600 transition-colors font-body">Are you a Guide?</Link>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <Link to="/admin" className="text-xs text-gray-400 hover:text-emerald-600 transition-colors font-body">Admin Panel</Link>
                </div>
            </div>
        </div>
    );
}
