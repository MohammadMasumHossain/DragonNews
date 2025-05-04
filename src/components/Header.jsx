import React from 'react';

import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-10'>
            <img className='w-[400px]'  src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            
            <p className='text-accent'>{format(new Date(), "EEEE , 	LLLL d , yyyy")}</p>
        </div>
    );
};

export default Header;