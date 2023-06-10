// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFireStore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.DB_PASSWORD,
  authDomain: "pr4backend.firebaseapp.com",
  projectId: "pr4backend",
  storageBucket: "pr4backend.appspot.com",
  messagingSenderId: "566073560394",
  appId: "1:566073560394:web:55f2bbb4684375dcf705b3",
  measurementId: "G-80XVJ8YZ8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export 
const db = getFireStore(app)

export {db}