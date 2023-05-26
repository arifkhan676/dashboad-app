// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChPsMovvEcDjYJ1auyhCkwz16YEqM8jPk",
  authDomain: "dashboard-80d3d.firebaseapp.com",
  projectId: "dashboard-80d3d",
  storageBucket: "dashboard-80d3d.appspot.com",
  messagingSenderId: "230656228065",
  appId: "1:230656228065:web:15064490ebfb61d155d5a0",
  measurementId: "G-XMC0MWVV08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFireStore(app); 