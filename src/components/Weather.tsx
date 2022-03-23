import React from 'react';
import { IonCardHeader,IonCardContent,IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';


import '../assets/scss/app.scss'
import { getSunrise, getSunset } from 'sunrise-sunset-js';


interface WeatherProps {
    CedarImg: string;
    CedarTemp: string;
    ParoImg: string;
    ParoTemp: string;
    BrianImg: string;
    BrianTemp: string;
}

var day = true

const truesunset = getSunset(37.689120, -113.047006);
const truesunrise = getSunrise(37.689120, -113.047006);

const sunrise = [truesunrise.getHours(), truesunrise.getMinutes()]
const sunset = [truesunset.getHours(), truesunset.getMinutes()];

var sunrise_m = sunrise[0] * 60 + sunrise[1]
var sunset_m = sunset[0] * 60 + sunset[1]

var now = new Date()
var now_m = now.getHours() * 60 + now.getMinutes()

if (now_m > sunrise_m + 60 && now_m <= sunset_m + 30) {
    day = true
} else {
    day = false
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
        <IonCard class={ day ? "dayback" : "nightback"}>
            
                <IonCardHeader class="centered" >
                <IonCard class="gray">
                <h1  className="weatherheadbig">Cedar City</h1>
                        
                        <img src={CedarImg}/>

                        <h1>{CedarTemp}</h1>
                        {/* <h6>Last Updated: {CedarUpdate}</h6> */}
                        </IonCard>
                </IonCardHeader>
                <IonCardHeader>
                <IonGrid fixed>
                    <IonRow>
                    
                        <IonCol size="6" size-md="6" class="centered">
                        <IonCard class="gray">
                        <h1 className="weatherhead">Parowan</h1>

                            <img src={ParoImg} />
                            <h2>{ParoTemp}</h2>
                            </IonCard>
                        </IonCol>
                        
                        
                        <IonCol size="6" size-md="6" class="centered">
                        <IonCard class="gray">
                        <h1 className="weatherhead">Brian Head</h1>

                            <img src={BrianImg}/>

                            <h2>{BrianTemp}</h2>
                            </IonCard>
                        </IonCol>
                        
                    </IonRow>
                </IonGrid>
                </IonCardHeader>
                </IonCard>
        </>

    );
    }
}
export default Weather;