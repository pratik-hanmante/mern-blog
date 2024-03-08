// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-33643.firebaseapp.com",
  projectId: "mern-blog-33643",
  storageBucket: "mern-blog-33643.appspot.com",
  messagingSenderId: "283595910735",
  appId: "1:283595910735:web:95064c8ca458d478d7c43a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

