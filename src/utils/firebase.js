// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7tV7KeN_K-nRDCjtG6EkE-n5vxRvTXjs",
  authDomain: "netflix-gpt-3f116.firebaseapp.com",
  projectId: "netflix-gpt-3f116",
  storageBucket: "netflix-gpt-3f116.appspot.com",
  messagingSenderId: "679205893493",
  appId: "1:679205893493:web:80a7cfba4ed78aed1c0f3c",
  measurementId: "G-75M7L9J5W0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
