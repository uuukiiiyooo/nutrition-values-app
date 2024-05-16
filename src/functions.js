//functions.js

import foodDatabase from "./foodDatabase.js";

// Get a reference to the food group select element
const foodGroupSelect = document.getElementById('food-group');

// Array of food groups (replace with your actual data)
const foodGroups = ['Fruits', 'Vegetables', 'Grains', 'Protein', 'Dairy'];

// Function to populate the food group dropdown menu
function populateFoodGroups() {
    foodGroups.forEach(group => {
        const option = document.createElement('option');
        option.textContent = group;
        option.value = group.toLowerCase(); // Set the value to lowercase for consistency
        foodGroupSelect.appendChild(option);
    });
}

// Call the function to populate the food group dropdown menu
populateFoodGroups();



// Get references to the food name select element and portion size input
const foodNameSelect = document.getElementById('food-name');
const portionSizeInput = document.getElementById('portion-size');


// Function to populate the food name dropdown menu based on the selected food group
function populateFoodNames(selectedGroup) {
    // Clear previous options
    foodNameSelect.innerHTML = '';

    // Get food names based on the selected food group from the foodDatabase
    const foods = foodDatabase[selectedGroup];

    // Create default option
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select food';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    foodNameSelect.appendChild(defaultOption);

    // Populate options
    for (const foodKey in foods) {
        if (foods.hasOwnProperty(foodKey)) {
            const food = foods[foodKey];
            const option = document.createElement('option');
            option.textContent = food.name; // Use the name property of the food object
            option.value = foodKey; // Use the food key as the value
            foodNameSelect.appendChild(option);
        }
    }
}


// Event listener for the food group select change
foodGroupSelect.addEventListener('change', function() {
    const selectedGroup = this.value;
    if (selectedGroup) {
        populateFoodNames(selectedGroup);
    } else {
        // Clear food name options if no group is selected
        foodNameSelect.innerHTML = '';
    }
});



// Get a reference to the add button
const addButton = document.getElementById('add-button');

// Event listener for the add button click
addButton.addEventListener('click', function() {
    // Get the selected food group, food name, and portion size
    const selectedGroup = foodGroupSelect.value;
    const selectedFood = foodNameSelect.value;
    const portionSize = portionSizeInput.value.trim();
    
    // Validate input
    if (selectedGroup && selectedFood && portionSize) {
        // Create a new list item element to display the selected item
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        // Add selected item details to the list item
        const selectedFoodDetails = foodDatabase[selectedGroup][selectedFood];
        listItem.innerHTML = `
            <div class="list-col">
                <div class="list-row">
                    <h4>${selectedFoodDetails.name}</h4>
                    <span>${portionSize} portion(s).</span>
                </div>
                <div class="list-row">
                    <span>Cholesterol: ${selectedFoodDetails.cholesterol * portionSize} mg</span>
                    <span>Vitamin A: ${selectedFoodDetails.vitaminA * portionSize} IU</span>
                    <span>Vitamin B: ${selectedFoodDetails.vitaminB * portionSize} mg</span>
                    <span>Folic Acid: ${selectedFoodDetails.folicAcid * portionSize} mcg</span>
                    <span>Calcium: ${selectedFoodDetails.calcium * portionSize} mg</span>
                    <span>Iron: ${selectedFoodDetails.iron * portionSize} mg</span>
                    <span>Sodium: ${selectedFoodDetails.sodium * portionSize} mg</span>
                </div>
            </div>
            <button class="remove-button">Remove</button>
        `;

        // Add the list item directly to the food list display
        const foodList = document.getElementById('food-list');
        foodList.appendChild(listItem);

        // Clear input fields
        foodGroupSelect.value = '';
        foodNameSelect.innerHTML = '<option value="" disabled selected hidden>Select food</option>';
        portionSizeInput.value = '';

        // Show the display section if it's hidden
        const displaySection = document.getElementById('display-section');
        const displayStyle = window.getComputedStyle(displaySection).getPropertyValue('display');
        if (displayStyle === 'none') {
            displaySection.style.display = 'block';
        }

        // Add event listener for the remove button
        const removeButton = listItem.querySelector('.remove-button');
        removeButton.addEventListener('click', function() {
            listItem.remove();
            itemCount--; // Decrement the item count when removing an item
        });
    } else {
        // Show an alert if any input field is empty
        alert('Please select a food group, food name, and enter portion size.');
    }
});

//Export any functions if needed
export { populateFoodNames };
