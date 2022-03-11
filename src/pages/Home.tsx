import { IonButton,IonRow,IonModal,IonDatetime,IonCol,IonGrid,IonChip,IonIcon, IonRefresher, IonRefresherContent, IonLabel,IonItemSliding,  IonCard, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonPopover, IonText } from "@ionic/react";

import Weather from '../components/Weather';
import MountainData from '../components/Mountaindata';
import ScheduleComp from '../components/Schedule'
import SnowPack from "../components/SnowPack"

import { getBrianHeadWeather, getSnowData, getCedarWeather, getParoWeather, getMountainData } from "../assets/firebase/Firebase";
import { Timestamp } from "@firebase/firestore";

import { RefresherEventDetail } from '@ionic/core';


import { Browser } from '@capacitor/browser';
import React, { useState, useRef } from 'react';
import {USFSchedule} from '../assets/data/USF'
import { close , pin } from 'ionicons/icons';
import { format, parseISO } from 'date-fns';

const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://secure.bard.org/Online/default.asp?doWork::WScontent::loadArticle=Load&BOparam::WScontent::loadArticle::article_id=38AC2AAF-6F57-4A9F-8DC1-53F84A050D25' });
};

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

  interface SnowOutput {
    Date?: string[];
    oneDaySnowfall?: string[];
    baseDepth?: string[];
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

    let theDates: string[] = []
let baseDepth: string[] = []
let oneDaySnowfall: string[] = []

getSnowData().then((data) => {
    console.log('mountainData', data);
    var x: SnowOutput = data
    theDates = x.Date ?? ['unknown']
    baseDepth = x.baseDepth ?? []
    oneDaySnowfall = x.oneDaySnowfall ?? ['unknown']
    console.log("this thing here",JSON.parse(String(localStorage.getItem("baseDepth"))))
});

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



   function checkSched(things: todaystype[]){
        if(things.length === 0){
            return (<ScheduleComp name="Sorry No Events Today" timeStart="" timeEnd="" thelocation="Please Check out our Discovery page" url="https://visitcedarcity.com/" /> );
        }
   }

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }

const Home: React.FC = () => {
    const formatDate = (value: string) => {
        return format(parseISO(value), 'MMM dd yyyy');
    };
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(new Date);
    const [popoverDate, setPopoverDate] = useState(today.toDateString());
    const [popoverDate2, setPopoverDate2] = useState('');
    let things: todaystype[] = []
    function setSched(){
        things = [];
        USFSchedule.schedule.map(item => {
            // var thisdate = new Date(item.date);
            var formattedDate =  "2022-08-08"
            if(item.date === formattedDate){
                item.groups.map(group => {
                    console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
                    console.log(group.sessions[0])
                    console.log(group.sessions[0].name)
                    things.push(group.sessions[0] as todaystype);
                })
            }
        })
    }setSched()


    const customDatetime = useRef();
    const confirm = () => {
      if (customDatetime === undefined) return;
      
    //   customDatetime.confirm();
    };
    
    const reset = () => {
      if (customDatetime === undefined) return;
      
    //   customDatetime.reset();
    };
  

    return (
            <IonPage id="home-page">
                {/* <IonHeader>
                    <IonToolbar>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader> */}
                <IonContent>

                    <Weather CedarImg={CedarImg || String(localStorage.getItem("CedarImg"))}
                            CedarTemp={CedarTemp || String(localStorage.getItem("CedarTemp"))}
                            ParoImg={ParoImg || String(localStorage.getItem("ParoImg"))}
                            ParoTemp={ParoTemp || String(localStorage.getItem("ParoTemp"))}
                            BrianImg={BrianImg || String(localStorage.getItem("BrianImg"))}
                            BrianTemp={BrianTemp || String(localStorage.getItem("BrianTemp"))}/>
                    <IonCard>
                        {/* <Snowpack/> */}
                    </IonCard>
            <IonCard>
                    <IonTitle class="centered">
                        <br/>
                        Your Daily Schedule
                        <br/><br/>
                    </IonTitle>
                          {/* Datetime in overlay */}
                    {/* <IonButton  class="centered" id="open-modal">Choose Custom Date</IonButton> */}
                    <IonModal trigger="open-modal">
                        <IonContent>
                        <IonDatetime></IonDatetime>
                        </IonContent>
                    </IonModal>

                    {/* Datetime in popover with cover element */}
                    <IonItem button={true} id="open-date-input">
                        <IonLabel>Date</IonLabel>
                        <IonText slot="end">{popoverDate}</IonText>
                        <IonPopover trigger="open-date-input" showBackdrop={false}>
                        <IonDatetime
                            presentation="date"
                            onIonChange={ev => {setPopoverDate(formatDate(ev.detail.value!));setSched()}}
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
                
            </IonCard>

            <MountainData  BaseDepth={MDBaseDepth || String(localStorage.getItem("MDBaseDepth"))}
                            OneDaySnowfall={MDOneDay || String(localStorage.getItem("MDOneDaySnowfall"))}
                            LiftsOpen={MDLiftsOpen || String(localStorage.getItem("MDLiftsOpen"))}
                            TrailsOpen={MDTrailsOpen || String(localStorage.getItem("MDTrailsOpen"))}/>

            <IonCard>
                <IonTitle class="centered">
                <br/>

                    Brian Head Snowpack
                    <br/>
                </IonTitle>
                <SnowPack  theDates={JSON.parse(String(localStorage.getItem("dates")))} 
                           baseDepth={JSON.parse(String(localStorage.getItem("baseDepth")))}
                           oneDaySnowfall={JSON.parse(String(localStorage.getItem("oneDaySnowfall")))} 
                           temps={JSON.parse(String(localStorage.getItem("temps")))}/>
            </IonCard>
                

            </IonContent>
            </IonPage>
        );

}
export default Home;