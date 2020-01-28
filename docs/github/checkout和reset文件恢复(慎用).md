---
title: checkout和reset文件恢复(慎用)
date: "2019-4-12"
---


### 变工作区(工作区复原到暂存区)
```
git checkout -- 文件名
git checkout [commit] [file]        //恢复某个commit的指定文件到暂存区和工作区
git checkout .                      //恢复暂存区的所有文件到工作区
```

### 变暂存区(暂存区复原版本库)
```
复原到暂存区
git reset HEAD 将暂存区复原到HEAD
git reset --hard HEAD 将工作区和暂存区复原到HEAD

撤销提交
git reset [commit]（工作区不变）
git reset --hard [commit]

重置
git reset --keep [commit]           //重置当前HEAD为指定commit，但保持暂存区和工作区不变

新建一个commit，用来撤销指定commit
后者的所有变化都将被前者抵消，并且应用到当前分支
git revert [commit]
```

ps：要复原暂存区使用reset,要变工作区使用checkout

