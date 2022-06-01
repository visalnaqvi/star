// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app" ;   
import { getAnalytics } from "firebase/analytics" ;   
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey : "AIzaSyBYCOb9evQhDWBWgsvIENV4OIYo4MWyBM8" , 
  authDomain : "education-website-stargate.firebaseapp.com" , 
  projectId : "education-website-stargate" , 
  storageBucket : "education-website-stargate.appspot.com" , 
  messagingSenderId : "760686422994" , 
  appId : "1:760686422994:web:d84531e3df8cb50b2e760b" , 
  measurementId : "G-RPXXR5ZW7G" 
};

// Initialize Firebase
const app = initializeApp ( firebaseConfig );

export default app;

