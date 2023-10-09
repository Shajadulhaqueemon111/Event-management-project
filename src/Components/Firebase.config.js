// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN ,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env. VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env. VITE_MESSAGINGSENDERID, 
  appId:import.meta.env.VITE_APPID
  // apiKey: "AIzaSyBX2mNqKND87QkYhgcVzoXg92NJz1pCeYk",
  // authDomain: "event-management-auth-1a138.firebaseapp.com",
  // projectId: "event-management-auth-1a138",
  // storageBucket: "event-management-auth-1a138.appspot.com",
  // messagingSenderId: "314043649311",
  // appId: "1:314043649311:web:5f39d2997b3ef6eb03342a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);