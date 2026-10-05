document.getElementById('convert-btn').addEventListener('click', function() {
    const degrees = parseFloat(document.getElementById('degrees').value);
    const unit = document.getElementById('unit').value;
    const resultText = document.getElementById('result-text');

    if (isNaN(degrees)) {
        resultText.innerText = 'Please enter a valid number!';
        return;
    }

    let result = '';

    if (unit === 'celsius') {
        const fahrenheit = (degrees * 9/5) + 32;
        const kelvin = degrees + 273.15;
        result = `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    } else if (unit === 'fahrenheit') {
        const celsius = (degrees - 32) * 5/9;
        const kelvin = celsius + 273.15;
        result = `${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    } else if (unit === 'kelvin') {
        const celsius = degrees - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }

    resultText.innerText = result;
});
