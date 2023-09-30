/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    important: true,
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                recoleta: 'var(--font-recoleta)',
            },
            colors: {
                purple: '#540D6E',
                'menu-bg': '#353935',
                orange: '#F7991E',
                gray: '#514D66',
                black: '#060125',
                red: '#EF4266',
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    lg: '1040px',
                    xl: '1040px',
                    '2xl': '1040px',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/container-queries')],
};
