import React, { useRef } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  AlertButton,
} from "@ionic/react";

import { pinOutline } from "ionicons/icons";
import { Session } from "../models/Schedule";

interface DiscoverListItemProps {
  session: Session;
  listType: "all" | "favorites";
  onAddFavorite: (id: number) => void;
  onRemoveFavorite: (id: number) => void;
  onShowAlert: (header: string, buttons: AlertButton[]) => void;
  isFavorite: boolean;
}

const DiscoverListItem: React.FC<DiscoverListItemProps> = ({
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
  onShowAlert,
  session,
  listType,
}) => {
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  const dismissAlert = () => {
    ionItemSlidingRef.current && ionItemSlidingRef.current.close();
  };

  const removeFavoriteSession = () => {
    onAddFavorite(session.id);
    onShowAlert("Favorite already added", [
      {
        text: "Cancel",
        handler: dismissAlert,
      },
      {
        text: "Remove",
        handler: () => {
          onRemoveFavorite(session.id);
          dismissAlert();
        },
      },
    ]);
  };

  const addFavoriteSession = () => {
    if (isFavorite) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      removeFavoriteSession();
    } else {
      // remember this session as a user favorite
      onAddFavorite(session.id);
      onShowAlert("Favorite Added", [
        {
          text: "OK",
          handler: dismissAlert,
        },
      ]);
    }
  };

  return (
    <IonCard routerLink={`/tabs/schedule/${session.id}`}>
      <img
        src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/saltlake/cctb_logo0-29dc247c5056a36_29dc273d-5056-a36a-069774f0062eabe1.jpg"
        alt="logo"
      />
      <IonCardHeader>
        <IonCardSubtitle>{session.location}</IonCardSubtitle>
        <IonCardTitle>{session.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{session.description}</IonCardContent>

      <IonItem>
        <IonButton color="light" onClick={addFavoriteSession}>
          <IonIcon icon={pinOutline} slot="icon-only" />
        </IonButton>
        {/* <IonLabel>ion-item in a card, icon left, button right</IonLabel> */}
        <IonButton fill="outline" slot="end">
          View
        </IonButton>
      </IonItem>
    </IonCard>
    // <IonItemSliding ref={ionItemSlidingRef} class={'track-' + session.tracks[0].toLowerCase()}>
    //   <IonItem routerLink={`/tabs/schedule/${session.id}`}>
    //     <IonLabel>
    //       <h3>{session.name}</h3>
    //       <p>
    //         {session.timeStart}&mdash;&nbsp;
    //         {session.timeStart}&mdash;&nbsp;
    //         {session.location}
    //       </p>
    //     </IonLabel>
    //   </IonItem>
    //   <IonItemOptions>
    //     {listType === "favorites" ?
    //       <IonItemOption color="danger" onClick={() => removeFavoriteSession()}>
    //         Remove
    //       </IonItemOption>
    //       :
    //       <IonItemOption color="favorite" onClick={addFavoriteSession}>
    //         Favorite
    //       </IonItemOption>
    //     }
    //   </IonItemOptions>
    // </IonItemSliding>
  );
};

export default React.memo(DiscoverListItem);
