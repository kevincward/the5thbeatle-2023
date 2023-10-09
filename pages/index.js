import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Script from 'next/script';

import caseStudiesBg from '../public/images/case-studies-background.svg';
import projectsBg from '../public/images/ocean-background.svg';
import submarine from '../public/images/yellow-submarine.svg';

export default function Home() {
    const caseStudies = [
        {
            title: 'Building design into a key business asset',
            company: 'Trifecta',
            url: '/case-studies/trifecta',
            image: '/images/white.svg',
        },
        {
            title: 'Fostering camaraderie for app retention',
            company: 'Thrive Global',
            url: '/case-studies/thrive',
            image: '/images/white.svg',
        },
        {
            title: 'Refreshing a product to encourage self-growth',
            company: 'Reflektive',
            url: '/case-studies/reflektive',
            image: '/images/white.svg',
        },
        {
            title: 'Building design into a key business asset',
            company: 'Trifecta',
            url: '/case-studies/trifecta',
            image: '/images/white.svg',
        },
        {
            title: 'Fostering camaraderie for app retention',
            company: 'Thrive Global',
            url: '/case-studies/thrive',
            image: '/images/white.svg',
        },
        {
            title: 'Refreshing a product to encourage self-growth',
            company: 'Reflektive',
            url: '/case-studies/reflektive',
            image: '/images/white.svg',
        },
    ];

    const skills = [
        {
            description:
                'I work closely with users to understand their needs, pain points, and wants in order to generate usable products that solve real problems.',
            title: 'research',
        },
        {
            description:
                'I implement an iterative process to uncover new outlooks and redefine problems in an attempt to identify alternative strategies and solutions.',
            title: 'design',
        },
        {
            description:
                'Incorporating product thinking and UX workflow with the development process, I see products from problem discovery to launch and onward.',
            title: 'product',
        },
        {
            description:
                'I work to build sustainable experiences that net more long-term engaged users rather than short term metric movers.',
            title: 'business',
        },
    ];

    const projects = [
        {
            title: 'People Analytics Dashboard',
            image: 'project-pi.png',
            url: '/projects/pi',
        },
        {
            title: 'Landing Page Components',
            image: 'project-lpcomp.png',
            url: '/projects/lpcomponents',
        },
    ];

    const [activeSkill, setActiveSkill] = useState(0);
    const [activeCaseStudyImage, setActiveCaseStudyImage] = useState(
        '/images/white.svg',
    );

    return (
        <main className='pt-20'>

            <div className="container">
                <Script src="https://www.googletagmanager.com/gtag/js?id=UA-107426964-2" />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'UA-107426964-2');
                        `}
                </Script>
            </div>

            <div className='container relative'>
                <div className='flex'>
                    <div className='lg:basis-1/2'>
                        <h1 className='pb-5 font-recoleta text-4xl font-semibold'>
                            I am the 5th Beatle.
                        </h1>
                        <p className='pb-12 font-recoleta text-3xl font-semibold'>
                            While my band is on hiatus, I&apos;m focused on
                            designing meaningful products.
                        </p>
                        <p className='text-xl' id='anchor-cs'>
                            Principal Product Designer at{' '}
                            <a
                                className='font-recoleta text-purple'
                                href='https://www.trifectanutrition.com/'
                                target='_blank'
                            >
                                Trifecta
                            </a>
                        </p>
                    </div>
                </div>
                <div className='absolute right-0 top-0 hidden lg:block'>
                    <Image
                        src={activeCaseStudyImage}
                        width={522}
                        height={416}
                        alt='hero background'
                    />
                </div>
            </div>
            <div
                className='case-studies mt-4 h-[16.875rem] bg-cover bg-no-repeat lg:mt-24 lg:h-[40.9375rem]'
                style={{
                    backgroundImage: `url(${caseStudiesBg.src})`,
                }}
            >
                <div className='relative z-10 pl-3 pt-8 lg:px-0 lg:pt-16'>
                    <div className='flex w-full flex-row items-center'>
                        <div className='mr-6 basis-1/3 lg:pr-16 lg:text-right'>
                            <p className='heading-decoration font-recoleta text-4xl font-semibold'>
                                Case Studies
                            </p>
                        </div>
                        <div className='basis-2/3 overflow-x-auto'>
                            <Swiper
                                navigation={{ nextEl: '.next-button' }}
                                slidesPerView={'auto'}
                                spaceBetween={20}
                                loop={true}
                                modules={[Navigation]}
                                className='case-studies-swiper'
                            >
                                {Object.keys(caseStudies).map((key) => (
                                    <SwiperSlide key={key}>
                                        <div
                                            className='case-study-card w-[170px] rounded bg-white p-6 drop-shadow lg:w-[350px] hover:shadow-xl transition-shadow duration-300 ease-in-out'
                                            onClick={() => {
                                                setActiveCaseStudyImage(
                                                    caseStudies[key].image,
                                                );
                                            }}
                                            onMouseEnter={() => {
                                                setActiveCaseStudyImage(
                                                    caseStudies[key].image,
                                                );
                                            }}
                                        >
                                            <p className='pb-8 lg:pb-10'>
                                                <a className='font-recoleta text-[1.3125rem] font-semibold leading-5 lg:text-2xl'>
                                                    {caseStudies[key].title}
                                                </a>
                                            </p>
                                            <p className='pb-2 font-recoleta text-xl text-gray lg:pb-4'>
                                                {caseStudies[key].company}
                                            </p>
                                            <div className='mb-2 h-[1px] w-[5.0625rem] bg-orange lg:mb-4'></div>
                                            <a
                                                className='font-recoleta font-semibold text-purple group'
                                                href={caseStudies[key].url}
                                            >
                                                View Project{' '}
                                                <Image
                                                    className='inline-block group-hover:translate-x-1 transition-transform'
                                                    src='/images/ic_arrow.svg'
                                                    alt='view project'
                                                    height={24}
                                                    width={24}
                                                />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className='next-button absolute right-8 top-[50%] z-[999] hover:translate-x-1 transition-transform'>
                                <Image
                                    src='/images/next-button.svg'
                                    width={48}
                                    height={48}
                                    alt='Next case study'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='teams container py-16 lg:py-24 scroll-smooth delay-300ms duration-600ms'>
                <h2 className='pb-8 text-center font-recoleta text-4xl font-semibold'>
                    I&apos;ve worked with big and small teams
                </h2>
                <div className='mx-auto grid max-w-[42rem] grid-cols-4 gap-4 gap-x-0 lg:grid-cols-8'>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/paypal-icon.svg'
                            alt='PayPal'
                            height={56}
                            width={56}
                            className='inline-block transform transition-all hover:scale-105'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/trifecta-app-icon.svg'
                            alt='Trifecta'
                            height={56}
                            width={56}
                            class='inline-block transform transition-all hover:scale-105'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/group-34-icon.svg'
                            alt='Reflektive'
                            height={56}
                            width={56}
                            className='inline-block transform transition-all hover:scale-105'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/group-44-icon.svg'
                            alt='NationBuilder'
                            height={56}
                            width={56}
                            className='inline-block transform transition-all hover:scale-105'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/tcheck-icon.svg'
                            alt='tCheck'
                            height={56}
                            width={56}
                            className='inline-block transform transition-all hover:scale-105'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/group-43-icon.svg'
                            alt='Thrive Global'
                            height={56}
                            width={56}
                            className='inline-block transform transition-all hover:scale-105'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/venmo-icon.svg'
                            alt='Venmo'
                            height={56}
                            width={56}
                            className='inline-block transform transition-all hover:scale-105'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/group-35-icon.svg'
                            alt='Daysheets'
                            height={56}
                            width={56}
                            className='inline-block transform transition-all hover:scale-105'
                        />
                    </div>
                </div>
            </div>

            <div className='skills mb-6 lg:py-12'>
                <h2 className='pb-8 text-center font-recoleta text-4xl font-semibold'>
                    And picked up a few skills along the way
                </h2>
                <div className='text-l grid auto-cols-max grid-flow-col place-items-center overflow-x-auto pb-6 lg:place-content-center lg:overflow-x-auto lg:pb-12'>
                    <div className='max-w-[140px] border-r-2 border-r-orange px-6 py-2 text-center lg:max-w-none'>
                        <button
                            className={`block font-recoleta ${activeSkill === 0
                                ? 'font-semibold text-black'
                                : 'text-gray'
                                } `}
                            onClick={() => setActiveSkill(0)}
                        >
                            UX Research & Strategy
                        </button>
                    </div>
                    <div className='max-w-[140px] border-r-2 border-r-orange px-6 py-2 text-center lg:max-w-none'>
                        <button
                            onClick={() => setActiveSkill(1)}
                            className={`font-recoleta ${activeSkill === 1
                                ? 'font-semibold text-black'
                                : 'text-gray'
                                }`}
                        >
                            Design Thinking
                        </button>
                    </div>
                    <div className='max-w-[140px] border-r-2 border-r-orange px-6 py-2 text-center lg:max-w-none'>
                        <button
                            onClick={() => setActiveSkill(2)}
                            className={`font-recoleta ${activeSkill === 2
                                ? 'font-semibold text-black'
                                : 'text-gray'
                                }`}
                        >
                            Product Management
                        </button>
                    </div>
                    <div className='max-w-[140px] px-3 py-2 text-center lg:max-w-none'>
                        <button
                            onClick={() => setActiveSkill(3)}
                            className={`font-recoleta ${activeSkill === 3
                                ? 'font-semibold text-black'
                                : 'text-gray'
                                }`}
                        >
                            Business Growth
                        </button>
                    </div>
                </div>

                <div>
                    <div className='mx-auto h-[360px] max-w-[1012px]'>
                        <div className='flex flex-wrap px-3 lg:items-end'>
                            <div className='mb-3 lg:mb-0 lg:basis-2/3 lg:pr-12'>
                                <Image
                                    src={`/images/ux-${skills[activeSkill].title}-image.svg`}
                                    alt='Kevin Ward UX Research & Strategy Skills'
                                    width={688}
                                    height={360}
                                />
                            </div>
                            <div className='lg:basis-1/3'>
                                <Image
                                    src={`images/ic_skill-${skills[activeSkill].title}.svg`}
                                    width={40}
                                    height={40}
                                    alt='UX Research and Strategy Icon'
                                    className='mb-4 hidden lg:block'
                                />
                                <p className='pb-6 lg:pb-12'>
                                    {skills[activeSkill].description}
                                </p>
                                <div className='flex justify-center lg:justify-start'>
                                    <button className='mr-3'>
                                        <Image
                                            src='/images/previous-button.svg'
                                            width={48}
                                            height={48}
                                            alt='next case study button'
                                            onClick={() => {
                                                const total = skills.length - 1;

                                                if (activeSkill === 0) {
                                                    setActiveSkill(total);
                                                } else {
                                                    setActiveSkill(
                                                        activeSkill - 1,
                                                    );
                                                }
                                            }}
                                        />
                                    </button>
                                    <button>
                                        <Image
                                            src='/images/next-button.svg'
                                            width={48}
                                            height={48}
                                            alt='next case study button'
                                            onClick={() => {
                                                const total = skills.length - 1;
                                                if (activeSkill === total) {
                                                    setActiveSkill(0);
                                                } else {
                                                    setActiveSkill(
                                                        activeSkill + 1,
                                                    );
                                                }
                                            }}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='projects'>
                <div
                    className='h-[100px] bg-cover bg-no-repeat lg:h-[21.64775rem]'
                    style={{
                        backgroundImage: `url(${projectsBg.src})`,
                    }}
                ></div>
                <div
                    className='relative bg-[#50C1E2] bg-no-repeat pb-16 lg:bg-none'
                    style={{
                        backgroundImage: `url(${submarine.src})`,
                        backgroundSize: '169px 95px',
                        backgroundPosition: 'right 50px',
                    }}
                >
                    <Image
                        src='/images/yellow-submarine.svg'
                        alt='yellow submarine'
                        className='absolute right-[100px] top-0 hidden lg:-top-20 lg:inline-block'
                        width={317}
                        height={177}
                    />
                    <div className='relative mx-auto max-w-[1040px] px-3'>
                        <h2 className='pb-8 font-recoleta text-4xl font-semibold'>
                            While working on different projects
                        </h2>

                        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4'>
                            {Object.keys(projects).map((key) => (
                                <div
                                    key={key}
                                    className='relative flex items-center lg:mb-12 lg:h-[264px] lg:items-end'
                                >
                                    <div className='basis-1/4'>
                                        <Image
                                            className='inline-block w-[96px] lg:absolute lg:top-0 lg:w-[264px]'
                                            src={`/images/${projects[key].image}`}
                                            alt='view project'
                                            height={264}
                                            width={264}
                                        />
                                    </div>
                                    <div className='basis-3/4 lg:pr-8'>
                                        <div className='project-card ml-2 rounded bg-white p-4 drop-shadow lg:-mb-10'>
                                            <p className='pb-4'>
                                                <a className='font-recoleta text-[1.3125rem] font-semibold leading-5'>
                                                    {projects[key].title}
                                                </a>
                                            </p>

                                            <a
                                                className='font-recoleta font-semibold text-purple'
                                                href={projects[key].url}
                                            >
                                                View{' '}
                                                <Image
                                                    className='inline-block'
                                                    src='/images/ic_arrow.svg'
                                                    alt='view project'
                                                    height={24}
                                                    width={24}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
