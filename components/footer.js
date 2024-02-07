import Image from 'next/image';
import footerBg from '../public/images/footer-abstract.svg';

export default function Footer() {
    return (
        <footer
            className='bg-purple px-4 py-10 lg:py-20'
            style={{
                backgroundImage: `url(${footerBg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
            }}
        >
            <div className='grid grid-rows-2 items-center lg:container lg:grid-cols-2 lg:grid-rows-none'>
                <div className=''>
                    <p className='pr-20 font-recoleta text-2xl font-semibold text-white lg:pb-10 lg:pr-0'>
                        All you need is love,
                        <br />
                        and well designed products
                    </p>
                </div>
                <div className='lg:text-right'>
                    <a
                        className='mr-5 inline-block hover:scale-110 duration-500 ease'
                        href='https://www.linkedin.com/in/kcwdesigner'
                        target='_blank'
                    >
                        <Image
                            src='/images/linkedin-logo.svg'
                            alt='Kevins LinkedIn Link'
                            height={24}
                            width={24}
                        />
                    </a>
                    <a
                        className='mr-5 inline-block hover:scale-110 duration-500 ease'
                        href='https://github.com/kevincward'
                        target='_blank'
                    >
                        <Image
                            src='/images/github-logo.svg'
                            alt='Kevins GitHub Link'
                            height={24}
                            width={24}
                        />
                    </a>
                    <a
                        className='inline-block hover:scale-110 duration-500 ease'
                        href='https://open.spotify.com/playlist/01xUdZEaNRvGNam15QJUP0?si=d6nn8RrFSieXS78lgK-E5A'
                        target='_blank'
                    >
                        <Image
                            src='/images/spotify-logo.svg'
                            alt='Kevins Spotify Link'
                            height={24}
                            width={24}
                        />
                    </a>
                </div>
            </div>
            <div className='lg:container'>
                <p className='flex items-center font-recoleta text-sm text-white'>
                    This website was last updated in 2024{' '}
                    <Image
                        src='/images/peace-icon.svg'
                        alt='peace and love icon'
                        height={16}
                        width={16}
                        className='ml-2 inline hover:scale-110 duration-500 ease'
                    />
                </p>
            </div>
        </footer>
    );
}
