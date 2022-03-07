import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import Snowpack from '../components/SnowPack';
import Weather from '../components/Weather';

import { getBrianHeadWeather, getCedarWeather, getParoWeather } from "../assets/firebase/Firebase";
import { Timestamp } from "@firebase/firestore";


let CedarImg = "";
let CedarTemp = "";
let ParoImg = ""
let ParoTemp = ""
let BrianImg = ""
let BrianTemp = ""

type MyReturnTypeItem = {
    Date?: Timestamp;
    conditions?: string;
    temp?: string;
  }

getBrianHeadWeather().then((data) => {
    console.log('brian head', data);
    var x: MyReturnTypeItem = data
    BrianImg = x.conditions ?? 'unknown'
    BrianTemp = x.temp ?? 'unknown'
    localStorage.setItem("BrianImg", x.conditions ?? 'unknown');
    localStorage.setItem("BrianImg", x.temp ?? 'unknown');
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
                </IonContent>
            </IonPage>
        );

}
export default Home;