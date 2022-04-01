import React, { useContext, useEffect, useRef, useState } from "react";
import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import DiscoverList from "../components/DiscoverList";
import { filterCircleOutline } from "ionicons/icons";
import { AppContext } from "../data/context/AppContext";
import DiscoverListFilter from "../components/DiscoverListFilter";
import CategorySlide from "../components/CategorySlide";
import { AttractionItem } from "../models/defaultModels";
import { updateSearchText } from "../data/context/actions";
import { connect } from "../data/context/connect";
import { Browser } from "@capacitor/browser";


interface DispatchProps {
  updateSearchText: typeof updateSearchText;
}




const Discover: React.FC<DispatchProps> = ({ updateSearchText }) => {
  const context = useContext(AppContext);

  const refresherRef = useRef<HTMLIonRefresherElement>(null);
  const pageRef = useRef<HTMLElement>(null);

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filteredAttractions, setFilteredAttractions] = useState<AttractionItem[]>(context.state.attractionItems);

  const refreshDiscover = () => {
    // TODO: refresh data
    window.location.reload();
    refresherRef.current!.complete();
  };

  useEffect(() => {
    const selectedAttractionFilters = context.state.user.selectedAttractionFilters;
    const attractionItems = context.state.attractionItems;
    const searchText = context.state.user.searchText;

    // selected filters changed
    let filteredResults: AttractionItem[] = [];
    for (let selectedFilter of selectedAttractionFilters) {
      const resultsForFilter = attractionItems.filter((item) => item.categories?.some((e) => e === selectedFilter));

      for (let filterResult of resultsForFilter) {
        if (!filteredResults.includes(filterResult)) {
          filteredResults.push(filterResult);
        }
      }
    }

    if (searchText !== undefined) {
      filteredResults = filteredResults.filter((s) => s.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    }

    setFilteredAttractions(filteredResults);
  }, [context.state.attractionItems, context.state.user.selectedAttractionFilters, context.state.user.searchText]);
  const openSite = async () => {
    await Browser.open({
      url: "https://visitcedarcity.com/",
    });
  };
  return (
    <IonPage ref={pageRef} id="discover-page">
      <IonContent fullscreen={true}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Discover Cedar City</IonTitle>
            <IonButton onClick={() => setShowFilterModal(true)} slot="end" fill="clear">
              <IonIcon icon={filterCircleOutline} slot="icon-only" />
            </IonButton>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar placeholder="Search" onIonChange={(e: CustomEvent) => updateSearchText(e.detail.value)} />
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" ref={refresherRef} onIonRefresh={refreshDiscover}>
          <IonRefresherContent />
        </IonRefresher>
        <CategorySlide />
        <DiscoverList attractions={filteredAttractions} />

        <IonGrid>
          <IonRow>
          <IonButton class="centered" onClick={openSite}>
          See Extended List of Offerings
        </IonButton>
          </IonRow>
        </IonGrid>

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

export default connect<{}, {}, DispatchProps>({
  mapDispatchToProps: {
    updateSearchText,
  },
  component: React.memo(Discover),
});
