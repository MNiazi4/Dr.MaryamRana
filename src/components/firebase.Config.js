// firebase.config.jsx

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configu  ration
const firebaseConfig = {
  apiKey: "AIzaSyDMFxmCMnGklai1uT4-Crr2Es50byK2p9k",
  authDomain: "contact-14528.firebaseapp.com",
  projectId: "contact-14528",
  storageBucket: "contact-14528.firebasestorage.app",
  messagingSenderId: "913495751739",
  appId: "1:913495751739:web:882fecc0f125194ace701e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app);

export { db };
