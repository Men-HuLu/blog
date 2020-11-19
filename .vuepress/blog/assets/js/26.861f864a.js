(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{207:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h4",{attrs:{id:"_1-路径操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-路径操作"}},[s._v("#")]),s._v(" 1.路径操作")]),s._v(" "),n("h5",{attrs:{id:"pwd-显示当前目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pwd-显示当前目录"}},[s._v("#")]),s._v(" pwd 显示当前目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pwd\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h5",{attrs:{id:"cd-更改当前目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cd-更改当前目录"}},[s._v("#")]),s._v(" cd 更改当前目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd /\ncd ./\ncd ~\ncd —\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h5",{attrs:{id:"ls-查看当前目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ls-查看当前目录"}},[s._v("#")]),s._v(" ls 查看当前目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ls /root /\nls -l       //路径 不显示隐藏\nls -la      //路径 显示隐藏\nls -a       //隐藏文件\nls -r       //逆向显示\nls -t       //时间排序显示\nls -R       //递归显示\n\n蓝色是文件夹\n黑色是文件\n绿色是拥有其全部权限\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h4",{attrs:{id:"_2-文件操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件操作"}},[s._v("#")]),s._v(" 2.文件操作")]),s._v(" "),n("p",[s._v("创建")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir a         //创建\nmkdir a b c     //创建多个\nmkdir -p a/b    //文件夹中创建文件夹（多层）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("删除")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("rm  a.txt\nrm -r a         //删除文件及文件夹下文件\nrm -f wenjian   //强制删除，不提示\nrm -fr /wenjian  \nrm -rf /wen*    //删除复合规则文件\n\n*//多个字符\n?//单个字符\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("创建文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("touch a.text\ntouch a.text  b.text  c.text \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("复制")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("文件夹\ncp -r a /tmp\n文件(可改文件名)\ncp a.text  /home/yuminjun/b.text\ncp -p a.text  /home/yuminjun 保留用户权限时间等属性;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("move(移动，剪切)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mv   a.txt  /b.text\n\n重命名实际上也使用了 mv\nmv   /a.txt  /b.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h4",{attrs:{id:"_3-文本查看命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-文本查看命令"}},[s._v("#")]),s._v(" 3.文本查看命令")]),s._v(" "),n("ul",[n("li",[s._v("cat   //文本内容显示到终端")]),s._v(" "),n("li",[s._v("head  //查看文件开头")]),s._v(" "),n("li",[s._v("tail  //查看文件结尾")]),s._v(" "),n("li",[s._v("wc    //统计文件内容信息")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cat /a.txt\nhead -5 a.txt //开头5行\ntail -3 a.txt //结尾3行\ntail -f a.txt //跟踪功能\nwc a.txt    //文件有几行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"_4-打包和压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-打包和压缩"}},[s._v("#")]),s._v(" 4.打包和压缩")]),s._v(" "),n("p",[s._v("打包命令：tar\n压缩命令：gzip , bzip2")]),s._v(" "),n("p",[s._v("常用参数\nc\nx\nf")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("打包\ntar cf tmp/etc-ymj.tar ymj\n\n压缩\ngzip etc-ymj.tar\n//生成etc-ymj.tar.gz\n\n打包并压缩\ntar czf  tmp/etc-ymj.ta.gz ymj\ntar cjf  tmp/etc-ymj.tar.bz2 ymj\n\n解包\ntar xf ./etc-1.tar.gz -C /root\n\n解压解包\ntar zxf ./etc-1.tar.gz -C /root\ntar jxf ./etc-1.tar.bz2 -C /root\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);