var rn = new Date().getTime()



console.log("{\"schedule\": [")

for (let index = 0; index < 365; index++) {
    // console.log(new Date(rn+(86400000*index)).toDateString())
    if(new Date(rn+(86400000*index)).toDateString().includes("Sat")){
    console.log("{")
    console.log("\"date\": \""+new Date(rn+(86400000*index)).toISOString().slice(0, 10)+"\",")

    console.log("\"groups\": [{ \"time\": \"10:00 am\",")

    console.log("\"sessions\": [ {\"name\": \"Farmer's Market\",")

    console.log("\"url\": \"https://www.facebook.com/groups/CedarSaturdayFarmersMarket/\",\"timeStart\": \"10:00 am\",")

    console.log("\"timeEnd\": \"1:00 pm\",")
    console.log("\"location\": \"45 W Center St, Cedar City\",")

    console.log("\"tracks\": [\"Farmer's Market\"],\"id\": \""+index+"\"}]},]},")
    }

}
console.log("]}")