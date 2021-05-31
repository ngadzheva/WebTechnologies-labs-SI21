function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.info = function() {
    return `${this.name} ${this.age}`;
}

function Student(name, age, fn) {
    Person.call(this, name, age); // Person.apply(this, [name, age]);

    this.fn = fn;

    let _mark;

    this.getMark = function() { 
        console.log(mark);
    }

    this.setMark = function(mark) {
        _mark = mark;
    }
}

Student.prototype.studentInfo = function() {
    console.log(`${this.info()}, ${this.fn}`);
}

// Student.prototype = Person.prototype;
Student.prototype = Object.create(Person.prototype);

Student.prototype.sayHi = function() {
    console.log(`Hello, ${this.name}`);
}

const ivan = new Student('Ivan', 22, 66666);
ivan.name;
ivan.age;
ivan.info();
ivan.fn;
// ivan.studentInfo();
ivan.sayHi();

const maria = new Person('Maria', 22);
// maria.sayHi(); -> error

const pesho = new Student('Pesho', 22, 66667);
pesho.info = function() {
    return this.name;
}

console.log(pesho.info());
console.log(ivan.info());