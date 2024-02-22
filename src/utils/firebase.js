
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGssgQ-P1hxj3ziWRrGvjdvsX8AZUim_A",
  authDomain: "netflixgpt-a1aab.firebaseapp.com",
  projectId: "netflixgpt-a1aab",
  storageBucket: "netflixgpt-a1aab.appspot.com",
  messagingSenderId: "804366608898",
  appId: "1:804366608898:web:cec1945d5eeb5174a1d51b",
  measurementId: "G-SG0T69NLLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();