// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANAcfXpkYFql0GrCGanSo1Gw8WaMcUTfg",
  authDomain: "rawdhati-6fcae.firebaseapp.com",
  projectId: "rawdhati-6fcae",
  storageBucket: "gs://rawdhati-6fcae.appspot.com",
  messagingSenderId: "538519051315",
  appId: "1:538519051315:web:77644807e2ba751b411746",
  measurementId: "G-E3RKFLTL1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


