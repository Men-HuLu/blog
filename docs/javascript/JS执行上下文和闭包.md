---
title: 6.JS执行上下文和闭包
data: 2019-5-18
tags: JS
categories: JS基本语法
---
#### 闭包的组成:
- 环境部分 环境：函数的词法环境（执行上下文的一部分）
- 标识符列表：函数中用到的未声明的变量
- 表达式部分：函数体

**版本升级历程**
执行上下文在 ES3 中，包含三个部分。
- scope：作用域，也常常被叫做作用域链。
- variable object：变量对象，用于存储变量的对象。
- this value：this 值。

**在 ES5 中**
- lexical environment：词法环境，当获取变量。
- variable environment：变量环境，当声声明变量时使用。
- this value：this 值。

**在 ES2018 中**
- lexical environment：词法环境，当获取变量或者 this 值时使用。 
- variable environment：变量环境，当声明变量时使用
- codeevaluation state：用于恢复代码执行位置。
- Function：执行的任务是函数时使用，表示正在被执行的函数。 
- ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码。
- Realm：使用的基础库和内置对象实例。
- Generator：仅生成器上下文有这个属性，表示当前生成器。

有点迷，实际还是基于es3的理解就行


#### 调用函数分两个步骤：
1. 创建阶段
1. 代码执行阶段
经历过程如图：
![image](https://s2.ax1x.com/2019/05/17/ELLLY8.jpg)

#### this
**this的指向，是在函数被调用的时候确定的。也就是执行上下文被创建时确定的**

在一个函数上下文中，this由调用者提供，由调用函数的方式来决定。如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。如果函数独立调用，那么该函数内部的this，则指向undefined。但是在非严格模式中，当this指向undefined时，它会被自动指向全局对象。

#### 闭包
函数返回函数
```
//不是纯函数，不会释放
var fn = null;
function foo() {
    var a = 2;
    function innnerFoo() {
        console.log(a);
    }
    fn = innnerFoo; // 将 innnerFoo的引用，赋值给全局变量中的fn
}

function bar() {
    fn(); // 此处的保留的innerFoo的引用
}

foo();
bar(); // 2

//推荐
var fn = null;
function foo() {
    var a = 2;
    function innnerFoo() {
        console.log(a);
    }
    return innnerFoo
}

function bar() {
    fn(); // 此处的保留的innerFoo的引用
}
fn=foo();
bar(); // 2
```

函数声明立即执行
```
上一行代码不写分号，js会以为（）是函数的调用

//不推荐写法
;(function(){
    var a;
    //code
}())


;(function(){
    var a;
    //code
})()

//推荐写法
void function(){
    var a;
    //code
}();

```
这里推荐可以看
 [js执行机制 https://www.jianshu.com/p/cd3fee40ef59](https://www.jianshu.com/p/cd3fee40ef59)
