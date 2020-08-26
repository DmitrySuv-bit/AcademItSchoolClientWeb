(function () {
    function getAverageAge(people) {
        return _.reduce(people, function (sum, person) {
            return sum + person.age;
        }, 0) / people.length;
    }

    function getPeopleBetween20And30(people) {
        return _.chain(people)
            .filter(function (person) {
                return person.age >= 20 && person.age <= 30;
            })
            .sortBy("age")
            .value();
    }

    function addFullName(people) {
        _.each(people, function (person) {
            person["fullName"] = person.name + " " + person.lastName;
        });
    }

    var people = [
        {
            name: "Theodore",
            lastName: "Willis",
            age: 20
        },
        {
            name: "Robert",
            lastName: "Holmes",
            age: 30
        },
        {
            name: "Giles",
            lastName: "Weaver",
            age: 29
        },
        {
            name: "Joseph",
            lastName: "Sutton",
            age: 21
        },
        {
            name: "Franklin",
            lastName: "Hancock",
            age: 45
        },
        {
            name: "Henry",
            lastName: "Clark",
            age: 31
        },
        {
            name: "Duane",
            lastName: "Tate",
            age: 27
        },
        {
            name: "Peter",
            lastName: "Eaton",
            age: 19
        },
        {
            name: "Charles",
            lastName: "Stewart",
            age: 26
        },
        {
            name: "Walter",
            lastName: "Bishop",
            age: 15
        }
    ];

    console.log("Средний возраст всех людей: ");
    console.log(getAverageAge(people));

    console.log("Список людей с возрастом от 20 до 30: ");
    console.log(getPeopleBetween20And30(people));

    console.log("Список людей с полем Full name: ");
    addFullName(people);
    console.log(people);
})();