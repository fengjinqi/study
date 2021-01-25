# 类型别名

 类型别名用来给一个类型起个新名字。
 
 ```javascript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

# 字符串字面量类型

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

```javascript
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'
```

# 元组

```javascript
let tom: [string, number] = ['Tom', 25];
```
当赋值或访问一个已知索引的元素时，会得到正确的类型,也可以只赋值其中一项,但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。


# 枚举

枚举（Enum）类型用于取值被限定在一定范围内的场景

枚举使用 enum 关键字来定义

枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射

```javascript
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```
我们也可以给枚举项手动赋值：
```javascript
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```

# 类

类（Class）：定义了一件事物的抽象特点，包含它的属性和方法

对象（Object）：类的实例，通过 new 生成

面向对象（OOP）的三大特性：封装、继承、多态

封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据

继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性

多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat

存取器（getter & setter）：用以改变属性的读取和赋值行为

修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法

抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现

接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

**ES6中类用法**
使用 ```js class ``` 定义类，使用 ```js constructor ``` 定义构造函数。
t
通过 ```js new``` 来生成实列对象

```javascript
class Animal {
    public name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal('秦始皇');
console.log(a.sayHi()); // My name is 秦始皇
```

**类的继承**
使用 ```js extends ``` 关键字实现继承，子类中使用 ```js super``` 关键字来调用父类的构造函数和方法

```javascript
class Cat extends Animal {
  constructor(name) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom

```
**存取器 getter setter**
使用 getter 和 setter 可以改变属性的赋值和读取行为

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return 'Jack';
  }
  set name(value) {
    console.log('setter: ' + value);
  }
}

let a = new Animal('Kitty'); // setter: Kitty
a.name = 'Tom'; // setter: Tom
console.log(a.name); // Jack
```

**静态方法 static**

使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用

```javascript
class Animal {
  static isAnimal(a) {
    return a instanceof Animal;
  }
}

let a = new Animal('Jack');
Animal.isAnimal(a); // true
a.isAnimal(a); // TypeError: a.isAnimal is not a function
```

**静态属性 static**

```javascript
class Animal {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal.num); // 42
```

## TypeScript 中类的用法

public private 和 protected

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected

public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的

private 修饰的属性或方法是私有的，不能在声明它的类的外部访问

protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的


很多时候，我们希望有的属性只能在本类中使用,并且也不允许子类使用,这时候就可以用 private 了
```javascript
class Animal {
    private name;
    public constructor(name) {
        this.name = name;
    }
}

let a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
console.log(a)

// index.ts(9,13): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
// index.ts(10,1): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
```

我们希望有的属性只能在本类中使用,也允许子类使用,不允许外部使用,这时候就可以用 protected 了

```javascript
class Animal {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}
```

**参数属性**

修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。
```javascript
class Animal {
  // public name: string;
  public constructor(public name) {
    // this.name = name;
  }
}

```

**readonly**
只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。

```javascript
class Animal {
  readonly name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); 
a.name = 'Tom';

// index.ts(10,3): TS2540: Cannot assign to 'name' because it is a read-only property.
```

注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面。

```javascript
class Animal {
  // public readonly name;
  public constructor(public readonly name) {
    // this.name = name;
  }
}
```
**抽象类**
abstract 用于定义抽象类和其中的抽象方法。

首先，抽象类是不允许被实例化的，只能被子类继承，其次，抽象类中的抽象方法必须被子类实现
```javascript
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}

let cat = new Cat('Tom');
```

# 类与接口

实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。

```javascript
interface Alarm {
    alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
```
一个类可以实现多个接口

```javascript
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```
**接口继承接口**
接口与接口之间可以是继承关系

```javascript
interface Alarm {
    alert(): void;
}

interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
```
**接口继承类**
常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的

```javascript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```

# 泛型
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```javascript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```
**多个类型参数**
定义泛型的时候，可以一次定义多个类型参数
```javascript
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
```

**泛型约束**

```javascript
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });
```
**泛型接口**

```javascript
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```
**泛型类**

```javascript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```
**泛型参数的默认类型**
```javascript
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

```
# 声明合并
**函数的合并**
我们可以使用重载定义多个函数类型
```javascript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
**接口的合并**
接口中的属性在合并时会简单的合并到一个接口中

```javascript
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}
```
相当于
```javascript
interface Alarm {
    price: number;
    weight: number;
}
```
注意，合并的属性的类型必须是唯一的

```javascript
interface Alarm {
    price: number;
}
interface Alarm {
    price: number;  // 虽然重复了，但是类型都是 `number`，所以不会报错
    weight: number;
}
```
接口中方法的合并，与函数的合并一样
```javascript
interface Alarm {
    price: number;
    alert(s: string): string;
}
interface Alarm {
    weight: number;
    alert(s: string, n: number): string;
}
```
相当于
```javascript
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}
```
