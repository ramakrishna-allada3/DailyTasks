
// Below code gets the rest countries from the rest countries open source API
const getRestCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    return response.json(); //extract JSON from the http response
}


getRestCountries().then(data => {

    // a. Get all the countries from Asia continent /region using Filter function
    console.log('Asian countries: ');
    console.log(data.filter(country => (country.continents[0] === 'Asia' || country.region === 'Asia')));

    // b. Get all the countries with a population of less than 2 lakhs using Filter function
    console.log('Countries with population less than two lakhs: ');
    console.log(data.filter(country => country.population < 200000));

    // c. Print the following details name, capital, flag using forEach function
    console.log("Country details: ");
    var countryCounter = 1;
    console.log(data.forEach(country => {
        console.log(countryCounter);
        console.log("Name: " + country.name.common);
        if (country.capital !== undefined)
            console.log("Capital: " + country.capital['0']);
        console.log("Flag: " + country.flag);
        console.log(country.population);
        countryCounter++;
    }));

    // d. Print the total population of countries using reduce function
    // console.log(data.reduce(function(a, b) {
    //     (a.population + b.population);
    // }, 0));
});