import firebase from "firebase/compat/app";

import Firestore from "./Firestore";

const config = {
  apiKey: "AIzaSyBZA9u1NyUyA2aWEltYwguVMoVEry9gzlE",
  authDomain: "visitcedarcity-backend.firebaseapp.com",
  projectId: "visitcedarcity-backend",
  storageBucket: "visitcedarcity-backend.appspot.com",
  messagingSenderId: "449734764848",
  appId: "1:449734764848:web:bbb05df8f855c0c69740f5",
  measurementId: "G-3GWY8B1CE8",
};

firebase.initializeApp(config);

const Firebase = {
    Firestore
};

export default Firebase;
