export default function ParallaxBlock(props) {
    const { image, bgColor } = props; // Add a bgColor prop to accept the background color
    return (
        <div
            className='flex h-[408px] items-center justify-center bg-cover bg-fixed bg-center lg:bg-contain'
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: bgColor,
            }}
        ></div>
    );
}
