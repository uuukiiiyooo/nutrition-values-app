// foodDatabase.js

// Object of food names categorized by food groups with nutritional information
const foodDatabase = {
    fruits: {
        apple: {
            name: 'Apple',
            portionSize: 100, // in grams
            cholesterol: 0,
            vitaminA: 54,
            vitaminB: 0.03,
            folicAcid: 0.00,
            calcium: 6,
            iron: 0.12,
            sodium: 1
        },
        banana: {
            name: 'Banana',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 64,
            vitaminB: 0.02,
            folicAcid: 0.00,
            calcium: 5,
            iron: 0.26,
            sodium: 1
        },
        orange: {
            name: 'Orange',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 225,
            vitaminB: 0.06,
            folicAcid: 0.00,
            calcium: 43,
            iron: 0.09,
            sodium: 0
        },
        grapes: {
            name: 'Grapes',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 66,
            vitaminB: 0.09,
            folicAcid: 0.00,
            calcium: 10,
            iron: 0.36,
            sodium: 2
        }
    },
    vegetables: {
        carrot: {
            name: 'Carrot',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 167,
            vitaminB: 0.02,
            folicAcid: 0.00,
            calcium: 3,
            iron: 0.24,
            sodium: 69
        },
        broccoli: {
            name: 'Broccoli',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 623,
            vitaminB: 0.11,
            folicAcid: 0.00,
            calcium: 47,
            iron: 0.73,
            sodium: 33
        },
        spinach: {
            name: 'Spinach',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 469,
            vitaminB: 0.18,
            folicAcid: 0.00,
            calcium: 99,
            iron: 2.71,
            sodium: 79
        },
        tomato: {
            name: 'Tomato',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 42,
            vitaminB: 0.03,
            folicAcid: 0.00,
            calcium: 5,
            iron: 0.27,
            sodium: 5
        }
    },
    grains: {
        rice: {
            name: 'Rice',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 0,
            vitaminB: 0.41,
            folicAcid: 0.00,
            calcium: 10,
            iron: 0.4,
            sodium: 1
        },
        quinoa: {
            name: 'Quinoa',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 0,
            vitaminB: 0.08,
            folicAcid: 0.00,
            calcium: 17,
            iron: 2.76,
            sodium: 5
        },
        oats: {
            name: 'Oats',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 0,
            vitaminB: 0.13,
            folicAcid: 0.00,
            calcium: 54,
            iron: 4.72,
            sodium: 2
        },
        barley: {
            name: 'Barley',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 0,
            vitaminB: 0.3,
            folicAcid: 0.00,
            calcium: 33,
            iron: 3.6,
            sodium: 7
        }
    },
    protein: {
        chicken: {
            name: 'Chicken',
            portionSize: 100,
            cholesterol: 85,
            vitaminA: 0,
            vitaminB: 0.35,
            folicAcid: 0.00,
            calcium: 11,
            iron: 0.7,
            sodium: 74
        },
        beef: {
            name: 'Beef',
            portionSize: 100,
            cholesterol: 86,
            vitaminA: 0,
            vitaminB: 2.2,
            folicAcid: 0.00,
            calcium: 3,
            iron: 2.4,
            sodium: 54
        },
        fish: {
            name: 'Fish',
            portionSize: 100,
            cholesterol: 59,
            vitaminA: 0,
            vitaminB: 1.2,
            folicAcid: 0.00,
            calcium: 12,
            iron: 0.9,
            sodium: 41
        },
        tofu: {
            name: 'Tofu',
            portionSize: 100,
            cholesterol: 0,
            vitaminA: 98,
            vitaminB: 0.55,
            folicAcid: 0.00,
            calcium: 350,
            iron: 5.4,
            sodium: 8
        }
    },
    dairy: {
        milk: {
            name: 'Milk',
            portionSize: 100,
            cholesterol: 4,
            vitaminA: 0,
            vitaminB: 0.1,
            folicAcid: 0.00,
            calcium: 123,
            iron: 0.03,
            sodium: 50
        },
        cheese: {
            name: 'Cheese',
            portionSize: 100,
            cholesterol: 95,
            vitaminA: 0,
            vitaminB: 0.76,
            folicAcid: 0.00,
            calcium: 721,
            iron: 0.65,
            sodium: 1746
        },
        yogurt: {
            name: 'Yogurt',
            portionSize: 100,
            cholesterol: 14,
            vitaminA: 31,
            vitaminB: 0.45,
            folicAcid: 0.00,
            calcium: 121,
            iron: 0.38,
            sodium: 61
        },
        butter: {
            name: 'Butter',
            portionSize: 100,
            cholesterol: 215,
            vitaminA: 2499,
            vitaminB: 0.01,
            folicAcid: 0.00,
            calcium: 24,
            iron: 0.02,
            sodium: 631
        }
    }
};

// Export the foodDatabase object
export default foodDatabase;
