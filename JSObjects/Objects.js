(function () {
    function getCountriesWithCitiesMaxCounts(countries) {
        // noinspection ES6ConvertVarToLetConst
        var citiesMaxCount = 0;

        countries.forEach(function (country) {
            if (country.cities.length >= citiesMaxCount) {
                citiesMaxCount = country.cities.length;
            }
        });

        return countries.filter(function (country) {
            return country.cities.length === citiesMaxCount;
        });
    }

    function getCountriesObject(countries) {
        // noinspection ES6ConvertVarToLetConst
        var countriesObject = {};

        countries.forEach(function (country) {
            countriesObject[country.name] = country.cities.reduce(function (sum, city) {
                return sum + city.population;
            }, 0);
        })

        return countriesObject;
    }

    // noinspection ES6ConvertVarToLetConst
    var countries = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 12678079
                },
                {
                    name: "Novosibirsk",
                    population: 1625631
                },
                {
                    name: "Ufa",
                    population: 1128787
                }
            ]
        },
        {
            name: "Austria",
            cities: [
                {
                    name: "Vein",
                    population: 1897491
                },
                {
                    name: "Salzburg",
                    population: 149673
                },
                {
                    name: "Linz",
                    population: 193486
                }
            ]
        },
        {
            name: "China",
            cities: [
                {
                    name: "Shanghai",
                    population: 23390000
                },
                {
                    name: "Beijing",
                    population: 21710000
                }
            ]
        }];

    console.log("Массив стран: ");
    console.log(countries);

    console.log("Страна/страны с максимальным количеством городов: ");
    console.log(getCountriesWithCitiesMaxCounts(countries));


    console.log("Объект с информацией по всем странам: ");
    console.log(getCountriesObject(countries));
})();