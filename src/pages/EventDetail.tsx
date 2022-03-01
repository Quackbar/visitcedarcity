import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const EventDetail: React.FC = () => {
  return (
    <IonPage id="event-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/discover"></IonBackButton>
          </IonButtons>
          <IonTitle>Event Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default EventDetail;
