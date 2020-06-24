(function sortDescending() {
    // noinspection ES6ConvertVarToLetConst
    var array = [1, 4, 10, -1, 2, -8];

    array.sort(function (e1, e2) {
        return e1 - e2;
    }).reverse();

    console.log("Сортировка по убыванию: ");
    console.log(array);
})();

(function subarray() {
    // noinspection ES6ConvertVarToLetConst
    var array = [5, 9, 4, 2, 6, 8];

    // noinspection ES6ConvertVarToLetConst
    var array1 = array.slice(0, 5);

    if (array.length >= 5) {
        // noinspection ES6ConvertVarToLetConst
        var array2 = array.slice(array.length - 5);
    } else {
        array2 = array.slice(0);
    }

    console.log("Подмассив из первых 5 элементов: ");
    console.log(array1);

    console.log("Подмассив из последних 5 элементов: ");
    console.log(array2);
})();

(function evenNumbersSum() {
    // noinspection ES6ConvertVarToLetConst
    var array = [5, 9, 4, 2, 6, 8, 10];

    // noinspection ES6ConvertVarToLetConst
    var evenNumbersArray = array.filter(function (e) {
        return e % 2 === 0;
    });

    // noinspection ES6ConvertVarToLetConst
    var evenNumbersSum = evenNumbersArray.reduce(function (e1, e2) {
        return e1 + e2;
    }, 0);

    console.log("Массив четных чисел: ");
    console.log(evenNumbersArray);

    console.log("Сумма элементов массива, четных чисел: ");
    console.log(evenNumbersSum);
})();

(function squaresEvenNumbers() {
    // noinspection ES6ConvertVarToLetConst
    var squaresEvenNumbersArray = [];

    // noinspection ES6ConvertVarToLetConst
    for (var i = 0; i < 100; ++i) {
        if ((i + 1) % 2 === 0) {
            squaresEvenNumbersArray.push((i + 1) * (i + 1));
        }
    }

    console.log("Массив квадратов четных чисел: ");
    console.log(squaresEvenNumbersArray);
})();