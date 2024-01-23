// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmQVMfL4ZmcvZqDUZOHO970zjFCAplW14",
  authDomain: "foodvillaapp-689ef.firebaseapp.com",
  projectId: "foodvillaapp-689ef",
  storageBucket: "foodvillaapp-689ef.appspot.com",
  messagingSenderId: "35033004814",
  appId: "1:35033004814:web:f4b9121656c926bbb2b55f",
  measurementId: "G-JTDJNC6MPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
