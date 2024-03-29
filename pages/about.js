import Image from 'next/image';
import TextBlockTwo from '@/components/textBlockTwo';
import Timeline from '@/components/timeline';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export default function About() {
    const titlesData = ["There are places I remember,<br />all my life"];

    const timelinesData = [
        {
            logoSrc: "/images/timeline-trifecta.svg",
            logoWidth: 32,
            logoHeight: 32,
            company: "Trifecta",
            bodyLeft: "Principal Product Designer",
            bodyRight: "2022-23",
        },
        {
            logoSrc: "/images/timeline-tcheck.svg",
            logoWidth: 34,
            logoHeight: 34,
            company: "tCheck",
            bodyLeft: "UX Lead",
            bodyRight: "2015-23",
        },
        {
            logoSrc: "/images/timeline-thrive-nationbuilder.svg",
            logoWidth: 62,
            logoHeight: 28,
            company: "Thrive Global, NationBuilder",
            bodyLeft: "Contract- Senior Product Designer",
            bodyRight: "2021",
        },
        {
            logoSrc: "/images/timeline-reflektive.svg",
            logoWidth: 28,
            logoHeight: 28,
            company: "Reflektive",
            bodyLeft: "Senior Product Designer",
            bodyRight: "2020-21",
        },
        {
            logoSrc: "/images/timeline-paypal.svg",
            logoWidth: 27,
            logoHeight: 27,
            company: "PayPal",
            bodyLeft: "Senior Product Designer",
            bodyRight: "2015-19",
        },
    ];

    const image = {
        url: '/images/kevin-ward-the-5th-beatle.jpg',
        alt: 'Picture of the Beatles back in the day',
        caption: 'The gang back in the day',
    };

    const [timelineVisible, setTimelineVisible] = useState(false);

    return (
        <main className='pt-20'>
            <TextBlockTwo
                kicker=''
                title='I am the egg man,<br />
                    They are the egg men,<br />
                    I am the walrus'
                content='
                I am also Kevin, a product designer focused on championing user centric design that propel the business. I&lsquo;ve participated in different phases of product development, ranging from 0 → 1 projects in seed-stage startups to expanding features for large corporations on multiple platforms.
                    <br />
                    <br />
                    Over the years, I&lsquo;ve designed experiences across multiple domains including finance, health, fitness, music, cannabis, travel, philanthropy, and agriculture. In my most recent role at Trifecta, my primary focus was on propelling growth by expanding the company&lsquo;s offerings through body transformation programs.
                    <br />
                    <br />
                    When I&lsquo;m not working, I can be found painting, wandering around the country, or working on my 100 year old home (something is generally broken).
                '
                image={{
                    url: '/images/about-image.jpg',
                    alt: 'Picture of the Beatles back in the day',
                    width: 536,
                    height: 605,
                    caption: 'The gang back in the day',
                }}
            />
            <div className='pt-16'></div>

            <InView
                as={motion.div}
                initial='hidden'
                animate={timelineVisible ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 200, transition: { duration: 0.5 } },
                }}
                onChange={(inView) => {
                    if (inView) {
                        setTimelineVisible(true);
                    }
                }}
            >

                <Timeline
                    titles={titlesData}
                    timelines={timelinesData}
                    image={image}
                />
            </InView>
            <div className='pt-40'></div>
        </main>
    );
}
