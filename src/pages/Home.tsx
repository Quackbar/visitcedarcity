import { IonModal,IonDatetime,IonRefresher, IonRefresherContent, IonLabel,IonCard, IonContent, IonItem, IonPage, IonTitle, IonPopover, IonText, IonButton, IonGrid } from "@ionic/react";

import Weather from '../components/Weather';
import MountainData from '../components/Mountaindata';
import ScheduleComp from '../components/Schedule'
import SnowPack from "../components/SnowPack"
import SkyData from "../components/SkyData"
import RoadConditions from "../components/RoadConditions"
import FestivalFood from "../components/FestivalFood"

import { getBrianHeadWeather, getCedarWeather, getParoWeather, getMountainData } from "../assets/firebase/Firebase";
import { Timestamp } from "@firebase/firestore";

import { RefresherEventDetail } from '@ionic/core';


import React, { useRef, useState, useEffect } from 'react';
import {USFSchedule} from '../assets/data/USF'
import {UMRFSchedule} from '../assets/data/UMRF'
import {CCMASchedule} from '../assets/data/CCMA'
import {NSFSchedule} from '../assets/data/NSF'
import {OSUSchedule} from '../assets/data/OSU'

import { format, parseISO } from 'date-fns';
import { Browser } from "@capacitor/browser";

import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
// import './Home.css';
import { Toast } from "@capacitor/toast";

// import { Moon } from "lunarphase-js";





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


  type todaystype = {
        name: string;
        url: string;
        timeStart: string;
        timeEnd: string;
        location: string;
        tracks: string[];
        id: string;
    }



getMountainData().then((data) => {
    // console.log('mountainData', data);
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
    // console.log('brian head', data);
    var x: MyReturnTypeItem = data
    BrianImg = x.conditions ?? 'unknown'
    BrianTemp = x.temp ?? 'unknown'
    localStorage.setItem("BrianImg", x.conditions ?? 'unknown');
    localStorage.setItem("BrianTemp", x.temp ?? 'unknown');
    // console.log('brian head', x.Date?.toDate().toLocaleDateString("en-US") );
});
getCedarWeather().then((data) => {
    // console.log('cedar',data);
    var x: MyReturnTypeItem = data
    CedarImg = x.conditions ?? 'unknown'
    CedarTemp = x.temp ?? 'unknown'
    localStorage.setItem("CedarImg", x.conditions ?? 'unknown');
    localStorage.setItem("CedarTemp", x.temp ?? 'unknown');

});
getParoWeather().then((data) => {
    // console.log('paro',data);
    var x: MyReturnTypeItem = data
    ParoImg = x.conditions ?? 'unknown'
    ParoTemp = x.temp ?? 'unknown'
    localStorage.setItem("ParoImg", x.conditions ?? 'unknown');
    localStorage.setItem("ParoTemp", x.temp ?? 'unknown');

});

const openSite = async () => {
    await Browser.open({ url: "https://visitcedarcity.com/events/" });
  };

   function checkSched(things: todaystype[]){
        if(things.length === 0){
            return (<ScheduleComp name="Sorry No Events Today" timeStart="" timeEnd="" thelocation="Please Check out our Discovery page" url="https://visitcedarcity.com/" /> );
        }
   }

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    // console.log('Begin async operation');
    window.location.reload();
  }

