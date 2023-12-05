function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmiValueElement = document.getElementById('bmiValue');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        bmiValueElement.innerText = 'Invalid input';
        document.getElementById('bmiCategory').innerText = '-';
        clearLinks();
    } else {
        var bmi = weight / ((height / 100) ** 2);
        bmiValueElement.innerText = bmi.toFixed(2);

        var category = getBMICategory(bmi);
        document.getElementById('bmiCategory').innerText = 'Category: ' + category;

        // Check BMI category and add click event listener with appropriate redirection
        setRedirect(category.toLowerCase());
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
function setRedirect(category) {
    var bmiValueElement = document.getElementById('bmiValue');
    bmiValueElement.style.cursor = 'pointer';
    bmiValueElement.title = 'Click to view more information';

    bmiValueElement.addEventListener('click', function () {
        redirectBasedOnCategory(category);
    });
}

function redirectBasedOnCategory(category) {
    clearLinks(); // Clear previous links

    switch (category) {
        case 'underweight':
            createLink('Click here to visit recommendations', 'recc.html');
            break;
        case 'normal weight':
            createLink('Click here to visit recommendations', 'recc.html');
            break;
        case 'overweight':
            createLink('Click here to visit recommendations', 'recc.html');
            break;
        case 'obese':
            createLink('Click here to visit recommendations', 'recc.html');
            break;
        default:
            // No redirection for other cases
            break;
    }
}

function createLink(text, href) {
    var linkContainer = document.getElementById('linkContainer');
    var linkElement = document.createElement('a');
    linkElement.href = href;
    linkElement.textContent = text;
    linkElement.target = '_blank'; // Open link in a new tab
    linkContainer.appendChild(linkElement);
    linkContainer.appendChild(document.createElement('br'));  // Add a line break for each link
}

function clearLinks() {
    var linkContainer = document.getElementById('linkContainer');
    linkContainer.innerHTML = '';  // Clear previous links
}
