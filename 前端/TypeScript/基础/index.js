"use strict";
/* 原始数据类型
JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 BigInt。

本节主要介绍前五种原始数据类型在 TypeScript 中的应用。

 布尔值

布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：*/
exports.__esModule = true;
exports.Directions = exports.Animal = exports.getName = exports.name = void 0;
var isDone = false;
// 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样。
// 注意：使用构造函数Boolean创建的对象返回的不是布尔值
var newBoolean = new Boolean(1);
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
//  数值
// 使用 number 定义数值类型：
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// 字符串
//使用string定义字符串类型
var myName = '秦始皇';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\n    I'll be " + (myAge + 1) + " years old next month.";
var myName = '秦始皇';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".I'll be " + (myAge + 1) + " years old next month.";
//  空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function x() {
    alert("我是void");
}
//注意：用void声明变量几乎没有什么用，因为只能定义null/undefined
// Null 和 Undefined
//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
var b = undefined;
var n = null;
//注意：其它number。string之类的可以接受null,undefined类型值，但是不能接受void类型的void只能接收null/undefined类型
//  不会报错
var num = undefined;
var num1 = null;
//报错
var u;
var num2 = u;
// 任意值
//TODO any代表任意值
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
/***变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型，如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查**

## 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。*/
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//联合类型使用 | 分隔每个类型。
//这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getString(something) {
    return something.toString();
}
var tom = {
    name: 'Tom',
    age: 25
};
var tom = {
    name: 'Tom'
};
var tom = {
    name: 'Tom',
    gender: 'male',
    age: 1
};
var tom = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
//**只读属性**
//有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
javascript;
var tom = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
//**注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：**
//## 数组
//最简单的方法是使用「类型 + 方括号」来表示数组：
var num = [1, 1, 2, 3, 5];
var num1 = ['1', '1', '2', '3', '5'];
//数组泛型
var fibonacci = [1, 1, 2, 3, 5];
var fibonacci1 = ['1', '1', '2', '3', '5'];
var fibonacci = [1, 1, 2, 3, 5];
//一般any在数组中用的最多
var list = ['admin', 25, { website: 'http://www.fengjinqi.com' }];
//函数的类型
function sum(x, y) {
    return x + y;
}
sum(1, 2);
// 注意:参数不能多给也不能少给
//
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
//可选参数
//前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？与接口中的可选属性类似，我们用 ? 表示可选的参数
function fun(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    return firstName;
}
//_需要注意的是可选参数必须放在最后_
//参数默认值
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
Math.pow(, Math.pow(多个参数, Math.pow(function buildName(firstName) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    item.forEach(function (res) {
        firstName.push(res);
    });
}, Math.pow(重载, ))));
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
jQuery('#foo');
jQuery('#foo');
// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
jQuery = function (selector) {
    return document.querySelector(selector);
};
var cat = new Animal('Tom');
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
jQuery.ajax('/api/xxx');
//这样的话，在其他文件中也可以使用这个接口或类型了：
var settings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/xxx', settings);
/* DOM 和 BOM 的内置对象

DOM 和 BOM 提供的内置对象有：

Document、HTMLElement、Event、NodeList 等。*/
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // Do something
});
