---
title: config配置命令
date: "2019-4-4"
---

##### 全局配置
```
git config --global user.name 'Men-HuLu'
git config --global user.email '15705850186@163.com'
```

##### 作用域

```
git config --local   //local只对某个仓库
git config --global  //global当前用户全局有效
git config --system  //系统所有登录用户有效

#显示当前的Git配置
git config --list --local  
git config --list --global 
git config --list --system 
```

