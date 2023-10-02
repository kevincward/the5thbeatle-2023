import Image from 'next/image';

export default function About() {
    return (
        <div className='container py-12 lg:py-24'>
            <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2'>
                <div>
                    <Image
                        src='/images/about-image.jpg'
                        alt='about Kevin Ward'
                        width={560}
                        height={861}
                    />
                </div>
                <div>
                    <h1 className='mb-4 font-recoleta text-[1.75rem] font-semibold leading-[2.125rem]'>
                        I am the egg man,
                        <br />
                        They are the egg men,
                        <br />I am the walrus
                    </h1>
                    <p className='mb-4'>
                        I am a product designer building experiences for
                        Trifecta in Sacramento.
                    </p>
                    <p className='mb-4'>
                        Prior to Trifecta, I was solving problems in a number of
                        spaces at companies including PayPal, Venmo, Xoom,
                        NationBuilder, Thrive Global, DaySheets, Reflektive, and
                        more.
                    </p>
                    <p className='mb-4'>
                        In addition to a number of day jobs, for the past 8
                        years, I have been working with a group of friends
                        building a small company in Cannatech called tCheck.
                        Conceptualizing, designing, and marketing hardware in a
                        tumultuous industry has afforded me a lot of expertise
                        and knowledge.
                    </p>
                    <p className='mb-4'>
                        When I&apos;m not working, I can be found making art,
                        wandering the country, or working on my 100 year old
                        home (something is generally broken).
                    </p>
                </div>
            </div>
        </div>
    );
}
