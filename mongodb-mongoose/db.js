const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        .then(console.log('Successfully connected to MongoDB Atlas'))
        .catch(error => console.log(error.message));

module.exports = mongoose;