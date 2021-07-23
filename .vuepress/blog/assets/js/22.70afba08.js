(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{203:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("ES有7种语言类型:")])]),s._v(" "),a("ol",[a("li",[s._v("Undefined")]),s._v(" "),a("li",[s._v("Null")]),s._v(" "),a("li",[s._v("String")]),s._v(" "),a("li",[s._v("Number")]),s._v(" "),a("li",[s._v("Boolean")]),s._v(" "),a("li",[s._v("Symbol（es6）")]),s._v(" "),a("li",[s._v("Object")])]),s._v(" "),a("p",[a("strong",[s._v("1-6为值类型,7为引用类型")])]),s._v(" "),a("h5",{attrs:{id:"_1-undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-undefined"}},[s._v("#")]),s._v(" 1.undefined")]),s._v(" "),a("h5",{attrs:{id:"_2-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-null"}},[s._v("#")]),s._v(" 2.null")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("undefined是变量,不是关键字\nlet undefined=1\nlet a=undefined\nlet b=void 0    //通常用void 0代替undefined\nconsole.log(a)  //输出1,\n\nlet null=1  //是不允许的，null是关键字\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h5",{attrs:{id:"_3-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-string"}},[s._v("#")]),s._v(" 3.String")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('String 有最大长度是 2^53 - 1\n\\uxxxx形式表示一个字符\nlet a="\\u0061"  //16位,\nconsole.log(a)  //输出a\n\nJavaScript 字符串把每个 UTF16 单元当作一个字符来处理\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"_4-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-number"}},[s._v("#")]),s._v(" 4.Number")]),s._v(" "),a("ol",[a("li",[s._v("NAN 非数值")]),s._v(" "),a("li",[s._v("-Infinity 负无穷大")]),s._v(" "),a("li",[s._v("Infinity 正无穷大")]),s._v(" "),a("li",[s._v("js中有+0和-0")])]),s._v(" "),a("p",[s._v("Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//判断是+0还是-0\nconsole.log(1/-0===-Infinity)\n//浮点数判断\nconsole.log( 0.1 + 0.2 == 0.3)                                  //false\nconsole.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);      //true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h5",{attrs:{id:"_5-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-boolean"}},[s._v("#")]),s._v(" 5.Boolean")]),s._v(" "),a("h5",{attrs:{id:"_6-symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-symbol"}},[s._v("#")]),s._v(" 6.Symbol")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//创建\nvar mySymbol = Symbol("my symbol");\n\n//for的语法糖\nvar o = new Object\n\no[Symbol.iterator] = function () {\n  var v = 0\n  return {\n    next: function () {\n      return { value: v++, done: v > 10 }\n    }\n  }\n};\n\nfor (var v of o)\n{\n      console.log(v); // 0 1 2 3 ... 9\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h6",{attrs:{id:"_7-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-object"}},[s._v("#")]),s._v(" 7.Object")]),s._v(" "),a("ol",[a("li",[s._v("Object 是 JavaScript 中最复杂的类型。")]),s._v(" "),a("li",[s._v("对象的定义是“属性的集合”。属性分为数据属性和访问器属性，二者都是 key-value 结构，key 可以是字符串或者 Symbol 类型。")]),s._v(" "),a("li",[s._v("C++ 和 Java,每个类都是一个类型。JavaScript中的“类”仅仅是运行时对象的一个私有属性，而 JavaScript 中是无法自定义类型的。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let a=1                 //Number类型\nlet b=new Number(1)     //object类型\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h5",{attrs:{id:"_8-类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-类型转换"}},[s._v("#")]),s._v(" 8.类型转换")]),s._v(" "),a("p",[s._v("== 会跨类型转换,建议用===\n"),a("img",{attrs:{src:"https://yuminjun-1257115713.cos.ap-shanghai.myqcloud.com/blog/js%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.jpg",alt:"image"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('stringtoNumber\n1.使用Number\nlet a=["30","0b111","0o13","0xff"]\nfor(let b of a)\n{\n    console.log(Number(b))\n}\n//结果30,7,11,255\n也支持1e3，1e-2科学计数法\n\n2.使用parseInt，只支持原字符和0x开头\nlet a=["30","0b111","0o13","0xff"]\nfor(let b of a)\n{\n    console.log(parseInt(b))\n}\n//结果30,0,0,255\n\n3.只支持原字符\nlet a=["30","0b111","0o13","0xff"]\nfor(let b of a)\n{\n    console.log(parseFloat(b))\n}\n//结果30,0,0,0\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h5",{attrs:{id:"装箱转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装箱转换"}},[s._v("#")]),s._v(" 装箱转换")]),s._v(" "),a("p",[s._v("每一种基本类型 Number、String、BooleanSymbol 在对象中都有对应的类，所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Symbol无法new,但也可以转换为对象\n1.call强制转换\nvar symbolObject = (function () { return this; }).call(Symbol("a"));\nconsole.log(typeof symbolObject); //object\nconsole.log(symbolObject instanceof Symbol); //true\nconsole.log(symbolObject.constructor == Symbol); //true\n\n2.Object转换\nvar symbolObject = Object(Symbol("a"));\nconsole.log(typeof symbolObject); //object\nconsole.log(symbolObject instanceof Symbol); //true\nconsole.log(symbolObject.constructor == Symbol); //true\n\n3.装箱对象皆有私有的 Class 属性,Object.prototype.toString 获取：\nvar symbolObject = Object(Symbol("a"));\nconsole.log(Object.prototype.toString.call(symbolObject)); //[object Symbol]\n可以使用typeof做对比\nconsole.log(Object.prototype.toString.call(null));//[object Null]\nconsole.log(typeof null);//object\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h5",{attrs:{id:"拆箱转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆箱转换"}},[s._v("#")]),s._v(" 拆箱转换")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1.Number\nvar o = {\n    valueOf : () => {console.log("valueOf"); return {}},\n    toString : () => {console.log("toString"); return {}}\n}\n\no * 2\n// valueOf\n// toString\n// TypeError\n\n2.String\nvar o = {\n    valueOf : () => {console.log("valueOf"); return {}},\n    toString : () => {console.log("toString"); return {}}\n}\n\nString(o)\n// toString\n// valueOf\n// TypeError\n\n3.es6之后\nvar o = {\n    valueOf : () => {console.log("valueOf"); return {}},\n    toString : () => {console.log("toString"); return {}}\n}\no[Symbol.toPrimitive] = () => {console.log("toPrimitive"); return "hello"}\n\nconsole.log(o + "")\n// toPrimitive\n// hello\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h5",{attrs:{id:"运行时类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行时类型"}},[s._v("#")]),s._v(" 运行时类型")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("示例")]),s._v(" "),a("th",[s._v("typeof")]),s._v(" "),a("th",[s._v("运行时类型")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("null")]),s._v(" "),a("td",[s._v("object")]),s._v(" "),a("td",[s._v("Null")])]),s._v(" "),a("tr",[a("td",[s._v("{}")]),s._v(" "),a("td",[s._v("object")]),s._v(" "),a("td",[s._v("Object")])]),s._v(" "),a("tr",[a("td",[s._v("(function(){})")]),s._v(" "),a("td",[s._v("function")]),s._v(" "),a("td",[s._v("Object")])]),s._v(" "),a("tr",[a("td",[s._v("3")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("Number")])]),s._v(" "),a("tr",[a("td",[s._v('"ok"')]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("String")])]),s._v(" "),a("tr",[a("td",[s._v("true")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("Boolean")])]),s._v(" "),a("tr",[a("td",[s._v("void 0")]),s._v(" "),a("td",[s._v("undefined")]),s._v(" "),a("td",[s._v("Undefined")])]),s._v(" "),a("tr",[a("td",[s._v('Symbol("a")')]),s._v(" "),a("td",[s._v("symbol")]),s._v(" "),a("td",[s._v("Symbol")])])])]),s._v(" "),a("p",[s._v("object——Null 和 function——Object是特例")])])}),[],!1,null,null,null);n.default=e.exports}}]);