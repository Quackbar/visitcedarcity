

// localStorage.setItem("CCScheduleUpdate", "{\"schedule\": [}")

export async function getCCSched() : Promise<string> {
    return new Promise(async (resolve, reject) => {
        let returnable = "{\"schedule\": ["
        var id = 1000;
        let thefetch = await fetch('https://visitcedarcity.com/wp-json/wp/v2/events?per_page=300&page=1')  
        .then(response => response.json())
        .then(data => {
            // console.log(data.toString().includes("Art Festival"))
            // console.log(data)
            data.forEach((element: any) => {
                
                if(!(new Date(element.acf.start_date).getTime()<new Date().getTime())){
                    id++;
                    returnable = returnable + "{"
                    returnable = returnable + "\"date\": \""+new Date(element.acf.start_date).toISOString().slice(0, 10)+"\","
                
                    returnable = returnable + "\"groups\": [{ \"time\": \"" + new Date(element.acf.start_date).toLocaleTimeString("en-US")+"\","
                    let name = element.acf.full_title
                    if(name.includes('"')){
                        name = "Check out this event on our Online Calendar"
                        // name.replaceAll("\"","")
                        // console.log(name)

                    }

                    returnable = returnable + "\"sessions\": [ {\"name\": \""+name+"\","
                
                    returnable = returnable + "\"url\": \"https://visitcedarcity.com/events/\",\"timeStart\": \""+element.acf.start_time+"\","
                
                    returnable = returnable + "\"timeEnd\": \""+element.acf.end_time+"\","
                    returnable = returnable + "\"location\": \""+element.acf.location+"\","
                
                    returnable = returnable + "\"tracks\": [\"General Events\"],\"id\": \""+id+"\"}]}]},"
                }
            });
            returnable = returnable
            // console.log(returnable)

            localStorage.setItem("CCScheduleUpdate", returnable)
        })
    });
}


