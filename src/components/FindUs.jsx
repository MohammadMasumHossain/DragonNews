import React from 'react';
import { FaFacebook, FaInstagram, FaTwitch } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className="join join-vertical w-full ">
             <button className="btn join-item justify-start gap-4"> <FaFacebook></FaFacebook>Facebook</button>
             <button className="btn join-item justify-start gap-4"> <FaTwitch></FaTwitch>Twitter</button>
             <button className="btn join-item justify-start gap-4"> <FaInstagram></FaInstagram>Instragram</button>
            </div>

        </div>
    );
};

export default FindUs;