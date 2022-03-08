import {
  AllCategories,
  AttractionCategories,
  AttractionItem,
  SubscriptionItem,
} from "../models/defaultModels";


export type AppState = {
  attractionItems: AttractionItem[];
  allAttractionFilters: AllCategories[];
  selectedAttractionFilters: AllCategories[];
  subscriptionItems: SubscriptionItem[];
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
  subscriptionItems: [
    {
      id: 0,
      title: "Utah Shakespeare Festival",
      schedule: "/assets/data/USF.json",
      timing: ["0", "0", "0", "0", "0", "2", "4", "4", "4", "3", "0", "0"],
      color: "#c3121e",
      subscribed: true,
    },
    {
      id: 1,
      title: "Neil Simon Festival",
      schedule: "/assets/data/NSF.json",
      //12 months => 12 element array
      timing: ["0", "0", "0", "0", "0", "0", "4", "0", "0", "0", "0", "0"],
      color: "#0000ff",
      subscribed: true,
    },
    {
      id: 2,
      title: "Brian Head Winter",
      schedule: "/assets/data/BHW.json",
      timing: ["2", "2", "2", "1", "0", "0", "0", "0", "0", "0", "1", "2"],
      color: "#2f4f4f",
      subscribed: true,
    },
    {
      id: 3,
      title: "Brian Head Summer",
      schedule: "/assets/data/BHS.json",
      timing: ["0", "0", "0", "0", "0", "1", "2", "2", "2", "1", "0", "0"],
      color: "#228b22",
      subscribed: true,
    },
    {
      id: 4,
      title: "Red Rock Film Festival",
      schedule: "/assets/data/RRFF.json",
      timing: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "4", "0", "0"],
      color: "#4b0082",
      subscribed: true,
    },
    {
      id: 5,
      title: "Southern Utah Museum of Art",
      schedule: "/assets/data/SUMA.json",
      timing: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      color: "#ffe4c4",
      subscribed: true,
    },
    {
      id: 6,
      title: "SUU Performing Arts",
      schedule: "/assets/data/SUUPA.json",
      timing: ["1", "2", "2", "2", "0", "0", "0", "0", "0", "1", "2", "2"],
      color: "#ff0000",
      subscribed: true,
    },
    {
      id: 7,
      title: "Orchestra Of Southern Utah",
      schedule: "/assets/data/OSA.json",
      timing: ["0", "1", "0", "1", "0", "0", "0", "0", "0", "2", "1", "1"],
      color: "#8b4513",
      subscribed: true,
    },
    {
      id: 8,
      title: "Cedar City Music Arts",
      schedule: "/assets/data/CCMA.json",
      timing: ["0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1"],
      color: "#00ffff",
      subscribed: true,
    },
    {
      id: 9,
      title: "Cedar City Arts Council",
      schedule: "/assets/data/CCAC.json",
      timing: ["0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
      color: "#6495ed",
      subscribed: true,
    },
    {
      id: 10,
      title: "Frontier Homestead State Park Museum",
      schedule: "/assets/data/FHSPM.json",
      timing: ["1", "0", "1", "1", "1", "1", "2", "2", "2", "2", "1", "0"],
      color: "#000000",
      subscribed: true,
    },
    {
      id: 11,
      title: "Cedar Breaks National Monument",
      schedule: "/assets/data/CBNM.json",
      timing: ["1", "1", "1", "0", "1", "2", "2", "2", "2", "1", "0", "0"],
      color: "#ff69b4",
      subscribed: true,
    },
    {
      id: 12,
      title: "Farmers Market And Farms",
      schedule: "/assets/data/FMAF.json",
      timing: ["1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "1", "1"],
      color: "#00ff00",
      subscribed: true,
    },
  ],
};
