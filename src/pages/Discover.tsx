import React, { useContext, useEffect, useRef, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
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
import DiscoverListFilter from "../components/DiscoverListFilter";
import CategorySlide from "../components/CategorySlide";
import { AttractionItem } from "../models/defaultModels";

const Discover: React.FC = () => {
  const context = useContext(AppContext);

  const refresherRef = useRef<HTMLIonRefresherElement>(null);
  const pageRef = useRef<HTMLElement>(null);

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filteredAttractions, setFilteredAttractions] = useState<
    AttractionItem[]
  >(context.state.attractionItems);

  const refreshDiscover = () => {
    // TODO: refresh data
    window.location.reload();

    refresherRef.current!.complete();
  };


  const searchDiscover = (text?: string) => {
    // TODO: search data
  };

  useEffect(() => {
    // selected filters changed
    let filteredResults: AttractionItem[] = [];
    for (let selectedFilter of context.state.user.selectedAttractionFilters) {
      const resultsForFilter = context.state.attractionItems.filter((item) =>
        item.categories?.some((e) => e === selectedFilter)
      );

      for (let filterResult of resultsForFilter) {
        if (!filteredResults.includes(filterResult)) {
          filteredResults.push(filterResult);
        }
      }
    }

    setFilteredAttractions(filteredResults);
  }, [context.state.attractionItems, context.state.user.selectedAttractionFilters]);

  return (
    <IonPage ref={pageRef} id="discover-page">
      <IonContent fullscreen={true}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Discover Cedar City</IonTitle>
            <IonButton
              onClick={() => setShowFilterModal(true)}
              slot="end"
              fill="clear"
            >
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
        <CategorySlide />
        <DiscoverList attractions={filteredAttractions} />
      </IonContent>

      <IonModal
        isOpen={showFilterModal}
        onDidDismiss={() => setShowFilterModal(false)}
        swipeToClose={true}
        presentingElement={pageRef.current!}
      >
        <DiscoverListFilter onDismissModal={() => setShowFilterModal(false)} />
      </IonModal>
    </IonPage>
  );
};

export default Discover;
