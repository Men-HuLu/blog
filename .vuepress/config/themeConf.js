// const sidebar = require("./sidebar-auto.js");
https://github.com/Men-HuLu/blog/edit/master/docs/net/1.类的构造和特性.md
module.exports = {
  //搜索框
  searchMaxSuggestions: 10,

  //项目链接
  repo: 'Men-HuLu/blog',
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  repoLabel: '查看源码',

  // 以下为可选的编辑链接选项
  // 假如你的文档仓库和项目本身不在一个仓库：
  lastUpdated: '更新于',
  docsRepo: 'Men-HuLu/blog',
  // 假如文档放在一个特定的分支下：
  docsBranch: 'master',
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: "在 GitHub 上编辑此页",

  nav: [
    { text: '架构篇', link: '/docs/framework/架构是什么' },
    {
      text: 'Linux', items: [
        { text: 'Linux基础', link: '/docs/linux/1.linux入门及帮助' },
        { text: 'ELK日志分析系统', link: '/docs/elastic/1.Elasticsearch安装及使用' }
      ]
    },
    {
      text: 'C从入门到入土', items: [
        { text: 'c#语法', link: '/docs/net/类的构造和特性' },
        {
          text: 'asp.net core', items: [
            { text: 'EF创建', link: '/docs/efcore/创建EF步骤' }
          ]
        },
      ]
    },
    {
      text: '前端进阶', items: [
        { text: 'CSS样式', link: '/docs/css/css选择器和属性' },
        { text: 'ES6进阶', link: '/docs/javascript/ES6的基本类型' },
        {
          text: '开发利器', items: [
            {
              text: 'git', link: '/docs/tool/git使用教程'
            },
            {
              text: 'vscode', link: '/docs/tool/vscode快捷使用教程'
            },
            {
              text: 'npm', link: '/docs/tool/npm使用教程'
            }
          ]
        },
      ]
    },
    { text: '读书笔记', link: '/docs/notes/刻意练习' },
  ],
  displayAllHeaders: true,
  sidebar: {
    '/docs/gossip': [
      '/docs/gossip/追剧半泽直树',
      '/docs/gossip/2020年度总结',
      '/docs/gossip/产品手记课程学习',
    ],
    '/docs/net': [
      '/docs/net/类的构造和特性',
      '/docs/net/类型转换',
      '/docs/net/集合 泛型 迭代器原理',
      '/docs/net/正则表达式',
      '/docs/net/流文件和垃圾回收',
      '/docs/net/委托 事件 反射 枚举 扩展方法',
      '/docs/net/发布订阅模式（事件）',
      '/docs/net/抽象函和接口',
      '/docs/net/序列化与反序列化',
      '/docs/net/定制特性Attribute和句柄IntPtr',
      '/docs/net/Linq入门详解',
      '/docs/net/线程、异步、进程',
      '/docs/net/socket原理',
      '/docs/net/单利模式'
    ],
    '/docs/efcore': [
      '/docs/efcore/创建EF步骤',
      '/docs/efcore/冷门EF语句'
    ],
    '/docs/github': [
      '/docs/github/git目录解析',
      '/docs/github/git存储结构',
      '/docs/github/help操作',
      '/docs/github/config配置命令',
      '/docs/github/init新建和clone克隆仓库',
      '/docs/github/basic增删修查操作',
      '/docs/github/commit操作rebase操作',
      '/docs/github/branch分支操作',
      '/docs/github/log和gitk操作',
      '/docs/github/tag标签',
      '/docs/github/diff差异和show查看文件',
      '/docs/github/checkout和reset文件恢复',
      '/docs/github/stash紧急任务',
      '/docs/github/gitignore忽略跟踪文件',
      '/docs/github/常用传输协议和创建SSH公私钥',
      '/docs/github/local同步到GitHub'
    ],
    '/docs/css': [
      '/docs/css/css选择器和属性'
    ],
    '/docs/javascript': [
      '/docs/javascript/ES6的基本类型',
      '/docs/javascript/面对对象和基于对象',
      '/docs/javascript/基于对象深入——原型',
      '/docs/javascript/对象分类',
      '/docs/javascript/宏观任务与微观任务',
      '/docs/javascript/JS执行上下文和闭包'
    ],
    '/docs/tool': [
      '/docs/tool/git使用教程',
      '/docs/tool/npm使用教程',
      '/docs/tool/vscode快捷使用教程',
      '/docs/tool/eslint配置',
    ],
    '/docs/framework': [
      '/docs/framework/架构是什么',
      '/docs/framework/架构的历史及目的'
    ],
    '/docs/notes': [
      '/docs/notes/刻意练习',
      '/docs/notes/中的精神',
      '/docs/notes/小狗钱钱',
      '/docs/notes/事实',
    ],
    '/docs/linux': [
      '/docs/linux/1.linux入门及帮助',
      '/docs/linux/2.基础指令',
      '/docs/linux/3.vim基本操作',
      '/docs/linux/4.用户和用户管理',
      '/docs/linux/5.用户切换和配置文件',
      '/docs/linux/6.文件权限及修改',
      '/docs/linux/7.网络管理',
      '/docs/linux/8.软件安装',
    ],
    '/docs/elastic': [
      '/docs/elastic/1.Elasticsearch安装及使用',
      '/docs/elastic/2.Elasticsearch介绍',
      '/docs/elastic/3.文档crud和批量操作',
      '/docs/elastic/4.倒排索引及分词器',
      '/docs/elastic/5.SearchAPI',
      '/docs/elastic/6.索引的基础配置',
    ],
    '/docs/diary': [
      '/docs/diary/1'
    ],
  },
}