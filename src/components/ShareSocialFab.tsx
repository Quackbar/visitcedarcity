import { Browser } from "@capacitor/browser";
import { IonLoading, IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react"
import { shareSocial, logoVimeo, logoInstagram, logoTwitter, logoFacebook, addOutline, addCircleOutline } from "ionicons/icons"
import React, { useState } from "react"

const ShareSocialFab: React.FC = () => {
  const [loadingMessage, setLoadingMessage] = useState('')
  const [showLoading, setShowLoading] = useState(false);

  const openSocial = (network: string) => {
    setLoadingMessage(`Going to ${network}`);
    setShowLoading(true);
    
  };
  const openFacebook = async () => {
    await Browser.open({ url: "https://www.facebook.com/VisitCedarCity" });
  };
  const openInstagram = async () => {
    await Browser.open({ url: "https://www.instagram.com/visitcedarcity/" });
  };

  return(
    <>
      <IonLoading
        isOpen={showLoading}
        message={loadingMessage}
        duration={2000}
        spinner="crescent"
        onDidDismiss={() => setShowLoading(false)}
      />
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton size="small">
          <IonIcon icon={addCircleOutline} />
        </IonFabButton>
        <IonFabList side="top" >
          <IonFabButton color="instagram" onClick={() => openInstagram}>
            <IonIcon icon={logoInstagram} />
          </IonFabButton>
          <IonFabButton color="facebook" onClick={() => openFacebook}>
            <IonIcon icon={logoFacebook} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  )
};

export default ShareSocialFab;