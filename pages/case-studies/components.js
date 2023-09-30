import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';
import ContextCard from '@/components/contextCard';
import SecondaryNav from '@/components/secondaryNav';

export default function Components() {
    return (
        <>
            <TitleBlock
                kicker='Kicker'
                title='Course correcting a product to drive a culture of continuous improvement'
            />
            <SecondaryNav
                sectionOneTitle='Overview'
                sectionTwoTitle='Challenge'
                sectionThreeTitle='Approach'
                sectionFourTitle='Outcome'
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
            <div className='container'>
                <div className='scroll-mt-[152px] pb-20' id='section-1'>
                    <h2>Section 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam id eleifend nunc. Nam rhoncus a nisl in maximus. Sed
                        et justo arcu. Cras rhoncus nisi eget turpis lobortis,
                        at vulputate erat placerat. Vestibulum interdum, urna
                        placerat sodales tincidunt, sapien nunc posuere est,
                        vitae luctus leo dui ut ex. Maecenas non consectetur
                        magna, in iaculis urna. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Cras hendrerit vehicula mauris, ornare feugiat sem
                        semper malesuada. Cras pulvinar arcu non scelerisque
                        convallis. Sed luctus massa cursus, venenatis sapien
                        nec, tempus purus. Nullam quam ipsum, pretium vitae
                        malesuada in, laoreet non massa. Curabitur ac augue
                        ornare, ullamcorper felis sed, lobortis velit.
                    </p>
                </div>
                <div className='scroll-mt-[152px] pb-20' id='section-2'>
                    <h2>Section 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam id eleifend nunc. Nam rhoncus a nisl in maximus. Sed
                        et justo arcu. Cras rhoncus nisi eget turpis lobortis,
                        at vulputate erat placerat. Vestibulum interdum, urna
                        placerat sodales tincidunt, sapien nunc posuere est,
                        vitae luctus leo dui ut ex. Maecenas non consectetur
                        magna, in iaculis urna. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Cras hendrerit vehicula mauris, ornare feugiat sem
                        semper malesuada. Cras pulvinar arcu non scelerisque
                        convallis. Sed luctus massa cursus, venenatis sapien
                        nec, tempus purus. Nullam quam ipsum, pretium vitae
                        malesuada in, laoreet non massa. Curabitur ac augue
                        ornare, ullamcorper felis sed, lobortis velit.
                    </p>
                </div>
                <div className='scroll-mt-[152px] pb-20' id='section-3'>
                    <h2>Section 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam id eleifend nunc. Nam rhoncus a nisl in maximus. Sed
                        et justo arcu. Cras rhoncus nisi eget turpis lobortis,
                        at vulputate erat placerat. Vestibulum interdum, urna
                        placerat sodales tincidunt, sapien nunc posuere est,
                        vitae luctus leo dui ut ex. Maecenas non consectetur
                        magna, in iaculis urna. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Cras hendrerit vehicula mauris, ornare feugiat sem
                        semper malesuada. Cras pulvinar arcu non scelerisque
                        convallis. Sed luctus massa cursus, venenatis sapien
                        nec, tempus purus. Nullam quam ipsum, pretium vitae
                        malesuada in, laoreet non massa. Curabitur ac augue
                        ornare, ullamcorper felis sed, lobortis velit.
                    </p>
                </div>
                <div className='scroll-mt-[152px]' id='section-4'>
                    <h2>Section 4</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam id eleifend nunc. Nam rhoncus a nisl in maximus. Sed
                        et justo arcu. Cras rhoncus nisi eget turpis lobortis,
                        at vulputate erat placerat. Vestibulum interdum, urna
                        placerat sodales tincidunt, sapien nunc posuere est,
                        vitae luctus leo dui ut ex. Maecenas non consectetur
                        magna, in iaculis urna. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Cras hendrerit vehicula mauris, ornare feugiat sem
                        semper malesuada. Cras pulvinar arcu non scelerisque
                        convallis. Sed luctus massa cursus, venenatis sapien
                        nec, tempus purus. Nullam quam ipsum, pretium vitae
                        malesuada in, laoreet non massa. Curabitur ac augue
                        ornare, ullamcorper felis sed, lobortis velit.
                    </p>
                </div>
            </div>
        </>
    );
}
