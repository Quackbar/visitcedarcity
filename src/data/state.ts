import { AllCategories, AttractionItem, SubscriptionItem, User } from "../models/defaultModels";
import { OutdoorItems, CityItems } from "./attractions";
import { Subscriptions } from "./subscriptions";

export type AppState = {
  attractionItems: AttractionItem[];
  allAttractionFilters: AllCategories[];
  selectedAttractionFilters: AllCategories[];
  subscriptionItems: SubscriptionItem[];
  user: User;
};

function shuffle(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export const initialState: AppState = {
  attractionItems: shuffle(OutdoorItems.concat(shuffle(CityItems))),
  allAttractionFilters: Object.values(AllCategories),
  selectedAttractionFilters: Object.values(AllCategories),
  subscriptionItems: Subscriptions,
  user: {
    hasSeenTutorial: false,
    isLoading: false
  },
};
