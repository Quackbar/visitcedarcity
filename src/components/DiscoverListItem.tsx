import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { DiscoverItem } from "../models/DiscoverItem";

interface DiscoverListItemProps {
  data: DiscoverItem;
}

const DiscoverListItem: React.FC<DiscoverListItemProps> = ({ data }) => {
  return (
    <IonCard>
      <img
        src={data.headerURL}
        alt="logo"
      />
      <IonCardHeader>
        <IonCardSubtitle>{data.org}</IonCardSubtitle>
        <IonCardTitle>{data.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{data.description}</IonCardContent>
    </IonCard>
  );
};

export default React.memo(DiscoverListItem);
