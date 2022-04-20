export let SUUPSchedule = {"schedule": [
    {
    "date": "2022-04-09",
    "groups": [{ "time": "7:30:00 PM",
    "sessions": [ {"name": "Music Masterworks Series Wind Symphony Concert",
    "url": "https://www.suu.edu/pva/","timeStart": "7:30:00 PM",
    "timeEnd": "9:30:00 PM",
    "location": "Heritage Center Theater, 105 N 100 E, Cedar City, UT 84720, USA",
    "tracks": ["SUU Performing Arts"],"id": "1"}]},]},
    ]}

let schedule = localStorage.getItem("SUUPUpdate")?.slice(0,-1) + "]}" || "{\"schedule\": []}"
// console.log(schedule)


try{
    SUUPSchedule = JSON.parse(schedule)
}catch(err){
    console.log(err)
}
