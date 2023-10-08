import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from './GoogleLogin/GoogleLOgin';
import { AuthContext } from '../Components/AuthProvider/Authprovider';
import toast from 'react-hot-toast';

import swal from 'sweetalert';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css"
/>



const Register = () => {

  const {userSingUp}=useContext(AuthContext)
  const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

    const handleRegister=(e)=>{
        e.preventDefault()
        const name=e.target.name.value 
        const email=e.target.email.value 
        const password=e.target.password.value

        console.log(name,email,password)

        if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          setEmailError('Please enter a valid email address');
          return;
        } else {
          setEmailError('');
        }
    
        // Password Validation
        const passwordAuth = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        if (!passwordAuth.test(password)) {
          
         
          // setPasswordError('Password must be at least 8 characters long and include letters, numbers, and special characters.');
          toast.error("Password must be at least 8 characters long and include letters, numbers, and special characters.")
          return;
        }
       

        userSingUp(email,password)   
        .then(res=>{
          console.log(res)
          toast.success('Registration successful!');

        })
        .catch(error=>{
          console.log(error)
          
        })
    
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
          {emailError && (
                  <p className="text-xs text-red-600">{emailError}</p>
                )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
       
          <button className="btn btn-primary">Register</button>
          {
           <p>Already have an Account? Please
                    <Link className='text-xl text-red-500'  to='/login'>Login</Link>
           </p>
           
          }
        </div>
      </form>
      <GoogleLogin></GoogleLogin>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;