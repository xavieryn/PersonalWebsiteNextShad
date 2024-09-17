// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT35FOsZlffg7mWimK0yUx5lkXSdXDiBc",
  authDomain: "personalwebsite-52918.firebaseapp.com",
  databaseURL: "https://personalwebsite-52918-default-rtdb.firebaseio.com",
  projectId: "personalwebsite-52918",
  storageBucket: "personalwebsite-52918.appspot.com",
  messagingSenderId: "270671967352",
  appId: "1:270671967352:web:79276f9c55efb85803e98d",
  measurementId: "G-1H17N41FPM"
};


// Initialize Firebase
const cong = initializeApp(firebaseConfig);

export default cong;
// Now you can use Firebase services in your React app!