const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB)
        .then(console.log('Successfully connected to MongoDB Atlas'))
        .catch(error => console.log(`Cannot connect to MongoDB Atlas. The error is: \n ${error.message}`));

