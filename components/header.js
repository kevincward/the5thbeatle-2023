import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='sticky top-0 z-[9] bg-white'>
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
                                    width={40}
                                    height={40}
                                    alt='Menu button'
                                />
                            </button>
                            <Image
                                src='/images/the-f5th-beetle-logo.svg'
                                alt='The 5th Beetle Logo - Kevin Ward'
                                width={40}
                                height={40}
                                className='hidden lg:inline-block'
                            />
                        </div>
                        <div className='text-center'>
                            <Image
                                src='/images/the-f5th-beetle-logo.svg'
                                alt='The 5th Beetle Logo - Kevin Ward'
                                width={40}
                                height={40}
                                className='inline-block lg:hidden'
                            />
                            <div className='hidden items-center lg:flex'>
                                <div className='pr-5 font-recoleta font-bold lg:pr-20'>
                                    <a>Work</a>
                                </div>
                                <div className='pr-5 font-recoleta font-bold lg:pr-20'>
                                    <Link href='/about'>About</Link>
                                </div>
                                <div className='font-recoleta font-bold'>
                                    <a href='https://drive.google.com/file/d/1N1IttPv_fevsnSUZ5rXSlU0xVCEWgntp/view'>
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='text-right'>
                            <a
                                href='mailto:kevinis@the5thbeatle.com'
                                className='hover:bg-purple-700 inline-block rounded bg-purple px-4 py-2 font-recoleta font-semibold text-white'
                            >
                                Let&apos;s Jam
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(true)}
                className='relative z-10'
            >
                <div className='fixed inset-0 bg-menu-bg' aria-hidden='true' />

                <div className='fixed inset-0 w-screen justify-center px-3 pt-5'>
                    <Dialog.Panel>
                        <div className='container relative z-50 lg:hidden'>
                            <div className='grid grid-cols-3'>
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
                                            width={40}
                                            height={40}
                                            alt='Menu button'
                                        />
                                    </button>
                                </div>
                                <div className='text-center'>
                                    <Image
                                        src='/images/the-f5th-beetle-logo.svg'
                                        alt='The 5th Beetle Logo - Kevin Ward'
                                        width={40}
                                        height={40}
                                        className='inline-block lg:hidden'
                                    />
                                </div>
                                <div className='text-right lg:basis-1/2'>
                                    <a
                                        href='mailto:kevinis@the5thbeatle.com'
                                        className='hover:bg-purple-700 inline-block rounded bg-purple px-4 py-2 font-recoleta font-semibold text-white'
                                    >
                                        Let&apos;s Jam
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-4 pt-5 text-center'>
                            <div>
                                <a className='text-3xl text-white'>Work</a>
                            </div>
                            <div>
                                <Link
                                    href='/about'
                                    className='text-3xl text-white'
                                >
                                    About
                                </Link>
                            </div>
                            <div>
                                <a className='text-3xl text-white'>Resume</a>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </header>
    );
}
