import React, { useState } from 'react';
import Image from 'next/image';

type CardProps = {
    value: number,
    data: any,
    order: number,
    show: boolean,
    handleOnClick: (index: number) => void
}

export default function Card(props: CardProps) {
    const toggleBanner = () => props.handleOnClick(props.value);
    return <>
        <div className="relative block max-w-sm bg-white border border-gray-200 shadow hover:bg-gray-100" style={{
            backgroundImage: `url("${props.data?.thumbnailSrc}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            order: props.order
        }} onClick={toggleBanner}>
            <span className={`absolute top-3 right-5 font-bold px-3 py-1 ${props.data != null ? "bg-blue-900 text-white rounded-full" : ""}`}>{props.value}</span>
            <img src="/hogwarts-legacy__1x1.webp" className='invisible' />
        </div>
        {
            props.data && props.show && <div className='col-span-7 p-11' style={{
                backgroundImage: `url("${props.data?.bannerSrc}")`,
                backgroundSize: '100% 100%',
                order: Math.floor(props.order/7 + 1) * 7
            }}>
                <div className='w-1/2'>
                    <div className='text-white text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sapien mi, eu posuere diam feugiat a. Aenean egestas massa nisi, bibendum rhoncus justo placerat a. Maecenas maximus, dolor vitae elementum viverra, augue mauris viverra urna, ut tempus arcu mi id ante. Phasellus vulputate purus quis enim commodo, nec cursus lectus auctor. In dui ante, bibendum id aliquet et, tristique vitae nisl. Vivamus accumsan pulvinar sapien, ultrices cursus orci laoreet ac. Aenean lorem orci
                    </div>
                    <div className='text-white text-base py-4'>Available Soon</div>
                    <div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Pre order now</button>
                    </div>
                    
                    
                </div>
            </div>
        }
    </>
}