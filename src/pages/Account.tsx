import { IonContent,IonText, IonHeader,IonList,IonListHeader,IonItem,IonCheckbox, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import Chart from '../components/Chart';

import {Subscriptions} from '../models/defaultModels'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];





interface ChartData {
  label: string;
  data: string[];
  backgroundColor: string;
}

interface ChartProps{
  labels: string[];
  datasets: ChartData[];
}



const Account: React.FC = () => {
    return (
        <IonPage id="account-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
        <IonTitle class="centered">
          <br/>SEE HERE WHEN<br/>YOUR EVENTS ARE HAPPENING<br/>IN CEDAR CITY / BRIAN HEAD
        </IonTitle>
        <Chart/>
        <IonList>
          <IonListHeader>
            Subscriptions 
          </IonListHeader>
          {Subscriptions.map(Subscription => {
              var key = Object.keys(Subscription)[0]
              var values = Object.values(Subscription)[0]

            return(
              <IonItem >
              <IonCheckbox class={"c" + values?.color.slice(1)}>
              {values?.title}
              </IonCheckbox>
              <IonText >
              &nbsp;{values?.title}
              </IonText>
            </IonItem>
            );
          })}
        </IonList>

      </IonContent>
        </IonPage>
    )
}
export default Account;