import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUj8Vx3_Qj9mtVaGdMeZtlGiQS9s6G9HI",
  authDomain: "react-movie-search-5577c.firebaseapp.com",
  projectId: "react-movie-search-5577c",
  storageBucket: "react-movie-search-5577c.appspot.com",
  messagingSenderId: "291292413460",
  appId: "1:291292413460:web:1461d81e5b3130175ab101",
  measurementId: "G-CLLXHK3LXH"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
