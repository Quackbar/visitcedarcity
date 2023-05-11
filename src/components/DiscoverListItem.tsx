import React from "react";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonImg } from "@ionic/react";
import { AttractionItem } from "../models/defaultModels";
import { Browser } from "@capacitor/browser";
import isThisHour from "date-fns/isThisHour/index";
import { compassOutline, mapOutline } from "ionicons/icons";

interface DiscoverListItemProps {
  data: AttractionItem;
}

function isValidHttpUrl(string: any):boolean {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return true;
}
const DiscoverListItem: React.FC<DiscoverListItemProps> = ({ data }) => {
  const openSite = async () => {
    await Browser.open({ url: data.url });
  };
  const openMap = async () => {
    //@ts-ignore
    await Browser.open({ url: data.address });
  };


  return (
    <IonCard onClick={openSite}>
      <IonImg src={data.image} id={data.id.toString()} onIonError={(e)=>{
        console.log(e.target!)
        const img = document.getElementById(data.id.toString())
        img!.style.display = "none"
      }} alt={data.title}/>
      <IonCardHeader>
        <IonCardSubtitle>{data.subtitle}</IonCardSubtitle>
        <IonCardTitle>{data.title}</IonCardTitle>
        

      </IonCardHeader>
      <IonCardContent>
        {data.description.length > 250 ? `${data.description.substring(0, 200)}...` : data.description}
        <br/>
        <br/>
        <IonButton onClick={openSite}><IonIcon icon={compassOutline}></IonIcon></IonButton>
        {isValidHttpUrl(data.address) ? <IonButton onClick={openMap}><IonIcon icon={mapOutline}></IonIcon></IonButton> : <></>}

      </IonCardContent>
    </IonCard>
  );

};

export default React.memo(DiscoverListItem);
