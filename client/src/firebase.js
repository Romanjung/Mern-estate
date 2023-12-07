// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-state-55966.firebaseapp.com",
    projectId: "mern-state-55966",
    storageBucket: "mern-state-55966.appspot.com",
    messagingSenderId: "668078575698",
    appId: "1:668078575698:web:ca7831be3d738d27148f8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);