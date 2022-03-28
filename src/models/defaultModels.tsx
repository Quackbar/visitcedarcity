import { Timestamp } from "firebase/firestore";

export enum AllModules {
  Weather = 0,
  Schedule = 1,
  FestivalFood = 2,
  SkyData = 3,
  RoadConditions = 4,
  WinterMountainData = 5,
  SnowPack = 6,
}

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

export const AllCategoryLabels: { [key in AllCategories]?: string } = {
  [AllCategories.AsianIndian]: "Asian Indian",
  [AllCategories.LocalEatery]: "Local Eatery",
  [AllCategories.Alcohol]: "Alcohol",
  [AllCategories.Coffee]: "Coffee",
  [AllCategories.Italian]: "Italian",
  [AllCategories.Mexican]: "Mexican",
  [AllCategories.Specialty]: "Specialty",
  [AllCategories.FoodTruck]: "Food Truck",
  [AllCategories.Adult]: "Adult",
  [AllCategories.ArtAndCulture]: "Art and Culture",
  [AllCategories.Carnival]: "Carnival",
  [AllCategories.CommunityWorkshop]: "Community Workshop",
  [AllCategories.Conference]: "Conference",
  [AllCategories.Family]: "Family",
  [AllCategories.Festival]: "Festival",
  [AllCategories.Sports]: "Sports",
  [AllCategories.BedAndBreakfast]: "Bed and Breakfast",
  [AllCategories.Cabin]: "Cabin",
  [AllCategories.Campground]: "Campground",
  [AllCategories.RVSite]: "RV Site",
  [AllCategories.Cabinettes]: "Cabinettes",
  [AllCategories.Condo]: "Condo",
  [AllCategories.HotelMotel]: "Hotel/Motel",
  [AllCategories.Lodge]: "Lodge",
  [AllCategories.SummerRental]: "Summer Rental",
  [AllCategories.ShortTermRental]: "Short Term Rental",
  [AllCategories.VacationRental]: "Vacation Rental",
  [AllCategories.Tenting]: "Tenting",
  [AllCategories.Resort]: "Resort",
  [AllCategories.WhatsHappening]: "What's Happening",
  [AllCategories.ActivitiesAndEvents]: "Activities and Events",
  [AllCategories.CedarCityArts]: "Cedar City Arts",
  [AllCategories.CedarCityEats]: "Cedar City Eats",
  [AllCategories.CedarCityWalks]: "Cedar City Walks",
  [AllCategories.Classifieds]: "Classifieds",
  [AllCategories.COVIDInfo]: "COVID Info",
  [AllCategories.DarkSkies]: "Dark Skies",
  [AllCategories.Events]: "Events",
  [AllCategories.FactsAndInfo]: "Facts and Info",
  [AllCategories.FamilyFun]: "Family Fun",
  [AllCategories.FestivalCity]: "Festival City",
  [AllCategories.GuestWriter]: "Guest Writer",
  [AllCategories.InTheNews]: "In the News",
  [AllCategories.Itinerary]: "Itinerary",
  [AllCategories.LoveLocalCedarCity]: "Love Local Cedar City",
  [AllCategories.NationalParks]: "National Parks",
  [AllCategories.Outdoor]: "Outdoor",
  [AllCategories.PressReleases]: "Press Release",
  [AllCategories.Biking]: "Biking",
  [AllCategories.Trails]: "Trails",
  [AllCategories.Drives]: "Drives",
  [AllCategories.Fishing]: "Fishing",
  [AllCategories.USA]: "USA",
  [AllCategories.Shows]: "Shows",
  [AllCategories.Shop]: "Shop",
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
}

export interface User {
  hasSeenTutorial: boolean;
  isLoading: boolean;
  selectedAttractionFilters: AllCategories[];
  selectedSubscriptions: number[];
  selectedHomeModules: AllModules[]
}

export interface ConditionsReturnType {
  Date?: Timestamp;
  conditions?: string;
  temp?: string;
}

export interface MountainDataType {
  Date?: Timestamp;
  baseDepth?: string;
  conditions?: string;
  onedaySnowfall?: string;
  liftsOpen?: string;
  trailsOpen?: string;
  temp?: string;
  wind?: string;
}

export interface TodaysType {
  name: string;
  url: string;
  timeStart: string;
  timeEnd: string;
  location: string;
  tracks: string[];
  id: string;
}
