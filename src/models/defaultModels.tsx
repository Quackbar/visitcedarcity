export enum AllCategories {
  AsianIndian = "asian-indian",
  LocalEatery = "local-eatery",
  Alcohol = "alcohol",
  Coffee = "coffee",
  Italian = "italian",
  Mexican = "mexican",
  Specialty = "specialty",
  FoodTruck = "food-truck",
  Adult = "adult",
  ArtAndCulture = "art-and-culture",
  Carnival = "carnival",
  CommunityWorkshop = "community-workshop",
  Conference = "conference",
  Family = "family",
  Festival = "festival",
  Sports = "sports",
  BedAndBreakfast = "bed-and-breakfast",
  Cabin = "cabin",
  Campground = "campground",
  RVSite = "rv-site",
  Cabinettes = "cabinettes",
  Condo = "condo",
  HotelMotel = "hotel-motel",
  Lodge = "lodge",
  SummerRental = "summer-rental",
  ShortTermRental = "short-term-rental",
  VacationRental = "vacation-rental",
  Tenting = "tenting",
  Resort = "resort",
  WhatsHappening = "whats-happening",
  ActivitiesAndEvents = "activities-and-events",
  CedarCityArts = "cedar-city-arts",
  CedarCityEats = "cedar-city-eats",
  CedarCityWalks = "cedar-city-walks",
  Classifieds = "classifieds",
  COVIDInfo = "covid-info",
  DarkSkies = "dark-skies",
  Events = "events",
  FactsAndInfo = "facts-and-info",
  FamilyFun = "family-fun",
  FestivalCity = "festival-city",
  GuestWriter = "guest-writer",
  InTheNews = "in-the-news",
  Itinerary = "itinerary",
  LoveLocalCedarCity = "love-local-cedar-city",
  NationalParks = "national-parks",
  Outdoor = "outdoor",
  PressReleases = "press-release",
  USA = "usa",
}

export let Subscriptions = [
  {
    UtahShakespeareFestival: {
      title: "Utah Shakespeare Festival",
      schedule: "/assets/data/USF.json",
      //12 months => 12 element array
      timing: ["0","0","0","0","0","2","4","4","4","3","0","0"],
      color: "#c3121e",
    }
  },
  {
    NeilSimonFestival: {
      title: "Neil Simon Festival",
      schedule: "/assets/data/NSF.json",
      //12 months => 12 element array
      timing: ["0","0","0","0","0","0","4","0","0","0","0","0"],
      color: "#0000ff"
    },
  },
  {
    BrianHeadWinter: {
      title: "Brian Head Winter",
      schedule: "/assets/data/BHW.json",
      //12 months => 12 element array
      timing: ["2","2","2","1","0","0","0","0","0","0","1","2"],
      color: "#2f4f4f"
    },
  },
  {
    BrianHeadSummer: {
      title: "Brian Head Summer",
      schedule: "/assets/data/BHS.json",
      //12 months => 12 element array
      timing: ["0","0","0","0","0","1","2","2","2","1","0","0"],
      color: "#228b22"
    },
  },
  {
    RedRockFilmFestival: {
      title: "Red Rock Film Festival",
      schedule: "/assets/data/RRFF.json",
      //12 months => 12 element array
      timing: ["0","0","0","0","0","0","0","0","0","4","0","0"],
      color: "#4b0082"
    },
  },
  {
    SUMA: {
      title: "Southern Utah Museum of Art",
      schedule: "/assets/data/SUMA.json",
      //12 months => 12 element array
      timing: ["1","1","1","1","1","1","1","1","1","1","1","1"],
      color: "#ffe4c4"
    },
  },
  {
    SUUPerformingArts: {
      title: "SUU Performing Arts",
      schedule: "/assets/data/SUUPA.json",
      //12 months => 12 element array
      timing: ["1","2","2","2","0","0","0","0","0","1","2","2"],
      color: "#ff0000"

    },
  },
  {
    OrchestraOfSouthernUtah: {
      title: "Orchestra Of Southern Utah",
      schedule: "/assets/data/OSA.json",
      //12 months => 12 element array
      timing: ["0","1","0","1","0","0","0","0","0","2","1","1"],
      color: "#8b4513"
    },
  },
  {
    CedarCityMusicArts: {
      title: "Cedar City Music Arts",
      schedule: "/assets/data/CCMA.json",
      //12 months => 12 element array
      timing: ["0","1","1","1","1","0","0","0","0","0","1","1"],
      color: "#00ffff"
    },
  },
  {
    CedarCityArtsCouncil: {
      title: "Cedar City Arts Council",
      schedule: "/assets/data/CCAC.json",
      //12 months => 12 element array
      timing: ["0","0","0","0","0","1","1","1","0","0","0","0"],
      color: "#6495ed"
    },
  },
  {
    FrontierHomesteadStateParkMuseum: {
      title: "Frontier Homestead State Park Museum",
      schedule: "/assets/data/FHSPM.json",
      //12 months => 12 element array
      timing: ["1","0","1","1","1","1","2","2","2","2","1","0"],
      color: "#000000"
    },
  },
  {
    CedarBreaksNationalMonument: {
      title: "Cedar Breaks National Monument",
      schedule: "/assets/data/CBNM.json",
      //12 months => 12 element array
      timing: ["1","1","1","0","1","2","2","2","2","1","0","0"],
      color: "#ff69b4"
    },
  },
  {
    FarmersMarketAndFarms: {
      title: "Farmers Market And Farms",
      schedule: "/assets/data/FMAF.json",
      //12 months => 12 element array
      timing: ["1","1","1","1","1","1","2","2","2","2","1","1"],
      color: "#00ff00"
    },
  }
]

