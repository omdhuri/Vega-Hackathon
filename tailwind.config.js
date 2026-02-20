/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: '#059669', // Emerald 600
                accent: '#FACC15', // Yellow 400

                // New Design System Colors
                primary: "#047857", // Emerald 700
                "primary-hover": "#065F46", // Emerald 800
                "background-light": "#F9FAFB", // Gray 50
                "background-dark": "#111827", // Gray 900
                "surface-light": "#FFFFFF",
                "surface-dark": "#1F2937", // Gray 800
                "text-light": "#1F2937", // Gray 800
                "text-dark": "#F3F4F6", // Gray 100
                "muted-light": "#6B7280", // Gray 500
                "muted-dark": "#9CA3AF", // Gray 400

                'glass-bg': 'rgba(255, 255, 255, 0.9)',
                'glass-border': 'rgba(0, 0, 0, 0.05)',
            },
            fontFamily: {
                display: ['"Playfair Display"', 'serif'],
                body: ['"Inter"', 'sans-serif'], // Changed to Inter
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-up': 'fadeUp 0.5s ease-out',
                'aurora': 'aurora 10s infinite linear',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                aurora: {
                    '0%': { filter: 'hue-rotate(0deg)' },
                    '100%': { filter: 'hue-rotate(360deg)' },
                }
            }
        },
    },
    plugins: [],
}
