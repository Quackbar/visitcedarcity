import React from "react";
import { IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol, IonCard } from "@ionic/react";

import { getSunrise, getSunset } from "sunrise-sunset-js";

import { Simple } from "@lab-code/moonphase";

const today = new Date();
// console.log(today.toLocaleDateString());
const sepDate = today.toLocaleDateString().split("/");

const sunset = getSunset(37.68912, -113.047006);
const sunrise = getSunrise(37.68912, -113.047006);
// const phaseEmoji = Moon.lunarPhaseEmoji();

function getMoon() {
  const phase: Number = Simple(Number(sepDate[1]), Number(sepDate[0]), Number(sepDate[2]));
  switch (true) {
    case phase < 2 && phase > 28:
      return "🌑";
    case phase < 6 && phase > 1:
      return "🌒";
    case phase < 10 && phase > 5:
      return "🌓";
    case phase < 14 && phase > 9:
      return "🌔";
    case phase < 17 && phase > 13:
      return "🌕";
    case phase < 20 && phase > 16:
      return "🌖";
    case phase < 26 && phase > 19:
      return "🌗";
    case phase < 29 && phase > 24:
      return "🌘";
  }
}

const SkyData: React.FC = () => {
  return (
    <>
      <h3 className="centered">
        <br />
        Sky Data
      </h3>
      <IonGrid>
        <IonRow>
          <img src="assets/img/sunrisesunset.png" />
        </IonRow>
        <IonRow>
          <IonCol>
            <h3 className="left">
              Sunrise
              <br />
              {sunrise.toLocaleTimeString("en-US")}
            </h3>
          </IonCol>
          <IonCol>
            <h3 className="right">
              Sunset
              <br />
              {sunset.toLocaleTimeString("en-US")}
            </h3>
          </IonCol>
        </IonRow>
        <IonRow>
          <h3 className="centered">
            <br />
            Lunar Phase
            <br />
            <br />
            {getMoon()}
            <br />
            <br />
          </h3>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default SkyData;
