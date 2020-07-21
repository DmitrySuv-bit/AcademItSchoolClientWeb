document.addEventListener("DOMContentLoaded", function () {
    // noinspection ES6ConvertVarToLetConst
    var convertButton = document.querySelector(".convert_button");
    // noinspection ES6ConvertVarToLetConst
    var resetButton = document.querySelector(".reset_button");
    // noinspection ES6ConvertVarToLetConst
    var inputTemperature = document.querySelector(".entry_field");
    // noinspection ES6ConvertVarToLetConst
    var inKelvin = document.querySelector(".in_kelvin");
    // noinspection ES6ConvertVarToLetConst
    var inFahrenheit = document.querySelector(".in_fahrenheit");

    convertButton.addEventListener("click", function () {
        if (inputTemperature.value === "") {
            return alert("Enter value");
        }

        inKelvin.innerText = +inputTemperature.value + 273.15;
        inFahrenheit.innerText = +inputTemperature.value * 1.8 + 32;
    });

    resetButton.addEventListener("click", function () {
        inputTemperature.value = "";
        inKelvin.innerText = "";
        inFahrenheit.innerText = "";
    });
});