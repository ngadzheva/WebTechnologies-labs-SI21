var student = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 22,
    fn: 666666
};

console.log(student)
//  {firstName: "Ivan", lastName: "Ivanov", age: 22, fn: 666666}


student["age"]
// 22

student.firstName
// "Ivan"

var fn = 'fn'
student[fn]
// 666666

for(var key in student) {
    console.log(student[key]);
}
// Ivan
// Ivanov
// 22
// 666666

Object.keys(student).forEach(function(key) {
    console.log(student[key]);
})
// Ivan
// Ivanov
// 22
// 666666

Object.values(student).forEach(function(value) {
    console.log(value);
})
// Ivan
// Ivanov
// 22
// 666666

Object.entries(student)
Object.entries(student).forEach(function([key, value]) {
    console.log(key + ': ' + value)
})
// firstName: Ivan
// lastName: Ivanov
// age: 22
// fn: 666666

var students = {
    student1: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 22,
        fn: 66666
    },
    student2: {
        firstName: 'Dragan',
        lastName: 'Draganov',
        age: 21,
        fn: 66667
    }
}

var config = {
    connect: function() { console.log('Connecting...') }
}

config.connect();
// Connecting...

JSON.stringify(student)
var jsonStudent = `{
    "firstName": "Maria",
    "lastName": "Georgieva",
    "age": 23,
    "fn": 66668
}`;
JSON.parse(jsonStudent)