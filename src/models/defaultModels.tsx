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
  Biking = "biking",
  Trails = "trails",
  Drives = "drives",
  Fishing = "fishing",
  USA = "usa",
  Shows = "shows",
  Shop = "shop",
}

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
  Biking: AllCategories.Biking,
  Trails: AllCategories.Trails,
  Drives: AllCategories.Drives,
  Fishing: AllCategories.Fishing,
  Shows: AllCategories.Shows,
  Shop: AllCategories.Shop,
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
  url: string;
  categories?: AllCategories[];
  location?: AttractionLocations;
}

export interface SubscriptionItem {
  id: number;
  title: string;
  schedule: string;
  timing: string[];
  color: string;
  url: string;
  furl: string;
  subscribed: boolean;
}

export interface User {
  hasSeenTutorial: boolean;
}
