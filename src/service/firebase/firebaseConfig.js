import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5rSRkRENkwIcQg_N_Zr9ChdHOVGXgwtc",
    authDomain: "ecommence-fbd1a.firebaseapp.com",
    projectId: "ecommence-fbd1a",
    storageBucket: "ecommence-fbd1a.appspot.com",
    messagingSenderId: "240091101568",
    appId: "1:240091101568:web:2620b8c8753bdef31ba965",
    measurementId: "G-DP0E4R5SJ0"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)