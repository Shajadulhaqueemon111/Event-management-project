import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase.config';

export const AuthContext=createContext(null)

const provider = new GoogleAuthProvider();
const Authprovider = ({children}) => {

    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)


    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const UsersingOut=()=>{
        setLoading(true)
     return signOut(auth)
    }

    useEffect(()=>{
     
      onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })
    },[])


    const userSingUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const userSingIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
   

    const authInfo={
        googleLogin,
        userSingUp,
        userSingIn,
        UsersingOut,
        user,
        loading
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;