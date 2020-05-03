---
title: npm源切换
date: "2020-4-28"
---

#### 1.安装nrm
```
npm i nrm -g
```

#### 2.查看已有源
```
nrm ls //查看已有的源

* npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

#### 3.切换已有源
```
nrm use <源名称> //切换到现有的源
```

#### 4.新增已有源
```
nrm use <源名称> //新增现有的源
```
