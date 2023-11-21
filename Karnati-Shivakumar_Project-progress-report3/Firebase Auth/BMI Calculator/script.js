function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmiValue').innerText = 'Invalid input';
        document.getElementById('bmiCategory').innerText = '-';
    } else {
        var bmi = weight / ((height / 100) ** 2);
        document.getElementById('bmiValue').innerText = bmi.toFixed(2);

        var category = getBMICategory(bmi);
        document.getElementById('bmiCategory').innerText = 'Category: ' + category;
    }
}

function getBMICategory(bmiValue) {
    if (bmiValue < 18.5) {
        return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
        return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
