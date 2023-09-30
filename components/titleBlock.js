import titleBlockBg from '@/public/images/title-block-abstract.svg';

export default function TitleBlock(props) {
    const { kicker, title } = props;

    return (
        <div
            className='title-block bg-[right_bottom_-100px] py-24 lg:bg-right-bottom'
            style={{
                backgroundImage: `url(${titleBlockBg.src})`,
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='container'>
                {kicker !== '' && kicker ? (
                    <p className='mb-3 text-sm text-gray'>{kicker}</p>
                ) : (
                    ''
                )}
                <h1 className='font-recoleta text-[2.125rem] font-semibold leading-[3rem] lg:text-[2.75rem] lg:leading-[3.3rem]'>
                    {title}
                </h1>
            </div>
        </div>
    );
}
