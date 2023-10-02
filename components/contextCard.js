export default function ContextCard(props) {
    const { titleColor, textColor, backgroundColor, content } = props;

    return (
        <div className='container py-6'>
            <div
                className='rounded-lg p-8'
                style={{ backgroundColor: backgroundColor }}
            >
                {content.kicker && content.kicker !== '' ? (
                    <p
                        style={{ color: titleColor }}
                        className='pb-6 text-xs uppercase'
                    >
                        {content.kicker}
                    </p>
                ) : (
                    ''
                )}

                <p
                    className='pb-6 text-lg '
                    style={{ color: textColor }}
                    dangerouslySetInnerHTML={{ __html: content.description }}
                ></p>
                <div className='flex-column flex flex-wrap lg:flex-row'>
                    <div className='basis-full lg:basis-1/2'>
                        <div className='pb-6 lg:pr-6'>
                            <p className='pb-2' style={{ color: titleColor }}>
                                My Role
                            </p>
                            <p
                                className='pb-1  text-sm lg:text-base'
                                style={{ color: textColor }}
                            >
                                {content.title}
                            </p>
                            <p className='text-xs text-gray'>
                                {content.titleDescription}
                            </p>
                        </div>
                    </div>
                    <div className='basis-full lg:basis-1/4'>
                        <p className='pb-2' style={{ color: titleColor }}>
                            Teammates
                        </p>
                        <p
                            className='pb-2 text-sm lg:text-base'
                            style={{ color: textColor }}
                        >
                            {content.teammates}
                        </p>
                    </div>
                    <div className='basis-full lg:basis-1/4'>
                        <p className='pb-2' style={{ color: titleColor }}>
                            Timeline
                        </p>
                        <p
                            className=' text-sm lg:text-base'
                            style={{ color: textColor }}
                        >
                            {content.timeline}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
