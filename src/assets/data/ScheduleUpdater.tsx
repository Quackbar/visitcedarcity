

// localStorage.setItem("CCScheduleUpdate", "{\"schedule\": [}")

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  doc,
  getDoc, 
  getDocs, 
  Timestamp,
  orderBy,

} from "firebase/firestore";
import { StringifyOptions } from "querystring";

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
const ccDoc = doc(f_db, "Schedules", "CC");
const bhDoc = doc(f_db, "Schedules", "BH");
const cbDoc = doc(f_db, "Schedules", "CB");
const sumaDoc = doc(f_db, "Schedules", "SUMA");
const suupDoc = doc(f_db, "Schedules", "SUUP");
const filterDoc = doc(f_db, "ScheduleFilters", "current");




export async function getCCSched() : Promise<string> {
    return new Promise(async (resolve, reject) => {
        await getDoc(ccDoc)
        .then((docSnap) => {
          // docSnap.data() will be undefined if document doesn't exist
          // console.log(docSnap.data()!.current )
          let returnable = docSnap.data()!.current || "[]"
          localStorage.setItem("CCScheduleUpdate", returnable)
          resolve(docSnap.data()!.current+"]" as string);
        })
        .catch((error) => {
          reject(error);
        });
    });
}

//https://tockify.com/api/ngevent?max=-1&view=upcoming&calname=brianheadeventsmonthly&max-events-after=12&showAll=false&debug=loaded&passback=2022%3A3%3A0&startms=1648274400000&start-inclusive=true&end-inclusive=true&endms=1651384800000

export async function getBHSched() : Promise<string> {
    return new Promise(async (resolve, reject) => {
            await getDoc(bhDoc)
            .then((docSnap) => {
              // docSnap.data() will be undefined if document doesn't exist
              // console.log(docSnap.data()!.current )
              let returnable = docSnap.data()!.current || "[]"
              localStorage.setItem("BHScheduleUpdate", returnable)
              resolve(docSnap.data()!.current+"]" as string);
            })
            .catch((error) => {
              reject(error);
            });
        
    });
}


export async function getSUMASched() : Promise<string> {
    return new Promise(async (resolve, reject) => {
            
            await getDoc(sumaDoc)
            .then((docSnap) => {
              // docSnap.data() will be undefined if document doesn't exist
              // console.log(docSnap.data()!.current )
              let returnable = docSnap.data()!.current || "[]"
              localStorage.setItem("SUMAScheduleUpdate", returnable)
              resolve(docSnap.data()!.current+"]" as string);
            })
            .catch((error) => {
              reject(error);
            });
})}


export async function getCBAlerts() : Promise<string> {
    return new Promise(async (resolve, reject) => {
            await getDoc(cbDoc)
            .then((docSnap) => {
              // docSnap.data() will be undefined if document doesn't exist
              // console.log(docSnap.data()!.current )
              let returnable = docSnap.data()!.current || "[]"
              localStorage.setItem("CBAlertUpdate", returnable)
              resolve(docSnap.data()!.current+"]" as string);
            })
            .catch((error) => {
              reject(error);
            });

})}

// console.log(new Date().toISOString().slice(0, -5))

export async function getSUUPUpdates() : Promise<string> {
    return new Promise(async (resolve, reject) => {

            await getDoc(suupDoc)
            .then((docSnap) => {
              // docSnap.data() will be undefined if document doesn't exist
              // console.log(docSnap.data()!.current )
              let returnable = docSnap.data()!.current || "[]"
              localStorage.setItem("SUUPUpdate", returnable)
              resolve(docSnap.data()!.current+"]" as string);
            })
            .catch((error) => {
              reject(error);
            });
})}

export async function getFilters() : Promise<string> {
  return new Promise(async (resolve, reject) => {

          await getDoc(filterDoc)
          .then((docSnap) => {
            // docSnap.data() will be undefined if document doesn't exist
            // console.log(docSnap.data()!.current )
            let returnable = docSnap.data()!.current || "[]"
            localStorage.setItem("ScheduleFilters", returnable)
            resolve(docSnap.data()!.current+"]" as string);
          })
          .catch((error) => {
            reject(error);
          });
})}getFilters()

