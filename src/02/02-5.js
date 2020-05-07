function add(first, second) {
  return first + second;
}
//typeof add === "function"
var add = function (first, second) {
  return first + second;
};
//typeof add === "function"
//화살표 함수 선언하는 법 function 키워드를 생략하고 인자블록[()]과 본문블록[{}] 사이에 =>를 표기
var add = (first, second) => {
  return first + second;
};

var add = (first, second) => first + second;
var addAndMultiple = (first, second) => ({
  add: first + second,
  multiply: first * second,
});

// 화살표 함수는 함수 표현식을 간결하게 해주며 이후에 배우게 될 커링과 같은 디자인 패턴에서 사용되는 함수를 반환할 때 "계단형 함수 선언" 과 같은 구조가
//만들어지지 않게 해준다는 장점이 있다
function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

var addNumber = (nun) => (value) => num + value;

//화살표함수는 콜백 함수의 this범위로 생기는 오류를 피하기 위해 bind() 함수를 사용하여 this 객체를 전달하는 과정 포함
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
    // 화살표 함수 사용시 bind 과정 생략해도 this 가 넘어감.
  }
}
