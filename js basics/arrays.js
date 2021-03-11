var students = ['Ivan', 'Petkan', 'Maria'];
console.log(students);

students.pop();
students.push('Student');

students.shift();
students.unshift('Other Student');

console.log(students.slice(0, 1));
console.log(students);

students.splice(0, 2);
students.splice(1, 1, 'Dragan');
students.splice(2, 0, 'Petkan');

students.sort();

var SIStudents = students.map(function(student) {
    return student + ' studies Software Engineering';
});
s.reduce(function(acc, curr) {
    return acc += curr + ' ';
}, '');
s.filter(function(student, index) {
    return index % 2 == 0;
});
s.forEach(function(student, index) {
    console.log(index + ': ' + student);
});