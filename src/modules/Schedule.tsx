import React from "react";

import { IonItem, IonItemSliding, IonLabel } from "@ionic/react";

import { Browser } from "@capacitor/browser";

interface ScheduleProps {
  name: string;
  timeStart: string;
  timeEnd: string;
  thelocation: string;
  url: string;
}

const ScheduleComp: React.FC<ScheduleProps> = ({ name, timeStart, timeEnd, thelocation, url }) => {
  // var month = pad2(CurrentDate.getMonth()+1);//months (0-11)
  // var day = pad2(CurrentDate.getDate());//day (1-31)
  // var year= CurrentDate.getFullYear();
  const openSite = async () => {
    await Browser.open({ url: url });
  };
  return (
    <>
      <IonItemSliding onClick={openSite}>
        <IonItem>
          <IonLabel>
            <h3>{name}</h3>
            <p>
              {timeStart}&mdash;&nbsp;
              {timeEnd}&mdash;&nbsp;
              {thelocation}
            </p>
          </IonLabel>
        </IonItem>
      </IonItemSliding>
    </>
  );
};

export default ScheduleComp;
