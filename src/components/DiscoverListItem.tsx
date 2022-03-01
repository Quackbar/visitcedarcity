import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { TourismItem } from "../models/defaultModels";

interface DiscoverListItemProps {
  data: TourismItem;
}

const DiscoverListItem: React.FC<DiscoverListItemProps> = ({ data }) => {
  return (
    <IonCard routerLink={`/discover/${data.type}/${data.id}`}>
      <img
        src={data.image}
        alt="logo"
      />
      <IonCardHeader>
        <IonCardSubtitle>{data.subtitle}</IonCardSubtitle>
        <IonCardTitle>{data.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{data.description}</IonCardContent>
    </IonCard>
  );
};

export default React.memo(DiscoverListItem);
