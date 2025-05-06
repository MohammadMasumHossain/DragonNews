import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

  const {signIn}=use(AuthContext);
  const [error,setError]=useState("")

  const location= useLocation();
  console.log(location);
  const navigate=useNavigate();


  const handleLogin =(e)=>{
      e.preventDefault();
      const form= e.target;
      const email=form.email.value;
      const password =form.password.value;

      signIn(email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        setError(errorCode);
      });
    

  }
    return (
        <div className='flex justify-center items-center min-h-screen '>
         
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
      <form onSubmit={handleLogin} className="card-body">
        <h2 className='text-2xl font-bold text-center'>Login your Account</h2>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" required />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password"  required />

          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error  && <p className='text-red-400'>{error}</p>
          }
          <button  type="submit" className="btn btn-neutral mt-4">Login</button>
          <p className='mt-2 text-center'>Dont’t Have An Account ? <Link className='text-secondary' to="/auth/register">Register</Link></p>
        </fieldset>
      </form>
    </div>
  </div>

    );
};

export default Login;