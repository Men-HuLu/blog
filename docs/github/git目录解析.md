---
title: git目录解析
date: "2019-4-1"
---

## 1.git的目录
- hook
- info
- logs
- objects
- refs
- COMMIT_EDITMSG
- config
- description
- gitk.cache
- HEAD
- index
- packed-refs



### 2.文件夹解析
```
cd .git  //进入.git文件
ls -al   //查列表
```
存储指向branch的最近一次commit对象的指针
1. hook:存放一些shell脚本
1. info:存放仓库的一些信息
1. logs:保存所有更新的引用记录
1. refs:

```
第一步：
cd refs

ls -al 
//可以看到列表heads,remotes和tags
total 4
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 ./
drwxr-xr-x 1 Hades 197121 0 2月   5 23:21 ../
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 heads/
drwxr-xr-x 1 Hades 197121 0 2月   5 22:57 remotes/
drwxr-xr-x 1 Hades 197121 0 2月   5 23:05 tags/

第二步:查看head
cd refs

cd heads

cat master
7035757e6b6884467aceb0700fcbb4b085c069f2

git cat-file -t 7035757e6b68 //查看树类型
commit

第三步:查看tags 用于大版本的标记如V1.4
cd refs

cd tags

cat master
7035757e6b6884467aceb0700fcbb4b085c069f2

git cat-file -t 3f8a960a28301 //查看树类型
tag

第四步:查看remotes //存储最近一次push到远程仓库的commit对象的哈希值
ls -al
total 0
drwxr-xr-x 1 Hades 197121 0 2月   5 22:57 ./
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 ../
drwxr-xr-x 1 Hades 197121 0 2月   5 22:57 origin/

cd orgin

ls -al

total 4
drwxr-xr-x 1 Hades 197121  0 2月   5 22:57 ./
drwxr-xr-x 1 Hades 197121  0 2月   5 22:57 ../
-rw-r--r-- 1 Hades 197121 41 2月   5 22:57 css
drwxr-xr-x 1 Hades 197121  0 2月   5 22:57 feature/
-rw-r--r-- 1 Hades 197121 32 2月   5 22:57 HEAD
-rw-r--r-- 1 Hades 197121 41 2月   5 22:57 master
-rw-r--r-- 1 Hades 197121 41 2月   5 22:57 temp

```

### objects:
```
cd objects

ls -al
total 12
drwxr-xr-x 1 Hades 197121 0 2月   5 23:05 ./
drwxr-xr-x 1 Hades 197121 0 2月   5 23:21 ../
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 00/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 0d/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 10/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 15/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 1a/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 1b/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 1e/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 21/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 info/
drwxr-xr-x 1 Hades 197121 0 2月   5 14:36 pack/

cd 1a   //选一个文件
ls -al
total 9
drwxr-xr-x 1 Hades 197121   0 2月   5 14:36 ./
drwxr-xr-x 1 Hades 197121   0 2月   5 23:05 ../
-r--r--r-- 1 Hades 197121 240 2月   5 14:36 87007f9df391fd1eb6fb7fd529db1789cb4caf

git cat-file -p 1a87007f9df391fd1eb //将文件名和哈希值组合
tree

git cat-file -t 1a87007f9df391fd1eb //查看树内容
100644 blob f189165b39f0b487fe0b1655cd6c31e8836292c4    0.txt
100644 blob a420cabf924b6247fa6c58759715322cd0e5d1f2    LICENSE
100644 blob 88089f54ee37e47694fb0b40d70df02ada0dc403    image.jpg
100644 blob c1c4091a2ad1d84f1de28256398a129a23ba2a4a    index.html
040000 tree d171c34fa5b687efe88587d4aab6784ad16a5bc5    js
100644 blob 1b215135940281fa5e952530aa0afadb93cc2d53    readme.md
040000 tree 4a27d52dbbf6a83ec9b7828faa100d66149cbd3d    styles

git cat-file -t c1c4091a2ad1d84f1d  //index
blob

git cat-file -p c1c4091a2ad1d84f1d  //可以在进一步的查看内容
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>stash修改</title>
</head>
<body>
<img src="image.jpg">
<div>参考项目信</div>
<img src="image.jpg">
<div>参考项目信</div>
</body>
</html>
```


### 文件解析

#### COMMIT_EDITMSG：最新提交的一次Commit Message，git系统不会用到，给用户一个参考

#### description：仓库的描述信息，主要给gitweb等git托管系统使用
#### index：暂存区（stage），一个二进制文件

#### FETCH_HEAD：是一个版本链接，指向着目前已经从远程仓库取下来的分支的末端版本

#### ORIG_HEAD:HEAD指针的前一个状态

#### HEAD:
映射到ref引用,当前正在使用的分支
```
cat HEAD //查看HEAD哈希值
7035757e6b6884467aceb0700fcbb4b085c069f2
```
当切换分支或提交新的commit,哈希值会发生变化

#### config:
git仓库配置文件
```
cat .git/config //查看git的配置
```

#### packed-refs:当ref文件过多时会打包到packed-refs