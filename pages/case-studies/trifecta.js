import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';
import SecondaryNav from '@/components/secondaryNav';
import ContextCard from '@/components/contextCard';
import TextBlockOne from '@/components/textBlockOne';
import MoreStudies from '@/components/moreStudies';

export default function Trifecta() {
    const caseStudies = [
        {
            title: 'Fostering camaraderie for app retention',
            company: 'Thrive Global',
            url: '/case-studies/thrive',
        },
        {
            title: 'Refreshing a product to encourage self-growth',
            company: 'Reflektive',
            url: '/case-studies/reflektive',
        },
    ];

    return (
        <>
            <TitleBlock
                kicker='Trifecta'
                title='Building design into a key business asset'
            />

            <ParallaxBlock image='/images/cs/trifecta-bkgd-1.png' />

            <SecondaryNav
                sectionOneTitle='Overview'
                sectionTwoTitle='Design Strategy'
                sectionThreeTitle='System & Processes'
                sectionFourTitle='Featured Work'
            />

            <div className='scroll-mt-[152px] pb-8' id='section-1'></div>
            <ContextCard
                titleColor='#7C4D0F'
                textColor='#060125'
                backgroundColor='#FDEBD2'
                content={{
                    kicker: 'ABOUT TRIFECTA',
                    description:
                        'Trifecta Nutrition is a subscription based meal delivery service catering to athletes and fitness enthusiasts who are focused on performance centric meals.',
                    title: 'Principal Product Designer',
                    titleDescription:
                        'Product strategy, Information architecture, Visual design & Interaction, prototyping & testing',
                    teammates: 'Product manager',
                    timeline: 'Jun 2022 - Jul 2023',
                }}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker='OVERVIEW'
                title='Looking to be more than a meal delivery company'
                aboveContent='With a surge in business growth, Trifecta gained the means to fulfill its mission of empowering customers in their transformative fitness journeys. The company&lsquo;s visionary roadmap included the introduction of goal-based programs, a companion app, and an array of other offerings.'
                belowContent='My role at Trifecta was to elevate design into a powerhouse asset for the business. My responsibilities encompassed developing a strategic design framework, establishing a design system and UX processes, and creating foundational designs to propel the growth and scalability of our products.'
                images={[]}
            />

            <div className='scroll-mt-[152px] pb-20' id='section-2'></div>
            <TextBlockOne
                kicker='DESIGN STRATEGY'
                title='Get to know the user'
                aboveContent='The initial step in shaping the role of design at Trifecta involved gaining a deep understanding of their target audience. I dedicated time to meticulously analyze demographic and psychographic data, as well as customer feedback, to construct defined user segments and provisional personas that could later be validated.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/trifecta-design-strategy-1.png',
                        mobile: '/images/cs/trifecta-design-strategy-1.png',
                        alt: 'Customer Segmentation docs in Confluence',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Customer segmentation',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Get executive team on board'
                aboveContent='I developed a design vision and user-centric principles in alignment with Trifecta&lsquo;s values. I also derived design OKRs that rolled up to the company&lsquo;s broader objectives, presenting them to the executive team for their endorsement. With everyone aligned, I wrote extensive documentation to lay a solid design foundation.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/trifecta-design-strategy-2.png',
                        mobile: '/images/cs/trifecta-design-strategy-2.png',
                        alt: 'Product design vision doc in Confluence',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Product design documentation',
                    },
                ]}
            />

            <div className='scroll-mt-[152px] pb-20' id='section-3'></div>
            <TextBlockOne
                kicker='SYSTEM & PROCESS DEVELOPMENT'
                title='Building a design system'
                aboveContent='To address Trifecta&lsquo;s diverse digital experiences I crafted a design system by aligning business goals, market research, design principles, and collaborating closely with the brand team. Using Brad Frost&lsquo;s Atomic Design principles, I designed the essential styles, atoms, and molecules that became the foundation for our components used across our products. This consistency built trust with users and significantly streamlined development.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/trifecta-system-dev-1.svg',
                        mobile: '/images/cs/trifecta-system-dev-1.svg',
                        alt: 'Color tokens in Trifecta design system',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Color tokens',
                    },
                    {
                        desktop: '/images/cs/trifecta-system-dev-2.svg',
                        mobile: '/images/cs/trifecta-system-dev-2.svg',
                        alt: 'Typography styles in Trifecta design system',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Typography',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-system-dev-3.svg',
                        mobile: '/images/cs/trifecta-system-dev-3.svg',
                        alt: 'Atoms in Trifecta design system',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Atoms',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-system-dev-4.svg',
                        mobile: '/images/cs/trifecta-system-dev-4.svg',
                        alt: 'Molecules in Trifecta design system',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Molecules',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Creating a more user centric company culture'
                aboveContent='I made user-centric thinking a central pillar of the company&lsquo;s approach. This involved integrating user research into the product development process and regularly sharing research insights at company meetings. Additionally, I conducted inclusive workshops and design check-ins open to all departments, fostering a collective understanding of user goals and pain points among coworkers.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/trifecta-system-dev-5.png',
                        mobile: '/images/cs/trifecta-system-dev-5.png',
                        alt: 'Ideation workshop via Zoom & Miro',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Facilitating ideation workshop',
                    },
                ]}
            />
            <div className='pb-16'></div>

            <ParallaxBlock image='/images/cs/trifecta-bkgd-2.png' />

            <div className='scroll-mt-[152px] pb-16' id='section-4'></div>
            <TextBlockOne
                kicker='FEATURED WORK'
                title='Key projects'
                aboveContent='<b>1. Checkout Redesign & Meal Choice</b>'
                belowContent=''
                images={[]}
            />

            <TextBlockOne
                kicker=''
                title=''
                aboveContent='Trifecta&lsquo;s existing checkout flow suffered from significant drop-offs due to its clunky, confusing nature and lack of crucial details. Leveraging the new Trifecta design system, checkout UX conventions, and incorporating customer feedback, I lead a comprehensive redesign of the checkout experience. This transformation resulted in an 24% increase in checkout page conversions, coupled with an 18% reduction in flow time. The redesigned checkout not only paved the way for introducing meal selection but also facilitated the initiation of A/B testing.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-1.png',
                        mobile: '/images/cs/trifecta-featured-work-1.png',
                        alt: 'Old vs new Trifecta product page',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Product page redesign',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-2.png',
                        mobile: '/images/cs/trifecta-featured-work-2.png',
                        alt: 'Old vs new Trifecta checkout pages',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Checkout pages redesign',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-3.png',
                        mobile: '/images/cs/trifecta-featured-work-3.png',
                        alt: 'Mobile cart expansion animation',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Expandable mobile cart',
                    },
                    {
                        desktop: '/images/cs/trifecta-featured-work-4.png',
                        mobile: '/images/cs/trifecta-featured-work-4.png',
                        alt: 'Meal details',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Meal detail view',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-5.png',
                        mobile: '/images/cs/trifecta-featured-work-5.png',
                        alt: 'Choosing meals checkout flow page',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Meal choice selection',
                    },
                ]}
            />

            <TextBlockOne
                kicker=''
                title=''
                aboveContent='<b>2. Progress focused app experience</b>'
                belowContent=''
                images={[]}
            />

            <TextBlockOne
                kicker=''
                title=''
                aboveContent='To provide more value to our app user segments, I oversaw the integration of progress tracking features to help users see the impact of tracking their meals and workouts. These features included personalized milestones, goal tracking, and insightful recommendations based on user data. Throughout the process, continuous feedback loops ensured that I remained aligned with user expectations. Goal based tracking fostered a stronger connection and loyalty from our user base.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-6.png',
                        mobile: '/images/cs/trifecta-featured-work-6.png',
                        alt: 'Trifecta app onboarding screens',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Goal and timeline customization',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-7.png',
                        mobile: '/images/cs/trifecta-featured-work-7.png',
                        alt: 'Weight tracking Trifecta app screen',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Weight tracking',
                    },
                    {
                        desktop: '/images/cs/trifecta-featured-work-8.svg',
                        mobile: '/images/cs/trifecta-featured-work-8.svg',
                        alt: 'Macro tracking Trifecta app screen',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Weekly macro tracking',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-9.png',
                        mobile: '/images/cs/trifecta-featured-work-9.png',
                        alt: 'Goal tracking Trifecta app screens',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Goal & activity tracking',
                    },
                    {
                        desktop: '/images/cs/trifecta-featured-work-10.png',
                        mobile: '/images/cs/trifecta-featured-work-10.png',
                        alt: 'Goal completion Trifecta app screen',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Goal accomplished',
                    },
                ]}
            />

            <TextBlockOne
                kicker=''
                title=''
                aboveContent='<b>3. More user friendly dashboard</b>'
                belowContent=''
                images={[]}
            />

            <TextBlockOne
                kicker=''
                title=''
                aboveContent='I lead a number of workshops with Sales and Product team to better understand the friction customers were struggling with while managing their meal subscriptions. With these insights and a focus on optimizing user interaction, I restructured the dashboard, prioritizing key elements and content to align with user needs and preferences. This involved reorganizing menu items, enhancing navigation, and ensuring a seamless flow of information.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-11.png',
                        mobile: '/images/cs/trifecta-featured-work-11.png',
                        alt: 'Old vs new Trifecta dashboard',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-12.png',
                        mobile: '/images/cs/trifecta-featured-work-12.png',
                        alt: 'Multiple Trifecta dashboard pages on mobile',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Order history, account details, upcoming order',
                    },
                ]}
            />

            <TextBlockOne
                images={[
                    {
                        desktop: '/images/cs/trifecta-featured-work-13.png',
                        mobile: '/images/cs/trifecta-featured-work-13.png',
                        alt: 'Trifecta dashboard page on desktop and mobile',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Order tracking',
                    },
                ]}
            />

            <MoreStudies title='More Case Studies' caseStudies={caseStudies} />
        </>
    );
}
