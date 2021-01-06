# 安装 TypeScript

TypeScript 的命令行工具安装方法如下：

```javascript
npm install -g typescript
```
安装完成之后，我们就可以在任何地方执行 tsc 命令了。

**Hello TypeScript**

我们从一个简单的例子开始。

执行命令行创建hello.ts文件 touch hello.ts写入以下代码

```javascript
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```
然后执行 tsc hello.ts 命令，这时会生成一个编译好的js文件

```javascript
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
```
在 TypeScript 中，我们使用 : 指定变量的类型，: 的前后有没有空格都可以。

**注意：ts跟java区别：java写参数类型的时候是先写类型 不需要: 再写参数 ，ts是先写参数，有 : 再写类型**

上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。

这是因为 TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。

如果我们需要保证运行时的参数类型，还是得手动对类型进行判断，列如:

```javascript
function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user));
```
如果你传参类型错误，编辑器会提示，但是还是可以进行tsc编译成js文件的
```javascript
var array = [1, 2, 3,];
console.log(sayHello(array));
=============
Hello, 1,2,3
```
