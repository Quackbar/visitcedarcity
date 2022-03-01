import React, { useRef } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import DiscoverList from "../components/DiscoverList";
import { DiscoverItem } from "../models/DiscoverItem";

// needs to be replaced with real data
const discoverData: DiscoverItem[] = [
  {
    id: 0,
    name: "Prime Rib Dinner",
    org: "Cedar City",
    description: "Prime Rib Dinner is really good",
    headerURL: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/saltlake/cctb_logo0-29dc247c5056a36_29dc273d-5056-a36a-069774f0062eabe1.jpg"
  },
  {
    id: 1,
    name: "Night Skiing",
    org: "Brian Head",
    description: "Come ski at night",
    headerURL: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/saltlake/cctb_logo0-29dc247c5056a36_29dc273d-5056-a36a-069774f0062eabe1.jpg"
  },
];

const Discover: React.FC = () => {
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Discover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Discover</IonTitle>
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
        <DiscoverList data={discoverData} />
      </IonContent>
    </IonPage>
  );
};

export default Discover;
