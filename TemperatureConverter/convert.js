document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.querySelector(".convert_button");
    var resetButton = document.querySelector(".reset_button");
    var inputTemperature = document.querySelector(".entry_field");
    var inKelvin = document.querySelector(".in_kelvin");
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