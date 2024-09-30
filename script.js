// Initialize stats
let totalActivities = 0;
let totalCalories = 0;
let totalDistance = 0;

// Reference to DOM elements
const totalActivitiesEl = document.getElementById('total-activities');
const totalCaloriesEl = document.getElementById('total-calories');
const totalDistanceEl = document.getElementById('total-distance');
const workoutRecommendationEl = document.getElementById('workout-recommendation');

// Activity form submission handler
document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const activityType = document.getElementById('activity-type').value;
    const duration = parseInt(document.getElementById('duration').value);
    const distance = parseFloat(document.getElementById('distance').value);

    // Calculate calories burned (Simple estimation)
    let caloriesBurned = 0;
    if (activityType === 'run') {
        caloriesBurned = 10 * duration; // Running burns ~10 kcal per minute
    } else if (activityType === 'swim') {
        caloriesBurned = 8 * duration; // Swimming burns ~8 kcal per minute
    } else if (activityType === 'cycle') {
        caloriesBurned = 6 * duration; // Cycling burns ~6 kcal per minute
    }

    // Update stats
    totalActivities += 1;
    totalCalories += caloriesBurned;
    totalDistance += distance;

    // Update UI
    totalActivitiesEl.textContent = totalActivities;
    totalCaloriesEl.textContent = totalCalories.toFixed(2);
    totalDistanceEl.textContent = totalDistance.toFixed(2);

    // Provide workout recommendation based on activity
    recommendWorkout(activityType);
});

// Recommend workout based on the most frequent activity
function recommendWorkout(lastActivityType) {
    let recommendation = '';

    if (lastActivityType === 'run') {
        recommendation = "You seem to like running! We recommend a 5km run tomorrow.";
    } else if (lastActivityType === 'swim') {
        recommendation = "Swimming is great! Try a 30-minute swim session next.";
    } else if (lastActivityType === 'cycle') {
        recommendation = "Cycling is awesome! Aim for a 15km ride this weekend.";
    }

    workoutRecommendationEl.textContent = recommendation;
}
