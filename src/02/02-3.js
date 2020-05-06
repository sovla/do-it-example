var array1 = ["one", "two"];
var array2 = ["three", "four"];

var combined = array1.concat(array2);
var combined1 = [].concat(array1, array2);
const ES6combined = [...array1, ...array2];

var first = array1[0];
var second = array1[1];
var three = array1[2] || "empty";

const [first1, second1, three1 = "empty", ...others] = array1;

function func() {
  var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
  console.log(args, "1");
  console.log(first, "2");
  console.log(others, "3");
}

function ES6func(...args) {
  var [fnfirst, ...fnothers] = args;
  console.log(args, "1");
  console.log(fnfirst, "2");
  console.log(...fnothers, "3");
}
