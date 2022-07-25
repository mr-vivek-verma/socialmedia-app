import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// firebase config here

const firebaseConfig = {
  apiKey: "AIzaSyBPVr53k41ERiPw26p54CrJ1BgOf-ydVKo",
  authDomain: "socialmedia-app-c52c9.firebaseapp.com",
  projectId: "socialmedia-app-c52c9",
  storageBucket: "socialmedia-app-c52c9.appspot.com",
  messagingSenderId: "939990277231",
  appId: "1:939990277231:web:0406b2291fcfafc290819a",
  measurementId: "G-LV3XRXJVLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize services
const auth = getAuth(app);
export const storage = getStorage()
export const db = getFirestore(app);


export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
