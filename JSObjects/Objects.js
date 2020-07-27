(function () {
    function getCountriesWithMaxCitiesCount(countries) {
        var citiesMaxCount = 0;

        countries.reduce(function (max, country) {
            return citiesMaxCount = Math.max(country.cities.length, citiesMaxCount)
        }, 0);

        return countries.filter(function (country) {
            return country.cities.length === citiesMaxCount;
        });
    }

    function getCountriesObject(countries) {
        var countriesObject = {};

        countries.forEach(function (country) {
            countriesObject[country.name] = country.cities.reduce(function (sum, city) {
                return sum + city.population;
            }, 0);
        })

        return countriesObject;
    }

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
        }
    ];

    console.log("Массив стран: ");
    console.log(countries);

    console.log("Страна/страны с максимальным количеством городов: ");
    console.log(getCountriesWithMaxCitiesCount(countries));

    console.log("Объект с информацией по всем странам: ");
    console.log(getCountriesObject(countries));
})();