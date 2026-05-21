// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfwAcy9XagomuJ_hQPC23ZqFJYonsv8lQ",
  authDomain: "netflixgpt-d7816.firebaseapp.com",
  projectId: "netflixgpt-d7816",
  storageBucket: "netflixgpt-d7816.firebasestorage.app",
  messagingSenderId: "430857268671",
  appId: "1:430857268671:web:1ba00db65dddafaaabc50a",
  measurementId: "G-ENLVW2ZS2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
