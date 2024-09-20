const { mongoose } = require('../db');

const studentSchema = new mongoose.Schema({
    // Define student schema using content in seed.js for reference
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;