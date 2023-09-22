import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/header';
import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const recoleta = localFont({
    src: [
        {
            path: '../public/fonts/recoleta-regular-webfont.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/recoleta-medium-webfont.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/recoleta-semibold-webfont.woff2',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-recoleta',
});

export default function App({ Component, pageProps }) {
    return (
        <main
            className={`${inter.variable} ${recoleta.variable} font-sans ${inter.className}`}
        >
            <Header />
            <Component {...pageProps} />
        </main>
    );
}
