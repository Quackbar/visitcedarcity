import {
  AllCategories,
  AttractionCategories,
  AttractionItem,
} from "../models/defaultModels";

export type AppState = {
  attractionItems: AttractionItem[];
  allAttractionFilters: AllCategories[];
  selectedAttractionFilters: AllCategories[];
};

export const initialState: AppState = {
  // needs to be replaced with real data
  attractionItems: [
    {
      id: 0,
      title: "Prime Rib Dinner",
      subtitle: "Cedar City",
      description: "Prime Rib Dinner is really good",
      image:
        "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/saltlake/cctb_logo0-29dc247c5056a36_29dc273d-5056-a36a-069774f0062eabe1.jpg",
      categories: [
        AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
        AttractionCategories.FoodAndDrink.subcategories.Coffee,
      ],
    },
    {
      id: 1,
      title: "21 Eleven Coffee",
      subtitle: "Coffee / Drinks",
      description: "2111 N Main St, Cedar City, UT 84721",
      image:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/21-Eleven-Coffee_-21elevencoffee_9B8E20DC-5056-A36F-231E00879EBAA6DF-9b8e1ff05056a36_9b8e2144-5056-a36f-23347640b81ac4c2.jpg",
      categories: [AttractionCategories.FoodAndDrink.subcategories.Coffee],
    },
    {
      id: 2,
      title: "Night Skiing",
      subtitle: "Brian Head",
      description: "Come ski at night",
      image:
        "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/saltlake/cctb_logo0-29dc247c5056a36_29dc273d-5056-a36a-069774f0062eabe1.jpg",
      categories: [AttractionCategories.Experiences.subcategories.Outdoor]
    },
  ],
  allAttractionFilters: Object.values(AllCategories),
  selectedAttractionFilters: Object.values(AllCategories),
};
