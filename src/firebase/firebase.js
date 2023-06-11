// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.DB_PASSWORD,
  authDomain: "pr4ucamp.firebaseapp.com",
  projectId: "pr4ucamp",
  storageBucket: "pr4ucamp.appspot.com",
  messagingSenderId: "306300243861",
  appId: "1:306300243861:web:2dcc4ab1021c7ecbdd709c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export 
const db = getFirestore(app)

export {db}