document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * Async and Await - neater syntax, more readable than Promises
 * with async being added in front of the fn
 */

async function print() {
  // returns a promise
  return 'Hello';
}

console.log(print());

// print().then(function (res) {
//   console.log("returned with msg", res);
// }).catch();

const promiseObj = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Message from the past');
    reject('Message from the past');
  }, 5000);
});

async function getMsg() {
  try {
    console.log('first statement');
    const msg = await promiseObj;
    console.log('called with a set time out ', msg);
    const res = await print();
    console.log('called with await ', res);
    console.log('reached end');
  } catch (err) {
    console.log('failure msg ', err);
  }
}
// getMsg();

/**
 * callback pattern
 */

function compute(a, b, operation) {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'sub') {
    return a - b;
  } else if (operation === 'div') {
    return a / b;
  } else {
    return a * b;
  }
}

console.log(compute(2, 3, 'add'));
console.log(compute(2, 3, 'sub'));

// callback functions
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//const mul = (x, y) => x * y;
function mul(x, y) {
  return x * y;
}
// mul(6,7)
const div = (x, y) => x / y;
const modulo = (x, y) => x % y;

// const print = () => console.log("")

function compute2(a, b, fn) {
  //..
  // if passing mul
  // return mul(a,b)
  return fn(a, b);
}

console.log(compute2(3, 5, mul));
console.log(compute2(3, 5, add));
console.log(compute2(3, 5, modulo));

function modifyArr(arr, callback) {
  arr.push(100);
  callback();
}

const arr = [95, 96, 97, 98, 99];
modifyArr(arr, function () {
  console.log('array has been modified ', arr);
});

/**
 * Chaining of functions
 */
const obj = {
  first: function () {
    console.log('first');
    // add something here
    return this;
  },
  second: function () {
    console.log('second');
    // add something here
    return obj;
  },
  third: function () {
    console.log('third');
    // add something here
    return 'yay';
  },
};

console.log(obj.first().second().third());

/**
 * Currying
 * translate a function from callable f(a,b,c) -> f(a)(b)(c)
 */

//  multiply(2,3) -> 6
// multiply(2)(3)

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(2)(3));

// redefine the fn multiply so that it works both ways
// multiply(2,3) -> 6 and multiply(2)(3) -> 6

function mul2() {
  if (arguments.length > 1) {
    console.log(arguments[0] * arguments[1]);
  } else {
    const a = arguments[0];
    return function () {
      console.log(a * arguments[0]);
    };
  }
}

mul2(5, 6);
mul2(6)(7);

/**
 * how would you use a closure to create a private counter
 * task : it will have a variable (_counter) which will not be
 * accessible outside the func
 * return two helper function - add and retrieve
 * expected: const ctr = counter()
 * ctr.add(5)
 * ctr.add(10)
 * ctr.retrieve()
 * ctr._counter not accessible
 */

function counter() {
  let _counter = 0;
  return {
    add: function (param) {
      _counter += param;
    },
    retrieve: function () {
      return _counter;
    },
  };
}
const ctr = counter();
ctr.add(5);
ctr.add(15);

console.log(ctr.retrieve());

/**TBD
  * 
  * function counter(){
let _counter = 0
return this
function add(a){
_counter+=a
}
function retrieve(){
return this._counter
}
}
const ctr = counter()
ctr.add(5)
ctr.add(10)
ctr.retrieve()
  */

/**Qustion */

var myObject = {
  foo: 'bar',
  func: function () {
    var self = this;
    console.log('outer func:  this.foo = ' + this.foo);
    console.log('outer func:  self.foo = ' + self.foo);
    // function inner() {
    //   console.log("iiner this",this) // this -> global or undefined if in strict mode
    //     console.log("inner func:  this.foo = " + this.foo);
    //     // console.log("inner func:  self.foo = " + self.foo);
    // };
    // inner.call(this) // normal function invocation
    const inner = () => {
      console.log('inner func:  this.foo = ' + this.foo);
    };
    inner();
  },
};
myObject.func(); // method invocation -> thiss = myObject

function abc() {
  console.log(this);
}
abc();
