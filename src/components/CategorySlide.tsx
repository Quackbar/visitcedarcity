import React, { useEffect, useState } from "react";
import {
  IonChip,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
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
  close,
  sunny,
} from "ionicons/icons";
import { updateSelectedAttractionFilters } from "../data/actions";
import { connect } from "../data/connect";
import { AllCategories, AttractionCategories } from "../models/defaultModels";

enum slideCategories {
  food = "food",
  parks = "parks",
  lodging = "lodging",
  familyfun = "familyfun",
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
slideCategoriesData[slideCategories.food] = [
  AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
  AttractionCategories.FoodAndDrink.subcategories.Specialty,
  AttractionCategories.FoodAndDrink.subcategories.Mexican,

];

slideCategoriesData[slideCategories.parks] = [
  AttractionCategories.Experiences.subcategories.NationalParks,

];
slideCategoriesData[slideCategories.lodging] = [
  AttractionCategories.Lodging.subcategories.Lodge,
  AttractionCategories.Lodging.subcategories.HotelMotel,
  AttractionCategories.Lodging.subcategories.BedAndBreakfast,
  AttractionCategories.Lodging.subcategories.Resort,


];
slideCategoriesData[slideCategories.familyfun] = [
  AttractionCategories.Experiences.subcategories.FamilyFun,
  AttractionCategories.Experiences.subcategories.ActivitiesAndEvents,

];
slideCategoriesData[slideCategories.shops] = [];
slideCategoriesData[slideCategories.arts] = [
  AttractionCategories.Experiences.subcategories.CedarCityArts,

];
slideCategoriesData[slideCategories.drinks] = [
  AttractionCategories.FoodAndDrink.subcategories.Alcohol,
  AttractionCategories.FoodAndDrink.subcategories.Coffee,
];
slideCategoriesData[slideCategories.camping] = [
  AttractionCategories.Lodging.subcategories.Campground,
  AttractionCategories.Lodging.subcategories.Tenting,
  AttractionCategories.Lodging.subcategories.RVSite,
  AttractionCategories.Lodging.subcategories.Cabin,
  AttractionCategories.Lodging.subcategories.Cabinettes,


];
slideCategoriesData[slideCategories.drives] = [  
  AttractionCategories.Experiences.subcategories.Drives,
];
slideCategoriesData[slideCategories.shows] = [];
slideCategoriesData[slideCategories.fishing] = [
  AttractionCategories.Experiences.subcategories.Fishing,

];
slideCategoriesData[slideCategories.lookouts] = [
  AttractionCategories.Experiences.subcategories.DarkSkies,

];
slideCategoriesData[slideCategories.trails] = [
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
slideCategoriesLabel[slideCategories.familyfun] = { name: "Family\xa0Fun", icon: sunny };

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

interface StateProps {
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
  updateSelectedAttractionFilters,
}) => {
  const [selectedSlideCategory, setSelectedSlideCategory] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    setSelectedSlideCategory(undefined);
    Object.keys(slideCategoriesData).forEach((key, _: number) => {
      if (slideCategoriesData[key] === selectedFilters) {
        setSelectedSlideCategory(key);
      }
    });
  }, [selectedFilters]);

  const selectFilterGroup = (category: string) => {
    setSelectedSlideCategory(category);
    updateSelectedAttractionFilters(slideCategoriesData[category]);
  };

  const deselectFilterGroup = () => {
    setSelectedSlideCategory(undefined);
    updateSelectedAttractionFilters([...allFilters]);
  };

  return (
    <>
      {selectedSlideCategory !== undefined ? (
        <>
          <IonSegment id="categorySlideSegment">
            <IonChip color="primary">
              <IonIcon
                icon={slideCategoriesLabel[selectedSlideCategory].icon}
                color="primary"
              />
              <IonLabel>
                {slideCategoriesLabel[selectedSlideCategory].name}
              </IonLabel>
            </IonChip>
            <IonSegmentButton
              onClick={() => deselectFilterGroup()}
              layout="icon-start"
            >
              <IonIcon icon={close} />
            </IonSegmentButton>
          </IonSegment>
        </>
      ) : (
        <>
          <IonSegment
            id="categorySlideSegment"
            className={"hide-scrollbar"}
            scrollable={true}
            draggable={true}
          >
            {Object.values(slideCategories).map((category, index) => (
              <IonChip key={index} onClick={() => selectFilterGroup(category)}>
                <IonIcon
                  icon={slideCategoriesLabel[category].icon}
                  color="primary"
                />
                <IonLabel>{slideCategoriesLabel[category].name}</IonLabel>
              </IonChip>
            ))}
            <div style={{minWidth: '16px'}}></div>
          </IonSegment>
        </>
      )}
    </>
  );
};

export default connect<{}, {}, DispatchProps>({
  mapStateToProps: (state) => ({
    allFilters: state.allAttractionFilters,
    selectedFilters: state.selectedAttractionFilters,
  }),
  mapDispatchToProps: {
    updateSelectedAttractionFilters,
  },
  component: CategorySlides,
});
