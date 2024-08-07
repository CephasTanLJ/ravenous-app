import React from 'react';
import Image  from 'next/image';
import { buildCustomRoute } from 'next/dist/server/lib/router-utils/filesystem';
import { styleText } from 'util';

export interface BusinessProps {
    image: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    category: string;
    rating?: number;
    reviewCount?: number;

}

const stylingTemp = {
}

export default function Business({businessDetails} : {businessDetails: BusinessProps}) {
    return (<div key={businessDetails.name +businessDetails.zipcode} className='flex flex-col font-sans m-4 w-4/12 min-w-[220px] max-w-[230px] h-[400px] min-h-[200px] p-2 bg-white hover:bg-[rgb(209,151,35)] hover:text-white hover:cursor-pointer' style={stylingTemp}>
        <div className='relative h-[70%]'>
            <Image
                src={businessDetails.image}
                alt={`${businessDetails.name} restaurant`}
                fill
                sizes='100%'
                style={stylingTemp}
            />

        </div>
        
        <div style={stylingTemp} className='min-h-[100px] h-[30%] align-baseline'>
            <h1 className='font-bold text-lg text-wrap max-h-10 min-w-[200px]' >{businessDetails.name}</h1>

            <div id='restaurantInfo' className="flex text-sm">
                
                <div id="restaurantLocation" className='justify-items-start w-8/12' >
                    <p className='text-[0.9em]'>{businessDetails.address}</p>
                    <p className='text-[0.9em]'>{businessDetails.city}</p>
                    <p className='text-[0.8em]'>{`${businessDetails.state} ${businessDetails.zipcode}`}</p>
                </div>
                
                <div id="restaurantMisc" className='justify-items-end text-right w-4/12' >
                    <p className='text-[1.5em] font-semibold text-yellow-600'>{businessDetails.category}</p>
                    <p className='text-[1em] font-semibold text-yellow-600'>{ `${businessDetails.rating} stars`}</p>
                    <p className='text-[0.8em]'>{ `${businessDetails.reviewCount} reviews`}</p>
                </div>
            </div>

        </div>
        
    </div>)
}