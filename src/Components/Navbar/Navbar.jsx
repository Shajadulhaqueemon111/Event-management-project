import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../AuthProvider/Authprovider';
import { auth } from '../Firebase.config';
import './Navbar.css'; 
const Navbar = () => {

  const {UsersingOut,user}=useContext(AuthContext)

    const navLink=<>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/apply-courses'>Applyed Details</NavLink></li>
    <li><NavLink to='/about'>Blog</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    
    </>
      const handelLogOut=()=>{
        UsersingOut(auth)
        .then(res=>{
          console.log(res)
        })
        .catch(error=>{
          console.log(error)
        })
      }
    return (
        <div className='glass-bg'>
            <div className="navbar bg-base-100   ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLink}
       
      </ul>
    </div>
    <a className="btn btn-gost normal-case text-xl font-bold">
      <h2 className='text-xl font-bold'>Training <span className='text-blue-500'>Programs</span></h2>
    {/* <img className='h-20 w-30' src="https://i.ibb.co/V3mdKXX/images-5.jpg" alt="" /> */}
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
  
                {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJOY0BBgN_Sft0Kih19fAqmbHgLIW6a3CkwWLXfcXC28bQ=s96-c" alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p >MdShajdul Haque Emon</p>

                                </li>
                                <li>

                                    <button onClick={handelLogOut} className="btn btn-sm mt-5  btn-secondary">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
               
              
  </div>
</div>
        </div>
    );
};

export default Navbar;