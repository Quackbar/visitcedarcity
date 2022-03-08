import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  doc,
  getDoc,  
  Timestamp,
  orderBy,

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
const mountainDoc = doc(f_db, "mountainData", "current");


const mountainRef = collection(f_db, "mountainData");

interface MountainDataType {
  Date?: Timestamp;
  baseDepth?: string;
  conditions?: string;
  oneDaySnowfall?: string;
  liftsOpen?: string;
  trailsOpen?: string;
  temp?: string;
  wind?: string;
}
type MyReturnTypeItem = {
  Date?: Timestamp;
  conditions?: string;
  temp?: string;
}


// firestore functions
export async function getMountainData() : Promise<MountainDataType> {
  return new Promise(async (resolve, reject) => {
    await getDoc(mountainDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        resolve(docSnap.data() as MountainDataType);
      })
      .catch((error) => {
        reject(error);
      });
  });
}



// firestore functions
export async function getBrianHeadWeather() : Promise<MyReturnTypeItem> {
  return new Promise(async (resolve, reject) => {
    await getDoc(brianDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        resolve(docSnap.data() as MyReturnTypeItem);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export async function getParoWeather() : Promise<MyReturnTypeItem>  {
  return new Promise(async (resolve, reject) => {
    await getDoc(paroDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        resolve(docSnap.data() as MyReturnTypeItem);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export async function getCedarWeather() : Promise<MyReturnTypeItem>  {
  return new Promise(async (resolve, reject) => {
    await getDoc(cedarDoc)
      .then((doc) => {
        // docSnap.data() will be undefined if document doesn't exist

        resolve(doc.data() as MyReturnTypeItem);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
