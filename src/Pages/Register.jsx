import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

  const {createUser,setUser} = use(AuthContext);

  const navigate =useNavigate();

  const handleRegister = (e) => {
        e.preventDefault();
        const form =e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,photo,email,password);
        createUser(email,password).then(result =>{
          const user=result.user;
          // console.log(user);
          setUser(user);
          navigate("/");
        }).catch((error) => {
         
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
  }
    return (
        <div className=' min-h-screen items-center flex  justify-center '>
         

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
    <p className='text-center font-semibold p-4'>Register your Account</p>
      <form  onSubmit={handleRegister} className="card-body">
       
        <fieldset className="fieldset">

        <label className="label">Name</label>
        <input type="text" name="name" className="input" placeholder="Enter yourr Name" />

        <label className="label">Photo Url</label>
        <input type="text" name="photo" className="input" placeholder=" url" />

        
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
      
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
          <p className='text-center mt-2 text-base '>Already have an account ? <Link to='/auth/login' className='text-secondary'>login</Link></p>
        </fieldset>
      </form>
    </div>
  </div>

    );
};

export default Register;