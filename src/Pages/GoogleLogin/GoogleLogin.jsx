import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import { auth } from '../../Components/Firebase.config';
import { FcGoogle } from 'react-icons/Fc';

const GoogleLogin = () => {
    const {googleLogin}=useContext(AuthContext) 
    
    

    const handelLogins=(media)=>{
            media()
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });

    }
    return (
       <>
       <div className='text-center'>
        <button onClick={()=>handelLogins(googleLogin)} className='btn btn-ghost font-bold text-xl'>
            <FcGoogle></FcGoogle>Google</button>
       </div>
       
       </>
    );
};

export default GoogleLogin;