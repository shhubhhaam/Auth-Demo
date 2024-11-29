import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCWMDMN9D-4mmGIpfdMRL9SikyCTZGyhcM",
  authDomain: "login-auth-4d02d.firebaseapp.com",
  projectId: "login-auth-4d02d",
  storageBucket: "login-auth-4d02d.firebasestorage.app",
  messagingSenderId: "895153079224",
  appId: "1:895153079224:web:4d7a439dd2f9850fc8c54d",
  measurementId: "G-69GLXJ23VZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(); 
export const db = getFirestore();

