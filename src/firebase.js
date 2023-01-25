// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { dblClick } from "@testing-library/user-event/dist/click";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjvcnASfb1c8LDCE-3tMGjaqsHeOJgXH0",
  authDomain: "login-firebase-11add.firebaseapp.com",
  projectId: "login-firebase-11add",
  storageBucket: "login-firebase-11add.appspot.com",
  messagingSenderId: "86436364563",
  appId: "1:86436364563:web:8354f09bb0276545279ae6",
  measurementId: "G-2VXZ9ENVNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default dbl