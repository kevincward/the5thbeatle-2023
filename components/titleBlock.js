import titleBlockBg1 from '@/public/images/title-block-abstract-1.svg';
import titleBlockBg2 from '@/public/images/title-block-abstract-2.svg';
import titleBlockBg3 from '@/public/images/title-block-abstract-3.svg';

export function getRandomImageIndex() {
    return Math.floor(Math.random() * 3);
}

export default function TitleBlock(props) {
    const { kicker, title } = props;
    const randomImageIndex = getRandomImageIndex();

    // Use a switch statement to select the image based on the random index
    let selectedImage;
    switch (randomImageIndex) {
        case 0:
            selectedImage = titleBlockBg1;
            break;
        case 1:
            selectedImage = titleBlockBg2;
            break;
        case 2:
            selectedImage = titleBlockBg3;
            break;
        default:
            // Handle unexpected index
            selectedImage = titleBlockBg1; // Default to the first image
            break;
    }

    return (
        <div
            className='title-block bg-[right_bottom_-100px] py-24 lg:bg-right-bottom'
            style={{
                backgroundImage: `url(${selectedImage.src})`,
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
