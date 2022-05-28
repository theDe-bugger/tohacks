// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALuFs1_O3S7yV6WklZRPVJDcdZc8EfH1s",
  authDomain: "open-585f0.firebaseapp.com",
  projectId: "open-585f0",
  storageBucket: "open-585f0.appspot.com",
  messagingSenderId: "862392860616",
  appId: "1:862392860616:web:1fa2af90170d88bfdd0afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

