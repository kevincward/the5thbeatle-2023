import TitleBlock from '@/components/titleBlock';
import ContextCard from '@/components/contextCard';
import TextBlockOne from '@/components/textBlockOne';
import TextBlockTwo from '@/components/textBlockTwo';

export default function Components() {

    return (
        <>
            <TitleBlock
                kicker='Reflektive'
                title='People Analytics Dashboard'
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/projects/pi-1.png',
                        mobile: '/images/projects/pi-1.png',
                        alt: 'Analytics dashboard on laptop screen',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <ContextCard
                titleColor='#782133'
                textColor='#060125'
                backgroundColor='#FCD9E0'
                content={{
                    kicker: 'ABOUT PROJECT',
                    description:
                        'I joined the PA product team with a mission to revamp the employee performance analytics dashboard, a vital tool for HRBPs to gauge company/team well-being. Collaborating closely with the PM, I assessed various use cases and leveraged the most intuitive analytic tool patterns to craft a light weight dashboard and chart experience from scratch.',
                    title: 'Senior Product Designer',
                    titleDescription:
                        'Product thinking, Information architecture, Visual design & Interaction, prototyping & testing',
                    teammates: 'Product manager',
                    timeline: 'Jul - Nov 2020',
                }}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/projects/pi-2.png',
                        mobile: '/images/projects/pi-2.png',
                        alt: 'Different types of charts',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Charts variations',
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
                        desktop: '/images/projects/pi-3.png',
                        mobile: '/images/projects/pi-3.png',
                        alt: 'Placeholder image',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                    {
                        desktop: '/images/projects/pi-4.svg',
                        mobile: '/images/projects/pi-4.svg',
                        alt: 'Color palette used for data',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Data color styles',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/projects/pi-5.png',
                        mobile: '/images/projects/pi-5.png',
                        alt: 'Data within People Analytics',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Data without visualization',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/projects/pi-6.png',
                        mobile: '/images/projects/pi-6.png',
                        alt: 'Customizing a bar chart',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Chart customization',
                    },
                ]}
            />

            <div className='pt-24'></div>
        </>
    );
}
