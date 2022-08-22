// # JS Closures / Scoping exercises

// 1. What’s the result of executing this code and why.

function test() {
  let a;
  console.log(a);
  console.log("Q2:", foo());

  a = 1;
  function foo() {
    return 2;
  }
}

test();
console.log(
  "-----------------------------------------------------------------"
);
// Answer Q1: 2, because it is being executed by the return in the function(foo), which is being logged in the parent function test().

// 2. What is result?

let a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(3);
console.log("Q3:", result);

console.log(
  "-----------------------------------------------------------------"
);

// 3. What is the result of the following code? Explain your answer.

let fullname = "John Doe";

const obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

const test1 = obj.prop.getFullname;

console.log(test1());

// Answer Q3: obj.prop.getFullname() when logged will return the prop: fullname: "Aurelio..." because the function getFullname is returning it.
// test1 will be logged as undefined because the parenthesis are missing from the getFullname function it is being assigned to.

// 4. What will you see in the console for the following example?

let c = 1;
function b() {
  c = 10;
  return;
  function a() {}
}
b();
console.log("Q4:", c);

// Answer Q4: 10
