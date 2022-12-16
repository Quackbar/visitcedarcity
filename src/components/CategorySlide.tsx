import React, { useEffect, useState } from "react";
import { IonChip, IonIcon, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { close } from "ionicons/icons";
import { updateSelectedAttractionFilters } from "../data/context/actions";
import { connect } from "../data/context/connect";
import { AllCategories } from "../models/defaultModels";

interface StateProps {
  groupedAttractions: { [id: string]: { name: string; icon: string; categories: AllCategories[]; url: string } };
  selectedFilters: AllCategories[];
  allFilters: AllCategories[];
}
interface DispatchProps {
  updateSelectedAttractionFilters: typeof updateSelectedAttractionFilters;
}

type CategorySlidesProps = {} & StateProps & DispatchProps;

const CategorySlides: React.FC<CategorySlidesProps> = ({
  selectedFilters,
  allFilters,
  groupedAttractions,
  updateSelectedAttractionFilters,
}) => {
  const [selectedSlideCategory, setSelectedSlideCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    setSelectedSlideCategory(undefined);
    Object.keys(groupedAttractions).forEach((key: string, _) => {
      if (groupedAttractions[key].categories === selectedFilters) {
        setSelectedSlideCategory(key);
      }
    });
  }, [groupedAttractions, selectedFilters]);

  const selectFilterGroup = (category: string) => {
    setSelectedSlideCategory(category);
    updateSelectedAttractionFilters(groupedAttractions[category].categories);
  };

  const deselectFilterGroup = () => {
    setSelectedSlideCategory(undefined);
    updateSelectedAttractionFilters([...allFilters]);
  };

  return (
    <>
      <br />
      {selectedSlideCategory !== undefined ? (
        <>
          <IonSegment id="categorySlideSegment">
            <IonChip color="primary">
              <IonIcon icon={groupedAttractions[selectedSlideCategory].icon} color="primary" />
              <IonLabel>{groupedAttractions[selectedSlideCategory].name}</IonLabel>
            </IonChip>
            <IonSegmentButton onClick={() => {deselectFilterGroup() }} layout="icon-start">
              <IonIcon icon={close} />
            </IonSegmentButton>
          </IonSegment>
        </>
      ) : (
        <>
          <IonSegment id="categorySlideSegment" className={"hide-scrollbar"} scrollable={true} draggable={true}>
            {Object.keys(groupedAttractions).map((key, index) => (
              <IonChip key={index} onClick={() => {selectFilterGroup(key);localStorage.setItem("ExtendedUrl", groupedAttractions[key].url); console.log(groupedAttractions[key].url)}}>
                <IonIcon icon={groupedAttractions[key].icon} color="primary" />
                <IonLabel>{groupedAttractions[key].name}</IonLabel>
              </IonChip>
            ))}
            <div style={{ minWidth: "16px" }}></div>
          </IonSegment>
        </>
      )}
    </>
  );
};

export default connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    allFilters: state.allAttractionFilters,
    selectedFilters: state.user.selectedAttractionFilters,
    groupedAttractions: state.groupedAttractions,
  }),
  mapDispatchToProps: {
    updateSelectedAttractionFilters,
  },
  component: CategorySlides,
});
