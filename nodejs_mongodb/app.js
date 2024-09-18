const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8888;

// Routes
/**
 * Use the API https://foodish-api.com to get n random food images with n being a query from the URL
 * For example, accessing http://localhost:3000?n=10, user see 10 food images on the web page.
 * Use the axios package for sending HttpRequest to the food API 
 */
app.get('/', async (req, res) => {
    // Implement your work
    res.render('food');
});

app.get('/food/:name', async (req, res) => {
    // Implement your work
    res.render('food-detail')
});

app.listen(port, 'localhost', () => {
    console.log(`Server is listening on port ${port}`);
} )