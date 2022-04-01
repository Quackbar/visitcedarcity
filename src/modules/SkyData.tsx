import React from "react";
import { IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol, IonCard } from "@ionic/react";

import { getSunrise, getSunset } from "sunrise-sunset-js";

import { Simple } from "@lab-code/moonphase";

const today = new Date();
// console.log(today.toLocaleDateString());
const sepDate = today.toLocaleDateString().split("/");
// console.log(sepDate)

const sunset = getSunset(37.68912, -113.047006);
const sunrise = getSunrise(37.68912, -113.047006);
// const phaseEmoji = Moon.lunarPhaseEmoji();


function getMoonPhase(year: number, month: number, day: number)
{
    var c = 0;
    var e = 0;
    var jd = 0;
    var b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = parseInt(jd.toString()); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8 ) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon
    
    return b;
}


function getMoon() {
  const phase: Number = getMoonPhase(Number(sepDate[2]), Number(sepDate[0]), Number(sepDate[1]));
  // console.log(phase)
  switch (phase) {
    case 0:
      return "🌑";
    case 1:
      return "🌒";
    case 2:
      return "🌓";
    case 3:
      return "🌔";
    case 4:
      return "🌕";
    case 5:
      return "🌖";
    case 6:
      return "🌗";
    case 7:
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
