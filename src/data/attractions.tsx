import { AllCategories, AttractionCategories, AttractionItem, SubscriptionItem } from "../models/defaultModels";

export type AppState = {
  attractionItems: AttractionItem[];
  allAttractionFilters: AllCategories[];
  selectedAttractionFilters: AllCategories[];
  subscriptionItems: SubscriptionItem[];
};

const Experiences = localStorage.getItem("Experiences") ?? "[]";
const Fooder = localStorage.getItem("Foods") ?? "[]";
const Lodges = localStorage.getItem("Lodging") ?? "[]";

export const ExpObj = JSON.parse(Experiences?.slice(0, -1) + "]" || "[]") as AttractionItem[];

ExpObj.forEach((el) => {
  el.categories.push(AttractionCategories.Experiences.subcategories.LoveLocalCedarCity);
});

export const Foods = JSON.parse(Fooder?.slice(0, -1) + "]" || "[]") as AttractionItem[];

Foods.forEach((el) => {
  el.categories.push(AttractionCategories.FoodAndDrink.subcategories.LocalEatery);
});

export const Lodging = JSON.parse(Lodges?.slice(0, -1) + "]" || "[]") as AttractionItem[];

Lodging.forEach((el) => {
  el.categories.push(AttractionCategories.Lodging.subcategories.HotelMotel);
});

