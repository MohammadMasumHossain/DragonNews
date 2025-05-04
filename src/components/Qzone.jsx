import React from 'react';
import Swimming from '../assets/swimming.png'
import playground from '../assets/playground.png'
import Class from '../assets/class.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 '>
            <h2>Qzone</h2>
            <div className="space-y-5">
                <img src={Swimming} alt="" />
                <img src={playground} alt="" />
                <img src={Class} alt="" />
            </div>
        </div>
    );
};

export default Qzone;