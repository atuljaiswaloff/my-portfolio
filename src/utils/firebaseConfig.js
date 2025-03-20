// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

// Firebase configuration (tumhara firebaseConfig yaha paste karo)
const firebaseConfig = {
  apiKey: "AIzaSyB6jU8zY7hoG1T01DVzIMulCI66tx67Te0",
  authDomain: "my-testimonials-0.firebaseapp.com",
  projectId: "my-testimonials-0",
  storageBucket: "my-testimonials-0.firebasestorage.app",
  messagingSenderId: "209598363052",
  appId: "1:209598363052:web:3f34bcdf3a22db6a6f3609",
  measurementId: "G-XPZZ88BM0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp, getDocs };
