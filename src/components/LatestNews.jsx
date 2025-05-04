import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex p-3 items-center gap-4 bg-base-200'>
            <p className='bg-secondary px-3 py-2 text-base-100'>Latest</p>
            <Marquee className='  gap-3' pauseOnHover ={true} speed={60}>
            <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos assumenda delectus unde molestiae porro?</p>
            <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos assumenda delectus unde molestiae porro.?</p>
            </Marquee>
           
        </div>
    );
};

export default LatestNews;