import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from "@ionic/react";
import { AttractionItem } from "../models/defaultModels";

interface DiscoverListItemProps {
  data: AttractionItem;
}

const DiscoverListItem: React.FC<DiscoverListItemProps> = ({ data }) => {
  return (
    <IonCard routerLink={`/discover/${data.id}`}>
      <IonImg src={data.image} />
      <IonCardHeader>
        <IonCardSubtitle>{data.subtitle}</IonCardSubtitle>
        <IonCardTitle>{data.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{data.description}</IonCardContent>
    </IonCard>
  );
};

export default React.memo(DiscoverListItem);
