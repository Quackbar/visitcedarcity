// import { AllCategories, AttractionItem, SubscriptionItem, User } from "../../models/defaultModels";
import { Custom, ExpObj, Foods, Lodging, TourItems } from "../attractions";
import {
  AllCategories,
  AttractionCategories,
  AttractionItem,
  GroupedAttractionCategories,
  MapAttractionCategories,
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
  carSport,
  fish,
  sunny,
  train,
  walk,
  heart,
} from "ionicons/icons";
import { OutdoorItems, CityItems } from "../attractions";
import { Subscriptions } from "../subscriptions";

export type AppState = {
  attractionItems: AttractionItem[];
  allAttractionFilters: AllCategories[];
  subscriptionItems: SubscriptionItem[];
  groupedAttractions: { [id: string]: { name: string; icon: string; color: string; categories: AllCategories[] } };
  mapAttractions: { [id: string]: { name: string; icon: string; color: string; categories: AllCategories[] } };
  user: User;
};

const shuffleArrays: (arrays: Array<any>[]) => Array<any> = (arrays) => {
  let concatArray: Array<any>[] = [];
  arrays.forEach((array) => {
    concatArray = concatArray.concat(array);
  });

  let currentIndex = concatArray.length;
  let randomIndex: number;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [concatArray[currentIndex], concatArray[randomIndex]] = [concatArray[randomIndex], concatArray[currentIndex]];
  }
  return concatArray;
};

let reAttraction = shuffleArrays([OutdoorItems, CityItems, ExpObj, Lodging, Custom]).concat(Foods.concat(CityItems)).concat(TourItems)

console.log("number of listed attractions: ",reAttraction.length)

let biases = localStorage.getItem("Biases") ?? "[]"
let biasesArr: string[] = []
try {
  biasesArr = JSON.parse(biases)
} catch (error) {
  console.log(error)
}
let filters = localStorage.getItem("Filters") ?? "[]"
let filtersArr: string[] = []
try {
  filtersArr = JSON.parse(filters)
} catch (error) {
  console.log(error)
}

let index = 0
reAttraction.forEach(el => {
  filtersArr.forEach(element => {
    if(el.title.includes(element)){
      reAttraction.splice(index, 1);
    }
  });
  biasesArr.forEach(element => {
    if(el.title.includes(element)){
      reAttraction.splice(index, 1);
      reAttraction.unshift(el)
    }
  });
  index++
})

