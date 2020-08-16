document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.querySelector(".convert_button");
    var resetButton = document.querySelector(".reset_button");
    var inputTemperature = document.querySelector(".entry_field");
    var inKelvin = document.querySelector(".in_kelvin");
    var inFahrenheit = document.querySelector(".in_fahrenheit");

    convertButton.addEventListener("click", function () {
        if (inputTemperature.value === "") {
            alert("Enter value");
            return;
        }

        inKelvin.textContent = (+inputTemperature.value + 273.15).toFixed(2);
        inFahrenheit.textContent = (+inputTemperature.value * 1.8 + 32).toFixed(2);
    });

    resetButton.addEventListener("click", function () {
        inputTemperature.value = "";
        inKelvin.textContent = "";
        inFahrenheit.textContent = "";
    });
});