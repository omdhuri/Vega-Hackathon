/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand': '#059669', // Emerald 600
                'accent': '#FACC15', // Yellow 400
                'glass-bg': 'rgba(255, 255, 255, 0.9)', // High opacity for light mode
                'glass-border': 'rgba(0, 0, 0, 0.05)',
            },
            fontFamily: {
                display: ['"Playfair Display"', 'serif'],
                body: ['"Montserrat"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-up': 'fadeUp 0.5s ease-out',
                'aurora': 'aurora 10s infinite linear',
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
