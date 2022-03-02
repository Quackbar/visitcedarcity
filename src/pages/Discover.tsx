import React, { useContext, useRef } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import DiscoverList from "../components/DiscoverList";
import { filterCircleOutline } from "ionicons/icons";
import { AppContext } from "../data/AppContext";

const Discover: React.FC = () => {
  const context = useContext(AppContext)
  const refresherRef = useRef<HTMLIonRefresherElement>(null);

  const refreshDiscover = () => {
    // TODO: refresh data
    refresherRef.current!.complete();
  };

  const searchDiscover = (text?: string) => {
    // TODO: search data
  };

  return (
    <IonPage id="discover-page">
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Discover Cedar City</IonTitle>
            <IonButton onClick={() => {}} slot="end" fill="clear">
              <IonIcon icon={filterCircleOutline} slot="icon-only" />
            </IonButton>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              placeholder="Search"
              onIonChange={(e: CustomEvent) => searchDiscover(e.detail.value)}
            />
          </IonToolbar>
        </IonHeader>
        <IonRefresher
          slot="fixed"
          ref={refresherRef}
          onIonRefresh={refreshDiscover}
        >
          <IonRefresherContent />
        </IonRefresher>
        <DiscoverList data={context.state.attractionItems} />
      </IonContent>
    </IonPage>
  );
};

export default Discover;
