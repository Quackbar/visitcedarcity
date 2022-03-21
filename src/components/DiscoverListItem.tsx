import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from "@ionic/react";
import { AttractionItem } from "../models/defaultModels";
import { Browser } from "@capacitor/browser";

interface DiscoverListItemProps {
  data: AttractionItem;
}

const DiscoverListItem: React.FC<DiscoverListItemProps> = ({ data }) => {
  const openSite = async () => {
    await Browser.open({ url: data.url });
  };
  return (
    <IonCard onClick={openSite}>
      <IonImg src={data.image} />
      <IonCardHeader>
        <IonCardSubtitle>{data.subtitle}</IonCardSubtitle>
        <IonCardTitle>{data.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {data.description.length > 250 ? `${data.description.substring(0, 200)}...` : data.description}
      </IonCardContent>
    </IonCard>
  );
};

export default React.memo(DiscoverListItem);
