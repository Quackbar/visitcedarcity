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


export const TrailItems = [
    {
      id: 1,
      title: "Vermillion Castle",
      subtitle: "Brian Head Area Trails",
      description: "2 mile, Out-and-Back type trail accessible Late Spring though Fall.",
      image:
        "https://www.visitbrianhead.org/File/1fb8638d-3e2b-48b1-93d1-5b48ded737ac",
      categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
      ],
    },
    {
        id: 2,
        title: "Noah's Ark",
        subtitle: "Brian Head Area Trails",
        description: "3 mile, Out-and-Back type trail accessible Late Spring though Fall.",
        image:
            "https://www.visitbrianhead.org/File/b812a61d-2904-4c68-93f2-e872693e473f",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 3,
        title: "Vermillion Castle",
        subtitle: "Brian Head Area Trails",
        description: "2 mile, Out-and-Back type trail accessible Late Spring though Fall.",
        image:
            "https://www.visitbrianhead.org/File/4f4227f8-e379-4866-8c65-978b10fdc573",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 4,
        title: "Hidden Haven",
        subtitle: "Brian Head Area Trails",
        description: "1 mile, Out-and-Back type trail accessible Late Spring though Fall.",
        image:
            "https://www.visitbrianhead.org/File/220b031f-b3cd-4ddd-aaba-9018f1bd8f23",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 4,
        title: "Hidden Haven",
        subtitle: "Brian Head Area Trails",
        description: "1 mile, Out-and-Back type trail accessible Late Spring though Fall.",
        image:
            "https://www.visitbrianhead.org/File/220b031f-b3cd-4ddd-aaba-9018f1bd8f23",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 5,
        title: "Henderson Lake",
        subtitle: "Brian Head Area Trails",
        description: "3 mile, Out-and-Back (or continue on Dark Hollow Trai for point-to-point or loop) type trail accessible Early Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/f39f1ee6-2d25-415d-b574-4871798b4364",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 6,
        title: "Manzanita",
        subtitle: "Brian Head Area Trails",
        description: "2.5 mile, Loop type trail accessible Early Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/898cef05-df6b-40e0-89d4-d237fb92b65d",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 7,
        title: "Town Trail",
        subtitle: "Brian Head Area Trails",
        description: "2 mile, Point-to-Point type trail accessible Early Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/c6d6bcf5-ea72-40f1-89f7-815786eb9510",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 8,
        title: "Alpine Creek Loop",
        subtitle: "Brian Head Area Trails",
        description: "2 - 4 - 9 mile, Loop type trail accessible Early Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/27ca3269-6d60-4179-9970-1e2ebeb4364b",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 9,
        title: "Dark Hollow",
        subtitle: "Brian Head Area Trails",
        description: "14.5 mile, Point-to-Point type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/45f000c3-548f-44be-9bdc-360dfec454e8",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 10,
        title: "Sidney Peaks",
        subtitle: "Brian Head Area Trails",
        description: "4 mile, Point-to-Point type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/afbfecff-722a-436d-991b-fdac1bdb9649",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 11,
        title: "Bunker Creek",
        subtitle: "Brian Head Area Trails",
        description: "11 mile, Point-to-Point type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/8f1d2314-e81f-4ae0-b1f0-f2e836562c5a",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 12,
        title: "Twisted Forest",
        subtitle: "Brian Head Area Trails",
        description: "1 mile, Out-and-Back type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/66e5092c-d0ef-4b53-995c-228a2b325bd1",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 13,
        title: "Navajo Loop",
        subtitle: "Brian Head Area Trails",
        description: "3.5 mile, Loop type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/7ea638b3-96f9-425f-a112-38916b6d6640",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 14,
        title: "Marathon / Mace's Run",
        subtitle: "Brian Head Area Trails",
        description: "5 mile, Loop type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/220b031f-b3cd-4ddd-aaba-9018f1bd8f23",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 15,
        title: "Lowder Ponds Loop",
        subtitle: "Brian Head Area Trails",
        description: "11.5 mile, Loop type trail accessible Late Spring though Fall.",
        image: "https://www.visitbrianhead.org/File/db1a48da-f22d-466b-a613-91aa4ecc0085",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 16,
        title: "High Mountain",
        subtitle: "Brian Head Area Trails",
        description: "6 mile, Out-and-Back or Point-to-Point type trail accessible Late Spring though Fall.",
        image:
            "https://www.visitbrianhead.org/File/393200b3-5022-4323-88d8-ec11f099ad64",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 17,
        title: "Rattlesnake",
        subtitle: "Brian Head Area Trails",
        description: "10 mile, Out-and-Back or Point-to-Point type trail accessible Late Spring though Fall.",
        image:
            "https://www.visitbrianhead.org/File/f0585b38-f7e6-4646-8158-5a1e3c9c24a2",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 18,
        title: "Alpine Pond",
        subtitle: "Brian Head Area Trails",
        description: "1 mile, Loop type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/95328441-a68e-4fd1-a319-0187f3ebc0d7",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 19,
        title: "Ramparts",
        subtitle: "Brian Head Area Trails",
        description: "2 mile, Out-and-Back type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/7e6f955b-1e42-4a0a-a2b6-932d694b89f6",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 20,
        title: "Hancock Peak",
        subtitle: "Brian Head Area Trails",
        description: "5.5 mile, Point-to-Point type trail accessible Summer though Fall.",
        image:
            "https://www.visitbrianhead.org/File/00085e57-a61a-4975-a0b7-54b73ce6f12d",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 21,
        title: "Brian Head Peak",
        subtitle: "Brian Head Area Trails and Roads",
        description: "Our peak has the best view around at 11,307 ft.  From the top, one can see into neighboring states such as Arizona and Nevada.  The stone hut on the very tip of the peak was built between 1935-1937 by the Civilian Conservation Corps; ever since its construction, it has become an icon on the peak.  It not only provides a taste of Brian Head's past, but also a breathtaking view.  (Literally, breath taking since it is so high in elevation). Just before reaching the peak, you'll see the Sydney Peak Trailhead, which is the jumping off point for several of the hiking and mountain biking trails in Dixie National Forest, including Dark Hollow, Bunker Creek, Sydney Peaks, Spruces, and Mace's Run. Restrooms are located at the trailhead. *Note: The road to the summit is accessible in the summer and fall seasons only. ",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/200/d8c9c3fe-29ee-4e2e-b2d1-6817027910d3",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 22,
        title: "Yankee Meadows",
        subtitle: "Brian Head Area Trails and Roads",
        description: "Yankee Meadows is a little known gem that offers outstanding beauty and recreation. Only 15 miles from Brian Head, it is accessed off of Hwy 143 in Parowan Canyon. The drive up Yankee Meadows Road is surrounded by the towering red rocks of Vermillion Castle dotted with juniper trees and scrub oak and maple. There are several trails along the way that lead to the top of the cliffs where one can see the “Noah’s Ark” and the “Grand Castle” formations. In the fall, the scrub oak and maple blaze red and orange making it an outstanding area for leaf peepers. As you continue up to Yankee Meadows, you'll find campgrounds, picnic areas, and fantastic scenery. Yankee Meadow Reservoir is located at the base of the towering volcanic cliffs of Sydney Peaks. During summer and fall trout fishing and non-motorized boating are the most popular activities.   Note: Much of the vegetation and camping right around Yankee Meadow Reservoir was significantly damaged during the 2017 Brian Head Fire. Revegetation efforts are underway, but it will take some years to be completed. ",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/168/6eb1b0de-9e5f-4207-89ef-0a18e6ac45df",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 23,
        title: "Ashdown Gorge Wilderness Area",
        subtitle: "Brian Head Area Trails and Roads",
        description: "Ashdown Gorge in Dixie National Forest is one of the best kept secrets in Southern Utah. While it's not for the more casual recreationalist, those who brave the steep trails and rough terrain will be treated to a back country experience few can boast of. The area can be accessed from either the Rattlesnake Trail (named for the creek and not a particular prevalence of vipers -- although you always want to watch out for snakes) which is adjacent to the North Entrance of Cedar Breaks National Monument, or the High Mountain Trail which is right off of Dry Lakes Road west of Brian Head. Both of those trails will drop you down into mountain meadows where deer and elk are common and into the river gorge where you'll hike through narrows and slot canyons past Flannigan Arch (PS: be prepared to get wet). Exploring the several creeks in these drainages you'll be rewarded with pristine water falls, slot canyons, and untouched back country. Most people hike through Ashdown Creek which lets out on Highway 14 in Cedar Canyon, where they stash a shuttle car. Some will hike out Potato Hollow trail, and those in impressive physical condition may want to hike up and out the way they came in (not for the faint of heart). The hike is about 12 miles one-way and can be done in one day, but most take the opportunity to do it as an overnight backpacking trip.",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/316/7f3d934d-30ca-448e-8fe8-faef203db75d",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 24,
        title: "Twisted Forest/Dry Lakes Scenic Backway",
        subtitle: "Brian Head Area Trails and Roads",
        description: "Often overlooked by hikers headed to nearby Cedar Breaks National Monument, a sacred grove of prehistoric trees aptly titled “Twisted Forest” lies at the end of a family friendly, mile-long, out-and-back hike a few miles west of Brian Head accessed off of Dry Lakes Road. This short stroll takes you through a rare and somewhat ghostly grove of Bristlecone Pines – a species thought to be among the oldest living organisms on the planet, often surviving for 3,000-4,000 years. The trail meanders up a gravely red rock slope abruptly terminating at the top of a cliffside with sweeping views of Cedar Breaks and Ashdown Gorge.",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/200/1895e48f-8ba5-4046-80bb-ac208a8b3519",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 25,
        title: "Patchwork Parkway National Scenic Byway",
        subtitle: "Brian Head Area Roads",
        description: "Utah’s Patchwork Parkway (Scenic Byway 143), offers one of the great scenic byway experiences in the western United States. Scenic Byway 143 follows a 55 mile long course that rises from 6,000 feet on the western slope to elevations over 10,000 feet on a majestic plateau, and eventually descends again to 6,500 feet along the eastern slope. This beautiful roadway follows ancient migration routes used by Native American clans that moved from their desert wintering grounds to summer hunting and gathering lands. Cool summers and abundant natural supplies brought human inhabitants to this elevated region to acquire building materials, fuel, herbs, big-game and fish, and grazing for animals. The byway derives its name from from a significant historic event in which early pioneers saved themselves from starvation by using quilts to cross the deep winter snows of the plateau. More information on this scenic drive can be found at http://www.utahspatchworkparkway.com/",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/120/410743a0-1a98-4df5-97ee-27ecd1aaf2f1",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.CedarCityWalks,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
]