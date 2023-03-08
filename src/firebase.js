//Setting firebase for our chat-app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWuZNP-s9e4XcPpHhdfUIiww0jTN0p3bQ",
  authDomain: "e2echatapp-bdf44.firebaseapp.com",
  projectId: "e2echatapp-bdf44",
  storageBucket: "e2echatapp-bdf44.appspot.com",
  messagingSenderId: "658651312179",
  appId: "1:658651312179:web:d1e56632a045c29af37346",
  measurementId: "G-C1QPV58TC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {auth, db};