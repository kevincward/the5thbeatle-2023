import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '@/styles/globals.scss';
import Script from 'next/script';

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

            <Script>

                {/* Hotjar Tracking Code */}
                <script
                    id="HotJarAnalytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:3733076,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                    }} />
            </Script>

            <Footer />
        </main>


    );
}