import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBZA9u1NyUyA2aWEltYwguVMoVEry9gzlE",
  authDomain: "visitcedarcity-backend.firebaseapp.com",
  projectId: "visitcedarcity-backend",
  storageBucket: "visitcedarcity-backend.appspot.com",
  messagingSenderId: "449734764848",
  appId: "1:449734764848:web:bbb05df8f855c0c69740f5",
  measurementId: "G-3GWY8B1CE8",
};

// firebase products
const firebaseApp = initializeApp(config);
const f_db = getFirestore(firebaseApp);

// firestore queries
const brianDoc = doc(f_db, "BrianHeadWeatherDayData", "current");
const paroDoc = doc(f_db, "ParowanWeatherDayData", "current");
const cedarDoc = doc(f_db, "CedarCityWeatherDayData", "current");

// firestore functions
export async function getBrianHeadWeather() {
  return new Promise(async (resolve, reject) => {
    await getDoc(brianDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        resolve(docSnap.data());
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export async function getParoWeather() {
  return new Promise(async (resolve, reject) => {
    await getDoc(paroDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        resolve(docSnap.data());
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export async function getCedarWeather() {
  return new Promise(async (resolve, reject) => {
    await getDoc(cedarDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        resolve(docSnap.data());
      })
      .catch((error) => {
        reject(error);
      });
  });
}
