import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';
import SecondaryNav from '@/components/secondaryNav';
import ContextCard from '@/components/contextCard';
import TextBlockOne from '@/components/textBlockOne';
import ProblemCard from '@/components/problemCard';
import Results from '@/components/results';
import MoreStudies from '@/components/moreStudies';

export default function Reflektive() {
    const caseStudies = [
        {
            title: 'Crafting a seamless donation app experience',
            company: 'PayPal',
            url: '/case-studies/paypal-app',
        },
        {
            title: 'Building design into a key business asset',
            company: 'Trifecta',
            url: '/case-studies/trifecta',
        },
    ];

    return (
        <>
            <TitleBlock
                kicker='Reflektive'
                title='Refreshing a product to encourage self-growth'
            />

            <ParallaxBlock image='/images/cs/reflektive-bkgd-1.png' bgColor='rgba(61,90,254)' />

            <SecondaryNav
                sectionOneTitle='Overview'
                sectionTwoTitle='Challenge'
                sectionThreeTitle='Approach'
                sectionFourTitle='Outcome'
            />

            <div className='scroll-mt-[152px] pb-8' id='section-1'></div>
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

            <div className='pt-8'></div>
            <TextBlockOne
                kicker='OVERVIEW'
                title='How feedback works in Reflektive'
                aboveContent='Employees, teams, and managers are empowered to request and provide feedback that they can reference for their 1:1’s and review cycle to drive a culture of continuous assessment and improvement.
                            <br />
                            There are 2 core experiences in the feedback product:'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-overview-1.svg',
                        mobile: '/images/cs/reflektive-overview-1.svg',
                        alt: 'Parts of Reflektive feedback product',
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
                title='Employee performance management relies on feedback'
                aboveContent='Feedback is the connective tissue that unifies Reflektive products by capturing moments of impact throughout the year and channeling the written record of that impact in key contexts.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-overview-2.svg',
                        mobile: '/images/cs/reflektive-overview-2.svg',
                        alt: 'Parts of Reflektive feedback product',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <div className='scroll-mt-[152px] pb-20' id='section-2'></div>
            <TextBlockOne
                kicker='CHALLENGE'
                title='Years of ad hoc additions had left the product struggling with declining user engagement'
                aboveContent='Feature-focused design and technical debt complicated core feedback experiences, resulting in low usage, high drop-offs, and a declining NPS score.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-challenge-1.png',
                        mobile: '/images/cs/reflektive-challenge-1.png',
                        alt: 'Zoom interview with customer',
                        desktopWidth: 1040,
                        desktopHeight: 200,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <TextBlockOne
                kicker=''
                title=''
                aboveContent='Analyzing quarterly user research feedback, we identified the key issues:'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-challenge-2.svg',
                        mobile: '/images/cs/reflektive-challenge-2.svg',
                        alt: 'Zoom interview with customer',
                        desktopWidth: 1040,
                        desktopHeight: 200,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <ProblemCard
                backgroundColor='#FDEBD2'
                textColor='#7C4D0F'
                content='How might we enhance the product to simplify feedback creation and reference later?'
            />

            <div className='scroll-mt-[152px] pb-20' id='section-3'></div>
            <TextBlockOne
                kicker='APPROACH'
                title='Begin with user-centric goals to direct our improvements'
                aboveContent='Setting goals for each core experience provided us with a clear guiding light as we assessed issues, opportunities, jobs to be done, and desired outcomes.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-approach-1.svg',
                        mobile: '/images/cs/reflektive-approach-1.svg',
                        alt: 'Core experience goals chart',
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
                title='Fixing the entry point discoverability issues  and improving the seamless integration'
                aboveContent='Simplifying the feedback initiation form to a singular, universal call to action and one form pattern would not only make the user experience more intuitive but also significantly lighten the cognitive load. This approach not only enhances user engagement but also minimizes the technical burden by reducing the number of components that need support.'
                belowContent='I opted for a modal component to host the feedback form, a versatile UI that seamlessly adapts to any interface without disrupting the layout.'
                images={[
                    {
                        desktop: '/images/cs/reflektive-approach-2.svg',
                        mobile: '/images/cs/reflektive-approach-2.svg',
                        alt: 'Audit of CTA buttons',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Reducing multiple, inconsistent buttons to a single feedback initiator',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Improving workflow selection comprehension and general form cleanup'
                aboveContent='Substituting obscure workflow descriptions with user-focused selections guarantees users achieve their desired outcomes more effectively.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-approach-3.png',
                        mobile: '/images/cs/reflektive-approach-3.png',
                        alt: 'Old vs new feedback selection',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'More explicit calls to action based on user goals ensures easier selection',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Simplifying feedback forms and fixing feedback visibility comprehension'
                aboveContent='Analyzing form input data, we identified the essential fields for streamlining. I employed strategic tip placements, clear visibility cues, and instructional placeholder text to enhance user clarity and ease.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-approach-4.svg',
                        mobile: '/images/cs/reflektive-approach-4.svg',
                        alt: 'Simplified feedback form',
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
                title='Defining a unified feedback object format'
                aboveContent='I employed a card pattern, reminiscent of familiar social media posts, for a more user-friendly and adaptable feedback object format.
                <br />
                <br />
                Each feedback object contains 4 parts: the feedback recipient, the feedback content, additional details for recipient, and actions on the feedback (like, comment). Analyzing form input data, we identified the essential fields for streamlining. I employed strategic tip placements, clear visibility cues, and instructional placeholder text to enhance user clarity and ease.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-approach-5.svg',
                        mobile: '/images/cs/reflektive-approach-5.svg',
                        alt: '3 feedback layouts',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Unified feedback layout',
                    },
                ]}
            />


            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/reflektive-approach-6.png',
                        mobile: '/images/cs/reflektive-approach-6.png',
                        alt: 'Old vs new feedback articles',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Different feedback types but consistent layouts for enhanced readability',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Filters: the search alternative'
                aboveContent='Users previously struggled to locate specific feedback for their reviews, relying solely on scrolling their profiles. Initially we wanted to introduce a keyword searching feature, however we didn&lsquo;t have the technical resources. To empower users, we introduced key dropdowns for recipient, feedback type, and hashtags, alongside time and provider filters, enabling effortless feedback discovery.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-approach-7.svg',
                        mobile: '/images/cs/reflektive-approach-7.svg',
                        alt: 'New feedback filtering',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Sticky filters for effortless feedback retrieval',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Testing the new patterns with customers'
                aboveContent='From the pattern wireframes, I created a high fidelity prototype and moderation guide to see how customers interpreted the changes to the feedback tool.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-approach-8.png',
                        mobile: '/images/cs/reflektive-approach-8.png',
                        alt: 'Zoom usability tests with customers',
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
                aboveContent='After distilling the insights from these sessions, we further enhanced the product by:
                <br />
                &#8226; Switching to more unique icons for feedback type posts
                <br />
                &#8226; Introducing timestamps to saved and revisited feedback submissions
                <br />
                &#8226; Adding content tips to improve feedback submission (i.e. “helpful feedback is actionable. Make sure the recipients know how to move forward.”'
                belowContent=''
                images={[]}
            />
            <div className='pt-16'></div>

            <ParallaxBlock image='/images/cs/reflektive-bkgd-2.png' bgColor='rgba(61,90,254)' />

            <div className='scroll-mt-[152px] pb-20' id='section-4'></div>
            <TextBlockOne
                kicker='OUTCOME'
                title='Final designs'
                aboveContent='The new feedback system was rolled out to a group of beta customers for further stress testing and to start to collect data around engagement. It was also used as a selling feature for customer subscription renewals.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/reflektive-outcome-1.png',
                        mobile: '/images/cs/reflektive-outcome-1.png',
                        alt: 'Zoom usability tests with customers',
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
                        desktop: '/images/cs/reflektive-outcome-2.svg',
                        mobile: '/images/cs/reflektive-outcome-2.svg',
                        alt: 'Feedback examples',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                    {
                        desktop: '/images/cs/reflektive-outcome-3.svg',
                        mobile: '/images/cs/reflektive-outcome-3.svg',
                        alt: 'Illustration in empty feedback feedback',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Feedback feed empty state',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/reflektive-outcome-4.png',
                        mobile: '/images/cs/reflektive-outcome-4.png',
                        alt: 'Feedback feed on desktop',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <Results
                kicker=''
                title='Results'
                values={[
                    {
                        start: 0,
                        end: 27,
                        suffix: '%',
                        prefix: '',
                        title: 'Increase in feedback object creation',
                    },
                    {
                        start: 0,
                        end: 89,
                        suffix: 'secs',
                        prefix: '',
                        title: 'Average time reduction in feedback flow',
                    },
                    {
                        start: 0,
                        end: 34,
                        suffix: '%',
                        prefix: '',
                        title: 'Increase in feedback initiations',
                    },
                ]}
                text=''
            />

            <div className='pt-16'></div>
            <TextBlockOne
                kicker=''
                title=''
                aboveContent=''
                belowContent='Two months after this feature was launched, Reflektive was acquired by PeopleFluent. Our feedback system served as a blueprint for multiple complementary products.'
                images={[
                    {
                        desktop: '/images/cs/reflektive-outcome-5.svg',
                        mobile: '/images/cs/reflektive-outcome-5.svg',
                        alt: 'Reflektive & PeopleFluent logos',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <MoreStudies title='More Case Studies' caseStudies={caseStudies} />

        </>
    );
}