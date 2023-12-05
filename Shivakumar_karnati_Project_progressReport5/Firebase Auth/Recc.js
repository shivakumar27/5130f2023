// Example data for recommendations (replace this with your actual data)
const weeklyRecommendations = {
    Monday: ['Breakfast:Healthy Salad,Grilled Chicken,Quinoa Bowl','Lunch:Shrimp Tacos,Avocado Salsa,Black Beans','Dinner:Veggie Omelette,Whole Grain Toast,Fresh Fruit',],
    Tuesday: ['Breakfast:Mediterranean Wrap,Hummus,Whole Wheat Pita','Lunch:Vegetarian Stir-Fry,Brown Rice,Mixed Vegetables','Dinner:Oven-Baked Fish,Couscous,Roasted Vegetables',],
    Wednesday: ['Breakfast:Salmon,Sweet Potato,Steamed Broccoli','Lunch:Mediterranean Wrap,Hummus,Whole Wheat Pita','Dinner:Shrimp Tacos,Avocado Salsa,Black Beans',],
    Thursday: ['Breakfast:Mediterranean Wrap,Hummus,Whole Wheat Pita','Lunch:Healthy Salad,Grilled Chicken,Quinoa Bowl','Dinner:Vegetarian Stir-Fry,Brown Rice,Mixed Vegetables',],
    Friday: ['Breakfast:Shrimp Tacos,Avocado Salsa,Black Beans','Lunch:Veggie Omelette,Whole Grain Toast,Fresh Fruit','Dinner:Salmon,Lunch:Sweet Potato,Steamed Broccoli',],
    Saturday: ['Breakfast:Oven-Baked Fish,Couscous,Roasted Vegetables','Lunch:Salmon,Sweet Potato,Steamed Broccoli','Dinner:Mediterranean Wrap,Hummus,Whole Wheat Pita',],
    Sunday: ['Breakfast:Veggie Omelette,Whole Grain Toast,Fresh Fruit','Lunch:Oven-Baked Fish,Couscous,Roasted Vegetables','Dinner:Healthy Salad,Grilled Chicken,Quinoa Bowl',],
};

// Function to populate recommendations for a specific day
function populateRecommendations(day) {
    const recommendationsList = document.getElementById(`${day.toLowerCase()}-recommendations`);

    if (recommendationsList) {
        const recommendations = weeklyRecommendations[day];

        recommendations.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            recommendationsList.appendChild(listItem);
        });
    }
}

// Call the function for each day of the week
populateRecommendations('Monday');
populateRecommendations('Tuesday');
populateRecommendations('Wednesday');
populateRecommendations('Thursday');
populateRecommendations('Friday');
populateRecommendations('Saturday');
populateRecommendations('Sunday');
