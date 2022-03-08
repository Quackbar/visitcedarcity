import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import Snowpack from '../components/SnowPack';
import Weather from '../components/Weather';
import MountainData from '../components/Mountaindata';

import { getBrianHeadWeather, getCedarWeather, getParoWeather, getMountainData } from "../assets/firebase/Firebase";
import { Timestamp } from "@firebase/firestore";


let CedarImg = "";
let CedarTemp = "";
let ParoImg = ""
let ParoTemp = ""
let BrianImg = ""
let BrianTemp = ""
let MDBaseDepth = ""
let MDOneDay = ""
let MDLiftsOpen = ""
let MDTrailsOpen = ""

type MyReturnTypeItem = {
    Date?: Timestamp;
    conditions?: string;
    temp?: string;
  }
type MountainDataType = {
    Date?: Timestamp;
    baseDepth?: string;
    conditions?: string;
    onedaySnowfall?: string;
    liftsOpen?: string;
    trailsOpen?: string;
    temp?: string;
    wind?: string;
  }

getMountainData().then((data) => {
    console.log('mountainData', data);
    var x: MountainDataType = data
    MDBaseDepth = x.baseDepth ?? 'unknown'
    MDOneDay = x.onedaySnowfall ?? 'unknown'
    MDLiftsOpen = x.liftsOpen ?? 'unknown'
    MDTrailsOpen = x.trailsOpen ?? 'unknown'
    localStorage.setItem("MDBaseDepth", x.baseDepth ?? 'unknown');
    localStorage.setItem("MDOneDaySnowfall", x.onedaySnowfall ?? 'unknown');
    localStorage.setItem("MDLiftsOpen", x.liftsOpen ?? 'unknown');
    localStorage.setItem("MDTrailsOpen", x.trailsOpen ?? 'unknown');
});

getBrianHeadWeather().then((data) => {
    console.log('brian head', data);
    var x: MyReturnTypeItem = data
    BrianImg = x.conditions ?? 'unknown'
    BrianTemp = x.temp ?? 'unknown'
    localStorage.setItem("BrianImg", x.conditions ?? 'unknown');
    localStorage.setItem("BrianTemp", x.temp ?? 'unknown');
    console.log('brian head', x.Date?.toDate().toLocaleDateString("en-US") );
});
getCedarWeather().then((data) => {
    console.log('cedar',data);
    var x: MyReturnTypeItem = data
    CedarImg = x.conditions ?? 'unknown'
    CedarTemp = x.temp ?? 'unknown'
    localStorage.setItem("CedarImg", x.conditions ?? 'unknown');
    localStorage.setItem("CedarTemp", x.temp ?? 'unknown');

});
getParoWeather().then((data) => {
    console.log('paro',data);
    var x: MyReturnTypeItem = data
    ParoImg = x.conditions ?? 'unknown'
    ParoTemp = x.temp ?? 'unknown'
    localStorage.setItem("ParoImg", x.conditions ?? 'unknown');
    localStorage.setItem("ParoTemp", x.temp ?? 'unknown');

});

const Home: React.FC = () => {
    return (
            <IonPage id="home-page">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <Weather CedarImg={CedarImg || String(localStorage.getItem("CedarImg"))}
                            CedarTemp={CedarTemp || String(localStorage.getItem("CedarTemp"))}
                            ParoImg={ParoImg || String(localStorage.getItem("ParoImg"))}
                            ParoTemp={ParoTemp || String(localStorage.getItem("ParoTemp"))}
                            BrianImg={BrianImg || String(localStorage.getItem("BrianImg"))}
                            BrianTemp={BrianTemp || String(localStorage.getItem("BrianTemp"))}/>
                    <IonCard>
                        <Snowpack/>
                    </IonCard>
                    <MountainData  BaseDepth={MDBaseDepth || String(localStorage.getItem("MDBaseDepth"))}
                            OneDaySnowfall={MDOneDay || String(localStorage.getItem("MDOneDaySnowfall"))}
                            LiftsOpen={MDLiftsOpen || String(localStorage.getItem("MDLiftsOpen"))}
                            TrailsOpen={MDTrailsOpen || String(localStorage.getItem("MDTrailsOpen"))}/>
                </IonContent>
            </IonPage>
        );

}
export default Home;