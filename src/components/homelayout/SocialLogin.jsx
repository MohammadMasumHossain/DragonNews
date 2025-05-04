import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiRefinedgithub } from 'react-icons/si';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'> <FcGoogle size={25}/> Login With Google</button>

                <button className='btn  btn-outline btn-primary w-full'> <SiRefinedgithub  size={25} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;