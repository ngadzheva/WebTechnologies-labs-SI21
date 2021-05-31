name = 'Super Global';
const pesho = { age: 22, name: 'Pesho' };
const gosho = { age: 21 };
const ivan = { age: 23, name: 'Ivan' };

const sayHi = function(a, b, c) {
    console.log(`Hi, I am ${this.name}`);
};

// sayHi();

pesho.sayHi = sayHi;
// pesho.sayHi();

// gosho.sayHi = sayHi;
// gosho.sayHi();

// gosho.sayHi.call(ivan, 5, 6, 2);
// sayHi.apply(pesho, [1, 2, 3]);

const student = { 
    name: 'Student',
    fn: 66666,
    info: function() { 
        console.log(`${this.fn}: ${this.name}`); 
    }
};

// student.info();

// const studentInfo = student.info;
// studentInfo();

const bindedInfo = student.info.bind(student);
bindedInfo();

const studentSayHi = pesho.sayHi.bind(student);
studentSayHi();