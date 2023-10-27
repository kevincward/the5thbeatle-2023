import Image from 'next/image';

export default function Timeline(props) {
    const { titles, image, timelines } = props;

    return (
        <div className='container pt-6'>
            <div className='lg:flex items-center lg:gap-12'> {/* Apply lg:flex to create a two-column layout on larger screens */}
                <div className='mb-4 flex flex-col lg:w-1/2'> {/* Apply lg:w-1/2 to create a two-column layout on larger screens */}
                    {titles.map((title, index) => (
                        title && title !== '' ? (
                            <p key={index} className='font-recoleta text-3xl font-semibold pb-3' dangerouslySetInnerHTML={{ __html: title }}></p>
                        ) : null
                    ))}

                    {timelines.map((timeline, index) => (
                        <div key={index} className='flex flex-col'>
                            <Image src={timeline.logoSrc} alt='Logo' width={timeline.logoWidth} height={timeline.logoHeight} />
                            <p className='font-recoleta text-xl pb-0 pt-3'>{timeline.company}</p>
                            <div className="flex items-center justify-between pb-2">
                                <p className='text-sm text-gray'>{timeline.bodyLeft}</p>
                                <p className='text-sm text-right text-gray'>{timeline.bodyRight}</p>
                            </div>
                            <div className='border-t border-line_gray py-2'></div>
                        </div>
                    ))}
                </div>
                <div className='lg:w-1/2'>
                    <Image
                        src={image.url}
                        width={536}
                        height={605}
                        alt={image.alt}
                        className='rounded-lg'
                    />
                </div>
            </div>
        </div>
    );
}
