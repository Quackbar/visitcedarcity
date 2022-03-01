import React, { useRef } from "react";
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
import { TourismItem, TOURISM_ITEM_TYPE } from "../models/defaultModels";
import { filterCircleOutline } from "ionicons/icons";

// needs to be replaced with real data
const discoverData: TourismItem[] = [
  {
    id: 0,
    title: "Prime Rib Dinner",
    subtitle: "Cedar City",
    description: "Prime Rib Dinner is really good",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/saltlake/cctb_logo0-29dc247c5056a36_29dc273d-5056-a36a-069774f0062eabe1.jpg",
    type: TOURISM_ITEM_TYPE.EVENT,
  },
  {
    id: 1,
    title: "21 Eleven Coffee",
    subtitle: "Coffee / Drinks",
    description: "2111 N Main St, Cedar City, UT 84721",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/21-Eleven-Coffee_-21elevencoffee_9B8E20DC-5056-A36F-231E00879EBAA6DF-9b8e1ff05056a36_9b8e2144-5056-a36f-23347640b81ac4c2.jpg",
    type: TOURISM_ITEM_TYPE.LOCATION,
  },
  {
    id: 2,
    title: "Night Skiing",
    subtitle: "Brian Head",
    description: "Come ski at night",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/saltlake/cctb_logo0-29dc247c5056a36_29dc273d-5056-a36a-069774f0062eabe1.jpg",
    type: TOURISM_ITEM_TYPE.EVENT,
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
        <DiscoverList data={discoverData} />
      </IonContent>
    </IonPage>
  );
};

export default Discover;
