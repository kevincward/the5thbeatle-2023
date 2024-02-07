import React from 'react';
import Spline from '@splinetool/react-spline';
import Link from 'next/link';

export default function Custom404() {
    return (
        <>
            <div className='pt-10'></div>
            <div className='pl-3 lg:container lg:pl-0'>
                <p className='flex items-center justify-center font-recoleta text-3xl font-semibold'>You&lsquo;ve discovered a hidden track</p>
                <Link href="/">
                    <a>homepage</a>
                </Link>
            </div>


            <div className='pt-80'></div>
        </>
    );
}