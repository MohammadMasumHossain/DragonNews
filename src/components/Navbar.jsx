import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import usericon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut}= use(AuthContext);

    const handleLogout=()=>{
        console.log("succeffully logout");
        logOut().then(()=>{
           alert("singOut SUCCeffully") ;
        }).catch((error)=>{
           console.log(error);
        })
    }
    return (
        <div className='flex justify-between items-center '>
            
            <div> {user && user.email } </div>
            <div className="nav flex gap-5 text-accent">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/">Career</NavLink>
            </div>
            <div className='flex gap-5'>
               <img src={usericon} alt="" /> 
               {
                user ? <button onClick={handleLogout} className='btn btn-primary '>Logout</button>:  <Link to='/auth/login' className='btn btn-primary px-10 py-2'>Login</Link>
               }
              
            </div>
        </div>
    );
};

export default Navbar;