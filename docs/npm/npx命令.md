---
title: npx命令
date: "2020-4-28"
---

npx 在npm 5.2.0 是会引入
若无运行命令
```
npm install -g npx
```

#### 1.npx主要解决调用项目内部模块
```
npx eslint --init
```

```
node-modules/.bin/eslint --init
```

#### 2.避免全局安装模块

```
npx create-react-app my-react-app
```
#### 3.参数命令

--no-install
强制使用本地
```
$ npx --no-install http-server
```

--ignore-existing
强制使用网络
```
 npx --ignore-existing create-react-app my-react-app
```

-p
执行多条命令
```
npx -p lolcatjs -p cowsay [command]
```

-c
所有命令用npx解释
```
$ npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'
```


#### 3.npx 还可以执行 GitHub 上面的模块源码。

#### 安装包
```
npm install lodash
npm install lodash@版本号
```

参考文档:

[npx](http://www.ruanyifeng.com/blog/2019/02/npx.html)