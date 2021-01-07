var isDone = false;
var newBoolean = new Boolean(1);
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = '秦始皇';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
function x() {
    alert("我是void");
}
var b = undefined;
var n = null;
//  不会报错
var num = undefined;
var num1 = null;
//报错
var u;
var num2 = u;
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var myFavoriteNumber1;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
function getString(something) {
    return something.toString();
}
var tom = {
    name: 'Tom',
    age: 3,
    gender: 'male'
};
