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
const brianDoc = doc(f_db, "BrianHeadWeatherDayData", "current");
const lodgeDoc = doc(f_db, "Lodgings", "current");
const expDoc = doc(f_db, "Experiences", "current");
const foodDoc = doc(f_db, "Foodsanddrinks", "current");
const paroDoc = doc(f_db, "ParowanWeatherDayData", "current");
const cedarDoc = doc(f_db, "CedarCityWeatherDayData", "current");
const mountainDoc = doc(f_db, "mountainData", "current");
const RoadConDoc = doc(f_db, "RoadConditions", "current");

const mountainRef = collection(f_db, "mountainData");

const q = query(collection(f_db, "mountainData"))

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

interface SnowOutput {
  Date?: string[];
  temp?: string[];
  oneDaySnowfall?: string[];
  baseDepth?: string[];
}



// const querySnapshot = await getDocs(q)


export async function getSnowData() : Promise<SnowOutput> {
  return new Promise(async (resolve, reject) => {
    let oneDaySnowfall: string[] = [];
    let baseDepth: string[] = [];
    let temps: string[] = [];
    let dates: any[] = [];
    let orderer: { date: any; oneDaySnowfall: any; baseDepth: any; temps: any; }[] = [];
    (await getDocs(q)).forEach((doc) => {
      // console.log(doc.data())

      orderer.push({date: new Date(doc.data().Date.toDate()), oneDaySnowfall: doc.data().onedaySnowfall.slice(0,-1), baseDepth: doc.data().baseDepth.slice(0,-1), temps: doc.data().temp.slice(0,-2)})

      // oneDaySnowfall.push(doc.data().onedaySnowfall.slice(0,-1))
      // baseDepth.push(doc.data().baseDepth.slice(0,-1))
      // dates.push(doc.data().Date.toDate().toLocaleDateString('en-US').slice(0,-5))
    })

    const sortedActivities = orderer.sort((a, b) => b.date - a.date).reverse()
    // console.log(sortedActivities)


    sortedActivities.forEach((piece) => {
      oneDaySnowfall.push(piece.oneDaySnowfall)
      baseDepth.push(piece.baseDepth)
      temps.push(piece.temps)
      dates.push(piece.date.toLocaleDateString('en-US').slice(0, -5))
    })
    localStorage.setItem('oneDaySnowfall', JSON.stringify(oneDaySnowfall))
    localStorage.setItem('baseDepth', JSON.stringify(baseDepth))
    localStorage.setItem('dates', JSON.stringify(dates))
    localStorage.setItem('temps', JSON.stringify(temps))
    
    // console.log(localStorage.getItem('baseDepth'))
    let rObject: SnowOutput = {
      Date: dates,
      oneDaySnowfall: oneDaySnowfall,
      temp: temps,
      baseDepth: baseDepth,
    }
    resolve(rObject)
  });
}
getSnowData()
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

export async function getRoadConditions() {
  return new Promise(async (resolve, reject) => {
    await getDoc(RoadConDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        // resolve(docSnap.data() as MountainDataType);

        if (docSnap.exists()) {
          localStorage.setItem('BrianText', docSnap.data().BrianText)
          localStorage.setItem('CedarText', docSnap.data().CedarText)
          localStorage.setItem('LongValText', docSnap.data().LongValText)
          localStorage.setItem('NevadaText', docSnap.data().NevadaText)
          localStorage.setItem('ParowanText', docSnap.data().ParowanText)
          //console.log(docSnap.data().BrianText.split("<td>")[1].slice(0,-5))
          resolve(true);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}getRoadConditions()

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

export async function getExperiences() : Promise<string> {
  return new Promise(async (resolve, reject) => {
    await getDoc(expDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        // console.log(docSnap.data()!.current )
        let returnable = docSnap.data()!.current || "[]"
        localStorage.setItem('Experiences', returnable)
        resolve(docSnap.data()!.current+"]" as string);
      })
      .catch((error) => {
        reject(error);
      });
  });
}getExperiences()



export async function getFoods() : Promise<string> {
  return new Promise(async (resolve, reject) => {
    await getDoc(foodDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        // console.log(docSnap.data()!.current )
        let returnable = docSnap.data()!.current || "[]"
        localStorage.setItem('Foods', returnable)
        resolve(docSnap.data()!.current+"]" as string);
      })
      .catch((error) => {
        reject(error);
      });
  });
}getFoods()

export async function getLodgings() : Promise<string> {
  return new Promise(async (resolve, reject) => {
    await getDoc(lodgeDoc)
      .then((docSnap) => {
        // docSnap.data() will be undefined if document doesn't exist
        // console.log(docSnap.data()!.current )
        let returnable = docSnap.data()!.current || "[]"
        localStorage.setItem('Lodging', returnable)
        resolve(docSnap.data()!.current+"]" as string);
      })
      .catch((error) => {
        reject(error);
      });
  });
}getLodgings()

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