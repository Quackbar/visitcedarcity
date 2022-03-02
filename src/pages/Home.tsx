import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import Weather from '../components/Weather';


const Home: React.FC = () => {
    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Weather/>
            </IonContent>
        </IonPage>
    )
}
export default Home;