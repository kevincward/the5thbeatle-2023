import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

export default function TextBlockOne(props) {
    const { kicker, title, aboveContent, belowContent, images } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='container pb-3'>
                {kicker && kicker !== '' ? (
                    <p className='pb-2 text-xs uppercase text-gray'>Kicker</p>
                ) : (
                    ''
                )}

                {title && title !== '' ? (
                    <p className='pb-3 font-recoleta text-3xl font-semibold'>
                        {title}
                    </p>
                ) : (
                    ''
                )}

                {aboveContent && aboveContent !== '' ? (
                    <p
                        className='mb-3 text-base'
                        dangerouslySetInnerHTML={{ __html: aboveContent }}
                    ></p>
                ) : (
                    ''
                )}

                <div className='flex gap-4'>
                    {Object.keys(images).map((key) => (
                        <Fragment key={key}>
                            <div>
                                <a onClick={() => setIsOpen(true)}>
                                    <Image
                                        src={images[key].desktop}
                                        alt={images[key].alt}
                                        width={images[key].desktopWidth}
                                        height={images[key].desktopHeight}
                                        className='hidden lg:block'
                                    />
                                </a>
                                <a onClick={() => setIsOpen(true)}>
                                    <Image
                                        src={images[key].mobile}
                                        alt={images[key].alt}
                                        width={images[key].mobileWidth}
                                        height={images[key].mobileHeight}
                                        className='lg:hidden'
                                    />
                                </a>
                                {images[key].caption &&
                                images[key].caption !== '' ? (
                                    <div className='block pt-2 text-center text-sm text-gray'>
                                        {images[key].caption}
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                            <Dialog
                                open={isOpen}
                                onClose={() => setIsOpen(false)}
                                className='relative z-50'
                            >
                                <div
                                    className='fixed inset-0 bg-black/30'
                                    aria-hidden='true'
                                />
                                <div className='fixed inset-0 flex w-screen flex-col items-center justify-center p-4'>
                                    <div className='absolute right-3 top-3'>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Image
                                                src='/images/close-button.svg'
                                                width={40}
                                                height={40}
                                                alt='Close button'
                                            />
                                        </button>
                                    </div>

                                    <Dialog.Panel>
                                        <Image
                                            src={images[key].desktop}
                                            alt={images[key].alt}
                                            width={images[key].desktopWidth}
                                            height={images[key].desktopHeight}
                                            className='hidden lg:block'
                                        />
                                        <Image
                                            src={images[key].mobile}
                                            alt={images[key].alt}
                                            width={images[key].mobileWidth}
                                            height={images[key].mobileHeight}
                                            className='lg:hidden'
                                        />
                                    </Dialog.Panel>
                                </div>
                            </Dialog>
                        </Fragment>
                    ))}
                </div>

                {belowContent && belowContent !== '' ? (
                    <p
                        className='pt-1 text-base'
                        dangerouslySetInnerHTML={{ __html: belowContent }}
                    ></p>
                ) : (
                    ''
                )}
            </div>
        </>
    );
}
