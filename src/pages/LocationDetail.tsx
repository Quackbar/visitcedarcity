import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { getTourismItem } from "../data/selectors";

interface LocationDetailProps extends RouteComponentProps { };

const LocationDetail: React.FC<LocationDetailProps> = (props) => {
  // const state = useContext(AppContext).state;

  // console.log(this?.props.match.params.id)
  console.log(getTourismItem(props.match.params.id));

  return (
    <IonPage id="location-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/discover"></IonBackButton>
          </IonButtons>
          <IonTitle>{}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default LocationDetail;
