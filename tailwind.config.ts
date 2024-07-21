import { transform } from 'next/dist/build/swc'
import type { Config } from 'tailwindcss'

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                breathing: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                },

            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'marquee': 'marquee 35s linear infinite',
                'marquee2': 'marquee2 35s linear infinite',
                breathing: 'breathing 10s ease-in-out infinite',
            },
            animationDelay: {
                '0s': '0s',
                '0.5s': '0.5s',
                '1s': '1s',
                '1.5s': '1.5s',
                '2s': '2s',
                '2.5s': '2.5s',
                '3s': '3s',
            }
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('tailwind-scrollbar'),],
} satisfies Config

export default config
