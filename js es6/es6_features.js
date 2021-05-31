// Destructuring
const student = {
    name: 'Student Name',
    age: 22,
    fn: 888888
};

var name = student.name;
student['name']

const { fn, name, age } = student;
console.log(fn);
console.log(name);
console.log(age);

const { name: studentName, mark = 5 } = student;
console.log(studentName);

const numbers = [1, 2, 3];
const [ one, two, three ] = numbers;
const [ , , last ] = numbers;
var lastElement = numbers[2];

let swapA = 1;
let swapB = 2;

let temp = swapA;
swapA = swapB;
swapB = temp;

[ swapB, swapA ] = [ swapA, swapB ]; // swapA => 2 swapB => 1

let [ swapC, swapD ] = [ swapA, swapB ];

// Spread operator

const array = [1, 2, 3, 4];
console.log(array); // Array(4) [1, 2, 3, 4]
console.log(...array); // 1 2 3 4

function spread(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

spread(1, 2, 3);
spread(...array); // 1 2 3

const object1 = {
    a: 1,
    b: 2, 
    c: 3
};

const object2 = {
    c: 4
};

const mergedObject = {
    ...object1,
    ...object2
}; // { a: 1, b: 2, c: 4 }

const deleteObject = {
    toDeleteProp: 0,
    a: 1,
    b: 2,
    c: 3
};

const { toDeleteProp, ...others } = deleteObject;

const complexObject = {
    prop1: {
        a1: 10,
        b1: 2
    },
    prop2: {
        a2: 10,
        b2: 2
    },
    prop3: {
        prop: {
            a3: 10
        }
    }
};

const {
    prop1: { a1 },
    prop2: { a2 },
    prop3: { prop: { a3 } }
} = complexObject;
// complexObject.prop1.a1
console.log(a1, a2, a3); // 10 10 10
