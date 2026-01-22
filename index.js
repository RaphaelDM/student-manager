
const { showStudents, removeStudent, addStudent } = require('./src/students');


showStudents();
removeStudent('Alice');
showStudents();
addStudent('Marc');
showStudents();
