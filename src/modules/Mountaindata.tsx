import React from "react";
import { IonCardHeader, IonCard } from "@ionic/react";

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
          <h1 className="centered">
            Brian Head Winter
            <br /> Mountain Data
          </h1>

          <h2>&emsp;Base Snow Depth: {BaseDepth}</h2>
          <h2>&emsp;One Day Snowfall: {OneDaySnowfall}</h2>
          <h2>&emsp;Trails Open: {TrailsOpen}</h2>
          <h2>&emsp;Lifts Open: {LiftsOpen}</h2>

          {/* <h6>Last Updated: {CedarUpdate}</h6> */}
        </IonCard>
      </>
    );
  }
};
export default MountainData;
