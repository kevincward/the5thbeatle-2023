import Image from 'next/image';

export default function Home() {
    return (
        <main className='py-20'>
            <div className='container'>
                <div className='flex'>
                    <div className='lg:basis-1/2'>
                        <h1>I am the 5th Beatle.</h1>
                        <p>
                            While my band is on hiatus, I&apos;m focused on
                            designing meaningful products.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
