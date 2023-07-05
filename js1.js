// JS1
// https://codesandbox.io/s/dreamy-robinson-8pemze

document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<br/>
// PROTOTYPES
// the first model or design of something from which other forms will be developed
`;

// different data types
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint
// 8. object

// Dynamic
let value = 123;
//..
//..
value = 'some text'; // variables are not bound to any data type

console.log(value);

// Number
let number1 = 12;
let number2 = 12.345;

console.log(number1, number2);

// Spl values
console.log(-11 / 0);
console.log('text' / 100);

console.log("Mr Ambani's net worth", 100_000_000_000 + 1000);
console.log("Mr Musk's net worth", 2e11 + 1000);
console.log('millionth of a second', 1e-6);

console.log(+'123$');

// string
const msg1 = 'Hello';
const msg2 = 'hii';
const activeUsers = 100;
const msg3 = `There are ${activeUsers} users online`;
console.log(msg3);

// var , let -> update values
// const -> value is fixed

// Boolean -> true and false
const result = 4 > 5;
console.log(result);

// Null and Undefined
let val = null;
var a;
console.log('a=', a);
a = 10;

// range of numbers - (-2^53 - 1) to (2^53 -1)
console.log(typeof 1n);

const value1 = 'hello';
console.log(typeof value1);

// Objects
// let user = {} // object literal syntax

//let user2 = new Object() // constructor function

let user = {
  name: ' Virat',
  age: 34,
};
console.log(user.name); // dot notation
delete user.age;
console.log(user);

const person = {
  name: 'MSD',
  'man of match': true,
};

console.log(person['man of match']); // square brackets notatoin

// Type Conversion / Type Coercions

console.log(2 + 2);
console.log(2 + '2'); // Implicit
console.log('6' / '3'); // Implicit
console.log(123 + 'scaler'); // Implicit

// Operators and functions automatically convert values
// to the required type - Implicit Conversion / Coercion

let str = '123';
console.log(Number(str)); // explicit

console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));

console.log(Boolean(100));
console.log(Boolean(0));
console.log(Boolean('0'));

console.log(2 == '2'); // loose equality operator
console.log(2 === '2'); // strict equality operator

// == does both comparison and type coercion if needed
// === does not trigger coercion and just checks for values

// Rules of Game // Implicit Conversion

// 3 kinds of conversions
//1. String
//2. Number
//3.  Boolean

// Rule 1when the string converson happens
// Binary + operator when any operand is string
console.log(123 + 'Scaler');

// Rule # 2 When Numeric conversion happens
// When using comparison operators ( < , > , <= , >= )
// When using arithmetic operators ( +, -, /, %, * )
// When using unary + operator
// Loose equality operator ( == , != )

console.log(+'123');
console.log(123 != '456');
console.log(4 > '5');
console.log(null / 5);

// Spl rules
// null equals only to null or undefined and does not equal to anything else
// NaN does not equal to anything even itself
console.log(null == 0);
console.log(null == undefined);
console.log(true + false);
console.log(12 / '6');
console.log('number' + 1 + 2);
console.log(Number('asd')); // spl - Infinity and NaN
console.log('foo' + +'bar');

console.log('true' == true);
console.log(null == '');
console.log('2' - '3');
console.log(1 + '-2');
console.log(Number('true'));
console.log(1 + true);

console.log(1 + null);
console.log(1 + undefined);
console.log('1' + null);
console.log(String(null));

var a = +'kbc';
console.log(a == a);

// Arrays
const arr = []; // new Array()
const arr2 = [
  1,
  2,
  'scaler',
  true,
  function () {
    console.log('');
  },
];
console.log(arr2);

var list = [1, 2, 3, 4];
// list.length = 0
// list = []
console.log(list);

// push , pop, concat
// ES6 - map, filter
