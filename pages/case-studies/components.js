import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';
import ContextCard from '@/components/contextCard';

export default function Components() {
    return (
        <>
            <TitleBlock
                kicker='Kicker'
                title='Course correcting a product to drive a culture of continuous improvement'
            />
            <ParallaxBlock image='/images/parallax-background.jpg' />
            <ContextCard
                titleColor='#7C4D0F'
                textColor='#060125'
                backgroundColor='#FDEBD2'
                content={{
                    kicker: 'ABOUT REFLEKTIVE',
                    description:
                        'Reflektive is an HR tech company that built an employee performance tracking platform for HRBPs, Managers, and coworkers- a single place to collect and provide feedback, run 1:1s, and facilitate reviews. Reflektive prioritizes peer to peer feedback to drive performance monitoring, keep users engaged, and better connect coworkers.',
                    title: 'Senior Product Designer',
                    titleDescription:
                        'Product thinking, Information architecture, Visual design & Interaction, prototyping & testing',
                    teammates: 'Product manager, Product marketing manager',
                    timeline: 'Nov 2020 - Jan 2021',
                }}
            />
        </>
    );
}
