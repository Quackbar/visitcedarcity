import React from 'react';
import { IonHeader,IonCardHeader,IonLabel,IonItem,IonCardContent,IonAvatar, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol, IonMenuToggle } from '@ionic/react';


const CedarImg = JSON.stringify(localStorage.getItem('CedarImg'))
const CedarTemp = JSON.stringify(localStorage.getItem('CedarTemp'))
const CedarUpdate = JSON.stringify(localStorage.getItem('CedarUpdate'))
const ParoImg = JSON.stringify(localStorage.getItem('ParoImg'))
const ParoTemp = JSON.stringify(localStorage.getItem('ParoTemp'))
const BrianImg = JSON.stringify(localStorage.getItem('BrianImg'))
const BrianTemp = JSON.stringify(localStorage.getItem('BrianTemp'))

export default function Weather() {
    return (
        <>
                <IonCardHeader class="centered gray">
                <h1>Cedar City</h1>
                        
                        <img src={CedarImg.slice(1, -1)}/>

                        <h1>{CedarTemp.slice(1, -1)}</h1>
                        {/* <h6>Last Updated: {CedarUpdate}</h6> */}
                </IonCardHeader>
                <IonCardContent>
                <IonGrid fixed>
                    <IonRow>
                        <IonCol size="6" size-md="2" class="centered gray">
                        <h1>Parowan</h1>

                            <img src={ParoImg.slice(1, -1)} />
                            <h2>{ParoTemp.slice(1, -1)}</h2>
                        </IonCol>
                        <IonCol size="6" size-md="2" class="centered gray">
                        <h1>Brian Head</h1>

                            <img src={BrianImg.slice(1, -1)}/>

                            <h2>{BrianTemp.slice(1, -1)}</h2>

                        </IonCol>
                    </IonRow>
                </IonGrid>
                </IonCardContent>
        </>

    );
}