class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `${this.name} ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, fn) {
        super(name, age);

        this.fn = fn;

        let _mark;

        this.getMark = () => console.log(_mark);
        this.setMark = mark => _mark = mark;
    }

    studentInfo() {
        console.log(`${super.info()}, ${this.fn}`);
    }

    sayHi() {
        console.log(`Hello, ${this.name}`);
    }
}

const ivan = new Student('Ivan', 22, 66666);
const maria = new Person('Maria', 22);