import { IonContent,IonText, IonHeader,IonList,IonListHeader,IonItem,IonCheckbox, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import {Subscriptions} from '../models/defaultModels'

import App from '../components/Chart';

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
        <App/>
        <IonList>
          <IonListHeader>
            Subscriptions 
          </IonListHeader>
          {Subscriptions.map(Subscription => {
              var key = Object.keys(Subscription)[0]
              var values = Object.values(Subscription)[0]
              var title = values?.title || "";

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