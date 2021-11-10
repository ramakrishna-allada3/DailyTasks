var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        var countries = JSON.parse(this.response);
        for (let count = 0; count < countries.length ; count++) {
            console.log("Country: " + countries[count]["name"]["common"]);
            console.log("Region: " + countries[count]["region"]);
            console.log("Subregion: " + countries[count]["subregion"]);
            console.log("Population: " + countries[count]["population"]);
            console.log("-----------------------------------");
        }
    }
}

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();