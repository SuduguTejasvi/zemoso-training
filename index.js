//any type
var something = "Hello";
something = 42;
something = true;
//Array
var numbers = [1, 2, 3, 4];
var strings = ["a", "b", "c"];
//more generic way
// let numbers: Array<number> = [1, 2, 3, 4, 5];
// let strings: Array<string> = ["a", "b", "c"];
//Tuples
var person = [1, "Tejasvi"];
console.log(person);
//enums
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
var mysize = size.Small;
console.log(mysize);
//functions
function add(a, b) {
    if (a + b > 32)
        return 5;
    //if only mentioned if then else may return any null or undefined type so gives error
    else
        return 0;
}
console.log(add(10, 20));
//objects
var person1 = { name: 'Teju',
    age: 21,
};
console.log(person1.age);
//objects with methods
var person2 = { name: 'Teju', age: 21, sayHello: function () { console.log("hello,good morning!"); }
};
console.log(person2.sayHello());
var person3 = {
    name: 'Teju',
    age: 21,
    sayHello: function () {
        console.log("hello,good morning!");
    }
};
console.log(person3.sayHello());
//union
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
var textBox = {
    drag: function () {
        console.log("dragging");
    },
    resize: function () {
        console.log("resizing");
    }
};
var quality = 100;
var metrics = 'cm';
//optional parameters
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