export const OutdoorItems = [
  {
    id: 1,
    title: "Vermillion Castle",
    subtitle: "Brian Head Area Trails",
    url: "https://www.google.com/maps/place/Vermillion+Castle+Day+Use+Area/@37.7954398,-112.7977095,19.65z/data=!4m5!3m4!1s0x80b550b00dc8debb:0x61a3ae67616506e5!8m2!3d37.7955318!4d-112.7974427",
    description: "2 mile, Out-and-Back type trail accessible Late Spring though Fall.",
    image: "https://www.visitbrianhead.org/File/1fb8638d-3e2b-48b1-93d1-5b48ded737ac",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.795416, 
      lng: -112.797367,
    },
  },
  {
    id: 500,
    title: "Yankee Meadow Campground",
    subtitle: "Brian Head Area Campground",
    url: "https://www.fs.usda.gov/recarea/dixie/recarea/?recid=24888",
    description: "Yankee Meadows and Yankee Meadows Reservoir is below Brian Head and above Parowan in Utah.",
    image: "https://lh5.googleusercontent.com/p/AF1QipPCxcL-tmrVRS6FD7kZcOprAy_58PkNMQKBF4_1=w408-h544-k-no",
    categories: [
      AttractionCategories.Lodging.subcategories.Campground,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.760690,  
      lng: -112.758565,
    },
  },
  {
    id: 2,
    title: "Noah's Ark",
    subtitle: "Brian Head Area Trails",
    url: "https://www.google.com/maps/place/Noah's+Ark+Trailhead/@37.7944968,-112.7940625,18.85z/data=!4m5!3m4!1s0x80b551c7c75b8991:0xf2a7fdaae80fb10f!8m2!3d37.7946673!4d-112.7932462",
    description: "3 mile, Out-and-Back type trail accessible Late Spring though Fall.",
    image: "https://www.visitbrianhead.org/File/b812a61d-2904-4c68-93f2-e872693e473f",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.794585, 
      lng: -112.793102,
    },
  },
  {
    id: 4,
    title: "Hidden Haven",
    subtitle: "Brian Head Area Trails",
    url: "https://www.google.com/maps/place/Hidden+Haven+Trailhead/@37.771865,-112.8408257,18.09z/data=!4m9!1m2!2m1!1shidden+haven!3m5!1s0x80b5598bfffc6cdb:0x1fb477681d4b6430!8m2!3d37.7722069!4d-112.8403231!15sCgxoaWRkZW4gaGF2ZW6SAQtoaWtpbmdfYXJlYQ",
    description: "1 mile, Out-and-Back type trail accessible Late Spring though Fall.",
    image: "https://www.visitbrianhead.org/File/220b031f-b3cd-4ddd-aaba-9018f1bd8f23",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.772513, 
      lng: -112.840135,
    },
  },

  {
    id: 5,
    title: "Hendrickson Lake",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description:
      "3 mile, Out-and-Back (or continue on Dark Hollow Trai for point-to-point or loop) type trail accessible Early Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/f39f1ee6-2d25-415d-b574-4871798b4364",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.739224, 
      lng: -112.794928,
    },
  },
  // {
  //   id: 6,
  //   title: "Manzanita",
  //   subtitle: "Brian Head Area Trails",
  //   url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
  //   description: "2.5 mile, Loop type trail accessible Early Summer though Fall.",
  //   image: "https://www.visitbrianhead.org/File/898cef05-df6b-40e0-89d4-d237fb92b65d",
  //   categories: [
  //     AttractionCategories.Experiences.subcategories.Outdoor,
  //     AttractionCategories.Experiences.subcategories.CedarCityWalks,
  //     AttractionCategories.Experiences.subcategories.Trails,
  //   ],
  //   coordinates: {
  //     lat: 37.7969826,
  //     lng: -112.8424624,
  //   },
  // },
  {
    id: 7,
    title: "Town Trail",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "2 mile, Point-to-Point type trail accessible Early Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/c6d6bcf5-ea72-40f1-89f7-815786eb9510",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.6976581,
      lng: -112.9080203,
    },
  },
  // {
  //   id: 8,
  //   title: "Alpine Creek Loop",
  //   subtitle: "Brian Head Area Trails",
  //   url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
  //   description: "2 - 4 - 9 mile, Loop type trail accessible Early Summer though Fall.",
  //   image: "https://www.visitbrianhead.org/File/27ca3269-6d60-4179-9970-1e2ebeb4364b",
  //   categories: [
  //     AttractionCategories.Experiences.subcategories.Outdoor,
  //     AttractionCategories.Experiences.subcategories.CedarCityWalks,
  //     AttractionCategories.Experiences.subcategories.Trails,
  //   ],
  //   coordinates: {
  //     lat: 37.7969826,
  //     lng: -112.8424624,
  //   },
  // },
  {
    id: 9,
    title: "Dark Hollow",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "14.5 mile, Point-to-Point type trail accessible Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/45f000c3-548f-44be-9bdc-360dfec454e8",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.6972019,
      lng: -112.8135233,
    },
  },
  {
    id: 10,
    title: "Sidney Peaks",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "4 mile, Point-to-Point type trail accessible Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/afbfecff-722a-436d-991b-fdac1bdb9649",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.7019538,
      lng: -112.815742,
    },
  },
  {
    id: 11,
    title: "Bunker Creek",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "11 mile, Point-to-Point type trail accessible Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/8f1d2314-e81f-4ae0-b1f0-f2e836562c5a",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.6999304,
      lng: -112.7382277,
    },
  },
  {
    id: 12,
    title: "Twisted Forest",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "1 mile, Out-and-Back type trail accessible Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/66e5092c-d0ef-4b53-995c-228a2b325bd1",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],
    coordinates: {
      lat: 37.684775,
      lng: -112.8886631,
    },
  },
  // {
  //   id: 13,
  //   title: "Navajo Loop",
  //   subtitle: "Brian Head Area Trails",
  //   url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
  //   description: "3.5 mile, Loop type trail accessible Summer though Fall.",
  //   image: "https://www.visitbrianhead.org/File/7ea638b3-96f9-425f-a112-38916b6d6640",
  //   categories: [
  //     AttractionCategories.Experiences.subcategories.Outdoor,
  //     AttractionCategories.Experiences.subcategories.CedarCityWalks,
  //     AttractionCategories.Experiences.subcategories.Trails,
  //   ],    
  //   coordinates: {
  //     lat: 37.7969826,
  //     lng: -112.8424624,
  //   },
  // },
  {
    id: 14,
    title: "Marathon / Mace's Run",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "5 mile, Loop type trail accessible Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/220b031f-b3cd-4ddd-aaba-9018f1bd8f23",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.6820627,
      lng: -112.8260211,
    },
  },
  {
    id: 15,
    title: "Lowder Ponds Loop",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "11.5 mile, Loop type trail accessible Late Spring though Fall.",
    image: "https://www.visitbrianhead.org/File/db1a48da-f22d-466b-a613-91aa4ecc0085",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.668962, 
      lng: -112.786841,
    },
  },
  {
    id: 16,
    title: "High Mountain",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "6 mile, Out-and-Back or Point-to-Point type trail accessible Late Spring though Fall.",
    image: "https://www.visitbrianhead.org/File/393200b3-5022-4323-88d8-ec11f099ad64",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.6626723,
      lng: -112.9227396,
    },
  },
  {
    id: 17,
    title: "Rattlesnake",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "10 mile, Out-and-Back or Point-to-Point type trail accessible Late Spring though Fall.",
    image: "https://www.visitbrianhead.org/File/f0585b38-f7e6-4646-8158-5a1e3c9c24a2",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.6285049,
      lng: -112.8759518,
    },
  },
  {
    id: 18,
    title: "Alpine Pond",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "1 mile, Loop type trail accessible Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/95328441-a68e-4fd1-a319-0187f3ebc0d7",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.6329769,
      lng: -112.8339699,
    },
  },
  {
    id: 19,
    title: "Ramparts",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "2 mile, Out-and-Back type trail accessible Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/7e6f955b-1e42-4a0a-a2b6-932d694b89f6",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.633044,
      lng: -112.8667202,
    },
  },
  {
    id: 20,
    title: "Hancock Peak",
    subtitle: "Brian Head Area Trails",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description: "5.5 mile, Point-to-Point type trail accessible Summer though Fall.",
    image: "https://www.visitbrianhead.org/File/00085e57-a61a-4975-a0b7-54b73ce6f12d",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.6341769,
      lng: -112.7796293,
    },
  },
  {
    id: 21,
    title: "Brian Head Peak",
    subtitle: "Brian Head Area Trails and Roads",
    url: "https://www.visitbrianhead.org/Attractions",
    description:
      "Our peak has the best view around at 11,307 ft.  From the top, one can see into neighboring states such as Arizona and Nevada.  The stone hut on the very tip of the peak was built between 1935-1937 by the Civilian Conservation Corps; ever since its construction, it has become an icon on the peak.  It not only provides a taste of Brian Head's past, but also a breathtaking view.  (Literally, breath taking since it is so high in elevation). Just before reaching the peak, you'll see the Sydney Peak Trailhead, which is the jumping off point for several of the hiking and mountain biking trails in Dixie National Forest, including Dark Hollow, Bunker Creek, Sydney Peaks, Spruces, and Mace's Run. Restrooms are located at the trailhead. *Note: The road to the summit is accessible in the summer and fall seasons only. ",
    image: "https://www.visitbrianhead.org/file/image/m/300/200/d8c9c3fe-29ee-4e2e-b2d1-6817027910d3",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.6811207,
      lng: -112.8487983,
    },
  },
  {
    id: 22,
    title: "Yankee Meadows",
    subtitle: "Brian Head Area Trails and Roads",
    url: "https://www.visitbrianhead.org/Attractions",
    description:
      "Yankee Meadows is a little known gem that offers outstanding beauty and recreation. Only 15 miles from Brian Head, it is accessed off of Hwy 143 in Parowan Canyon. The drive up Yankee Meadows Road is surrounded by the towering red rocks of Vermillion Castle dotted with juniper trees and scrub oak and maple. There are several trails along the way that lead to the top of the cliffs where one can see the “Noah’s Ark” and the “Grand Castle” formations. In the fall, the scrub oak and maple blaze red and orange making it an outstanding area for leaf peepers. As you continue up to Yankee Meadows, you'll find campgrounds, picnic areas, and fantastic scenery. Yankee Meadow Reservoir is located at the base of the towering volcanic cliffs of Sydney Peaks. During summer and fall trout fishing and non-motorized boating are the most popular activities.   Note: Much of the vegetation and camping right around Yankee Meadow Reservoir was significantly damaged during the 2017 Brian Head Fire. Revegetation efforts are underway, but it will take some years to be completed. ",
    image: "https://www.visitbrianhead.org/file/image/m/300/168/6eb1b0de-9e5f-4207-89ef-0a18e6ac45df",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.7932341,
      lng: -112.8580291,
    },
  },
  {
    id: 23,
    title: "Ashdown Gorge Wilderness Area",
    subtitle: "Brian Head Area Trails and Roads",
    url: "https://www.visitbrianhead.org/Attractions",
    description:
      "Ashdown Gorge in Dixie National Forest is one of the best kept secrets in Southern Utah. While it's not for the more casual recreationalist, those who brave the steep trails and rough terrain will be treated to a back country experience few can boast of. The area can be accessed from either the Rattlesnake Trail (named for the creek and not a particular prevalence of vipers -- although you always want to watch out for snakes) which is adjacent to the North Entrance of Cedar Breaks National Monument, or the High Mountain Trail which is right off of Dry Lakes Road west of Brian Head. Both of those trails will drop you down into mountain meadows where deer and elk are common and into the river gorge where you'll hike through narrows and slot canyons past Flannigan Arch (PS: be prepared to get wet). Exploring the several creeks in these drainages you'll be rewarded with pristine water falls, slot canyons, and untouched back country. Most people hike through Ashdown Creek which lets out on Highway 14 in Cedar Canyon, where they stash a shuttle car. Some will hike out Potato Hollow trail, and those in impressive physical condition may want to hike up and out the way they came in (not for the faint of heart). The hike is about 12 miles one-way and can be done in one day, but most take the opportunity to do it as an overnight backpacking trip.",
    image: "https://www.visitbrianhead.org/file/image/m/300/316/7f3d934d-30ca-448e-8fe8-faef203db75d",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.6371188,
      lng: -112.936814,
    },
  },
  {
    id: 24,
    title: "Twisted Forest/Dry Lakes Scenic Backway",
    subtitle: "Brian Head Area Trails and Roads",
    url: "https://www.visitbrianhead.org/Attractions",
    description:
      "Often overlooked by hikers headed to nearby Cedar Breaks National Monument, a sacred grove of prehistoric trees aptly titled “Twisted Forest” lies at the end of a family friendly, mile-long, out-and-back hike a few miles west of Brian Head accessed off of Dry Lakes Road. This short stroll takes you through a rare and somewhat ghostly grove of Bristlecone Pines – a species thought to be among the oldest living organisms on the planet, often surviving for 3,000-4,000 years. The trail meanders up a gravely red rock slope abruptly terminating at the top of a cliffside with sweeping views of Cedar Breaks and Ashdown Gorge.",
    image: "https://www.visitbrianhead.org/file/image/m/300/200/1895e48f-8ba5-4046-80bb-ac208a8b3519",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.688625,
      lng: -112.882622,
    },
  },
  {
    id: 25,
    title: "Patchwork Parkway National Scenic Byway",
    subtitle: "Brian Head Area Roads",
    url: "http://www.utahspatchworkparkway.com/",
    description:
      "Utah’s Patchwork Parkway (Scenic Byway 143), offers one of the great scenic byway experiences in the western United States. Scenic Byway 143 follows a 55 mile long course that rises from 6,000 feet on the western slope to elevations over 10,000 feet on a majestic plateau, and eventually descends again to 6,500 feet along the eastern slope. This beautiful roadway follows ancient migration routes used by Native American clans that moved from their desert wintering grounds to summer hunting and gathering lands. Cool summers and abundant natural supplies brought human inhabitants to this elevated region to acquire building materials, fuel, herbs, big-game and fish, and grazing for animals. The byway derives its name from from a significant historic event in which early pioneers saved themselves from starvation by using quilts to cross the deep winter snows of the plateau. More information on this scenic drive can be found at http://www.utahspatchworkparkway.com/",
    image: "https://www.visitbrianhead.org/file/image/m/300/120/410743a0-1a98-4df5-97ee-27ecd1aaf2f1",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
    ],    
    coordinates: {
      lat: 37.655127, 
      lng: -112.824110,
    },
  },
  {
    id: 26,
    title: "Rising K Ranch Trail Rides",
    subtitle: "Cedar City Experience",
    url: "https://risingkranchtrailrides.com/",
    description:
      "Rising K Ranch: A Utah Horseback Riding Adventure for All Experience Levels! We are open all year, Summer, Winter, Spring and Fall, for Horseback Trail Rides and Horseback Riding Lessons. We are located perfectly between Zion and Bryce Canyon National Parks near Cedar City in Southern Utah!",
    image: "https://j.b5z.net/i/u/10243073/i/rising_k-19.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.ActivitiesAndEvents,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.FamilyFun,
    ],    
    coordinates: {
      lat: 37.607235,
      lng:-113.1095151,
    },
  },
  {
    id: 27,
    title: "Cedar Breaks National Monument",
    subtitle: "National Parks and Monuments",
    url: "http://www.nps.gov/cebr/index.htm",
    description:
      "Brian Head is only five minutes up Highway 143 from one of our nation's most beautiful and captivating national parks:  Cedar Breaks.  Cedar Breaks boasts an impressive half-mile deep gorge of Utah's famous natural red rock structures, with lush evergreens, and clear night skies that are every astronomer's dream.  During our winter season, cross country skiing and snowmobile trails are provided to get from Brian Head to the park.  Please visit Cedar Breaks National Monument's website for more park details and upcoming events:  http://www.nps.gov/cebr/index.htm  *Note that Highway 148 running through Cedar Breaks is closed to vehicular traffic during winter months and is used as a groomed trail for snowmobiling, cross country skiing, and snowshoeing.",
    image:
      "https://www.nps.gov/common/uploads/banner_image/imr/homepage/0C256CF4-1DD8-B71B-0B9DCFFD72E44508.jpg?mode=crop&quality=90&width=2400&height=700",
    categories: [
      AttractionCategories.Experiences.subcategories.NationalParks,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.DarkSkies,
    ],    
    coordinates: {
      lat: 37.6362741,
      lng: -112.8474178,
    },
  },
  {
    id: 27,
    title: "Brian Head Resort",
    subtitle: "Brian Head Resort",
    url: "http://www.brianhead.com",
    description:
      "Brian Head Resort is Utah’s best kept secret-pure and simple, keeping winter sports fun and affordable with the lowest lift ticket prices for a full service ski resort in Utah. There are virtually no lift lines so you can actually enjoy your time on the slopes. Brian Head has two mountains with eight chairlifts and terrain to fit almost any skier or boarder. Navajo Mountain is completely dedicated to beginners, with a ski school, beginner terrain park and high speed quad. When the snow melts, it’s time for a whole different kind of fun at the Resort. Summer activities include: Mountain Biking, Brian Head Family Adventure Trail, Cliff Hanger Climbing Wall, Peak Shot Bungee Trampoline, Ridge Runner Zip Line, Avalanche Summer Tubing, Crooked Arrow Archery, Navajo Vistas Disc Golf Course, and Scenic Lift Ride. http://www.brianhead.com ",
    image: "https://www.visitbrianhead.org/file/image/m/300/200/6f6d9345-e4a3-4d14-ba64-eca29ad82ce9",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.FamilyFun,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.Biking,
    ],    
    coordinates: {
      lat: 37.7021177,
      lng: -112.8521613,
    },
  },
  {
    id: 28,
    title: "Bristlecone Pond ",
    subtitle: "Brian Head Area",
    url: "https://www.visitbrianhead.org/Attractions",
    description:
      "Bristlecone Pond is the summer focal point in Brian Head. The pond sits on the south end of the main corridor through Town, and features a large pavillion (which can be reserved by contacting Town Hall). There are also several small picnic pads, campfire rings, a playground, volleyball, basketball and pickleball courts available to the public. The pond is a hotspot for fishing, kayaking, swimming, and paddle boarding. Check out our many outfitters to gear up for activities at Bristlecone Pond.",
    image: "https://www.visitbrianhead.org/file/image/m/300/169/639ae05e-a573-4db7-a46b-9394d5fc77f3",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.FamilyFun,
      AttractionCategories.Experiences.subcategories.Fishing,
    ],    
    coordinates: {
      lat: 37.6894458,
      lng: -112.8534075,
    },
  },
  {
    id: 29,
    title: "Dixie National Forest",
    subtitle: "National Parks and Monuments",
    url: "http://www.fs.usda.gov/dixie ",
    description:
      "Dixie National Forest surrounds Brian Head and extends for 170 miles across Southern Utah. It includes almost two million acres and is the largest national forest in Utah. The forest is adjacent to three national parks and two national monuments, and includes areas of similar natural beauty. The red sandstone formations in Red Canyon rival those of Bryce Canyon National Park. From the top of Powell Point, it is possible to see for miles into three different states. Nearby lakes within Dixie National Forest include Panguitch Lake, Navajo Lake, and Yankee Meadow Reservoir. Please visit Dixie National Forest's website for more information:  http://www.fs.usda.gov/dixie ",
    image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd985386.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.NationalParks,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.DarkSkies,
    ],    
    coordinates: {
      lat: 37.7084369,
      lng: -112.5957131,
    },
  },
  {
    id: 30,
    title: "Panguitch Lake",
    subtitle: "Southern Utah Attractions",
    url: "https://www.visitbrianhead.org/Attractions",
    description:
      "Panguitch Lake is just 18 miles from Brian Head in Dixie National Forest right on Highway 143. The word “Panguitch” comes from the local Native American indians and means “Big Fish”. The lake has approximately 10 miles of shoreline and is ideal for year-round fishing. In the summer you find excellent fishing for some of the largest rainbow trout in Utah. Boats are available for rent. In winter ice fishing is a popular sport and easily accessible from local lodges.",
    image: "https://www.visitbrianhead.org/file/image/m/300/122/6bdc0af4-ae50-455a-881e-c652d7fe2491",
    categories: [
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.FamilyFun,
      AttractionCategories.Experiences.subcategories.Fishing,
    ],    
    coordinates: {
      lat: 37.7171449,
      lng: -112.676492,
    },
  },
  {
    id: 31,
    title: "Point Supreme Campground",
    subtitle: "National Parks and Monuments",
    url: "https://www.nps.gov/cebr/planyourvisit/psc.htm",
    description:
      "Point Supreme Campground is surrounded by meadows of wildflowers in the summer! At 10,000 feet elevation, it is a comfortable place to camp during the hotter summer months. The Point Supreme Campground has 25 campsites and accommodates both tents and RVs. Camping is available from mid-June to mid-September. Note that the campground opening and closing dates may be vary & are subject to favorable weather.",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/IMG_2811_DAF3FBE9-5056-A36F-230F3FDD8CB0BEB3-daf3f91a5056a36_daf3fc45-5056-a36f-230323817e9fcb42.jpg",
    categories: [
      AttractionCategories.Lodging.subcategories.Campground,
      AttractionCategories.Lodging.subcategories.Tenting,
    ],    
    coordinates: {
      lat: 37.6102854,
      lng: -112.8331011,
    },
  },
  {
    id: 32,
    title: "Kolob Canyon",
    subtitle: "National Parks and Monuments",
    url: "https://www.nps.gov/zion/planyourvisit/kolob-canyons.htm",
    description:
      "Kolob Canyon is a lesser known area of Zion National Park that is typically less traveled, but no less spectacular. Be prepared to be amazed. The canyon is shaped in rugged red sandstone cast against wildflowers that bloom in abundance. The canyon received its name from religious settlers in the 1850s who named it after “the star nearest to the residence of God.”",
    image: "https://visitcedarcity.com/wp-content/uploads/2019/05/Slide-2-National-Parks.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.NationalParks,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.DarkSkies,
    ],    
    coordinates: {
      lat: 37.4382542,
      lng: -113.2346693,
    },
  },
  {
    id: 33,
    title: "Zion National Park",
    subtitle: "National Parks and Monuments",
    url: "https://www.nps.gov/zion/index.htm",
    description:
      "Originally established in 1909 as Mukuntuweap National Monument, the name Zion is a Hebrew word referring to a place of safety, named so by Mormon pioneers finding refuge in Southern Utah. A geologic showpiece with sandstone cliffs among the highest in the world, this Southern Utah park measures 147,551 acres, with an elevation that ranges from 3,666 to 8,726 feet. Zion is home to a large, diverse animal and plant community, with almost 800 native species. The diversity in elevation, sunlight, water and temperature create “micro-environments,” like hanging gardens, forested side canyons and isolated mesas.",
    image: "https://visitcedarcity.com/wp-content/uploads/2019/05/Slide-4-National-Parks.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.NationalParks,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.DarkSkies,
    ],    
    coordinates: {
      lat: 37.3223096,
      lng: -113.3227303,
    },
  },
  {
    id: 34,
    title: "Bryce Canyon",
    subtitle: "National Parks and Monuments",
    url: "www.nps.gov/brca",
    description:
      "Mother Nature’s powerful force and time-honored patience sculpted this beautiful mural that we call Bryce Canyon National Park. Wind and erosion over eons of time crafted spires, fins and mazes out of colorful limestone to create a whimsical array of formations. The landscape of eccentric shadows and vibrant red hues constantly changes with every second of the day, while the cool and crisp air of night at 9,000 feet brings the stars right to your fingertips. With every twist and turn of Bryce’s stunning labyrinth, you’re one step closer to adventure.",
    image: "https://visitcedarcity.com/wp-content/uploads/2019/05/Bryce-Canyon-scaled.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.NationalParks,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.DarkSkies,
    ],    
    coordinates: {
      lat: 37.5735695,
      lng: -112.3180536,
    },
  },
  {
    id: 35,
    title: "Lake Powell",
    subtitle: "National Parks and Monuments",
    url: "www.nps.gov/glca",
    description:
      "If you enjoy floating in clean, crisp waters, then we’re sure you already know all about Lake Powell, the water playground of the West. This lake of deep blue water stretches across hundreds of miles of sandy beaches cast against jaw-dropping red rock cliffs and pocketed water holes in its gooseneck canyons. Lake Powell and the Glen Canyon National Recreation Area offers unparalleled opportunities for water-based and backcountry recreation. The area stretches for hundreds of miles from Lee’s Ferry in Arizona to the Orange Cliffs of Southern Utah, encompassing scenic vistas, geological wonders and a panorama of human history. Here, you can do it all — boating, water skiing, fishing, swimming, backcountry hiking or four-wheeling.",
    image:
      "https://visitcedarcity.com/wp-content/uploads/2019/05/National-Recreation-Areas-Lake-Powell-Jerry-Sintz.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.NationalParks,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.DarkSkies,
    ],    
    coordinates: {
      lat: 37.3880448,
      lng: -112.0874674,
    },
  },
  {
    id: 36,
    title: "Grand Staircase",
    subtitle: "National Parks and Monuments",
    url: "www.ut.blm.gov/monument",
    description:
      "Grand Staircase-Escalante National Monument is a dramatic, multi-hued landscape, rich in natural and human history. Extending across almost two million acres of Utah public lands managed by the Bureau of Land Management, the Monument represents a unique combination of archaeological, historical, paleontological, geological, and biological resources. These strikingly beautiful and scientifically important lands are divided into three distinct regions: the Grand Staircase, the Kaiparowits Plateau, and the Canyons of the Escalante, meaning “Big Mountain’s Little Brother.” Many sites from prehistoric cultures have been recorded on the Plateau. Many more are preserved for future study.",
    image:
      "https://visitcedarcity.com/wp-content/uploads/2019/05/National-Monuments-Grand-Staircase-Escalante-Tom-Till.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.NationalParks,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.DarkSkies,
    ],    
    coordinates: {
      lat: 37.4047403,
      lng: -111.6863111,
    },
  },
  {
    id: 37,
    title: "Grand Canyon",
    subtitle: "National Parks and Monuments",
    url: "www.nps.gov/grca",
    description:
      "The first time you see the Grand Canyon you’ll gasp for breath. It happens to everyone. The enormity of 2,000 million years of erosion overwhelms the senses. The canyon is so deep and the walls so sheer that the first glimpse leaves some hesitant to step near the edge. Today, it is one of the natural wonders of the world. If you’re feeling adventurous, take a mule ride into the canyon, or hike along the well-marked trails. You’ll be awe-struck as you gaze on the various shades of blues and purples as they extend from horizon to horizon.",
    image: "https://visitcedarcity.com/wp-content/uploads/2019/05/Grand-Canyon.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.NationalParks,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,
      AttractionCategories.Experiences.subcategories.Trails,
      AttractionCategories.Experiences.subcategories.DarkSkies,
    ],    
    coordinates: {
      lat: 36.0760496,
      lng: -115.0808283,
    },
  },
];

