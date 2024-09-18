const mongoose = require('mongoose');
require('./mongoose');

const foodSchema = mongoose.Schema({
  
});

const Food = mongoose.model('Food', foodSchema);
module.exports = {Food};