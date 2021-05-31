function Student(name, fn, age) {
    this.name = name;
    this.fn = fn;
    this.getAge = age;

    let _mark;

    this.setMark = function(mark) { _mark = mark; };
    this.getMark = function() { console.log(_mark); };

    this.info = function() {
        console.log(`${this.fn} ${this.name} ${this.getAge()}`);
    };
}

function Age(age) {
    this.age = age;

    this.getAge = function() {
        return this.age;
    };
}

const studentAge = new Age(22);
console.log(studentAge.age);
console.log(studentAge.getAge());

const ivan = new Student('Ivan', 66666, studentAge.getAge.bind(studentAge));
console.log(ivan.name);
console.log(ivan.fn);
console.log(ivan.getAge());
ivan.info();

Student.prototype.sayHi = function() {
    console.log(`Hello, ${this.name}`);
}

const pesho = new Student('Pesho', 66667, studentAge.getAge.bind(studentAge));
pesho.sayHi();

const maria = new Student('Maria', 66668, studentAge.getAge.bind(studentAge));
maria.sayHi();

ivan.sayHi();
ivan.setMark(5);
ivan.getMark();