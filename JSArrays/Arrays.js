(function () {
    var myArray = [1, 4, 10, -1, 2, -8, 5, 7, -45, -48, 321, 374, -1, 0];

    function getSortedDescendingArray(array) {
        return array.sort(function (number1, number2) {
            return number2 - number1;
        });
    }

    function getSubarrayToIndex(array, toIndex) {
        return array.slice(0, toIndex);
    }

    function getSubarrayFromIndex(array, fromIndex) {
        var subarray;

        if (array.length >= fromIndex) {
            subarray = array.slice(array.length - fromIndex);
        } else {
            subarray = array.slice(0);
        }

        return subarray;
    }

    function getEvenNumbersArray(array) {
        return array.filter(function (e) {
            return e % 2 === 0;
        });
    }

    function getSumArray(array) {
        return array.reduce(function (sum, number) {
            return sum + number;
        }, 0);
    }

    function getFillArray(initialNumber, finiteNumber, step) {
        var newArray = [];

        if (initialNumber === finiteNumber) {
            return newArray;
        } else if (initialNumber > finiteNumber) {
            while (initialNumber >= finiteNumber) {
                newArray.push(initialNumber);

                initialNumber -= step;
            }

            return newArray;
        } else {
            while (initialNumber <= finiteNumber) {
                newArray.push(initialNumber);

                initialNumber += step;
            }
        }

        return newArray;
    }

    function getSquaresArray(array) {
        return array.map(function (number) {
            return number * number;
        });
    }

    console.log("Сортировка по убыванию: ");
    console.log(getSortedDescendingArray(myArray));

    console.log("Подмассив из первых 5 элементов: ");
    console.log(getSubarrayToIndex(myArray, 5));

    console.log("Подмассив из последних 5 элементов: ");
    console.log(getSubarrayFromIndex(myArray, 5));

    console.log("Массив четных чисел: ");
    console.log(getEvenNumbersArray(myArray));

    console.log("Сумма элементов массива, четных чисел: ");
    console.log(getSumArray(getEvenNumbersArray(myArray)));

    console.log("Созданный массив чисел от 1 до 100: ");
    console.log(getFillArray(1, 100, 1));

    console.log("Массив квадратов четных чисел: ");
    console.log(getSquaresArray(getEvenNumbersArray(getFillArray(1, 100, 1))));
})();