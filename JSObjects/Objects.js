function getCountriesArray() {
    // noinspection ES6ConvertVarToLetConst
    var country1 = {
        name: "Russia",
        cities: [
            {
                nameCity: "Moscow",
                population: 12678079
            },
            {
                nameCity: "Novosibirsk",
                population: 1625631
            },
            {
                nameCity: "Ufa",
                population: 1128787
            }
        ]
    };

    // noinspection ES6ConvertVarToLetConst
    var country2 = {
        name: "Austria",
        cities: [
            {
                nameCity: "Vein",
                population: 1897491
            },
            {
                nameCity: "Salzburg",
                population: 149673
            },
            {
                nameCity: "Linz",
                population: 193486
            }
        ]
    };

    // noinspection ES6ConvertVarToLetConst
    var country3 = {
        name: "China",
        cities: [
            {
                nameCity: "Shanghai",
                population: 23390000
            },
            {
                nameCity: "Beijing",
                population: 21710000
            }
        ]
    };

    // noinspection ES6ConvertVarToLetConst
    var countries = [];

    countries.push(country1, country2, country3);

    return countries;
}

function countriesMaxCountsCities(countries) {
    // noinspection ES6ConvertVarToLetConst
    var maxCities = 0;

    // noinspection ES6ConvertVarToLetConst
    for (var i = 0; i < countries.length; ++i) {
        // noinspection ES6ConvertVarToLetConst
        var citiesCount = countries[i].cities.length;

        if (citiesCount > maxCities) {
            maxCities = citiesCount;
        }
    }

    // noinspection ES6ConvertVarToLetConst
    for (var j = 0; j < countries.length; ++j) {
        if (countries[j].cities.length === maxCities) {
            console.log(countries[j].name);
        }
    }
}

function getCountriesObject(countries) {
    // noinspection ES6ConvertVarToLetConst
    var countriesObject = {};

    // noinspection ES6ConvertVarToLetConst
    for (var i = 0; i < countries.length; ++i) {
        // noinspection ES6ConvertVarToLetConst
        var populationSum = 0;

        // noinspection ES6ConvertVarToLetConst
        for (var j = 0; j < countries[i].cities.length; ++j) {
            populationSum += countries[i].cities[j].population;
        }

        countriesObject["" + countries[i].name] = populationSum;
    }

    return countriesObject;
}

(function main() {
    // noinspection ES6ConvertVarToLetConst
    var countries = getCountriesArray();

    console.log("Массив стран: ");
    console.log(countries);

    console.log("Страна/страны с максимальным количеством городов: ");
    countriesMaxCountsCities(countries);

    console.log("Объект с информацией по всем странам: ");
    console.log(getCountriesObject(countries));
})();