import { initializeApp } from "firebase/app";

export const environment = {
 production: false,
 firebaseConfig : {
  apiKey: "AIzaSyDJliRc6NKoq4eHp8Rt7N2vFAMW5vEzx_Y",
  authDomain: "nuria-instagram-app.firebaseapp.com",
  projectId: "nuria-instagram-app",
  storageBucket: "nuria-instagram-app.appspot.com",
  messagingSenderId: "771059342203",
  appId: "1:771059342203:web:36c2096f5f2fe512e8bbde"
}

};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);