const FoodAndDrink = {
  AsianIndian: AllCategories.AsianIndian,
  LocalEatery: AllCategories.LocalEatery,
  Alcohol: AllCategories.Alcohol,
  Coffee: AllCategories.Coffee,
  Italian: AllCategories.Italian,
  Mexican: AllCategories.Mexican,
  Specialty: AllCategories.Specialty,
  FoodTruck: AllCategories.FoodTruck,
};

const Events = {
  Adult: AllCategories.Adult,
  ArtAndCulture: AllCategories.ArtAndCulture,
  Carnival: AllCategories.Carnival,
  CommunityWorkshop: AllCategories.CommunityWorkshop,
  Conference: AllCategories.Conference,
  Family: AllCategories.Family,
  Festival: AllCategories.Festival,
  Sports: AllCategories.Sports,
};

const Lodging = {
  BedAndBreakfast: AllCategories.BedAndBreakfast,
  Cabin: AllCategories.Cabin,
  Campground: AllCategories.Campground,
  RVSite: AllCategories.RVSite,
  Cabinettes: AllCategories.Cabinettes,
  Condo: AllCategories.Condo,
  HotelMotel: AllCategories.HotelMotel,
  Lodge: AllCategories.Lodge,
  SummerRental: AllCategories.SummerRental,
  ShortTermRental: AllCategories.ShortTermRental,
  VacationRental: AllCategories.VacationRental,
  Tenting: AllCategories.Tenting,
  Resort: AllCategories.Resort,
};

const Experiences = {
  WhatsHappening: AllCategories.WhatsHappening,
  ActivitiesAndEvents: AllCategories.ActivitiesAndEvents,
  CedarCityArts: AllCategories.CedarCityArts,
  CedarCityEats: AllCategories.CedarCityEats,
  CedarCityWalks: AllCategories.CedarCityWalks,
  Classifieds: AllCategories.Classifieds,
  COVIDInfo: AllCategories.COVIDInfo,
  DarkSkies: AllCategories.DarkSkies,
  Events: AllCategories.Events,
  FactsAndInfo: AllCategories.FactsAndInfo,
  FamilyFun: AllCategories.FamilyFun,
  FestivalCity: AllCategories.FestivalCity,
  GuestWriter: AllCategories.GuestWriter,
  InTheNews: AllCategories.InTheNews,
  Itinerary: AllCategories.Itinerary,
  LoveLocalCedarCity: AllCategories.LoveLocalCedarCity,
  NationalParks: AllCategories.NationalParks,
  Outdoor: AllCategories.Outdoor,
  PressReleases: AllCategories.PressReleases,
  USA: AllCategories.USA,
};

export const AttractionCategories = {
  FoodAndDrink: {
    label: "Food and Drink",
    subcategories: FoodAndDrink,
  },
  Events: {
    label: "Events",
    subcategories: Events,
  },
  Lodging: {
    label: "Lodging",
    subcategories: Lodging,
  },
  Experiences: {
    label: "Experiences",
    subcategories: Experiences,
  },
};

export enum AttractionLocations {
  BrianHead = "brian-head",
  CedarCity = "cedar-city",
  Enoch = "enoch",
  Parowan = "parowan",
  Kanarraville = "kanarraville",
  DowntownCedarCity = "downtown-cedar-city",
}

export interface AttractionItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  categories?: AllCategories[];
  location?: AttractionLocations;
}

export interface ChartProps{
  labels: string[];
  datasets: {  
    label: string;
    data: string[];
    backgroundColor: string;
  }[];
}


