module.exports = {
  title: ' 闷葫芦博客',
  description: '个人学习|备忘笔记|C#基础学习|前端进阶|Linux|github',
  themeConfig: {
    nav: [
      { text: 'C语言体系', link: '/net/1.类的构造和特性' },
      { text: 'github理解', link: '/github/1.git目录解析' },
      {
        text: '前端进阶', items: [
          { text: 'css样式', link: '/css/1.css选择器和属性' },
          {
            text: '开发利器', items: [
              {
                text: 'vscode', link: '/vscode/1.键盘快捷键'
              },
              {
                text: 'npm', link: '/nodejs/1.npm配置本地环境'
              }
            ]
          },
        ]
      },
    ],
    displayAllHeaders: true,
    sidebar: {
      '/net': [
        '/net/1.类的构造和特性',
        '/net/2.类型转换(值类型，引用类型）'
      ],
      '/github': [
        '/github/1.git目录解析',
        '/github/2.git存储结构',
      ],
      '/css': [
        '/css/1.css选择器和属性'
      ],

    },
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',

    markdown: {
      lineNumbers: true,
      anchor: {
        permalink: true
      },
      // markdown-it-toc 的选项
      toc: {
        includeLevel: [1, 2, 3]
      },
    },

    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}