export const initialState: AppState = {
  attractionItems: reAttraction,
  allAttractionFilters: Object.values(AllCategories),
  subscriptionItems: Subscriptions,
  groupedAttractions: {
    [GroupedAttractionCategories.Love]: {
      name: "What We Love",
      icon: heart,
      color: "#ff2222",
      categories: [AttractionCategories.Experiences.subcategories.LoveLocalCedarCity],
    },
    [GroupedAttractionCategories.Parks]: {
      name: "National\xa0Parks",
      icon: shield,
      color: "#4b5e26",
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
      color: "#f6ff00",
      categories: [
        AttractionCategories.Experiences.subcategories.FamilyFun,
        AttractionCategories.Experiences.subcategories.ActivitiesAndEvents,
      ],
    },
    [GroupedAttractionCategories.Shops]: {
      name: "Shops",
      icon: storefront,
      color: "#8800ff",
      categories: [AttractionCategories.Experiences.subcategories.Shop],
    },
    [GroupedAttractionCategories.Arts]: {
      name: "Art",
      icon: colorPalette,
      color: "#ffffff",
      categories: [AttractionCategories.Experiences.subcategories.CedarCityArts,AttractionCategories.Experiences.subcategories.Shows],
    },
    [GroupedAttractionCategories.Drinks]: {
      name: "Drinks",
      icon: wine,
      color: "#b33024",
      categories: [
        AttractionCategories.FoodAndDrink.subcategories.Alcohol,
        AttractionCategories.FoodAndDrink.subcategories.Coffee,
      ],
    },
    [GroupedAttractionCategories.Food]: {
      name: "Food",
      icon: fastFood,
      color: "#ff2222",
      categories: [
        AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
        AttractionCategories.FoodAndDrink.subcategories.Specialty,
        AttractionCategories.FoodAndDrink.subcategories.Mexican,
      ],
    },
    [GroupedAttractionCategories.Camping]: {
      name: "Camp\xa0Grounds",
      icon: bonfire,
      color: "#0cfa00",
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
      color: "#0cfa00",
      categories: [AttractionCategories.Experiences.subcategories.Drives],
    },
    [GroupedAttractionCategories.Fishing]: {
      name: "Fishing",
      icon: fish,
      color: "#2116b8",
      categories: [AttractionCategories.Experiences.subcategories.Fishing],
    },
    [GroupedAttractionCategories.Lookouts]: {
      name: "Lookouts",
      icon: telescope,
      color: "#a6a6a6",
      categories: [AttractionCategories.Experiences.subcategories.DarkSkies],
    },
    [GroupedAttractionCategories.Trails]: {
      name: "Trails",
      icon: trailSign,
      color: "#6e2929",
      categories: [
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
      ],
    },
  },
  mapAttractions: {
    [MapAttractionCategories.RecArea]: {
      name: "Recreation Areas",
      icon: trailSign,
      color: "#1c5717",
      categories: [
        AttractionCategories.Experiences.subcategories.RecArea,
      ],
    },
    [MapAttractionCategories.Food]: {
      name: "Food",
      icon: fastFood,
      color: "#ff2222",
      categories: [
        AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
        AttractionCategories.FoodAndDrink.subcategories.Specialty,
        AttractionCategories.FoodAndDrink.subcategories.Mexican,
      ],
    },
    [MapAttractionCategories.Parks]: {
      name: "National\xa0Parks",
      icon: shield,
      color: "#4b5e26",
      categories: [AttractionCategories.Experiences.subcategories.NationalParks],
    },
    [MapAttractionCategories.Lodging]: {
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

    [MapAttractionCategories.Shops]: {
      name: "Shops",
      icon: storefront,
      color: "#8800ff",
      categories: [AttractionCategories.Experiences.subcategories.Shop],
    },
    [MapAttractionCategories.Arts]: {
      name: "Art",
      icon: colorPalette,
      color: "#ffffff",
      categories: [AttractionCategories.Experiences.subcategories.CedarCityArts,AttractionCategories.Experiences.subcategories.Shows],
    },
    [MapAttractionCategories.Drinks]: {
      name: "Drinks",
      icon: wine,
      color: "#b33024",
      categories: [
        AttractionCategories.FoodAndDrink.subcategories.Alcohol,
        AttractionCategories.FoodAndDrink.subcategories.Coffee,
      ],
    },
    [MapAttractionCategories.Camping]: {
      name: "Camp\xa0Grounds",
      icon: bonfire,
      color: "#0cfa00",
      categories: [
        AttractionCategories.Lodging.subcategories.Campground,
        AttractionCategories.Lodging.subcategories.Tenting,
        AttractionCategories.Lodging.subcategories.RVSite,
        AttractionCategories.Lodging.subcategories.Cabin,
        AttractionCategories.Lodging.subcategories.Cabinettes,
      ],
    },
    [MapAttractionCategories.Fishing]: {
      name: "Fishing",
      icon: fish,
      color: "#2116b8",
      categories: [AttractionCategories.Experiences.subcategories.Fishing],
    },
    [MapAttractionCategories.Lookouts]: {
      name: "Lookouts",
      icon: telescope,
      color: "#a6a6a6",
      categories: [AttractionCategories.Experiences.subcategories.DarkSkies],
    },
    [MapAttractionCategories.Trails]: {
      name: "Trails",
      icon: trailSign,
      color: "#6e2929",
      categories: [
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
      ],
    },
    [MapAttractionCategories.Downtown]: {
      name: "Historic Downtown Walking Tour",
      icon: walk,
      color: "#0000ff",
      categories: [AttractionCategories.Experiences.subcategories.DowntownTour],
    },
    [MapAttractionCategories.Railroad]: {
      name: "Railroad History Walking Tour",
      icon: train,
      color: "#555555",
      categories: [AttractionCategories.Experiences.subcategories.RailroadTour],
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
