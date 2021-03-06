---
title: 1.ES6的基本类型
data: 2019-5-16
---

**ES有7种语言类型:**
1. Undefined
2. Null
3. String
4. Number
5. Boolean
6. Symbol（es6）
7. Object

**1-6为值类型,7为引用类型**

##### 1.undefined
##### 2.null
```
undefined是变量,不是关键字
let undefined=1
let a=undefined
let b=void 0    //通常用void 0代替undefined
console.log(a)  //输出1,

let null=1  //是不允许的，null是关键字
```

##### 3.String
```
String 有最大长度是 2^53 - 1
\uxxxx形式表示一个字符
let a="\u0061"  //16位,
console.log(a)  //输出a

JavaScript 字符串把每个 UTF16 单元当作一个字符来处理
```

##### 4.Number
1. NAN 非数值
2. -Infinity 负无穷大
3. Infinity 正无穷大
4. js中有+0和-0

Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff
```
//判断是+0还是-0
console.log(1/-0===-Infinity)
//浮点数判断
console.log( 0.1 + 0.2 == 0.3)                                  //false
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);      //true
```

##### 5.Boolean

##### 6.Symbol
```
//创建
var mySymbol = Symbol("my symbol");

//for的语法糖
var o = new Object

o[Symbol.iterator] = function () {
  var v = 0
  return {
    next: function () {
      return { value: v++, done: v > 10 }
    }
  }
};

for (var v of o)
{
      console.log(v); // 0 1 2 3 ... 9
}
```

###### 7.Object
1. Object 是 JavaScript 中最复杂的类型。
1. 对象的定义是“属性的集合”。属性分为数据属性和访问器属性，二者都是 key-value 结构，key 可以是字符串或者 Symbol 类型。
1. C++ 和 Java,每个类都是一个类型。JavaScript中的“类”仅仅是运行时对象的一个私有属性，而 JavaScript 中是无法自定义类型的。

```
let a=1                 //Number类型
let b=new Number(1)     //object类型
```

##### 8.类型转换
== 会跨类型转换,建议用===
![image](https://yuminjun-1257115713.cos.ap-shanghai.myqcloud.com/blog/js%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.jpg)
```
stringtoNumber
1.使用Number
let a=["30","0b111","0o13","0xff"]
for(let b of a)
{
    console.log(Number(b))
}
//结果30,7,11,255
也支持1e3，1e-2科学计数法

2.使用parseInt，只支持原字符和0x开头
let a=["30","0b111","0o13","0xff"]
for(let b of a)
{
    console.log(parseInt(b))
}
//结果30,0,0,255

3.只支持原字符
let a=["30","0b111","0o13","0xff"]
for(let b of a)
{
    console.log(parseFloat(b))
}
//结果30,0,0,0
```

##### 装箱转换
每一种基本类型 Number、String、BooleanSymbol 在对象中都有对应的类，所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。

```
Symbol无法new,但也可以转换为对象
1.call强制转换
var symbolObject = (function () { return this; }).call(Symbol("a"));
console.log(typeof symbolObject); //object
console.log(symbolObject instanceof Symbol); //true
console.log(symbolObject.constructor == Symbol); //true

2.Object转换
var symbolObject = Object(Symbol("a"));
console.log(typeof symbolObject); //object
console.log(symbolObject instanceof Symbol); //true
console.log(symbolObject.constructor == Symbol); //true

3.装箱对象皆有私有的 Class 属性,Object.prototype.toString 获取：
var symbolObject = Object(Symbol("a"));
console.log(Object.prototype.toString.call(symbolObject)); //[object Symbol]
可以使用typeof做对比
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(typeof null);//object
```


##### 拆箱转换

```
1.Number
var o = {
    valueOf : () => {console.log("valueOf"); return {}},
    toString : () => {console.log("toString"); return {}}
}

o * 2
// valueOf
// toString
// TypeError

2.String
var o = {
    valueOf : () => {console.log("valueOf"); return {}},
    toString : () => {console.log("toString"); return {}}
}

String(o)
// toString
// valueOf
// TypeError

3.es6之后
var o = {
    valueOf : () => {console.log("valueOf"); return {}},
    toString : () => {console.log("toString"); return {}}
}
o[Symbol.toPrimitive] = () => {console.log("toPrimitive"); return "hello"}

console.log(o + "")
// toPrimitive
// hello
```

##### 运行时类型
示例 | typeof | 运行时类型
---|---|---
null | object | Null
{} | object | Object
(function(){}) | function | Object
3 | number | Number
"ok" | string | String
true | boolean | Boolean
void 0 | undefined | Undefined
Symbol("a") | symbol | Symbol

object——Null 和 function——Object是特例