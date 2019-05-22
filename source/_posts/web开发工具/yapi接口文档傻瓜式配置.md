---
title: yapi接口文档傻瓜式配置
data: 2019-5-21
tags: web工具
categories: web工具
---

##### 1.可视化部署[推荐]
```
npm install -g yapi-cli --registry https://registry.npm.taobao.org
yapi server
```
打开本地127.0.0.1或者192.168.0.xxx


##### 2.安装MongoDB数据库，一路默认

##### 3.配置生成路径端口

##### 4.成功
1. 初始化管理员账号成功,账号名："admin@admin.com"，密码："ymfe.org"部署成功，
1. 请切换到部署目录，输入： "node vendors/server/app.js" 指令启动服务器,
1. 然后在浏览器打开 http://127.0.0.1:3000 