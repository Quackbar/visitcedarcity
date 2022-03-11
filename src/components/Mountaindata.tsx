import React from "react";
import {
  IonHeader,
  IonCardHeader,
  IonLabel,
  IonItem,
  IonCardContent,
  IonAvatar,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonMenuToggle,
  IonCard,
} from "@ionic/react";

import "../assets/scss/app.scss";

interface MountainProps {
  BaseDepth: string;
  OneDaySnowfall: string;
  LiftsOpen: string;
  TrailsOpen: string;
}

const MountainData: React.FC<MountainProps> = ({
  BaseDepth,
  OneDaySnowfall,
  LiftsOpen,
  TrailsOpen,
}) => {
  if (BaseDepth === "" || TrailsOpen === "") {
    return (
      <IonCardHeader class="centered">
        <h3>
          Unfortunately the fetch for mountain data took longer than 10 seconds.
          We are now putting this app in offline mode. Sorry for the
          inconvenience.{" "}
        </h3>
      </IonCardHeader>
    );
  } else {
    return (
      <>
        <IonCard class="wintermountainbackground">
          <IonCardHeader class="">
            <IonCard class="gray">
              <h1 className="centered">Brian Head Winter Mountain Data</h1>

              <h2>Base Snow Depth: {BaseDepth}</h2>
              <h2>One Day Snowfall: {OneDaySnowfall}</h2>
              <h2>Trails Open: {TrailsOpen}</h2>
              <h2>Lifts Open: {LiftsOpen}</h2>

              {/* <h6>Last Updated: {CedarUpdate}</h6> */}
            </IonCard>
          </IonCardHeader>
        </IonCard>
      </>
    );
  }
};
export default MountainData;
