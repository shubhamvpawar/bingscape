// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqE-DDaA1Vnuy8hSxCn2wnDJUWQvxjDCg",
    authDomain: "gptainment-8f8aa.firebaseapp.com",
    projectId: "gptainment-8f8aa",
    storageBucket: "gptainment-8f8aa.appspot.com",
    messagingSenderId: "1026479003115",
    appId: "1:1026479003115:web:eaf087f565989c022175ae",
    measurementId: "G-H3DP4E6VX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();