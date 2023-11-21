function calculateCalories() {
    // Get user input
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseInt(document.getElementById('age').value);
    var activity = document.getElementById('activity').value;

    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    var bmr;
    if (activity === 'sedentary') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (activity === 'lightlyActive') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5 + 300;
    } else if (activity === 'moderatelyActive') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5 + 600;
    } else if (activity === 'veryActive') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5 + 900;
    } else if (activity === 'extraActive') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5 + 1200;
    }

    // Calculate Total Daily Energy Expenditure (TDEE)
    var tdee = bmr;

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Your estimated daily calorie needs are " + tdee.toFixed(2) + " calories.";
}
