document.addEventListener("DOMContentLoaded", function () {
    // noinspection ES6ConvertVarToLetConst
    var convert_button = document.querySelector(".convert_button");
    // noinspection ES6ConvertVarToLetConst
    var reset_button = document.querySelector(".reset_button");
    // noinspection ES6ConvertVarToLetConst
    var inlet_temperature = document.querySelector(".entry_field");
    // noinspection ES6ConvertVarToLetConst
    var in_kelvin = document.querySelector(".under_container input[name=in_Kelvin]");
    // noinspection ES6ConvertVarToLetConst
    var in_Fahrenheit = document.querySelector(".under_container input[name=in_Fahrenheit]");

    convert_button.addEventListener("click", function () {
        if (inlet_temperature.value === "") {
            return alert("Enter value");
        }

        in_kelvin.value = +inlet_temperature.value + 273.15;
        in_Fahrenheit.value = +inlet_temperature.value * 1.8 + 32;
    });

    reset_button.addEventListener("click", function () {
        inlet_temperature.value = "";
        in_kelvin.value = "";
        in_Fahrenheit.value = "";
    });
});