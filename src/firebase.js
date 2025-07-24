// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsGr42igwXAhJwqHY0Mo5IiC3FIcaYA_Y",
  authDomain: "ept-rebranding-7e0a9.firebaseapp.com",
  projectId: "ept-rebranding-7e0a9",
  storageBucket: "ept-rebranding-7e0a9.firebasestorage.app",
  messagingSenderId: "345803584361",
  appId: "1:345803584361:web:10e392d69f52eab9a783f8",
  measurementId: "G-QXS31V5CDW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
