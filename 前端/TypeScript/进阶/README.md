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

#元组

```javascript
let tom: [string, number] = ['Tom', 25];
```
当赋值或访问一个已知索引的元素时，会得到正确的类型,也可以只赋值其中一项,但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。


#枚举

枚举（Enum）类型用于取值被限定在一定范围内的场景
