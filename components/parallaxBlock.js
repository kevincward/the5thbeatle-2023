export default function ParallaxBlock(props) {
    const { image, bgColor } = props;
    return (
        <div
            className='flex h-screen items-center justify-center bg-cover bg-fixed bg-center lg:h-[408px] lg:bg-contain'
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: bgColor,
            }}
        ></div>
    );
}
