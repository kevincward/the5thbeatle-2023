import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';
import SecondaryNav from '@/components/secondaryNav';
import ContextCard from '@/components/contextCard';
import TextBlockOne from '@/components/textBlockOne';
import ProblemCard from '@/components/problemCard';
import Results from '@/components/results';
import MoreStudies from '@/components/moreStudies';

export default function PayPal() {
    const caseStudies = [
        {
            title: 'Building design into a key business asset',
            company: 'Trifecta',
            url: '/case-studies/trifecta',
        },
        {
            title: 'Fostering camaraderie for app retention',
            company: 'Thrive Global',
            url: '/case-studies/thrive',
        },
    ];

    return (
        <>
            <TitleBlock
                kicker='PayPal'
                title='Crafting a seamless donation app experience'
            />

            <ParallaxBlock image='/images/cs/paypal-app-bkgd-1.png' />

            <SecondaryNav
                sectionOneTitle='Overview'
                sectionTwoTitle='Challenge'
                sectionThreeTitle='Approach'
                sectionFourTitle='Outcome'
            />

            <div className='scroll-mt-[152px] pb-8' id='section-1'></div>
            <ContextCard
                titleColor='#085735'
                textColor='#060125'
                backgroundColor='#A9E2C9'
                content={{
                    kicker: 'ABOUT PAYPAL',
                    description:
                        'PayPal is a trusted online payment platform enabling electronic transactions, secure money transfers, online purchases, and digital financial management for individuals and businesses.',
                    title: 'Senior Product Designer',
                    titleDescription:
                        'UX research, information architecture, visual design & interaction, prototyping & testing',
                    teammates: 'Product manager, Content designer',
                    timeline: 'Jan - Jun 2018',
                }}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker='OVERVIEW'
                title='Adding a donation feature to the PayPal app'
                aboveContent='When the PayPal mobile teams began planning a consumer app overhaul, an opportunity to opened up to add an in-app donation feature. This feature brought awareness to the PayPal Giving Fund, PayPal&lsquo;s suite of donation tools, and appealed to charities considering joining the PPGF.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-overview-1.svg',
                        mobile: '/images/cs/paypal-app-overview-1.svg',
                        alt: 'Screenshots of previous PayPal app screens',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Old PayPal app experience',
                    },
                ]}
            />

            <div className='scroll-mt-[152px] pb-20' id='section-2'></div>
            <TextBlockOne
                kicker='CHALLENGE'
                title='It will need to seamlessly integrate with the overall app'
                aboveContent='The primary app tasks include checking your balance and account activity, sending money, and paying off a credit bill. How might a donate feature fit in with these tasks? And why would someone use an app to donate instead of a charity&lsquo;s website?'
                belowContent=''
                images={[]}
            />

            <ProblemCard
                backgroundColor='#A9E2C9'
                textColor='#085735'
                content='What should a donation experience in a financial app look like?'
            />

            <div className='scroll-mt-[152px] pb-20' id='section-3'></div>
            <TextBlockOne
                kicker='APPROACH'
                title='Getting into research'
                aboveContent='Creating PayPal&lsquo;s first native donation experience meant that we had the opportunity to improve upon the current mobile web flow. To do this, I had to uncover the needs and pain points of mobile donors.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-approach-1.svg',
                        mobile: '/images/cs/paypal-app-approach-1.svg',
                        alt: 'Key research questions',
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
                title='What participants said'
                aboveContent='I recruited individuals who had made a digital donation in the last six months for the in-depth interviews.
                In each session, I asked the participant to walk me through their last donation experience and tell me about what
                their ideal donation app could do.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-approach-2.svg',
                        mobile: '/images/cs/paypal-app-approach-2.svg',
                        alt: 'Two quotes from research participants',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Select quotes from participants',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Benchmarking'
                aboveContent='I reviewed the strengths/weaknesses of competing donation tools.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-approach-3.png',
                        mobile: '/images/cs/paypal-app-approach-3.png',
                        alt: 'Comparing OneToday, ShareTheMeal, and Charity Miles apps',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Competitior analysis',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Organizing the insights'
                aboveContent='After conducting the interviews, comparing competitive products, and reviewing industry insights, I compiled the findings into these themes:'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-approach-4.png',
                        mobile: '/images/cs/paypal-app-approach-4.png',
                        alt: 'Insight theme: familiarity, comfort, and ease of use',
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
                aboveContent='And used the qualitative data gathered from the interviews to create two user personas:'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-approach-5.png',
                        mobile: '/images/cs/paypal-app-approach-5.png',
                        alt: '2 PayPal app donor personas',
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
                title='Identifying and prioritizing features'
                aboveContent='Confident with the research findings, we needed to identify and prioritize what features would make it into the MVP of native PayPal Donate. My product manager and I took a deeper dive into the insights derived from the research.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-approach-6.png',
                        mobile: '/images/cs/paypal-app-approach-6.png',
                        alt: 'How might we questions',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <div className='pb-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/paypal-app-approach-7.png',
                        mobile: '/images/cs/paypal-app-approach-7.png',
                        alt: 'Feature prioritization',
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
                title='Building wireframes'
                aboveContent='With our personas and features established, I created an information architecture and screen wireframes, leveraging components from the current app design for consistency. Once approved by the Product and Engineering teams, we began to conduct usability tests with the low fidelity mockups.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-approach-8.png',
                        mobile: '/images/cs/paypal-app-approach-8.png',
                        alt: 'Wireframe flow for testing',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />
            <div className='pt-16'></div>

            <ParallaxBlock image='/images/cs/paypal-app-bkgd-2.png' />

            <div className='scroll-mt-[152px] pb-20' id='section-4'></div>
            <TextBlockOne
                kicker='OUTCOME'
                title='Final designs'
                aboveContent='We released the MVP of the native Donate feature three months after the launch of the PayPal app redesign. The focus of the MVP experience:
                <br />
                &#8226; Easy charity discovery
                <br />
                &#8226; Funds transparency
                <br />
                &#8226; Quick donation flow'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/paypal-app-outcome-1.png',
                        mobile: '/images/cs/paypal-app-outcome-1.png',
                        alt: 'Search experience screenshots',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'A sticky search bar at the top for users who know what they are looking for',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/paypal-app-outcome-2.png',
                        mobile: '/images/cs/paypal-app-outcome-2.png',
                        alt: 'List of local charities',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Nearby charities list for new donors looking for local giving options',
                    },
                    {
                        desktop: '/images/cs/paypal-app-outcome-3.png',
                        mobile: '/images/cs/paypal-app-outcome-3.png',
                        alt: 'Card view of popular charities',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Dynamic featured list for donors looking for a familiar charity',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/paypal-app-outcome-4.png',
                        mobile: '/images/cs/paypal-app-outcome-4.png',
                        alt: 'List of local charities',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Nearby charities list for new donors looking for local giving options',
                    },
                    {
                        desktop: '/images/cs/paypal-app-outcome-5.svg',
                        mobile: '/images/cs/paypal-app-outcome-5.svg',
                        alt: 'Card view of popular charities',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Dynamic featured list for donors looking for a familiar charity',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/paypal-app-outcome-6.png',
                        mobile: '/images/cs/paypal-app-outcome-6.png',
                        alt: 'Individual charity page screenshot',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Each page features the charity logo & location for easy recognition, an impact statement to drive emotional appeal, and EIN number to prove legitimacy',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/paypal-app-outcome-7.png',
                        mobile: '/images/cs/paypal-app-outcome-7.png',
                        alt: 'Person receiving a donation confirmation',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'I enhanced the confirmation screen pattern with a native share option, allowing users to easily share their cause',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <Results
                kicker=''
                title='Results'
                text='We launched the feature and saw slow adoption. We reviewed the analytics on weekly basis to
                monitor where drop off was occurring and began speculating how to make improvements. As Giving
                Tuesday drew near, we partnered with the marketing team to bring awareness to donating with the
                PayPal app. This collaboration paid off greatly, we saw a spike in new donors from Black Friday
                through the holidays.
                <br />
                <br />
                It may have taken a couple of months for the Donate feature to take off but when it did, we started to see strong
                numbers on a monthly basis. By June 2019 (one year after launch), PayPal saw 2 million in total payment volume
                through the app donate feature.'
                values={[
                    {
                        start: 0,
                        end: 2,
                        suffix: '',
                        prefix: '$',
                        title: 'TPV (in millions)',
                    },
                    {
                        start: 0,
                        end: 642,
                        suffix: '',
                        prefix: '$',
                        title: 'Successful donations (in thousands)',
                    },
                ]}

            />

            <div className='pt-8'></div>
            <MoreStudies title='More Case Studies' caseStudies={caseStudies} />

        </>
    );
}