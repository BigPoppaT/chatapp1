// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHw5mTQiM5FBAYgYNRFgdSDg_Wp8eaMzw",
  authDomain: "chatappt369.firebaseapp.com",
  projectId: "chatappt369",
  storageBucket: "chatappt369.appspot.com",
  messagingSenderId: "281406459835",
  appId: "1:281406459835:web:c5ce74b9e3ac81fbeb3e9e",
  measurementId: "G-QND631JHZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
