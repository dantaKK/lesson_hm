- git 有哪些命令？
  版本控制软件 多人协作，几个亿的项目 
  写项目？ 电脑坏了 保存代码的版本且安全，  团队间代码的协作
  git 帮我们在本地 管理代码版本， 远程仓库(分布式)
  常用操作， 自我代码管理和简单的协作
  -git init 初始化
  把代码加入仓库分三步 
  -git add . 
  -git commit -m "提交的信息"
  -git push origin main

  -git branch 分支
  -git checkout 分支名
  -git merge  合并分支


## 大厂需要的git 能力？
 - git 是必备技能
 - 高级技巧，考点
 - git 文档内置
   git help 常用的git 命令
   git help -a 列出所有的名单
   vi 编辑器  ：j k 上下翻页：q 退出
   git help add  深入了解某个命令
   你是如何了解git命令的作用和参数的？

## 代码仓库
   文件夹-> 开发目录（网站）-> 代码仓库()
   -好处
    项目代码的版本（version）git 关注的是代码的版本
    时光穿梭机 文件的任何版本 有时我们要回退 
   -git 仓库里存的是啥？
   文件？ 文件的版本（对）
   拿着相机一直拍
   .git 目录 就是 仓库
   git 相关的内容就放在。git 目录里
   -git config 配置 操作留下责任人， 多人协作的思想
   老板就知道谁提交的代码？
    git config --global user.name "你的名字"
    git config --global user.email "你的邮箱" 本地 远程 对比
    配置， --global 全局的 
-git status
 当前仓库的状态
 on branch main 主分支上 默认分支

 untracked file 未跟踪文件 还没用纳入版本管理 
 use commit 

添加到仓库是件比较严谨的事情
- git add file
 将文件的当然版本 先添加到暂存区
-git commit -m "添加了---"
  

- 为什么需要暂存区， 仓库 两个概念 ？
   - 后悔药
   - 分几次add , 然后一次性 commit
   如 去超市买东西（git add 多次），先挑全，再一次性付款(git commit)
-  git status 
   让我们了解当前仓库的状态

- git log 
 代码提交记录
  --oneline  一行显示
- 暂存区 仓库
  - 一次性多个文件多次加入暂存区， 后悔 ， 组成一个提交逻辑（任务）
  - 一次commit -m 要规范 讲清澈任务
  - 不要随便 提交commit ，围绕开发需求
   一个商务， 2-5次 commit
