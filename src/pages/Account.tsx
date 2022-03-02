import { IonContent,IonText, IonHeader,IonList,IonListHeader,IonItem,IonCheckbox, IonPage, IonTitle, IonToolbar } from "@ionic/react";

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
          <IonItem>
            <IonCheckbox>
                   Random Sub
            </IonCheckbox>
            <IonText>
            &nbsp;Random Sub
            </IonText>
          </IonItem>
          <IonItem>
            <IonCheckbox>
              Random Sub
            </IonCheckbox>
            <IonText>
            &nbsp;Random Sub
            </IonText>
          </IonItem>
          <IonItem>
            <IonCheckbox>
              Random Sub
            </IonCheckbox>
            <IonText>
            &nbsp;Random Sub
            </IonText>
          </IonItem>
          <IonItem>
            <IonCheckbox>
              Random Sub
            </IonCheckbox>
            <IonText>
            &nbsp;Random Sub
            </IonText>
          </IonItem>
          <IonItem>
            <IonCheckbox>
                   Random Sub
            </IonCheckbox>
            <IonText>
            &nbsp;Random Sub
            </IonText>
          </IonItem>
          <IonItem>
            <IonCheckbox>
              Random Sub
            </IonCheckbox>
            <IonText>
            &nbsp;Random Sub
            </IonText>
          </IonItem>
          <IonItem>
            <IonCheckbox>
              Random Sub
            </IonCheckbox>
            <IonText>
            &nbsp;Random Sub
            </IonText>
          </IonItem>
          <IonItem>
            <IonCheckbox>
              Random Sub
            </IonCheckbox>
            <IonText>
            &nbsp;Random Sub 
            </IonText>
          </IonItem>
        </IonList>

      </IonContent>
        </IonPage>
    )
}
export default Account;