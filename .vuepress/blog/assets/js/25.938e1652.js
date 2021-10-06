(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{207:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h5",{attrs:{id:"_1-javascript-的原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-javascript-的原型"}},[s._v("#")]),s._v(" 1.JavaScript 的原型")]),s._v(" "),a("ol",[a("li",[s._v("Object.create 根据指定的原型创建新对象，原型可以是 null；")]),s._v(" "),a("li",[s._v("Object.getPrototypeOf 获得一个对象的原型；")]),s._v(" "),a("li",[s._v("Object.setPrototypeOf 设置一个对象的原型。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//利用这三个方法，我们可以完全抛开类的思维，利用原型来实现抽象和复用\nvar cat = {\n    say(){\n        console.log("meow~");\n    },\n    jump(){\n        console.log("jump");\n    }\n}\n\nvar tiger = Object.create(cat,  {\n    say:{\n        writable:true,\n        configurable:true,\n        enumerable:true,\n        value:function(){\n            console.log("roar!");\n        }\n    }\n})\n\n\nvar anotherCat = Object.create(cat);\n\nanotherCat.say();\n\nvar anotherTiger = Object.create(tiger);\n\nanotherTiger.say();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h5",{attrs:{id:"_2-javascript-的类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-javascript-的类"}},[s._v("#")]),s._v(" 2.JavaScript 的类")]),s._v(" "),a("p",[s._v("在早期版本(ES3 和之前的版本)的JavaScript中，JS中类的概念是相当弱的，“类”的定义是一个私有属性 [[class]]，它仅仅是运行时的一个字符串属性,语言使用者唯一可以访问 [[class]] 属性的方式是Object.prototype.toString")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var o = new Object;\nvar n = new Number;\nvar s = new String;\nvar b = new Boolean;\nvar d = new Date;\nvar arg = function(){ return arguments }();\nvar r = new RegExp;\nvar f = new Function;\nvar arr = new Array;\nvar e = new Error;\nconsole.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v))); \n\n// ["[object Object]", "[object Number]", "[object String]", "[object Boolean]", "[object Date]", "[object Arguments]", "[object RegExp]", "[object Function]", …]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("在 ES5 开始，[[class]] 私有属性被 Symbol.toStringTag代替")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var o = { [Symbol.toStringTag]: "MyObject" }\nconsole.log(o + "");                            //[object MyObject]\nconsole.log(Object.prototype.toString.call(o))  //[object MyObject]\n\n//\nlet o = 1\nconsole.log(o.__proto__[Symbol.toStringTag])  //undifined,私有字段不能获取自能Object.prototype.toString\no.__proto__[Symbol.toStringTag]="unNumber"\nlet b=1\nconsole.log(Object.prototype.toString.call(o))  //[object unNumber] 把number的类的字段给改了\nconsole.log(Object.prototype.toString.call(b))  //[object unNumber]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h5",{attrs:{id:"new在js面向对象做了哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new在js面向对象做了哪些"}},[s._v("#")]),s._v(" new在js面向对象做了哪些")]),s._v(" "),a("ol",[a("li",[s._v("以构造器的 prototype 属性（注意与私有字段 [[prototype]] 的区分）为原型，创建新对象；")]),s._v(" "),a("li",[s._v("将this 和调用参数传给构造器，执行；")]),s._v(" "),a("li",[s._v("如果构造器返回的是对象，则返回，否则返回第一步创建的对象。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nfunction c1(){\n    this.p1 = 1;\n    this.p2 = function(){\n        console.log(this.p1);\n    }\n} \nvar o1 = new c1;\no1.p2();\n\n\n\nfunction c2(){\n}\nc2.prototype.p1 = 1;\nc2.prototype.p2 = function(){\n    console.log(this.p1);\n}\n\nvar o2 = new c2;\no2.p2();\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("//没有 Object.create、Object.setPrototypeOf 的早期版本中，new 运算是唯一一个可以指定 [[prototype]] 的方法")]),s._v(" "),a("h5",{attrs:{id:"es6中的class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6中的class"}},[s._v("#")]),s._v(" ES6中的class")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Animal { \n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    console.log(this.name + ' makes a noise.');\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name) {\n    super(name); // call the super class constructor and pass in the name parameter\n  }\n\n  speak() {\n    console.log(this.name + ' barks.');\n  }\n}\n\nlet d = new Dog('Mitzie');\nd.speak(); // Mitzie barks.\n//在新的 ES 版本中，我们不再需要模拟类了：我们有了光明正大的类，但实际还是原型结构\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);