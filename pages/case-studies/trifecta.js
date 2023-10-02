import Head from 'next/head';
import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';

export default function Trifecta() {
    return (
        <>
            <Head>
                <title>Trifecta Nutrition Case Study</title>
            </Head>
            <TitleBlock
                kicker='It was a mess'
                title='Cleaning up the Trifecta shitshow'
            />
            <ParallaxBlock image='/images/parallax-background.jpg' />
        </>
    );
}
