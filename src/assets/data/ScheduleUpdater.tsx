

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
            let date = new Date()
            date.setDate(date.getDate() - 1);

            data.forEach((element: any) => {
                
                if(!(new Date(element.acf.start_date).getTime()<date.getTime())){
                    // console.log(element)
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
                
                    returnable = returnable + "\"url\": \""+element.link+"\",\"timeStart\": \""+element.acf.start_time+"\","
                
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

//https://tockify.com/api/ngevent?max=-1&view=upcoming&calname=brianheadeventsmonthly&max-events-after=12&showAll=false&debug=loaded&passback=2022%3A3%3A0&startms=1648274400000&start-inclusive=true&end-inclusive=true&endms=1651384800000

export async function getBHSched() : Promise<string> {
    return new Promise(async (resolve, reject) => {
        let returnable = "{\"schedule\": ["
        var id = 2000;
        let thefetch = await fetch('https://tockify.com/api/ngevent?max=-1&view=upcoming&calname=brianheadeventsmonthly&max-events-after=12&showAll=false&debug=loaded&passback=2022%3A3%3A0&startms='+new Date().getTime()+'&start-inclusive=true&end-inclusive=true&endms=9651384800000')  
        .then(response => response.json())
        .then(data => {
            // console.log(data.toString().includes("Art Festival"))
            // console.log(data)
            data.events.forEach((el: any) => {

                let name = el.content.summary.text
                if(name.includes('"')){
                    name = "Check out this event on our Online Calendar"
                    // name.replaceAll("\"","")
                    // console.log(name)

                }
                
                id++;
                returnable = returnable + "{"
                returnable = returnable + "\"date\": \""+new Date(el.when.start.millis).toISOString().slice(0, 10)+"\","
            
                returnable = returnable + "\"groups\": [{ \"time\": \"" + new Date(el.when.start.millis).toLocaleTimeString("en-US")+"\","
            
                returnable = returnable + "\"sessions\": [ {\"name\": \""+name+"\","
            
                returnable = returnable + "\"url\": \"https://brianhead.com\",\"timeStart\": \""+new Date(el.when.start.millis).toLocaleTimeString("en-US")+"\","
            
                returnable = returnable + "\"timeEnd\": \""+new Date(el.when.end.millis).toLocaleTimeString("en-US")+"\","
                returnable = returnable + "\"location\": \""+(JSON.stringify(el.content.location) ? el.content.location.name : "Brian Head Resort")+"\","
            
                returnable = returnable + "\"tracks\": [\"Brian Head\"],\"id\": \""+id+"\"}]}]},"
            });
            returnable = returnable
            // console.log(returnable)

            localStorage.setItem("BHScheduleUpdate", returnable)
        
    });
})}


export async function getSUMASched() : Promise<string> {
    return new Promise(async (resolve, reject) => {
        let returnable = "{\"schedule\": ["
        var id = 2000;
        let thefetch = await fetch('https://www.googleapis.com/calendar/v3/calendars/suu.edu_hohm4a339kc7qpj79jnhfom0pc@group.calendar.google.com/events?key=AIzaSyBLJiGeQHA3cHNh0UGWNqJiotLKQOId6J0&timeMin='+new Date().toISOString().slice(0, -5)+'-06:00&maxResults=30&orderBy=startTime&singleEvents=true&q=')  
        .then(response => response.json())
        .then(data => {
            // console.log(data.toString().includes("Art Festival"))
            // console.log(data)
            data.items.forEach((el: any) => {
                // console.log(el)
                // let newdate = el.start.dateTime.slice(0, -6)+".000Z"
                // console.log(newdate)
                
                id++;

                returnable = returnable + "{"
                try {
                    new Date(el.start.dateTime)
                    returnable = returnable + "\"date\": \""+new Date(el.start.dateTime).toISOString().slice(0, 10)+"\","
            
                    returnable = returnable + "\"groups\": [{ \"time\": \"" + new Date(el.start.dateTime).toLocaleTimeString("en-US")+"\","
                
                    returnable = returnable + "\"sessions\": [ {\"name\": \""+el.summary+"\","
                
                    returnable = returnable + "\"url\": \"https://www.suu.edu/suma/events.html\",\"timeStart\": \""+new Date(el.start.dateTime).toLocaleTimeString("en-US")+"\","
                
                    returnable = returnable + "\"timeEnd\": \""+new Date(el.end.dateTime).toLocaleTimeString("en-US")+"\","
                } catch (error) {
                    returnable = returnable + "\"date\": \""+new Date(el.start.date).toISOString().slice(0, 10)+"\","
            
                    returnable = returnable + "\"groups\": [{ \"time\": \"" + new Date(el.start.date).toLocaleTimeString("en-US")+"\","
                
                    returnable = returnable + "\"sessions\": [ {\"name\": \""+el.summary+"\","
                
                    returnable = returnable + "\"url\": \"https://www.suu.edu/suma/events.html\",\"timeStart\": \""+new Date(el.start.date).toLocaleTimeString("en-US")+"\","
                
                    returnable = returnable + "\"timeEnd\": \""+new Date(el.end.date).toLocaleTimeString("en-US")+"\","
                }
                returnable = returnable + "\"location\": \""+"SUMA"+"\","
            
                returnable = returnable + "\"tracks\": [\"SUMA\"],\"id\": \""+id+"\"}]}]},"
                localStorage.setItem("SUMAScheduleUpdate", returnable)
            });
            returnable = returnable
            // console.log(returnable)

            localStorage.setItem("SUMAScheduleUpdate", returnable)
        
    });
})}


export async function getCBAlerts() : Promise<string> {
    return new Promise(async (resolve, reject) => {
        let returnable = "{\"schedule\": ["
        var id = 3000;
        let thefetch = await fetch('https://www.nps.gov/cebr/nps-alerts-cebr.json?dt='+new Date().getTime())  
        .then(response => response.json())
        .then(data => {
            // console.log(data.toString().includes("Art Festival"))
            // console.log(data)
            data.CEDATA.forEach((el: any) => {
                // console.log(el)
                // let newdate = el.start.dateTime.slice(0, -6)+".000Z"
                // console.log(newdate)
                
                id++;

                returnable = returnable + "{"

                    returnable = returnable + "\"date\": \""+new Date().toISOString().slice(0, 10)+"\","
            
                    returnable = returnable + "\"groups\": [{ \"time\": \"\","
                
                    returnable = returnable + "\"sessions\": [ {\"name\": \""+el.FIC_title+"\","
                
                    returnable = returnable + "\"url\": \"https://www.nps.gov/cebr/\",\"timeStart\": \"\","
                
                    returnable = returnable + "\"timeEnd\": \"\","
                returnable = returnable + "\"location\": \""+"Cedar Breaks National Monument"+"\","
            
                returnable = returnable + "\"tracks\": [\"Cedar Breaks National Monument\"],\"id\": \""+id+"\"}]}]},"
                localStorage.setItem("CBAlertUpdate", returnable)
            });
            returnable = returnable
            // console.log(returnable)

            localStorage.setItem("CBAlertUpdate", returnable)
        
    });
})}
