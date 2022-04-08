export let CCSchedule = {"schedule": [
    {
    "date": "2022-04-07",
    "groups": [{ "time": "12:00:00 AM",
    "sessions": [ {"name": "OSU: Young Composer Concert",
    "url": "https://visitcedarcity.com/events/","timeStart": "7:30 pm",
    "timeEnd": "9:00 pm",
    "location": "Heritage Center Theater",
    "tracks": ["General Events"],"id": "1"}]},]},
    ]}


let schedule = localStorage.getItem("CCScheduleUpdate")?.slice(0,-1) + "]}" || "{\"schedule\": []}"
    // console.log(schedule)


try{
    CCSchedule = JSON.parse(schedule)
}catch(err){
    console.log(err)
}

