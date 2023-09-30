import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';

export default function Components() {
    return (
        <>
            <TitleBlock
                kicker='Kicker'
                title='Course correcting a product to drive a culture of continuous improvement'
            />
            <ParallaxBlock image='/images/parallax-background.jpg' />
        </>
    );
}
