// What is this ?

const obj = {
  name: 'ayush',
  msg: function () {
    console.log('Hello ' + this.name);
  },
};

obj.msg(); // method invocation

var value = 'Hii';
console.log(this == window);
console.log('value=', this.value);

function abc() {
  // "use strict";
  console.log('inside fn this = ', this);
}
abc();

// in case of browser global obj - windows obj

// call , apply, bind

const pikachu = {
  firstName: 'Pika',
  lastName: 'Chu',
  getPokeName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
const bulbaSaur = {
  firstName: 'Bulba',
  lastName: 'Saur',
  getPokeName: function () {
    return 'Awesome ' + this.firstName + '  ' + this.lastName;
  },
};

const pokemonName = function () {
  // this -> bulbasaur
  console.log('checking this ', this);
  console.log(this.getPokeName() + ' I Choose You');
};
// pokemonName();

// const callPika = pokemonName.bind(pikachu);
const callBulba = pokemonName.bind(bulbaSaur);

// callPika();
callBulba();

const pokemonHabits = function (food, hobby) {
  console.log(this.getPokeName() + ' loves ', food, 'and ', hobby);
};

pokemonHabits.call(pikachu, 'cakes', 'JS'); // Indirect invocation
pokemonHabits.apply(bulbaSaur, ['coke', 'Web Dev']);

const arr = [1, 2, 34];
// console.log(Math.max.apply(null, arr));
// console.log(Math.max.apply(null, ...arr));
console.log('test');
console.log(Math.max(arr));

// IIFE - immendiately invoked function expression
(function () {
  console.log('hii I am IIFe');
  var msg = 'Hello';
})();

(function () {
  console.log('Original salary was ' + salary);
  var salary = '50000Rs';
  console.log('My new salary is ' + salary);
})();

function abcd() {
  console.log(arguments);
}
abcd(1, 2, 'asd');

const arr1 = [1, 2, 3, 4];
const newArr = arr1.slice();
console.log(newArr);

const arr2 = [1, 2];
const arr3 = [3, 4];
const res = arr2.concat(arr3);
console.log(res);

// Question: Create a function log which can accept
//any number of parameters and concatenates
// ‘app’ and current date time to the params
// and returns a combined string

// log("hi","hello") -> 'app date value hi hello'

const tempArr = [1, 2, 3];
console.log(tempArr.join(''));

function newFn() {
  console.log(arguments);
}
newFn(1, 2);

function log() {
  let msg = [];
  msg.push('app');
  msg.push(new Date());
  const args = Array.prototype.slice.call(arguments);
  const output = msg.concat(args);
  console.log(output.join(' '));
}
log('Hi', 'Hello', 'Bye', 'Yello');

const obj2 = {
  name: 'Tarun',
};

const obj3 = {
  0: 'Tarun',
  length: 1,
};
console.log(Array.prototype.slice.call(obj3));

console.log(Array.prototype.slice.call(obj2));

function log2() {
  return `app ${new Date()} ${Array.prototype.slice.call(arguments).join(' ')}`;
}

console.log(log2('hello', 'world'));

function log3() {
  const arr1 = ['app', new Date().toLocaleString()];
  console.log(arr1.concat(Object.values(arguments)));
}
log3('hi', 'hello', 'bye');

//// CLosures

function sayHiHey(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + ' ' + lastName;
  }

  console.log('Hello, ' + getFullName());
  console.log('Hey, ' + getFullName());
}
sayHiHey('MS', 'D');

function makeCounter() {
  let count = 10;
  return function () {
    return count++;
  };
}

let counter = makeCounter();
console.log('counter value = ', counter);
let counter2 = makeCounter();
console.log(counter());
console.log(counter());
console.log('counter2', counter2());
console.log('counter2', counter2());
console.log(counter());
console.log(counter());
console.log('counter2', counter2());

var globalVar = 100;
function x(param) {
  var a = 1;
  function y() {
    debugger;
    var b = 10;
    console.log(b);
    console.log(a);
    console.log(param);
  }
  y();
}
x(20);
// i = 10;
// for (let i = 0; i < 10; i++) {

//   setTimeout(function () {
//     console.log("i=", i);
//   }, 300);
// }
// console.log("outside the loop", i);

for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log('i=', i);
    }, 300);
  })(i);
}

//
