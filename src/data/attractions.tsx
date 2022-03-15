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


export const OutdoorItems = [
    {
      id: 1,
      title: "Vermillion Castle",
      subtitle: "Brian Head Area Trails",
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Trails",
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
url: "https://www.visitbrianhead.org/Attractions",
        description: "Our peak has the best view around at 11,307 ft.  From the top, one can see into neighboring states such as Arizona and Nevada.  The stone hut on the very tip of the peak was built between 1935-1937 by the Civilian Conservation Corps; ever since its construction, it has become an icon on the peak.  It not only provides a taste of Brian Head's past, but also a breathtaking view.  (Literally, breath taking since it is so high in elevation). Just before reaching the peak, you'll see the Sydney Peak Trailhead, which is the jumping off point for several of the hiking and mountain biking trails in Dixie National Forest, including Dark Hollow, Bunker Creek, Sydney Peaks, Spruces, and Mace's Run. Restrooms are located at the trailhead. *Note: The road to the summit is accessible in the summer and fall seasons only. ",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/200/d8c9c3fe-29ee-4e2e-b2d1-6817027910d3",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.Drives,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 22,
        title: "Yankee Meadows",
        subtitle: "Brian Head Area Trails and Roads",
url: "https://www.visitbrianhead.org/Attractions",
        description: "Yankee Meadows is a little known gem that offers outstanding beauty and recreation. Only 15 miles from Brian Head, it is accessed off of Hwy 143 in Parowan Canyon. The drive up Yankee Meadows Road is surrounded by the towering red rocks of Vermillion Castle dotted with juniper trees and scrub oak and maple. There are several trails along the way that lead to the top of the cliffs where one can see the “Noah’s Ark” and the “Grand Castle” formations. In the fall, the scrub oak and maple blaze red and orange making it an outstanding area for leaf peepers. As you continue up to Yankee Meadows, you'll find campgrounds, picnic areas, and fantastic scenery. Yankee Meadow Reservoir is located at the base of the towering volcanic cliffs of Sydney Peaks. During summer and fall trout fishing and non-motorized boating are the most popular activities.   Note: Much of the vegetation and camping right around Yankee Meadow Reservoir was significantly damaged during the 2017 Brian Head Fire. Revegetation efforts are underway, but it will take some years to be completed. ",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/168/6eb1b0de-9e5f-4207-89ef-0a18e6ac45df",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.Drives,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 23,
        title: "Ashdown Gorge Wilderness Area",
        subtitle: "Brian Head Area Trails and Roads",
url: "https://www.visitbrianhead.org/Attractions",
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
url: "https://www.visitbrianhead.org/Attractions",
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
url: "http://www.utahspatchworkparkway.com/",
        description: "Utah’s Patchwork Parkway (Scenic Byway 143), offers one of the great scenic byway experiences in the western United States. Scenic Byway 143 follows a 55 mile long course that rises from 6,000 feet on the western slope to elevations over 10,000 feet on a majestic plateau, and eventually descends again to 6,500 feet along the eastern slope. This beautiful roadway follows ancient migration routes used by Native American clans that moved from their desert wintering grounds to summer hunting and gathering lands. Cool summers and abundant natural supplies brought human inhabitants to this elevated region to acquire building materials, fuel, herbs, big-game and fish, and grazing for animals. The byway derives its name from from a significant historic event in which early pioneers saved themselves from starvation by using quilts to cross the deep winter snows of the plateau. More information on this scenic drive can be found at http://www.utahspatchworkparkway.com/",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/120/410743a0-1a98-4df5-97ee-27ecd1aaf2f1",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.Drives,
        AttractionCategories.Experiences.subcategories.Trails,
        ],
    },
    {
        id: 26,
        title: "Rising K Ranch Trail Rides",
        subtitle: "Cedar City Experience",
url: "https://risingkranchtrailrides.com/",
        description: "Rising K Ranch: A Utah Horseback Riding Adventure for All Experience Levels! We are open all year, Summer, Winter, Spring and Fall, for Horseback Trail Rides and Horseback Riding Lessons. We are located perfectly between Zion and Bryce Canyon National Parks near Cedar City in Southern Utah!",
        image:
            "https://j.b5z.net/i/u/10243073/i/rising_k-19.jpg",
        categories: [
        AttractionCategories.Experiences.subcategories.ActivitiesAndEvents,
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.Trails,
        AttractionCategories.Experiences.subcategories.FamilyFun,
        ],
    },
    {
        id: 27,
        title: "Cedar Breaks National Monument",
        subtitle: "National Parks and Monuments",
url: "http://www.nps.gov/cebr/index.htm",
        description: "Brian Head is only five minutes up Highway 143 from one of our nation's most beautiful and captivating national parks:  Cedar Breaks.  Cedar Breaks boasts an impressive half-mile deep gorge of Utah's famous natural red rock structures, with lush evergreens, and clear night skies that are every astronomer's dream.  During our winter season, cross country skiing and snowmobile trails are provided to get from Brian Head to the park.  Please visit Cedar Breaks National Monument's website for more park details and upcoming events:  http://www.nps.gov/cebr/index.htm  *Note that Highway 148 running through Cedar Breaks is closed to vehicular traffic during winter months and is used as a groomed trail for snowmobiling, cross country skiing, and snowshoeing.",
        image:
            "https://www.nps.gov/common/uploads/banner_image/imr/homepage/0C256CF4-1DD8-B71B-0B9DCFFD72E44508.jpg?mode=crop&quality=90&width=2400&height=700",
        categories: [
        AttractionCategories.Experiences.subcategories.NationalParks,
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.Drives,
        AttractionCategories.Experiences.subcategories.Trails,
        AttractionCategories.Experiences.subcategories.DarkSkies,
        ],
    },
    {
        id: 27,
        title: "Brian Head Resort",
        subtitle: "Brian Head Resort",
url: "http://www.brianhead.com",
        description: "Brian Head Resort is Utah’s best kept secret-pure and simple, keeping winter sports fun and affordable with the lowest lift ticket prices for a full service ski resort in Utah. There are virtually no lift lines so you can actually enjoy your time on the slopes. Brian Head has two mountains with eight chairlifts and terrain to fit almost any skier or boarder. Navajo Mountain is completely dedicated to beginners, with a ski school, beginner terrain park and high speed quad. When the snow melts, it’s time for a whole different kind of fun at the Resort. Summer activities include: Mountain Biking, Brian Head Family Adventure Trail, Cliff Hanger Climbing Wall, Peak Shot Bungee Trampoline, Ridge Runner Zip Line, Avalanche Summer Tubing, Crooked Arrow Archery, Navajo Vistas Disc Golf Course, and Scenic Lift Ride. http://www.brianhead.com ",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/200/6f6d9345-e4a3-4d14-ba64-eca29ad82ce9",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.FamilyFun,
        AttractionCategories.Experiences.subcategories.Trails,
        AttractionCategories.Experiences.subcategories.Biking,
        ],
    },
    {
        id: 28,
        title: "Bristlecone Pond ",
        subtitle: "Brian Head Area",
url: "https://www.visitbrianhead.org/Attractions",
        description: "Bristlecone Pond is the summer focal point in Brian Head. The pond sits on the south end of the main corridor through Town, and features a large pavillion (which can be reserved by contacting Town Hall). There are also several small picnic pads, campfire rings, a playground, volleyball, basketball and pickleball courts available to the public. The pond is a hotspot for fishing, kayaking, swimming, and paddle boarding. Check out our many outfitters to gear up for activities at Bristlecone Pond.",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/169/639ae05e-a573-4db7-a46b-9394d5fc77f3",
        categories: [
        AttractionCategories.Experiences.subcategories.Outdoor,
        AttractionCategories.Experiences.subcategories.FamilyFun,
        AttractionCategories.Experiences.subcategories.Fishing,
        ],
    },
    {
        id: 29,
        title: "Dixie National Forest",
        subtitle: "National Parks and Monuments",
url: "http://www.fs.usda.gov/dixie ",
        description: "Dixie National Forest surrounds Brian Head and extends for 170 miles across Southern Utah. It includes almost two million acres and is the largest national forest in Utah. The forest is adjacent to three national parks and two national monuments, and includes areas of similar natural beauty. The red sandstone formations in Red Canyon rival those of Bryce Canyon National Park. From the top of Powell Point, it is possible to see for miles into three different states. Nearby lakes within Dixie National Forest include Panguitch Lake, Navajo Lake, and Yankee Meadow Reservoir. Please visit Dixie National Forest's website for more information:  http://www.fs.usda.gov/dixie ",
        image:
            "https://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd985386.jpg",
        categories: [
            AttractionCategories.Experiences.subcategories.NationalParks,
            AttractionCategories.Experiences.subcategories.Outdoor,
            AttractionCategories.Experiences.subcategories.Drives,
            AttractionCategories.Experiences.subcategories.Trails,
            AttractionCategories.Experiences.subcategories.DarkSkies,
        ],
    },
    {
        id: 30,
        title: "Panguitch Lake",
        subtitle: "Southern Utah Attractions",
url: "https://www.visitbrianhead.org/Attractions",
        description: "Panguitch Lake is just 18 miles from Brian Head in Dixie National Forest right on Highway 143. The word “Panguitch” comes from the local Native American indians and means “Big Fish”. The lake has approximately 10 miles of shoreline and is ideal for year-round fishing. In the summer you find excellent fishing for some of the largest rainbow trout in Utah. Boats are available for rent. In winter ice fishing is a popular sport and easily accessible from local lodges.",
        image:
            "https://www.visitbrianhead.org/file/image/m/300/122/6bdc0af4-ae50-455a-881e-c652d7fe2491",
        categories: [
            AttractionCategories.Experiences.subcategories.Outdoor,
            AttractionCategories.Experiences.subcategories.FamilyFun,
            AttractionCategories.Experiences.subcategories.Fishing,
        ],
    },
    {
        id: 31,
        title: "Point Supreme Campground",
        subtitle: "National Parks and Monuments",
url: "https://www.nps.gov/cebr/planyourvisit/psc.htm",
        description: "Point Supreme Campground is surrounded by meadows of wildflowers in the summer! At 10,000 feet elevation, it is a comfortable place to camp during the hotter summer months. The Point Supreme Campground has 25 campsites and accommodates both tents and RVs. Camping is available from mid-June to mid-September. Note that the campground opening and closing dates may be vary & are subject to favorable weather.",
        image:
            "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/IMG_2811_DAF3FBE9-5056-A36F-230F3FDD8CB0BEB3-daf3f91a5056a36_daf3fc45-5056-a36f-230323817e9fcb42.jpg",
        categories: [
            AttractionCategories.Lodging.subcategories.Campground,
            AttractionCategories.Lodging.subcategories.Tenting,

        ],
    },
]

