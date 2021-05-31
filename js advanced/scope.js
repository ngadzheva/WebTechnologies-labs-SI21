console.log(a);

var a = 6;

function print() {
    var b = 5;

    if (a === 6) {
        var c = 7;
        let g = 3;
        console.log(a);
        console.log(g);
    }

    console.log(b);
    console.log(c);
    // console.log(g); -> error
}

// console.log(b); -> error

print();

let d = 4;
const e = 3;

for (var i = 0; i < 5; ++i) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 5; ++i) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

const obj = {
    prop: 5
};

obj.prop = 6;
obj.prop2 = 7;

const array = [1, 2];
array.push(3);
array.pop();

const frozenObj = Object.freeze({
    prop: 1,
    complexProp: {
        prop: 2
    }
});

frozenObj.complexProp.prop = 3;