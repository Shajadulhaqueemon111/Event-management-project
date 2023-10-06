import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase.config';

export const AuthContext=createContext(null)

const provider = new GoogleAuthProvider();
const Authprovider = ({children}) => {

    const [user,setUser]=useState('')


    const googleLogin = ()=>{
        return signInWithPopup(auth,provider)
    }

    const UsersingOut=()=>{
     return signOut(auth)
    }

    useEffect(()=>{
      onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
      })
    },[])


    const userSingUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const userSingIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
   

    const authInfo={
        googleLogin,
        userSingUp,
        userSingIn,
        UsersingOut,
        user
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;