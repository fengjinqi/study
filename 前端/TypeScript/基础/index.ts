let isDone: boolean = false;

//let newBoolean: boolean = new Boolean(1);

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let myName: string = '秦始皇';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

function x():void {
    alert("我是void")
}


let b: undefined = undefined;
let n: null = null;

//  不会报错
let num: number = undefined;
let num1: number = null;
//报错
let u: void;
//let num2: number = u;

let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;


let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;

function getString(something: string | number): string {
    return something.toString();
}


/*interface Person{
    name:string,
    age:number
}
let tom: Person = {
    name: 'Tom',
    age: 25
}*/

interface Person {
    name: string;
    age?: string;
    [propName: string]: number;
}

let tom: Person = {
    name: 'Tom',
    age:'r',
    gender: 'male'
};
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

let  m:Array<string>=['3','4']

function fun(firstName: string, lastName?: string):any {
    if (lastName){
        return firstName+lastName
    }
    return firstName;
}

function buildName(firstName:any[], ...item:any[]):any {
    item.forEach(res=>{
        firstName.push(res)
    })
return firstName;
}
