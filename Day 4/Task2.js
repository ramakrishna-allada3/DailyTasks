var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        var countries = JSON.parse(this.response);
        for (let count = 0; count < countries.length ; count++) {
            console.log(countries[count]["name"]["common"] + ": " + countries[count]["flag"]);
        }
    }
}

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();