// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginsignup-83773.firebaseapp.com",
  projectId: "loginsignup-83773",
  storageBucket: "loginsignup-83773.firebasestorage.app",
  messagingSenderId: "800072638687",
  appId: "1:800072638687:web:8d4b748c629e3d8cf2c96a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
