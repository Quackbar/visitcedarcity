import React from 'react';
import { IonHeader,IonCardHeader,IonLabel,IonItem,IonCardContent,IonAvatar, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol, IonMenuToggle, IonCard } from '@ionic/react';

import { getBrianHeadWeather, getCedarWeather, getParoWeather } from "../assets/firebase/Firebase";

import '../assets/scss/app.scss'

interface WeatherProps {
    CedarImg: string;
    CedarTemp: string;
    ParoImg: string;
    ParoTemp: string;
    BrianImg: string;
    BrianTemp: string;
}

const Weather: React.FC<WeatherProps> = ({ CedarImg,
                                                CedarTemp,
                                                ParoImg,
                                                ParoTemp,
                                                BrianImg,
                                                BrianTemp}) => {

    if(CedarImg === "" || ParoImg === "" || BrianImg === ""){
        return (
        <IonCardHeader class="centered" >
            <h3>Unfortunately the fetch for weather data took longer than 10 seconds. We are now putting this app in offline mode. Sorry for the inconvenience. </h3>
        </IonCardHeader>
        );
    }
    else{

    

    return (
        <>
        <IonCard class="backgrounded">
            
                <IonCardHeader class="centered" >
                <IonCard class="gray">
                <h1>Cedar City</h1>
                        
                        <img src={CedarImg}/>

                        <h1>{CedarTemp}</h1>
                        {/* <h6>Last Updated: {CedarUpdate}</h6> */}
                        </IonCard>
                </IonCardHeader>
                <IonCardContent>
                <IonGrid fixed>
                    <IonRow>
                    
                        <IonCol size="6" size-md="2" class="centered">
                        <IonCard class="gray">
                        <h1>Parowan</h1>

                            <img src={ParoImg} />
                            <h2>{ParoTemp}</h2>
                            </IonCard>
                        </IonCol>
                        
                        
                        <IonCol size="6" size-md="2" class="centered">
                        <IonCard class="gray">
                        <h1>Brian Head</h1>

                            <img src={BrianImg}/>

                            <h2>{BrianTemp}</h2>
                            </IonCard>
                        </IonCol>
                        
                    </IonRow>
                </IonGrid>
                </IonCardContent>
                </IonCard>
        </>

    );
    }
}
export default Weather;
