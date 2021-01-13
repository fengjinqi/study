/* 原始数据类型
JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 BigInt。

本节主要介绍前五种原始数据类型在 TypeScript 中的应用。

 布尔值

布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：*/

let isDone: boolean = false;


// 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样。
// 注意：使用构造函数Boolean创建的对象返回的不是布尔值

let newBoolean: boolean = new Boolean(1);
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

//  数值
// 使用 number 定义数值类型：

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

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


let myName: string = '秦始皇';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
    I'll be ${myAge + 1} years old next month.`;

var myName = '秦始皇';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".I'll be " + (myAge + 1) + " years old next month.";


//  空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：

function x():void {
    alert("我是void")
}

//注意：用void声明变量几乎没有什么用，因为只能定义null/undefined

// Null 和 Undefined
//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：


let b: undefined = undefined;
let n: null = null;
//注意：其它number。string之类的可以接受null,undefined类型值，但是不能接受void类型的void只能接收null/undefined类型

//  不会报错
let num: number = undefined;
let num1: number = null;
//报错
let u: void;
let num2: number = u;


// 任意值
//TODO any代表任意值

let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

/***变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型，如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查**

## 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。*/


let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

//联合类型使用 | 分隔每个类型。

//这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。

//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法


function getString(something: string | number): string {
    return something.toString();
}

// 接口


interface Person{
    name:string,
    age:number
}
let tom: Person = {
    name: 'Tom',
    age: 25
}

/*上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致

定义的变量比接口少了一些属性是不允许的,多一些属性也是不允许的 **赋值的时候，变量的形状必须和接口的形状保持一致。**

 **可选属性**

当然有时我们希望不要完全匹配一个形状，那么可以用可选属性：*/

interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};

//**任意属性**

//有时候我们希望一个接口允许有任意的属性，可以使用如下方式：


interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male',
    age:1
};

/***此时定义的任意属性是any，那么可选属性写number没有问题，如果定义了string类型，那么确定属性和可选属性必须为它的类型的子集，否则报错**

一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型*/

interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

//**只读属性**

//有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
javascript
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

//**注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：**

//## 数组

//最简单的方法是使用「类型 + 方括号」来表示数组：

let num: number[] = [1, 1, 2, 3, 5];
let num1: string[] = ['1', '1', '2', '3', '5'];

//数组泛型


let fibonacci: Array<number> = [1, 1, 2, 3, 5];
let fibonacci1: Array<string> = ['1', '1', '2', '3', '5'];

//**接口属性声明数组**

interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

//一般any在数组中用的最多


let list: any[] = ['admin', 25, { website: 'http://www.fengjinqi.com' }];


//函数的类型


function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2);

// 注意:参数不能多给也不能少给
//
// 函数表达式



let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};


//可选参数

//前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？与接口中的可选属性类似，我们用 ? 表示可选的参数

function fun(firstName: string, lastName?: string):any {
    if (lastName){
        return firstName+lastName
    }
    return firstName;
}

//_需要注意的是可选参数必须放在最后_

//参数默认值

function buildName(firstName: string, lastName: string = 'Cat'):any {
    return firstName + ' ' + lastName;
}

**多个参数**

function buildName(firstName:any[], ...item:any[]):any {
    item.forEach(res=>{
        firstName.push(res)
    })

}

**重载**

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}


/*## 断言

语法：**值 as 类型**

## 引入文件
当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。*/

/*declare var 声明全局变量

declare function 声明全局方法

declare class 声明全局类

declare enum 声明全局枚举类型

declare namespace 声明（含有子属性的）全局对象

interface 和 type 声明全局类型

export 导出变量

export namespace 导出（含有子属性的）对象

export default ES6 默认导出

export = commonjs 导出模块

export as namespace UMD 库声明全局变量

declare global 扩展全局变量

declare module 扩展模块

 <reference /> 三斜线指令*/

//**全局声明变量**

declare var jQuery: (selector: string) => any;

jQuery('#foo');

//而当我们使用 const 定义时，表示此时的全局变量是一个常量，不允许再去修改它的值了

declare const jQuery: (selector: string) => any;

jQuery('#foo');
// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
jQuery = function(selector) {
    return document.querySelector(selector);
};

//需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现

// **declare function**

//declare function 用来定义全局函数的类型。jQuery 其实就是一个函数，所以也可以用 function 来定义：

declare function jQuery(selector: string): any;
//也可以支持重载
declare function jQuery(domReadyCallback: () => any): any;


/***declare class**

当全局变量是一个类的时候，我们用 declare class 来定义它的类型*/


declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
let cat = new Animal('Tom');

//同样的，declare class 语句也只能用来定义类型，不能用来定义具体的实现，比如定义 sayHi 方法的具体实现则会报错

/*declare enum

使用 declare enum 定义的枚举类型也称作外部枚举（Ambient Enums），举例如下*/


declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

//与其他全局变量的类型声明一致，declare enum 仅用来定义类型，而不是具体的值。

//declare namespace

//命名空间


declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}

jQuery.ajax('/api/xxx');
/*interface 和 type
除了全局变量之外，可能有一些类型我们也希望能暴露出来。在类型声明文件中，我们可以直接使用 interface 或 type 来声明一个全局的接口或类型*/


interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
}
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}
//这样的话，在其他文件中也可以使用这个接口或类型了：

let settings: AjaxSettings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/xxx', settings);


//混用 declare 和 export



declare const name: string;
declare function getName(): string;
declare class Animal {
    constructor(name: string);
    sayHi(): string;
}
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
interface Options {
    data: any;
}

export { name, getName, Animal, Directions, Options };



/* DOM 和 BOM 的内置对象

DOM 和 BOM 提供的内置对象有：

Document、HTMLElement、Event、NodeList 等。*/

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
    // Do something
});
