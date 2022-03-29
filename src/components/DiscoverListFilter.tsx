import React from "react";
import { getMode } from "@ionic/core";
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { AllCategories, AllCategoryLabels, AttractionCategories } from "../models/defaultModels";
import { connect } from "../data/context/connect";
import { updateSelectedAttractionFilters } from "../data/context/actions";

interface OwnProps {
  onDismissModal: () => void;
}

interface StateProps {
  allFilters: AllCategories[];
  selectedFilters: AllCategories[];
}

interface DispatchProps {
  updateSelectedAttractionFilters: typeof updateSelectedAttractionFilters;
}

type DiscoverListFilterProps = OwnProps & StateProps & DispatchProps;

const DiscoverListFilter: React.FC<DiscoverListFilterProps> = ({
  allFilters,
  selectedFilters,
  onDismissModal,
  updateSelectedAttractionFilters,
}) => {
  const ios = getMode() === "ios";

  const toggleAttractionFilter = (filter: AllCategories) => {
    if (selectedFilters.indexOf(filter) > -1) {
      updateSelectedAttractionFilters(selectedFilters.filter((x) => x !== filter));
    } else {
      updateSelectedAttractionFilters([...selectedFilters, filter]);
    }
  };

  const handleDeselectAll = () => {
    updateSelectedAttractionFilters([]);
  };

  const handleSelectAll = () => {
    updateSelectedAttractionFilters([...allFilters]);
  };

  return (
    <>
      <IonHeader translucent={true} className="session-list-filter">
        <IonToolbar>
          <IonButtons slot="start">
            {ios && <IonButton onClick={onDismissModal}>Cancel</IonButton>}
            {!ios && <IonButton onClick={handleDeselectAll}>Reset</IonButton>}
          </IonButtons>

          <IonTitle>Filters</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={onDismissModal} strong>
              Done
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="session-list-filter">
        <IonList lines={ios ? "inset" : "full"}>
          {Object.values(AttractionCategories).map((category, categoryIndex) => (
            <IonItemGroup key={`category-${categoryIndex}`}>
              <IonItemDivider sticky>
                <IonLabel>{category.label}</IonLabel>
              </IonItemDivider>
              {Object.values(category.subcategories).map((subcategory, subcategoryIndex) => (
                <IonItem key={`subcategory-${subcategoryIndex}`}>
                  <IonLabel>{AllCategoryLabels[subcategory]}</IonLabel>
                  <IonCheckbox
                    onClick={() => toggleAttractionFilter(subcategory)}
                    checked={selectedFilters.indexOf(subcategory) !== -1}
                    color="primary"
                    value={subcategory}
                  ></IonCheckbox>
                </IonItem>
              ))}
            </IonItemGroup>
          ))}
        </IonList>
      </IonContent>

      {ios && (
        <IonFooter>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={handleDeselectAll}>Deselect All</IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={handleSelectAll}>Select All</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      )}
    </>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    allFilters: state.allAttractionFilters,
    selectedFilters: state.user.selectedAttractionFilters,
  }),
  mapDispatchToProps: {
    updateSelectedAttractionFilters,
  },
  component: DiscoverListFilter,
});
