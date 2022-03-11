import React, { useEffect } from "react";
import {
  IonSlides,
  IonChip,
  IonSlide,
  IonIcon,
  IonLabel,
  IonSegment,
} from "@ionic/react";
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

enum slideCategories {
  food = "food",
  parks = "parks",
  lodging = "lodging",
  shops = "shops",
  arts = "arts",
  drinks = "drinks",
  camping = "camping",
  drives = "drives",
  fishing = "fishing",
  shows = "shows",
  lookouts = "lookouts",
  trails = "trails",
}

const slideCategoriesData: { [id: string]: AllCategories[] } = {};
slideCategoriesData[slideCategories.food] = [];
slideCategoriesData[slideCategories.parks] = [];
slideCategoriesData[slideCategories.lodging] = [];
slideCategoriesData[slideCategories.shops] = [];
slideCategoriesData[slideCategories.arts] = [];
slideCategoriesData[slideCategories.drinks] = [];
slideCategoriesData[slideCategories.camping] = [];
slideCategoriesData[slideCategories.drives] = [];
slideCategoriesData[slideCategories.shows] = [];
slideCategoriesData[slideCategories.fishing] = [];
slideCategoriesData[slideCategories.lookouts] = [];
slideCategoriesData[slideCategories.trails] = [
  AttractionCategories.Experiences.subcategories.Outdoor,
  AttractionCategories.Experiences.subcategories.CedarCityWalks,
  AttractionCategories.Experiences.subcategories.Trails,
];

const slideCategoriesLabel: { [id: string]: { name: string; icon: string } } =
  {};
slideCategoriesLabel[slideCategories.food] = { name: "Food", icon: fastFood };
slideCategoriesLabel[slideCategories.parks] = {
  name: "National\xa0Parks",
  icon: shield,
};
slideCategoriesLabel[slideCategories.lodging] = { name: "Lodging", icon: bed };
slideCategoriesLabel[slideCategories.shops] = {
  name: "Shops",
  icon: storefront,
};
slideCategoriesLabel[slideCategories.arts] = {
  name: "Art",
  icon: colorPalette,
};
slideCategoriesLabel[slideCategories.drinks] = { name: "Drinks", icon: wine };
slideCategoriesLabel[slideCategories.camping] = {
  name: "Camping\xa0Grounds",
  icon: bonfire,
};
slideCategoriesLabel[slideCategories.drives] = {
  name: "Drives",
  icon: carSport,
};
slideCategoriesLabel[slideCategories.shows] = { name: "Shows", icon: ticket };
slideCategoriesLabel[slideCategories.fishing] = { name: "Fishing", icon: fish };
slideCategoriesLabel[slideCategories.lookouts] = {
  name: "Lookouts",
  icon: telescope,
};
slideCategoriesLabel[slideCategories.trails] = {
  name: "Trails",
  icon: trailSign,
};

let selectedSlideCategory: AllCategories[] | undefined = undefined;

const slideOptions = {
  direction: "horizontal",
  observeSlideChildren: true,
  observer: true,
};

interface StateProps {
  selectedFilters: AllCategories[];
}

interface DispatchProps {
  updateSelectedAttractionFilters: typeof updateSelectedAttractionFilters;
}

type CategorySlidesProps = {} & StateProps & DispatchProps;

const CategorySlides: React.FC<CategorySlidesProps> = ({
  selectedFilters,
  updateSelectedAttractionFilters,
}) => {
  useEffect(() => {
    selectedSlideCategory = undefined;
    Object.values(slideCategoriesData).forEach((c, index: number) => {
      console.log(c);
      if (c === selectedFilters) {
        selectedSlideCategory = c;
      }
    });
  }, [selectedFilters]);

  return (
    <>
      <br />
      <IonSegment className={'hide-scrollbar'}scrollable={true} draggable={true}>
        {Object.values(slideCategories).map((category, index) => (
            <IonChip
              onClick={() =>
                updateSelectedAttractionFilters(slideCategoriesData[category])
              }
            >
              <IonIcon
                icon={slideCategoriesLabel[category].icon}
                color="primary"
              />
              <IonLabel>{slideCategoriesLabel[category].name}</IonLabel>
            </IonChip>
        ))}
      </IonSegment>
    </>
  );
};

export default connect<{}, {}, DispatchProps>({
  mapStateToProps: (state) => ({
    selectedFilters: state.selectedAttractionFilters,
  }),
  mapDispatchToProps: {
    updateSelectedAttractionFilters,
  },
  component: CategorySlides,
});
