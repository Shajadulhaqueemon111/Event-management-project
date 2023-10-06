import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import { auth } from '../../Components/Firebase.config';

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
        <button onClick={()=>handelLogins(googleLogin)} className='btn btn-secondary'>Google</button>
       </div>
       
       </>
    );
};

export default GoogleLogin;