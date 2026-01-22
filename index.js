
const { showStudents, addStudent, removeStudent } = require('./src/students');


showStudents();
removeStudent('Alice');
showStudents();
removeStudent('Alice');
showStudents();
addStudent('Marc');
showStudents();
