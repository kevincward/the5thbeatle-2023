import TitleBlock from '@/components/titleBlock';
import ParallaxBlock from '@/components/parallaxBlock';
import SecondaryNav from '@/components/secondaryNav';
import ContextCard from '@/components/contextCard';
import TextBlockOne from '@/components/textBlockOne';
import ProblemCard from '@/components/problemCard';
import Results from '@/components/results';
import MoreStudies from '@/components/moreStudies';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export default function Thrive() {
    const caseStudies = [
        {
            title: 'Refreshing a product to encourage self-growth',
            company: 'Reflektive',
            url: '/case-studies/reflektive',
        },
        {
            title: 'Crafting a seamless donation app experience',
            company: 'PayPal',
            url: '/case-studies/paypal-app',
        },
    ];

    const [ContextCardVisible, setContextCardVisible] = useState(false);
    const [OverviewVisible, setOverviewVisible] = useState(false);
    const [ChallengeVisible, setChallengeVisible] = useState(false);
    const [ProblemCardVisible, setProblemCardVisible] = useState(false);
    const [ApproachVisible, setApproachVisible] = useState(false);
    const [CompetitorVisible, setCompetitorVisible] = useState(false);
    const [PossibilitiesVisible, setPossibilitiesVisible] = useState(false);
    const [WireframesVisible, setWireframesVisible] = useState(false);
    const [OutcomeVisible, setOutcomeVisible] = useState(false);
    const [ResultsVisible, setResultsVisible] = useState(false);
    const [MoreStudiesVisible, setMoreStudiesVisible] = useState(false);

    return (
        <>
            <TitleBlock
                kicker='Thrive Global'
                title='Fostering camaraderie for stronger app retention'
            />

            <ParallaxBlock image='/images/cs/thrive-bkgd-1.png' bgColor='rgba(48,98,103)' />

            <SecondaryNav
                sectionOneTitle='Overview'
                sectionTwoTitle='Challenge'
                sectionThreeTitle='Approach'
                sectionFourTitle='Outcome'
            />

            <InView
                as={motion.div}
                initial='hidden'
                animate={ContextCardVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setContextCardVisible(true);
                    }
                }}
            >
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
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={OverviewVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setOverviewVisible(true);
                    }
                }}
            >
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
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={ChallengeVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setChallengeVisible(true);
                    }
                }}
            >
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
                <br />
                <br />
                1. Break up goals into manageable steps
                <br />
                2. Ensure user commitment through required actions
                <br />
                3. Demonstrate progressive achievement & celebrating small wins
                <br />
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
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={ProblemCardVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setProblemCardVisible(true);
                    }
                }}
            >
                <ProblemCard
                    backgroundColor='#FCD9E0'
                    textColor='#782133'
                    content='How might we craft an engaging challenge experience that propels users to achieve their goals?'
                />
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={ApproachVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setApproachVisible(true);
                    }
                }}
            >
                <div className='scroll-mt-[152px] pb-20' id='section-3'></div>
                <TextBlockOne
                    kicker='APPROACH'
                    title='Insert wrench: we couldn&lsquo;t talk to the users we were building for...'
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
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={CompetitorVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setCompetitorVisible(true);
                    }
                }}
            >
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
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={PossibilitiesVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setPossibilitiesVisible(true);
                    }
                }}
            >
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
                    belowContent='<h2 style="font-family:recoleta;font-size:21px">MVP Key Features</h2>
                &#8226; Users participate individually in challenges
                <br />
                &#8226; Users can select from goal based challenges
                <br />
                &#8226; User checks into one of several suggested Microsteps, can do as many as they want
                <br />
                &#8226; Progress indicator
                <br />
                &#8226; Badge based rewards
                <br />
                &#8226; Social activity feed/high five feedback
                <br />
                &#8226; Sentiment rating of challenge
                <br />
                <br />
                <h2 style="font-family:recoleta;font-size:21px">Success Metrics</h2>
                <b>Primary</b>
                <br />
                App retention
                <br />
                <br />
                <b>Secondary</b>
                <br />
                &#8226; Number of users who opt into a challenge
                <br />
                &#8226; Number of users who check into a Microstep or record a unit in a challenge
                <br />
                &#8226; Number of Microsteps a user checks into over the course of a challenge
                <br />
                &#8226; Number of users who complete a challenge'
                    images={[]}
                />
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={WireframesVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setWireframesVisible(true);
                    }
                }}
            >
                <div className='pt-8'></div>
                <TextBlockOne
                    kicker=''
                    title='Wireframes'
                    aboveContent=''
                    belowContent=''
                    images={[
                        {
                            desktop: '/images/cs/thrive-approach-7.png',
                            mobile: '/images/cs/thrive-approach-7.png',
                            alt: 'Screens from first time entering challenge experience',
                            desktopWidth: 1040,
                            desktopHeight: 230,
                            mobileWidth: 382,
                            mobileHeight: 230,
                            caption: 'First time experience',
                        },
                    ]}
                />

                <div className='pt-8'></div>
                <TextBlockOne
                    images={[
                        {
                            desktop: '/images/cs/thrive-approach-8.png',
                            mobile: '/images/cs/thrive-approach-8.png',
                            alt: 'Browsing screens',
                            desktopWidth: 1040,
                            desktopHeight: 230,
                            mobileWidth: 382,
                            mobileHeight: 230,
                            caption: 'Challenge browsing',
                        },
                    ]}
                />

                <div className='pt-8'></div>
                <TextBlockOne
                    images={[
                        {
                            desktop: '/images/cs/thrive-approach-9.png',
                            mobile: '/images/cs/thrive-approach-9.png',
                            alt: 'Challenge screens',
                            desktopWidth: 1040,
                            desktopHeight: 230,
                            mobileWidth: 382,
                            mobileHeight: 230,
                            caption: 'In challenge flow',
                        },
                    ]}
                />

                <div className='pt-8'></div>
                <TextBlockOne
                    images={[
                        {
                            desktop: '/images/cs/thrive-approach-10.png',
                            mobile: '/images/cs/thrive-approach-10.png',
                            alt: 'Challenge completion screens',
                            desktopWidth: 1040,
                            desktopHeight: 230,
                            mobileWidth: 382,
                            mobileHeight: 230,
                            caption: 'Challenge completion & reflection',
                        },
                    ]}
                />
            </InView>

            <div className='pt-16'></div>

            <ParallaxBlock image='/images/cs/thrive-bkgd-2.png' />

            <InView
                as={motion.div}
                initial='hidden'
                animate={OutcomeVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setOutcomeVisible(true);
                    }
                }}
            >
                <div className='scroll-mt-[152px] pb-20' id='section-4'></div>
                <TextBlockOne
                    kicker='OUTCOME'
                    title='Final designs'
                    aboveContent='We shared wireframe prototypes with the key clientlsquo;s representative to gather feedback and refine the design. Once we achieved alignment on the MVP experience, we proceeded to build and launch it to their employee base.'
                    belowContent=''
                    images={[
                        {
                            desktop: '/images/cs/thrive-outcome-1.png',
                            mobile: '/images/cs/thrive-outcome-1.png',
                            alt: 'Screens from challenge experience',
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
                            desktop: '/images/cs/thrive-outcome-4.png',
                            mobile: '/images/cs/thrive-outcome-4.png',
                            alt: 'User navigating challenges',
                            desktopWidth: 1040,
                            desktopHeight: 230,
                            mobileWidth: 382,
                            mobileHeight: 230,
                            caption: 'Celebrating other challengers',
                        },
                        {
                            desktop: '/images/cs/thrive-outcome-2.png',
                            mobile: '/images/cs/thrive-outcome-2.png',
                            alt: 'Goal tracking Trifecta app screens',
                            desktopWidth: 1040,
                            desktopHeight: 230,
                            mobileWidth: 382,
                            mobileHeight: 230,
                            caption: 'Home screen challenges widget',
                        },
                    ]}
                />

                <div className='pt-8'></div>
                <TextBlockOne
                    images={[
                        {
                            desktop: '/images/cs/thrive-outcome-5.png',
                            mobile: '/images/cs/thrive-outcome-5.png',
                            alt: 'Challenge home screen & review screen',
                            desktopWidth: 1040,
                            desktopHeight: 230,
                            mobileWidth: 382,
                            mobileHeight: 230,
                            caption: '',
                        },
                        {
                            desktop: '/images/cs/thrive-outcome-3.png',
                            mobile: '/images/cs/thrive-outcome-3.png',
                            alt: 'Coaching from Thrive on challenge',
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
                            desktop: '/images/cs/thrive-outcome-6.png',
                            mobile: '/images/cs/thrive-outcome-6.png',
                            alt: 'Woman browsing challenges on walk',
                            desktopWidth: 1040,
                            desktopHeight: 230,
                            mobileWidth: 382,
                            mobileHeight: 230,
                            caption: '',
                        },
                    ]}
                />
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={ResultsVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setResultsVisible(true);
                    }
                }}
            >
                <div className='pt-8'></div>
                <Results
                    kicker=''
                    title='Results'
                    values={[
                        {
                            start: 0,
                            end: 4.13,
                            suffix: '%',
                            prefix: '',
                            title: 'Average Day 30 retention rate increase',
                        },
                        {
                            start: 0,
                            end: 73,
                            suffix: '%',
                            prefix: '',
                            title: 'Users who completed a challenge',
                        },
                    ]}
                    text=''
                />
            </InView>

            <InView
                as={motion.div}
                initial='hidden'
                animate={MoreStudiesVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setMoreStudiesVisible(true);
                    }
                }}
            >
                <div className='pt-8'></div>
                <MoreStudies title='More case studies' caseStudies={caseStudies} />
            </InView>
        </>
    );
}