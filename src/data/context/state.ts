// import { AllCategories, AttractionItem, SubscriptionItem, User } from "../../models/defaultModels";
import {  ExpObj, Foods, Lodging } from "../attractions";
import {
  AllCategories,
  AttractionCategories,
  AttractionItem,
  GroupedAttractionCategories,
  SubscriptionItem,
  User,
} from "../../models/defaultModels";
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
  sunny,
} from "ionicons/icons";
import { OutdoorItems, CityItems } from "../attractions";
import { Subscriptions } from "../subscriptions";

export type AppState = {
  attractionItems: AttractionItem[];
  allAttractionFilters: AllCategories[];
  subscriptionItems: SubscriptionItem[];
  groupedAttractions: { [id: string]: { name: string; icon: string; color: string; categories: AllCategories[] } };
  user: User;
};

function shuffle(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export const initialState: AppState = {
  attractionItems: shuffle(shuffle(OutdoorItems.concat(shuffle(CityItems.concat(shuffle(ExpObj.concat(shuffle(Foods.concat(shuffle(Lodging)))))))))),
  allAttractionFilters: Object.values(AllCategories),
  subscriptionItems: Subscriptions,
  groupedAttractions: {
    [GroupedAttractionCategories.Food]: {
      name: "Food",
      icon: fastFood,
      color: "#000000",
      categories: [
        AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
        AttractionCategories.FoodAndDrink.subcategories.Specialty,
        AttractionCategories.FoodAndDrink.subcategories.Mexican,
      ],
    },
    [GroupedAttractionCategories.Parks]: {
      name: "National\xa0Parks",
      icon: shield,
      color: "#000000",
      categories: [AttractionCategories.Experiences.subcategories.NationalParks],
    },
    [GroupedAttractionCategories.Lodging]: {
      name: "Lodging",
      icon: bed,
      color: "#000000",
      categories: [
        AttractionCategories.Lodging.subcategories.Lodge,
        AttractionCategories.Lodging.subcategories.HotelMotel,
        AttractionCategories.Lodging.subcategories.BedAndBreakfast,
        AttractionCategories.Lodging.subcategories.Resort,
      ],
    },
    [GroupedAttractionCategories.FamilyFun]: {
      name: "Family\xa0Fun",
      icon: sunny,
      color: "#000000",
      categories: [
        AttractionCategories.Experiences.subcategories.FamilyFun,
        AttractionCategories.Experiences.subcategories.ActivitiesAndEvents,
      ],
    },
    [GroupedAttractionCategories.Shops]: {
      name: "Shops",
      icon: storefront,
      color: "#000000",
      categories: [AttractionCategories.Experiences.subcategories.Shop],
    },
    [GroupedAttractionCategories.Arts]: {
      name: "Art",
      icon: colorPalette,
      color: "#000000",
      categories: [AttractionCategories.Experiences.subcategories.CedarCityArts],
    },
    [GroupedAttractionCategories.Drinks]: {
      name: "Drinks",
      icon: wine,
      color: "#000000",
      categories: [
        AttractionCategories.FoodAndDrink.subcategories.Alcohol,
        AttractionCategories.FoodAndDrink.subcategories.Coffee,
      ],
    },
    [GroupedAttractionCategories.Camping]: {
      name: "Camping\xa0Grounds",
      icon: bonfire,
      color: "#000000",
      categories: [
        AttractionCategories.Lodging.subcategories.Campground,
        AttractionCategories.Lodging.subcategories.Tenting,
        AttractionCategories.Lodging.subcategories.RVSite,
        AttractionCategories.Lodging.subcategories.Cabin,
        AttractionCategories.Lodging.subcategories.Cabinettes,
      ],
    },
    [GroupedAttractionCategories.Drives]: {
      name: "Drives",
      icon: carSport,
      color: "#000000",
      categories: [AttractionCategories.Experiences.subcategories.Drives],
    },
    [GroupedAttractionCategories.Shows]: {
      name: "Shows",
      icon: ticket,
      color: "#000000",
      categories: [AttractionCategories.Experiences.subcategories.Shows],
    },
    [GroupedAttractionCategories.Fishing]: {
      name: "Fishing",
      icon: fish,
      color: "#000000",
      categories: [AttractionCategories.Experiences.subcategories.Fishing],
    },
    [GroupedAttractionCategories.Lookouts]: {
      name: "Lookouts",
      icon: telescope,
      color: "#000000",
      categories: [AttractionCategories.Experiences.subcategories.DarkSkies],
    },
    [GroupedAttractionCategories.Trails]: {
      name: "Trails",
      icon: trailSign,
      color: "#000000",
      categories: [
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
      ],
    },
  },
  user: {
    selectedAttractionFilters: Object.values(AllCategories),
    selectedSubscriptions: [],
    selectedHomeModules: [],
    hasSeenTutorial: false,
    isLoading: false,
    searchText: undefined,
  },
};
