import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className='container absolute z-50 px-3 pt-5 lg:px-80'>
                <div className='grid grid-cols-3'>
                    <div className=''>
                        <button
                            className='lg:hidden'
                            onClick={() => {
                                !isOpen ? setIsOpen(true) : setIsOpen(false);
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
                            className='hidden'
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
                        <div className='hidden  items-center lg:flex'>
                            <div className='basis-1/4 font-recoleta font-bold'>
                                Work
                            </div>
                            <div className='basis-1/4 font-recoleta font-bold'>
                                About
                            </div>
                            <div className='basis-1/4 font-recoleta font-bold'>
                                Resume
                            </div>
                        </div>
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

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(true)}
                className='relative z-10'
            >
                <div className='bg-menu-bg fixed inset-0' aria-hidden='true' />
                <div className='container absolute z-50 px-3 pt-5 lg:hidden'>
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
                <div className='fixed inset-0 flex w-screen justify-center p-4'>
                    <Dialog.Panel>
                        <div className='grid grid-cols-1 gap-4 pt-20 text-center'>
                            <div>
                                <a className='text-3xl text-white'>Work</a>
                            </div>
                            <div>
                                <a className='text-3xl text-white'>About</a>
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
