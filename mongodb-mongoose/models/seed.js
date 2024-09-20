const students = [
    {
        name: 'Peter Kreeft',
        gpa: 4,
        birthDate: new Date(2000,10,2),
        interests: ['Surfing', 'Bacon']
    },
    {
        name: 'Robert Barron',
        gpa: 3.5,
        birthDate: new Date(2000,5,5),
        interests: ['Golf', 'Tennis']
    },
    {
        name: 'John Brown',
        gpa: 3.0,
        birthDate: new Date(2002,8,2),
        interests: ['Tennis', 'Playing piano']
    },
    {
        name: 'James Watson',
        gpa: 2.8,
        birthDate: new Date(2001, 3, 14),
        interests: ['Soccer', 'Swimming']
    }
]

const Student  = require('./student');

Student.collection
        .drop()
        .then(() => {
            console.log('Current Student collections is removed!');
        
            Student.insertMany(students)
                .then(() => {
                    console.log('New students are saved!');
                })
                .catch(error => console.log(`Error in saving students: ${error.message}`));
        })
        .catch(error => console.log(`Error in dropping collection: ${error.message}`));
            