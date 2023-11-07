import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';
import ContextCard from '@/components/contextCard';
import SecondaryNav from '@/components/secondaryNav';
import TextBlockOne from '@/components/textBlockOne';
import TextBlockTwo from '@/components/textBlockTwo';
import ProblemCard from '@/components/problemCard';
import Results from '@/components/results';
import MoreStudies from '@/components/moreStudies';

export default function Components() {
    const caseStudies = [
        {
            title: '3 line title of case study project',
            company: 'Trifecta',
            url: '#',
        },
        {
            title: '3 line title of case study project',
            company: 'Thrive Global',
            url: '#',
        },
        {
            title: '3 line title of case study project',
            company: 'PayPal',
            url: '#',
        },
        {
            title: '3 line title of case study project',
            company: 'Engineered Medical Technologies',
            url: '#',
        },
    ];

    return (
        <>
            <TitleBlock
                kicker='Kicker'
                title='Components Rundown'
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
            <TextBlockOne
                kicker='Kicker'
                title='Title'
                aboveContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                belowContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                images={[
                    {
                        desktop: '/images/desktop-text-block-one-image.svg',
                        mobile: '/images/mobile-text-block-one-image.svg',
                        alt: 'Placeholder image',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Caption',
                    },
                    {
                        desktop: '/images/desktop-text-block-one-image.svg',
                        mobile: '/images/mobile-text-block-one-image.svg',
                        alt: 'Placeholder image',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Caption',
                    },
                ]}
            />
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/desktop-text-block-one-image.svg',
                        mobile: '/images/mobile-text-block-one-image.svg',
                        alt: 'Placeholder image',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Second line image',
                    },
                ]}
            />
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/desktop-text-block-one-image.svg',
                        mobile: '/images/mobile-text-block-one-image.svg',
                        alt: 'Placeholder image',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Caption',
                    },
                    {
                        desktop: '/images/desktop-text-block-one-image.svg',
                        mobile: '/images/mobile-text-block-one-image.svg',
                        alt: 'Placeholder image',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Caption',
                    },
                ]}
            />
            <TextBlockTwo
                kicker='Kicker'
                title='Title'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                image={{
                    url: '/images/text-block-two-image.svg',
                    alt: 'placeholder image',
                    width: 536,
                    height: 605,
                    caption: 'caption',
                }}
            />
            <ProblemCard
                backgroundColor='#FCD9E0'
                textColor='#782133'
                content='How might we craft an engaging challenge experience that propels users to achieve their goals?'
            />
            <Results
                kicker='Kicker'
                title='Title'
                values={[
                    {
                        start: 0,
                        end: 73,
                        suffix: '%',
                        prefix: '',
                        title: 'Lorem ipsum dolor',
                    },
                    {
                        start: 0,
                        end: 25,
                        suffix: '%',
                        prefix: '',
                        title: 'Lorem ipsum dolor',
                    },
                    {
                        start: 0,
                        end: 100,
                        suffix: '',
                        prefix: '$',
                        title: 'Lorem ipsum dolor',
                    },
                ]}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />
            <MoreStudies title='More case studies' caseStudies={caseStudies} />
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
