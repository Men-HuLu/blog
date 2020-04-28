---
title: npm配置本地环境
date: "2019-6-4"
---

### 1. npm安装和版本更新
[node.js官网安装](https://nodejs.org/en/)
```
npm命令行界面（CLI）

//当前版本
npm -v
//更新最新版本
npm install npm@latest -g
//测试最新版本
npm install npm@next -g
```

### 2. npm全局配置

node.js安装,npm默认路径为==C:/Users[用户]/administrator[你的计算机名字]/AppData/Roaming/npm==
```
//查看配置
C:\Users\Yuminjun>npm -g bin
C:\Users\Yuminjun\AppData\Roaming\npm
```

- npm实际去找全局命令的目录：==C:/Users/[username]/.npmrc== 文件内容的prefix值
- npm包全局cache目录：C:/Users/[username]/.npmrc 文件内容的cache值
```
npm config set prefix D:/node/nodejs/node_global/ //全局包目录，就在node安装目录新建了个nodejs文件夹存放
npm config set cache D:/node/nodejs/node_cache/  //全局包缓存目录，就在node安装目录新建了个nodejs文件夹存放
```

### 3. npm初始化一个项目

```
npm init
npm init --yes
//默认初始化
```

配置:
```
name: the current directory name
version: always 1.0.0
description: info from the readme, or an empty string ""
main: always index.js
scripts: by default creates an empty test script
keywords: empty
author: empty
license: ISC
bugs: info from the current directory, if present
homepage: info from the current directory, if present
```

其他初始化
```
> npm set init.author.email "15705850186@163.com"
> npm set init.author.name "yuminjun"
> npm set init.license "MIT"

npm get init.license
npm delete init.license
```

依赖
```
"dependencies":您的应用程序在生产中需要这些包.
"devDependencies": 这些包只用于开发和测试.

添加到dependencies
//npm install <package_name> --save

添加到devDependencies
//npm install <package_name> --save-dev
```

### 4.配置查看命令

```
npm config ：管理配置文件
npm config set  <key>  <value>[-g|--global] 或 npm set  <key> <value>   [-g|--global] ：设置配置参数
npm config get  <key>或 npm get  <key> ：获取配置参数
npm config delete <key>：删除配置参数
npm config list ：列出配置参数
npm config edit ：直接编辑配置文件
npm config get prefix：获取全局安装包所在地址
```