import React from "react";
import { IonCardHeader, IonCard, IonRow, IonGrid, IonCol } from "@ionic/react";

import "../assets/scss/app.scss";

interface MountainProps {
  BaseDepth: string;
  OneDaySnowfall: string;
  LiftsOpen: string;
  TrailsOpen: string;
}

const MountainData: React.FC<MountainProps> = ({ BaseDepth, OneDaySnowfall, LiftsOpen, TrailsOpen }) => {
  if (BaseDepth === "" || TrailsOpen === "") {
    return (
      <IonCardHeader class="centered">
        <h3>
          Unfortunately the fetch for mountain data took longer than 10 seconds. We are now putting this app in offline
          mode. Sorry for the inconvenience.{" "}
        </h3>
      </IonCardHeader>
    );
  } else {
    return (
      <>
        <IonCard>
          <h3 className="centered">
            <br/>
            Brian Head
            <br /> Mountain Data
          </h3>
          <IonGrid class="centered">
            {!(BaseDepth === "NaN") ? <IonRow>
              <IonCol>
              <p>&emsp;Base Depth: </p>      
              </IonCol>
              <IonCol>
              <p>{BaseDepth}</p>
              </IonCol>
            </IonRow> : <></>}
            {!(OneDaySnowfall === "NaN") ? <IonRow>
              <IonCol>
              <p>&emsp;24hr Snow: </p>      
              </IonCol>
              <IonCol>
              <p>{OneDaySnowfall}</p>
              </IonCol>
            </IonRow> : <></>}
            <IonRow>
              <IonCol>
              <p>&emsp;Trails Open:</p>      
              </IonCol>
              <IonCol>
              <p>{TrailsOpen}</p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <p>&emsp;Lifts Open:</p>      
              </IonCol>
              <IonCol>
              <p>{LiftsOpen}</p>
              </IonCol>
            </IonRow>
          </IonGrid>
          {/* {!(BaseDepth === "NaN") ? <h2>&emsp;Base Snow Depth: {BaseDepth}</h2> : <></>}
          {!(OneDaySnowfall === "NaN") ? <h2>&emsp;One Day Snowfall: {OneDaySnowfall}</h2> : <></>}
          <h2>&emsp;Trails Open: {TrailsOpen}</h2>
          <h2>&emsp;Lifts Open: {LiftsOpen}</h2>
<br/> */}
          {/* <h6>Last Updated: {CedarUpdate}</h6> */}
        </IonCard>
      </>
    );
  }
};
export default MountainData;