export const CityItems = [
    {
        id: 1,
        title: "Pastry Pub",
        subtitle: "Cedar City Dining",
url: "https://pastrypubcedarcity.com/",
        description: "The Pastry Pub has been Serving Cedar City, Utah since 1999, we offer a relaxing atmosphere and a fun pub like setting. Starting out as a small coffee shop we decided to offer so much more to our customers just a short time after we opened our doors. Now years later our menu has grown so much your sure to find something for everyone, from a loaded pastrami sandwich to vegetarian and gluten free menus. We serve in one of our two dining rooms, offer on site and off site catering for any of life’s important events!",
        image:
            "https://secureservercdn.net/198.71.233.83/lzw.0ad.myftpupload.com/wp-content/uploads/IMG-9047-1-scaled-1.jpg",
        categories: [
            AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
            AttractionCategories.FoodAndDrink.subcategories.Alcohol,
            AttractionCategories.FoodAndDrink.subcategories.Coffee,
        ],
    },

    {
        id: 2,
        title: "I/G Winery",
        subtitle: "Cedar City Winery",
url: "https://igwinery.com/",
        description: "Nestled in the heart of Downtown Cedar City. Our wines are all made, blended and vinted locally, using grapes sourced from Washington, Oregon, California, and Utah.",
        image:
            "https://igwinery.com/wp-content/uploads/Building.jpg",
        categories: [
            AttractionCategories.FoodAndDrink.subcategories.Alcohol,
        ],
    },

    {
        id: 3,
        title: "Centro Woodfired Pizzaria",
        subtitle: "Cedar City Dining",
url: "https://www.centropizzeria.com/",
        description: "THE PIZZA AT CENTRO WOODFIRED PIZZERIA IS INSPIRED BY TRADITIONAL ITALIAN COOKING TECHNIQUES AND PROVEN FAMILY RECIPES HANDED DOWN OVER GENERATIONS. IN ADDITION TO GREAT PIZZA, THE RESTAURANT OFFERS A VARIETY OF SALADS AND STARTERS, FEATURING LOCAL SEASONAL PRODUCE DELIVERED TO THE RESTAURANT BY OUR NETWORK OF FARMERS. THE RESTAURANT ALSO OFFERS FOUR BEERS ON TAP AND SEVERAL CRAFT BOTTLED SELECTIONS INCLUDING MANY FROM LOCAL PRODUCERS. THE RESTAURANT WINE LIST FEATURES A VARIETY OF LOCAL, REGIONAL AND INTERNATIONAL WINES WITH MANY SELECTIONS BEING OFFERED BY THE GLASS.",
        image:
            "https://images.squarespace-cdn.com/content/v1/5ce2e2957873390001631a70/1584648977627-ZZK0F60Q0SRS6ZYST0X5/573A87F1-241C-4210-A951-FEA4CE8718C4.jpg?format=2500w",
        categories: [
            AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
            AttractionCategories.FoodAndDrink.subcategories.Alcohol,
        ],
    },

    {
        id: 4,
        title: "Policy Kings Brewery",
        subtitle: "Cedar City Brewery",
url: "https://policykingsbrewery.com/",
        description: "One pint at a time, we are waking up the pallets of our Community through creative & innovative sessionable style beers. From our signature tea beers, to our classic Westcoast IPAs, our main goal is to always deliver a crushable beer.",
        image:
            "https://lh5.googleusercontent.com/p/AF1QipOp_n-CjtzuDDSGS77PPCPuwEDqvwL1DWaGpAWv=w203-h152-k-no",
        categories: [
            AttractionCategories.FoodAndDrink.subcategories.Alcohol,
        ],
    },

    {
        id: 5,
        title: "Calvario's Family Restaurant",
        subtitle: "Parowan Dining",
url: "https://calvarios-family-restaurant.business.site/",
        description: "Family owned and ran business, we specialize in Mexican American cuisine. If it's not on the menu and we can make it we will. Here you are family!",
        image:
            "https://lh3.googleusercontent.com/p/AF1QipNFOhtwlOGPUv9If7dBkMxqHi6f-GsptHJs067x=w1080-h608-p-no-v0",
        categories: [
            AttractionCategories.FoodAndDrink.subcategories.Mexican,
            AttractionCategories.FoodAndDrink.subcategories.LocalEatery,

        ],
    },

    {
        id: 6,
        title: "Bristlecone Coffee | Yoga | Connect",
        subtitle: "Cedar City Coffee House",
url: "https://calvarios-family-restaurant.business.site/",
        description: "At Bristlecone, we think of coffee as a member of the community. Coffee is with you when you share some news with a friend. Coffee is with you when you’re stressed about that final. You have coffee when you’re happy and when you’re sad. We at Bristlecone want to build that sense of community for everyone to feel welcome. We invite YOU to join us.",
        image:
            "https://bristleconeco.com/wp-content/uploads/2020/06/connection.png",
        categories: [
            AttractionCategories.FoodAndDrink.subcategories.Coffee,
            AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
            AttractionCategories.Events.subcategories.CommunityWorkshop,

        ],
    },


    {
        id: 7,
        title: "Sook Jai Thai Cuisine",
        subtitle: "Brian Head Dining",
url: "https://www.sookjaibrianhead.com/",
        description: "We serve classic, authentic Thai cuisine like curries, stir-fries, rice dishes, and noodles. Add tofu, chicken, pork, beef, or shrimp to any of your favorite entrées. ",
        image:
            "https://images.squarespace-cdn.com/content/v1/5a26b7a1d7bdcec8c32fa731/1512496647000-APVQY53U4X1GMPFA1FMF/SJ-Our-Favorites-Wide_0003_Kaeng-Ka-Ree.png?format=1500w",
        categories: [
            AttractionCategories.FoodAndDrink.subcategories.LocalEatery,
        ],
    },

    {
        id: 8,
        title: "Best Western Premier Brian Head",
        subtitle: "Brian Head Lodging",
url: "https://bwpbrianheadhotel.com/",
        description: "The BEST WESTERN PREMIER Brian Head is located in the beautiful ski resort town of Brian Head, Utah. Surrounded by breathtaking views and magnificent scenery, we are the perfect location for lovers of the great outdoors. Discover the local area by visiting Brian Head Ski Resort for skiing, snowboarding, tubing, and snowmobiling. In the summer, guests can enjoy endless hiking, mountain biking, and ATV trails as well as great fishing spots.",
        image:
            "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Hotel-Exterior-Twilight_7F122E41-5056-A36F-239064A297FE3347-7f122cc45056a36_7f122e95-5056-a36f-2395e5169d8aec44.jpg",
        categories: [
            AttractionCategories.Lodging.subcategories.Lodge,
            AttractionCategories.Lodging.subcategories.HotelMotel,
            AttractionCategories.Lodging.subcategories.Resort,


        ],
    },

    {
        id: 9,
        title: "Big Yellow Inn (B&B)",
        subtitle: "Cedar City Lodging",
url: "http://bigyellowinn.com/",
        description: "Our Elegant Georgian Revival Bed & Breakfast is just one block from the Utah Shakespeare Festival. Leave your car in our parking lot and walk to dining and the downtown historic district. We offer twelve air-conditioned rooms all with private full baths. Your lodging experience includes a grand staircase, eight fireplaces, three sitting rooms, a great room, crown moldings, balconies and porches. A guest library has books and a large video collection. A full breakfast is served each morning. You can choose to eat inside in the dining area, the library or out on on of the porches. We are a luxurious Inn with the amenities of an exclusive hotel.",
        image:
            "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Big-Yellow-Inn-front_7F48E6D4-5056-A36F-234B3B3EAC689FE7-7f48e5675056a36_7f48e72c-5056-a36f-23bc0b86e81eba7d.jpg",
        categories: [

            AttractionCategories.Lodging.subcategories.BedAndBreakfast,


        ],
    },

    {
        id: 10,
        title: "Abbey Inn and Suites",
        subtitle: "Cedar City Lodging",
url: "https://abbeyinncedar.com/",
        description: "Abbey Inn of Cedar City, Utah is the ideal headquarters for your visit to Utah’s Color Country. Six national parks and some of the world’s most beautiful scenery are accessible by the major highways that intersect Cedar City. With a short drive you can visit Zion, Bryce Canyon, Grand Canyon North Rim, Capitol Reef, Great Basin National Parks, Cedar Breaks National Monument and Lake Powell.",
        image:
            "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Abbey-Inn--King-Suite_D4A6B91C-5056-A36F-2322F5D269286ACC-d4a6b69f5056a36_d4a6b987-5056-a36f-23f0b979464418ad.jpg",
        categories: [

            AttractionCategories.Lodging.subcategories.HotelMotel,


        ],
    },

    {
        id: 11,
        title: "Southern Utah Museum of Art",
        subtitle: "Cedar City Art",
url: "https://www.suu.edu/suma/",
        description: "The Southern Utah Museum of Art, on the campus of Southern Utah University, features the artwork of regional artists known for their landscapes, faculty and student artists from the SUU Department of Art & Design, as well as emerging and distinguished artists from around the country. Strengths of the nearly 2,000-object permanent collection include the body of work by Jimmie F. Jones that exemplifies his notable career in the region, as well as a robust collection of prints featuring well-known artists such as Pierre-Auguste Renoir, Salvador Dalí, Katsushika Hokusai, Thomas Hart Benton, and others. Part of the Beverley Taylor Sorenson Center for the Arts, which also includes the Utah Shakespeare Festival, SUMA is free and open to the public.",
        image:
            "https://www.suu.edu/suma/images/banners/suma-banner1.jpg",
        categories: [

            AttractionCategories.Experiences.subcategories.CedarCityArts,
            AttractionCategories.Experiences.subcategories.FamilyFun,



        ],
    },
    {
        id: 12,
        title: "Dry Lakes Ranch Beef",
        subtitle: "Parowan Beef and Butcher Shop",
url: "https://www.drylakesranchbeef.com/",
        description: "Stop by our retail beef shop on Parowan's Historic Main Street where we offer fresh beef starting Thursday each week and continuing through Monday, or when we sell out. We are closed on Tuesdays and Wednesdays for travel when we take our steers to harvest, and also pick up our fresh beef each week.",
        image:
            "https://dry-lakes-ranch-beef.square.site/uploads/b/d8d90b79e1c8c1665c1345d5ed7f485dc04b16c3de1c82e192668144afdc8392/2021-10-30_14-45-45_1635626754.jpg?width=800",
        categories: [

            AttractionCategories.FoodAndDrink.subcategories.Specialty,


        ],
    },
]