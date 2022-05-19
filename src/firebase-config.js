import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmFAp6XHxL9Jd578I-TCrFrYqdJ6V0Ycs",
  authDomain: "authentication-927f7.firebaseapp.com",
  projectId: "authentication-927f7",
  storageBucket: "authentication-927f7.appspot.com",
  messagingSenderId: "35667369528",
  appId: "1:35667369528:web:c8e93302ec96961ea150cd",
  measurementId: "G-HB26647SRL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
