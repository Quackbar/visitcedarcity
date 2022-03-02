import {
  IonBackButton,
  IonButtons,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { connect } from "../data/connect";
import { RouteComponentProps, withRouter } from "react-router";
import { getAttractionItem } from "../data/selectors";
import { AttractionItem } from "../models/defaultModels";

interface OwnProps extends RouteComponentProps {}
interface StateProps {
  attraction?: AttractionItem;
}
type AttractionItemDetailProps = OwnProps & StateProps;

const AttractionItemDetail: React.FC<AttractionItemDetailProps> = ({
  attraction,
}) => {
  if (!attraction) {
    return <div>Attraction not found</div>;
  }

  return (
    <IonPage id="attraction-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/discover"></IonBackButton>
          </IonButtons>
          <IonTitle>{attraction.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={attraction.image} />
        <div className="ion-padding">
          <div className="ion-padding-bottom">
            <IonCardSubtitle>{attraction.subtitle}</IonCardSubtitle>
            <IonCardTitle>{attraction.title}</IonCardTitle>
          </div>
          <IonText>{attraction.description}</IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

// export default AttractionItemDetail;

export default connect<OwnProps, StateProps>({
  mapStateToProps: (state, OwnProps) => ({
    attraction: getAttractionItem(state, OwnProps),
  }),
  component: withRouter(AttractionItemDetail),
});
