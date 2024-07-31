// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKaKlcR-gIWiGJPhKAGZKTtcLKC_T5NOU",
  authDomain: "cinemai-c1411.firebaseapp.com",
  projectId: "cinemai-c1411",
  storageBucket: "cinemai-c1411.appspot.com",
  messagingSenderId: "404408477255",
  appId: "1:404408477255:web:b307bddc1fd8dde9f63362",
  measurementId: "G-W23KGFGM8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();