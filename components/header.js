import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header
            className={`sticky top-0 z-[999] ${isOpen ? 'bg-menu-bg' : 'bg-white'
                }`}
        >
            <div className='mx-auto max-w-[650px]'>
                <div className='px-3 py-5'>
                    <div className='grid grid-cols-3 items-center lg:flex lg:grid-cols-none lg:justify-between'>
                        <div className=''>
                            <button
                                className='lg:hidden'
                                onClick={() => {
                                    !isOpen
                                        ? setIsOpen(true)
                                        : setIsOpen(false);
                                }}
                            >
                                <Image
                                    src={
                                        isOpen
                                            ? '/images/close-button.svg'
                                            : '/images/menu-button.svg'
                                    }
                                    width={32}
                                    height={32}
                                    alt='Menu button'
                                />
                            </button>
                            <Link href='/'>
                                <Image
                                    src='/images/the-5th-beatle-logo.svg'
                                    alt='The 5th Beatle Logo - Kevin Ward'
                                    width={40}
                                    height={40}
                                    className='hidden lg:inline-block hover:scale-105 duration-500 ease'
                                />
                            </Link>
                        </div>
                        <div className='text-center'>
                            <Link href='/'>
                                <Image
                                    src='/images/the-5th-beatle-logo.svg'
                                    alt='The 5th Beatle Logo - Kevin Ward'
                                    width={40}
                                    height={40}
                                    className='inline-block lg:hidden hover:scale-105 duration-500 ease'
                                />
                            </Link>
                            <div className='hidden items-center lg:flex'>
                                <div className='pr-5 font-recoleta font-bold lg:pr-20 hover:text-green'
                                >
                                    <Link href='/#anchor-cs'>Work</Link>
                                </div>
                                <div className='pr-5 font-recoleta font-bold lg:pr-20 hover:text-green'
                                    onClick={closeMenu}
                                >
                                    <Link href='/about'>About</Link>
                                </div>
                                <div className='font-recoleta font-bold hover:text-green'>
                                    <a
                                        target='_blank'
                                        href='https://drive.google.com/file/d/1N1IttPv_fevsnSUZ5rXSlU0xVCEWgntp/view'
                                    >
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='text-right'>
                            <a
                                href='mailto:kevinis@the5thbeatle.com'
                                className='inline-block rounded bg-purple px-4 py-2 font-recoleta font-semibold text-white hover:bg-mediumPurple duration-500 ease'
                            >
                                Let&apos;s Jam
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter='transition-opacity duration-75'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration-150'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <div
                    className='fixed top-[86px] h-full w-full bg-menu-bg'
                    aria-hidden='true'
                />
                <div className='fixed top-[86px] mt-[68px] w-screen justify-center px-3  pt-5'>
                    <div className='grid grid-cols-1 gap-4 pt-5 text-center'
                        onClick={closeMenu}>
                        <div>
                            <Link
                                href='/#anchor-cs'
                                className='font-recoleta text-3xl font-semibold text-white'
                            >
                                Work
                            </Link>
                        </div>
                        <div>
                            <Link
                                href='/about'
                                className='font-recoleta text-3xl font-semibold text-white'
                            >
                                About
                            </Link>
                        </div>
                        <div>
                            <a
                                target='_blank'
                                href='https://drive.google.com/file/d/1N1IttPv_fevsnSUZ5rXSlU0xVCEWgntp/view'
                                className='font-recoleta text-3xl font-semibold text-white'
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </Transition>
        </header>
    );
}
