import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
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
const auth = getAuth(app); // Get the Auth service

export { auth };
