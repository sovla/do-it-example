var string1 = "안녕하세요";
var string2 = "반갑습니다";
var greeting = string1 + " " + string2;
var ES6greeting = `${string1} ${string2}`;

var product = { name: "도서", price: "4200원" };
var message = "제품" + product.name + "의 가격은" + product.price;
var ES6message = `제품 ${product.name}의 가격은 ${product.price}`;

var multiLine = "문자열1\n문자열2";
var ES6multiLine = `문자열1
문자열2`;

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = "곱셈값은" + value1 * value2;
var ES6operator1 = `곱셈값은 ${value1 * value2}`;
var operator2 = "불리언값은" + (boolValue ? "참" : "거짓");
var ES6operator2 = `불리언값은 ${boolValue ? "참" : "거짓"}`;
