import { useState } from 'react';
import Image from 'next/image';
import Sticky from 'react-stickynode';

export default function SecondaryNav(props) {
    const [activeSection, setActiveSection] = useState('section-1');
    const {
        sectionOneTitle,
        sectionTwoTitle,
        sectionThreeTitle,
        sectionFourTitle,
    } = props;

    return (
        <Sticky top='header' bottomBoundary='main'>
            <div className={`bg-white py-6`}>
                <div className='grid auto-cols-max grid-flow-col overflow-x-auto lg:place-content-center'>
                    <div>
                        <a
                            className={`inline-block grow px-4 lg:px-6 ${
                                activeSection === 'section-1'
                                    ? 'font-recoleta font-semibold'
                                    : 'font-light'
                            }`}
                            href='#section-1'
                            onClick={() => setActiveSection('section-1')}
                        >
                            <Image
                                src='/images/active-nav-image.svg'
                                alt='active sub nav link'
                                width={15}
                                height={14}
                                className={`mr-1 ${
                                    activeSection === 'section-1'
                                        ? 'inline'
                                        : 'hidden'
                                }`}
                            />
                            {sectionOneTitle && sectionOneTitle !== ''
                                ? sectionOneTitle
                                : 'Overview'}
                        </a>
                    </div>
                    <div>
                        <a
                            className={`px-4 lg:px-6 ${
                                activeSection === 'section-2'
                                    ? 'font-recoleta font-semibold'
                                    : 'font-light'
                            }`}
                            href='#section-2'
                            onClick={() => setActiveSection('section-2')}
                        >
                            <Image
                                src='/images/active-nav-image.svg'
                                alt='active sub nav link'
                                width={15}
                                height={14}
                                className={`mr-1 ${
                                    activeSection === 'section-2'
                                        ? 'inline'
                                        : 'hidden'
                                }`}
                            />
                            {sectionTwoTitle && sectionTwoTitle !== ''
                                ? sectionTwoTitle
                                : 'Challenge'}
                        </a>
                    </div>
                    <div>
                        <a
                            className={`px-4 lg:px-6 ${
                                activeSection === 'section-3'
                                    ? 'font-recoleta font-semibold'
                                    : 'font-light'
                            }`}
                            href='#section-3'
                            onClick={() => setActiveSection('section-3')}
                        >
                            <Image
                                src='/images/active-nav-image.svg'
                                alt='active sub nav link'
                                width={15}
                                height={14}
                                className={`mr-1 ${
                                    activeSection === 'section-3'
                                        ? 'inline'
                                        : 'hidden'
                                }`}
                            />
                            {sectionThreeTitle && sectionThreeTitle !== ''
                                ? sectionThreeTitle
                                : 'Approach'}
                        </a>
                    </div>
                    <a
                        className={`px-4 lg:px-6 ${
                            activeSection === 'section-4'
                                ? 'font-recoleta font-semibold'
                                : 'font-light'
                        }`}
                        href='#section-4'
                        onClick={() => setActiveSection('section-4')}
                    >
                        <Image
                            src='/images/active-nav-image.svg'
                            alt='active sub nav link'
                            width={15}
                            height={14}
                            className={`mr-1 ${
                                activeSection === 'section-4'
                                    ? 'inline'
                                    : 'hidden'
                            }`}
                        />
                        {sectionFourTitle && sectionFourTitle !== ''
                            ? sectionFourTitle
                            : 'Outcome'}
                    </a>
                </div>
            </div>
        </Sticky>
    );
}
