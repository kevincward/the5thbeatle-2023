import Image from 'next/image';

export default function TextBlockTwo(props) {
    const { kicker, title, content, image } = props;
    return (
        <div className='container pt-6'>
            <div className='flex flex-col items-center lg:flex-row lg:gap-12'>
                <div className='hidden lg:block lg:basis-1/2'>
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className='rounded-lg'
                    />
                    {image.caption && image.caption !== '' ? (
                        <div className='block pt-2 text-center text-sm text-gray'>
                            {image.caption}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className='lg:basis-1/2'>
                    {kicker && kicker !== '' ? (
                        <p className='pb-2 text-xs uppercase text-gray'>
                            Kicker
                        </p>
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

                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className='rounded-lg lg:hidden'
                    />
                    {image.caption && image.caption !== '' ? (
                        <div className='block pt-2 text-center text-sm text-gray lg:hidden'>
                            {image.caption}
                        </div>
                    ) : (
                        ''
                    )}

                    {content && content !== '' ? (
                        <p className='my-3 text-base'>{content}</p>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}