export const CityItems: AttractionItem[] = [
  {
    id: 38,
    title: "Pastry Pub",
    subtitle: "Cedar City Dining",
    url: "https://pastrypubcedarcity.com/",
    description:
      "The Pastry Pub has been Serving Cedar City, Utah since 1999, we offer a relaxing atmosphere and a fun pub like setting. Starting out as a small coffee shop we decided to offer so much more to our customers just a short time after we opened our doors. Now years later our menu has grown so much your sure to find something for everyone, from a loaded pastrami sandwich to vegetarian and gluten free menus. We serve in one of our two dining rooms, offer on site and off site catering for any of life’s important events!",
    image:
      "https://secureservercdn.net/198.71.233.83/lzw.0ad.myftpupload.com/wp-content/uploads/IMG-9047-1-scaled-1.jpg",
    categories: [
      AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
      AttractionCategories.FoodAndDrink.subcategories.Alcohol,
      AttractionCategories.FoodAndDrink.subcategories.Coffee,
    ],    
    coordinates: {
      lat: 37.6775197,
      lng: -113.0652508,
    },
  },

  {
    id: 39,
    title: "I/G Winery",
    subtitle: "Cedar City Winery",
    url: "https://igwinery.com/",
    description:
      "Nestled in the heart of Downtown Cedar City. Our wines are all made, blended and vinted locally, using grapes sourced from Washington, Oregon, California, and Utah.",
    image: "https://igwinery.com/wp-content/uploads/Building.jpg",
    categories: [AttractionCategories.FoodAndDrink.subcategories.Alcohol],    
    coordinates: {
      lat: 37.6772177,
      lng: -113.064937,
    },
  },

  {
    id: 40,
    title: "Centro Woodfired Pizzaria",
    subtitle: "Cedar City Dining",
    url: "https://www.centropizzeria.com/",
    description:
      "The pizza at centro woodfired pizzeria is inspired by traditional italian cooking techniques and proven family recipes handed down over generations. In addition to great pizza, the restaurant offers a variety of salads and starters, featuring local seasonal produce delivered to the restaurant by our network of farmers. The restaurant also offers four beers on tap and several craft bottled selections including many from local producers. The restaurant wine list features a variety of local, regional and international wines with many selections being offered by the glass.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ce2e2957873390001631a70/1584648977627-ZZK0F60Q0SRS6ZYST0X5/573A87F1-241C-4210-A951-FEA4CE8718C4.jpg?format=2500w",
    categories: [
      AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
      AttractionCategories.FoodAndDrink.subcategories.Alcohol,
    ],    
    coordinates: {
      lat: 37.677574,
      lng: -113.0649409,
    },
  },

  {
    id: 41,
    title: "Policy Kings Brewery",
    subtitle: "Cedar City Brewery",
    url: "https://policykingsbrewery.com/",
    description:
      "One pint at a time, we are waking up the pallets of our Community through creative & innovative sessionable style beers. From our signature tea beers, to our classic Westcoast IPAs, our main goal is to always deliver a crushable beer.",
    image: "https://policykingsbrewery.com/wp-content/uploads/2021/01/24556.jpeg",
    categories: [AttractionCategories.FoodAndDrink.subcategories.Alcohol],    
    coordinates: {
      lat: 37.6815036,
      lng: -113.0662931,
    },
  },

  {
    id: 42,
    title: "Calvario's Family Restaurant",
    subtitle: "Parowan Dining",
    url: "https://calvarios-family-restaurant.business.site/",
    description:
      "Family owned and ran business, we specialize in Mexican American cuisine. If it's not on the menu and we can make it we will. Here you are family!",
    image: "https://lh5.googleusercontent.com/p/AF1QipNFOhtwlOGPUv9If7dBkMxqHi6f-GsptHJs067x=s798-k-no",
    categories: [
      AttractionCategories.FoodAndDrink.subcategories.Mexican,
      AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
    ],    
    coordinates: {
      lat: 37.842791,
      lng: -112.8295399,
    },
  },

  {
    id: 43,
    title: "Bristlecone Coffee | Yoga | Connect",
    subtitle: "Cedar City Coffee House",
    url: "https://calvarios-family-restaurant.business.site/",
    description:
      "At Bristlecone, we think of coffee as a member of the community. Coffee is with you when you share some news with a friend. Coffee is with you when you’re stressed about that final. You have coffee when you’re happy and when you’re sad. We at Bristlecone want to build that sense of community for everyone to feel welcome. We invite YOU to join us.",
    image: "https://bristleconeco.com/wp-content/uploads/2020/06/connection.png",
    categories: [
      AttractionCategories.FoodAndDrink.subcategories.Coffee,
      AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
      AttractionCategories.Events.subcategories.CommunityWorkshop,
    ],    
    coordinates: {
      lat: 37.6770164,
      lng: -113.0631313,
    },
  },

  {
    id: 44,
    title: "Sook Jai Thai Cuisine",
    subtitle: "Brian Head Dining",
    url: "https://www.sookjaibrianhead.com/",
    description:
      "We serve classic, authentic Thai cuisine like curries, stir-fries, rice dishes, and noodles. Add tofu, chicken, pork, beef, or shrimp to any of your favorite entrées. ",
    image:
      "https://images.squarespace-cdn.com/content/v1/5a26b7a1d7bdcec8c32fa731/1512496647000-APVQY53U4X1GMPFA1FMF/SJ-Our-Favorites-Wide_0003_Kaeng-Ka-Ree.png?format=1500w",
    categories: [AttractionCategories.FoodAndDrink.subcategories.LocalEatery],    
    coordinates: {
      lat: 37.6940403,
      lng: -112.8468475,
    },
  },

  {
    id: 45,
    title: "Best Western Premier Brian Head",
    subtitle: "Brian Head Lodging",
    url: "https://bwpbrianheadhotel.com/",
    description:
      "The Best Western Premier Brian Head is located in the beautiful ski resort town of Brian Head, Utah. Surrounded by breathtaking views and magnificent scenery, we are the perfect location for lovers of the great outdoors. Discover the local area by visiting Brian Head Ski Resort for skiing, snowboarding, tubing, and snowmobiling. In the summer, guests can enjoy endless hiking, mountain biking, and ATV trails as well as great fishing spots.",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Hotel-Exterior-Twilight_7F122E41-5056-A36F-239064A297FE3347-7f122cc45056a36_7f122e95-5056-a36f-2395e5169d8aec44.jpg",
    categories: [
      AttractionCategories.Lodging.subcategories.Lodge,
      AttractionCategories.Lodging.subcategories.HotelMotel,
      AttractionCategories.Lodging.subcategories.Resort,
    ],    
    coordinates: {
      lat: 37.7055122,
      lng: -112.8525843,
    },
  },

  {
    id: 46,
    title: "Big Yellow Inn (B&B)",
    subtitle: "Cedar City Lodging",
    url: "http://bigyellowinn.com/",
    description:
      "Our Elegant Georgian Revival Bed & Breakfast is just one block from the Utah Shakespeare Festival. Leave your car in our parking lot and walk to dining and the downtown historic district. We offer twelve air-conditioned rooms all with private full baths. Your lodging experience includes a grand staircase, eight fireplaces, three sitting rooms, a great room, crown moldings, balconies and porches. A guest library has books and a large video collection. A full breakfast is served each morning. You can choose to eat inside in the dining area, the library or out on on of the porches. We are a luxurious Inn with the amenities of an exclusive hotel.",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Big-Yellow-Inn-front_7F48E6D4-5056-A36F-234B3B3EAC689FE7-7f48e5675056a36_7f48e72c-5056-a36f-23bc0b86e81eba7d.jpg",
    categories: [AttractionCategories.Lodging.subcategories.BedAndBreakfast],    
    coordinates: {
      lat: 37.6635726,
      lng: -113.0762252,
    },
  },

  {
    id: 47,
    title: "Abbey Inn and Suites",
    subtitle: "Cedar City Lodging",
    url: "https://abbeyinncedar.com/",
    description:
      "Abbey Inn of Cedar City, Utah is the ideal headquarters for your visit to Utah’s Color Country. Six national parks and some of the world’s most beautiful scenery are accessible by the major highways that intersect Cedar City. With a short drive you can visit Zion, Bryce Canyon, Grand Canyon North Rim, Capitol Reef, Great Basin National Parks, Cedar Breaks National Monument and Lake Powell.",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Abbey-Inn--King-Suite_D4A6B91C-5056-A36F-2322F5D269286ACC-d4a6b69f5056a36_d4a6b987-5056-a36f-23f0b979464418ad.jpg",
    categories: [AttractionCategories.Lodging.subcategories.HotelMotel],    
    coordinates: {
      lat: 37.6818201,
      lng: -113.075645700,
    },
  },

  {
    id: 48,
    title: "Southern Utah Museum of Art",
    subtitle: "Cedar City Art",
    url: "https://www.suu.edu/suma/",
    description:
      "The Southern Utah Museum of Art, on the campus of Southern Utah University, features the artwork of regional artists known for their landscapes, faculty and student artists from the SUU Department of Art & Design, as well as emerging and distinguished artists from around the country. Strengths of the nearly 2,000-object permanent collection include the body of work by Jimmie F. Jones that exemplifies his notable career in the region, as well as a robust collection of prints featuring well-known artists such as Pierre-Auguste Renoir, Salvador Dalí, Katsushika Hokusai, Thomas Hart Benton, and others. Part of the Beverley Taylor Sorenson Center for the Arts, which also includes the Utah Shakespeare Festival, SUMA is free and open to the public.",
    image: "https://www.suu.edu/suma/images/banners/suma-banner1.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.CedarCityArts,
      AttractionCategories.Experiences.subcategories.FamilyFun,
    ],    
    coordinates: {
      lat: 37.677072,
      lng: -113.0654848,
    },
  },

  {
    id: 498,
    title: "Cedar City Walks",
    subtitle: "Cedar City Walks",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Cedar City is full of stories. From the historic to the unique and curious, from beautiful public artwork to stunning scenery, there’s more to see and do on a stroll through Cedar City than you might imagine. Finding where to start, what to focus on, and where to go can be tricky though, so we’re here to help! ",
    image: "https://visitcedarcity.com/wp-content/uploads/2020/08/CedarCity-Downtown-Arika-Bauer-scaled.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.LoveLocalCedarCity,
      AttractionCategories.Experiences.subcategories.FamilyFun,
    ],    
    coordinates: {
      lat: 37.679869, 
      lng: -113.061822,
    },
  },
  {
    id: 49,
    title: "Dry Lakes Ranch Beef",
    subtitle: "Parowan Beef and Butcher Shop",
    url: "https://www.drylakesranchbeef.com/",
    description:
      "Stop by our retail beef shop on Parowan's Historic Main Street where we offer fresh beef starting Thursday each week and continuing through Monday, or when we sell out. We are closed on Tuesdays and Wednesdays for travel when we take our steers to harvest, and also pick up our fresh beef each week.",
    image:
      "https://dry-lakes-ranch-beef.square.site/uploads/b/d8d90b79e1c8c1665c1345d5ed7f485dc04b16c3de1c82e192668144afdc8392/2021-10-30_14-45-45_1635626754.jpg?width=800",
    categories: [AttractionCategories.FoodAndDrink.subcategories.Specialty],    
    coordinates: {
      lat: 37.8436592,
      lng: -112.82802,
    },
  },
  {
    id: 13,
    title: "Megaplex Theatre Cedar City",
    subtitle: "Cedar City Movie Theatre",
    url: "https://www.megaplextheatres.com/cedarcity",
    description:
      "Visit Megaplex's Cedar City theatre in Cedar City, UT 84720. Check out new films, movie trailers, showtimes, and buy movie tickets for your ultimate cinema experience.",
    image: "https://media.megaplextheatres.com/theatres/cedarcity/header-mobile.jpg",
    categories: [AttractionCategories.Experiences.subcategories.Shows],    
    coordinates: {
      lat: 37.6592425,
      lng: -113.0840113,
    },
  },
  {
    id: 50,
    title: "Grind Coffee House",
    subtitle: "Cedar City Coffee House",
    url: "https://grindcoffeehouse.business.site/",
    description:
      "The Grind Coffeehouse Cafe is a family owned coffeehouse in scenic Southern Utah. We sell Caffe Ibis coffee and delicious breakfast and lunch items. We have recently introduced more Gluten Free and Vegan/Vegetarian options, to better accommodate everyone's needs! Located in Historic Downtown Cedar City, Utah, we are surrounded by Utah's beautiful National Parks. Come check us out!",
    image:
      "https://lh3.googleusercontent.com/-Xt2ZvykFyH0/X-PNAoaIIMI/AAAAAAAAA84/Zk-E5NecNAUkPjLm91h_sGoF1MLhrfuKQCJUFGAYYCw/w768-h768-n-o-k-v1/",
    categories: [
      AttractionCategories.FoodAndDrink.subcategories.Coffee,
      AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
    ],    
    coordinates: {
      lat: 37.6778182,
      lng: -113.0622583,
    },
  },
  {
    id: 51,
    title: "Utah Shakespeare Festival",
    subtitle: "Cedar City Theatre Festival",
    url: "https://www.bard.org/",
    description: "Tony Award-winning theater at the Utah Shakespeare Festival in Cedar City, Utah.",
    image: "https://www.bard.org/assets/images/Engelstad_StarryNight.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.Shows,
      AttractionCategories.Experiences.subcategories.FamilyFun,
      AttractionCategories.Experiences.subcategories.FestivalCity,
    ],    
    coordinates: {
      lat: 37.676307,
      lng: -113.0646184,
    },
  },
  {
    id: 52,
    title: "Main Street Books Cedar City",
    subtitle: "Cedar City Book Shop",
    url: "https://www.facebook.com/mainstreetbookscedarcity/",
    description:
      "Cedar City's only independent bookstore. We carry new, used, and collectible. Exchange books for store credit and take home a new adventure!",
    image: "https://lh5.googleusercontent.com/p/AF1QipMLfnQf2LJQ_O0wWEpeq1koxBRMgk8Yl1Cdb9qd=s686-k-no",
    categories: [AttractionCategories.Experiences.subcategories.Shop],    
    coordinates: {
      lat: 37.6779331,
      lng: -113.0622103,
    },
  },
  {
    id: 952,
    title: "Shopping",
    subtitle: "Cedar City Shopping",
    url: "https://visitcedarcity.com/things-to-do/city-activities/shopping/",
    description:
      "A trip to Cedar City wouldn’t be complete without spending some time exploring our historic downtown, featuring local arts and crafts shops, coffee houses, wine bars, and restaurants. You can keep the fun going after a day on the trail, whether it’s with a little retail therapy, a good cup of coffee or a bite to eat. ",
    image: "https://visitcedarcity.com/wp-content/uploads/2019/06/Shopping-Header.jpg",
    categories: [AttractionCategories.Experiences.subcategories.Shop],    
    coordinates: {
      lat: 37.6769331,
      lng: -113.0612103,
    },
  },
  {
    id: 953,
    title: "Visitor Services",
    subtitle: "Cedar City Visitor Resources",
    url: "https://visitcedarcity.com/things-to-do/city-activities/visitor-services/",
    description:
      "We want your trip to Cedar City to go off without a hitch. Let us help you plan your stay with services like outdoor adventure tours and rentals, pet boarding, spa treatments, transportation and so much more.",
    image: "https://visitcedarcity.com/wp-content/uploads/2019/06/1-slideshow-3.jpg",
    categories: [AttractionCategories.Experiences.subcategories.FactsAndInfo,
      AttractionCategories.Experiences.subcategories.FamilyFun,
      AttractionCategories.Experiences.subcategories.LoveLocalCedarCity],    
    coordinates: {
      lat: 37.687430, 
      lng: -113.062112,
    },
  },
  {
    id: 53,
    title: "The Navajo Crafting Co.",
    subtitle: "Cedar City Shop",
    url: "https://www.navajocraftingco.com/",
    description: "Carrying on tradition with authentic + hand-crafted Navajo jewelry",
    image:
      "https://www.navajocraftingco.com/uploads/b/89153bea32d5164d8f26027c80d1047874b99cb71021deb18d1b56438dc2aee6/2020-11-18_20-51-02_1605757880.jpg?width=400",
    categories: [AttractionCategories.Experiences.subcategories.Shop],    
    coordinates: {
      lat: 37.677504, 
      lng: -113.059799,
    },
  },
  {
    id: 54,
    title: "Artisans Gallery",
    subtitle: "Cedar City Shop",
    url: "https://www.facebook.com/pages/category/Artist/Artisans-Gallery-134547949914392/",
    description:
      "Established in 2009, offering local art and handcrafted items. Artisans offers an online gallery for local artists and artisans to showcase and sell their artwork as well as a physical art gallery located in the quaint downtown district of Cedar City and just one block east of Southern Utah University and the Utah Shakespearean Festival.",
    image:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/10700637_754836944552153_6950922609931521472_o.jpg?stp=dst-jpg_s2048x2048&_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=xtk_why8ZmUAX_Uwd2Y&_nc_ht=scontent-lax3-1.xx&oh=00_AT-0pwHzOtU6zkbbAIJGWNw8tewVbNv_nXu2sgPfg5bWEw&oe=625AF82E",
    categories: [
      AttractionCategories.Experiences.subcategories.Shop,
      AttractionCategories.Experiences.subcategories.CedarCityArts,
    ],    
    coordinates: {
      lat: 37.6776036,
      lng: -113.0633943,
    },
  },

  {
    id: 777,
    title: "Union Pacific Railroad Depot",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Rail travel proved pivotal for Cedar City, bringing Hollywood to town for southern Utah’s vast landscapes as backdrops to film and as a jumping-off point for visitors enjoying Southwest’s national parks, Learn how the railroad led Cedar City to became America’s “Gateway to the National Parks” by clicking here.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.68158287207399, 
      lng: -113.06192591984222,
    },
  },
  {
    id: 778,
    title: "Hotel El Escalante",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "During the golden age of rail tourism in the American West, Cedar City’s El Escalante was the gateway to Utah’s natural wonder. Sadly, the grand hotel was torn down but its history is relevant to Cedar City’s prominence internationally an international tourism destination, learn more by clicking here.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.6807572551217, 
      lng: -113.06190581562824,
    },
  },
  {
    id: 779,
    title: "Bank of Southern Utah",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "The reality of the Great Depression really hit home in Iron County when the Bank of Southern Utah was forced to close on Christmas Eve in 1931. The tenaciousness of the residents in reopening its one and only bank is a testament that the people of Cedar City always put their community above self. See their story by clicking here.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.67845137307977, 
      lng: -113.06182793453382,
    },
  },
  {
    id: 780,
    title: "Richard Harrison Statue - Iron Works Superintendent",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Richard Harrison arrived in Cedar City in 1851 among the community’s very first settlers. Here he helped establish the Iron Mission and organize a company for the making of Iron. He was superintendent of the Iron Works, helped design and build the original furnace, and on September 30th, 1852, presided over the manufacture of the first iron from iron ore in Utah.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.678519833363886, 
      lng: -113.06188544668943,
    },
  },
  {
    id: 781,
    title: "Cedar Sheep Association Co-Op",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Established in 1881, members of the Cedar Sheep Association turned their sheep and land to the organization so that in return they could draw supplies, food, and staples from the store. 1917, a new building was built south of the original store with an archway opening between the two buildings that you still see today. The upstairs was occupied by doctors and served as Cedar City’s first hospital. In the 1960’s it was converted into a soda fountain and drug store, which is its primary use today.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.67910423534091, 
      lng: -113.06186351409231,
    },
  },
  {
    id: 782,
    title: "Francis Webster Statue - Pioneer Stockman",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Francis Webster was an early merchant in Cedar City. One of the stalwarts in the monumental effort to build the first building (Old Main) at what is now Southern Utah University, he was a member of the Building Committee and is credited with playing a crucial role in persuading townspeople to participate in the undertaking.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.67904056195397, 
      lng: -113.06193839043422,
    },
  },
  {
    id: 783,
    title: "Henry Lunt Statue - Cedar City Founder",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Fighting a blinding blizzard, Henry Lunt led 35 Mormon settlers to found Cedar City in 1851. After helping with the settlement of Parowan, Lunt was sent with the settlers 15 miles south to start the town and iron mining operations. He kept extensive journals of his experiences.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.67769019508632, 
      lng: -113.06153641666177,
    },
  },
  {
    id: 784,
    title: "Post Office",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "During the turbulent 1920s, the US Government promised Cedar City a needed Federal building and post office. The Chamber of Commerce campaigned for the building to be located in the downtown to bring residents and shoppers into the area. A site was selected but to much chagrin of many locals as it also meant that the Tabernacle built by the LDS church would have to be torn down. The businessmen won out and the Tabernacle was razed. The building’s clock tower was preserved and placed in the Rock Church steeple which was built at the same time next door. Today the Old Post Office serves as the City Offices and Police Station.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.67768089013065, 
      lng: -113.06143595257926,
    },
  },
  {
    id: 785,
    title: "Old Rock Church",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Cedar City’s Rock Church is a shining example of the resourcefulness and fortitude of residents during the Great Depression. LDS Church leaders felt it pertinent to build a new church building since their Tabernacle Building was being torn down to make way for a new post office. The new church would serve as a place of worship and community gathering place. Money for its construction was scarce so community members pledged their own funds while others donated their time, labor and talents. Community members gathered rocks and lumber from the nearby mountains and forged iron from Iron Springs for ornate chandeliers and door hinges. Using local materials made the building unique and also cut costs. The Rock Church is still used today as a place of worship but you are welcome to wander the church grounds. Tours are by appointment only, call Ed at 435-586-6345.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.677615822134726, 
      lng: -113.06067632726078,
    },
  },
  {
    id: 786,
    title: "Rotary Veterans Park",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "This park features large scale memorials, statues and walking paths in honor of veterans of Afghanistan, Iraqi Freedom, Korean, Vietnam and World Wars I & II.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.68061179154555, 
      lng: -113.05816986519918,
    },
  },
  {
    id: 787,
    title: "Helen Foster Snow Statue - Heroine of China",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "No one would have predicted the far-reaching impact of this girl born in Cedar City and her Gung Ho initiative that changed an entire nation half a world away. Learn Helen Foster Snow’s story by clicking here.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.68112459377538, 
      lng: -113.06154992565024,
    },
  },
  {
    id: 788,
    title: "Paiute Monument",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Located on the outside of Cedar City Public Library, the Paiute Monument features several boulders with petroglyphs incised onto the rock face. The petroglyphs represent the stories of the Paiute people.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.68275732413817, 
      lng: -113.06035225577726,
    },
  },
  {
    id: 789,
    title: "Pioneer Iron Works Blast Furnace",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "This monument marks the spot where on Sept. 30, 1852, the first iron was manufactured west of the Mississippi River by the Mormon Iron Missionaries sent by Brigham Young.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.68448693638563, 
      lng: -113.06007875506914,
    },
  },
  {
    id: 790,
    title: "Thorley Building",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "The Thorley building anchored the southern end of Cedar City’s Main Street for many years. Two primary attractions dominated the retail space- Zion Candy Kitchen and the Thorley theatre. The theatre became one of the first in Cedar to show motion pictures including Cecil B. Demille’s Union Pacific. Shot at Iron Springs and using many locals as extras, the film told the story of the creation of the transcontinental railroad. Union Pacific is only one of many Hollywood films shot in the area. Others include: My Friend Flicka, Can’t Help Singing, Proud Rebel, and Drums Along the Mohawk.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.677825538880896, 
      lng: -113.06184993239536,
    },
  },
  {
    id: 791,
    title: "Jolley's Building",
    subtitle: "Cedar City Historic Downtown Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Once, the Cedar’s Hotel, this is one of the oldest buildings on Main Street and a wonderful example of historic structures serving a present-day purpose. Until the construction of the El Escalante Hotel in 1923, the Cedar’s was the finest hotel in Southern Utah. It was in the lobby of the Cedar’s that brothers Gronway and Chauncey Parry conceived of the Utah Parks Transportation Company. The Parry brothers conducted guided auto tours to Zion, Bryce Canyon, and the North Rim of the Grand Canyon. This enterprise evolved, with Union Pacific as a partner, into the Utah Parks Company, bringing thousands of tourists to the area each year.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.DowntownTour,

    ],    
    coordinates: {
      lat: 37.67840552324446, 
      lng: -113.06164870176057,
    },
  },


  {
    id: 792,
    title: "Southern Pacific Train Carboose",
    subtitle: "Cedar City Railroad History Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "The caboose provided the train crew with shelter and working space while they threw switches and inspected for problems such as shifting loads, overheated axle bearings, and dragging equipment. The conductor used the caboose for filling out various forms and reports. On longer trips, the caboose provided living quarters. Caboose 4618 was manufactured by Pacific Car and Foundry in 1978 and delivered to Southern Pacific. In its heyday, Southern Pacific operated nearly 14,000 miles of track covering various routes stretching from Tennessee to California. The body of Caboose 4618 was painted in mineral red with the bay window ends and the end walls in daylight orange, both traditional Southern Pacific colors. Cabooses in the SP system were designated C-XX-X. The “C” stood for caboose, the “XX” denoted the axle load in tons, and the final “X” represented the class, type, or design. Caboose 4618 is a C-50-7. Power for the caboose was provided by a small electrical generator mounted on the lead truck. This caboose was purchased from a California rail yard in 2005 by George Lutterman. In April 2013 it was donated to Frontier Homestead State Park and moved in partnership with Iron County, Union Pacific, Construction Steel, Inc., and Gilbert Development, Inc.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.RailroadTour,

    ],    
    coordinates: {
      lat: 37.68869475716539, 
      lng: -113.06217893706986,
    },
  },
  {
    id: 793,
    title: "Utah Parks Company Bus Garage",
    subtitle: "Cedar City Railroad History Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "In the early days of National Park tourism, visitors rode buses to the parks from Cedar City, Utah after a thirty-five-mile railroad spur off the mainline from Lund was finished in 1923. These long buses featured convertible tops, which provided for much better viewing of the park’s spectacular scenery. During the mid-1920s, the Union Pacific and the Utah Parks Company built a bus garage in Cedar City to house and maintain forty 11-passenger buses purchased to take tourists on a tour of what became known as “The Grand Circle,” which included Bryce Canyon, Cedar Breaks, the North Rim of the Grand Canyon, Pipe Springs, and Zion National Park.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.RailroadTour,

    ],    
    coordinates: {
      lat: 37.68557699977359, 
      lng: -113.06208129147443,
    },
  },
  {
    id: 794,
    title: "Original Rail Crossing Sign & Mining Car",
    subtitle: "Cedar City Railroad History Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "During a recent upgrade to the Best Western Plus hotel, the owners wanted to pay homage to the history of the location as depot and passenger area for the Union Pacific rail line spur into Cedar City. The rail crossing sign is the original sign for the property preserved for generations to enjoy. The mining car was used in the iron mines west of Cedar City, which was also served by the railroad in shipping the raw ore to northern Utah.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.RailroadTour,

    ],    
    coordinates: {
      lat: 37.682022072606415, 
      lng: -113.06205068150156,
    },
  },
  {
    id: 795,
    title: "Union Pacific Depot",
    subtitle: "Cedar City Railroad History Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Immediately after the completion of the Transcontinental Railroad across Utah in 1869, the Utah Central Railroad began to stretch to the south. Every extension of rail shortened wagon travel and shipping into the region, however, tracks didn’t cross into Iron County until 1905 and the spur in Cedar City wasn’t completed until 1923 (celebrated by a visit from President Warren G Harding and his wife on June 27, 1923). Railroads proved pivotal for Iron County. Freight trains were able to haul more raw materials than ever before, increasing profits for local mining companies. Hollywood came to Cedar City by train as well, thanks to brothers Gronway, Chauncey and Whitney Parry. Cedar City also marketed itself (and continues to do so today) as the “Gateway to the National Parks” and became the jumping-off point for national park tour groups brought in by the Union Pacific owned Utah Parks Company (UPC). The UPC provided meals, transportation, and entertainment for the guests, commonly referred to as “dudes.” The “Grand Circle” Tour took the “dudes” to Zion National Park, the North Rim of the Grand Canyon, Bryce Canyon, and Cedar Breaks. Today, the historic Depot houses a restaurant, bakery, and an antique store.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.RailroadTour,

    ],    
    coordinates: {
      lat: 37.681478607711554, 
      lng: -113.06242474505744,
    },
  },
  {
    id: 796,
    title: "Main Street Park",
    subtitle: "Cedar City Railroad History Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "The park was established in 1886 and originally known as Liberty Park. The Liberty Flagpole in the center of the park was built by the Daughters of the Utah Pioneers and is considered to be one of the tallest historic flagpoles in the West. The first City Hall was located on the southwest corner of the park but was later torn down to make way for park improvements. After World War II, the grounds became a makeshift campground for National Park visitors traveling by automobile rather than train. Nowadays, the park serves as the hub of historic downtown and hosts many events each year including the Midsummer Renaissance Faire, July 4th and 24th Celebration, Pioneer Day, and July Jamboree.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.RailroadTour,

    ],    
    coordinates: {
      lat: 37.68168097114926, 
      lng: -113.06101354206969,
    },
  },
  {
    id: 797,
    title: "El Escalante Hotel",
    subtitle: "Cedar City Railroad History Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "Supported by the Cedar City Chamber of Commerce and designed by Randall Jones in 1919, the El Escalante hotel, located conveniently across from the railroad depot became the answer. Construction began under the direction of city leaders with locally made brick and soon the hotel was purchased by Union Pacific to accommodate tourists to the nearby Utah parks. In 1923, the hotel began hosting thousands of visitors a year, including movie stars and President Warren G. Harding. Not only did the El Escalante serve as a hotel, but also as community event space, dorms for pilot trainees during WWII, and as the anchor of the north end of Main Street for nearly 50 years. With the decline in rail travel, the hotel was sold to the city in the late 1950s. In August of 1971, it was sold to a private enterprise and was demolished.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.RailroadTour,

    ],    
    coordinates: {
      lat: 37.68097829982143, 
      lng: -113.06510587725035,
    },
  },
  {
    id: 798,
    title: "Utah Parks Commissary",
    subtitle: "Cedar City Railroad History Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "This building served as the headquarters for the UPC. All supplies, reservations, accounting, maintenance, and hiring for the UPC was coordinated through this office. Supplies for the various operations were shipped to the commissary by train and sent to the Parks by truck. Four to five hundred dollars of merchandise was sent to the UPC locations three times a week – Mondays, Wednesdays, and Fridays. The building was equipped with a large freight elevator that moved canned goods and bulk supplies down to and up from the basement. There were large refrigerators for the meat, which was sliced to order by the butcher on site. The building also housed a large humidor for tobacco products and large shelves for concession items. The commissary staff controlled nearly every UPC field operation.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.RailroadTour,

    ],    
    coordinates: {
      lat: 37.681290163282874, 
      lng: -113.0636329144359,
    },
  },
  {
    id: 799,
    title: "Rail Road Workers' Housing",
    subtitle: "Cedar City Railroad History Walking Tour",
    url: "https://visitcedarcity.com/things-to-do/city-activities/cedar-city-walks/",
    description:
      "As you walk down this portion of 100 West, you see a nice row of houses. This section of town was developed to help house the many workers of the Union Pacific Railroad and their subsidiary company Utah Parks Company.",
    image:
      "",
    categories: [
      AttractionCategories.Experiences.subcategories.RailroadTour,

    ],    
    coordinates: {
      lat: 37.681824142548464, 
      lng: -113.06359308875075,
    },
  },
  {
    id: 70,
    title: "\"C\" Overlook - Iron Hills Trail System",
    subtitle: "Cedar City Lookout",
    url: "https://www.google.com/maps/place/%22C%22+Overlook+-+Iron+Hills+Trail+System/@37.6432323,-113.0349959,16.1z/data=!4m9!1m2!2m1!1sC-Overlook!3m5!1s0x80ca9f6f4be43a43:0xc816f3e8a199d5e3!8m2!3d37.6424104!4d-113.0345998!15sCgpDLU92ZXJsb29rkgELaGlraW5nX2FyZWE",
    description:
      "Breathtaking views at night of the city and the milkyway Galaxy.",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNH1ERRFw86FVSxmYGcgPWOk8WR4LzbN4yOosfq=w408-h306-k-no",
    categories: [
      AttractionCategories.Experiences.subcategories.DarkSkies,
      AttractionCategories.Experiences.subcategories.Trails,

    ],    
    coordinates: {
      lat: 37.642325947427565, 
      lng: -113.0345333191046,
    },
  },
  {
    id: 71,
    title: "Cedar City Outdoor Activities",
    subtitle: "Cedar City Outdoor Activities Overview",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/outdoor-activities/",
    description:
      "Everyone knows that Utah has the greatest snow on earth, but did they also know that we have the sickest dirt jumps, the cleanest air, some of the richest human history, and the coolest hikes on earth, too? Living life elevated means a never-ending array of snow sports, fishing, hiking, mountain biking, golf, motorsports… the list goes on and on, proving that there really is something for everyone in Cedar City.",
    image:
      "https://visitcedarcity.com/wp-content/uploads/2019/07/Outdoor-Activities-Header.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.Fishing,
      AttractionCategories.Experiences.subcategories.Biking,
      AttractionCategories.Experiences.subcategories.DarkSkies,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.Trails,

    ],    

  },
  {
    id: 72,
    title: "Cedar City Recreation Areas",
    subtitle: "Cedar City Recreation Areas Overview",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/recreation-areas/",
    description:
      "Surrounded by national forests, serene lakes and canyons, there’s so much to discover in Cedar City, it’s easy to understand why it’d be hard to choose just one thing. So why not check them all out? ",
    image:
      "https://visitcedarcity.com/wp-content/uploads/2019/06/50038255742_598d8398fc_o-scaled.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.Fishing,
      AttractionCategories.Experiences.subcategories.Biking,
      AttractionCategories.Experiences.subcategories.DarkSkies,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Lodging.subcategories.Campground,
      AttractionCategories.Experiences.subcategories.Trails,

    ],    

  },
  {
    id: 73,
    title: "Discover The City",
    subtitle: "Cedar City Discover The City",
    url: "https://visitcedarcity.com/things-to-do/outdoor-activities/discovery/",
    description:
      "Explore the unique history of Cedar City through Old Iron Town, discover rare petroglyphs from the area’s first inhabitants and learn more about Southern Utah in one of our amazing museums.",
    image:
      "https://visitcedarcity.com/wp-content/uploads/2019/06/Discover-Header.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.CedarCityArts,
      AttractionCategories.Experiences.subcategories.CedarCityWalks,
      AttractionCategories.Experiences.subcategories.LoveLocalCedarCity,
      AttractionCategories.Experiences.subcategories.Outdoor,
      AttractionCategories.Experiences.subcategories.Drives,

    ],    

  },
  {
    id: 74,
    title: "Cedar City Art And Culture",
    subtitle: "Cedar City Art And Culture",
    url: "https://visitcedarcity.com/things-to-do/city-activities/art-culture/",
    description:
      "Cedar City isn’t only home to some of the best outdoor recreation anywhere, you can find a rich art and culture scene here, too. Spend the day exploring several art museums and galleries or catch a show by one of our talented performing arts groups. Not to mention, Cedar City is home to a variety of festivals that celebrate everything from Shakespeare to UFOs to Neil Simon. No matter how you plan your trip, you can’t deny that being able to enjoy world-class art and entertainment against such a stunning backdrop is truly a unique experience.",
    image:
      "https://visitcedarcity.com/wp-content/uploads/2019/06/Header2.jpg",
    categories: [
      AttractionCategories.Experiences.subcategories.CedarCityArts,
      AttractionCategories.Experiences.subcategories.LoveLocalCedarCity,
      AttractionCategories.Experiences.subcategories.ActivitiesAndEvents,

    ],    

  },
];
