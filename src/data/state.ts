import {
  AllCategories,
  AttractionItem,
  SubscriptionItem,
} from "../models/defaultModels";
import {TrailItems} from './trails'

export type AppState = {
  attractionItems: AttractionItem[];
  allAttractionFilters: AllCategories[];
  selectedAttractionFilters: AllCategories[];
  subscriptionItems: SubscriptionItem[];
};

export const initialState: AppState = {
  // needs to be replaced with real data
  attractionItems: TrailItems,
  allAttractionFilters: Object.values(AllCategories),
  selectedAttractionFilters: Object.values(AllCategories),
  subscriptionItems: [
    {
      id: 0,
      title: "Utah Shakespeare Festival",
      schedule: "/assets/data/USF.json",
      timing: ["0", "0", "0", "0", "0", "2", "4", "4", "4", "3", "0", "0"],
      color: "#c3121e",
      url: "https://www.bard.org/",
      subscribed: true,
    },
    {
      id: 1,
      title: "Neil Simon Festival",
      schedule: "/assets/data/NSF.json",
      //12 months => 12 element array
      timing: ["0", "0", "0", "0", "0", "0", "4", "0", "0", "0", "0", "0"],
      color: "#0000ff",
      url: "https://simonfest.org/",
      subscribed: true,
    },
    {
      id: 2,
      title: "Brian Head Winter",
      schedule: "/assets/data/BHW.json",
      timing: ["2", "2", "2", "1", "0", "0", "0", "0", "0", "0", "1", "2"],
      color: "#2f4f4f",
      url: "https://www.brianhead.com/",
      subscribed: true,
    },
    {
      id: 3,
      title: "Brian Head Summer",
      schedule: "/assets/data/BHS.json",
      timing: ["0", "0", "0", "0", "0", "1", "2", "2", "2", "1", "0", "0"],
      color: "#228b22",
      url: "https://www.brianhead.com/",
      subscribed: true,
    },
    {
      id: 4,
      title: "Red Rock Film Festival",
      schedule: "/assets/data/RRFF.json",
      timing: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "4", "0", "0"],
      color: "#4b0082",
      url: "https://www.redrockfilmfestival.com/index.html",
      subscribed: true,
    },
    {
      id: 5,
      title: "Southern Utah Museum of Art",
      schedule: "/assets/data/SUMA.json",
      timing: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      color: "#ffe4c4",
      url: "https://www.suu.edu/suma/",
      subscribed: true,
    },
    {
      id: 6,
      title: "SUU Performing Arts",
      schedule: "/assets/data/SUUPA.json",
      timing: ["1", "2", "2", "2", "0", "0", "0", "0", "0", "1", "2", "2"],
      color: "#ff0000",
      url: "https://www.suu.edu/pva/",
      subscribed: true,
    },
    {
      id: 7,
      title: "Orchestra Of Southern Utah",
      schedule: "/assets/data/OSA.json",
      timing: ["0", "1", "0", "1", "0", "0", "0", "0", "0", "2", "1", "1"],
      color: "#8b4513",
      url: "https://www.myosu.org/",
      subscribed: true,
    },
    {
      id: 8,
      title: "Cedar City Music Arts",
      schedule: "/assets/data/CCMA.json",
      timing: ["0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1"],
      color: "#00ffff",
      url: "https://www.cedarcitymusicarts.org/",
      subscribed: true,
    },
    {
      id: 9,
      title: "Cedar City Arts Council",
      schedule: "/assets/data/CCAC.json",
      timing: ["0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
      color: "#6495ed",
      url: "https://www.cedarcityartscouncil.org/advocacy/arts-event-calendars/",
      subscribed: true,
    },
    {
      id: 10,
      title: "Frontier Homestead State Park Museum",
      schedule: "/assets/data/FHSPM.json",
      timing: ["1", "0", "1", "1", "1", "1", "2", "2", "2", "2", "1", "0"],
      color: "#000000",
      url: "https://frontierhomestead.org/",
      subscribed: true,
    },
    {
      id: 11,
      title: "Cedar Breaks National Monument",
      schedule: "/assets/data/CBNM.json",
      timing: ["1", "1", "1", "0", "1", "2", "2", "2", "2", "1", "0", "0"],
      color: "#ff69b4",
      url: "https://www.nps.gov/cebr/index.htm",
      subscribed: true,
    },
    {
      id: 12,
      title: "Farmers Market And Farms",
      schedule: "/assets/data/FMAF.json",
      timing: ["1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "1", "1"],
      color: "#00ff00",
      url: "https://www.facebook.com/groups/CedarSaturdayFarmersMarket/",
      subscribed: true,
    },
    {
      id: 13,
      title: "Utah Midsummer Renaissance Faire",
      schedule: "/assets/data/UMRF.json",
      timing: ["0", "0", "0", "0", "0", "0", "2", "0", "0", "0", "0", "0"],
      color: "#8c34eb",
      url: "http://www.umrf.net/",
      subscribed: true,
    },
  ],
};
