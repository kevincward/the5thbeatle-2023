import TitleBlock from '@/components/titleBlock';
import ContextCard from '@/components/contextCard';
import TextBlockOne from '@/components/textBlockOne';
import TextBlockTwo from '@/components/textBlockTwo';

export default function Components() {

    return (
        <>
            <TitleBlock
                kicker='Trifecta'
                title='Landing Page Components'
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/projects/lpcomp-1.png',
                        mobile: '/images/projects/lpcomp-1.png',
                        alt: 'Composite image of different landing page components',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <ContextCard
                titleColor='#1E6756'
                textColor='#060125'
                backgroundColor='#D8F5EE'
                content={{
                    kicker: 'ABOUT PROJECT',
                    description:
                        'The marketing team was responsible for crafting and deploying weekly landing pages. They relied on default Hubspot components and crafted custom ones when needed, resulting in inconsistent page quality and substantial time investment. To address this, I collaborated with the marketing team to comprehend their page requirements and introduced a suite of marketing-specific components, enabling swift and seamless creation of uniform pages.',
                    title: 'Principal Product Designer',
                    titleDescription:
                        'Product strategy, Information architecture, Visual design & Interaction, prototyping & testing',
                    teammates: 'Product manager, Marketing team members',
                    timeline: 'Apr - Oct 2022',
                }}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/projects/lpcomp-2.png',
                        mobile: '/images/projects/lpcomp-2.png',
                        alt: 'Landing page example',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title=''
                aboveContent=''
                belowContent=''
                images={[
                    {
                        desktop: '/images/projects/lpcomp-3.png',
                        mobile: '/images/projects/lpcomp-3.png',
                        alt: 'Feature component mockup',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Feature component',
                    },
                    {
                        desktop: '/images/projects/lpcomp-4.png',
                        mobile: '/images/projects/lpcomp-4.png',
                        alt: 'Product swiper component mockup',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Product swiper component',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/projects/lpcomp-5.png',
                        mobile: '/images/projects/lpcomp-5.png',
                        alt: 'Google reviews in a component',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Social proof component',
                    },
                    {
                        desktop: '/images/projects/lpcomp-6.png',
                        mobile: '/images/projects/lpcomp-6.png',
                        alt: 'Marketing team reviewing landing page',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />
            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/projects/lpcomp-7.png',
                        mobile: '/images/projects/lpcomp-7.png',
                        alt: 'Email capture component',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Theme styling options empowered components to adapt to multiple use cases',
                    },
                ]}
            />

            <div className='pt-24'></div>
        </>
    );
}
