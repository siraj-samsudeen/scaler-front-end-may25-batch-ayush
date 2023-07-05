ES6 Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  printMsg() {
    console.log(`Hi I am ${this.name}`);
  }
}

const person = new Person("Virat");
console.log(person.printMsg());

console.log(typeof Person);

function Person2(name) {
  this.name = name;
}
Person2.prototype.printMsg2 = function () {
  console.log("heloo world");

};

const person2 = new Person2("Raj");

class Admin extends Person{
  constructor(name, role){
    super(name)
    this.role = role
  }
  printRole() {
    console.log(`Hi I am ${this.name} with role ${this.role}`)
  }
}

const admin = new Admin('Raj', 'Boss')
admin.printRole()

// HW try inheritance using the prototype

// Events
const btn = document.getElementById("btn");
// console.log(btn);
btn.addEventListener("click", function () {
  console.log("btn clicked");
});

// bubbling in / of events
const form = document.getElementById("form");
form.addEventListener("click", handleFormClick);

const formDiv = document.getElementById("formDiv");
formDiv.addEventListener("click", handleDivClick);

const formPara = document.getElementById("formPara");
formPara.addEventListener("click", handleParaClick);

function handleFormClick(event) {
  console.log("clicked on Form");
  console.log("target", event.target);
  console.log("current target", event.currentTarget);
  // console.log(event);
}
function handleDivClick(event) {
  console.log("clicked on Div");
  console.log("target", event.target);
  console.log("current target", event.currentTarget);
  event.stopPropagation();
  // console.log(event);
}
function handleParaClick(event) {
  console.log("clicked on Para");
  console.log("target", event.target);
  console.log("current target", event.currentTarget);
  // console.log(event);
}

/**
 * Question: create a button - button 1
 * onclick of the button , that particular button shld be removed
 * two new buttons to be added -> button 1 and button2
 *
 * 1. add event listener
 * 2. document.createElement('button)
 *
 * 3.appendChild()
 * 4. removeChild()
 *
 */

const btnHolder = document.getElementById("btnHolder");
btnHolder.addEventListener("click", function (event) {
  const btn1 = document.createElement("button");
  btn1.innerHTML = "New Button 1";

  const btn2 = document.createElement("button");
  btn2.innerHTML = "New Button 2";

  console.log("this = ", this);
  this.appendChild(btn1);
  this.appendChild(btn2);
  this.removeChild(event.target);
});

// Actors at play
/**
 * Branch Manager - JS Engine
 * Manager Cabin - Call Stack
 * Bank Visitors - scripts
 * Staff - Event Loop
 *
 */

function abc() {
  console.log("ONE");
  setTimeout(function () {
    console.log("TWO");
  }, 0);
  setTimeout(function () {
    console.log("THREE");
  }, 3000);
  console.log("FOUR");
}
abc();

/**
 *
 * Promises
 * producing code ( author) - takes time for execution / completion
 * consuming code ( blog readers)
 * Promises are spl JS object that links producing code and consumer code
 * promise can be in three states - pending, fulfilled, rejected
 */

const promise = new Promise(function (resolve, reject) {
  // executor / prodcer code
  // resolve - success
  // reject - failure / erro
  setTimeout(function () {
    // resolve("Sucess");
    reject("ERRRRR");
  }, 300);
});

promise.then(
  function (result) {
    console.log("This is a succes with message ", result);
    //
  },
  function (error) {
    console.log("Rejected with message ", error);
  }
);

const promiseObj = new Promise(function (resolve, reject) {
  // executor / prodcer code
  // resolve - success
  // reject - failure / erro
  setTimeout(function () {
    // resolve("Sucess");
    reject("ERRRRR");
  }, 300);
});

promiseObj
  .then(function (result) {
    // return a new promise
  })
  .then(function (data) {
    //....
  })
  .catch(function (err) {
    console.log(err);
  });

// async / await
