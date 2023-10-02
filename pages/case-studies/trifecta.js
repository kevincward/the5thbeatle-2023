import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';

export default function Trifecta() {
    return (
        <>
            <TitleBlock
                kicker='It was a mess'
                title='Cleaning up the Trifecta shitshow'
            />
            <ParallaxBlock image='/images/parallax-background.jpg' />
        </>
    );
}
