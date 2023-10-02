import Image from 'next/image';
import TextBlockTwo from '@/components/textBlockTwo';

export default function About() {
    return (
        <main className='pt-20'>
            <TextBlockTwo
                kicker=''
                title='<p>I am the egg man,</p>
                    <p>They are the egg men,</p>
                    I am the walrus'
                content='
                    <p>I am a product designer building experiences for Trifecta in Sacramento.</p>
                    <br />
                    <p>Prior to Trifecta, I was solving problems in a number of spaces at companies including PayPal, Venmo, Xoom, NationBuilder, Thrive Global, DaySheets, Reflektive, and more.</p>
                    <br />
                    <p>In addition to a number of day jobs, for the past 8 years, I have been working with a group of friends building a small company in Cannatech called tCheck. Conceptualizing, designing, and marketing hardware in a tumultuous industry has afforded me a lot of expertise and knowledge.</p>
                    <br />
                    <p>When I&lsquo;m not working, I can be found making art, wandering the country, or working on my 100 year old home (something is generally broken).</p>
                '
                image={{
                    url: '/images/kevin-ward-product-designer-5th-beatle.jpg',
                    alt: 'Picture of the Beatles back in the day',
                    width: 536,
                    height: 605,
                    caption: 'The gang back in the day',
                }}
            />
            <div className='pt-40'></div>
        </main>
    );
}
