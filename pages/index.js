import Image from 'next/image';
import caseStudiesBg from '../public/images/case-studies-background.svg';
import projectsBg from '../public/images/ocean-background.svg';

export default function Home() {
    return (
        <main className='pt-20'>
            <div className='container relative px-3'>
                <div className='flex'>
                    <div className='lg:basis-1/2'>
                        <h1 className='pb-5 font-recoleta text-4xl font-semibold'>
                            I am the 5th Beatle.
                        </h1>
                        <p className='pb-12 font-recoleta text-3xl font-semibold'>
                            While my band is on hiatus, I&apos;m focused on
                            designing meaningful products.
                        </p>
                        <p className='text-xl'>
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
                        src='/images/hero-background.svg'
                        width={522}
                        height={416}
                        alt='hero background'
                    />
                </div>
            </div>
            <div
                className='case-studies mt-4 h-[16.875rem] bg-cover bg-no-repeat lg:mt-20 lg:h-[40.9375rem]'
                style={{
                    backgroundImage: `url(${caseStudiesBg.src})`,
                }}
            >
                <div className='container relative z-10 pl-3 pt-8 lg:px-0'>
                    <div className='flex flex-row items-center'>
                        <div class='mr-6 basis-1/3'>
                            <p className='heading-decoration font-recoleta text-4xl font-semibold'>
                                Case Studies
                            </p>
                        </div>
                        <div class='basis-2/3 overflow-x-auto'>
                            <div className='flex'>
                                <div className='case-study-card mr-3 w-[10.625rem] rounded bg-white p-6 drop-shadow lg:w-[21.875rem]'>
                                    <p className='pb-8 lg:pb-10'>
                                        <a className='font-recoleta text-[1.3125rem] font-semibold leading-5 lg:text-3xl'>
                                            3 line title of case study project
                                        </a>
                                    </p>
                                    <p className='text-gray pb-2 font-recoleta text-xl lg:pb-4'>
                                        Trifecta
                                    </p>
                                    <div className='bg-orange mb-2 h-[1px] w-[5.0625rem] lg:mb-4'></div>
                                    <a className='font-recoleta font-semibold text-purple'>
                                        View Project{' '}
                                        <Image
                                            className='inline-block'
                                            src='/images/ic_arrow.svg'
                                            alt='view project'
                                            height={24}
                                            width={24}
                                        />
                                    </a>
                                </div>

                                <div className='case-study-card w-[10.625rem] rounded bg-white p-6 drop-shadow lg:w-[21.875rem]'>
                                    <p className='pb-8 lg:pb-10'>
                                        <a className='font-recoleta text-[1.3125rem] font-semibold leading-5 lg:text-3xl'>
                                            3 line title of case study project
                                        </a>
                                    </p>
                                    <p className='text-gray pb-2 font-recoleta text-xl lg:pb-4'>
                                        Trifecta
                                    </p>
                                    <div className='bg-orange mb-2 h-[1px] w-[5.0625rem] lg:mb-4'></div>
                                    <a className='font-recoleta font-semibold text-purple'>
                                        View Project{' '}
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
                    </div>
                </div>
            </div>
            <div className='teams container py-16 lg:py-24'>
                <h2 className='pb-8 text-center font-recoleta text-4xl font-semibold'>
                    I&apos;ve worked with big and small teams
                </h2>
                <div className='mx-auto grid max-w-[42rem] grid-cols-4 gap-4 gap-x-0 lg:grid-cols-8'>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/trifecta-app-icon.svg'
                            alt='Trifecta Icon'
                            height={56}
                            width={56}
                            className='inline-block'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/paypal-icon.svg'
                            alt='PayPal Icon'
                            height={56}
                            width={56}
                            className='inline-block'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/group-34-icon.svg'
                            alt='Icon'
                            height={56}
                            width={56}
                            className='inline-block'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/group-44-icon.svg'
                            alt='Icon'
                            height={56}
                            width={56}
                            className='inline-block'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/tcheck-icon.svg'
                            alt='Tcheck Icon'
                            height={56}
                            width={56}
                            className='inline-block'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/group-43-icon.svg'
                            alt='Icon'
                            height={56}
                            width={56}
                            className='inline-block'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/venmo-icon.svg'
                            alt='Venmo Icon'
                            height={56}
                            width={56}
                            className='inline-block'
                        />
                    </div>
                    <div className='w-100 text-center'>
                        <Image
                            src='/images/group-35-icon.svg'
                            alt='Icon'
                            height={56}
                            width={56}
                            className='inline-block'
                        />
                    </div>
                </div>
            </div>

            <div className='skills container lg:py-12'>
                <h2 className='pb-8 text-center font-recoleta text-4xl font-semibold'>
                    And picked up a few skills along the way
                </h2>
                <div className='flex flex-row justify-center pb-6 text-lg lg:pb-12'>
                    <div className='border-r-orange border-r-2 px-6 py-2'>
                        <a className='text-gray font-recoleta'>
                            Research & Strategy
                        </a>
                    </div>
                    <div className='border-r-orange border-r-2 px-6 py-2'>
                        <a className='text-gray font-recoleta'>
                            Design Thinking
                        </a>
                    </div>
                    <div className='border-r-orange border-r-2 px-6 py-2'>
                        <a className='text-gray font-recoleta'>
                            Product Management
                        </a>
                    </div>
                    <div className='px-3 py-2'>
                        <a className='text-gray font-recoleta'>
                            Business Growth
                        </a>
                    </div>
                </div>
            </div>

            <div className='projects'>
                <div
                    className='h-[10.81219rem] bg-cover bg-no-repeat lg:h-[21.64775rem]'
                    style={{
                        backgroundImage: `url(${projectsBg.src})`,
                    }}
                ></div>
                <div className='relative bg-[#50C1E2]  pb-16'>
                    <Image
                        src='/images/yellow-submarine.svg'
                        alt='yellow submarine'
                        className='absolute right-0 top-0 lg:-top-20'
                        width={317}
                        height={177}
                    />
                    <div className='container'>
                        <h2 className='pb-8 font-recoleta text-4xl font-semibold'>
                            While working on different projects
                        </h2>

                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                            <div className='relative mb-16'>
                                <Image
                                    className='inline-block'
                                    src='/images/project-placeholder.svg'
                                    alt='view project'
                                    height={264}
                                    width={264}
                                />
                                <div className='project-card absolute -bottom-10 right-0 mr-3 rounded bg-white p-6 drop-shadow'>
                                    <p className='pb-4'>
                                        <a className='font-recoleta text-[1.3125rem] font-semibold leading-5 lg:text-3xl'>
                                            Trifecta App Redesign
                                        </a>
                                    </p>

                                    <a className='font-recoleta font-semibold text-purple'>
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

                            <div className='relative mb-16'>
                                <Image
                                    className='inline-block'
                                    src='/images/project-placeholder.svg'
                                    alt='view project'
                                    height={264}
                                    width={264}
                                />
                                <div className='project-card absolute -bottom-10 right-0 mr-3 rounded bg-white p-6 drop-shadow'>
                                    <p className='pb-4'>
                                        <a className='font-recoleta text-[1.3125rem] font-semibold leading-5 lg:text-3xl'>
                                            Trifecta App Redesign
                                        </a>
                                    </p>

                                    <a className='font-recoleta font-semibold text-purple'>
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

                            <div className='relative mb-16'>
                                <Image
                                    className='inline-block'
                                    src='/images/project-placeholder.svg'
                                    alt='view project'
                                    height={264}
                                    width={264}
                                />
                                <div className='project-card absolute -bottom-10 right-0 mr-3 rounded bg-white p-6 drop-shadow'>
                                    <p className='pb-4'>
                                        <a className='font-recoleta text-[1.3125rem] font-semibold leading-5 lg:text-3xl'>
                                            Trifecta App Redesign
                                        </a>
                                    </p>

                                    <a className='font-recoleta font-semibold text-purple'>
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

                            <div className='relative mb-16'>
                                <Image
                                    className='inline-block'
                                    src='/images/project-placeholder.svg'
                                    alt='view project'
                                    height={264}
                                    width={264}
                                />
                                <div className='project-card absolute -bottom-10 right-0 mr-3 rounded bg-white p-6 drop-shadow'>
                                    <p className='pb-4'>
                                        <a className='font-recoleta text-[1.3125rem] font-semibold leading-5 lg:text-3xl'>
                                            Trifecta App Redesign
                                        </a>
                                    </p>

                                    <a className='font-recoleta font-semibold text-purple'>
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
                    </div>
                </div>
            </div>
        </main>
    );
}
