---
title: help操作
date: "2019-4-3"
---


#### 要学会git,一是了解git原理,二是要学会git help学会不懂的时候查询

```
 git help
 git help -a        //git命令的帮助列表
 git help -g        //git概念的帮助列表
 git help --web log //网页查看log帮助文档
 
```

git help
```
//输入这个命令的时候git帮我们分了这么大致几类

项目的新建（创建一个工作区）
clone      Clone a repository into a new directory
init       Create an empty Git repository or reinitialize an existing one

当前工作区的操作
 add        Add file contents to the index
 mv         Move or rename a file, a directory, or a symlink
 reset      Reset current HEAD to the specified state
 rm         Remove files from the working tree and from the index

检查提交历史和状态
 bisect     Use binary search to find the commit that introduced a bug
 grep       Print lines matching a pattern
 log        Show commit logs
 show       Show various types of objects
 status     Show the working tree status
分支,标记和调整公共历史
branch     List, create, or delete branches
checkout    Switch branches or restore working tree files
commit     Record changes to the repository
diff       Show changes between commits, commit and working tree, etc
merge      Join two or more development histories together
rebase     Reapply commits on top of another base tip
tag        Create, list, delete or verify a tag object signed with GPG
远程操作（工作流）
fetch      Download objects and refs from another repository
pull       Fetch from and integrate with another repository or a local branch
push       Update remote refs along with associated objects
```

git help -a   git常用命令
```
   add                  Add file contents to the index
   am                   Apply a series of patches from a mailbox
   archive              Create an archive of files from a named tree
   bisect               Use binary search to find the commit that introduced a bug
   branch               List, create, or delete branches
   bundle               Move objects and refs by archive
   checkout             Switch branches or restore working tree files
   cherry-pick          Apply the changes introduced by some existing commits
   citool               Graphical alternative to git-commit
   clean                Remove untracked files from the working tree
   clone                Clone a repository into a new directory
   commit               Record changes to the repository
   describe             Give an object a human readable name based on an available ref
   diff                 Show changes between commits, commit and working tree, etc
   fetch                Download objects and refs from another repository
   format-patch         Prepare patches for e-mail submission
   gc                   Cleanup unnecessary files and optimize the local repository
   gitk                 The Git repository browser
   grep                 Print lines matching a pattern
   gui                  A portable graphical interface to Git
   init                 Create an empty Git repository or reinitialize an existing one
   log                  Show commit logs
   merge                Join two or more development histories together
   mv                   Move or rename a file, a directory, or a symlink
   notes                Add or inspect object notes
   pull                 Fetch from and integrate with another repository or a local branch
   push                 Update remote refs along with associated objects
   range-diff           Compare two commit ranges (e.g. two versions of a branch)
   rebase               Reapply commits on top of another base tip
   reset                Reset current HEAD to the specified state
   revert               Revert some existing commits
   rm                   Remove files from the working tree and from the index

```


git help -g    git指南
```
   attributes          Defining attributes per path
   cli                 Git command-line interface and conventions
   core-tutorial       A Git core tutorial for developers
   cvs-migration       Git for CVS users
   diffcore            Tweaking diff output
   everyday            A useful minimum set of commands for Everyday Git
   glossary            A Git Glossary
   hooks               Hooks used by Git
   ignore              Specifies intentionally untracked files to ignore
   modules             Defining submodule properties
   namespaces          Git namespaces
   repository-layout    Git Repository Layout
   revisions           Specifying revisions and ranges for Git
   tutorial            A tutorial introduction to Git
   tutorial-2          A tutorial introduction to Git: part two
   workflows           An overview of recommended workflows with Git

```

