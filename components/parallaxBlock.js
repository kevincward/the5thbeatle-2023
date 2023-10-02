export default function ParallaxBlock(props) {
    const { image } = props;
    return (
        <div
            className='flex h-[408px] items-center justify-center bg-cover bg-fixed bg-center lg:h-[408px] lg:bg-contain'
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
            }}
        ></div>
    );
}