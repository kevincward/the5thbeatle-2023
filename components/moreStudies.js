import Image from 'next/image';
import moreStudiesBg1 from '@/public/images/more-studies-abstract-1.svg';
import moreStudiesBg2 from '@/public/images/more-studies-abstract-2.svg';
import moreStudiesBg3 from '@/public/images/more-studies-abstract-3.svg';

export function getRandomImageIndex() {
    return Math.floor(Math.random() * 3);
}


export default function moreStudies(props) {
    const { title, caseStudies } = props;
    const randomImageIndex = getRandomImageIndex();

    let selectedImage;
    switch (randomImageIndex) {
        case 0:
            selectedImage = moreStudiesBg1;
            break;
        case 1:
            selectedImage = moreStudiesBg2;
            break;
        case 2:
            selectedImage = moreStudiesBg3;
            break;
        default:
            // Handle unexpected index
            selectedImage = titleBlockBg1; // Default to the first image
            break;
    }

    return (
        <div
            className='bg-left-bottom py-12'
            style={{
                backgroundImage: `url(${selectedImage.src})`,
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='pl-3 lg:container lg:pl-0'>
                <p className='font-recoleta text-3xl font-semibold'>{title}</p>

                <div className='flex gap-2 overflow-x-auto lg:grid lg:grid-cols-2 lg:flex-row lg:flex-wrap lg:gap-4 lg:overflow-x-hidden'>
                    {Object.keys(caseStudies).map((key) => (
                        <div className='p-2' key={key}>
                            <div className='case-study-card w-[278px] rounded bg-white p-6 shadow-md lg:w-auto transform hover:scale-103 transition-transform duration-300'>
                                <p className='pb-8 lg:pb-10'>
                                    <a className='font-recoleta text-[1.3125rem] font-semibold leading-5 lg:text-2xl'
                                        href={caseStudies[key].url}>
                                        {caseStudies[key].title}
                                    </a>
                                </p>
                                <p className='pb-2 font-recoleta text-xl text-gray lg:pb-4'>
                                    {caseStudies[key].company}
                                </p>
                                <div className='mb-2 h-[1px] w-[5.0625rem] bg-orange lg:mb-4'></div>
                                <a
                                    className='font-recoleta font-semibold text-purple group'
                                    href={caseStudies[key].url}
                                >
                                    View Project{' '}
                                    <Image
                                        className='inline-block group-hover:translate-x-1 transition-transform'
                                        src='/images/ic_arrow.svg'
                                        alt='view project'
                                        height={24}
                                        width={24}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