const Home: React.FC = () => {


//     const nullEntry: any[] = []
//     const [notifications, setnotifications] = useState(nullEntry);

//     useEffect(()=>{
//         PushNotifications.checkPermissions().then((res) => {
//             if (res.receive !== 'granted') {
//               PushNotifications.requestPermissions().then((res) => {
//                 if (res.receive === 'denied') {
//                   showToast('Push Notification permission denied');
//                 }
//                 else {
//                   showToast('Push Notification permission granted');
//                   register();
//                 }
//               });
//             }
//             else {
//               register();
//             }
//           });
//     },[])
    
//     const register = () => {
//         console.log('Initializing HomePage');

//         // Register with Apple / Google to receive push via APNS/FCM
//         PushNotifications.register();

//         // On success, we should be able to receive notifications
//         PushNotifications.addListener('registration',
//             (token: Token) => {
//                 showToast('Push registration success');
//             }
//         );

//         // Some issue with our setup and push will not work
//         PushNotifications.addListener('registrationError',
//             (error: any) => {
//                 alert('Error on registration: ' + JSON.stringify(error));
//             }
//         );

//         // Show us the notification payload if the app is open on our device
//         PushNotifications.addListener('pushNotificationReceived',
//             (notification: PushNotificationSchema) => {
//                 setnotifications(notifications => [...notifications, { id: notification.id, title: notification.title, body: notification.body, type: 'foreground' }])
//             }
//         );

//         // Method called when tapping on a notification
//         PushNotifications.addListener('pushNotificationActionPerformed',
//             (notification: ActionPerformed) => {
//                 setnotifications(notifications => [...notifications, { id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body, type: 'action' }])
//             }
//         );
//     }

//     const showToast = async (msg: string) => {
//         await Toast.show({
//             text: msg
//         })
//     }
// // 



    const formatDate = (value: string) => {
        return format(parseISO(value), 'MMM dd yyyy');
    };


    const pageRef = useRef<HTMLElement>(null);

    const [showFilterModal, setShowFilterModal] = useState(false);
    
    const today = new Date();
    const [popoverDate, setPopoverDate] = useState(today.toDateString());
    let things: todaystype[] = []
    things = [];
    const [formattedDate, setFormattedDate] = useState(new Date().toISOString().slice(0, 10));

    const yourSchedule = USFSchedule.schedule.concat(
        UMRFSchedule.schedule.concat(
            CCMASchedule.schedule.concat(
                NSFSchedule.schedule.concat(
                    OSUSchedule.schedule.concat()
                )
            )
        ))

    yourSchedule.map(item => {

        // var formattedDate =  "2022-08-08"
        if(item.date === formattedDate){
            item.groups.map(group => {
                // console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
                // console.log(group.sessions[0])
                // console.log(group.sessions[0].name)
                things.push(group.sessions[0] as todaystype);
            })
        }
    })


    
  

    return (
            <IonPage id="home-page">
                {/* <IonHeader>
                    <IonToolbar>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader> */}
                <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                    <Weather CedarImg={CedarImg || String(localStorage.getItem("CedarImg"))}
                            CedarTemp={CedarTemp || String(localStorage.getItem("CedarTemp"))}
                            ParoImg={ParoImg || String(localStorage.getItem("ParoImg"))}
                            ParoTemp={ParoTemp || String(localStorage.getItem("ParoTemp"))}
                            BrianImg={BrianImg || String(localStorage.getItem("BrianImg"))}
                            BrianTemp={BrianTemp || String(localStorage.getItem("BrianTemp"))}/>
                    <IonCard>
                        {/* <Snowpack/> */}
                    </IonCard>
            <IonCard class="basiccentered">
                    <IonTitle class="centered">
                        <br/>
                        Your Daily Schedule
                        <br/><br/>
                    </IonTitle>
                          {/* Datetime in overlay */}
                    {/* <IonButton  class="centered" id="open-modal">Choose Custom Date</IonButton> */}
                    <IonModal trigger="open-modal">
                        <IonContent>
                        <IonDatetime ></IonDatetime>
                        </IonContent>
                    </IonModal>

                    {/* Datetime in popover with cover element */}
                    <IonItem button={true} id="open-date-input">
                        <IonLabel>Date</IonLabel>
                        <IonText slot="end">{popoverDate}</IonText>
                        <IonPopover trigger="open-date-input" showBackdrop={false}>
                        <IonDatetime
                            presentation="date"
                            onIonChange={ev => {
                                setPopoverDate(formatDate(ev.detail.value!))
                                // console.log(ev.detail.value!)
                                setFormattedDate(ev.detail.value!.slice(0,-15))
                            }}
                        />
                        </IonPopover>
                    </IonItem>
                    
                {
                        things.map(event => {
                            return (
                                <ScheduleComp name={event.name} timeStart={event.timeStart} timeEnd={event.timeEnd} thelocation={event.location} url={event.url} /> 
                            );
                        })
                }
                {checkSched(things)}
                <IonButton onClick={openSite}>
                    See Extended Events Calendar
                </IonButton>
                <p></p>

                
            </IonCard>
            <FestivalFood/>
            <IonCard>
                <SkyData/>
            </IonCard>
            
            <RoadConditions/>
            <MountainData  BaseDepth={MDBaseDepth || String(localStorage.getItem("MDBaseDepth"))}
                            OneDaySnowfall={MDOneDay || String(localStorage.getItem("MDOneDaySnowfall"))}
                            LiftsOpen={MDLiftsOpen || String(localStorage.getItem("MDLiftsOpen"))}
                            TrailsOpen={MDTrailsOpen || String(localStorage.getItem("MDTrailsOpen"))}/>

            <IonCard>
                <h1 className="centered">
                <br/>
                    
                    Brian Head Snowpack
                    <br/>
                </h1>
                <SnowPack  theDates={JSON.parse(String(localStorage.getItem("dates")))} 
                           baseDepth={JSON.parse(String(localStorage.getItem("baseDepth")))}
                           oneDaySnowfall={JSON.parse(String(localStorage.getItem("oneDaySnowfall")))} 
                           temps={JSON.parse(String(localStorage.getItem("temps")))}/>
            </IonCard>
            <IonGrid class="basiccentered">
            <IonButton onClick={() => setShowFilterModal(true)}>
                Customize
            </IonButton>
            </IonGrid>

                

            </IonContent>


            <IonModal
                isOpen={showFilterModal}
                onDidDismiss={() => setShowFilterModal(false)}
                swipeToClose={true}
                presentingElement={pageRef.current!}
            >
            </IonModal>
            </IonPage>
        );

}
export default Home;