const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const Student = require('./models/student');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

port = 1234;

app.post('/create', function(req, res) {
   // Hint: Use Student Model to create new student object
   // ...
   // student.save()
});

app.get('/students', function(req, res) {
   // Hint: Student.find()

app.get('/student/:id/update', function(req, res) {
   // Hint: Student.findById()

});

app.post('/student/:id/update', function(req, res) {
   // Hint: Student.findByIdAndUpdate() 
    
});

app.get('/student/:id/delete', function(req, res) {
    // hint: Student.findById()
   
});

app.post('/student/:id/delete', function(req, res) {
    
    //Hint: Student.findByIdAndDelete()
       
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

