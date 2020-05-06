var objectOne = { one: 1, two: 2, others: 0 };
var objectTwo = { three: 3, four: 4, others: -1 };
var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var ES6Combined = {
  ...objectOne,
  ...objectTwo,
};

var ES6Combined1 = {
  ...objectTwo,
  ...objectOne,
};
var combined1 = Object.assign({}, objectOne, objectTwo);
// combined1 = {one:1,two:2,three:3,four:4,others:-1}
var combined2 = Object.assign({}, objectTwo, objectOne);
// combined2 = {one:1,two:2,three:3,four:4,others:0}

var others = Object.assign({}, combined);
delete others.others;

var { others, ...ES6others } = ES6Combined;
//others: 같은 이름의 값 가져옴
//나머지는 ES6others
