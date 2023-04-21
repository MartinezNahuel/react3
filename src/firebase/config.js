
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABjNBUxmMxXOADmdR5xtzKU0xhMOQZcZA",
  authDomain: "react-martinez.firebaseapp.com",
  projectId: "react-martinez",
  storageBucket: "react-martinez.appspot.com",
  messagingSenderId: "361935457393",
  appId: "1:361935457393:web:ff832277db918e5a8a9fd0",
  measurementId: "G-NBZFP3G0TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
