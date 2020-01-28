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
    { text: 'C语言体系', link: '/docs/net/类的构造和特性' },
    { text: 'github理解', link: '/docs/github/git目录解析' },
    {
      text: '前端进阶', items: [
        { text: 'css样式', link: '/docs/css/css选择器和属性' },
        {
          text: '开发利器', items: [
            {
              text: 'vscode', link: '/docs/vscode/键盘快捷键'
            },
            {
              text: 'npm', link: '/docs/npm/npm配置本地环境'
            }
          ]
        },
      ]
    },
  ],
  displayAllHeaders: true,
  sidebar: {
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
      '/docs/github/checkout和reset文件恢复(慎用)',
      '/docs/github/stash紧急任务',
      '/docs/github/gitignore忽略跟踪文件',
      '/docs/github/常用传输协议和创建SSH公私钥',
      '/docs/github/local同步到GitHub'
    ],
    '/docs/css': [
      '/docs/css/css选择器和属性'
    ],
    '/docs/vscode': [
      '/docs/vscode/键盘快捷键',
      '/docs/vscode/鼠标快捷键'
    ],
    '/docs/npm': [
      '/docs/npm/npm配置本地环境',
      '/docs/npm/npm基础命令',
      '/docs/npm/个人资料管理',
      '/docs/npm/发布包',
      '/docs/npm/故障修复',
    ]
  },
}