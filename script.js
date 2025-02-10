// THIS CODE FOR TEMPERATURE CONVERTER

function convertTemperature() {
    let value = parseFloat(document.getElementById("tempValue").value);
    let unit = document.getElementById("tempUnit").value;
    let temperatureresult = document.getElementById("temperatureresult");

    if (isNaN(value)) {
        temperatureresult.innerHTML = "Please enter a valid number.";
        return;
    }

    let convertedValue;
    let unitText = "";

    switch (unit) {
        case "fahrenheitToCelsius":
            convertedValue = (value - 32) * 5 / 9; // Formula: (°F - 32) × 5/9 = °C
            unitText = "Celsius";
            break;
        case "celsiusToFahrenheit":
            convertedValue = (value * 9 / 5) + 32; // Formula: (°C × 9/5) + 32 = °F
            unitText = "Fahrenheit";
            break;
        default:
            temperatureresult.innerHTML = "Invalid Conversion!";
            return;
    }

    temperatureresult.innerHTML = `Converted Value: ${convertedValue.toFixed(2)} ${unitText}`;

}

// THIS CODE FOR MASS CONVERTER

function convertMass() {
    let value = parseFloat(document.getElementById("massValue").value);
    let unit = document.getElementById("massUnit").value;
    let massresult = document.getElementById("massresult");

    if (isNaN(value)) {
        massresult.innerHTML = "Please enter a valid number.";
        return;
    }

    let convertedValue;
    let unitText = "";

    switch (unit) {
        case "ouncesToGrams":
            convertedValue = value * 28.3495; // 1 ounce = 28.3495 grams
            unitText = "Grams";
            break;
        case "poundsToKilograms":
            convertedValue = value * 0.453592; // 1 pound = 0.453592 kilograms
            unitText = "Kilograms";
            break;
        case "shortTonsToMetricTons":
            convertedValue = value * 0.907185; // 1 short ton = 0.907185 metric tons
            unitText = "Metric Tons";
            break;
        default:
            massresult.innerHTML = "Invalid Conversion!";
            return;
    }

    massresult.innerHTML = `Converted Value: ${convertedValue.toFixed(2)} ${unitText}`;

}

// THIS CODE FOR VOLUME CONVERTER

function convertVolume() {
    let value = parseFloat(document.getElementById("volumeValue").value);
    let unit = document.getElementById("volumeUnit").value;
    let volumeresult = document.getElementById("volumeresult");

    if (isNaN(value)) {
        volumeresult.innerHTML = "Please enter a valid number.";
        return;
    }

    let convertedValue;
    let unitText = "";

    switch (unit) {
        case "flOzToMl":
            convertedValue = value * 29.5735; // 1 fluid ounce = 29.5735 ml
            unitText = "Milliliters";
            break;
        case "gallonsToLiters":
            convertedValue = value * 3.78541; // 1 gallon = 3.78541 liters
            unitText = "Liters";
            break;
        case "cubicFeetToCubicMeters":
            convertedValue = value * 0.0283168; // 1 cubic foot = 0.0283168 cubic meters
            unitText = "Cubic Meters";
            break;
        case "cubicYardsToCubicMeters":
            convertedValue = value * 0.764555; // 1 cubic yard = 0.764555 cubic meters
            unitText = "Cubic Meters";
            break;
        default:
            volumeresult.innerHTML = "Invalid Conversion!";
            return;
    }

    // ✅ Corrected string interpolation with backticks
    volumeresult.innerHTML = `Converted Value: ${convertedValue.toFixed(2)} ${unitText}`;
}

// THIS CODE FOR AREA CONVERTER

function convertArea() {
    let value = parseFloat(document.getElementById("areaValue").value);
    let unit = document.getElementById("areaUnit").value;
    let areaResult = document.getElementById("areaResult");

    if (isNaN(value)) {
        areaResult.innerHTML = "Please enter a valid number.";
        return;
    }

    let convertedValue;
    let unitText = "";

    switch (unit) {
        case "sqInchToSqMm":
            convertedValue = value * 645.16; // 1 square inch = 645.16 square mm
            unitText = "Square Millimeters";
            break;
        case "sqFeetToSqMeters":
            convertedValue = value * 0.092903; // 1 square foot = 0.092903 square meters
            unitText = "Square Meters";
            break;
        case "sqYardsToSqMeters":
            convertedValue = value * 0.836127; // 1 square yard = 0.836127 square meters
            unitText = "Square Meters";
            break;
        default:
            areaResult.innerHTML = "Invalid Conversion!";
            return;
    }

    // ✅ Corrected string interpolation with backticks
    areaResult.innerHTML = `Converted Value: ${convertedValue.toFixed(2)} ${unitText}`;
}

// THIS CODE FOR LENGTH CONVERTER

function convertLength() {
    let value = parseFloat(document.getElementById("lengthValue").value);
    let from = document.getElementById("lengthFrom").value;
    let to = document.getElementById("lengthTo").value;
    let result = 0;

    // Check if value is a valid number
    if (isNaN(value)) {
        document.getElementById("lengthResult").innerText = "Please enter a valid number!";
        return;
    }

    const conversionFactors = {
        "inches-millimeters": 25.4,
        "inches-meters": 0.0254,
        "inches-kilometers": 0.0000254,
        "feet-millimeters": 304.8,
        "feet-meters": 0.3048,
        "feet-kilometers": 0.0003048,
        "yards-millimeters": 914.4,
        "yards-meters": 0.9144,
        "yards-kilometers": 0.0009144,
        "miles-millimeters": 1.609e+6,
        "miles-meters": 1609.34,
        "miles-kilometers": 1.60934
    };

    let key = `${from}-${to}`;
    
    if (from === to) {
        result = value;
        document.getElementById("lengthResult").innerText = `Converted Value: ${result} ${to}`;
        return;
    }

    if (conversionFactors[key]) {
        result = value * conversionFactors[key];
        document.getElementById("lengthResult").innerText = `Converted Value: ${result.toFixed(4)} ${to}`;
    } else {
        document.getElementById("lengthResult").innerText = "Invalid Conversion!";
    }
}