require('./mongoose');
const { Food } = require('./foodModel');

const Foods = [
    {   name: "pizza",
        image: "https://foodish-api.com/images/pizza/pizza26.jpg"
    },
    {
        name: "butter-chicken",
        image: "https://foodish-api.com/images/butter-chicken/butter-chicken15.jpg"
    },
    {
        name: "burger",
        image: "https://foodish-api.com/images/burger/burger77.jpg"
    },
    {
        name: "dessert",
        image: "https://foodish-api.com/images/dessert/dessert14.jpg"
    },
    {   name: "pasta",
        image: "https://foodish-api.com/images/pasta/pasta10.jpg"
    }
]

Foods.forEach(async (food) => {
    await Food.create(food)
        .then(console.log(`Successfully added ${food.name}`))
        .catch(error => console.log(error.message));
})