// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3waoD_W6Nl7no9E_k1YQhK7obtPP9yh4",
  authDomain: "pocacademy-fcf1f.firebaseapp.com",
  projectId: "pocacademy-fcf1f",
  storageBucket: "pocacademy-fcf1f.appspot.com",
  messagingSenderId: "622755338144",
  appId: "1:622755338144:web:e34a42f7953cee7049f6c5",
  measurementId: "G-Q0XD6GYDMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)