import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-text.png'
import { AuthContext } from '../AuthProvider/Authprovider';
import { auth } from '../Firebase.config';
const Navbar = () => {

  const {UsersingOut,user}=useContext(AuthContext)

    const navLink=<>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/courses'>Courses</NavLink></li>
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
        <div>
            <div className="navbar bg-base-100">
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
    Educational Conferences
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
  {/* {
              user?<button onClick={handelLogOut} className='btn btn-secondary'>Sing-Out</button>:
            
          <Link to='/login'>
          <button  className='btn btn-secondary'>Login</button>
          </Link>
               } */}
                {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p >{user.displayName}</p>

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