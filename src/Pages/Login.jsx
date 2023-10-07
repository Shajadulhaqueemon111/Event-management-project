import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin/GoogleLOgin';
import { AuthContext } from '../Components/AuthProvider/Authprovider';

const Login = () => {

  const {userSingIn}=useContext(AuthContext)
  const [emailError, setEmailError] = useState('');
  const location=useLocation()
 const navigate=useNavigate()

 console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Email Validation
    if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    // Password Validation
    const passwordAuth = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    if (!passwordAuth.test(password)) {
      toast.error('password does not match')
     
      return;
    }
   

    // If both email and password are valid, you can proceed with the login logic.
    console.log('Email:', email);
    console.log('Password:', password);
   
    userSingIn(email,password)  
    .then(res=>{
      console.log(res)
      toast.success("successfully login")
      navigate(location?.state?location.state:'/')
      // const previousPath = location?.state?.from || '/';
      // navigate(previousPath);
    })
    .catch(error=>{
      console.log(error)
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
       
        toast.error('Invalid email or password. Please try again.');
      } else {
        
        toast.error('Firebase: Error(auth/invalid-login-credentials)');
      }
    })

    
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
                {emailError && (
                  <p className="text-xs text-red-600">{emailError}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
               
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p>
                  Please Register?
                  <Link className="text-xl text-red-500" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
