import React, { useState } from 'react';
import Image from 'next/image';

type CardProps = {
    value: number,
    data: any,
    order: number
}

export default function Card(props: CardProps) {
    const [toggle, setToggle] = useState<boolean>(false);
    const toggleBanner = () => setToggle(!toggle);
    return <>
        <a href="#" className="relative block max-w-sm p-12 bg-white border border-gray-200 shadow hover:bg-gray-100" style={{
            backgroundImage: `url("${props.data?.thumbnailSrc}")`,
            backgroundSize: '100% 100%',
            order: props.order
        }} onClick={toggleBanner}>
            &nbsp;<span className={`absolute top-3 right-5 font-bold ${props.data != null ? "bg-blue-900 text-white rounded-full px-3 py-1" : ""}`}>{props.value}</span>
        </a>
        {
            props.data && toggle && <div className='col-span-7 p-11' style={{
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