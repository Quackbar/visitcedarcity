import React, { useState, useRef } from 'react';

import { IonToolbar, IonContent, IonSlide, IonPage, IonButtons, IonTitle, IonMenuButton, IonSegment, IonSegmentButton, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonToast, IonModal, IonHeader, getConfig, IonCard, IonItem, IonItemSliding, IonLabel } from '@ionic/react';

import { Schedule, Session } from '../models/Schedule';
import { Browser } from '@capacitor/browser';

import {USFSchedule} from '../assets/data/USF'

const openVisitSite = async () => {
    await Browser.open({ url: 'https://visitcedarcity.com/' });
  };
  


interface ScheduleProps {
    name: string;
    timeStart: string;
    timeEnd: string;
    thelocation: string;
    url: string;
}

function pad2(n: number) {
    return (n < 10 ? '0' : '') + n;
}

const ScheduleComp: React.FC<ScheduleProps> = ({ name, timeStart, timeEnd, thelocation, url }) => {

    // var month = pad2(CurrentDate.getMonth()+1);//months (0-11)
    // var day = pad2(CurrentDate.getDate());//day (1-31)
    // var year= CurrentDate.getFullYear();
    const openSite = async () => {
        await Browser.open({ url: url });
      };
    var formattedDate =  "2022-06-20"// || year+"-"+month+"-"+day;
    return (
        <>

            <IonItemSliding onClick={openSite}>
                <IonItem>
                    <IonSlide>

                    <IonLabel>
                    <h3>{name}</h3>
                    <p>
                    {timeStart}&mdash;&nbsp;
                    {timeEnd}&mdash;&nbsp;
                    {thelocation} 
                    </p>
                    </IonLabel>
                    </IonSlide>
                </IonItem>
            </IonItemSliding>

        </>

    );
}

export default ScheduleComp;