import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();
const brianRef = firestore.collection("BrianHeadWeatherDayData").doc("current");
const paroRef = firestore.collection("ParowanWeatherDayData").doc("current");
const cedarRef = firestore.collection("CedarCityWeatherDayData").doc("current");

const Firestore = {
  getBrianHeadWeather: async () => {
    return new Promise((resolve, reject) => {
      brianRef
        .get()
        .then((doc) => {
          resolve(doc.data());
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getParoWeather: async () => {
    return new Promise((resolve, reject) => {
      paroRef
        .get()
        .then((doc) => {
          resolve(doc.data());
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getCedarCityWeather: async () => {
    return new Promise((resolve, reject) => {
      cedarRef
        .get()
        .then((doc) => {
          resolve(doc.data());
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
export default Firestore;
