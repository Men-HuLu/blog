(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{194:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"文档crud"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档crud"}},[s._v("#")]),s._v(" 文档crud")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("RESTful")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("index")]),s._v(" "),e("td",[s._v("POST index/_doc/id")]),s._v(" "),e("td",[s._v("创建文档")])]),s._v(" "),e("tr",[e("td",[s._v("create")]),s._v(" "),e("td",[s._v("PUT index/_create/id")]),s._v(" "),e("td",[s._v("创建文档")])]),s._v(" "),e("tr",[e("td",[s._v("read")]),s._v(" "),e("td",[s._v("Get index/_doc/id")]),s._v(" "),e("td",[s._v("查询文档")])]),s._v(" "),e("tr",[e("td",[s._v("update")]),s._v(" "),e("td",[s._v("POST index/_update/id")]),s._v(" "),e("td",[s._v("修改文档")])]),s._v(" "),e("tr",[e("td",[s._v("delete")]),s._v(" "),e("td",[s._v("DELETE index/_doc/id")]),s._v(" "),e("td",[s._v("删除文档")])])])]),s._v(" "),e("h3",{attrs:{id:"index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[s._v("#")]),s._v(" Index")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('现有id便修改_version+1,没有id这新增,删除再写入\nPOST user/_doc/1\n{\n  "user":"Jack1",\n  "post_date":"2019-04-15",\n  "message":"try out Elastic"\n}\n\nPUT user/_doc/1\n{\n  "user":"Jack1",\n  "post_date":"2019-04-15",\n  "message":"try out Elastic"\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"create"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[s._v("#")]),s._v(" Create")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('现有id报错\nPOST user/_doc/1?op_type=create\n{\n  "user":"Jack1",\n  "post_date":"2019-04-15",\n  "message":"try out Elastic"\n}\n\nPUT user/_doc/1?op_type=create\n{\n  "user":"Jack1",\n  "post_date":"2019-04-15",\n  "message":"try out Elastic"\n}\n\nPOST user/_create\n{\n  "user":"Jack1",\n  "post_date":"2019-04-15",\n  "message":"try out Elastic"\n}\n\nPUT user/_create\n{\n  "user":"Jack1",\n  "post_date":"2019-04-15",\n  "message":"try out Elastic"\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("h3",{attrs:{id:"read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[s._v("#")]),s._v(" Read")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("GET user/_doc/id \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[s._v("#")]),s._v(" UPDATE")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('POST user/_update/1\n{\n  "doc": {\n    "user":"Jack1",\n    "post_date":"2019-04-15",\n    "message":"try out Elastic"\n  } \n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[s._v("#")]),s._v(" DELETE")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("DELETE user/_doc/1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"bulk-api-——批量操作api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bulk-api-——批量操作api"}},[s._v("#")]),s._v(" Bulk API ——批量操作API")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('POST _bulk\n{"index":{ "_index":"test","_id":"1"}}\n{"field1":"values"}\n{"delete":{ "_index":"test","_id":"2"}}\n{"create":{ "_index":"test2","_id":"3"}}\n{"field1":"values"}\n{"update":{ "_index":"test2","_id":"3"}}\n{"doc":{"field1":"values"}}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"mget-api-——批量读取api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mget-api-——批量读取api"}},[s._v("#")]),s._v(" mget API ——批量读取API")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('GET _mget\n{\n  "docs":[\n    {\n      "_index":"test",\n      "_id":"1"\n    },\n    {\n      "_index":"test",\n      "_id":"2"\n    }\n    ]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"msearch-api-——批量查询api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msearch-api-——批量查询api"}},[s._v("#")]),s._v(" msearch API ——批量查询API")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('POST test/_msearch\n{}\n{"query":{"match_all":{},"from":0,"size":10}}\n{"index":"test"}\n{"query":{"match_all":{},"from":0,"size":10}}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);