https://www.nps.gov/cebr/nps-alerts-cebr.json?dt=1649092392175

fetch('https://www.nps.gov/cebr/nps-alerts-cebr.json?dt='+new Date().getTime())  
        .then(response => response.json())
        .then(data => {

            data.items.forEach((el) => {
                console.log(el)
            })
        })