(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{229:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h4",{attrs:{id:"查看远端库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看远端库"}},[s._v("#")]),s._v(" 查看远端库")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git remote -v\ngit remote show <主机名>        //详细信息\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"添加远端库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加远端库"}},[s._v("#")]),s._v(" 添加远端库")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git remote add 路径             //默认为origin\ngit remote add origin git@github.com:Men-HuLu/ReactApp.git\ngit remote add github 路径      //\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"删除远端库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除远端库"}},[s._v("#")]),s._v(" 删除远端库")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git remote rm github\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"重命名远端库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重命名远端库"}},[s._v("#")]),s._v(" 重命名远端库")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git remote rename <原主机名> <新主机名>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"拉去远端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拉去远端"}},[s._v("#")]),s._v(" 拉去远端")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.git pull origin\n等于\n1.git fetch origin 或 git fetch <远程主机名> <分支名>\n2.git merge master origin/master 或 git rebase origin/master\n\n1.fetch\ngit fetch origin master     //git fetch <远程主机名> <分支名>\ngit branch -r               //查看远端分支\ngit checkout -b newBrach origin/master  //创建newBrach分支基于origin/master\ngit merge master origin/master 或 git rebase origin/master\n\n2.pull\ngit pull origin next:master     //git pull <远程主机名> <远程分支名>:<本地分支名>\n//远程分支是与当前分支合并，则冒号后面的部分可以省略\n\nGit也允许手动建立追踪关系。\ngit branch --set-upstream master origin/next                //建立追踪关系。\ncheckout master             //切换到master\ngit pull origin             //当前分支与远程分支存在追踪关系，git pull就可以省略远程分支名。\n\n如果合并需要采用rebase模式，可以使用--rebase选项\ngit pull --rebase <远程主机名> <远程分支名>:<本地分支名>\n\n加上参数 -p 就会在本地删除远程已经删除的分支\n$ git pull -p\n# 等同于下面的命令\n$ git fetch --prune origin \n$ git fetch -p\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h4",{attrs:{id:"推送远端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#推送远端"}},[s._v("#")]),s._v(" 推送远端")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git push origin master      //git push <远程主机名> <本地分支名>:<远程分支名>\ngit push origin --all       //所有分支推送到远端\ngit push -u origin master   //使用-u选项指定一个默认主机，这样后面就可以不加任何参数使用git push\ngit push origin --tags      //git push不会推送标签（tag），除非使用--tags选项\n\ngit push origin :master             //删除远端分支\n$ git push origin --delete master   //删除远端分支\n\ngit push origin        //存在追踪关系,本地分支和远程分支省略。\n\n远程主机的版本比本地版本更新，推送时Git会报错,\n先在本地做git pull合并差异，然后再推送到远程主机\n如果你一定要推送，可以使用--force选项\n不建议\ngit push --force origin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h4",{attrs:{id:"本地分支关联远程分支-追踪关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地分支关联远程分支-追踪关系"}},[s._v("#")]),s._v(" 本地分支关联远程分支(追踪关系)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("存在关联时省略写分支名\ngit push origin 分支    //完整的git语句\ngit push origin         //存在关联，忽略分支名\ngit push                //默认origin可以不写\n\n查看\ngit branch -vv                                  //查看本地和线上分支关联\n\n都已存在，在关联\ngit branch -u origin/分支名                     //本地当前分支关联远端分支\ngit branch --set-upstream-to=origin/分支名      //本地当前分支关联远端分支\n远端存在\ngit checkout --track origin/branch_name         //本地没有，这时候本地会新建一个分支名叫branch_name，本地跟踪origin/branch_name\n本地存在\ngit push --set-upstream origin branch_name      //远端没有，这时候远端会新建一个分支名叫branch_name，本地跟踪origin/branch_name\n\ngit checkout -b new_branch_name branch_name     //branch_name如果是远端分支，可以取不一样的new_branch_name名称track跟踪远端分支\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);