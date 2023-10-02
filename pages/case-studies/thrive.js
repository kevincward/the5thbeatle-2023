import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';
import SecondaryNav from '@/components/secondaryNav';
import ContextCard from '@/components/contextCard';
import TextBlockOne from '@/components/textBlockOne';
import ProblemCard from '@/components/problemCard';

export default function Thrive() {
    const caseStudies = [
        {
            title: 'Refreshing a product to encourage self-growth',
            company: 'Reflektive',
            url: '#',
        },
        {
            title: 'Building design into a key business asset',
            company: 'Trifecta',
            url: '#',
        },
    ];

    return (
        <>
            <TitleBlock
                kicker='Thrive Global'
                title='Fostering camaraderie for stronger app retention'
            />

            <ParallaxBlock image='/images/parallax-background.jpg' />

            <SecondaryNav
                sectionOneTitle='Overview'
                sectionTwoTitle='Challenge'
                sectionThreeTitle='Approach'
                sectionFourTitle='Outcome'
            />

            <div className='scroll-mt-[152px] pb-8' id='section-1'></div>
            <ContextCard
                titleColor='#782133'
                textColor='#060125'
                backgroundColor='#FCD9E0'
                content={{
                    kicker: 'ABOUT THRIVE',
                    description:
                        'Thrive Global is a B2B2C company helping individuals, corporations and communities improve their well-being and performance through their goal oriented habit building platform.',
                    title: 'Senior Product Designer',
                    titleDescription:
                        'Product strategy, Information architecture, Visual design & Interaction, prototyping & testing',
                    teammates: 'Product manager, Behavior change product manager, and Content strategist',
                    timeline: 'Apr 2021 - Jun 2021',
                }}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker='OVERVIEW'
                title='App based daily itinerary'
                aboveContent='Thrive app users choose a health intention like lose weight, get better sleep or reduce stress and the app serves up “microsteps” (habit suggestions) and content to help them achieve their goals.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-overview-1.png',
                        mobile: '/images/cs/thrive-overview-1.png',
                        alt: 'Thrive app screens',
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
                title='Users were losing interest in goals and abandoning the app'
                aboveContent='Within weeks of onboarding, data showed a significant portion of users stopped using the app. Insights from interviewing churned users found the most common reasons:'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-challenge-1.svg',
                        mobile: '/images/cs/thrive-challenge-1.svg',
                        alt: 'Chart showing reasons for Thrive app dropoff',
                        desktopWidth: 1040,
                        desktopHeight: 200,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Challenge users to pursue their goals'
                aboveContent='The app product team hosted a workshop with members from our executive team, behavior change specialists, and other product teams to brainstorm opportunities/features to motivate users. We decided to introduce challenges into the app.
                
                With challenges, we could:
                1. Break up goals into manageable steps
                2. Ensure user commitment through required actions
                3. Demonstrate progressive achievement & celebrating small wins
                4. Provide a communal environment, cultivating a strong sense of unity for heightened motivation and support'
                belowContent=''
                images={[]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Leadership acquired an app to start from'
                aboveContent='After acquiring &lsquo;ZP Challenges&lsquo;, Thrive sought to integrate it into the Thrive app. With an 82% drop-off rate from challenge opt-in to completion, a substantial upgrade was imperative.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-challenge-2.png',
                        mobile: '/images/cs/thrive-challenge-2.png',
                        alt: 'Thrive app screens',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: '',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <ProblemCard
                backgroundColor='#FCD9E0'
                textColor='#782133'
                content='How might we craft an engaging challenge experience that propels users to achieve their goals?'
            />

            <div className='scroll-mt-[152px] pb-20' id='section-3'></div>
            <TextBlockOne
                kicker='APPROACH'
                title='Insert wrench: we couldn’t talk to the users we were building for...'
                aboveContent='Leadership tasked us with creating the MVP of the challenges feature for a key client, yet we faced the challenge of limited access to their employees for gathering insights and testing concepts. To compensate, we decided to:'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-approach-1.svg',
                        mobile: '/images/cs/thrive-approach-1.svg',
                        alt: 'Chart showing approach to tackle problem',
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
                title='Evaluating ZP Challenges flow'
                aboveContent='ZP Challenge app users join a single challenge for a chance to win a cash prize. The premise of the challenge was pretty simple: tap the button for the category of the better choice they made for 21 days.

                With habit formation as the cornerstone of Thrive&lsquo;s products, we analyzed the ZP flow through James Clear&lsquo;s Habit Loop lens. A heuristic evaluation revealed a lot of opportunities to insert more cues, motivational moments, responses, and rewards.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-approach-2.png',
                        mobile: '/images/cs/thrive-approach-2.png',
                        alt: 'ZP flow and James Clear‘s Habit Loop',
                        desktopWidth: 1040,
                        desktopHeight: 230,
                        mobileWidth: 382,
                        mobileHeight: 230,
                        caption: 'Reviewing ZP flow from a habit loop standpoint',
                    },
                ]}
            />

            <div className='pt-8'></div>
            <TextBlockOne
                kicker=''
                title='Competitor analysis'
                aboveContent='I explored habit tracking, fitness, and challenge apps to gain insights into the competition. This research revealed strategies, strengths, and weaknesses.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-approach-3.jpg',
                        mobile: '/images/cs/thrive-approach-3.jpg',
                        alt: 'Competitors screenshot',
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
                title='Developing a picture of challenge use cases'
                aboveContent='I collaborated closely with the client&lsquo;s representative to explore how challenges could benefit their employees. From these conversations, I distilled three key use cases with the potential to engage a substantial user base.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-approach-4.svg',
                        mobile: '/images/cs/thrive-approach-4.svg',
                        alt: 'Competitors screenshot',
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
                title='Organizing challenge possibilities'
                aboveContent='Drawing from the insights gathered above, I crafted a map of the elements needed to establish challenges and maintain engagement.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-approach-5.svg',
                        mobile: '/images/cs/thrive-approach-5.svg',
                        alt: 'Chart of challenge elements',
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
                title='Product journey roadmap'
                aboveContent='In collaboration with the product manager, I crafted a comprehensive product map to streamline our design efforts.'
                belowContent=''
                images={[
                    {
                        desktop: '/images/cs/thrive-approach-6.svg',
                        mobile: '/images/cs/thrive-approach-6.svg',
                        alt: 'Journey roadmap chart',
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
                title='Deciding on an MVP'
                aboveContent='I collaborated closely with key stakeholders to craft an MVP aligned with user needs, business objectives, and technical feasibility, using feature mapping and prioritization.'
                belowContent='MVP Key Features
                Users participate individually in challenges
                Users can select from goal based challenges
                User checks into one of several suggested Microsteps, can do as many as they want
                Progress indicator
                Badge based rewards
                Social activity feed/high five feedback
                Sentiment rating of challenge
                <p><br></p>
                Success metrics
                <p><b>Primary</b></p>
                <p>App retention</p>
                <p><br></p>
                <p><b>Secondary</b></p>
                <p>&#8226; Number of users who opt into a challenge</p>
                <p>&#8226; Number of users who check into a Microstep or record a unit in a challenge</p>
                <p>&#8226; Number of Microsteps a user checks into over the course of a challenge</p>
                <p>&#8226; Number of users who complete a challenge</p>'
                images={[]}
            />

            <ParallaxBlock image='/images/parallax-background.jpg' />

            <div className='scroll-mt-[152px] pb-20' id='section-4'></div>
            <TextBlockOne
                kicker='FEATURED WORK'
                title='Key projects'
                aboveContent='Checkout Redesign & Meal Choice'
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
        </>
    );
}