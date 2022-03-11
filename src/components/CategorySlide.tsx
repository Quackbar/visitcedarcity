import React from "react";
import { IonSlides, IonChip, IonSlide, IonIcon, IonLabel } from "@ionic/react";
import {
  fastFood,
  wine,
  trailSign,
  storefront,
  colorPalette,
  bed,
  shield,
  bonfire,
  telescope,
  ticket,
  carSport,
  fish,
} from "ionicons/icons";
import { updateSelectedAttractionFilters } from "../data/actions";
import { connect } from "../data/connect";
import { AllCategories, AttractionCategories } from "../models/defaultModels";

const slideCategories: { [id: string]: AllCategories[] } = {
  food: [],
  parks: [],
  lodging: [],
  shops: [],
  arts: [],
  drinks: [],
  camping: [],
  drives: [],
  shows: [],
  lookouts: [],
  trails: [
    AttractionCategories.Experiences.subcategories.Outdoor,
    AttractionCategories.Experiences.subcategories.CedarCityWalks,
    AttractionCategories.Experiences.subcategories.Trails,
  ],
};

interface DispatchProps {
  updateSelectedAttractionFilters: typeof updateSelectedAttractionFilters;
}

type CategorySlidesProps = {} & {} & DispatchProps;

const CategorySlides: React.FC<CategorySlidesProps> = ({
  updateSelectedAttractionFilters,
}) => {

  return (
    <>
      <br />
      <IonSlides pager={false} scrollbar={false}>
        <IonSlide>
          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.food)}>
            <IonIcon icon={fastFood} color="primary" />
            <IonLabel>Food</IonLabel>
          </IonChip>

          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.parks)}>
            <IonIcon icon={shield} color="primary" />
            <IonLabel>National&nbsp;Parks</IonLabel>
          </IonChip>
          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.lodging)}>
            <IonIcon icon={bed} color="primary" />
            <IonLabel>Lodging</IonLabel>
          </IonChip>
          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.trails)}>
            <IonIcon icon={trailSign} color="primary" />
            <IonLabel>Trails</IonLabel>
          </IonChip>
        </IonSlide>
        <IonSlide>
          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.shops)}>
            <IonIcon icon={storefront} color="primary" />
            <IonLabel>Shops</IonLabel>
          </IonChip>
          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.art)}>
            <IonIcon icon={colorPalette} color="primary" />
            <IonLabel>Art</IonLabel>
          </IonChip>
          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.drinks)}>
            <IonIcon icon={wine} color="primary" />
            <IonLabel>Drinks</IonLabel>
          </IonChip>

          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.camping)}>
            <IonIcon icon={bonfire} color="primary" />
            <IonLabel>Camping&nbsp;Grounds</IonLabel>
          </IonChip>
        </IonSlide>
        <IonSlide>
          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.drives)}>
            <IonIcon icon={carSport} color="primary" />
            <IonLabel>Drives</IonLabel>
          </IonChip>
          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.fishing)}>
            <IonIcon icon={fish} color="primary" />
            <IonLabel>Fishing</IonLabel>
          </IonChip>

          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.shows)}>
            <IonIcon icon={ticket} color="primary" />
            <IonLabel>Shows</IonLabel>
          </IonChip>

          <IonChip onClick={() => updateSelectedAttractionFilters(slideCategories.lookouts)}>
            <IonIcon icon={telescope} color="primary" />
            <IonLabel>Lookouts</IonLabel>
          </IonChip>
        </IonSlide>
      </IonSlides>
    </>
  );
};
// export default CategorySlides;

export default connect<{}, {}, DispatchProps>({
  mapStateToProps: (state) => ({}),
  mapDispatchToProps: {
    updateSelectedAttractionFilters,
  },
  component: CategorySlides,
});
