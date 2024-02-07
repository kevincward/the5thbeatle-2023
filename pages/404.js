import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Custom404() {
    return (
        <>
            <div className='pt-10'></div>
            <div className='pl-3 lg:container lg:pl-0'>
                <p className='flex items-center justify-center font-recoleta text-3xl font-semibold'>You've discovered a hidden track</p>
            </div>
            <Spline scene="https://prod.spline.design/jKgkRBLbwOk2fLtJ/scene.splinecode" />

            <div className='flex justify-center'>
                <a
                    href='/#anchor-cs'
                    className='inline-block rounded bg-purple px-4 py-2 font-recoleta font-semibold text-white hover:bg-mediumPurple duration-500 ease'
                >
                    Check Out My Work
                </a>
            </div>

            <div className='pt-40'></div>
        </>
    );
}