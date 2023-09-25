import Image from 'next/image';

export default function Home() {
    return (
        <main className='py-20'>
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
        </main>
    );
}
